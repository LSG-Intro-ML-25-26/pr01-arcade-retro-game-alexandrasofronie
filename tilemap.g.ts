// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel3":
            case "nivel3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "nivel":
            case "nivel2":return tiles.createTilemap(hex`10001000070f0f100f0f100f0f100f0f100f0f0e160101010101010101010101010101170901150112110b0b110b0b110b15010d090109010d010101010101010109010d160109011706010107100f0e0101011709011601140f100f1303050d0109010d0901090101010101010204170116060d1601090112110b0b110b0b0c010a0b0c090116010d010101010101010101010d090109011701010107100f0f010e010d160109010d06010109010101010d01170901160114100f0f13010112110c0b0c09010901010101010101060d0305060d16010a010b110b0b110b0b0c0204010d090108010101010101010101010101170a0b0a110b0b110b0b110b0b110b0b0c`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . 2 . . . . . . . . 2 . 2 
2 . 2 . 2 . . . 2 2 2 2 . . . 2 
2 . 2 . 2 2 2 2 2 . . 2 . 2 . 2 
2 . 2 . . . . . . . . 2 . 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . 2 . . . 2 2 2 2 . 2 . 2 
2 . 2 . 2 . . . 2 . . . . 2 . 2 
2 . 2 . 2 2 2 2 2 . . 2 2 2 2 2 
2 . 2 . . . . . . . . 2 . . . 2 
2 . 2 . 2 2 2 2 2 2 2 2 . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2], TileScale.Sixteen);
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`3c001e00121212121212121212121212121212121212222323282323232823231f28231f1f281f1f1f281f205a5a5a5a3e3d3d613d3d613d3d613d3d613d3d3a120606050517040518040606050505050512371b261b1b1b482a1b1b1b1b1b3e3d3d3d3d3d3d3a355a5a5a5a5e2929292929292929292929292929601204040605040505040504040406060604121e251b482a1b1b26482a1b482a3f3f3f2929292939365a5a5a5a5b294229405f44445f44445f4442295c120418161804041705040418041716170412121e271d1d1d271d1b1b1b1b1b3c29292929292939355a5a5a5a5b295b295c29292929292929295b295c12181616111811111616111111161616161616161a1a26261b1b1b1b1b1b1b3c29294042292939355a5a5a5a5e295b29605d29293e613d3a2929296012161611111611111111111111111111161616161b2626261b1b1b1b261b1b3c29294143292939355a5a5a5a5b295e29413d613d4362255c295b295c12111111111116111111111616111111111116161a261b1b1b1b1b1b482a1b3c29292929292939365a5a5a5a5b295b292929292929632460295e5d5c12050604040616060504040606040405051212222823231f281f1b1b1b1b1b3c29292929292939355a5a5a5a5e295b29405f44445f444438293b443812121212120411051212121212121212121222241b1b1b1b1b1b1b1b1b1b1b3b44444444444438355a5a5a5a5b295e295c292929292929292929295c181818181205160512222823232328232323241b1b1b1b26481b1b261b1b494546454645464546355a5a5a5a5b295b29602929293e613d3d293a295c18181818120516041221292929292929292929482a2a1b481b1b1b482a1b2a4747474747474747365a5a5a5a5e295b295c5d29295b292929295c29601818181812051105121e1d271d1d1d2725291b1b1b1b2a2a1b1b1b1b1b1b494546454645464747355a5a5a5a5b295e2941613d3d432929405f384438171717171704160417171717171717171e1d1d1d271d1b1b1d271d1d1d271d1d1d271d1d1d47471c5a5a5a5a5b295b292929292929295d5c62255d5c170202100505110505010301030101172d01012e2e2e2a1b2e2e2e0101012e2e052e2e2f171515175a5a5a5a5e293b29445f44445f4444386324295c17030201010605040101010301010317010101030505151b050501010101010433555732175557175a5a5a5a5b295b292929292929292929292929601701030101040505050301100213051701010105050b1615080a05030101330555541304055454055a5a5a5a3b443b5f44445f44445f44445f4444381703100b0e0a010401011002020503172c0105190e08151a08080a050133043354265457555454575a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a1710100708080f0301051302020101172c05190e080715160707080a0533331354481a48545454135a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a1701030c08080a0301050102020101172c190e080707151608070808050406551a4826481b2648545a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a17100109080708030101010103011511161111111115161a080808080a3355481b1a481348261a545a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a170103010c080d01011010010115151516111111151515160708070808335426262a1b48481b48565a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a170205050505030101100301100115141111151114081615080808080d33581a481a26481a4856065a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a170405050504051003050505050501172c0c0e0e080816150808080d04053358482a1a481b4813325a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a170204040402020101100101010102172c040c0808081a1508070d0504331333541b4826265404325a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a171717171717171717171717171717172c05050c07071b1508070405343355541a482648484833065a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a4f4e4d504c51524b534a4f4e4d504c513334340504041b1b050505345904542648481b1a485457335a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a3434592a2a48481b2a34484848341b344834341b3459341b345934345959482a1a264848135456055a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a34592a48481b594859591b482a5948481b4859592a2a2a2a34341b591b34342648484854560405325a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a341b3434342a2a2a2a345959595959594859593434341b341b3434341b34545456585456040506055a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a2b3030303030303030303030303030303030303030303030303030303030303030303030303030315a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a`, img`
222222222222222222222222222222222222222222222222222222222222
2.2222..2....222.22............22222222222222..............2
2.222........222.222..................2222222.2.2222222222.2
2......2...2.....222222222.....2......2222222.2.2........2.2
22...2.........................2..22..2222222.2.2...2222...2
2..............................2..22..2222222.2.22222..2.2.2
2..............................2......2222222.2........2.2.2
2................222222222.....2......2222222.2.22222222.222
22222...222222222222...........22222222222222.2.2..........2
22222...22222222222............22222222222222.2.2...2222.2.2
22222...22.............................222222.2.2...2....2.2
22222...222222222..............222222..222222.2.22222..22222
22222...22222222222222..2222222222222..222222.2........2...2
222............2....................2..222222.2.22222222...2
2.2............2....................2..222222.2............2
2...........22.2.....2..22........2.....22222222222222222222
2..222.....22..2...222..222.............22222222222222222222
2..222....222..2..2222..2222...2.......222222222222222222222
2..2222....22..2.22222..2222............22222222222222222222
2...222.................22222......2....22222222222222222222
2...222.................22222...........22222222222222222222
22...................2..22222...........22222222222222222222
2.........222..2.22222..2222..........2.22222222222222222222
22...22.......22..2222..222...2.........22222222222222222222
2222222222222222...222..22..............22222222222222222222
2222222222222222........................22222222222222222222
....................................2...22222222222222222222
........................................22222222222222222222
........................................22222222222222222222
222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile3,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.swamp.swampTile13,sprites.swamp.swampTile9,sprites.builtin.coral5,sprites.swamp.swampTile8,sprites.swamp.swampTile6,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.swamp.swampTile7,sprites.swamp.swampTile3,sprites.castle.tileDarkGrass1,sprites.dungeon.floorLight2,sprites.builtin.brick,sprites.castle.rock1,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.builtin.forestTiles0,sprites.castle.shrub,sprites.swamp.swampTile4,sprites.dungeon.floorMixed,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.floorDark5,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorDark1,sprites.skillmap.islandTile6,sprites.skillmap.islandTile3,sprites.skillmap.islandTile0,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile5,sprites.skillmap.islandTile4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.stairWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.floorLight0,sprites.dungeon.floorDark4,sprites.dungeon.doorLockedEast,sprites.builtin.crowd9,sprites.builtin.crowd7,sprites.builtin.crowd4,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd8,sprites.swamp.swampTile16,sprites.swamp.swampTile10,sprites.swamp.swampTile19,sprites.swamp.swampTile11,sprites.swamp.swampTile18,sprites.dungeon.floorDark0,sprites.builtin.forestTiles10,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast0,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico1":
            case "tile3":return tile3;
            case "diario":
            case "tile10":return tile10;
            case "diario0":
            case "tile1":return tile1;
            case "portal":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
