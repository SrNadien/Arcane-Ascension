Ponder.registry((event) => {
    /**
     * Scene for Smeltery
     */
    event
        .create("tconstruct:smeltery_controller")
        .scene(
            "kubejs:smeltery",
            "Smeltery Basica",
            "kubejs:smeltery_normal",
            (scene, util) => {
                scene.showStructure();
                scene.idle(10);
                scene.text(60, "Fundidora", [2.0, 2.5, 0.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
                scene.text(60, "Drenaje Refractario", [0.0, 2.5, 1.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
                scene.text(60, "Drenaje Refractario", [4.0, 2.5, 1.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
            });

           event
        .create("tconstruct:foundry_controller")
        .scene(
            "kubejs:smelteryf",
            "Smeltery Fantastica",
            "kubejs:smeltery_fantastica",
            (scene, util) => {
                scene.showStructure();
                scene.idle(10);
                scene.text(60, "Fundidora Fantastica", [3.0, 1.5, 1.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
                scene.text(60, "Drenaje Chamuscado", [0.0, 1.5, 1.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
                scene.text(60, "Drenaje Chamuscado", [5.0, 1.5, 1.5])
                    .colored(PonderPalette.RED)
                    .placeNearTarget()
                    .attachKeyFrame();
            });
  

})





Ponder.tags((event) => {
    event
        .createTag(
            "kubejs:smeltery",
            "tconstruct:smeltery_controller",
            "Construccion Smeltery",
            "!By SrNadien¡",
            "kubejs:smeltery_normal",
            ["tconstruct:smeltery_controller"]
        );

          //fantastica
           event
        .createTag(
            "kubejs:smelteryfantastica",
            "tconstruct:foundry_controller",
            "Construccion Smeltery Fantastica",
            "!By SrNadien¡",
            "kubejs:smeltery_fantastica",
            ["tconstruct:foundry_controller"]
        );

});


