ServerEvents.recipes(nadien => {
  nadien.remove({ id: 'gag:time_sand_pouch' })
  nadien.shaped('gag:time_sand_pouch', ['UFU', 'BCB', 'LBL'], {
    U: 'minecraft:netherite_ingot',
    L: 'kubejs:empowered_crystal_bundle',
    C: 'minecraft:nether_star',
    F: 'minecraft:nautilus_shell',
    B: 'kubejs:treated_leather'
  }).id('nadien_tweaks:temporalpouch')
})
