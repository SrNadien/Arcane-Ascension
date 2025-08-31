ServerEvents.recipes(nadien => {

       

  //eliminados
  nadien.remove({output:'aeinfinitybooster:infinity_card'})
  nadien.remove({output:'aeinfinitybooster:dimension_card'})
  nadien.remove({output:'ae2:tiny_tnt'})
  nadien.remove({output:'ae2:matter_cannon'})
  nadien.remove({output: 'ae2:inscriber'})


  //circuitos inscriber
   function circuito(resultado, arriba, medio, abajo) {
    nadien.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "bottom": {
      "item": arriba
    },
    "middle": {
      "item": medio
    },
    "top": {
      "item": abajo
    }
  },
  "mode": "press",
  "result": {
    "item": resultado
  }
   }).id(`nadien_tweaks:circuito/${resultado.replace(':', '/')}`)}

//example
// circuito(resultado, arriba, medio, abajo) 

 //procesadores 
   function procesador(output,medium, down) {
    nadien.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": medium
    },
    "top": {
      "item": down
    }
  },
  "mode": "inscribe",
  "result": {
    "item": output
  }
}).id(`nadien_tweaks:procesador/${output.replace(':', '/')}`)}
//example
//procesador(ouput,medium, down)



  //incompleted base
  nadien.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": 'kubejs:demon_ingot'
      },
      {
        "item": 'create:andesite_alloy_block'
      }
    ],
    "result": {
      "item": 'kubejs:incomplete_press'
    }
  }).id('galaxyorigenes:incompletecircuitbasic')


 //universal press
//  nadien.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
//   F: '#forge:ingots/sky_steel',
//   P: 'ae2:silicon_press',
//   C: 'ae2:calculation_processor_press',
//   S: 'kubejs:incomplete_press',
//   L: 'ae2:logic_processor_press',
//   E: 'ae2:engineering_processor_press'
// }).id('galaxyorigenes:universal_press_dos')

//perfecto ciernes
nadien.custom({
"type": "ae2:transform",
"circumstance": {
  "type": "fluid",
  "tag": "minecraft:water"
},
"ingredients": [
  {
    "item": "ae2:charged_certus_quartz_crystal"
  },
  {
    "item": "ae2:flawed_budding_quartz"
  }
],
"result": {
  "item": "ae2:flawless_budding_quartz"
}
}).id('galaxyorigenes:ciernesperfecto')



//incompleted base
nadien.custom({
  "type": "ae2:transform",
  "circumstance": {
    "type": "fluid",
    "tag": "minecraft:water"
  },
  "ingredients": [
    {
      "item": 'swplanets:light_saber_violet'
    },
    {
      "item": 'kubejs:copper_mechanism'
    }
  ],
  "result": {
    "item": 'kubejs:incomplete_press'
  }
}).id('galaxyorigenes:incompletecircuitbasic')


//infinity card booster

nadien.recipes.createMechanicalCrafting('2x aeinfinitybooster:infinity_card',
  [
   "AABAA",
   "CBDBC",
   "BDEDB",
   "CBDBC",
   "FFBFF"
 ],
 {
   A:  "minecraft:ender_eye",
   B:  "ae2:wireless_booster",
   C:  "minecraft:nether_star",
   D:  "extendedcrafting:ender_ingot",
   E:  'ultimate_utilities:patricio_estrella', 
   F:  "minecraft:netherite_ingot"
}).id('galaxyorigenes:infinitybooster')
  
  
  
  //infinity dimensional card
  nadien.recipes.createMechanicalCrafting('aeinfinitybooster:dimension_card',
    [
      "AABAA",
      "CBDBC",
      "BDEDB",
      "CBDBC",
      "FFBFF"
    ],
    {
      A:  "minecraft:ender_eye",
      B:  "aeinfinitybooster:infinity_card",
      C:  "extendedcrafting:ender_star",
      D:  "extendedcrafting:ender_ingot",
      E:  'ultimate_utilities:bob_toronja',
      F:  "minecraft:netherite_ingot"
    }).id('galaxyorigenes:dimensioncard')


//inscriber
nadien.shaped('ae2:inscriber', [
  'abn',
  'c n',
  'abn'
], {
  a: 'minecraft:netherite_ingot',
  b: 'minecraft:sticky_piston',
  c: 'kubejs:incomplete_press',
  n: 'kubejs:demon_ingot'
}).id('nadien_tweaks:inscriber')

//controlador
nadien.remove({output: 'ae2:controller'})
nadien.shaped('ae2:controller', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'ae2:smooth_sky_stone_block',
  b: 'ae2:engineering_processor',
  c: 'ae2:fluix_crystal',
  n: 'kubejs:energized_certus_quartz_crystal'
}).id('galaxyorigenes:controlador')

nadien.shaped('ae2:controller', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'ae2:smooth_sky_stone_block',
  b: 'ae2:engineering_processor',
  c: 'ae2:fluix_crystal',
  n: 'kubejs:energized_certus_quartz_crystal'
}).id('galaxyorigenes:controladordos')





//fluix glass cable
nadien.remove({output: 'ae2:fluix_glass_cable'})
nadien.shaped('6x ae2:fluix_glass_cable', [
  'aaa',
  'bbb',
  'aaa'
], {
  a: 'ae2:fluix_crystal',
  b: 'ae2:quartz_fiber'
}).id('galaxyorigenes:cable_fluix')

//metodology
procesador('kubejs:printed_methodolgy_circuit','kubejs:osmiridiumingot', 'kubejs:inscriber_methodology_press')
circuito('kubejs:methodology_processor', 'kubejs:printed_methodolgy_circuit', 'minecraft:redstone', 'ae2:printed_silicon') 


 //estimation
procesador('kubejs:printed_estimation_circuit','kubejs:osmiridiumingot', 'kubejs:inscriber_estimation_press')
circuito('kubejs:estimation_processor', 'kubejs:printed_estimation_circuit', 'minecraft:redstone', 'ae2:printed_silicon') 

//scheduling proccesor
procesador('kubejs:printed_scheduling_circuit','kubejs:osglolapis', 'kubejs:inscriber_scheduling_press')
circuito('kubejs:scheduling_processor', 'kubejs:printed_scheduling_circuit', 'minecraft:redstone', 'ae2:printed_silicon') 

// //clearence proccessor
procesador('kubejs:printed_clearance_circuit', 'kubejs:osglolapis', 'kubejs:inscriber_clearance_press')
circuito('kubejs:clearance_processor', 'kubejs:printed_clearance_circuit', 'minecraft:redstone', 'ae2:printed_silicon') 

//operation proccesssor
procesador('kubejs:printed_operation_circuit', 'tconstruct:cobalt_ingot', 'kubejs:inscriber_operation_press')
circuito('kubejs:operation_processor', 'kubejs:printed_operation_circuit', 'minecraft:redstone', 'ae2:printed_silicon')


    })


