/** some mod tags the charcoal recipe incorrectly */
ServerEvents.recipes(event => {
    event.replaceInput({ id: "minecraft:coal_block" }, "#minecraft:coals", "minecraft:coal")

    event.replaceOutput({ id: "minecraft:charcoal" }, "#minecraft:coals", "minecraft:charcoal")
   
})
