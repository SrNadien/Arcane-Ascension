//Avaritia Por Srnadien Prohibido Su Uso Externo
ServerEvents.recipes( nadien => {


    //diamond lattice
  nadien.remove({output: 'avaritia:diamond_lattice' })
  nadien.shaped("avaritia:diamond_lattice", ["X X", " D ", "X X"], {
    X: {
      tag: "forge:gems/diamond",
    },
    D: {
      item: 'mekanism:dirty_netherite_scrap',
    },
  }).id('nadien_tweaks:latituddediamantes')

//casco infinito
nadien.remove({output: 'avaritia:infinity_chestplate'})
nadien.recipes.create.mechanical_crafting('avaritia:infinity_helmet', [
    "  AABAA  ",
    " ACDEDCA ",
    "AFFFGFFFA",
    "AFHFIFHFA",
    "AFFFGFFFA",
    " AFFJFFA ",
    " AFKLKFA ",
    "  AMNMA  ",
    "  AAAAA  "
], {
    A: 'allthecompressed:obsidian_1x',
    B: 'kubejs:heart_of_a_universe',
    C: 'bhc:soul_heart_crystal',
    D: 'mystical_extended_tier:ouranium_gemstone',
    E: 'extendedcrafting:ultimate_singularity',
    F: 'avaritia:neutron',
    G: 'apotheosis:mythic_material',
    H: 'mystical_extended_tier:infinity_crux',
    I: 'mekanism:mekasuit_helmet',
    J: 'ae2:singularity',
    K: 'thermal_extra:abyssal_machine_speed_augment',
    L: 'enderio:z_logic_controller',
    M: 'mystical_extended_tier:ouranium_ingot',
    N: 'allthemodium:piglich_heart'
}).id('nadien_tweaks:infinity_helmet')

//Pechera Cosmica
nadien.remove({output: 'avaritia:infinity_chestplate'})
nadien.recipes.create.mechanical_crafting('avaritia:infinity_chestplate', [
    "AAAA AAAA",
    "ABCDEDCBA",
    "AFFFGFFFA",
    "AFFFHFFFA",
    "AAFFHFFAA",
    " AIF FIA ",
    " AJKLKJA ",
    " ABMNMBA ",
    "  AAAAA  "
], {
    A: 'allthecompressed:obsidian_1x',
    B: 'extendedcrafting:ultimate_singularity',
    C: 'bhc:soul_heart_crystal',
    D: 'mystical_extended_tier:ouranium_gemstone',
    E: 'kubejs:heart_of_a_universe',
    F: 'avaritia:neutron',
    G: 'mekanism:mekasuit_bodyarmor',
    H: 'mystical_extended_tier:infinity_crux',
    I: 'apotheosis:mythic_material',
    J: 'ae2:singularity',
    K: 'thermal_extra:abyssal_machine_speed_augment',
    L: 'enderio:z_logic_controller',
    M: 'mystical_extended_tier:ouranium_ingot',
    N: 'allthemodium:piglich_heart'
}).id('nadien_tweaks:infinity_chestplate')

//Pantalones Infinitos
nadien.remove({output:'avaritia:infinity_chestplate'})
nadien.recipes.create.mechanical_crafting('avaritia:infinity_pants', [
    "AAAABAAAA",
    "ACDEFEDCA",
    "AGHIJIHGA",
    "AKLAAAKLA",
    "AMNA ANMA",
    "ALLA ALLA",
    "ALLA ALLA",
    "ALLA ALLA",
    "AAAA AAAA"
], {
    A: 'allthecompressed:obsidian_1x',
    B: 'kubejs:heart_of_a_universe',
    C: 'extendedcrafting:ultimate_singularity',
    D: 'mystical_extended_tier:ouranium_gemstone',
    E: 'enderio:z_logic_controller',
    F: 'mekanism:mekasuit_pants',
    G: 'mystical_extended_tier:ouranium_ingot',
    H: 'apotheosis:mythic_material',
    I: 'thermal_extra:abyssal_machine_speed_augment',
    J: 'allthemodium:piglich_heart',
    K: 'bhc:soul_heart_crystal',
    L: 'avaritia:neutron',
    M: 'mystical_extended_tier:infinity_crux',
    N: 'ae2:singularity'
}).id('nadien_tweaks:infinity_pants')


//botas infinitas
nadien.remove({output: 'avaritia:infinity_boots'})
nadien.recipes.create.mechanical_crafting('avaritia:infinity_boots', [
    "AAAA AAAA",
    "ABCACACBA",
    "ADEADAEDA",
    "AFGAHAGFA",
    "AIGAJAGIA",
    "AGGA AGGA",
    "AKLA ALKA",
    "AMNA ANMA",
    "AAAA AAAA"
], {
    A: 'allthecompressed:obsidian_1x',
    B: 'extendedcrafting:ultimate_singularity',
    C: 'mystical_extended_tier:ouranium_gemstone',
    D: 'enderio:z_logic_controller',
    E: 'thermal_extra:abyssal_machine_speed_augment',
    F: 'mystical_extended_tier:ouranium_ingot',
    G: 'avaritia:neutron',
    H: 'kubejs:heart_of_a_universe',
    I: 'bhc:soul_heart_crystal',
    J: 'mekanism:mekasuit_boots',
    K: 'ae2:singularity',
    L: 'apotheosis:mythic_material',
    M: 'mystical_extended_tier:infinity_crux',
    N: 'allthemodium:piglich_heart'
}).id('nadien_tweaks:infinity_boots')

//espada del cosmos
nadien.recipes.create.mechanical_crafting('avaritia:infinity_sword', [
    "      AAA",
    "     ABCA",
    "    ADEBA",
    " A AFGDA ",
    "AHAIEFA  ",
    " AJCIA   ",
    " AKJA    ",
    "ALAAHA   ",
    "AA  A    "
], {
    A: 'allthecompressed:obsidian_1x',
    B: 'mystical_extended_tier:ouranium_gemstone',
    C: 'allthemodium:piglich_heart',
    D: 'thermal_extra:abyssal_machine_speed_augment',
    E: 'mystical_extended_tier:infinity_crux',
    F: 'apotheosis:mythic_material',
    G: 'kubejs:heart_of_a_universe',
    H: 'ae2:singularity',
    I: 'mystical_extended_tier:ouranium_ingot',
    J: 'extendedcrafting:ultimate_singularity',
    K: 'mystical_extended_tier:ouranium_sword',
    L: 'mekanism:meka_tool'
}).id('nadien_tweaks:cosmos_sword')


//espada infinita 1
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinitysword_1', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:crystal_matrix',
          N: 'avaritia:neutron',
          X: 'avaritia:crystal_matrix'
        }).id('nadien_tweaks:infinitysworduno')


        //espada del cosmos (balanced)
      nadien.recipes.create.mechanical_crafting('ultimate_utilities:infinityswordbalanced', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutron_ingot',
          X: 'avaritia:infinity_catalyst'
        }).id('nadien_tweaks:cosmosswordbalanced')


        //skullfire

       nadien.recipes.create.mechanical_crafting('avaritia:blaze_sword', [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
        ], {
          B: 'minecraft:bone',
          D: 'minecraft:nether_star',
          I: 'avaritia:crystal_matrix_ingot',
          W: '#minecraft:logs',
          X: 'minecraft:blaze_powder'
        }).id('nadien_tweaks:blaze_sword')

       //arco multidisparo
       nadien.recipes.create.mechanical_crafting('avaritia:infinity_bow', [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
        ], {
          X: 'avaritia:infinity_catalyst',
          I: 'avaritia:infinity_ingot',
          W: 'minecraft:white_wool'
        }).id('nadien_tweaks:arco_de_los_dioses')

        //destructor de mundos
        nadien.remove({output: 'avaritia:infinity_pickaxe' })
         nadien.recipes.create.mechanical_crafting('avaritia:infinity_pickaxe', [
    " AAABAAA ",
    "AAAAAAAAA",
    "AA  C  AA",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    ",
    "    D    "
], {
    A: 'avaritia:infinity_ingot',
    B: 'kubejs:heart_of_a_universe',
    C: 'avaritia:crystal_matrix',
    D: 'avaritia:neutron'
}).id('nadien_tweaks:wold_breaker')




          //pala planetaria
          nadien.recipes.create.mechanical_crafting('avaritia:infinity_shovel', [
            "      III",
            "     IIXI",
            "      III",
            "     N I ",
            "    N    ",
            "   N     ",
            "  N      ",
            " N       ",
            "N        "
            ], {
              I: 'avaritia:infinity_ingot',
              N: 'avaritia:neutron_ingot',
              X: 'avaritia:infinity_catalyst'
            }).id('nadien_tweaks:palainfinita')

            //hacha de la naturaleza
            nadien.remove({output: 'avaritia:infinity_axe' })
            nadien.recipes.create.mechanical_crafting('avaritia:infinity_axe', [
              "   I   ",
              "  IIIII",
              "  IIXI ",
              "   IN  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  "
              ], {
                I: 'avaritia:infinity_ingot',
                N: 'avaritia:neutron_ingot',
                X: 'avaritia:infinity_catalyst'
              }).id('nadien_tweaks:hachainfinita')

              //azada del la tierra verde
              nadien.remove({output: 'avaritia:infinity_hoe' })
              nadien.recipes.create.mechanical_crafting('avaritia:infinity_hoe', [
                "     N ",
                "   IIII",
                "  IIIII",
                "  I  XI",
                "     N ",
                "     N ",
                "     N ",
                "     N ",
                "     N "
                ], {
                  I: 'avaritia:infinity_ingot',
                  N: 'avaritia:neutron_ingot',
                  X: 'avaritia:infinity_catalyst'
                }).id('nadien_tweaks:azadainfinita')


                //albondigas cosmicas
                nadien.remove({output: 'avaritia:cosmic_meatballs' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:cosmic_meatballs',
                  ["ABCDEFGHI", "JKLM     "],
                  {
                    A: {
                      item: "minecraft:porkchop",
                    },
                    B: {
                      item: "minecraft:beef",
                    },
                    C: {
                      item: "minecraft:mutton",
                    },
                    D: {
                      item: "minecraft:cod",
                    },
                    E: {
                      item: "minecraft:salmon",
                    },
                    F: {
                      item: "minecraft:tropical_fish",
                    },
                    G: {
                      item: "minecraft:pufferfish",
                    },
                    H: {
                      item: "minecraft:rabbit",
                    },
                    I: {
                      item: "minecraft:chicken",
                    },
                    J: {
                      item: "minecraft:rotten_flesh",
                    },
                    K: {
                      item: "minecraft:spider_eye",
                    },
                    L: {
                      item: "minecraft:egg",
                    },
                    M: {
                      item: "avaritia:neutron_nugget",
                    },
                  }).id('nadien_tweaks:cosmic_meatballs')

                //estofado ultimo
                nadien.remove({output: 'avaritia:ultimate_stew' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:ultimate_stew',
                  [
                    "ABCDEFGHI",
                    "JKLMOPQRS",
                    "TUVWXYZab",
                    "cdefghijk",
                    "lmnopqrst",
                    "uvwxyz123",
                    "45       ",
                  ],
                  {
                    A: {
                      item: "minecraft:apple",
                    },
                    B: {
                      item: "minecraft:golden_apple",
                    },
                    C: {
                      item: "minecraft:bread",
                    },
                    D: {
                      item: "minecraft:kelp",
                    },
                    E: {
                      item: "minecraft:cocoa_beans",
                    },
                    F: {
                      item: "minecraft:cake",
                    },
                    G: {
                      item: "minecraft:glistering_melon_slice",
                    },
                    H: {
                      item: "minecraft:carrot",
                    },
                    I: {
                      item: "minecraft:poisonous_potato",
                    },
                    J: {
                      item: "minecraft:chorus_fruit",
                    },
                    K: {
                      item: "minecraft:beetroot",
                    },
                    L: {
                      item: "minecraft:mushroom_stew",
                    },
                    M: {
                      item: "minecraft:honey_bottle",
                    },
                    O: {
                      item: "minecraft:sweet_berries",
                    },
                    P: {
                      item: "farmersdelight:apple_pie",
                    },
                    Q: {
                      item: "farmersdelight:sweet_berry_cheesecake",
                    },
                    R: {
                      item: "farmersdelight:chocolate_pie",
                    },
                    S: {
                      item: "farmersdelight:melon_popsicle",
                    },
                    T: {
                      item: "farmersdelight:fruit_salad",
                    },
                    U: {
                      item: "farmersdelight:mixed_salad",
                    },
                    V: {
                      item: "farmersdelight:nether_salad",
                    },
                    W: {
                      item: "farmersdelight:barbecue_stick",
                    },
                    X: {
                      item: "farmersdelight:egg_sandwich",
                    },
                    Y: {
                      item: "farmersdelight:chicken_sandwich",
                    },
                    Z: {
                      item: "farmersdelight:hamburger",
                    },
                    a: {
                      item: "farmersdelight:bacon_sandwich",
                    },
                    b: {
                      item: "farmersdelight:mutton_wrap",
                    },
                    c: {
                      item: "farmersdelight:dumplings",
                    },
                    d: {
                      item: "farmersdelight:stuffed_potato",
                    },
                    e: {
                      item: "farmersdelight:cabbage_rolls",
                    },
                    f: {
                      item: "farmersdelight:cooked_rice",
                    },
                    g: {
                      item: "farmersdelight:beef_stew",
                    },
                    h: {
                      item: "farmersdelight:chicken_soup",
                    },
                    i: {
                      item: "farmersdelight:vegetable_soup",
                    },
                    j: {
                      item: "farmersdelight:fish_stew",
                    },
                    k: {
                      item: "farmersdelight:fried_rice",
                    },
                    l: {
                      item: "farmersdelight:pumpkin_soup",
                    },
                    m: {
                      item: "farmersdelight:baked_cod_stew",
                    },
                    n: {
                      item: "farmersdelight:noodle_soup",
                    },
                    o: {
                      item: "farmersdelight:bacon_and_eggs",
                    },
                    p: {
                      item: "farmersdelight:pasta_with_meatballs",
                    },
                    q: {
                      item: "farmersdelight:pasta_with_mutton_chop",
                    },
                    r: {
                      item: "farmersdelight:roasted_mutton_chops",
                    },
                    s: {
                      item: "farmersdelight:vegetable_noodles",
                    },
                    t: {
                      item: "farmersdelight:steak_and_potatoes",
                    },
                    u: {
                      item: "farmersdelight:ratatouille",
                    },
                    v: {
                      item: "farmersdelight:salmon_roll",
                    },
                    w: {
                      item: "farmersdelight:stuffed_pumpkin_block",
                    },
                    x: {
                      item: "farmersdelight:roast_chicken_block",
                    },
                    y: {
                      item: "farmersdelight:grilled_salmon",
                    },
                    z: {
                      item: 'farmersdelight:sweet_berry_cheesecake_slice',
                    },
                    1: {
                      item: 'ultimate_utilities:cajita_feliz',
                    },
                    2: {
                      item: "create:blaze_cake",
                    },
                    3: {
                      item: "create:chocolate_glazed_berries",
                    },
                    4: {
                      item: "create:honeyed_apple",
                    },
                    5: {
                      item: "avaritia:neutron_nugget",
                    },
                  }).id('nadien_tweaks:estofado_ultimo')

                //perla destructora
                nadien.remove({output: 'avaritia:endest_pearl' })
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:endest_pearl',
                  [
                    "   AAA   ",
                    " AABBBAA ",
                    " ABBBBBA ",
                    "ABBBDBBBA",
                    "ABBDCDBBA",
                    "ABBBDBBBA",
                    " ABBBBBA ",
                    " AABBBAA ",
                    "   AAA   ",
                  ],
                  {
                    A: {
                      item: "minecraft:end_stone",
                    },
                    B: {
                      item: "minecraft:ender_pearl",
                    },
                    C: {
                      item: "minecraft:nether_star",
                    },
                    D: {
                      item: "avaritia:neutron_ingot",
                    },
                  }).id('nadien_tweaks:endest_pearl')

                //compresor
                nadien.recipes.createMechanicalCrafting(
                  'extendedcrafting:compressor',
                  [
                    "IIIHHHIII",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "RNN O NNR",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "IIIXIXIII",
                  ],
                  {
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    H: {
                      item: "minecraft:hopper",
                    },
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    O: {
                      item: "avaritia:neutronium_block",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                  }).id('nadien_tweaks:compresor')

                //colector de neutrones
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:neutron_collector',
                  [
                    "IIQQQQQII",
                    "I QQQQQ I",
                    "I  RRR  I",
                    "X RRRRR X",
                    "I RRXRR I",
                    "X RRRRR X",
                    "I  RRR  I",
                    "I       I",
                    "IIIXIXIII",
                  ],
                  {
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                    Q: {
                      tag: "forge:storage_blocks/quartz",
                    },
                  }).id('nadien_tweaks:neutron_collector')

                 //colector de neutrones Dense
                 nadien.recipes.createMechanicalCrafting(
                  'avaritia:dense_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }
                ).id('nadien_tweaks:neutroncollectordense')

                //colector de neutrones Denser
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:denser_neutron_collector',
                  [
                    "aaa",
                    "aga",
                    "aaa"
                  ],
                  {
                    a: {
                        "item": "avaritia:dense_neutron_collector",
                      },
                    g: {
                        "item": "avaritia:neutron_gear",
                    },

                  }).id('nadien_tweaks:neutroncollectordenser')

                //colector de neutrones Densest
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:densest_neutron_collector',
                  [
                    "CC     CC",
                    "C  BBB  C",
                    "  AAAAA  ",
                    " BAXXXAB ",
                    " BAXYXAB ",
                    " BAXXXAB ",
                    "  AAAAA  ",
                    "C  BBB  C",
                    "CC     CC" 
                  ],
                  {
                    A: {
                      "item": "minecraft:redstone_block"
                    },
                    "B": {
                      "item": "avaritia:neutron_ingot"
                    },
                    C: {
                      "item": "avaritia:neutron_gear"
                    },
                    X: {
                      "item": "avaritia:denser_neutron_collector"
                    },
                    Y: {
                      "type": "forge:nbt",
                      "item": "extendedcrafting:singularity",
                      "count": 1,
                      "nbt": "{Id:\"extendedcrafting:redstone\"}"
                    },

                  }).id('nadien_tweaks:neutroncollectordensest')

                //infinity catalyst
                nadien.recipes.createMechanicalCrafting("avaritia:infinity_catalyst", [
                  "    A    ",
                  " A  A  A ",
                  "  BBABB  ",
                  "  BCDCB  ",
                  "AAAECEAAA",
                  "  BCDCB  ",
                  "  BBABB  ",
                  " A  A  A ",
                  "    A    "
                   ],
                  {
                     A: "avaritia:crystal_matrix_ingot",
                     B: "avaritia:ultimate_stew",
                     C: "avaritia:neutron",
                     D: "megacells:cell_component_1m",
                     E: 'avaritia:eternal_singularity'
                  }).id("galaxyorigenes:infinity_catalyst")

nadien.recipes.createMechanicalCrafting(
                  "avaritia:infinity_catalyst",
                  ["ABCDEFGHI", "8        "],
                  {
                    A: {
                      item: "avaritia:diamond_lattice",
                    },
                    B: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    C: {
                      item: "avaritia:neutron_pile",
                    },
                    D: {
                      item: "avaritia:neutron_nugget",
                    },
                    E: {
                      item: "avaritia:neutron_ingot",
                    },
                    F: {
                      item: "avaritia:record_fragment",
                    },
                    G: {
                      item: "avaritia:endest_pearl",
                    },
                    H: {
                      item: "avaritia:ultimate_stew",
                    },
                    I: {
                      item: "avaritia:cosmic_meatballs",
                    },
                    8: {
                      item: 'avaritia:eternal_singularity',
                    },
                  }).id("galaxyorigenes:infinity_catalyst_alt_alt")

                //ethernal singularity
               nadien.remove({output: 'avaritia:eternal_singularity' })
                nadien.recipes.create.mechanical_crafting('avaritia:eternal_singularity', [
                  "ABCDEFGHI",
                  "JKLMNOPQR",
                  "STUVWXYce",
                  "fg       "
                  ], {
                  A: 'avaritia:dark_iron_ingot_singularity',
                  B: 'avaritia:esmarelda_singularity',
                  C: 'avaritia:xp_jelly_baby_singularity',
                  D: 'avaritia:cheese_singularity',
                  E: 'avaritia:uraninite_singularity',
                  F: 'avaritia:fusion_reactor_casing_singularity',
                  G: 'avaritia:addon_singularity',
                  H: 'avaritia:track_singularity',
                  I: 'avaritia:source_gem_singularity',
                  J: 'avaritia:mateico_singularity',
                  K: 'avaritia:singularity_emerlad_to_emerald_singularity',
                  L: 'avaritia:flux_block_singularity',
                  M: 'avaritia:uranium_235_singularity',
                  N: 'avaritia:enderium_block_singularity',
                  O: 'avaritia:crafting_table_singularity',
                  P: 'avaritia:soul_berry_singularity',
                  Q: 'avaritia:nether_star_singularity',
                  R: 'avaritia:crystal_nitro_singularity',
                  S: 'avaritia:neutronium_singularity',
                  T: 'avaritia:balloon_singularity',
                  U: 'avaritia:certus_quartz_singularity',
                  V: 'avaritia:hopper_botany_pot_singularity',
                  W: 'avaritia:caca_singularity',
                  X: 'avaritia:pellet_polonium_singularity',
                  Y: 'avaritia:record_singularity',
                  c: 'avaritia:nadienite_singularity',
                  e: 'avaritia:andesite_cassing_singularity',
                  f: 'avaritia:terra_steel_singularity',
                  g: 'avaritia:quantum_alloy'
                  }).id('nadien_tweaks:ultimatesingularity')

                //lingote infinito
                nadien.recipes.createMechanicalCrafting(
                  'avaritia:infinity_ingot',
                  ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
                  {
                    C: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    N: {
                      item: "avaritia:neutron_ingot",
                    },
                    I: {
                      item: "avaritia:infinity_catalyst",
                    },
                  }
                ).id('nadien_tweaks:infinityingot')

	//endless cake
  nadien.recipes.createMechanicalCrafting(
    'avaritia:endless_cake',
    [
      "aaa",
      "bcb",
      "ded"
    ],
    {
          a: {
            "item": "minecraft:milk_bucket",
          },
          b: {
            "item": "minecraft:sugar",
          },
          "c": {
            "item": "minecraft:dragon_egg",
          },
          d: {
            "tag": "forge:crops/wheat",
          },
          e: {
            "item": "avaritia:infinity_ingot",
          },
    }).id('nadien_tweaks:tartainfinita')

		//infinity totem
  nadien.recipes.createMechanicalCrafting(
    'avaritia:infinity_totem',
    [
      "   NNN   ",
      "  NIIIN  ",
      "  NYIYN  ",
      "CCCIIICCC",
      " CCIIICC ",
      "  NIIIN  ",
      "  NNNNN  ",
      "   CCC   ",
      "    C    "
    ],
    {
      C: {
        "item": "avaritia:crystal_matrix_ingot"
      },
      I: {
        "item": "avaritia:infinity_nugget"
      },
      N: {
        "item": "avaritia:neutron_ingot"
      },
      Y: {
        "item": "minecraft:totem_of_undying"
          },
    }).id('nadien_tweaks:toteminfinito')

  		//star fuel
      nadien.recipes.createMechanicalCrafting(
        'avaritia:star_fuel',
        [
          "ccc",
          "cxc",
          "ccc"
        ],
        {
          c: {
            "item": "allthecompressed:coal_block_9x"
          },
          x: {
            "item": "avaritia:infinity_catalyst"
              },
        }).id('nadien_tweaks:starfuel')

        		//infinite bucket
            nadien.recipes.createMechanicalCrafting(
              "avaritia:infinity_bucket",
              [
                "NN     NN",
                "NNX   XNN",
                "NBBX XBBN",
                "NBBI IBBN",
                "NBBI IBBN",
                "NBBIIIBBN",
                "NNBBBBBNN",
                " NNBBBNN ",
                "  NNNNN  "
              ],
              {
                B: "minecraft:bucket",
                I: "avaritia:infinity_ingot",
                N: "avaritia:neutron_ingot",
                X: "avaritia:infinity_catalyst"
              }).id('nadien_tweaks:infinitybucket')
   
      //crystal pickaxe
      nadien.recipes.createMechanicalCrafting(
        "avaritia:crystal_pickaxe",
        [
          " CCCWCCC ",
          "CWWWWWWWC",
          "CW  N  WC",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
        ],
        {
          C: "avaritia:crystal_matrix_ingot",
          W: "avaritia:crystal_matrix",
          N: "avaritia:neutron",
        }).id('nadien_tweaks:crystalpickaxe')

        //cofre compreso
        nadien.remove({output: 'avaritia:compressed_chest' })
        nadien.recipes.create.mechanical_crafting("avaritia:compressed_chest", [
          "ccc",
          "cgc",
          "ccc"
        ], {
          c: "minecraft:chest",
          g: "avaritia:neutron_gear"
        }).id('nadien_tweaks:cofrecompreso')

       //cofre infinito
     nadien.remove({output: 'avaritia:infinity_chest' })
     nadien.recipes.create.mechanical_crafting('avaritia:infinity_chest', [
      "mxn",
      "xyx",
      "mxn"
       ], {
        m: 'minecraft:crafting_table',
        n: 'minecraft:furnace',
        x: 'avaritia:infinity_ingot',
        y: 'avaritia:compressed_chest'
       }).id('nadien_tweaks:infinity_chest')

  //sculk crafting
   nadien.remove({output: 'avaritia:sculk_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:sculk_crafting_table', [
        "aba",
        "cxc",
        "ada"
        ], {
          a: "minecraft:echo_shard",
          b: "minecraft:sculk_shrieker",
          c: "minecraft:sculk",
          d:  "minecraft:sculk_catalyst",
          x: "extendedcrafting:ultimate_table"
        }).id('nadien_tweaks:sculk_crafting_table')

        //end crafting table
      nadien.remove({output: 'avaritia:end_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:end_crafting_table', [
        'bcccb',
        'dfifd',
        'dgagd',
        'dhjhd',
        'beeeb'
        ], {
         a: 'avaritia:nether_crafting_table',
         b: 'minecraft:end_crystal',
         c: 'minecraft:end_portal_frame',
         d: 'minecraft:obsidian',
         e: 'minecraft:dragon_breath',
         f: 'minecraft:purpur_pillar',
         g: 'minecraft:end_stone_bricks',
         h: 'minecraft:end_stone',
         i: 'minecraft:ender_eye',
         j: 'minecraft:ender_chest'
        }).id('nadien_tweaks:end_crafting_table')

      //nether ctafting tabe
      nadien.remove({output: 'avaritia:nether_crafting_table' })
      nadien.recipes.create.mechanical_crafting('avaritia:nether_crafting_table', [
        'cbc',
        'dad',
        'efe'
        ], {
         a: 'avaritia:sculk_crafting_table',
         b: 'minecraft:respawn_anchor',
         c: 'minecraft:wither_skeleton_skull',
         d: 'minecraft:netherrack',
         e: 'minecraft:netherite_ingot',
         f: 'minecraft:nether_star'
        }).id('nadien_tweaks:nether_crafting_table')

      //enchanced core
      nadien.remove({output: 'avaritia:enhancement_core' })
      nadien.recipes.create.mechanical_crafting('avaritia:enhancement_core', [
        '   PPP   ',
        ' NPCCCPN ',
        ' PABBBAP ',
        'PCBBXBBCP',
        'PCBXEXBCP',
        'PCBBXBBCP',
        ' PABBBAP ',
        ' NPCCCPN ',
        '   PPP   '
        ], {
         A:  'avaritia:crystal_matrix',
         B: 'avaritia:infinity_nugget',
         C: 'avaritia:crystal_matrix_ingot',
         E: 'avaritia:endest_pearl',
         N: 'avaritia:neutron_ingot',
         P: 'avaritia:neutron_pile',
         X: 'avaritia:infinity_catalyst'
        }).id('nadien_tweaks:enhancement_core')

        //extreme smithing table
        nadien.remove({output: 'avaritia:extreme_smithing_table' })
        nadien.recipes.create.mechanical_crafting('avaritia:extreme_smithing_table', [
          'aaaaaaaaa',
          'bccfgfccb',
          'bcdhhhdcb',
          'lfhijihfl',
          'eghjkjhge',
          'lfhijihfl',
          'bcdhhhdcb',
          'bccfgfccb',
          'bleeeeelb'
          ], {
           a:  'avaritia:neutron',
           b: 'avaritia:neutron_ingot',
           c: 'avaritia:diamond_lattice',
           d: 'avaritia:blaze_cube',
           e: 'avaritia:crystal_matrix',
           f:  'avaritia:infinity_nugget',
           g: 'avaritia:infinity_ingot',
           h: 'avaritia:neutron_gear',
           i: 'avaritia:infinity_catalyst',
           j:  'minecraft:smithing_table',
           k: 'avaritia:extreme_crafting_table',
           l: 'avaritia:crystal_matrix_ingot',
          }).id('nadien_tweaks:extreme_smithing_table')

nadien.shaped('avaritia:record_fragment', [
  'A  ',
  '   ',
  '   '
], {
  A: cds
}).id('nadien_tweaks:fragmentos_de_disco')
const cds = ['minecraft:music_disc_13', 'minecraft:music_disc_chirp', 'minecraft:music_disc_cat', 'minecraft:music_disc_blocks', 'minecraft:music_disc_chirp', 'minecraft:music_disc_far', 'minecraft:music_disc_mall', 'minecraft:music_disc_mellohi', 'minecraft:music_disc_stal', 'minecraft:music_disc_strad', 'minecraft:music_disc_ward', 'minecraft:music_disc_11', 'minecraft:music_disc_wait', 'minecraft:music_disc_otherside', 'minecraft:music_disc_5', 'minecraft:music_disc_pigstep', 'minecraft:music_disc_relic', 'ars_nouveau:music_disc_thistle_the_sound_of_glass', 'ars_nouveau:music_disc_aria_biblio', 'ultimate_utilities:avengers', 'ultimate_utilities:mc_caco']




//SINGULARIDADES//
 function singularidad(output, energia, input, catalyst, cantidad) {
    nadien.custom({
        "type": "extendedcrafting:compressor",
        "powerCost": energia,
        "inputCount": cantidad,
        "ingredient": {
          "item": input
        },
        "catalyst": {
          "item": catalyst
        },
        "result": {
          "item": output
        }
      }).id(`galaxyorigins:singularidadc/${output.replace(':', '/')}`)
      //example add singularity
      //singularidad(output, energia, input, catalyst, cantidad)//
}



//xpjelly baby singularity
singularidad('avaritia:xp_jelly_baby_singularity', 500000, 'mob_grinding_utils:solid_xp_baby', 'extendedcrafting:ultimate_catalyst', 12)

//reactor cassing
singularidad('avaritia:fusion_reactor_casing_singularity', 500000, 'mekanism:induction_casing', 'extendedcrafting:ultimate_catalyst', 8)

//cheese singularity
singularidad('avaritia:cheese_singularity', 500000, 'farmersdelight:sweet_berry_cheesecake_slice', 'extendedcrafting:ultimate_catalyst', 90)

//uraninite singularity
  singularidad('avaritia:uraninite_singularity', 500000, 'powah:uraninite', 'extendedcrafting:ultimate_catalyst', 500)

//track
singularidad('avaritia:track_singularity',500000,'create:track','extendedcrafting:ultimate_catalyst',10000)


// source gem singularity
singularidad('avaritia:source_gem_singularity', 500000, 'ars_nouveau:source_gem', 'extendedcrafting:ultimate_catalyst', 100)

// mateico singularity
singularidad('avaritia:mateico_singularity', 500000, 'argentinas_delight:matedulceitem', 'extendedcrafting:ultimate_catalyst', 777)

// uranium235 singularity
singularidad('avaritia:uranium_235_singularity', 500000, 'mekanism:yellow_cake_uranium', 'extendedcrafting:ultimate_catalyst', 500)

// ultimate ore processing singularity
singularidad('avaritia:addon_singularity', 500000, 'industrialforegoing:processing_addon_2', 'extendedcrafting:ultimate_catalyst', 50)

// addon processing tier 2 singularity
singularidad('avaritia:ultimate_upgrade_singularity', 500000, 'betterfurnacesreforged:ultimate_ore_processing_upgrade', 'extendedcrafting:ultimate_catalyst', 50)

// certus singularity
singularidad('avaritia:certus_quartz_singularity', 500000, 'ae2:certus_quartz_crystal', 'extendedcrafting:ultimate_catalyst', 350)

// enderium singularity
singularidad('avaritia:enderium_block_singularity', 500000, 'thermal:enderium_block', 'extendedcrafting:ultimate_catalyst', 350)

// crafting table singularity
singularidad('avaritia:crafting_table_singularity', 500000, 'minecraft:crafting_table', 'extendedcrafting:ultimate_catalyst', 20)

// soul berry singularity
singularidad('avaritia:soul_berry_singularity', 500000, 'allthemodium:ancient_soulberries', 'extendedcrafting:ultimate_catalyst', 15)

// nether star singularity
singularidad('avaritia:nether_star_singularity', 500000, 'minecraft:nether_star', 'extendedcrafting:ultimate_catalyst', 90)

// flux block singularity
singularidad('avaritia:flux_block_singularity', 500000, 'fluxnetworks:flux_block', 'extendedcrafting:ultimate_catalyst', 450)

// nitro crystal singularity
singularidad('avaritia:crystal_nitro_singularity', 500000, 'powah:crystal_nitro', 'extendedcrafting:ultimate_catalyst', 800)

// record singularity
singularidad('avaritia:record_singularity', 500000, 'avaritia:record_fragment', 'extendedcrafting:ultimate_catalyst', 35)

// polonium singularity
singularidad('avaritia:pellet_polonium_singularity', 500000, 'mekanism:pellet_polonium', 'extendedcrafting:ultimate_catalyst', 250)

//caca singularity
singularidad('avaritia:caca_singularity', 500000, 'ultimate_utilities:super_caca', 'extendedcrafting:ultimate_catalyst', 777)

//hopper botany pot singularity
singularidad('avaritia:hopper_botany_pot_singularity', 500000, 'botanypots:terracotta_hopper_botany_pot', 'extendedcrafting:ultimate_catalyst', 22)

//dark iron ingot singularity
singularidad('avaritia:dark_iron_ingot_singularity', 500000, 'extendedcrafting:black_iron_ingot', 'extendedcrafting:ultimate_catalyst', 3500)

//balloon singularity
singularidad('avaritia:balloon_singularity', 500000, 'immersiveengineering:balloon', 'extendedcrafting:ultimate_catalyst', 5000)

// singularidad de singularidad de esmerald
singularidad('avaritia:singularity_emerlad_to_emerald_singularity', 500000, 'avaritia:esmarelda_singularity', 'extendedcrafting:ultimate_catalyst', 60)

//singularidad de esmeralda
singularidad('avaritia:esmarelda_singularity', 500000, 'minecraft:emerald_block', 'extendedcrafting:ultimate_catalyst', 100)

//singularidad ethereal slate
// singularidad('avaritia:ethereal_singularity', 500000, 'bloodmagic:etherealslate', 'extendedcrafting:ultimate_catalyst', 150)

//singularidad chaotica
// singularidad('avaritia:chaotic_singularity', 500000, 'draconicevolution:chaos_shard', 'extendedcrafting:ultimate_catalyst', 250)

//singulaidad de nadienite
singularidad('avaritia:nadienite_singularity', 500000, 'ultimate_utilities:nadienitebloque', 'extendedcrafting:ultimate_catalyst', 250)

//singularidad de terracero
 singularidad('avaritia:terra_steel_singularity', 500000, 'botania:terrasteel_block', 'extendedcrafting:ultimate_catalyst', 1000)

//singularidad de revestidor de andesita
singularidad('avaritia:andesite_cassing_singularity', 500000, 'create:andesite_casing', 'extendedcrafting:ultimate_catalyst', 3)

//uranium plate singularity
// singularidad('avaritia:double_uranium_235_plate_singularity', 500000, 'gtceu:double_uranium_235_plate', 'extendedcrafting:ultimate_catalyst', 10)

//singularidad de neutronio
singularidad('avaritia:neutronium_singularity', 500000, 'avaritia:neutron', 'extendedcrafting:ultimate_catalyst', 250)

singularidad('avaritia:quantum_alloy', 500000, 'advanced_ae:quantum_alloy', 'extendedcrafting:ultimate_catalyst', 500)

singularidad('avaritia:replica_ingot', 500000, 'replication:replica_ingot', 'extendedcrafting:ultimate_catalyst', 100)
})

