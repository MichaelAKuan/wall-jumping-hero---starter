// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100020000100000300000000000300000003000001000003000000000000000000030000010000030303030000030004000300010103030000000000000003030300000101000003030303000000030303000001010000030000000000000000000000010303030300000300000000000000000101000000000003000000000003000001010000000000030003030000000000060100000000000300000000000300000101000000000003000300000000000001010006000000030003000000000000010100060000030300030000000300000101000600000300000300000000000001010000000000000003000003000000020100000000000000030000030000000101000606000000000000000300000001010606060000000000000003000003010100000003000000000000030000030101060000030000000000000300000301010000030300000000000303000003010100060000000000000003000000000101000000000000000000030000000001010600000000000303000300000300010100000000000000000000000003000101000000000600000000000000030001010600000000000303000003000000010100000000000600000000000000000101000303030606060606060606000000010000000000000000000000000000010105050000000000000000000000000101030303030303030303030303030301`, img`
2..2.....2...2.2
2..2.........2.2
2..2222..2...2.2
222.......222..2
2..2..2...222..2
2.....22.......2
2.....2.2...2..2
2.....2....22..2
2.....2.22....22
2.....2.....2..2
2.....2.2......2
2.2...2.2......2
2.2..22.2...2..2
2.2..2..2......2
2.......2..2...2
2.......2..2...2
2.....2....2...2
2..2.......2..22
2...2......2..22
22..2......2..22
2..22...2222..22
2.22...2..2....2
2.........2....2
22.....22.2..2.2
2............2.2
2..222.......2.2
22.....22..2...2
2.....2........2
2.22222222222..2
2..............2
222............2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.stairWest,sprites.vehicle.roadIntersection1,sprites.builtin.forestTiles23,sprites.dungeon.collectibleBlueCrystal,sprites.builtin.coral2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
