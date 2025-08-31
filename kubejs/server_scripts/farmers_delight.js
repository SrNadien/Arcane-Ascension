ServerEvents.recipes(nadien => {

  //egg sandwitch
  nadien.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "tag": "forge:bread"
    },
    {
      "item": "farmersdelight:fried_egg"
    },
    {
      "item": "farmersdelight:fried_egg"
    }
  ],
  "result": {
    "item": "farmersdelight:egg_sandwich"
  }
}).id('nadien_tweaks:egg_sandwich_fixed')

//beacon and eggs
  nadien.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "item": "farmersdelight:cooked_bacon"
    },
    {
      "item": "farmersdelight:cooked_bacon"
    },
    {
      "item": "minecraft:bowl"
    },
    {
      "item": "farmersdelight:fried_egg"
    },
    {
      "item": "farmersdelight:fried_egg"
    }
  ],
  "result": {
    "item": "farmersdelight:bacon_and_eggs"
  }
}).id('nadien_tweaks:bacon_and_eggs_fixed')


//noodle soup
let raw_pork = ["minecraft:porkchop", "farmersdelight:bacon"] 
nadien.custom({
  "type": "farmersdelight:cooking",
  "cookingtime": 200,
  "experience": 1.0,
  "ingredients": [
    {
      "item": "farmersdelight:raw_pasta"
    },
    {
      "item": "farmersdelight:fried_egg"
    },
    {
      "item": "minecraft:dried_kelp"
    },
    {
      "item": "minecraft:porkchop"
    }
  ],
  "recipe_book_tab": "meals",
  "result": {
    "item": "farmersdelight:noodle_soup"
  }
}).id('nadien_tweaks:noodle_soup_fixed')

nadien.custom({
  "type": "farmersdelight:cooking",
  "cookingtime": 200,
  "experience": 1.0,
  "ingredients": [
    {
      "item": "farmersdelight:raw_pasta"
    },
    {
      "item": "farmersdelight:fried_egg"
    },
    {
      "item": "minecraft:dried_kelp"
    },
    {
      "item": "farmersdelight:bacon"
    }
  ],
  "recipe_book_tab": "meals",
  "result": {
    "item": "farmersdelight:noodle_soup"
  }
}).id('nadien_tweaks:noodle_soup_fixedd')






//pava

nadien.shaped('argentinas_delight:pava', [
      "012",
      "3 5",
      "678"
    ], {
    
    1: "avaritia:xp_jelly_baby_singularity",
    2:  "minecraft:stick",
    3:  "minecraft:iron_ingot",
    5:  "minecraft:iron_ingot",
    6:  "minecraft:iron_ingot",
    7:  "minecraft:iron_ingot",
    8:  "minecraft:iron_ingot"
    }).id('nadien_tweaks:pava_fixed')
// nadien.custom({
//   "type": "minecraft:crafting_shaped",
//   "category": "misc",
//   "pattern": [
//     "012",
//     "3 5",
//     "678"
//   ],
//   "key": {
//     "0": {
//       "item": "minecraft:stick"
//     },
//     "1": {
//       "item":  "avaritia:xp_jelly_baby_singularity"
//     },
//     "2": {
//       "item": "minecraft:stick"
//     },
//     "3": {
//       "item": "minecraft:iron_ingot"
//     },
//     "5": {
//       "item": "minecraft:iron_ingot"
//     },
//     "6": {
//       "item": "minecraft:iron_ingot"
//     },
//     "7": {
//       "item": "minecraft:iron_ingot"
//     },
//     "8": {
//       "item": "minecraft:iron_ingot"
//     }
//   },
//   "result": {
//     "item": "argentinas_delight:pava",
//     "count": 1
//   }
// }).id('nadien_tweaks:pava_fixed')
})
