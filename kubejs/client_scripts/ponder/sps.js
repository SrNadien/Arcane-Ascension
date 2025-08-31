Ponder.registry((event) => {
    /**
     * Escena de Ponder para el Supercritical Phase Shifter (SPS) de Mekanism.
     * Esta escena muestra los pasos de construcción para el SPS.
     */
    event.create([
        'mekanism:sps_casing',
        'mekanism:sps_port',
        'mekanism:supercharged_coil'
    ]).scene('sps','Mekanism Supercritical Phase Shifter (SPS)', 'kubejs:sps',
        (scene, util) => {
            scene.world.showSection([0, 0, 0, 6, 7, 6], Facing.down);
            scene.setSceneOffsetY(-1);
            scene.idle(20);

            // Paso 1: Base
            scene.world.hideSection([0, 0, 0, 6, 6, 5], Facing.up);
            scene.idle(10);
            scene.text(60, 'El SPS se construye usando este patrón para cada cara.', [2.5, 4, 5]).placeNearTarget().attachKeyFrame();
            scene.idle(60);

            // Paso 2: Entrada de energía
            scene.world.showSection([6, 0, 0, 6, 7, 5], Facing.down);
            scene.idle(10);
            scene.text(60, 'En un lado, necesitarás un Puerto en el medio para la entrada de energía.', [5.5, 4, 3]).placeNearTarget().attachKeyFrame();
            scene.idle(70);

            // Paso 3: Bobina sobrecargada
            scene.world.showSection([5, 3, 3], Facing.down);
            scene.text(60, 'En el interior, coloca una Bobina sobrecargada en el Puerto.', [5, 4, 3]).placeNearTarget().attachKeyFrame();
            scene.idle(80);

            // Paso 4: Doble Bobina sobrecargada
            scene.world.showSection([0, 0, 0, 0, 6, 5], Facing.down);
            scene.idle(30);
            scene.world.showSection([1, 3, 3], Facing.down);
            scene.text(60, 'También puedes usar dos Bobinas sobrecargadas para un uso de energía máximo.', [0, 4, 3]).placeNearTarget().attachKeyFrame();
            scene.idle(80);

            // Paso 5: Caras restantes
            scene.world.showSection([1, 0, 0, 5, 0, 5], Facing.down);
            scene.idle(30);
            scene.world.showSection([1, 6, 0, 5, 6, 5], Facing.down);
            scene.idle(30);
            scene.world.showSection([1, 1, 0, 5, 5, 0], Facing.down);
            scene.idle(30);
            scene.text(60, 'Necesitarás un Puerto para la entrada de Polonio.', [4.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
            scene.idle(70);
            scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("active", "true"), true);
            scene.text(60, 'Y otro para la exportación de Gas de antimateria.', [2.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
            scene.idle(70);
        });
});
