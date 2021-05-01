controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mytab.isHittingTile(CollisionDirection.Bottom) || (mytab.isHittingTile(CollisionDirection.Left) || mytab.isHittingTile(CollisionDirection.Right))) {
        mytab.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mytab.setImage(leftFacingImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mytab.setImage(rightFacingImg)
})
let mytab: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
let rightSwordOutImg = img`
    8 . . . 9 . . f f . . . . 8 . . 
    . . 8 . f f f f 9 f f . . . . 9 
    . . f f e e e e f 9 f f . . . . 
    . f f e e e e e f 6 6 f f . 6 . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 8 8 8 8 e f . . 
    f f f e 8 8 8 f f f f e 8 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e 8 9 4 4 e e f . . 
    . f e e 4 d 4 8 6 d d e f . . . 
    . . f e e e 4 d d d e e . 9 . . 
    . . . f 6 6 8 9 e e d d e 9 9 9 
    . 8 . f 4 4 4 e 4 4 d d e 9 8 8 
    . . . f f f f f e e e e . 9 9 9 
    6 . f f f f f f f f . . . 9 . . 
    . . f f f . . f f . . . 8 . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . 2 . . f f 5 f f f f . . 4 . 
    . . . . f f 4 f e e e e f f . . 
    . . . f f 5 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 4 2 2 e e f f f f f . 
    . . f 5 e f f f f 2 4 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 5 4 e 4 4 e f e f 
    . . . f e d d 2 2 4 d 4 e e f . 
    . . 2 . e e d d d 4 e e e f . . 
    4 4 2 e d d e e 2 2 2 2 f . . . 
    5 5 2 e d d 4 4 e 4 4 4 f . 4 . 
    4 4 2 . e e e e f f f f f . . . 
    . . 2 . . . f f f f f f f f . . 
    . . . . . 2 . f f . . f f f . 2 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
tiles.setTilemap(tilemap`level1`)
mytab = sprites.create(leftFacingImg, SpriteKind.Player)
scene.cameraFollowSprite(mytab)
controller.moveSprite(mytab, 150, 0)
tiles.placeOnTile(mytab, tiles.getTileLocation(1, 29))
mytab.ay = 450
game.onUpdateInterval(100, function () {
    if (mytab.isHittingTile(CollisionDirection.Left)) {
        mytab.ay = 0
        mytab.vy = 0
        mytab.setImage(leftSwordOutImg)
    }
    if (mytab.isHittingTile(CollisionDirection.Right)) {
        mytab.ax = 0
        mytab.vx = 15
        mytab.setImage(rightSwordOutImg)
    } else {
        mytab.ay = 300
    }
})
