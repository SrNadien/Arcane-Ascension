//ironfurnaces By SrNadien 
ServerEvents.recipes(nadien => {



  //eliminadas
  nadien.remove({output:'ironfurnaces:iron_furnace'})
  nadien.remove({output:'ironfurnaces:gold_furnace'})
  nadien.remove({output:'ironfurnaces:diamond_furnace'})
  nadien.remove({output:'ironfurnaces:silver_furnace'})
  nadien.remove({output:'ironfurnaces:copper_furnace'})
  nadien.remove({output:'ironfurnaces:emerald_furnace'})
  nadien.remove({output:'ironfurnaces:netherite_furnace'})
  nadien.remove({output:'ironfurnaces:obsidian_furnace'})
  nadien.remove({output:'ironfurnaces:crystal_furnace'})
  nadien.remove({output:'ironfurnaces:allthemodium_furnace'})
  nadien.remove({output: 'ironfurnaces:vibranium_furnace'})
  nadien.remove({output: 'ironfurnaces:unobtainium_furnace'})
  nadien.remove({output:'ironfurnaces:upgrade_iron'})
  nadien.remove({output:'ironfurnaces:upgrade_gold'})
  nadien.remove({output:'ironfurnaces:upgrade_diamond'})
  nadien.remove({output:'ironfurnaces:upgrade_emerald'})
  nadien.remove({output:'ironfurnaces:upgrade_obsidian'})
  nadien.remove({output:'ironfurnaces:upgrade_crystal'})
  nadien.remove({ output: 'ironfurnaces:upgrade_netherite' })
  nadien.remove({ output: 'ironfurnaces:upgrade_copper' })
  nadien.remove({ output: 'ironfurnaces:upgrade_silver' })
  nadien.remove({ output: 'ironfurnaces:upgrade_obsidian2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_iron2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_gold2' })
  nadien.remove({ output: 'ironfurnaces:upgrade_silver2' })


//horno de hierro
nadien.shaped('ironfurnaces:iron_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'actuallyadditions:empowered_enori_crystal',
  b: 'thermal:machine_furnace'
}).id('nadien_tweaks:hornodehierro')



//horno de oro
nadien.shaped('ironfurnaces:gold_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'kubejs:empowered_glod_crystal',
  b: 'ironfurnaces:iron_furnace'
}).id('nadien_tweaks:hornodeoro')


//horno de diamante
nadien.shaped('ironfurnaces:diamond_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'actuallyadditions:empowered_diamatine_crystal',
  b: 'ironfurnaces:gold_furnace'
}).id('nadien_tweaks:hornodediamante')


//horno de plata
nadien.shaped('ironfurnaces:silver_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'alltheores:platinum_plate',
  b: 'ironfurnaces:diamond_furnace'
}).id('nadien_tweaks:hornodeplata')


//horno de cobre
nadien.shaped('ironfurnaces:copper_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'create:copper_sheet',
  b: 'ironfurnaces:silver_furnace'
}).id('nadien_tweaks:hornodecobre')


//horno de esmeralda
nadien.shaped('ironfurnaces:emerald_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'actuallyadditions:empowered_emeradic_crystal',
  b: 'ironfurnaces:diamond_furnace'
}).id('nadien_tweaks:hornodeesmeralda')



//horno de netherite
nadien.shaped('ironfurnaces:netherite_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'thermal:netherite_plate',
  b: 'ironfurnaces:emerald_furnace'
}).id('nadien_tweaks:hornodenetherite')


//horno de obsidiana
nadien.shaped('ironfurnaces:obsidian_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'enderio:reinforced_obsidian_block',
  b: 'ironfurnaces:netherite_furnace'
}).id('nadien_tweaks:hornodeobsidiana')

//horno de diamante con cristal
nadien.shaped('ironfurnaces:crystal_furnace', [
  'aba',
  'bcb',
  'aba'
], {
  a: 'actuallyadditions:empowered_diamatine_crystal',
  b: 'minecraft:cyan_stained_glass_pane',
  c: 'ironfurnaces:obsidian_furnace'
}).id('nadien_tweaks:hornodediamanteconcristal')

//horno de allthemium
nadien.shaped('ironfurnaces:allthemodium_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'allthemodium:allthemodium_plate',
  b: 'ironfurnaces:million_furnace'
}).id('nadien_tweaks:hornodemodio')


//horno de vibranio
nadien.shaped('ironfurnaces:vibranium_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'allthemodium:vibranium_plate',
  b: 'ironfurnaces:allthemodium_furnace'
}).id('nadien_tweaks:hornodevibranio')

//horno de unobtanio
nadien.shaped('ironfurnaces:unobtainium_furnace', [
  'aaa',
  'aba',
  'aaa'
], {
  a: 'allthemodium:unobtainium_plate',
  b: 'ironfurnaces:vibranium_furnace'
}).id('nadien_tweaks:hornodeunobtanio')


})