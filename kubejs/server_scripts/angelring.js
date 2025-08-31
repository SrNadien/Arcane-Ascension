ServerEvents.recipes(nadien => {
  nadien.remove({id: 'angelring:diamond_ring'})
  nadien.shaped('angelring:diamond_ring', [
     'DND',
     'VEU',
     'DAD'
   ], {
     D: '#forge:storage_blocks/diamond',
     N:'kubejs:ingot_of_elevation',
     V:'kubejs:ingot_of_elevation',
     U:'kubejs:ingot_of_elevation',
     A:'kubejs:ingot_of_elevation',
     E: 'minecraft:elytra'
   }).id('nadien_tweaks:diamondring')
 nadien.remove({id: 'angelring:angel_ring'})
 nadien.recipes.extendedcrafting.shaped_table('angelring:angel_ring', [
        " ANA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: 'kubejs:cosmic_alloy',
        B: 'create_sa:netherite_jetpack_chestplate',
        C: Item.of('mekanism:jetpack_armored', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:24000L,gasName:"mekanism:hydrogen"}}]}}'),
        N: 'angelring:diamond_ring'
    }).id('nadien_tweaks:angelring')
  })