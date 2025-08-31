ServerEvents.recipes(nadien => {

  //universal navigator
  nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "       ",
    "  AAA  ",
    " ABCBA ",
    " ACDCA ",
    " ABCBA ",
    "  AAA  ",
    "       "
  ],
  "key": {
    "A": {
      "item": "avaritia:crystal_matrix_ingot"
    },
    "B": {
      "item": "allthecompressed:lapis_block_1x"
    },
    "C": {
      "item": "kubejs:universe_resistant_neutronium_heavy_plating"
    },
    "D": {
      "type": "forge:nbt",
      "item": "extendedcrafting:singularity",
      "count": 1,
      "nbt": "{Id:\"extendedcrafting:redstone\"}"
    }
  },
  "result": {
    "item": 'kubejs:universal_navigator',
    "count": 1
  }
}).id('nadien_tweaks:universal_navigator')


//micromoner t10
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "    A    ",
    "   AAA   ",
    "  AABAA  ",
    " AAACAAA ",
    "AADAAADAA",
    " AAAEAAA ",
    " AAAAAAA ",
    " AAAAAAA ",
    "AA F F AA"
  ],
  "key": {
    "A": {
      "item": "kubejs:universe_resistant_neutronium_heavy_plating"
    },
    "B": {
      "item": "solarflux:sp_avaritia.neutronium"
    },
    "C": {
      "item": "kubejs:universal_navigator"
    },
    "D": {
      "item": "bhc:soul_heart_crystal"
    },
    "E": {
      "item": "allthemodium:piglich_heart"
    },
    "F": {
      "item": "kubejs:warp_engine"
    }
  },
  "result": {
    "item": 'kubejs:microminer_t10',
    "count": 1
  }
}).id('nadien_tweaks:microminer_t10')


//heart of universe
nadien.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 4,
  "pattern": [
    "         ",
    "         ",
    "         ",
    "         ",
    "    A    ",
    "         ",
    "         ",
    "         ",
    "         "
  ],
  "key": {
    "A": {
      "item": "kubejs:microminer_t10"
    }
  },
  "result": {
    "item": 'kubejs:heart_of_a_universe',
    "count": 1
  }
}).id('nadien_tweaks:heart_of_a_universe')


//singularity cointaiment unit
nadien.shaped('kubejs:singularity_containment_unit', [
  'AAA',
  'A A',
  'AAA'
], {
  A: 'advanced_ae:quantum_alloy_plate'
}).id('nadien_tweaks:singularity_containment_unit')


//contained singularity
nadien.shaped('kubejs:contained_singularity', [
  'AB ',
  '   ',
  '   '
], {
  A: 'kubejs:singularity_containment_unit',
  B: 'ae2:singularity'
}).id('nadien_tweaks:contained_singularity')


//neutroiun heavy plating
nadien.recipes.thermal.press('kubejs:universe_resistant_neutronium_heavy_plating', ['avaritia:neutron_ingot']).energy(2400).id('nadien_tweaks:universe_resistant_neutronium_heavy_plating')
nadien.recipes.create.pressing('kubejs:universe_resistant_neutronium_heavy_plating','avaritia:neutron_ingot').id('nadien_tweaks:universe_resistant_neutronium_heavy_plating_alt')
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'kubejs:universe_resistant_neutronium_heavy_plating',"count": 2},"input":{"item":'avaritia:neutron_ingot'},"energy":2400}).id('nadien_tweaks:universe_resistant_neutronium_heavy_plating_alt_alt')
  
//infinity heavy plating
nadien.recipes.thermal.press('kubejs:dimensionally_stabilized_infinity_heavy_plating', ['avaritia:infinity_ingot']).energy(2400).id('nadien_tweaks:dimensionally_stabilized_infinity_heavy_plating')
nadien.recipes.create.pressing('kubejs:dimensionally_stabilized_infinity_heavy_plating','avaritia:infinity_ingot').id('nadien_tweaks:dimensionally_stabilized_infinity_heavy_plating_alt')
nadien.custom({"type":"immersiveengineering:metal_press","mold":"immersiveengineering:mold_plate","result":{"item":'kubejs:dimensionally_stabilized_infinity_heavy_plating',"count": 1},"input":{"item":'avaritia:infinity_ingot'},"energy":2400}).id('nadien_tweaks:dimensionally_stabilized_infinity_heavy_plating_alt_alt')


 //primal mana
 nadien.shaped("4x kubejs:primal_mana", [
        "AAB",
        "DEB",
        "DCC"
    ], {
        A: "kubejs:aerotheum_dust",
        B: "kubejs:pyrotheum_dust",
        C: "kubejs:petrotheum_dust",
        D: "kubejs:cryotheum_dust",
        E: "#forge:dusts/diamond"
    }).noMirror().noShrink().id('nadien_tweaks:primal_mana')

    nadien.shaped("2x kubejs:aerotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blitz_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/saltpeter"
    }).noMirror().noShrink().id('nadien_tweaks:aerotheum_dust')

    nadien.shaped("2x kubejs:cryotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blizz_powder",
        B: "minecraft:redstone",
        C: "minecraft:snowball"
    }).noMirror().noShrink().id('nadien_tweaks:cryotheum_dust')

    nadien.shaped("2x kubejs:petrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:basalz_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/obsidian"
    }).noMirror().noShrink().id('nadien_tweaks:petrotheum_dust')

    nadien.shaped("2x kubejs:pyrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:blaze_powder",
        B: "minecraft:redstone",
        C: "#forge:dusts/sulfur"
    }).noMirror().noShrink().id('nadien_tweaks:pyrotheum_dust')


    //crafting base
     nadien.shaped('kubejs:crafting_base', [
        "AA ",
        "BB ",
        "   "
    ], {
        A: '#minecraft:planks',
        B: '#minecraft:logs',
    }).id('nadien_tweaks:craftingbase')


    //STEAMING RESTONIA CRYSTAL
    nadien.custom({"type":"mekanism:reaction","duration":400,"energyRequired":2000,"fluidInput":{"amount":200,"fluid":"mekanism:steam"},"gasInput":{"amount":100,"gas":"mekanismgenerators:fusion_fuel"},"gasOutput":{"amount":10,"gas":"mekanismgenerators:fusion_fuel"},"itemInput":{"ingredient":{"item":'actuallyadditions:empowered_restonia_crystal'}},"itemOutput":{"count":1,"item":'kubejs:steaming_restonia_crystal'}}).id('nadien_tweaks:stemingrestonia')


 //osmiridium 

 nadien.custom({"type":"immersiveengineering:arc_furnace","additives":[{"tag":"forge:ingots/zinc"}],"conditions":[{"type":"forge:not","value":{"type":"forge:tag_empty","item":'mekanism:ingot_osmium'}},{"type":"forge:not","value":{"type":"forge:tag_empty","tag":"forge:ingots/zinc"}}],"energy":51200,"input":{"item":'alltheores:iridium_ingot'},"results":[{"base_ingredient":{"item":'kubejs:osmiridiumingot'},"count":2}],"time":100}).id('nadientwekas:osmiridiumuno')

 nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 1,
      "ingredient": {
        "item": 'mekanism:ingot_osmium'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'alltheores:iridium_ingot'
      }
    }
  ],
  "result": {
    "item": 'kubejs:osmiridiumingot'
  }
}).id('nadientweaks:osmiridiumdos')

nadien.recipes.thermal.smelter('kubejs:osmiridiumingot', ['mekanism:ingot_osmium', 'alltheores:iridium_ingot']).energy(4800).id('nadientweaks:osmiridiumtres')

//osgoglas

 nadien.custom({
  "type": "immersiveengineering:arc_furnace",
  "results": [{
      "item": 'kubejs:osgloglasingot'
  }],
  "additives": [{
          "item": 'mekanism:ingot_refined_glowstone'
      },
      {
          "item": 'mekanism:ingot_refined_obsidian'
      }
  ],
  "input": {
      "item": 'mekanism:ingot_osmium'
  },
  "time": 720,
  "energy": 368640
}).id('nadientwekas:osgoglas')

 nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 1,
      "ingredient": {
        "item": 'mekanism:ingot_osmium'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'mekanism:ingot_refined_glowstone'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'mekanism:ingot_refined_obsidian'
      }
    }
  ],
  "result": {
    "item": 'kubejs:osgloglasingot'
  }
}).id('nadientweaks:osgoglasdos')

nadien.recipes.thermal.smelter('kubejs:osgloglasingot', ['mekanism:ingot_osmium', 'mekanism:ingot_refined_obsidian', 'mekanism:ingot_refined_glowstone']).energy(4800).id('nadientweaks:osgoglastres')

//dark ingot
nadien.recipes.thermal.smelter('kubejs:dark_ingot', ['thermal:tar', 'thermal:bitumen']).energy(4800).id('nadientweaks:darkingot')


//osmio energizado
  nadien.shaped('8x kubejs:energized_osmium_ingot', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'mekanism:ingot_osmium',
        B: 'immersiveengineering:biodiesel_bucket'
    }).id('nadien_tweaks:osmioenergizado')


  //certus energizado
    nadien.shaped('8x kubejs:energized_certus_quartz_crystal', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'ae2:certus_quartz_crystal',
        B: 'immersiveengineering:biodiesel_bucket'
    }).id('nadien_tweaks:certusenergizado')

    //energized dark ingot
    nadien.shaped('8x kubejs:energized_dark_ingot', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'kubejs:dark_ingot',
        B: 'immersiveengineering:biodiesel_bucket'
    }).id('nadien_tweaks:darkingotenergizado')



    //crystal bundle
    nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 1,
      "ingredient": {
        "item": 'mekanism:ingot_osmium'
      }
    },
    {
      "count": 3,
      "ingredient": {
        "item": 'kubejs:glod_crystal'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'actuallyadditions:empowered_emeradic_crystal'
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": 'actuallyadditions:empowered_diamatine_crystal'
      }
    }
  ],
  "result": {
    "item": 'kubejs:crystal_bundle',
    "count": 6
  }
}).id('nadientweaks:crystalbundle')

//cuero tratado
nadien.shaped('kubejs:treated_leather', [
        "AB ",
        "CD ",
        "   "
    ], {
        A: 'minecraft:leather',
        B: 'minecraft:water_bucket',
        C: 'minecraft:lime_dye',
        D: 'minecraft:flint'
    }).id('nadien_tweaks:cuerotratado')

    //cuero industrial
    nadien.recipes.immersiveengineeringArcFurnace(
    ['kubejs:industrial_leather'],           
    'kubejs:treated_leather',                
    ['totemic:buffalo_tooth', 'minecraft:netherite_scrap', 'compatdelight:glow_berry_lolipop', 'minecraft:sugar'] 
).id('nadien_tweaks:industrial_leather');


   //demon block
    nadien.shaped('kubejs:demon_block', [
        "AAA",
        "AAA",
        "AAA"
    ], {
        A: 'kubejs:demon_ingot'
    }).id('nadien_tweaks:demon_block')

    //deminic ingot
nadien.custom({
"type": "ae2:transform",
"circumstance": {
  "type": "fluid",
  "tag": "minecraft:lava"
},
"ingredients": [
  {
    "item": "minecraft:gold_ingot"
  }
],
"result": {
  "item": "kubejs:demon_ingot"
}
}).id('nadien_tweaks:demonic_ingot_recipe_port')


   nadien.shaped('9x kubejs:demon_ingot', [
        "A  ",
        "   ",
        "   "
    ], {
        A: 'kubejs:demon_block'
    }).id('nadien_tweaks:demonic_ingot_recipe_port_alt')


    //lunar reactivo
    nadien.recipes.create.mixing(['kubejs:lunar_reactive'],['rootsclassic:nightshade', Fluid.of('immersiveengineering:phenolic_resin', 1000)]).superheated().id('nadien_tweaks:lunar_reactive_recipe_port')


//osgolapis
nadien.recipes.immersiveengineeringArcFurnace(['kubejs:osglolapis'], 'minecraft:lapis_lazuli', ['kubejs:osgloglasingot'])
nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 1,
      "ingredient": {
        "item": "minecraft:lapis_lazuli"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "kubejs:osgloglasingot"
      }
    }
  ],
  "result": {
    "item": "kubejs:osglolapis",
    "count": 1
  }
}).id("nadientweaks:osglolapis");
nadien.recipes.thermal.smelter('kubejs:osglolapis',['minecraft:lapis_lazuli', 'kubejs:osgloglasingot']).energy(4800).id('nadien_tweaks:osglolapis');



//aleacion cosmica
  nadien.shaped('kubejs:cosmic_alloy', [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'kubejs:ingot_of_elevation'
    }).id('nadien_tweaks:cosmic_alloy')



    //chancla
    nadien.remove({output: 'ultimate_utilities:chancla'})
     nadien.shaped('ultimate_utilities:chancla', [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: 'botania:terrasteel_block',
        B: 'kubejs:ingot_of_elevation'
    }).id('nadien_tweaks:chancleta')
    
  //demonlord 
  nadien.recipes.immersiveengineeringArcFurnace(['kubejs:demonlord_ingot'], 'kubejs:lunar_reactive', ['kubejs:demon_ingot']);
  nadien.custom({
  "type": "enderio:alloy_smelting",
  "energy": 4800,
  "experience": 0.3,
  "inputs": [
    {
      "count": 1,
      "ingredient": {
        "item": "kubejs:lunar_reactive"
      }
    },
    {
      "count": 1,
      "ingredient": {
        "item": "kubejs:demon_ingot"
      }
    }
  ],
  "result": {
    "item": "kubejs:demonlord_ingot",
    "count": 1
  }
}).id("nadientweaks:demonlord_ingot");
nadien.recipes.thermal.smelter('kubejs:demonlord_ingot',['kubejs:lunar_reactive', 'kubejs:demon_ingot']).energy(6000).id('nadien_tweaks:demonlord_ingot');

nadien.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 1000000,
  "input": {
    "item": "actuallyadditions:solidified_experience"
  },
  "ingredients": [
    {
      "item": "kubejs:empowered_glod_crystal"
    },
    {
      "item": "actuallyadditions:empowered_diamatine_crystal"
    },
    {
      "item": "kubejs:empowered_glod_crystal"
    },
    {
      "item": "actuallyadditions:empowered_emeradic_crystal"
    },
    {
      "item": "kubejs:empowered_glod_crystal"
    },
    {
      "item": "kubejs:empowered_crystal_bundle"
    }
  ],
  "result": {
    "item": 'kubejs:ingot_of_elevation',
    "count": 16
  }
}).id('nadien_tweaks:elevatium_ingot_aalt')

//nutrient destilation
const items = ['minecraft:rotten_flesh', 'minecraft:apple', 'minecraft:mutton', 'minecraft:pumpkin_pie', 'minecraft:bread']
const craneos = ['minecraft:skeleton_skull', 'tconstruct:piglin_brute_head', 'minecraft:player_head', 'minecraft:zombie_head', 'minecraft:creeper_head', 'minecraft:piglin_head', 'minecraft:dragon_head', 'enderio:enderman_head', 'tconstruct:blaze_head', 'tconstruct:enderman_head', 'tconstruct:stray_head', 'tconstruct:husk_head', 'tconstruct:drowned_head', 'tconstruct:spider_head', 'tconstruct:cave_spider_head', 'tconstruct:zombified_piglin_head']
nadien.recipes.create.mixing([Fluid.of('enderio:nutrient_distillation', 100)],[items, 'minecraft:sugar']).superheated().id('nadien_tweaks:nutrient_destilation_recipe_port')
nadien.recipes.create.mixing([Fluid.of('enderio:nutrient_distillation', 100)],[craneos, 'minecraft:sugar']).superheated().id('nadien_tweaks:nutrient_destilation_recipe_port_alt')

})