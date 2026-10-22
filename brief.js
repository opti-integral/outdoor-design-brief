(function(root){
 'use strict';
 const C=typeof module!=='undefined'&&module.exports?require('./catalog.js'):root.MobileCatalog;
 const clone=x=>JSON.parse(JSON.stringify(x));
 const plain=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
 const noteKeys=[...C.sections.map(s=>s.id),'designer'];
 function fresh(){return {name:'',author:'',fields:Object.fromEntries(C.fields.map(f=>[f.key,f.default])),notes:Object.fromEntries(noteKeys.map(k=>[k,''])),fieldNotes:Object.fromEntries(C.fields.map(f=>[f.key,'']))};}
 function keys(o,allowed,label){if(!plain(o)||Object.keys(o).some(k=>!allowed.includes(k)))throw Error('Unrecognized '+label+'. This file may need a newer version of the mobile form.');}
 function text(x,max,label){if(typeof x!=='string'||x.length>max)throw Error('Invalid '+label+'.');return x;}
 function validate(input){
  keys(input,['name','author','fields','notes','fieldNotes'],'form fields');
  const out=fresh();out.name=text(input.name,120,'scenario name');out.author=text(input.author,80,'author');
  keys(input.fields,C.fields.map(f=>f.key),'design selections');
  for(const f of C.fields){const v=input.fields[f.key];if(v===undefined)throw Error('Missing selection: '+f.label);
   if(f.type==='number'){if(v!==''&&(typeof v!=='number'||!Number.isFinite(v)||v<f.min||v>f.max))throw Error(f.label+' must be blank or between '+f.min+' and '+f.max+'.');}
   else if(f.type==='select'){if(typeof v!=='string'||!Object.hasOwn(f.options,v))throw Error('Unknown choice for '+f.label+'.');}
   else text(v,2000,f.label);
   out.fields[f.key]=v;
  }
  keys(input.notes,noteKeys,'notes');for(const k of noteKeys)out.notes[k]=text(input.notes[k],k==='review'?16000:k==='designer'?10000:4000,'notes');
  keys(input.fieldNotes,C.fields.map(f=>f.key),'selection notes');for(const f of C.fields)out.fieldNotes[f.key]=text(input.fieldNotes[f.key],2000,f.label+' customization');
  return out;
 }
 function migrate(input){
  if(!plain(input)||!Object.hasOwn(input,'homeowners'))return validate(input);
  keys(input,['name','author','homeowners','fields','notes'],'legacy form fields');
  keys(input.homeowners,['a','b'],'homeowner labels');for(const k of ['a','b'])text(input.homeowners[k],60,'homeowner label');
  const oldKeys=[...C.sections.map(s=>s.id),'a','b','mustKeep','avoid'];keys(input.notes,oldKeys,'legacy notes');for(const k of oldKeys)text(input.notes[k],4000,'legacy notes');
  const next=fresh();next.name=input.name;next.author=input.author;next.fields=input.fields;
  for(const s of C.sections)next.notes[s.id]=input.notes[s.id];
  next.notes.designer=['a','b'].filter(k=>input.notes[k].trim()).map(k=>(input.homeowners[k].trim()||'Homeowner '+k.toUpperCase())+' notes: '+input.notes[k]).join('\n\n');
  next.notes.review=[input.notes.review,input.notes.mustKeep?'Additional must-keep: '+input.notes.mustKeep:'',input.notes.avoid?'Things to avoid: '+input.notes.avoid:''].filter(Boolean).join('\n\n');
  return validate(next);
 }
 function visible(f,form){const w=f.when,v=w?form.fields[w.key]:null;if(w&&(w.in&&!w.in.includes(v)||w.not&&w.not.includes(v)))return false;
  if(f.pavingDependent&&!C.presets.some(p=>p.family===form.fields.paving))return false;return true;}
 function effective(f,form){if(!visible(f,form))return false;if(f.key==='paving_preset'&&form.fields[f.key])return C.presets.find(p=>p.id===form.fields[f.key])?.family===form.fields.paving;return true;}
 function options(f,form){if(!f.pavingDependent)return f.options;return Object.fromEntries(Object.entries(f.options).filter(([k])=>!k||C.presets.some(p=>p.id===k&&p.family===form.fields.paving)));}
 function label(f,v){return f.type==='select'?f.options[v]:String(v)+(f.type==='number'?' ft':'');}
 function notices(form){const v=form.fields,n=[];
  if(v.family==='attached'&&['pavilion','near_house'].includes(v.roof_type)||v.family==='pavilion'&&['attached_low','attached_gable'].includes(v.roof_type))n.push('The starting direction and roof choice differ. Please describe whether this is a comparison or which should govern.');
  if(['none','awning','pergola','louvered'].includes(v.roof_type))n.push('This cover choice is an alternative or interim study; the overall project brief still calls for a permanent solid roof.');
  if(v.roof_type==='attached_gable')n.push('An attached gable needs a separate roof geometry and window-clearance study.');
  if(v.guard==='none')n.push('No cellar wall railing is a visual-study request. Guard requirements and stair handrails still need review.');
  if(v.connection&&v.connection!=='separate'||v.landing==='study'||v.stairs&&v.stairs!=='current')n.push('The cellar connection / stair request requires elevation and access review. The common landing floor and existing basement doors remain the baseline.');
  if(v.fire&&v.fire!=='none')n.push('Fire placement, fuel, roof and furniture clearances remain unresolved until a product and layout are reviewed.');
  if(v.cooking==='full'&&v.cold_water&&v.cold_water!=='both')n.push('The full-kitchen choice includes sink and fridge, while the separate sink/fridge answer differs. Resolve this in the design review.');
  if(v.hedge==='partial'||v.beds==='partial')n.push('Describe which hedge / bed sections to remove in the cellar notes; the form has no placement map.');
  if(v.terraces&&v.terraces!=='0')n.push('Extra terraces are requested without exact positions. Shapes, sizes, circulation and overlap will be resolved in the detailed plan.');
  const preset=C.presets.find(p=>p.id===v.paving_preset);
  if(preset&&preset.family!==v.paving)n.push('The saved material variation belongs to a different paving family. It is excluded from the active request until changed or reselected.');
  if(preset&&preset.family===v.paving&&v.pattern&&!preset.patterns.includes(v.pattern))n.push('The requested paving pattern is outside this preset’s existing Blender patterns; retain it as a custom design request.');
  return n;
 }
 function request(input){const form=validate(input),selected=[],deferred=[],inactive=[];
  for(const f of C.fields){const v=form.fields[f.key],customization=form.fieldNotes[f.key].trim();if(!effective(f,form)){if(v!==''||customization)inactive.push({key:f.key,label:f.label,value:v,customization,reason:'Parent choice makes this inactive; retained only for editing.'});continue;}
   if(v===''){deferred.push({key:f.key,section:f.section,label:f.label,customization});continue;}
   selected.push({key:f.key,section:f.section,label:f.label,value:v,choice:label(f,v),customization,source:clone(f.source),status:f.type==='number'?'desired_dimension_not_measurement':'design_preference'});
  }
  return {kind:'design_brief_requires_layout_review',model_revision:C.model_revision,catalog_revision:C.catalog_revision,selection_count:selected.length,selections:selected,designer_to_propose:deferred,inactive_saved_choices:inactive,notes:clone(form.notes),review_flags:notices(form),standard_views:['rear','rear_east_corner','plan','cellar_landing'],placement_status:'Not specified. Resolve placement, dimensions and dependencies before creating a full Studio13 scenario. No geometry generated.',baseline:clone(C.baseline)};
 }
 function exported(form){form=validate(form);return {schema:C.schema,app_version:C.version,catalog_revision:C.catalog_revision,model_revision:C.model_revision,exported_at:new Date().toISOString(),form,request:request(form)};}
 function imported(source){const x=typeof source==='string'?JSON.parse(source):source;if(!plain(x))throw Error('Choose a mobile brief JSON file.');
  if(x.schema!==C.schema)throw Error(x.schema?.startsWith('outdoor-spatial')?'This is a full-studio scenario. Open it in Studio13; the mobile form only imports its own brief files.':'Unsupported file. Choose a JSON exported by this mobile brief form.');
  if(x.model_revision!==C.model_revision||x.catalog_revision!==C.catalog_revision)throw Error('This brief references another baseline or catalog. Keep the file for review; it has not replaced your draft.');
  // Derived request and embedded baseline are never trusted on import: regenerate from the installed catalog.
  return migrate(x.form);
 }
 function summary(input){const form=validate(input),r=request(form),lines=['OUTDOOR DESIGN REQUEST',form.name.trim()||'Untitled idea',form.author.trim()?'Prepared by: '+form.author.trim():'Prepared by: not specified','',
 'Create an editable 3D scenario from corrected baseline 03 using these preferences. Propose a workable layout where decisions are open. Preserve the same house geometry and disclose estimated geometry and unresolved levels.',''];
  for(const s of C.sections.filter(s=>s.id!=='review')){const rows=r.selections.filter(x=>x.section===s.id),open=r.designer_to_propose.filter(x=>x.section===s.id&&x.customization);if(!rows.length&&!open.length&&!form.notes[s.id].trim())continue;lines.push(s.title.toUpperCase());for(const row of rows){lines.push('- '+row.label+': '+row.choice);if(row.customization)lines.push('  Customization: '+row.customization);}for(const row of open)lines.push('- '+row.label+': undecided; custom direction: '+row.customization);if(form.notes[s.id].trim())lines.push('Section notes: '+form.notes[s.id].trim());lines.push('');}
  lines.push('DESIGNER NOTES',form.notes.designer.trim()||'No additional notes.','','OVERALL REQUEST / CUSTOM DETAILS',form.notes.review.trim()||'No additional requests.','','LAYOUT & REVIEW','Exact object positions, elevations and roof engineering are not specified by this form. Desired dimensions are requests, not measurements. Customizations are requests to interpret and resolve, not automatic model changes. Translate this brief into a reviewed full-studio scenario before rendering.');
  if(r.designer_to_propose.length)lines.push('Open decisions: '+r.designer_to_propose.map(x=>x.label).join('; ')+'.');
  if(r.inactive_saved_choices.length)lines.push('Excluded inactive choices (saved for later editing only): '+r.inactive_saved_choices.map(x=>x.label).join('; ')+'.');
  for(const n of r.review_flags)lines.push('- '+n);
  lines.push('','REQUESTED VIEWS','Matching rear, rear/east corner, plan and cellar/landing views, plus any selected additional views.','', 'CONFIRMED / HOMEOWNER-REPORTED BASELINE');C.baseline.confirmed.forEach(x=>lines.push('- '+x));
  lines.push('','ESTIMATES & UNRESOLVED LEVELS');C.baseline.estimates.forEach(x=>lines.push('- '+x));
  lines.push('','PRESERVE & RESOLVE');C.baseline.constraints.forEach(x=>lines.push('- '+x));return lines.join('\n');
 }
 function filename(form,suffix='.json'){return (form.name.trim()||'Outdoor-idea').normalize('NFKD').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-|-$/g,'').slice(0,80)||'Outdoor-idea';}
 const api={C,clone,fresh,validate,visible,effective,options,label,notices,request,exported,imported,summary,filename};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MobileBrief=api;
})(typeof globalThis!=='undefined'?globalThis:this);
