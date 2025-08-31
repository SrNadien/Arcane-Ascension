ServerEvents.recipes( nadien => {



   nadien.recipes.summoningrituals
    .altar('avaritia:eternal_singularity')
    .sacrifice('minecraft:warden')
    .input('ultimate_utilities:catalizador')
    .input('ultimate_utilities:planos')
    .input('ultimate_utilities:combustible_radiactivo')
    .input('ultimate_utilities:agujero_negro')
    .input('ultimate_utilities:brujula_maldita')
    .input('ultimate_utilities:semilla')
    .input('ultimate_utilities:alma_de_dragon')
    .input('ultimate_utilities:transmisor')
	.blockBelow('ultimate_utilities:nadienitebloque')
	.itemOutput('ultimate_utilities:estella_galactica')
	.recipeTime(60)
  .id('nadien_tweaks:estrella_galactica')
   

    //Black hole
   nadien.shaped('ultimate_utilities:agujero_negro', ["asd", "fgh", "jkl"], {
        a: "allthecompressed:oak_log_5x",
        s: "allthecompressed:iron_block_5x",
        d: "allthecompressed:dirt_5x",
        f: "allthecompressed:redstone_block_5x",
        g: "allthecompressed:cobblestone_6x",
        h: "allthecompressed:gold_block_5x",
        j: "allthecompressed:obsidian_5x",
        k: "allthecompressed:gravel_5x",
        l: "allthecompressed:sand_5x"
      }).id('nadien_tweaks:pulsating_black_hole')

  // Philosopher's Fuel
 nadien.shaped('ultimate_utilities:combustible_radiactivo', ['ACB', 'DEF', 'GHI'], {
    A: 'generatorgalore:ender_generator',
    B: 'ironfurnaces:million_furnace'  ,
    C: Item.of('rftoolsutility:syringe', '{level:10,mobId:"allthemodium:piglich",mobName:"allthemodium:piglich"}'),
    D: 'solarflux:sp_7',
    E: 'ars_nouveau:source_jar',
    F: 'ultimate_utilities:chancla',
    G: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
    H: 'allthemodium:unobtainium_allthemodium_alloy_block',
    I: 'enderio:sentient_ender'
    }).id('nadien_tweaks:philosophers_fuel')

  // Improbable Probability Device
 nadien.shaped('ultimate_utilities:planos', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanism:pellet_antimatter',
    B: 'enderio:vibrant_capacitor_bank',
    C: 'megacells:cell_component_16m',
    D: 'solarpanels:ultimate_hybrid_solar_panel',
    E: 'rftoolsutility:flight_module',
    F: Item.of('powah:battery_nitro', '{powah_tile_data:{energy_stored_main_energy:2000000000L}}').weakNBT(),
    G: Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"divinerpg:mysterious_man_layer_3"}}}}'),
    }).id('nadien_tweaks:improbable_probability_device')

    // Withers Compass
   nadien.shaped('ultimate_utilities:brujula_maldita', ['DCD', 'ABA', 'DED'], {
        A: 'generatorgalore:netherstar_generator',
        B: 'industrialforegoing:wither_builder',
        C: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:wither"}}').strongNBT(),
        D: 'thermal_more:mega_upgrade_augment',
        E: 'reliquary:witherless_rose'
      }).id('nadien_tweaks:withers_compass')

    // Nexium Emitter
   nadien.shaped('ultimate_utilities:transmisor', ['ASB', 'HCF', 'GED'], {
        A: 'powah:player_transmitter_nitro',
        B: Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,ex_pattern_access:1b,internalMaxPower:3200000.0d}'),
        S: 'aeinfinitybooster:dimension_card',
        H: 'avaritia:endest_pearl',
        F: 'mekanism:module_gravitational_modulating_unit',
        D: 'create:mechanical_arm',
        E: 'ae2:singularity',
        C: 'xnet:wireless_router',
        G: 'enchanted:mutandis_extremis'
      }).id('nadien_tweaks:nexium_emitter')

  // Dragon Soul
 nadien.shaped('ultimate_utilities:alma_de_dragon', ['CDA', 'XNY', 'BGE'], {
    C: 'forbidden_arcanus:arcane_dragon_egg',
    D: 'occultism:soul_gem',
    A: 'minecraft:dragon_egg',
    N: 'allthemodium:piglich_heart_block',
    B: 'forbidden_arcanus:draco_arcanus_scepter',
	  G: 'advanced_ae:recharging_card',
    E: 'ars_nouveau:summon_focus',
    X: 'angelring:energetic_angel_ring',
    Y: 'ironfurnaces:rainbow_core'
  }).id('nadien_tweaks:dragon_soul')

  // dimensional_seed
 nadien.shaped('ultimate_utilities:semilla', ['ABC', 'DEF', 'GHI'], {
    A: 'actuallyadditions:empowered_canola_seed',
    B: 'thermal_extra:dragonsteel_ingot',
    C: 'enchanted:belladonna_seeds',
    D: 'thermal_extra:twinite_ingot',
    E: 'thermalendergy:endergy_upgrade_3',
    F: 'thermal_extra:shellite_ingot',
    G: 'enchanted:snowbell_seeds',
    H: 'thermal_extra:soul_infused_ingot',
    I: 'enchanted:mandrake_seeds'
    }).id('nadien_tweaks:dimensional_seed')

  // Oblivion Shard
 nadien.shaped('ultimate_utilities:catalizador', ['DAB', 'ACA', 'BAE'], {
    A: 'enderio:octadic_capacitor',
    D: 'avaritia:end_crafting_table',
    E: 'megacells:cell_component_256m',
    C: 'mekanism_extras:infinite_induction_cell',
    B: 'ae2:quantum_entangled_singularity'
  }).id('nadien_tweaks:oblivion_shard')


})