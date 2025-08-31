//minecraft vanilla By SrNadien 
ServerEvents.recipes(nadien => {
	
	
	//eliminadas
	nadien.remove({output:'minecraft:chest'})
  nadien.remove({output:'minecraft:furnace'})
	nadien.remove({output:'minecraft:piston'})
	nadien.remove({output:'minecraft:sticky_piston'})
	nadien.remove({output:'minecraft:cobweb'})
	nadien.remove({output:'mekanism:scuba_mask'})
	nadien.remove({output:'minecraft:ender_chest'})
  nadien.remove({output:'minecraft:bucket'})
  nadien.remove({output:'minecraft:netherite_upgrade_smithing_template'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x4'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
  nadien.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
  nadien.remove({output: 'minecraft:crafting_table'})
  nadien.remove({output: 'minecraft:furnace'})
	


     //cabeza
     const nadienskull = Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;2118518208,-1698609149,-1383017808,204096419],Name:"SrNadien",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTczNjE4NzkxMjI4MiwKICAicHJvZmlsZUlkIiA6ICI3ZTQ2MDVjMDlhYzE0ODAzYWQ5MGQyYjAwYzJhNDNhMyIsCiAgInByb2ZpbGVOYW1lIiA6ICJTck5hZGllbiIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS83ZGQ2YWQ2MTYyMDBkNzNkZjA4NDUyYWMyYmE1MzVhY2FhMGQ1MmU0ZDhlNWM3YjAwNDg0MjNkNGVhMDE5Nzg0IgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81NjliN2YyYTFkMDBkMjZmMzBlZmUzZjlhYjlhYzgxN2IxZTZkMzVmNGYzY2ZiMDMyNGVmMmQzMjgyMjNkMzUwIgogICAgfQogIH0KfQ=="}]}}}')
     nadien.shaped(nadienskull, [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:wither_skeleton_skull',
      A: 'minecraft:emerald_block'
    }).id('nadien_tweaks:cabeza_nadien')


    //manzana de notch
    const apple = ['minecraft:golden_apple', 'minecraft:apple']
    nadien.shaped('minecraft:enchanted_golden_apple', [
      'PPP',
      'PAP',
      'PPP'
    ], {
      P: 'minecraft:gold_block',
      A: apple
    }).id('nadien_tweaks:enchanted_golden_apple')


  // mesa de crafteo
  nadien.shaped('minecraft:crafting_table', [
    'ab ',
    'cc ',
    '   '
  ], {
    a: 'minecraft:stone_pickaxe',
    b: 'minecraft:stone_axe',
    c: 'kubejs:crafting_base'
  }).id('nadien_tweaks:mesadecrafteo')

  //mesa de encantamiento
   nadien.shaped('minecraft:enchanting_table', [
    ' c ',
    'bab',
    'aaa'
  ], {
    a: 'allthecompressed:obsidian_1x',
    b: 'avaritia:diamond_lattice',
    c: 'tconstruct:encyclopedia'
  }).id('nadien_tweaks:mesadenecantamientos')





    //cofre
    nadien.shaped('4x minecraft:chest', [
    'aba',
    'bcb',
    'aba'
  ], {
    a: '#minecraft:logs',
    b: '#minecraft:planks',
    c: 'minecraft:iron_nugget' 
  }).id('nadien_tweaks:cofre')


       //horno 
       nadien.shaped('minecraft:furnace', [
        'PPP',
        'PNP',
        'PPP'
      ], {
        P: 'allthecompressed:cobbled_deepslate_1x',
        N: '#minecraft:wooden_buttons' 
      }).id('nadien_tweaks:horno')




    //telaraña
    nadien.shaped('minecraft:cobweb', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:string',
    C: 'minecraft:string',
    Q: 'minecraft:string',
    I: 'minecraft:string',
    L: 'minecraft:string',
    W: 'minecraft:string',
    E: 'minecraft:string',
    H: 'minecraft:string',
    P: 'minecraft:string'
  }).id('nadien_tweaks:telarana')



      



  //ender chest
  nadien.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "ultimate_utilities:nadienite_ingot"
      },
      "B": {
        "item": "minecraft:obsidian"
      },
      "C": {
        "item": 'minecraft:ender_eye'
      }
    },
    "result": {
      "item": 'minecraft:ender_chest',
      "count": 1
    }
  }).id('nadien_tweaks:cofredelend')

  //enderchest 2
  nadien.shaped('minecraft:ender_chest', [
    'ABA',
    'BSB',
    'ABA'
  ], {
    B: 'minecraft:obsidian',
    A: 'ultimate_utilities:nadienite_ingot',
    S: 'minecraft:ender_eye'
  }).id('nadien_tweaks:enderchestdos')


//cacota
nadien.shaped('ultimate_utilities:super_caca', [
  '   ',
  ' BA',
  '   '
], {
  A: 'ultimate_utilities:cacota',
  B: 'minecraft:wheat'
}).id('nadien_tweaks:supercacota')


//doritos
nadien.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "012",
    "345",
    "678"
  ],
  "key": {
    "0": {
      "item": "minecraft:wheat"
    },
    "1": {
      "item": "minecraft:baked_potato"
    },
    "2": {
      "item": "minecraft:wheat"
    },
    "3": {
      "item": "minecraft:baked_potato"
    },
    "4": {
      "item": "minecraft:bucket"
    },
    "5": {
      "item": "minecraft:baked_potato"
    },
    "6": {
      "item": "minecraft:wheat"
    },
    "7": {
      "item": "minecraft:baked_potato"
    },
    "8": {
      "item": "minecraft:wheat"
    }
  },
  "result": {
    "item": 'ultimate_utilities:doritos',
    "count": 1
  }
}).id('nadien_tweaks:doritos')


//cristal del end
nadien.replaceInput({id: 'minecraft:end_crystal'}, 'minecraft:ender_eye', 'allthemodium:piglich_heart')


    nadien.remove({output: ['minecraft:enchanting_table', 'minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots', 'minecraft:iron_sword', 'minecraft:iron_pickaxe', 'minecraft:iron_axe', 'minecraft:iron_shovel', 'minecraft:iron_hoe', 'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots', 'minecraft:golden_sword', 'minecraft:golden_pickaxe', 'minecraft:golden_axe', 'minecraft:golden_shovel', 'minecraft:golden_hoe', 'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'minecraft:diamond_sword', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'minecraft:diamond_shovel', 'minecraft:diamond_hoe', 'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots', 'minecraft:netherite_sword', 'minecraft:netherite_pickaxe', 'minecraft:netherite_axe', 'minecraft:netherite_shovel', 'minecraft:netherite_hoe', 'enderstorage:ender_chest', 'enderstorage:ender_tank', 'enderstorage:ender_pouch']}) 


    // Armadura de hierro
    nadien.shaped('minecraft:iron_helmet', [
        'XXX',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('nadien_tweaks:cascodehierro')


    nadien.shaped('minecraft:iron_chestplate', [
        'X X',
        'XXX',
        'XXX'
    ], {
        X: '#forge:plates/iron'
    }).id('nadien_tweaks:pecheradehierro')

    nadien.shaped('minecraft:iron_leggings', [
        'XXX',
        'X X',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('nadien_tweaks:pantalondehierro')

    nadien.shaped('minecraft:iron_boots', [
        'X X',
        'X X'
    ], {
        X: '#forge:plates/iron'
    }).id('nadien_tweaks:botasdehierro')

    // Herramientas de hierro
    nadien.shaped('minecraft:iron_sword', [
        'X',
        'X',
        'S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('nadien_tweaks:espadadehierro')

    nadien.shaped('minecraft:iron_pickaxe', [
        'XXX',
        ' S ',
        ' S '
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('nadien_tweaks:picodehierro')

    nadien.shaped('minecraft:iron_axe', [
        'XX',
        'XS',
        ' S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('nadien_tweaks:hachadehierro')

    nadien.shaped('minecraft:iron_shovel', [
        'X',
        'S',
        'S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('nadien_tweaks:paladehierro')

    nadien.shaped('minecraft:iron_hoe', [
        'XX',
        ' S',
        ' S'
    ], {
        X: '#forge:plates/iron',
        S: 'minecraft:stick'
    }).id('nadien_tweaks:azadadehierro')




    
       //Piston
       nadien.shaped('minecraft:piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:amethyst_shard',
        P: 'minecraft:stone'
      }).id('nadien_tweaks:piston')
      
      
      
        //Piston Pegajoso
        nadien.shaped('minecraft:sticky_piston', [
        'TCQ',
        'ILW',
        'EHP'
        ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'minecraft:stone',
        L: 'extendedcrafting:redstone_ingot',
        W: 'minecraft:stone',
        E: 'minecraft:stone',
        H: 'minecraft:piston',
        P: 'minecraft:stone'
      }).id('nadien_tweaks:pistonpegajoso')


//valde
  nadien.shaped('minecraft:bucket', [
    '   ',
    'P P',
    ' P '
  ], {
    P: '#forge:plates/iron'
  }).id('nadien_tweaks:baldeugur')

        // Armadura de oro
        nadien.shaped('minecraft:golden_helmet', [
            'XXX',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('nadien_tweaks:cascodeoro')
    
        nadien.shaped('minecraft:golden_chestplate', [
            'X X',
            'XXX',
            'XXX'
        ], {
            X: '#forge:plates/gold'
        }).id('nadien_tweaks:pecheradeoro')
    
        nadien.shaped('minecraft:golden_leggings', [
            'XXX',
            'X X',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('nadien_tweaks:pantalondeoro')
    
        nadien.shaped('minecraft:golden_boots', [
            'X X',
            'X X'
        ], {
            X: '#forge:plates/gold'
        }).id('nadien_tweaks:botasdeoro')
    
        // Herramientas de oro
        nadien.shaped('minecraft:golden_sword', [
            'X',
            'X',
            'S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('nadien_tweaks:espadadeoro')
    
        nadien.shaped('minecraft:golden_pickaxe', [
            'XXX',
            ' S ',
            ' S '
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('nadien_tweaks:picodeoro')
    
        nadien.shaped('minecraft:golden_axe', [
            'XX',
            'XS',
            ' S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('nadien_tweaks:hachadeoro')
    
        nadien.shaped('minecraft:golden_shovel', [
            'X',
            'S',
            'S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('nadien_tweaks:paladeoro')
    
        nadien.shaped('minecraft:golden_hoe', [
            'XX',
            ' S',
            ' S'
        ], {
            X: '#forge:plates/gold',
            S: 'minecraft:stick'
        }).id('nadien_tweaks:azadaoro')



            // Armadura de diamante
            nadien.shaped('minecraft:diamond_helmet', [
                'XXX',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('nadien_tweaks:cascodediamante')
        
            nadien.shaped('minecraft:diamond_chestplate', [
                'X X',
                'XXX',
                'XXX'
            ], {
                X: '#forge:plates/diamond'
            }).id('nadien_tweaks:pecheradediamante')
        
            nadien.shaped('minecraft:diamond_leggings', [
                'XXX',
                'X X',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('nadien_tweaks:pantalondediamante')
        
            nadien.shaped('minecraft:diamond_boots', [
                'X X',
                'X X'
            ], {
                X: '#forge:plates/diamond'
            }).id('nadien_tweaks:botasdediamante')
        
            // Herramientas de diamante
            nadien.shaped('minecraft:diamond_sword', [
                'X',
                'X',
                'S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('nadien_tweaks:espadadediamante')
        
            nadien.shaped('minecraft:diamond_pickaxe', [
                'XXX',
                ' S ',
                ' S '
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('nadien_tweaks:picodediamante')
        
            nadien.shaped('minecraft:diamond_axe', [
                'XX',
                'XS',
                ' S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('nadien_tweaks:hachadediamante')
        
            nadien.shaped('minecraft:diamond_shovel', [
                'X',
                'S',
                'S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('nadien_tweaks:paladediamante')
        
            nadien.shaped('minecraft:diamond_hoe', [
                'XX',
                ' S',
                ' S'
            ], {
                X: '#forge:plates/diamond',
                S: 'minecraft:stick'
            }).id('nadien_tweaks:azadadiamante')

            // Armadura
            nadien.smithing('minecraft:netherite_helmet', 'minecraft:diamond_helmet', 'thermal:netherite_plate')
                .id('nadien_tweaks:cascodenetherite')
                
        
            nadien.smithing('minecraft:netherite_chestplate', 'minecraft:diamond_chestplate', 'thermal:netherite_plate')
                .id('nadien_tweaks:pecheradenetherite')
                
        
            nadien.smithing('minecraft:netherite_leggings', 'minecraft:diamond_leggings', 'thermal:netherite_plate')
                .id('nadien_tweaks:pantalondenetherite')
                
        
            nadien.smithing('minecraft:netherite_boots', 'minecraft:diamond_boots', 'thermal:netherite_plate')
                .id('nadien_tweaks:botasdenetherite')
                
        
            // Herramientas
            nadien.smithing('minecraft:netherite_sword', 'minecraft:diamond_sword', 'thermal:netherite_plate')
                .id('nadien_tweaks:espadadenetherite')
                
        
            nadien.smithing('minecraft:netherite_pickaxe', 'minecraft:diamond_pickaxe', 'thermal:netherite_plate')
                .id('nadien_tweaks:picodenetherite')
                
        
            nadien.smithing('minecraft:netherite_axe', 'minecraft:diamond_axe', 'thermal:netherite_plate')
                .id('nadien_tweaks:hachadenetherite')
                
        
            nadien.smithing('minecraft:netherite_shovel', 'minecraft:diamond_shovel', 'thermal:netherite_plate')
                .id('nadien_tweaks:paladenetherite')
                
        
            nadien.smithing('minecraft:netherite_hoe', 'minecraft:diamond_hoe', 'thermal:netherite_plate')
                .id('nadien_tweaks:azadadenetherite')
                



       //netherite template
       nadien.shaped('minecraft:netherite_upgrade_smithing_template', [
        'TCT',
        'TLT',
        'TTT'
      ], {
        T: 'minecraft:nether_brick',
        L: 'minecraft:ender_eye',
        C: 'minecraft:diamond'
      }).id('nadien_tweaks:netheritetemplate')

            //mesa de pociones
            nadien.shaped('minecraft:brewing_stand', [
                    '   ', 
                    ' # ', 
                    ' B '
                ], {
                    '#': 'minecraft:blaze_rod',    
                    'B': 'minecraft:cobblestone'   
                }).id('nadien_tweaks:brewingstand')

                nadien.shaped('minecraft:end_portal_frame', [
                    'TCQ',
                    'ILW',
                    'EHP'
                  ], {
                    T: '#forge:ingots/enderium',
                    C: '#forge:ingots/enderium',
                    Q: '#forge:ingots/enderium',
                    I: 'minecraft:end_stone',
                    L: 'ae2:fluix_block',
                    W: 'minecraft:end_stone',
                    E: 'minecraft:end_stone',
                    H: 'minecraft:end_stone',
                    P: 'minecraft:end_stone'
                  }).id('nadien_tweaks:portalframeend')


                  nadien.shaped('minecraft:elytra', ["aba", "cdc", "c c"], {
                    a: "minecraft:diamond",
                    b: "minecraft:string",
                    c: "minecraft:phantom_membrane",
                    d: "minecraft:nether_star"
                  }).id('nadien_tweaks:elytros')


                  //obsidiana llorosa
                  nadien.custom({
                   "type": "extendedcrafting:shaped_table",
                   "pattern": [
                   "ABA",
                   "BAB",
                   "ABA"
                   ],
                   "key": {
                   "A": {
                    "item": "minecraft:obsidian"
                   },
                  "B": {
                     "item": "minecraft:amethyst_block"
                  }
                  },
                 "result": {
                  "item": 'minecraft:crying_obsidian',
                  "count": 1
               }
              })




})