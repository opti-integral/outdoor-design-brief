/* Browser-only form. No submissions, analytics or external network requests. */
(()=>{'use strict';const B=MobileBrief,C=B.C,$=id=>document.getElementById(id);
 const storageKey='outdoor-mobile-brief.v1:'+location.pathname.replace(/(?:index\.html)?$/,'');
 let form=B.fresh(),timer,waitingWorker,offlineReady=false,resolveConfirmation;
 function ask(text){$('confirm-message').textContent=text;return new Promise(resolve=>{resolveConfirmation=resolve;$('confirm-dialog').showModal();});}
 function finishConfirmation(value){$('confirm-dialog').close();resolveConfirmation?.(value);resolveConfirmation=null;}
 $('confirm-cancel').addEventListener('click',()=>finishConfirmation(false));$('confirm-yes').addEventListener('click',()=>finishConfirmation(true));$('confirm-dialog').addEventListener('cancel',e=>{e.preventDefault();finishConfirmation(false);});
 function el(tag,attrs={},content){const x=document.createElement(tag);for(const [k,v]of Object.entries(attrs)){if(k==='class')x.className=v;else x.setAttribute(k,v);}if(content!==undefined)x.textContent=content;return x;}
 function message(t,error=false){$('message').textContent=t;$('message').className='message'+(error?' error':'');$('message').hidden=false;}
 function persist(){clearTimeout(timer);try{localStorage.setItem(storageKey,JSON.stringify(B.exported(form)));$('save-status').textContent='Draft saved on this device';return true;}catch(e){$('save-status').textContent='Draft not saved — '+(e.name==='QuotaExceededError'?'storage is full; download a backup':e.name==='SecurityError'?'browser storage unavailable':e.message);return false;}}
 function backup(){try{localStorage.setItem(storageKey+'.previous',JSON.stringify(B.exported(form)));}catch{}}
 function field(label,id,value,type='text',hint='',max=4000){const wrap=el('div',{class:'field'}),lab=el('label',{for:id},label),input=el(type==='textarea'?'textarea':'input',{id,name:id});if(type!=='textarea')input.type=type;input.maxLength=max;input.value=value;wrap.append(lab,input);if(hint){const h=el('small',{id:id+'-hint'},hint);input.setAttribute('aria-describedby',h.id);wrap.append(h);}return {wrap,input};}
 function textField(parent,label,id,value,assign,type='text',hint='',max=4000){const x=field(label,id,value,type,hint,max);x.input.addEventListener('input',()=>{assign(x.input.value);changed();});parent.append(x.wrap);return x.input;}
 function choices(f,host){const opts=B.options(f,form);host.replaceChildren();
  for(const [i,[value,label]] of Object.entries(opts).entries()){const id='f-'+f.key+'-'+i,card=el('label',{class:'option',for:id}),input=el('input',{type:'radio',id,name:f.key,value});input.checked=form.fields[f.key]===value;input.addEventListener('change',()=>{if(input.checked){form.fields[f.key]=value;changed();}});card.append(input,el('span',{},label));host.append(card);}
 }
 function selectionField(f){const wrap=el('fieldset',{class:'field selection',id:'wrap-'+f.key,'aria-describedby':'description-'+f.key});wrap.append(el('legend',{},f.label),el('p',{class:'description',id:'description-'+f.key},f.description));
  if(f.type==='select'){const list=el('div',{class:'options',id:'f-'+f.key});choices(f,list);wrap.append(list);}
  else{const input=el('input',{id:'f-'+f.key,name:f.key,type:f.type,'aria-label':f.label+' (optional)','aria-describedby':'description-'+f.key});input.value=form.fields[f.key];if(f.type==='number'){input.min=f.min;input.max=f.max;input.step='any';input.inputMode='decimal';}else input.maxLength=2000;input.addEventListener('input',()=>{form.fields[f.key]=f.type==='number'?(input.value===''?'':Number(input.value)):input.value;changed();});wrap.append(input);}
  if(f.hint)wrap.append(el('small',{},f.hint));
  const custom=el('details',{class:'customization',id:'custom-'+f.key}),sum=el('summary');sum.append(el('span',{},'Notes / additions / customizations'),el('span',{class:'note-status',id:'note-status-'+f.key}));custom.append(sum);
  const box=el('div',{class:'custom-body'});textField(box,'Custom details for '+f.label,'custom-note-'+f.key,form.fieldNotes[f.key],v=>form.fieldNotes[f.key]=v,'textarea','Optional: colors, sizes, patterns, another design, or anything to change about this choice.',2000);custom.append(box);if(form.fieldNotes[f.key].trim())custom.open=true;wrap.append(custom);return wrap;
 }
 function render(){const host=$('sections');host.replaceChildren();
  C.sections.forEach((s,i)=>{const section=el('details',{class:'section',id:s.id});if(i===0)section.open=true;const sum=el('summary');sum.append(el('span',{class:'number'},String(i+1)),el('span',{class:'title'},s.title),el('span',{class:'chevron','aria-hidden':'true'},'+'));section.append(sum);const body=el('div',{class:'body'});body.append(el('p',{class:'hint'},s.hint));section.append(body);host.append(section);
   if(s.id==='idea'){textField(body,'Name this idea','name',form.name,v=>form.name=v,'text','For example: Sunday lounge & fire circle',120);textField(body,'Your name (optional)','author',form.author,v=>form.author=v,'text','Helps identify who made this request.',80);}
   const extra=el('details',{class:'extra',id:s.id+'-extra'}),extraBody=el('div',{class:'body'});extra.append(el('summary',{},'Optional details'),extraBody);
   for(const f of C.fields.filter(f=>f.section===s.id))(f.advanced?extraBody:body).append(selectionField(f));
   if(extraBody.children.length)body.append(extra);
   if(s.id==='review')renderReview(body);else{const n=el('details',{class:'extra section-notes'}),box=el('div',{class:'body'});n.append(el('summary',{},'Notes for this whole section'),box);textField(box,'Section notes','note-'+s.id,form.notes[s.id],v=>form.notes[s.id]=v,'textarea','For requests that span several choices.');if(form.notes[s.id].trim())n.open=true;body.append(n);}
  });
  sync();
 }
 function renderReview(body){body.append(el('p',{},'Your request includes the corrected house, confirmed measurements and clearly labeled site estimates. Exact layout and unresolved details will be proposed before rendering.'));
  textField(body,'Designer notes','note-designer',form.notes.designer,v=>form.notes.designer=v,'textarea','Your design preferences, priorities or context for the person developing this idea.',10000);
  textField(body,'Overall request / custom details','note-review',form.notes.review,v=>form.notes.review=v,'textarea','Describe the overall result, must-keeps, things to avoid, or anything the selections do not cover.',16000);
  body.append(el('div',{id:'review-flags'}),el('p',{class:'pending',id:'inactive'}));
  const preview=field('Your generated request','preview','','textarea');preview.input.readOnly=true;preview.input.removeAttribute('maxlength');body.append(preview.wrap);
  const buttons=el('div',{class:'buttons'});for(const [id,label,fn]of [['download-json','Download JSON',downloadJSON],['share','Share request',share],['copy','Copy request',copy],['download-text','Download text',downloadText]]){const b=el('button',{id,type:'button',class:id==='download-json'?'primary':''},label);b.addEventListener('click',fn);buttons.append(b);}body.append(buttons);
  body.append(el('p',{class:'small'},'Send the JSON to your spouse, then relay it for a modeled scenario. Keep the JSON to reopen this brief. A website link alone does not include your choices.'));
 }
 function sync(){for(const f of C.fields){$('wrap-'+f.key).hidden=!B.visible(f,form);
   if(f.pavingDependent){const host=$('f-'+f.key),signature=JSON.stringify(B.options(f,form));if(host.dataset.options!==signature){choices(f,host);host.dataset.options=signature;}}
   if(f.type==='select')for(const input of $('f-'+f.key).querySelectorAll('input'))input.checked=input.value===form.fields[f.key];
   $('note-status-'+f.key).textContent=form.fieldNotes[f.key].trim()?'Added':'';
  }
  for(const s of C.sections){const e=$(s.id+'-extra');if(e)e.hidden=!C.fields.some(f=>f.section===s.id&&f.advanced&&B.visible(f,form));}
  try{const r=B.request(form);$('count').textContent=r.selection_count+' preference'+(r.selection_count===1?'':'s')+' chosen';$('preview').value=B.summary(form);const flags=$('review-flags');flags.replaceChildren();if(r.review_flags.length){flags.append(el('p',{},'Items to resolve in the design:'));const ul=el('ul',{class:'issues'});r.review_flags.forEach(n=>ul.append(el('li',{},n)));flags.append(ul);}
   $('inactive').textContent=r.inactive_saved_choices.length?'Saved but inactive: '+r.inactive_saved_choices.map(f=>f.label).join(', ')+'. These are excluded from the request; changing the parent choice can restore them.':'';
  }catch(e){$('preview').value='Please correct this before exporting: '+e.message;$('count').textContent='Check requested dimensions';}
 }
 function changed(){sync();$('save-status').textContent='Saving…';clearTimeout(timer);timer=setTimeout(persist,300);}
 function safe(fn){try{return fn();}catch(e){message(e.message,true);$('message').scrollIntoView({block:'center'});return null;}}
 function download(content,type,name){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=el('a',{href:url,download:name});document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
 function downloadJSON(){safe(()=>{const data=JSON.stringify(B.exported(form),null,2);download(data,'application/json',B.filename(form)+'.json');persist();message('JSON download requested. On a phone, find it in Downloads or Files and attach it when sharing.');});}
 function downloadText(){safe(()=>{download(B.summary(form),'text/plain',B.filename(form)+'.txt');message('Text download requested. Keep the JSON too if you want to reopen the selections.');});}
 async function copy(){const t=safe(()=>B.summary(form));if(t===null)return;try{await navigator.clipboard.writeText(t);message('Request copied. Paste it into a message or email.');}catch{$('preview').focus();$('preview').select();message('Select and copy the highlighted request, or use Download text.');}}
 async function share(){const x=safe(()=>({json:JSON.stringify(B.exported(form),null,2),text:B.summary(form)}));if(!x)return;
  try{const file=new File([x.json],B.filename(form)+'.json',{type:'application/json'});if(navigator.share&&navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:form.name||'Outdoor design idea'});message('Sharing completed.');}
   else if(navigator.share){await navigator.share({title:form.name||'Outdoor design idea',text:x.text});message('Text sharing completed. Download JSON as well to preserve the editable choices.');}
   else{message('This browser has no sharing menu. Use Download JSON and attach it, or Copy request.');}}
  catch(e){if(e.name!=='AbortError')message('Sharing was unavailable. Use Download JSON or Copy request.',true);}
 }
 $('review-button').addEventListener('click',()=>{sync();$('review').open=true;$('review').scrollIntoView({behavior:'smooth',block:'start'});$('review').querySelector('summary').focus();});
 $('form').addEventListener('submit',e=>{e.preventDefault();$('review-button').click();});
 $('import-button').addEventListener('click',()=>$('import-file').click());
 $('import-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>1000000)throw Error('This file is too large for a mobile brief (maximum 1 MB).');const next=B.imported(await file.text());if(!await ask('Open this mobile brief in place of your current draft? The current draft will be kept under Restore previous draft.'))return;backup();form=next;render();persist();message('Brief imported. The baseline and written request have been regenerated from this form’s current catalog.');}catch(err){message('Import stopped: '+err.message,true);}finally{e.target.value='';}});
 $('restore').addEventListener('click',async()=>{try{const saved=localStorage.getItem(storageKey+'.previous');if(!saved)throw Error('No previous draft is stored on this device yet.');const next=B.imported(saved);if(!await ask('Restore the previous draft? Your current draft will become the previous draft.'))return;backup();form=next;render();persist();message('Previous draft restored.');}catch(e){message(e.message,true);}});
 $('new-draft').addEventListener('click',async()=>{if(!await ask('Start a new idea? Your current draft will be kept under Restore previous draft. Download JSON first to keep a separate file.'))return;backup();form=B.fresh();render();persist();message('New idea started. Your earlier draft can be restored from Draft tools.');});
 try{const saved=localStorage.getItem(storageKey);if(saved)form=B.imported(saved);}catch(e){message('The saved draft could not be opened: '+e.message+' It has not been overwritten. You can import a backup or start a new idea.',true);}
 render();$('save-status').textContent='Ready · changes save on this device';
 for(const [key,title]of [['confirmed','Confirmed / homeowner-reported'],['estimates','Estimates & unresolved levels'],['constraints','Preserve & resolve']]){const ul=el('ul');C.baseline[key].forEach(t=>ul.append(el('li',{},t)));$('baseline').append(el('h3',{},title),ul);}
 function offlineStatus(){if(offlineReady)$('offline-status').textContent=navigator.onLine?'Ready offline on this device':'Offline · cached form available';else $('offline-status').textContent=navigator.onLine?'Online · offline copy not yet verified':'Offline copy not verified';}
 addEventListener('online',offlineStatus);addEventListener('offline',offlineStatus);
 addEventListener('pagehide',()=>{if(timer)persist();});
 if('serviceWorker'in navigator&&location.protocol!=='file:'){
  navigator.serviceWorker.addEventListener('message',e=>{if(e.data?.type==='OFFLINE_READY'&&e.data.version===C.version){offlineReady=e.data.ready;offlineStatus();}});
  let reloading=false; navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloading)location.reload();else navigator.serviceWorker.controller?.postMessage({type:'CHECK_READY'});});
  navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'}).then(reg=>{
   function offer(){if(reg.waiting){waitingWorker=reg.waiting;$('update-app').hidden=false;}}
   offer();reg.addEventListener('updatefound',()=>reg.installing?.addEventListener('statechange',offer));
   navigator.serviceWorker.ready.then(r=>{(navigator.serviceWorker.controller||r.active)?.postMessage({type:'CHECK_READY'});});
  }).catch(()=>{$('offline-status').textContent='Offline setup unavailable · use JSON backups';});
  $('update-app').addEventListener('click',()=>{if(persist()&&waitingWorker){reloading=true;waitingWorker.postMessage({type:'SKIP_WAITING'});}});
 }else $('offline-status').textContent='Offline setup needs the published HTTPS link';
})();
