ServerEvents.recipes(nadien => {
   


//revestidor De Andesita
nadien.remove({output: 'create:andesite_casing'})
nadien.shaped('create:andesite_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'totemic:buffalo_tooth',
  b: 'minecraft:dripstone_block',
  c: 'create:andesite_alloy_block' 
}).id('nadien_tweaks:andesite_casing')
nadien.recipes.botania.terra_plate('create:andesite_casing', ['totemic:buffalo_tooth', 'minecraft:dripstone_block', 'create:andesite_alloy_block' ], 1600).id('nadien_tweaks:andesite_casing_alt')
nadien.recipes.createDeploying('create:andesite_casing',['minecraft:dripstone_block','totemic:buffalo_tooth']).id('nadien_tweaks:andesite_casing_deployer')

//revestidor de laton
nadien.remove({output: 'create:brass_casing'})
nadien.shaped('create:brass_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'experienceobelisk:cognitive_alloy',
  b: 'create:brass_ingot',
  c: 'create:andesite_casing'
}).id('nadien_tweaks:brass_casing')
nadien.recipes.botania.terra_plate('create:brass_casing', ['create:andesite_casing', 'create:brass_ingot', 'experienceobelisk:cognitive_alloy'], 9600).id('nadien_tweaks:brass_casing_alt')
nadien.recipes.createDeploying('create:brass_casing',['create:andesite_casing', 'create:brass_ingot']).id('nadien_tweaks:brass_casing_deployer')

//revestidor de cobre
nadien.remove({output: 'create:copper_casing'})
nadien.shaped('create:copper_casing', [
  'aba',
  'aca',
  'aba'
], {
  a: 'minecraft:copper_block',
  b: 'ultimate_utilities:patricio_estrella',
  c: 'create:brass_casing'
}).id('nadien_tweaks:copper_casing')
nadien.recipes.createDeploying('create:copper_casing', ['create:brass_casing', 'minecraft:copper_block']).id('nadien_tweaks:copper_casing_deployer')
nadien.recipes.botania.terra_plate('create:copper_casing', ['create:brass_casing', 'minecraft:copper_block', 'ultimate_utilities:patricio_estrella'], 9600).id('nadien_tweaks:copper_casing_alt')

//revestidor de tren
nadien.remove({output: 'create:railway_casing'})
nadien.shaped('create:railway_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'tinkers_thinking:ardite_ingot',
  b: 'create:sturdy_sheet',
  c: 'create:copper_casing'
}).id('nadien_tweaks:railway_casing')
nadien.recipes.createDeploying('create:railway_casing', ['create:copper_casing', 'create:sturdy_sheet']).id('nadien_tweaks:railway_casing_deployer')
nadien.recipes.botania.terra_plate('create:railway_casing', ['create:copper_casing', 'tinkers_thinking:ardite_ingot', 'create:sturdy_sheet'], 9600).id('nadien_tweaks:railway_casing_alt')

//revestidor radiante
nadien.remove({output: 'create:refined_radiance_casing'})
nadien.shaped('create:refined_radiance_casing', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'cataclysm:ignitium_ingot',
  b: 'createcasing:chorium_ingot',
  c: 'create:railway_casing'
}).id('nadien_tweaks:refined_radiance_casing')
nadien.recipes.createDeploying('create:refined_radiance_casing', ['create:railway_casing', 'createcasing:chorium_ingot']).id('nadien_tweaks:radiance_casing_deployer')
nadien.recipes.botania.terra_plate('create:refined_radiance_casing', ['create:railway_casing', 'createcasing:chorium_ingot', 'cataclysm:ignitium_ingot'], 9600).id('nadien_tweaks:radiance_casing_alt')

//machine frame
nadien.remove({output: 'thermal:machine_frame'})
nadien.shaped('thermal:machine_frame', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'evilcraft:dark_power_gem',
  b: 'create:sturdy_sheet',
  c: 'create:andesite_alloy_block',
  n: 'create:refined_radiance_casing'
}).id('nadien_tweaks:machine_frame')
nadien.recipes.createDeploying('thermal:machine_frame', ['create:refined_radiance_casing', 'evilcraft:dark_power_gem']).id('nadien_tweaks:machine_frame_deployer')
nadien.recipes.botania.terra_plate('thermal:machine_frame', ['create:refined_radiance_casing', 'create:andesite_alloy_block', 'create:sturdy_sheet', 'evilcraft:dark_power_gem'], 15600).id('nadien_tweaks:machine_frame_alt')

//carcasa de acero
nadien.remove({output: 'mekanism:steel_casing'})
let eosm = ['magitek_tweaks:energized_osmium_ingot', 'kubejs:energized_osmium_ingot']
nadien.shaped('mekanism:steel_casing', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'immersiveengineering:stick_steel',
  b: 'thermal:steel_plate',
  c: eosm,
  n: 'thermal:machine_frame'
}).id('nadien_tweaks:steel_casing')
nadien.recipes.createDeploying('mekanism:steel_casing', ['thermal:machine_frame', 'immersiveengineering:stick_steel']).id('nadien_tweaks:steel_casing_deployer')
nadien.recipes.botania.terra_plate('mekanism:steel_casing', ['thermal:machine_frame', 'kubejs:energized_osmium_ingot', 'thermal:steel_plate', 'immersiveengineering:stick_steel'], 15600).id('nadien_tweaks:steel_casing_alt')

//void chassis
nadien.remove({output: 'enderio:void_chassis'})
let osmiridium = ['magitek_tweaks:osmiridiumingot', 'kubejs:osmiridiumingot']
nadien.shaped('enderio:void_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: osmiridium,
  b: 'immersiveengineering:plate_duroplast',
  c: 'mekanism:steel_casing' 
}).id('nadien_tweaks:void_chassis')
nadien.recipes.createDeploying('enderio:void_chassis', ['mekanism:steel_casing', 'kubejs:osmiridiumingot']).id('nadien_tweaks:void_chassis_deployer')
nadien.recipes.botania.terra_plate('enderio:void_chassis', ['mekanism:steel_casing', 'immersiveengineering:plate_duroplast', 'kubejs:osmiridiumingot'], 15600).id('nadien_tweaks:void_chassis_alt')

//machine frame rftools
nadien.remove({output: 'rftoolsbase:machine_frame'})
nadien.shaped('rftoolsbase:machine_frame', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'actuallyadditions:empowered_emeradic_crystal',
  b: 'thermalendergy:stellarium_ingot',
  c: 'enderio:void_chassis'
}).id('nadien_tweaks:machine_frame_rftools')
nadien.recipes.createDeploying('rftoolsbase:machine_frame', ['enderio:void_chassis', 'thermalendergy:stellarium_ingot']).id('nadien_tweaks:achine_frame_rftools_deployer')
nadien.recipes.botania.terra_plate('rftoolsbase:machine_frame', ['enderio:void_chassis', 'thermalendergy:stellarium_ingot', 'actuallyadditions:empowered_emeradic_crystal'], 25600).id('nadien_tweaks:machine_frame_rftools_alt')

//ensouled chassis
nadien.remove({output: 'enderio:ensouled_chassis'})
let demon = ['magitek_tweaks:demonlord_ingot', 'kubejs:demonlord_ingot']
nadien.shaped('enderio:ensouled_chassis', [
  'aba',
  'bcb',
  'aba'
], {
  a: demon,
  b: 'enderio:end_steel_ingot',
  c: 'rftoolsbase:machine_frame' 
}).id('nadien_tweaks:ensouled_chassis')
nadien.recipes.createDeploying('enderio:ensouled_chassis', ['rftoolsbase:machine_frame', 'kubejs:demonlord_ingot']).id('nadien_tweaks:ensouled_chassis_deployer')
nadien.recipes.botania.terra_plate('enderio:ensouled_chassis', ['rftoolsbase:machine_frame', 'kubejs:demonlord_ingot', 'enderio:end_steel_ingot'], 25600).id('nadien_tweaks:ensouled_chassis_alt')

//iron cassing
nadien.remove({output: 'actuallyadditions:iron_casing'})
nadien.shaped('actuallyadditions:iron_casing', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'ultimate_utilities:nadienite_ingot',
  b: 'evilcraft:inverted_potentia_empowered',
  c: 'actuallyadditions:empowered_restonia_crystal',
  n: 'enderio:ensouled_chassis'
}).id('nadien_tweaks:iron_casing')
nadien.recipes.createDeploying('actuallyadditions:iron_casing', ['enderio:ensouled_chassis', 'ultimate_utilities:nadienite_ingot']).id('nadien_tweaks:iron_cassing_deployer')
nadien.recipes.botania.terra_plate('actuallyadditions:iron_casing', ['enderio:ensouled_chassis', 'ultimate_utilities:nadienite_ingot', 'actuallyadditions:empowered_restonia_crystal'], 26600).id('nadien_tweaks:iron_cassing_alt')


//lava factory cassing
nadien.remove({output: 'actuallyadditions:lava_factory_casing'})
nadien.shaped('actuallyadditions:lava_factory_casing', [
  'aba',
  'dcd',
  'aba'
], {
  a: 'extendedcrafting:enhanced_ender_ingot',
  b: 'ars_nouveau:source_gem',
  c: 'actuallyadditions:iron_casing',
  d: 'allthemodium:allthemodium_ingot'
}).id('nadien_tweaks:lava_factory_casing')
nadien.recipes.createDeploying('actuallyadditions:lava_factory_casing', ['actuallyadditions:iron_casing', 'allthemodium:allthemodium_ingot']).id('nadien_tweaks:lava_factory_cassing_deployer')
nadien.recipes.botania.terra_plate('actuallyadditions:lava_factory_casing', ['actuallyadditions:iron_casing', 'allthemodium:allthemodium_ingot', 'extendedcrafting:enhanced_ender_ingot'], 26600).id('nadien_tweaks:lava_factory_cassing_alt')

//ender cassing
nadien.remove({output: 'actuallyadditions:ender_casing'})
nadien.shaped('actuallyadditions:ender_casing', [
  'aca',
  'bnb',
  'aca'
], {
  a: 'enderio:reinforced_obsidian_block',
  b: 'actuallyadditions:empowered_emeradic_crystal',
  c: 'extendedcrafting:enhanced_ender_ingot',
  n: 'actuallyadditions:lava_factory_casing'
}).id('nadien_tweaks:ender_cassing')
nadien.recipes.createDeploying('actuallyadditions:ender_casing', ['actuallyadditions:lava_factory_casing', 'extendedcrafting:enhanced_ender_ingot']).id('nadien_tweaks:ender_casing_deployer')
nadien.recipes.botania.terra_plate('actuallyadditions:ender_casing', ['actuallyadditions:lava_factory_casing', 'extendedcrafting:enhanced_ender_ingot', 'enderio:reinforced_obsidian_block'], 25600).id('nadien_tweaks:ender_casing_alt')


//marco de maquina pqueño
nadien.remove({output: 'industrialforegoing:machine_frame_pity'})
nadien.shaped('industrialforegoing:machine_frame_pity', [
  'aba',
  'cnc',
  'aba'
], {
  a: 'mekanism_extras:alloy_radiance',
  b: 'extendedcrafting:enhanced_ender_ingot',
  c: 'actuallyadditions:empowered_emeradic_crystal',
  n: 'actuallyadditions:ender_casing'
}).id('nadien_tweaks:machine_frame_pity')
nadien.recipes.createDeploying('industrialforegoing:machine_frame_pity', ['extendedcrafting:enhanced_ender_ingot', 'mekanism_extras:alloy_radiance']).id('nadien_tweaks:pity_machine_frame_deployer')
nadien.recipes.botania.terra_plate('industrialforegoing:machine_frame_pity', ['extendedcrafting:enhanced_ender_ingot', 'actuallyadditions:ender_casing', 'mekanism_extras:alloy_radiance'], 26600).id('nadien_tweaks:pity_machine_frame_alt')



// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')


// //
// nadien.remove({output: ''})
// nadien.shaped(, [
//   'abn',
//   'c n',
//   'abn'
// ], {
//   a: ,
//   b: ,
//   c: ,
//   n: 
// }).id('nadien_tweaks:')



   
})