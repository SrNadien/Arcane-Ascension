ServerEvents.recipes(nadien => {
  
  
  
  
  
  //eliminado
  nadien.remove({output: ['industrialforegoing:ether_gas', 'industrialforegoing:laser_drill', 'industrialforegoing:fluid_laser_base', "industrialforegoing:machine_frame_pity", "industrialforegoing:machine_frame_advanced", "industrialforegoing:machine_frame_supreme"] })
  nadien.remove({id: 'industrialforegoing:ore_laser_base'})

//machine frame basic
nadien.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, 'minecraft:redstone_block', 'create:andesite_casing')




//apatite ore
nadien.custom({
"type": "industrialforegoing:laser_drill_ore",
"catalyst": {
  "item": "industrialforegoing:laser_lens3"
},
"output": {
  "item": "thermal:apatite_ore"
},
"pointer": 0,
"rarity": [
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 16,
    "depth_min": 5,
    "weight": 28,
    "whitelist": {}
  },
  {
    "blacklist": {
      "type": "minecraft:worldgen/biome",
      "values": [
        "minecraft:the_end",
        "minecraft:the_void",
        "minecraft:small_end_islands",
        "minecraft:end_barrens",
        "minecraft:end_highlands",
        "minecraft:end_midlands"
      ]
    },
    "depth_max": 255,
    "depth_min": 0,
    "weight": 4,
    "whitelist": {}
  }
]
}).id('nadien_tweaks:srnaptite')




//gas ether
nadien.custom({
  "type": "create:mixing",
  "heatRequirement": "superheated",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": 'ultimate_utilities:nadienitefluid',
      "nbt": {}
    },
    {
      "amount": 1000,
      "fluid": "thermal:resin"
    }
  ],
  "results": [
    {
      "amount": 500,
      "fluid": "industrialforegoing:ether_gas"
    }
  ]
}).id('nadien_tweaks:gasether')


//laser ore base
nadien.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: 'kubejs:ingot_of_elevation',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/ore_laser_drill')

//laser fluid base
nadien.shaped('industrialforegoing:fluid_laser_base', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:flux_drill',
  O: 'kubejs:ingot_of_elevation',
  F: 'industrialforegoing:machine_frame_advanced',
  G: '#forge:gears/vibranium',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/fluid_laser_drill')


//laser fluid base
nadien.shaped('industrialforegoing:laser_drill', ['PTP','OFO','GRG'],{
  P: 'industrialforegoing:plastic',
  T: 'thermal:machine_speed_augment',
  O: 'minecraft:piston',
  F: 'industrialforegoing:machine_frame_advanced',
  G: 'thermal_extra:abyssal_gear',
  R: 'allthemodium:allthemodium_pickaxe'
}).id('nadien_tweaks:industrialforegoings/laser_drill')



//pity machineframe


//advanced machineframe
nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "item": "create:railway_casing"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:netherite_scrap"
    },
    {
      "item": "minecraft:netherite_scrap"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:gears/diamond"
    },
    {
      "tag": "forge:ingots/gold"
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_advanced"
  },
  "processingTime": 300
}).id('nadien_tweaks:advanced_machine_frame')


//supreme machine frame 
nadien.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "tag": "industrialforegoing:machine_frame/advanced"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "item": "minecraft:netherite_ingot"
    },
    {
      "tag": "forge:gems/diamond"
    },
    {
      "item": "create:refined_radiance_casing"
    },
    {
      "tag": "forge:gems/diamond"
    }
  ],
  "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:ether_gas\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_supreme"
  },
  "processingTime": 300
}).id('nadien_tweaks:supreme_machine_frame')






})