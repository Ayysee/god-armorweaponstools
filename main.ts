player.onItemInteracted(WOODEN_AXE, function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(XP_BOTTLE, pos(0, 0, 0))
    }
})
player.onTravelled(SWIM_WATER, function () {
    player.teleport(pos(0, 2, 0))
    blocks.place(PACKED_ICE, pos(0, -1, 0))
})
player.onItemInteracted(GOLDEN_BOOTS, function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 800, 255)
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 800, 20)
    for (let index = 0; index < 200; index++) {
        blocks.fill(
        AIR,
        pos(10, 0, 10),
        pos(-10, 10, -10),
        FillOperation.Replace
        )
        blocks.replace(
        FIRE,
        AIR,
        pos(10, 0, 10),
        pos(-10, 0, -10)
        )
    }
})
player.onItemInteracted(WOODEN_SWORD, function () {
    mobs.applyEffect(STRENGTH, mobs.target(LOCAL_PLAYER), 200, 2)
})
player.onItemInteracted(GLASS_BOTTLE, function () {
    for (let index = 0; index < 50; index++) {
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 3, 0))
    }
})
player.onItemInteracted(LEATHER_CHESTPLATE, function () {
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 1000, 2)
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Sharpness",
    5
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Unbreaking",
    3
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Protection",
    4
    )
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Piercing",
    4
    )
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Mending",
    1
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Fire_aspect",
    2
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Thorns",
    3
    )
    mobs.enchant(
    mobs.target(NEAREST_PLAYER),
    "Efficiency ",
    5
    )
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Looting",
    3
    )
})
player.onItemInteracted(LEATHER_BOOTS, function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 1000, 4)
})
player.onItemInteracted(WOODEN_BUTTON, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_ENTITIES), 5, 255)
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 6, 255)
    gameplay.title(mobs.target(ALL_PLAYERS), "SERIOUS SERIES", "")
    mobs.spawn(PRIMED_TNT, pos(6, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(11, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(16, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(21, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(26, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(31, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(36, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(41, 70, 0))
    mobs.spawn(PRIMED_TNT, pos(46, 70, 0))
    for (let index = 0; index < 2; index++) {
        mobs.spawnParticle(EXPLOSION_HUGE, pos(6, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(11, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(16, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(21, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(26, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(31, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(36, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(41, 0, 0))
        mobs.spawnParticle(EXPLOSION_HUGE, pos(46, 0, 0))
    }
})
player.onItemInteracted(LEATHER_CAP, function () {
    mobs.applyEffect(WATER_BREATHING, mobs.target(LOCAL_PLAYER), 1000, 4)
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 1000, 4)
})
player.onItemInteracted(LEATHER_PANTS, function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 1000, 4)
})
player.onItemInteracted(WOODEN_PICKAXE, function () {
    mobs.applyEffect(HASTE, mobs.target(LOCAL_PLAYER), 200, 10)
})
