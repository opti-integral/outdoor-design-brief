/* Generated from Studio13. Rebuild with docs/tools/build_mobile_catalog.cjs. */
(function(r){const data={
  "version": "1.1.0",
  "schema": "outdoor-mobile-brief/1",
  "catalog_revision": "13.0",
  "full_studio_schema": "outdoor-spatial-intake/15",
  "model_revision": "03",
  "sections": [
    {
      "id": "idea",
      "title": "The overall idea",
      "hint": "Name your idea and choose what matters most."
    },
    {
      "id": "space",
      "title": "Patio & cover",
      "hint": "Describe the space. Exact sizing can wait."
    },
    {
      "id": "cellar",
      "title": "Cellar & connections",
      "hint": "Choose the look and how the areas relate."
    },
    {
      "id": "activities",
      "title": "Activities & features",
      "hint": "Include the things you would actually use."
    },
    {
      "id": "materials",
      "title": "Materials & atmosphere",
      "hint": "Set a direction for finishes and lighting."
    },
    {
      "id": "review",
      "title": "Review & share",
      "hint": "Add your notes, then send the request."
    }
  ],
  "fields": [
    {
      "key": "family",
      "section": "idea",
      "label": "Starting direction",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "attached": "Attached covered lounge",
        "connected": "Connected rear & side spaces",
        "pavilion": "Freestanding pavilion"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "description": "Sets the main layout direction: a house-connected lounge, linked rear and side spaces, or a separate pavilion."
    },
    {
      "key": "priority",
      "section": "idea",
      "label": "Most important activity",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "lounge": "Relaxing together",
        "play": "Open play space",
        "cooking": "Cooking & entertaining",
        "dining": "Dining",
        "balanced": "A balanced mix"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "description": "Tells the designer which activity should receive the best space when the layout requires trade-offs."
    },
    {
      "key": "style",
      "label": "Overall style",
      "group": "finishes",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "modern_traditional": "Modern traditional",
        "classic": "Classic brick & stone",
        "fieldstone": "PA fieldstone lodge",
        "clean": "Clean pavers + stone accents",
        "courtyard": "English courtyard hardscape",
        "resort": "Contemporary resort",
        "practical": "Family-practical upgrade",
        "undecided": "Undecided — suggest directions"
      },
      "section": "idea",
      "default": "",
      "source": {
        "field": "style"
      },
      "description": "Guides the overall architectural character, materials and detailing. Individual finishes can still differ."
    },
    {
      "key": "reference",
      "section": "idea",
      "label": "Use an example as inspiration",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "fresh": "Start fresh",
        "study04": "04 · Timber lounge & fire circle",
        "study05": "05 · Screened lounge & activity court",
        "study06": "06 · Independent garden pavilion"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "hint": "This references the idea only. It does not copy its dimensions, furniture or layout.",
      "description": "Points to a previous example as inspiration for the design approach, without copying its plan."
    },
    {
      "key": "layout",
      "label": "Layout preference",
      "group": "layout",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "lounge": "Covered lounge + open patio",
        "linear": "Linear rear expansion",
        "two_nodes": "Lounge + separate fire node",
        "rear_side": "Rear + side connection",
        "courtyard": "Cellar courtyard study",
        "recommend": "Recommend a layout"
      },
      "section": "idea",
      "default": "",
      "source": {
        "field": "layout"
      },
      "advanced": true,
      "description": "Suggests how covered space, open terraces and activity areas should relate. It does not fix their positions."
    },
    {
      "key": "budget",
      "label": "Construction target",
      "group": "delivery",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "target": "$125k–$150k target",
        "stretch": "Consider up to $250k",
        "scope_first": "Compare scope before budget review"
      },
      "section": "idea",
      "default": "",
      "source": {
        "field": "budget"
      },
      "advanced": true,
      "description": "Sets a construction planning target for scope and material choices. These bands are not price estimates or quotes."
    },
    {
      "key": "phasing",
      "label": "Construction approach",
      "group": "delivery",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "phased": "Cellar walls first; patio may follow",
        "together": "Coordinated single project",
        "recommend": "Recommend phasing"
      },
      "section": "idea",
      "default": "",
      "source": {
        "field": "phasing"
      },
      "advanced": true,
      "description": "Indicates whether the design should be built together or divided into practical construction stages."
    },
    {
      "key": "patio_extent",
      "label": "Existing patio",
      "group": "layout",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "existing": "Keep its existing irregular footprint",
        "expand": "Explore an expanded patio",
        "recommend": "Recommend within our study area"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "patio_extent"
      },
      "description": "Controls whether the main patio keeps its current outline or can expand within the study area."
    },
    {
      "key": "terraces",
      "section": "space",
      "label": "Additional terraces",
      "type": "select",
      "options": {
        "0": "None",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "": "Undecided — propose"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "description": "Requests separate additional paved areas beyond the main patio. Locations and circulation will be proposed."
    },
    {
      "key": "terrace_shape",
      "section": "space",
      "label": "Additional terrace shape",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "rectangle": "Rectangular",
        "circle": "Circular",
        "mixed": "A mix of rectangular and circular"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "when": {
        "key": "terraces",
        "not": [
          "",
          "0"
        ]
      },
      "description": "Sets the shape direction for those additional paved areas; describe any differences between them in the notes."
    },
    {
      "key": "roof_type",
      "label": "Cover preference",
      "group": "cover",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "attached_low": "Attached low-slope solid roof",
        "attached_gable": "Attached gable study",
        "pavilion": "Freestanding solid-roof pavilion",
        "louvered": "Louvered system as an alternative",
        "pergola": "Open pergola as supplemental cover",
        "awning": "Retain awning as interim phase",
        "recommend": "Recommend a solid roof",
        "near_house": "Independent solid-roof frame near the house",
        "none": "No new cover in this study"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "roof_type"
      },
      "hint": "A permanent solid roof remains the overall project preference. Other choices are alternative or phased studies.",
      "description": "Sets the cover structure and whether it connects to the house. Window clearance, slope and supports still need a geometry review."
    },
    {
      "key": "screens",
      "label": "Mosquito protection",
      "group": "cover",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "open": "Open sides first",
        "retractable": "Retractable screens",
        "fixed": "Fixed screens with doors",
        "compare": "Compare open and screened"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "screens"
      },
      "when": {
        "key": "roof_type",
        "not": [
          "",
          "none",
          "pergola",
          "awning"
        ]
      },
      "description": "Controls mosquito screening around the covered space, including open sides and fixed or retractable systems."
    },
    {
      "key": "roof_material",
      "label": "Roof covering",
      "group": "cover",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "membrane": "Low-slope membrane",
        "metal": "Standing-seam metal",
        "shingle": "Shingles",
        "recommend": "Recommend system / pitch"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "roof_material"
      },
      "when": {
        "key": "roof_type",
        "in": [
          "attached_low",
          "attached_gable",
          "pavilion",
          "near_house",
          "recommend"
        ]
      },
      "advanced": true,
      "description": "Sets the visible exterior roof finish. Final slope, waterproofing and structural assembly remain to be resolved."
    },
    {
      "key": "ceiling",
      "label": "Underside / ceiling",
      "group": "cover",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "timber": "Warm timber boards",
        "painted": "Painted tongue and groove",
        "exposed": "Exposed structural members",
        "smooth": "Smooth finished ceiling",
        "recommend": "Recommend"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "ceiling"
      },
      "when": {
        "key": "roof_type",
        "in": [
          "attached_low",
          "attached_gable",
          "pavilion",
          "near_house",
          "recommend"
        ]
      },
      "advanced": true,
      "description": "Controls the underside of the roof as seen from the seating area, including finish and exposed structure."
    },
    {
      "key": "structure_finish",
      "label": "Posts / fascia finish",
      "group": "finishes",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "charcoal": "Charcoal metal appearance",
        "timber": "Natural timber appearance",
        "painted": "Painted traditional trim",
        "stone": "Stone-wrapped post bases",
        "recommend": "Recommend"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "structure_finish"
      },
      "when": {
        "key": "roof_type",
        "not": [
          "",
          "none",
          "pergola",
          "awning"
        ]
      },
      "advanced": true,
      "description": "Sets the look of posts, beams and exposed framing; it does not specify engineered member sizes."
    },
    {
      "key": "fan",
      "label": "Ceiling fan",
      "group": "lighting",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "None",
        "one": "One outdoor-rated fan",
        "compare": "Compare fan / no fan"
      },
      "section": "space",
      "default": "",
      "source": {
        "field": "fan"
      },
      "when": {
        "key": "roof_type",
        "not": [
          "",
          "none",
          "pergola",
          "awning"
        ]
      },
      "advanced": true,
      "description": "Requests air movement and ceiling-fan placement in the covered area. Clearance and electrical details follow the layout."
    },
    {
      "key": "patio_width_ft",
      "label": "Patio maximum width (ft)",
      "group": "geometry",
      "type": "number",
      "min": 1,
      "max": 100,
      "section": "space",
      "default": "",
      "source": {
        "field": "patio_width_ft"
      },
      "step": 0.5,
      "advanced": true,
      "hint": "Optional desired size in feet; a design request, not a new site measurement.",
      "description": "Requests the main patio width along the house, in feet. Leave blank to let the designer propose it."
    },
    {
      "key": "patio_depth_ft",
      "label": "Patio depth (ft)",
      "group": "geometry",
      "type": "number",
      "min": 1,
      "max": 100,
      "section": "space",
      "default": "",
      "source": {
        "field": "patio_depth_ft"
      },
      "step": 0.5,
      "advanced": true,
      "hint": "Optional desired size in feet; a design request, not a new site measurement.",
      "description": "Requests the main patio projection into the yard, in feet. It does not change the measured existing patio."
    },
    {
      "key": "roof_width_ft",
      "label": "Covered width (ft)",
      "group": "geometry",
      "type": "number",
      "min": 1,
      "max": 100,
      "section": "space",
      "default": "",
      "source": {
        "field": "roof_width_ft"
      },
      "step": 0.5,
      "advanced": true,
      "when": {
        "key": "roof_type",
        "not": [
          "",
          "none",
          "pergola",
          "awning"
        ]
      },
      "hint": "Optional desired size in feet; a design request, not a new site measurement.",
      "description": "Requests the covered span along the patio, in feet. Attachment and support locations will be checked afterward."
    },
    {
      "key": "roof_depth_ft",
      "label": "Covered depth (ft)",
      "group": "geometry",
      "type": "number",
      "min": 1,
      "max": 100,
      "section": "space",
      "default": "",
      "source": {
        "field": "roof_depth_ft"
      },
      "step": 0.5,
      "advanced": true,
      "when": {
        "key": "roof_type",
        "not": [
          "",
          "none",
          "pergola",
          "awning"
        ]
      },
      "hint": "Optional desired size in feet; a design request, not a new site measurement.",
      "description": "Requests how far the cover projects into the yard, in feet. This does not establish a feasible roof pitch or clearance."
    },
    {
      "key": "terrace_size",
      "section": "space",
      "label": "Additional terrace sizing",
      "type": "text",
      "options": {
        "": "Undecided — propose"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "when": {
        "key": "terraces",
        "not": [
          "",
          "0"
        ]
      },
      "hint": "For example: one circle about 15 ft across, plus a small grill terrace.",
      "description": "Describes desired sizes for extra terraces, such as a circle diameter or the dimensions of each separate area."
    },
    {
      "key": "placement",
      "section": "space",
      "label": "Preferred locations",
      "type": "text",
      "options": {
        "": "Undecided — propose"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "hint": "For example: lounge near the French doors; fire circle toward the lawn. Leave blank for a proposed layout.",
      "description": "Gives location preferences for the proposed layout. Exact coordinates and circulation are resolved in the detailed plan."
    },
    {
      "key": "connection",
      "label": "Relationship to cellar",
      "group": "layout",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "separate": "Keep separate",
        "path": "Connect with a path / steps",
        "partial": "Partially connected terrace",
        "integrated": "Integrated multi-level concept",
        "recommend": "Recommend after grade review"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "connection"
      },
      "description": "Sets how the rear patio and cellar area connect: separate spaces, a path, or a more integrated arrangement."
    },
    {
      "key": "wall_finish",
      "label": "Replacement cellar-wall appearance",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "segmental": "Textured segmental block",
        "veneer": "Concrete with natural-stone veneer",
        "concrete": "Architectural concrete",
        "fieldstone": "Fieldstone appearance; structure separate",
        "recommend": "Recommend"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "wall_finish"
      },
      "description": "Sets the visible finish of the replacement cellar walls. Structural design and drainage remain separate decisions."
    },
    {
      "key": "wall_cap",
      "label": "Cellar wall caps",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "stone": "Light cut/cast-stone caps",
        "matching": "Matching concrete caps",
        "bluestone": "Thermal bluestone caps",
        "recommend": "Recommend"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "wall_cap"
      },
      "description": "Sets the finish on top of the replacement cellar retaining walls, separate from the wall-face material."
    },
    {
      "key": "guard",
      "label": "Guard / rail appearance",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "vertical": "Slender black vertical pickets",
        "traditional": "Traditional metal rails",
        "cable": "Cable appearance study",
        "recommend": "Recommend",
        "none": "No railing on cellar walls · visual study"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "guard"
      },
      "description": "Sets the visual direction for guards around the cellar. A no-railing choice is a study request, not a code determination."
    },
    {
      "key": "stairs",
      "label": "Stair direction",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "current": "Retain current direction",
        "along_house": "Along the house",
        "from_patio": "Approach from rear patio",
        "compare": "Compare orientations"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "stairs"
      },
      "advanced": true,
      "description": "Sets whether the cellar stairs retain their current arrangement or need a different route or treatment."
    },
    {
      "key": "landing",
      "label": "Sunken landing extent",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "retain": "Preserve existing size",
        "study": "Only study enlargement if justified"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "landing"
      },
      "advanced": true,
      "description": "Sets the extent of change to the sunken landing while preserving basement-door access and one common floor level."
    },
    {
      "key": "drainage",
      "label": "Drainage scope",
      "group": "cellar",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "retain_verify": "Retain drain; verify outfall and capacity",
        "upgrade": "Explore upgraded channel drain",
        "downspouts": "Coordinate drain and roof downspouts",
        "recommend": "Recommend after elevation review"
      },
      "section": "cellar",
      "default": "",
      "source": {
        "field": "drainage"
      },
      "advanced": true,
      "description": "Requests drainage treatments around the cellar. Existing drainage must be retained or resolved; outfall and capacity are unverified."
    },
    {
      "key": "hedge",
      "section": "cellar",
      "label": "Existing hedge",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "keep": "Keep",
        "partial": "Remove part — describe below",
        "remove": "Remove within the study area"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "description": "Controls retention or removal of the existing hedge toward the cellar stairs. For partial removal, identify which section."
    },
    {
      "key": "beds",
      "section": "cellar",
      "label": "Existing garden beds",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "keep": "Keep",
        "overlap": "Remove where new paving overlaps",
        "partial": "Remove selected parts — describe below",
        "remove": "Remove within the study area"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "description": "Controls the existing garden-bed footprint where it meets the patio and cellar slope; new planting design remains outside scope."
    },
    {
      "key": "seating",
      "label": "Main lounge seating",
      "group": "lounge",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "sofa_chairs": "Sofa + two lounge chairs",
        "sectional": "Sectional",
        "two_sofas": "Two facing sofas",
        "modular": "Flexible modular seating",
        "recommend": "Recommend for four + guests",
        "none": "No lounge seating in this study"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "seating"
      },
      "description": "Sets the main lounge seating arrangement and how much space to reserve. Add preferred capacity, sizes or furniture styles below."
    },
    {
      "key": "tv",
      "label": "TV arrangement",
      "group": "lounge",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "side_panel": "Slatted side panel",
        "house": "House wall — review location",
        "pivot": "Pivoting / concealed TV",
        "projector": "Outdoor projector alternative",
        "none": "No TV"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "tv"
      },
      "description": "Requests an outdoor TV or screen arrangement and informs seating orientation, mounting and power needs."
    },
    {
      "key": "fire",
      "label": "Fire & gathering",
      "group": "lounge",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "gas_bowl": "Gas fire bowl",
        "gas_table": "Gas fire table",
        "wood": "Outdoor wood-burning fire pit (stone ring)",
        "fireplace": "Outdoor fireplace with a chimney",
        "none": "No fire feature",
        "compare": "Compare with and without"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "fire"
      },
      "description": "Sets the type of fire or gathering feature. Fuel, venting and clearances need review against the eventual product and location."
    },
    {
      "key": "cooking",
      "label": "Cooking",
      "group": "cooking",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "grill_prep": "Uncovered grill + prep counter",
        "grill_cart": "Movable grill cart",
        "full": "Kitchen with sink and fridge",
        "none": "No cooking station"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "cooking"
      },
      "description": "Sets the cooking-zone scope, from a movable grill to a larger kitchen with work surfaces and storage."
    },
    {
      "key": "dining",
      "label": "Dining",
      "group": "cooking",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "No dining area",
        "flex": "Flexible / folding table",
        "four": "Table for four",
        "six": "Table for six",
        "eight": "Table for eight or more",
        "bar": "Bar seating"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "dining"
      },
      "description": "Sets dining capacity and the type of eating space to accommodate after the higher-priority lounge and play areas."
    },
    {
      "key": "play",
      "label": "Play provision",
      "group": "play",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "lawn": "Flexible open lawn",
        "patio": "Open hardscape play area",
        "games": "Lawn-game strip",
        "trampoline": "Trampoline study",
        "putting": "Putting green",
        "recommend": "Recommend flexible space",
        "none": "No separate play area"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "play"
      },
      "description": "Sets the play or recreation space to preserve or add and informs open-area sizing and sightlines."
    },
    {
      "key": "storage",
      "label": "Storage",
      "group": "play",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "No added storage",
        "bench": "Storage bench",
        "cabinet": "Weatherproof cabinets",
        "integrated": "Integrated toy / cushion storage"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "storage"
      },
      "advanced": true,
      "description": "Requests storage for cushions, toys or outdoor equipment and reserves room for it in the layout."
    },
    {
      "key": "special_cooking",
      "label": "Additional cooking appliance",
      "group": "cooking",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "None",
        "pizza": "Pizza oven",
        "kamado": "Kamado",
        "both": "Pizza oven + kamado",
        "later": "Allow space for later"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "special_cooking"
      },
      "advanced": true,
      "when": {
        "key": "cooking",
        "not": [
          "none"
        ]
      },
      "description": "Adds an appliance beyond the main grill, affecting worktop space, ventilation and utility needs."
    },
    {
      "key": "cold_water",
      "label": "Sink / fridge",
      "group": "cooking",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "Neither",
        "fridge": "Outdoor fridge",
        "sink": "Sink",
        "both": "Sink & outdoor fridge",
        "roughins": "Future rough-ins only"
      },
      "section": "activities",
      "default": "",
      "source": {
        "field": "cold_water"
      },
      "advanced": true,
      "when": {
        "key": "cooking",
        "not": [
          "none"
        ]
      },
      "description": "Requests a sink, outdoor fridge or future utility rough-ins in the cooking area."
    },
    {
      "key": "fire_fuel",
      "section": "activities",
      "label": "Outdoor fireplace fuel",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "gas": "Gas",
        "wood": "Wood"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "when": {
        "key": "fire",
        "in": [
          "fireplace"
        ]
      },
      "description": "Sets the preferred fuel for the outdoor fireplace. Final product selection determines chimney, venting and clearances."
    },
    {
      "key": "activity_details",
      "section": "activities",
      "label": "Counts, sizes & locations",
      "type": "text",
      "options": {
        "": "Undecided — propose"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "hint": "For example: seating for six; two grills; a fire bowl near the cellar. Placement and clearances will be reviewed.",
      "description": "Adds quantities, capacities or rough locations that the activity selections alone cannot express."
    },
    {
      "key": "paving",
      "label": "Main patio surface",
      "group": "finishes",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "concrete": "Limestone-look concrete pavers",
        "porcelain": "Large-format porcelain",
        "bluestone": "Natural bluestone / flagstone",
        "brick": "Brick pavers",
        "stamped": "Stamped concrete",
        "recommend": "Recommend"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "paving"
      },
      "description": "Sets the main patio surface family, including its overall texture, appearance and joint character."
    },
    {
      "key": "paving_preset",
      "section": "materials",
      "label": "Color / material variation",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "concrete-warm": "Warm concrete",
        "concrete-charcoal": "Charcoal concrete",
        "porcelain-cream": "Limestone-look porcelain",
        "porcelain-gray": "Stone-gray porcelain",
        "bluestone-blue": "Blue-gray bluestone",
        "bluestone-full": "Full-color stone blend",
        "brick-red": "Red-brown paving brick",
        "brick-charcoal": "Charcoal paving brick"
      },
      "default": "",
      "source": {
        "catalog": "hardscape.presets",
        "mapping": "plan.hardscapeSurfaces.main.preset"
      },
      "advanced": true,
      "pavingDependent": true,
      "description": "Refines the selected paving family with a supported color or material example. Use notes for other variations."
    },
    {
      "key": "border",
      "label": "Main patio border",
      "group": "finishes",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "stone": "Cut-stone band",
        "brick": "Brick soldier course",
        "none": "Simple unbanded edge",
        "recommend": "Recommend"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "border"
      },
      "description": "Sets the edge treatment around the main patio, separate from the primary paving surface."
    },
    {
      "key": "pattern",
      "section": "materials",
      "label": "Paving pattern",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "running": "Running bond",
        "stack": "Stack bond",
        "herringbone": "Herringbone",
        "random": "Random / irregular study"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "description": "Sets how paving units are arranged. Patterns outside an existing material preset remain custom design requests."
    },
    {
      "key": "upholstery",
      "label": "Cushion fabric",
      "group": "lounge",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "ivory": "Ivory performance weave",
        "sage": "Muted sage weave",
        "ink": "Ink blue weave"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "upholstery"
      },
      "advanced": true,
      "when": {
        "key": "seating",
        "not": [
          "none"
        ]
      },
      "description": "Sets the color direction for lounge cushions and upholstered furniture surfaces."
    },
    {
      "key": "lighting",
      "label": "Lighting direction",
      "group": "lighting",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "recessed": "Recessed canopy lighting",
        "mixed": "Canopy plus wall / step lighting",
        "cafe": "Café string lights and sconces",
        "subtle": "Subtle indirect lighting",
        "none": "No additional lighting in this study"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "lighting"
      },
      "description": "Sets the types of installed lighting to include, such as ceiling, wall, step or string lights."
    },
    {
      "key": "audio",
      "label": "Outdoor audio",
      "group": "lighting",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "none": "None",
        "speakers": "Discreet weatherproof speakers",
        "roughins": "Future wiring only"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "audio"
      },
      "advanced": true,
      "description": "Requests outdoor audio equipment and helps reserve mounting locations and electrical connections."
    },
    {
      "key": "light",
      "label": "Render lighting",
      "group": "delivery",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "day": "Same daylight as baseline",
        "golden": "Golden hour additional view",
        "dusk": "Dusk with lighting additional view",
        "both": "Daylight + dusk"
      },
      "section": "materials",
      "default": "",
      "source": {
        "field": "light"
      },
      "advanced": true,
      "description": "Controls the time-of-day and lighting mood of the comparison images, rather than the fixtures being installed."
    },
    {
      "key": "extra_views",
      "section": "materials",
      "label": "Additional render detail",
      "type": "select",
      "options": {
        "": "Undecided — propose",
        "lounge": "Seated lounge view",
        "roof": "Roof / detail section",
        "both": "Both"
      },
      "default": "",
      "source": {
        "mobile_only": true
      },
      "advanced": true,
      "hint": "Rear, rear/east corner, plan and cellar/landing views are included in every request.",
      "description": "Requests detail images in addition to the standard rear, rear/east corner, plan and cellar views."
    }
  ],
  "baseline": {
    "revision": "03",
    "confirmed": [
      "Main rear facade 51 ft; main east side 34 ft. Backyard faces south; subject side faces east.",
      "Existing patio maximum 32 × 12 ft, irregular around the bay; approximately 29 ft straight house-facing edge; stops 6 ft before the east corner.",
      "Preserve all three arched windows; their sill is 10 ft 6 in above the existing patio.",
      "Bay attaches across 12 ft of house; 3 ft overlap with the patio envelope. Bay projection and facets remain photo estimates.",
      "Brick threshold 9 in above patio (replaces 10 in); door face recessed 8 in behind flush brick sill. French door 93 in high; bay east door 96 in high.",
      "Indoor-fireplace enclosure between French doors: 53 in wide, 14 in projection, 61 in high.",
      "Cellar landing clear width 12 ft 6 in. Both retaining walls are 12 ft long; south wall 5 ft 3 in and north wall 4 ft 3 in above the SAME landing floor.",
      "Cellar stairs: 4 ft width, 9 ft horizontal run, 5 ft total rise, 10 existing steps."
    ],
    "estimates": [
      "Survey-scaled patio-to-outer-wall gap approximately 18.5 ft; not a measured elevation or proof of a uniform gap.",
      "Survey-scaled rear/east corner to south cellar inside wall face approximately 6.5 ft.",
      "Aerial-estimated scope endpoint H = (48, 27) ft in model coordinates; not a surveyed boundary.",
      "Provisional cellar landing -7 ft and stair top -2 ft relative to patio; south/north wall tops -1.75/-2.75 ft. Exact ground contours and levels remain unverified.",
      "Other opening dimensions, bay projection, roof/eave/ridge levels and outer wall profile remain estimated. The reported lower-window sill/recess does not confirm every lower window."
    ],
    "constraints": [
      "Preserve corrected house geometry, basement doors and separate outer backyard retaining wall. The outer wall is effectively parallel within the study area.",
      "Replace the bowing cellar retaining walls entirely. Initially retain landing size and avoid substantial extra excavation; alternative requests require a separate review.",
      "The 10 ft 6 in arched sill is a roof constraint, not proof that a roof depth, pitch or attachment works. Resolve assembly thickness, spans, supports, vent interaction and drainage.",
      "No large trees within the project area. Garden bed turns at the patio edge; hedge follows the slope toward cellar stairs. Planting design is excluded; existing bed/hedge removal can be studied.",
      "Priorities: lounging, play, entertaining/grilling, then dining; family of four with young children plus guests. Typical wind west to east.",
      "Rear exterior power; gas and hose/water between existing patio end and east corner. Preserve cellar threshold drain; outfall/capacity unverified.",
      "Initial preference: attached solid roof with open sides; compare screens. Construction target $125k–$150k, possibly up to $250k; phasing possible. These are planning budgets, not quotes.",
      "Review roof, grades, retaining structures, drainage, guards, utilities and product-specific fire/grill clearances before construction. No product or code compliance is established by the request."
    ]
  },
  "presets": [
    {
      "id": "concrete-warm",
      "family": "concrete",
      "patterns": [
        "running",
        "stack"
      ]
    },
    {
      "id": "concrete-charcoal",
      "family": "concrete",
      "patterns": [
        "running",
        "stack"
      ]
    },
    {
      "id": "porcelain-cream",
      "family": "porcelain",
      "patterns": [
        "stack"
      ]
    },
    {
      "id": "porcelain-gray",
      "family": "porcelain",
      "patterns": [
        "stack",
        "running"
      ]
    },
    {
      "id": "bluestone-blue",
      "family": "bluestone",
      "patterns": [
        "running",
        "stack"
      ]
    },
    {
      "id": "bluestone-full",
      "family": "bluestone",
      "patterns": [
        "running",
        "stack"
      ]
    },
    {
      "id": "brick-red",
      "family": "brick",
      "patterns": [
        "running",
        "herringbone"
      ]
    },
    {
      "id": "brick-charcoal",
      "family": "brick",
      "patterns": [
        "running",
        "herringbone"
      ]
    }
  ],
  "source_hashes": {
    "core.js": "92976ad1cca5b90be20de2cdcffee7791aaec7a2dacffd0d99c86061e4f44a5e",
    "hardscape-data.json": "a5e4adba5c2ac96e383010ae0edf8be7352e1a17c7c970c697ad98e27e7d16f2"
  }
};if(typeof module!=="undefined"&&module.exports)module.exports=data;else r.MobileCatalog=data;})(typeof globalThis!=="undefined"?globalThis:this);
