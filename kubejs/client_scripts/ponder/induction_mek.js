Ponder.registry((event) => {
    /**
     * Escena de Ponder para el Induction Matrix de Mekanism.
     * Esta escena muestra los pasos de construcción para el almacenamiento de energía.
     */
    event.create([
        'mekanism:induction_casing',
        'mekanism:induction_port'
    ]).scene('induction_mek','Mekanism: Induction Matrix', 'kubejs:induction_matrix',
        (scene, util) => {
            // Muestra la matriz completa
            scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
            scene.idle(10);
            
            scene.text(80, 'La Matriz de Inducción se usa para almacenar grandes cantidades de energía.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
            scene.idle(85);
            
            // Oculta la estructura para empezar la construcción paso a paso
            scene.world.hideSection([0, 0, 0, 4, 4, 4], Facing.up);
            scene.idle(10);
            
            // Paso 1: Construir el armazón exterior con Induction Casings
            scene.text(80, 'Los bordes del cubo deben ser Induction Casings.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
            
            // Esquinas
            scene.world.showSection([4, 0, 4], Facing.down);
            scene.world.showSection([4, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 0], Facing.down);
            scene.world.showSection([4, 4, 0], Facing.down);
            scene.world.showSection([0, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 4], Facing.down);
            scene.world.showSection([4, 0, 0], Facing.down);
            scene.world.showSection([0, 4, 0], Facing.down);
            scene.idle(5);

            // Bordes verticales
            [1, 2, 3].forEach(num => {
                scene.world.showSection([0, num, 0], Facing.down);
                scene.world.showSection([4, num, 0], Facing.down);
                scene.world.showSection([0, num, 4], Facing.down);
                scene.world.showSection([4, num, 4], Facing.down);
                scene.idle(5);
            });

            // Bordes horizontales
            [1, 2, 3].forEach(num => {
                scene.world.showSection([num, 0, 0], Facing.down);
                scene.world.showSection([num, 0, 4], Facing.down);
                scene.world.showSection([num, 4, 0], Facing.down);
                scene.world.showSection([num, 4, 4], Facing.down);
                scene.idle(5);
            });
            
            // Bordes de profundidad
            [1, 2, 3].forEach(num => {
                scene.world.showSection([0, 0, num], Facing.down);
                scene.world.showSection([4, 0, num], Facing.down);
                scene.world.showSection([0, 4, num], Facing.down);
                scene.world.showSection([4, 4, num], Facing.down);
                scene.idle(5);
            });
            
            scene.idle(60);
            
            // Paso 2: Añadir los bloques de las caras
            scene.text(80, 'Las caras pueden ser Casings o Structural Glass.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
            
            // Caras (vidrio estructural o casings)
            scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down); // top
            scene.idle(5)
            scene.world.showSection([1, 0, 1, 3, 0, 3], Facing.up); // bottom
            scene.idle(5)
            scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.south); // north
            scene.idle(5)
            scene.world.showSection([1, 1, 4, 3, 3, 4], Facing.north); // south
            scene.idle(5)
            scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.east); // west
            scene.idle(5)
            scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west); // east
            scene.idle(80);
            
            // Paso 3: Colocar los puertos de transferencia de energía
            scene.text(60, 'Los Puertos se usan para transferir energía.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
            scene.idle(80);
            scene.text(80, 'Los puertos se pueden cambiar con un Configurator.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
            scene.showControls(80, [1.5, 2.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
            scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "false"), true);
            scene.idle(20);
            scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "true"), true);
            scene.idle(60);
            
            // Paso 4: Instalar los componentes internos (Cells y Providers)
            scene.world.hideSection([0, 1, 0, 3, 4, 0], Facing.up)
            scene.world.hideSection([0, 1, 0, 0, 4, 3], Facing.up)
            scene.world.hideSection([1, 4, 1, 3, 4, 3], Facing.up)
            scene.idle(20);
            
            scene.text(60, 'Las Celdas de inducción aumentan la capacidad de almacenamiento.', [2.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
            scene.world.setBlock([2, 1, 2], 'mekanism:basic_induction_cell', false);
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(65);
            scene.text(60, 'Los Proveedores de inducción aumentan la velocidad de transferencia.', [2.5, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
            scene.world.setBlock([2, 2, 2], 'mekanism:basic_induction_provider', false);
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(65)
            
            scene.text(60, 'La matriz debe tener al menos una Celda y un Proveedor.', [2, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
            scene.idle(65)
            
            // Muestra toda la estructura completa
            scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.up)
            scene.world.showSection([0, 1, 0, 0, 4, 3], Facing.up)
            scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.up)
            scene.idle(10);
        });
});