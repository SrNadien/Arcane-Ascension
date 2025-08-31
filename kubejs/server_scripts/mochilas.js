//mochilas by SrNadien
ServerEvents.recipes(nadien => {




nadien.remove({output: 'sophisticatedbackpacks:backpack' })
nadien.custom({
  "type": "sophisticatedbackpacks:basic_backpack",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:backpack"
    }
  ],
  "key": {
    "C": {
      "item": "minecraft:shulker_box"
    },
    "L": {
      "item": 'kubejs:treated_leather'
    },
    "S": {
      "tag": "forge:string"
    }
  },
  "pattern": [
    "SLS",
    "SCS",
    "LLL"
  ],
  "result": {
    "item": "sophisticatedbackpacks:backpack"
  }
}).id('nadien_tweaks:mochila')


});