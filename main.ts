namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Decoracion = SpriteKind.create()
    export const Loot = SpriteKind.create()
}
namespace StatusBarKind {
    export const Contador = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (proyectil, enemigo) {
    let barra: StatusBarSprite;
sprites.destroy(proyectil)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    enemy_index = -1
    k = 0
    while (k < monstruosEnMapa.length) {
        if (monstruosEnMapa[k] == enemigo) {
            enemy_index = k
            break;
        }
        k += 1
    }
    if (enemy_index >= 0) {
        barra = barras[enemy_index]
        barra.value -= 1
if (barra.value == 2) {
            barra.setColor(9, 2)
        } else if (barra.value == 1) {
            barra.setColor(2, 2)
        }
        if (barra.value <= 0) {
            sprites.destroy(enemigo)
            sprites.destroy(barra)
            monstruosEnMapa.removeAt(enemy_index)
            barras.removeAt(enemy_index)
            monstruos_matados2 = monstruos_matados2 + 1
            info.changeScoreBy(1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == sabio) {
        hablarConSabio()
    } else if (otherSprite == herrero) {
        hablarConHerrero()
    } else if (otherSprite == lyra) {
        hablarConLyra()
    } else {
        hablarGuardian()
    }
})
function crearCofre () {
    cofre = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 5 5 5 5 5 5 5 5 5 5 e b . 
        b e 4 5 5 5 5 5 5 5 5 5 5 5 e b 
        b e 4 4 5 5 5 5 5 5 5 5 5 5 e b 
        b e 4 4 4 5 5 5 5 5 5 5 5 5 e b 
        b e e 4 4 4 5 5 5 5 5 5 5 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b 4 4 5 5 5 c b b c 5 5 5 5 5 b 
        b 4 4 4 4 5 5 5 5 5 5 5 5 5 5 b 
        b c 4 4 4 4 5 5 5 5 5 5 5 5 c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Loot)
    tiles.placeOnTile(cofre, tiles.getTileLocation(35, 7))
    cofre1 = sprites.create(assets.image`cofre1`, SpriteKind.Loot)
    cofre2 = sprites.create(assets.image`cofre0`, SpriteKind.Loot)
    cofre3 = sprites.create(assets.image`cofre2`, SpriteKind.Loot)
    cofre4 = sprites.create(assets.image`cofre3`, SpriteKind.Loot)
    cofre5 = sprites.create(assets.image`cofre4`, SpriteKind.Loot)
    tiles.placeOnTile(cofre5, tiles.getTileLocation(49, 10))
    tiles.placeOnTile(cofre2, tiles.getTileLocation(49, 4))
    tiles.placeOnTile(cofre3, tiles.getTileLocation(54, 12))
    tiles.placeOnTile(cofre4, tiles.getTileLocation(58, 6))
    tiles.placeOnTile(cofre1, tiles.getTileLocation(58, 12))
}
function crearDiario () {
    diario = sprites.create(assets.image`diario`, SpriteKind.Loot)
    tiles.placeOnTile(diario, tiles.getTileLocation(11, 23))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
    direccionNena = "abajo"
})
function crearMonstruos () {
    monstruo = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    barra2 = statusbars.create(20, 4, StatusBarKind.Health)
    barra2.value = 3
    barra2.max = 3
    barra2.attachToSprite(monstruo, 0, -2)
    barra2.setColor(7, 2)
    if (randint(0, 100) < 50) {
        tiles.placeOnTile(monstruo, tiles.getTileLocation(15, 17))
    } else {
        tiles.placeOnTile(monstruo, tiles.getTileLocation(25, 14))
    }
    monstruo.follow(nena, 30)
    monstruosEnMapa.push(monstruo)
    barras.push(barra2)
}
function hablarConLyra () {
    if (puede_hablar_lyra == false) {
        game.showLongText("Lyra: Habla con el herrero Bron primero.", DialogLayout.Bottom)
        game.showLongText("El te dirá cuando tienes que volver por aquí.", DialogLayout.Bottom)
        return
    }
    if (misionLyraActiva == false) {
        if (hablandoConLyra == 0) {
            game.showLongText("Lyra: ¡Hola! Soy Lyra, la guardiana del bosque.", DialogLayout.Bottom)
            game.showLongText("Lyra: El lago está lleno de criaturas peligrosas.", DialogLayout.Bottom)
            hablandoConLyra = 1
        } else if (hablandoConLyra == 1) {
            game.showLongText("Lyra: ¿Podrías ayudarme a eliminar 10 de ellas?", DialogLayout.Bottom)
            hablandoConLyra = 2
        } else if (hablandoConLyra == 2) {
            respuesta = game.ask("SÍ, te ayudo", "NO, tengo miedo")
            if (respuesta) {
                misionLyraActiva = true
                game.showLongText("Lyra: ¡Gracias! Usa el botón A para disparar.", DialogLayout.Bottom)
                hablandoConLyra = 3
                crearMonstruos()
                info.setScore(0)
            } else {
                game.showLongText("Lyra: Entiendo... vuelve cuando estés listo.", DialogLayout.Bottom)
                hablandoConLyra = 4
            }
        } else if (hablandoConLyra == 3) {
            game.showLongText("Lyra: Elimina 10 criaturas y vuelve a verme.", DialogLayout.Bottom)
        } else {
            if (hablandoConLyra == 4) {
                game.showLongText("Lyra: ¿Has cambiado de opinión?", DialogLayout.Bottom)
                hablandoConLyra = 2
            }
            if (hablandoConLyra == 5) {
                game.showLongText("Lyra: Gracias por limpiar el bosque.", DialogLayout.Bottom)
            }
        }
    } else if (monstruos_matados2 >= 10) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("Lyra: ¡Increíble! Has eliminado 10 criaturas.", DialogLayout.Bottom)
        limpiarMonstruos()
        misionLyraActiva = false
        hablandoConLyra = 5
        pause(500)
        crearCofre()
        game.showLongText("Lyra: Como prometí, aquí tienes la llave.", DialogLayout.Bottom)
        game.showLongText("Lyra: Esta es la segunda llave del cofre del Alquimista.", DialogLayout.Bottom)
        game.showLongText("Lyra: Para conseguir la tercera habla con el Guardian...", DialogLayout.Bottom)
        game.showLongText("Lyra: Lo encontrarás dentro de la mazmorra.", DialogLayout.Bottom)
        info.setScore(2)
        puede_hablar_guardian = true
    } else if (randint(0, 100) < 50) {
        game.showLongText("Lyra: ¿Cómo va la caza?", DialogLayout.Bottom)
        game.showLongText("Lyra: Llevas " + ("" + monstruos_matados2) + "/10 criaturas.", DialogLayout.Bottom)
    } else {
        game.showLongText("Lyra: Las criaturas aparecen por todo el bosque.", DialogLayout.Bottom)
    }
}
function hablarGuardian () {
    if (puede_hablar_guardian == false) {
        game.showLongText("Primero necesitas 2 llaves.", DialogLayout.Bottom)
        game.showLongText("Consiguelas y podremos hablar.", DialogLayout.Bottom)
        return
    }
    if (misionGuardianActiva == false) {
        if (hablandoConGuardian == 0) {
            game.showLongText("Guardián: Veo que tienes las dos llaves...", DialogLayout.Bottom)
            game.showLongText("Pero la tercera está en el Laberinto.", DialogLayout.Bottom)
            hablandoConGuardian = 1
        } else if (hablandoConGuardian == 1) {
            game.showLongText("¿Te atreves a entrar?", DialogLayout.Bottom)
            hablandoConGuardian = 2
        } else if (hablandoConGuardian == 2) {
            respuesta = game.ask("ENTRAR AL LABERINTO", "TENER MIEDO")
            if (respuesta) {
                misionGuardianActiva = true
                activarPortal()
                game.showLongText("Debes entrar en el portal.", DialogLayout.Bottom)
            } else {
                game.showLongText("Vuelve cuando tengas valor.", DialogLayout.Bottom)
                hablandoConGuardian = 4
            }
        } else {
            if (hablandoConGuardian == 4) {
                game.showLongText("Guardian: ¿Quieres saber que esconde este cofre?", DialogLayout.Bottom)
                hablandoConGuardian = 2
            }
        }
    } else if (llaveEncontrada == true) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("¡Tienes la tercera llave!", DialogLayout.Bottom)
        misionGuardianActiva = false
        pause(500)
        game.showLongText("Guardián: Ya puedes abrir el cofre del Alquimista.", DialogLayout.Bottom)
        puede_abrir_cofre = true
    }
}
function recogerDiario () {
    sprites.destroy(diario)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    diarioEncontrado = true
    pause(200)
    game.showLongText("¡Encontraste el diario!", DialogLayout.Bottom)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
    direccionNena = "derecha"
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
    direccionNena = "izquierda"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Decoracion, function (sprite3, otherSprite3) {
    if (otherSprite3 == portal) {
        sprites.destroy(portal)
        tiles.placeOnTile(nena, tiles.getTileLocation(53, 5))
        llaveEncontrada = false
    } else if (otherSprite3 == portal2) {
        sprites.destroy(portal2)
        tiles.placeOnTile(nena, tiles.getTileLocation(34, 4))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (misionLyraActiva == true) {
        proyectil22 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        proyectil22.setPosition(nena.x, nena.y)
        if (direccionNena == "abajo") {
            proyectil22.setVelocity(0, 150)
        } else if (direccionNena == "arriba") {
            proyectil22.setVelocity(0, -150)
        } else if (direccionNena == "izquierda") {
            proyectil22.setVelocity(-150, 0)
        } else if (direccionNena == "derecha") {
            proyectil22.setVelocity(150, 0)
        }
    }
})
function hablarConHerrero () {
    if (puede_hablar_herrero == false) {
        game.showLongText("Herrero Bron: Habla con el sabio Aleron primero.", DialogLayout.Bottom)
        game.showLongText("El te dará una buena razón para estar aquí.", DialogLayout.Bottom)
        return
    }
    if (misionHerreroActiva == false) {
        if (hablandoConHerrero == 0) {
            game.showLongText("Herrero: Ah, el sabio te envió.", DialogLayout.Bottom)
            hablandoConHerrero = 1
        } else if (hablandoConHerrero == 1) {
            game.showLongText("Herrero: Mi martillo se rompió. ¿Me ayudas a repararlo?", DialogLayout.Bottom)
            hablandoConHerrero = 2
        } else if (hablandoConHerrero == 2) {
            respuesta = game.ask("SI", "NO")
            if (respuesta) {
                misionHerreroActiva = true
                hablandoConHerrero = 3
                crearMinerales()
            } else {
                game.showLongText("Herrero: Otro día entonces...", DialogLayout.Bottom)
                hablandoConHerrero = 4
            }
        } else if (hablandoConHerrero == 3) {
            game.showLongText("Herrero: ¡Perfecto! Busca 3 minerales. Están cerca de la playa.", DialogLayout.Bottom)
        } else {
            if (hablandoConHerrero == 4) {
                game.showLongText("Herrero: ¿Cambiaste de opinión?", DialogLayout.Bottom)
                hablandoConHerrero = 2
            }
            if (hablandoConHerrero == 5) {
                game.showLongText("Herrero: Gracias por tu ayuda.", DialogLayout.Bottom)
            }
        }
    } else if (minerales_recogidos >= 3) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("Herrero: ¡Tienes todos los minerales!", DialogLayout.Bottom)
        misionHerreroActiva = false
        hablandoConHerrero = 5
        pause(500)
        game.showLongText("Herrero: Con esto reparo mi martillo...", DialogLayout.Bottom)
        game.showLongText("Mi abuelo forjó una caja especial. Para el Alquimista Valerio.", DialogLayout.Bottom)
        game.showLongText("Tenía tres cerraduras mágicas...", DialogLayout.Bottom)
        game.showLongText("Yo guardo la primera llave. Ahora es tuya.", DialogLayout.Bottom)
        game.showLongText("La segunda está con Lyra.", DialogLayout.Bottom)
        game.showLongText("Ve a verla en el bosque para conseguir la llave.", DialogLayout.Bottom)
        puede_hablar_lyra = true
        info.setScore(1)
    } else if (randint(0, 100) < 50) {
        game.showLongText("Herrero: ¿Ya miraste dentro de la mazmorra?", DialogLayout.Bottom)
        game.showLongText("Allí deben estar.", DialogLayout.Bottom)
    } else {
        game.showLongText("Herrero: ¿Ya encontraste los minerales?", DialogLayout.Bottom)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Loot, function (sprite2, otherSprite2) {
    if (otherSprite2 == diario) {
        recogerDiario()
    } else if (otherSprite2 == mineral1 || (otherSprite2 == mineral2 || otherSprite2 == mineral3)) {
        objeto = otherSprite2
        recogerMinerales()
    } else if (llaveEncontrada == true && otherSprite2 == cofre) {
        objeto = otherSprite2
        abrirCofres()
    } else if (otherSprite2 == cofre1 || (otherSprite2 == cofre2 || (otherSprite2 == cofre3 || (otherSprite2 == cofre4 || otherSprite2 == cofre5)))) {
        objeto = otherSprite2
        abrirCofres()
    }
})
function abrirCofres () {
    if (llaveEncontrada == true && (objeto == cofre && puede_abrir_cofre == true)) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        cofreAbierto = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b 4 5 5 5 5 5 5 5 5 5 5 5 5 5 b 
            b 4 5 5 5 5 5 5 5 5 5 5 5 5 4 b 
            b 4 4 5 5 5 5 5 5 5 5 5 5 4 4 b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b 4 4 4 5 5 5 5 5 5 5 5 5 5 5 b 
            b 4 4 4 4 4 5 5 5 5 5 5 5 5 5 b 
            b c 4 4 4 4 4 4 5 5 5 5 5 5 c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Decoracion)
        tiles.placeOnTile(cofreAbierto, tiles.getTileLocation(35, 7))
        historiaFinal()
    }
    if (objeto == cofre1) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        cofreAbierto1 = sprites.create(assets.image`cofreabierto3`, SpriteKind.Decoracion)
        tiles.placeOnTile(cofreAbierto1, tiles.getTileLocation(58, 12))
    } else if (objeto == cofre2) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        cofreAbierto2 = sprites.create(assets.image`cofreabierto0`, SpriteKind.Decoracion)
        tiles.placeOnTile(cofreAbierto2, tiles.getTileLocation(49, 4))
    } else if (objeto == cofre3) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        cofreAbierto3 = sprites.create(assets.image`cofreabierto4`, SpriteKind.Decoracion)
        tiles.placeOnTile(cofreAbierto3, tiles.getTileLocation(54, 12))
    } else if (objeto == cofre4) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
        cofreAbierto4 = sprites.create(assets.image`cofreabierto2`, SpriteKind.Decoracion)
        tiles.placeOnTile(cofreAbierto4, tiles.getTileLocation(58, 6))
    } else if (objeto == cofre5) {
        sprites.destroy(objeto)
        cofreAbierto5 = sprites.create(assets.image`cofreabierto1`, SpriteKind.Decoracion)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        llaveEncontrada = true
        tiles.placeOnTile(cofreAbierto5, tiles.getTileLocation(49, 10))
        game.splash("Encontraste la llave! Busca el portal para salir.")
        info.setScore(3)
        activarPortal2()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
    direccionNena = "arriba"
})
function hablarConSabio () {
    if (misionSabioActiva == false) {
        if (hablandoConSabio == 0) {
            game.showLongText("Sabio Aleron: ¡Hola! Perdí mi diario.", DialogLayout.Bottom)
            hablandoConSabio = 1
        } else if (hablandoConSabio == 1) {
            game.showLongText("Sabio: ¿Me ayudas a buscarlo?", DialogLayout.Bottom)
            hablandoConSabio = 2
        } else if (hablandoConSabio == 2) {
            respuesta = game.ask("SI", "NO")
            if (respuesta) {
                misionSabioActiva = true
                hablandoConSabio = 3
                crearDiario()
            } else {
                game.showLongText("Sabio: Tal vez otro día...", DialogLayout.Bottom)
                hablandoConSabio = 4
            }
        } else if (hablandoConSabio == 3) {
            game.showLongText("Sabio: ¡Gracias! Está en el bosque.", DialogLayout.Bottom)
        } else {
            if (hablandoConSabio == 4) {
                game.showLongText("Sabio: ¿Has cambiado de opinión?", DialogLayout.Bottom)
                hablandoConSabio = 2
            }
            if (hablandoConSabio == 5) {
                game.showLongText("Sabio: Gracias nuevamente por tu ayuda.", DialogLayout.Bottom)
            }
        }
    } else if (diarioEncontrado == true) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("Sabio: ¡Lo encontrase!", DialogLayout.Bottom)
        misionSabioActiva = false
        hablandoConSabio = 5
        pause(500)
        game.showLongText("Sabio: Este diario... habla de mi maestro.", DialogLayout.Bottom)
        game.showLongText("El Alquimista Valerio desapareció hace años...", DialogLayout.Bottom)
        game.showLongText("Y dejó tres llaves ocultas.", DialogLayout.Bottom)
        game.showLongText("La primera está con el herrero Bron.", DialogLayout.Bottom)
        game.showLongText("Ve a verlo. Está al otro lado del pueblo.", DialogLayout.Bottom)
        puede_hablar_herrero = true
    } else if (randint(0, 100) < 50) {
        game.showLongText("Sabio: ¿Ya miraste al fondo del bosque?", DialogLayout.Bottom)
        game.showLongText("Donde están los robles más grandes...", DialogLayout.Bottom)
        game.showLongText("Allí debe estar.", DialogLayout.Bottom)
    } else {
        game.showLongText("Sabio: ¿Ya lo encontrase?", DialogLayout.Bottom)
    }
}
function limpiarMonstruos () {
    while (i <= monstruosEnMapa.length - 1) {
        sprites.destroy(monstruosEnMapa[i])
        sprites.destroy(barras[i])
        i += 1
    }
    monstruosEnMapa = []
    barras = []
}
scene.onHitWall(SpriteKind.Projectile, function (proyectil2, location) {
    sprites.destroy(proyectil2)
})
function activarPortal () {
    portal = sprites.create(assets.image`portal`, SpriteKind.Decoracion)
    tiles.placeOnTile(portal, tiles.getTileLocation(34, 4))
}
function crearMapa () {
    misionSabioActiva = false
    hablandoConSabio = 0
    diarioEncontrado = false
    sabio = sprites.create(assets.image`sabio`, SpriteKind.NPC)
    lyra = sprites.create(assets.image`lyra`, SpriteKind.NPC)
    nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    herrero = sprites.create(assets.image`herrero`, SpriteKind.NPC)
    guardian = sprites.create(img`
        ......ffff..............
        ....fffb1fff............
        ...fffbbb1fff...........
        ..fff1bb1b1fff..........
        ..ff1bbbbbb11f..........
        ..fbbffffffb1f..........
        ..ffffeeeeffff......ccc.
        .ffefbf44fbfeff....cddc.
        .ffefbf44fbfeff...cddc..
        .fee4dddddd4eef.ccddc...
        fdfeeddddd4eeffecddc....
        fbffee4444ee4fddccc.....
        fbf4fb1bbb1f1edde.......
        fcf.fbbb1bbf44ee........
        .ff.f445544f............
        ....ffffffff............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.NPC)
    casaSabio = sprites.create(img`
        ....................e4e44e4e....................
        .................444eee44e4e444.................
        ..............444e44e5e44eee44e444..............
        ...........e44e44eeee5e44e5eeee44e44e...........
        ........eeee44e44e55e5e44e5e55e44e44eeee........
        .....444e44e44eeee55e5e44e5e55eeee44e44e444.....
        ...44eeee44e44e55e55eee44eee55e55e44e44eeee44...
        4cc44e44e44eeee55e55e5e44e5e55e55eeee44e44e44cc4
        6c6eee44e44e55e55e55e5e44e5e55e55e55e44e44eee6c6
        46644e44eeee55e55eeee5e44e5eeee55e55eeee44e44664
        46644e44e55e55eeee55e5e44e5e55eeee55e55e44e44664
        4cc44eeee55e55e55e55eee44eee55e55e55e55eeee44cc4
        6c644e55e55eeee55e55e5e44e5e55e55eeee55e55e446c6
        466eee55e55e55e55e55e5e44e5e55e55e55e55e55eee664
        46644e55eeee55e55e55e5e44e5e55e55e55eeee55e44664
        4cc44e55e55e55e55eeee5e44e5eeee55e55e55e55e44cc4
        6c644eeee55e55eeee44eee44eee44eeee55e55eeee446c6
        46644e55e55eeee44e44e4e44e4e44e44eeee55e55e44664
        466eee55e55e44e44e44e4e44e4e44e44e44e55e55eee664
        4cc44e55eeee44e44e44e4e44e4e44e44e44eeee55e44cc4
        6c644e55e44e44e44e44eee44eee44e44e44e44e55e446c6
        46644eeee44e44e44eeecc6666cceee44e44e44eeee44664
        46644e44e44e44eeecc6666666666cceee44e44e44e44664
        4cceee44e44eeecc66666cccccc66666cceee44e44eeecc4
        6c644e44eeecc66666cc64444446cc66666cceee44e446c6
        46644e44cc66666cc64444444444446cc66666cc44e44664
        46644cc6666ccc64444444444444444446ccc6666cc44664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e5555555e4c16e4e44e44e44e44ee61c4e5555555e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.Decoracion)
    arbol1 = sprites.create(img`
        .....79....797....97..7.....77..
        ..9.99999.977779..799.7..7797...
        ..93377.969747.766777766779e777.
        ...1379.73377317677636776763377.
        99.797.73176777777731767c77137..
        7e9494777733769967776766677677.7
        ..73397773777966667676966777677.
        .9.3197977779917777667677766766.
        .7777674376767377676677673776767
        ..733.77777977777713973313767c67
        ..379799777799777737973777731777
        799997799.7967777777677777996.66
        .997777ee7633367767767767667677.
        .931377777731767767e67776767....
        .9337377.779777776776776676777.6
        9..777777.77777773776367767766..
        9.997...77737777316731767667.66.
        ..999.7737.77.796367cc667631676.
        ...7...71377.777676697317773776.
        .....77....7.9977e7669.7...666..
        .....97....7799666767..7.6......
        .....7..........4eeee.6.........
        ................46ee6...........
        ................4eeec...........
        ................4eeec...........
        ...............e4eece...........
        ...............eeeece...........
        ..............44eeecce..........
        ............444eeeeccc..........
        .........eee44ee.ececccec.......
        .......eeee.4ee..ece.cccec......
        ....eee....e......e...eee.ccee..
        `, SpriteKind.Decoracion)
    arbol2 = sprites.create(assets.image`miImagen0`, SpriteKind.Decoracion)
    arbol3 = sprites.create(assets.image`swampTree1`, SpriteKind.Decoracion)
    casaHerrero = sprites.create(img`
        ....................e4e44e4e....................
        .................444eee44e4e444.................
        ..............444e44e2e44eee44e444..............
        ...........e44e44eeee2e44e2eeee44e44e...........
        ........eeee44e44e22e2e44e2e22e44e44eeee........
        .....444e44e44eeee22e2e44e2e22eeee44e44e444.....
        ...44eeee44e44e22e22eee44eee22e22e44e44eeee44...
        4cc44e44e44eeee22e22e2e44e2e22e22eeee44e44e44cc4
        6c6eee44e44e22e22e22e2e44e2e22e22e22e44e44eee6c6
        46644e44eeee22e22eeee2e44e2eeee22e22eeee44e44664
        46644e44e22e22eeee22e2e44e2e22eeee22e22e44e44664
        4cc44eeee22e22e22e22eee44eee22e22e22e22eeee44cc4
        6c644e22e22eeee22e22e2e44e2e22e22eeee22e22e446c6
        466eee22e22e22e22e22e2e44e2e22e22e22e22e22eee664
        46644e22eeee22e22e22e2e44e2e22e22e22eeee22e44664
        4cc44e22e22e22e22eeee2e44e2eeee22e22e22e22e44cc4
        6c644eeee22e22eeee44eee44eee44eeee22e22eeee446c6
        46644e22e22eeee44e44e4e44e4e44e44eeee22e22e44664
        466eee22e22e44e44e44e4e44e4e44e44e44e22e22eee664
        4cc44e22eeee44e44e44e4e44e4e44e44e44eeee22e44cc4
        6c644e22e44e44e44e44eee44eee44e44e44e44e22e446c6
        46644eeee44e44e44eeecc6666cceee44e44e44eeee44664
        46644e44e44e44eeecc6666666666cceee44e44e44e44664
        4cceee44e44eeecc66666cccccc66666cceee44e44eeecc4
        6c644e44eeecc66666cc64444446cc66666cceee44e446c6
        46644e44cc66666cc64444444444446cc66666cc44e44664
        46644cc6666ccc64444444444444444446ccc6666cc44664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.Decoracion)
    controller.moveSprite(nena)
    tiles.setCurrentTilemap(tilemap`nivel1`)
    tiles.placeOnTile(sabio, tiles.getTileLocation(3, 3))
    tiles.placeOnTile(casaSabio, tiles.getTileLocation(3, 1))
    tiles.placeOnTile(herrero, tiles.getTileLocation(14, 3))
    tiles.placeOnTile(guardian, tiles.getTileLocation(32, 7))
    tiles.placeOnTile(casaHerrero, tiles.getTileLocation(14, 1))
    tiles.placeOnTile(lyra, tiles.getTileLocation(3, 21))
    tiles.placeOnTile(nena, tiles.getTileLocation(3, 5))
    tiles.placeOnTile(arbol1, tiles.getTileLocation(12, 21))
    tiles.placeOnTile(arbol2, tiles.getTileLocation(10, 21))
    tiles.placeOnTile(arbol3, tiles.getTileLocation(2, 21))
    scene.cameraFollowSprite(nena)
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
}
function recogerMinerales () {
    if (objeto == mineral1 || (objeto == mineral2 || objeto == mineral3)) {
        sprites.destroy(objeto)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        minerales_recogidos = minerales_recogidos + 1
    }
}
function crearMinerales () {
    info.setScore(0)
    mineral1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b a c . . . . . . 
        . . . . c c b c f a c . . . . . 
        . . . . a f b b b a c . . . . . 
        . . . . a f f b a f c c . . . . 
        . . . . c b b a f f c . . . . . 
        . . . . . b b a f a . . . . . . 
        . . . . . . c b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Loot)
    tiles.placeOnTile(mineral1, tiles.getTileLocation(23, 2))
    mineral2 = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Loot)
    tiles.placeOnTile(mineral2, tiles.getTileLocation(37, 7))
    mineral3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c . . 
        . c c c c c . c c c c c f c c . 
        c c a c c c c c 8 f f c f f c c 
        c a f a a c c a f f c a a f f c 
        c a 8 f a a c a c c c a a a a c 
        c b c f a a a a a c c c c c c c 
        c b b a a c f 8 a c c c 8 c c c 
        . c b b a b c f a a a 8 8 c c . 
        . . . . a a b b b a a 8 a c . . 
        . . . . c b c a a c c b . . . . 
        . . . . b b c c a b b a . . . . 
        . . . . b b a b a 6 a . . . . . 
        . . . . c b b b 6 6 c . . . . . 
        . . . . . c a 6 6 b c . . . . . 
        . . . . . . . c c c . . . . . . 
        `, SpriteKind.Loot)
    tiles.placeOnTile(mineral3, tiles.getTileLocation(13, 10))
}
function historiaFinal () {
    game.showLongText("Dentro del cofre hay un libro titulado:", DialogLayout.Bottom)
    game.showLongText("'LOS SECRETOS DEL ALQUIMISTA VALERIO'", DialogLayout.Bottom)
    game.showLongText("En la dedicatoria dice:", DialogLayout.Bottom)
    game.showLongText("'Para el héroe que reunió las tres llaves:", DialogLayout.Bottom)
    game.showLongText("Has demostrado compasión, valentía y perseverancia.", DialogLayout.Bottom)
    game.showLongText("Eres digno de heredar mi conocimiento.", DialogLayout.Bottom)
    game.showLongText("Toma este libro. Contiene todo mi conocimiento.", DialogLayout.Bottom)
    game.showLongText("Úsalo para hacer del mundo un lugar mejor.", DialogLayout.Bottom)
    game.showLongText("Con cariño,", DialogLayout.Bottom)
    game.showLongText("Valerio'", DialogLayout.Bottom)
    game.splash("¡Obtuviste el 'Libro de la Sabiduría Eterna'!", "Ahora eres el nuevo guardián del conocimiento.")
    game.splash("Tu aventura termina aquí...", "pero tu legado comienza ahora.")
    game.splash("¡FELICIDADES! Completaste El Legado del Alquimista")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
}
function activarPortal2 () {
    portal2 = sprites.create(assets.image`portal0`, SpriteKind.Decoracion)
    tiles.placeOnTile(portal2, tiles.getTileLocation(56, 12))
}
let casaHerrero: Sprite = null
let arbol3: Sprite = null
let arbol2: Sprite = null
let arbol1: Sprite = null
let casaSabio: Sprite = null
let guardian: Sprite = null
let i = 0
let hablandoConSabio = 0
let misionSabioActiva = false
let cofreAbierto5: Sprite = null
let cofreAbierto4: Sprite = null
let cofreAbierto3: Sprite = null
let cofreAbierto2: Sprite = null
let cofreAbierto1: Sprite = null
let cofreAbierto: Sprite = null
let objeto: Sprite = null
let mineral3: Sprite = null
let mineral2: Sprite = null
let mineral1: Sprite = null
let hablandoConHerrero = 0
let minerales_recogidos = 0
let misionHerreroActiva = false
let puede_hablar_herrero = false
let proyectil22: Sprite = null
let portal2: Sprite = null
let portal: Sprite = null
let diarioEncontrado = false
let puede_abrir_cofre = false
let hablandoConGuardian = 0
let llaveEncontrada = false
let misionGuardianActiva = false
let puede_hablar_guardian = false
let respuesta = false
let hablandoConLyra = 0
let misionLyraActiva = false
let puede_hablar_lyra = false
let barra2: StatusBarSprite = null
let monstruo: Sprite = null
let direccionNena = ""
let nena: Sprite = null
let diario: Sprite = null
let cofre5: Sprite = null
let cofre4: Sprite = null
let cofre3: Sprite = null
let cofre2: Sprite = null
let cofre1: Sprite = null
let cofre: Sprite = null
let lyra: Sprite = null
let herrero: Sprite = null
let sabio: Sprite = null
let monstruos_matados2 = 0
let barras: StatusBarSprite[] = []
let monstruosEnMapa: Sprite[] = []
let k = 0
let enemy_index = 0
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.LoopingInBackground)
let enemy_index2 = 0
let j = 0
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.splash("El Legado del Alquimista", "Habla con los NPC's")
crearMapa()
game.onUpdateInterval(3000, function () {
    if (misionLyraActiva == true) {
        if (monstruosEnMapa.length < 5) {
            crearMonstruos()
        }
    }
})
