//create By Srnadien
ServerEvents.recipes(nadien => {

   

   

  nadien.remove({output: ['create:deployer', 'create:mechanical_crafter', 'create:spout','create:andesite_alloy', 'create:andesite_casing', 'create:brass_casing', 'create:copper_casing', 'create:railway_casing',  'create:refined_radiance_casing']})
 
 
 //aleacion de andesita
 nadien.shaped('create:andesite_alloy', [
   'PA ',
   'AP ',
   '   '
 ], {
   P: 'allthecompressed:andesite_1x',
   A: 'kubejs:demon_ingot'
 }).id('nadien_tweaks:aleaciondeandesita')
  nadien.recipes.immersiveengineeringArcFurnace(['create:andesite_alloy'], 'minecraft:iron_ingot', ['allthecompressed:andesite_1x']).id('nadien_tweaks:andesite_alloy_alt')
  nadien.recipes.create.mixing('8x create:andesite_alloy', ['2x minecraft:iron_ingot', 'allthecompressed:andesite_1x']).id('nadien_tweaks:andesite_alloy_dos').superheated()
  nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 2,
      "ingredient": {
        "item": 'minecraft:iron_ingot'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'allthecompressed:andesite_1x'
      }
    }
  ],
  "result": {
    "item": 'create:andesite_alloy',
    "count": 8
  }
}).id('nadien_tweaks:andesite_alloy_tres')
nadien.recipes.thermal.smelter('8x create:andesite_alloy',['2x minecraft:iron_ingot', 'allthecompressed:andesite_1x']).energy(6000).id('nadien_tweaks:andesite_alloy_cuatro');
 


 nadien.recipes.create.mixing('create:andesite_alloy', ['2x minecraft:andesite', '2x minecraft:copper_ingot']).id('nadien_tweaks:andesite_alloy_aged').superheated()
 
 
  //andesita desde bloque
  nadien.shaped('9x create:andesite_alloy', [
    '   ',
    ' P ',
    '   '
  ], {
    P: 'create:andesite_alloy_block',
  }).id('nadien_tweaks:aleaciondeandesitablockingot')

//cuarzo rosa
nadien.shaped('9x create:polished_rose_quartz', [
   'P  ',
   '   ',
   '   '
 ], {
   P: 'create:rose_quartz_block',
 }).id('nadien_tweaks:rose_qurtz_polished_block')
 

 //surtidor
 nadien.shaped('create:spout', [
   ' P ',
   ' A ',
   '   '
 ], {
   P: 'create:andesite_casing',
   A: 'minecraft:dried_kelp'
 }).id('nadien_tweaks:spout')
 
 //ensamblador mecanico
 nadien.shaped('create:mechanical_crafter', [
   ' P ',
   ' A ',
   ' D '
 ], {
   P: 'create:electron_tube',
   A: 'create:andesite_casing',
   D: 'minecraft:crafting_table'
 }).id('nadien_tweaks:mechanical_crafter')
 
 
 
 })
 
 // Add missing ore crushing recipes for Create
 let missingCreateOres = [
     'aluminum',
     'lead',
     'nickel',
     'osmium',
     'platinum',
     'silver',
     'tin',
     'uranium',
 ]
 ServerEvents.recipes(nadien => {
     missingCreateOres.forEach(ore => {
        nadien.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('nadien_tweaks:smelting/' + ore + '_ingot_from_crushed')
        nadien.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('nadien_tweaks:blasting/' + ore + '_ingot_from_crushed')
        nadien.custom({
             type: 'create:splashing',
             ingredients: [
                 {
                     'item': 'create:crushed_raw_' + ore
                 }
             ],
             results: [
                 {
                     'count': 9,
                     'item': 'alltheores:' + ore + '_nugget'
                 }
             ]
         }).id('nadien_tweaks:splashing/crushed_raw_' + ore)
     })
 
       nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "B": {
             "tag": 'forge:plates/zinc'
           }
         },
         "pattern": [
           " A ",
           "BBB",
           " B "
         ],
         "result": {
           "item": 'kubejs:zinc_hand'
         },
         "show_notification": true
       }).id('nadien_tweaks:zinchand')
 
       
 
 
        nadien.custom({
         "type": "minecraft:crafting_shaped",
         "category": "misc",
         "key": {
           "B": {
             "item": "create:electron_tube"
           },
           "C": {
             "item": "create:andesite_casing"
           },
           "I": {
             "item": 'kubejs:zinc_hand'
           }
         },
         "pattern": [
           "B",
           "C",
           "I"
         ],
         "result": {
           "item": "create:deployer"
         },
         "show_notification": true
       }).id('nadien_tweaks:deployer')
 
 
 
       nadien.remove({output: 'createaddition:copper_wire'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:cut_copper"
         },
         "result": {
           "item": "createaddition:copper_wire",
           "count": 2
         }
       }).id('nadien_tweaks:copperwire')
 
    
       nadien.remove({output: 'createaddition:iron_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:raw_iron_block"
         },
         "result": {
           "item": 'createaddition:iron_rod',
           "count": 2
         }
       }).id('nadien_tweaks:ironbar')
 
 
       nadien.remove({output: 'createaddition:copper_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "create:copper_sheet"
         },
         "result": {
           "item": 'createaddition:copper_rod',
           "count": 2
         }
       }).id('nadien_tweaks:copperbar')
 
       nadien.remove({output: 'createaddition:gold_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": "minecraft:gold_ingot"
         },
         "result": {
           "item": 'createaddition:gold_rod',
           "count": 2
         }
       }).id('nadien_tweaks:goldbar')
 
 
       nadien.remove({output: 'createaddition:electrum_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'createaddition:electrum_ingot'
         },
         "result": {
           "item": 'createaddition:electrum_rod',
           "count": 2
         }
       }).id('nadien_tweaks:electrumbar')
 
 
       nadien.remove({output: 'createaddition:brass_rod'})
       nadien.custom({
         "type":"createaddition:rolling",
         "input": {
               "item": 'create:brass_ingot'
         },
         "result": {
           "item": 'createaddition:brass_rod',
           "count": 2
         }
       }).id('nadien_tweaks:brassbar')
 
 
 
       nadien.remove({output: 'createaddition:alternator'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " ISI ",
           "ISRSI",
           " ICI "
         ],
         "key": {
           "C": {
             "item": "createaddition:capacitor"
           },
           "I": {
             "tag": "forge:plates/iron"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           },
           "A": {
             "item": "create:andesite_alloy"
           }
         },
         "result": {
           "item": "createaddition:alternator"
         }
       }).id('nadien_tweaks:alternator')
 
 
       nadien.remove({output: 'createaddition:electric_motor'})
       nadien.custom({
         "type": "create:mechanical_crafting",
         "pattern": [
           "  A  ",
           " BSB ",
           "BSRSB",
           " BCB "
         ],
         "key": {
           "A": {
             "item": "create:andesite_alloy"
           },
           "C": {
             "item": "createaddition:capacitor"
           },
           "B": {
             "tag": "forge:plates/brass"
           },
           "R": {
             "item": "createaddition:iron_rod"
           },
           "S": {
             "item": "createaddition:copper_spool"
           }
         },
         "result": {
           "item": "createaddition:electric_motor"
         }
       }).id('nadien_tweaks:electricmotor')
 
       //radiant sheet
       nadien.recipes.create.mixing('create:radiant_sheet', '4x mekanism_extras:alloy_radiance').id('nadien_tweaks:radiant_sheet').superheated()
       
     //steam engine
      nadien.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/brass"
  },
  "transitionalItem": {
    "item": "create_sa:incomplete_steam_engine"
  },
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:propeller"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create_sa:incomplete_steam_engine"
        },
        {
          "item": "create:andesite_alloy"
        }
      ],
      "results": [
        {
          "item": "create_sa:incomplete_steam_engine"
        }
      ]
    }
  ],
  "results": [
    {
      "item": "create_sa:steam_engine",
      "chance": 120.0
    },
    {
      "item": "create:brass_sheet",
      "chance": 8.0
    },
    {
      "item": "create:andesite_alloy",
      "chance": 4.0
    }
  ],
  "loops": 3
}).id('nadien_tweaks:steam_engine_fixed')
   
 
 nadien.recipes.create.pressing('tfmg:nickel_sheet', '#forge:plates/nickel').id('nadien_tweaks:nickel_sheet_fixed')
    
 
 
 
 
 })
 