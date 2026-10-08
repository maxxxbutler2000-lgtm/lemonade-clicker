'use strict';
// Stable names identify purchases and achievements in old and new saves.
const LEMONADE_CONTENT={
  "upgrades": [
    {
      "name": "Fresh lemonade recipe",
      "icon": "↟",
      "cost": 20,
      "gain": 1,
      "stageIndex": 0
    },
    {
      "name": "Upselling",
      "icon": "↟",
      "cost": 80,
      "gain": 2,
      "flavor": "Offer a bigger cup",
      "stageIndex": 0
    },
    {
      "name": "Premium lemonade",
      "icon": "✦",
      "cost": 150,
      "gain": 3,
      "stageIndex": 0
    },
    {
      "name": "Family-size pitchers",
      "icon": "ϟ",
      "cost": 630,
      "gain": 7,
      "stageIndex": 1
    },
    {
      "name": "Lemon squeezer",
      "icon": "◈",
      "cost": 6300,
      "gain": 32,
      "stageIndex": 2
    },
    {
      "name": "Turbo juicer",
      "icon": "✳",
      "cost": 63000,
      "gain": 140,
      "stageIndex": 3
    },
    {
      "name": "Citrus cannon",
      "icon": "⊕",
      "cost": 630000,
      "gain": 700,
      "stageIndex": 4
    },
    {
      "name": "Neon lemonade upselling",
      "icon": "✧",
      "cost": 63000000,
      "gain": 110000,
      "stageIndex": 6
    },
    {
      "name": "Jurassic lemon squeeze",
      "icon": "✧",
      "cost": 6300000000,
      "gain": 4700000,
      "stageIndex": 8
    },
    {
      "name": "Clockwork sales pitch",
      "icon": "✧",
      "cost": 63000000000,
      "gain": 21000000,
      "stageIndex": 9
    },
    {
      "name": "Mermaid citrus recipe",
      "icon": "✧",
      "cost": 630000000000,
      "gain": 210000000,
      "stageIndex": 10
    },
    {
      "name": "Cloud-nine cup sizes",
      "icon": "✧",
      "cost": 6300000000000,
      "gain": 2100000000,
      "stageIndex": 11
    },
    {
      "name": "Dragonfire lemon press",
      "icon": "✧",
      "cost": 63000000000000,
      "gain": 21000000000,
      "stageIndex": 12
    },
    {
      "name": "Planetary press",
      "icon": "⊕",
      "cost": 630000000000000,
      "gain": 140000000000,
      "stageIndex": 13
    },
    {
      "name": "Rocket juicer",
      "icon": "ϟ",
      "cost": 6300000000000000,
      "gain": 1400000000000,
      "stageIndex": 14
    },
    {
      "name": "Moonbeam squeeze",
      "icon": "☽",
      "cost": 63000000000000000,
      "gain": 6900000000000,
      "stageIndex": 15
    },
    {
      "name": "Martian sales pitch",
      "icon": "✦",
      "cost": 630000000000000000,
      "gain": 46000000000000,
      "stageIndex": 16
    },
    {
      "name": "Pixel-perfect lemonade",
      "icon": "✧",
      "cost": 6300000000000000000,
      "gain": 460000000000000,
      "stageIndex": 17
    },
    {
      "name": "Titan-sized cups",
      "icon": "✧",
      "cost": 63000000000000000000,
      "gain": 4600000000000000,
      "stageIndex": 18
    },
    {
      "name": "Comet cup combo",
      "icon": "✧",
      "cost": 630000000000000000000,
      "gain": 31000000000000000,
      "stageIndex": 19
    },
    {
      "name": "Saturn ring press",
      "icon": "◎",
      "cost": 6300000000000000000000,
      "gain": 210000000000000000,
      "stageIndex": 20
    },
    {
      "name": "Sunshine supernova",
      "icon": "☀",
      "cost": 63000000000000000000000,
      "gain": 2100000000000000000,
      "stageIndex": 21
    },
    {
      "name": "Sun-harvesting squeeze",
      "icon": "✧",
      "cost": 85000000000000000000000,
      "gain": 2600000000000000000,
      "stageIndex": 21
    },
    {
      "name": "Stellar lemon crusher",
      "icon": "☀",
      "cost": 630000000000000000000000,
      "gain": 11000000000000000000,
      "stageIndex": 22
    },
    {
      "name": "Constellation cookie combo",
      "icon": "✧",
      "cost": 850000000000000000000000,
      "gain": 14000000000000000000,
      "stageIndex": 22
    },
    {
      "name": "Nebula nectar recipe",
      "icon": "✧",
      "cost": 6300000000000000000000000,
      "gain": 110000000000000000000,
      "stageIndex": 23
    },
    {
      "name": "Black hole squeezer",
      "icon": "◉",
      "cost": 630000000000000000000000000,
      "gain": 6800000000000000000000,
      "stageIndex": 25
    },
    {
      "name": "Event-horizon upselling",
      "icon": "✧",
      "cost": 850000000000000000000000000,
      "gain": 8200000000000000000000,
      "stageIndex": 25
    },
    {
      "name": "Ocean-sized pitcher",
      "icon": "✧",
      "cost": 6300000000000000000000000000,
      "gain": 23000000000000000000000,
      "stageIndex": 26
    },
    {
      "name": "Anti-gravity upselling",
      "icon": "✧",
      "cost": 63000000000000000000000000000,
      "gain": 230000000000000000000000,
      "stageIndex": 27
    },
    {
      "name": "Quantum squeeze",
      "icon": "⟐",
      "cost": 630000000000000000000000000000,
      "gain": 2300000000000000000000000,
      "stageIndex": 28
    },
    {
      "name": "Atomic lemon squeezer",
      "icon": "✧",
      "cost": 850000000000000000000000000000,
      "gain": 2800000000000000000000000,
      "stageIndex": 28
    },
    {
      "name": "Yesterday’s premium recipe",
      "icon": "✧",
      "cost": 6300000000000000000000000000000,
      "gain": 23000000000000000000000000,
      "stageIndex": 29
    },
    {
      "name": "Dimension-spanning deals",
      "icon": "⟐",
      "cost": 63000000000000000000000000000000,
      "gain": 230000000000000000000000000,
      "stageIndex": 30
    },
    {
      "name": "Wormhole upselling",
      "icon": "∞",
      "cost": 630000000000000000000000000000000,
      "gain": 1200000000000000000000000000,
      "stageIndex": 31
    },
    {
      "name": "Rainbow squeeze express",
      "icon": "✧",
      "cost": 850000000000000000000000000000000,
      "gain": 1500000000000000000000000000,
      "stageIndex": 31
    },
    {
      "name": "Mirror lemon concentrate",
      "icon": "✧",
      "cost": 6300000000000000000000000000000000,
      "gain": 7600000000000000000000000000,
      "stageIndex": 32
    },
    {
      "name": "Pocket-universe pitcher",
      "icon": "✧",
      "cost": 63000000000000000000000000000000000,
      "gain": 51000000000000000000000000000,
      "stageIndex": 33
    },
    {
      "name": "Crystal lemon crusher",
      "icon": "✧",
      "cost": 630000000000000000000000000000000000,
      "gain": 340000000000000000000000000000,
      "stageIndex": 34
    },
    {
      "name": "Dream-powered citrus",
      "icon": "✧",
      "cost": 6300000000000000000000000000000000000,
      "gain": 2300000000000000000000000000000,
      "stageIndex": 35
    },
    {
      "name": "Reality juicer",
      "icon": "✧",
      "cost": 63000000000000000000000000000000000000,
      "gain": 23000000000000000000000000000000,
      "stageIndex": 36
    },
    {
      "name": "Origami lemon press",
      "icon": "✧",
      "cost": 85000000000000000000000000000000000000,
      "gain": 28000000000000000000000000000000,
      "stageIndex": 36
    },
    {
      "name": "Multiverse squeeze",
      "icon": "⊛",
      "cost": 630000000000000000000000000000000000000,
      "gain": 230000000000000000000000000000000,
      "stageIndex": 37
    },
    {
      "name": "Infinite-room upselling",
      "icon": "✧",
      "cost": 6300000000000000000000000000000000000000,
      "gain": 1500000000000000000000000000000000,
      "stageIndex": 38
    },
    {
      "name": "Celestial citrus nectar",
      "icon": "✧",
      "cost": 63000000000000000000000000000000000000000,
      "gain": 15000000000000000000000000000000000,
      "stageIndex": 39
    },
    {
      "name": "Probability sales pitch",
      "icon": "✧",
      "cost": 630000000000000000000000000000000000000000,
      "gain": 150000000000000000000000000000000000,
      "stageIndex": 40
    },
    {
      "name": "Reality-free lemonade",
      "icon": "✧",
      "cost": 6300000000000000000000000000000000000000000,
      "gain": 1500000000000000000000000000000000000,
      "stageIndex": 41
    },
    {
      "name": "Timeless lemonade recipe",
      "icon": "✧",
      "cost": 63000000000000000000000000000000000000000000,
      "gain": 10000000000000000000000000000000000000,
      "stageIndex": 42
    },
    {
      "name": "Heart-of-lemon squeeze",
      "icon": "✧",
      "cost": 630000000000000000000000000000000000000000000,
      "gain": 67000000000000000000000000000000000000,
      "stageIndex": 43
    },
    {
      "name": "The final lemon",
      "icon": "✳",
      "cost": 6300000000000000000000000000000000000000000000,
      "gain": 670000000000000000000000000000000000000,
      "stageIndex": 44
    },
    {
      "name": "Forever-fresh recipe",
      "icon": "✧",
      "cost": 8500000000000000000000000000000000000000000000,
      "gain": 810000000000000000000000000000000000000,
      "stageIndex": 44
    }
  ],
  "generators": [
    {
      "name": "Lemonade helper",
      "icon": "⌁",
      "cost": 50,
      "gain": 1,
      "stageIndex": 0
    },
    {
      "name": "Cookie counter",
      "icon": "◉",
      "cost": 200,
      "gain": 2,
      "flavor": "Sell cookies with your lemonade",
      "stageIndex": 0
    },
    {
      "name": "Lemon picker",
      "icon": "♧",
      "cost": 1200,
      "gain": 8,
      "stageIndex": 0
    },
    {
      "name": "Juice cart",
      "icon": "▤",
      "cost": 1500,
      "gain": 10,
      "stageIndex": 1
    },
    {
      "name": "Lemon orchard",
      "icon": "♧",
      "cost": 6300,
      "gain": 21,
      "stageIndex": 2
    },
    {
      "name": "Juice-serving robot",
      "icon": "▣",
      "cost": 63000,
      "gain": 93,
      "stageIndex": 3
    },
    {
      "name": "Lemonade bottling crew",
      "icon": "▥",
      "cost": 85000,
      "gain": 120,
      "stageIndex": 3
    },
    {
      "name": "Bottling line",
      "icon": "≋",
      "cost": 120000,
      "gain": 150,
      "stageIndex": 3
    },
    {
      "name": "Citrus power plant",
      "icon": "◎",
      "cost": 630000,
      "gain": 930,
      "stageIndex": 4
    },
    {
      "name": "Lemonade delivery fleet",
      "icon": "▰",
      "cost": 6300000,
      "gain": 7100,
      "stageIndex": 5
    },
    {
      "name": "Mega lemonade plant",
      "icon": "▥",
      "cost": 8500000,
      "gain": 8600,
      "stageIndex": 5
    },
    {
      "name": "Neon lemon night market franchise",
      "icon": "✦",
      "cost": 63000000,
      "gain": 71000,
      "stageIndex": 6
    },
    {
      "name": "Lemonade city franchise",
      "icon": "▥",
      "cost": 630000000,
      "gain": 470000,
      "stageIndex": 7
    },
    {
      "name": "Dinosaur lemonade park franchise",
      "icon": "✦",
      "cost": 6300000000,
      "gain": 3200000,
      "stageIndex": 8
    },
    {
      "name": "Clockwork citrus city franchise",
      "icon": "✦",
      "cost": 63000000000,
      "gain": 14000000,
      "stageIndex": 9
    },
    {
      "name": "Underwater lemonade kingdom franchise",
      "icon": "✦",
      "cost": 630000000000,
      "gain": 140000000,
      "stageIndex": 10
    },
    {
      "name": "Cloud-top citrus resort franchise",
      "icon": "✦",
      "cost": 6300000000000,
      "gain": 1400000000,
      "stageIndex": 11
    },
    {
      "name": "Dragonfruit dragon roost franchise",
      "icon": "✦",
      "cost": 63000000000000,
      "gain": 14000000000,
      "stageIndex": 12
    },
    {
      "name": "Global lemonade deliveries",
      "icon": "⊕",
      "cost": 630000000000000,
      "gain": 92000000000,
      "stageIndex": 13
    },
    {
      "name": "Orbital juice station",
      "icon": "✧",
      "cost": 6300000000000000,
      "gain": 460000000000,
      "stageIndex": 14
    },
    {
      "name": "Lemon launchpad",
      "icon": "ϟ",
      "cost": 8500000000000000,
      "gain": 560000000000,
      "stageIndex": 14
    },
    {
      "name": "Moon lemon orchard",
      "icon": "☽",
      "cost": 63000000000000000,
      "gain": 4600000000000,
      "stageIndex": 15
    },
    {
      "name": "Martian juice dome",
      "icon": "⟐",
      "cost": 630000000000000000,
      "gain": 31000000000000,
      "stageIndex": 16
    },
    {
      "name": "Pixel lemon arcade planet franchise",
      "icon": "✦",
      "cost": 6300000000000000000,
      "gain": 160000000000000,
      "stageIndex": 17
    },
    {
      "name": "Giant lemon titan planet franchise",
      "icon": "✦",
      "cost": 63000000000000000000,
      "gain": 1600000000000000,
      "stageIndex": 18
    },
    {
      "name": "Cosmic cookie bakery",
      "icon": "✦",
      "cost": 630000000000000000000,
      "gain": 11000000000000000,
      "flavor": "Fresh cookies for hungry astronauts",
      "stageIndex": 19
    },
    {
      "name": "Asteroid lemon mine",
      "icon": "◈",
      "cost": 850000000000000000000,
      "gain": 14000000000000000,
      "stageIndex": 19
    },
    {
      "name": "Candy comet cafe franchise",
      "icon": "✦",
      "cost": 1200000000000000000000,
      "gain": 17000000000000000,
      "stageIndex": 19
    },
    {
      "name": "Saturn lemonade routes",
      "icon": "◎",
      "cost": 6300000000000000000000,
      "gain": 68000000000000000,
      "stageIndex": 20
    },
    {
      "name": "Solar citrus fleet",
      "icon": "☀",
      "cost": 8500000000000000000000,
      "gain": 82000000000000000,
      "stageIndex": 20
    },
    {
      "name": "Lemon-powered Dyson sphere franchise",
      "icon": "✦",
      "cost": 63000000000000000000000,
      "gain": 680000000000000000,
      "stageIndex": 21
    },
    {
      "name": "Starlight cookie constellation franchise",
      "icon": "✦",
      "cost": 630000000000000000000000,
      "gain": 6800000000000000000,
      "stageIndex": 22
    },
    {
      "name": "Living lemon nebula franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000,
      "gain": 68000000000000000000,
      "stageIndex": 23
    },
    {
      "name": "Galactic lemonade network",
      "icon": "✦",
      "cost": 63000000000000000000000000,
      "gain": 460000000000000000000,
      "stageIndex": 24
    },
    {
      "name": "Black-hole drive-through franchise",
      "icon": "✦",
      "cost": 630000000000000000000000000,
      "gain": 2300000000000000000000,
      "stageIndex": 25
    },
    {
      "name": "Cosmic ocean of lemonade franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000000,
      "gain": 16000000000000000000000,
      "stageIndex": 26
    },
    {
      "name": "Gravity-flipped juice city franchise",
      "icon": "✦",
      "cost": 63000000000000000000000000000,
      "gain": 160000000000000000000000,
      "stageIndex": 27
    },
    {
      "name": "Tiny atom lemonade civilization franchise",
      "icon": "✦",
      "cost": 630000000000000000000000000000,
      "gain": 1600000000000000000000000,
      "stageIndex": 28
    },
    {
      "name": "Time-travel lemonade express franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000000000,
      "gain": 16000000000000000000000000,
      "stageIndex": 29
    },
    {
      "name": "Interdimensional lemonade bazaar",
      "icon": "⊛",
      "cost": 63000000000000000000000000000000,
      "gain": 76000000000000000000000000,
      "stageIndex": 30
    },
    {
      "name": "Wormhole lemonade deliveries",
      "icon": "∞",
      "cost": 630000000000000000000000000000000,
      "gain": 760000000000000000000000000,
      "stageIndex": 31
    },
    {
      "name": "Rainbow wormhole bazaar franchise",
      "icon": "✦",
      "cost": 850000000000000000000000000000000,
      "gain": 920000000000000000000000000,
      "stageIndex": 31
    },
    {
      "name": "Mirror-world citrus exchange franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000000000000,
      "gain": 5100000000000000000000000000,
      "stageIndex": 32
    },
    {
      "name": "Pocket-universe picnic franchise",
      "icon": "✦",
      "cost": 63000000000000000000000000000000000,
      "gain": 34000000000000000000000000000,
      "stageIndex": 33
    },
    {
      "name": "Crystal citrus dimension franchise",
      "icon": "✦",
      "cost": 630000000000000000000000000000000000,
      "gain": 230000000000000000000000000000,
      "stageIndex": 34
    },
    {
      "name": "Dreamland lemonade carnival franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000000000000000,
      "gain": 1500000000000000000000000000000,
      "stageIndex": 35
    },
    {
      "name": "Origami universe orchard franchise",
      "icon": "✦",
      "cost": 63000000000000000000000000000000000000,
      "gain": 15000000000000000000000000000000,
      "stageIndex": 36
    },
    {
      "name": "Parallel-universe orchards",
      "icon": "♧",
      "cost": 630000000000000000000000000000000000000,
      "gain": 150000000000000000000000000000000,
      "stageIndex": 37
    },
    {
      "name": "Infinite hotel juice service franchise",
      "icon": "✦",
      "cost": 6300000000000000000000000000000000000000,
      "gain": 1000000000000000000000000000000000,
      "stageIndex": 38
    },
    {
      "name": "Celestial citrus garden franchise",
      "icon": "✦",
      "cost": 63000000000000000000000000000000000000000,
      "gain": 10000000000000000000000000000000000,
      "stageIndex": 39
    },
    {
      "name": "Probability lemonade exchange franchise",
      "icon": "✦",
      "cost": 630000000000000000000000000000000000000000,
      "gain": 100000000000000000000000000000000000,
      "stageIndex": 40
    },
    {
      "name": "Reality bottling engine",
      "icon": "▣",
      "cost": 6300000000000000000000000000000000000000000,
      "gain": 1000000000000000000000000000000000000,
      "stageIndex": 41
    },
    {
      "name": "Beyond-reality cookie empire franchise",
      "icon": "✦",
      "cost": 8500000000000000000000000000000000000000000,
      "gain": 1200000000000000000000000000000000000,
      "stageIndex": 41
    },
    {
      "name": "Lemonade at the end of time franchise",
      "icon": "✦",
      "cost": 63000000000000000000000000000000000000000000,
      "gain": 6700000000000000000000000000000000000,
      "stageIndex": 42
    },
    {
      "name": "The lemonverse heart franchise",
      "icon": "✦",
      "cost": 630000000000000000000000000000000000000000000,
      "gain": 45000000000000000000000000000000000000,
      "stageIndex": 43
    },
    {
      "name": "Infinite lemon continuum",
      "icon": "∞",
      "cost": 6300000000000000000000000000000000000000000000,
      "gain": 450000000000000000000000000000000000000,
      "stageIndex": 44
    },
    {
      "name": "Sunshine beyond infinity franchise",
      "icon": "✦",
      "cost": 8500000000000000000000000000000000000000000000,
      "gain": 540000000000000000000000000000000000000,
      "stageIndex": 44
    }
  ],
  "boosts": [
    {
      "name": "Sales training",
      "icon": "↟",
      "cost": 500,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 0
    },
    {
      "name": "Juicer tune-up",
      "icon": "⚙",
      "cost": 1500,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 0
    },
    {
      "name": "Cookies & lemonade combo",
      "icon": "◉",
      "cost": 2500,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 0
    },
    {
      "name": "Golden lemons",
      "icon": "✦",
      "cost": 10000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 0
    },
    {
      "name": "Citrus overdrive",
      "icon": "ϟ",
      "cost": 50000,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 3
    },
    {
      "name": "Factory automation",
      "icon": "▣",
      "cost": 500000,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 4
    },
    {
      "name": "Neon lemon night market sponsorship",
      "icon": "☀",
      "cost": 50000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 6
    },
    {
      "name": "Franchise fever",
      "icon": "▥",
      "cost": 500000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 7
    },
    {
      "name": "Dinosaur lemonade park sponsorship",
      "icon": "☀",
      "cost": 5000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 8
    },
    {
      "name": "Dragonfruit dragon roost sponsorship",
      "icon": "☀",
      "cost": 50000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 12
    },
    {
      "name": "Worldwide advertising",
      "icon": "⊕",
      "cost": 500000000000000,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 13
    },
    {
      "name": "Rocket-powered squeeze",
      "icon": "ϟ",
      "cost": 5000000000000000,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 14
    },
    {
      "name": "Zero-gravity lemons",
      "icon": "☽",
      "cost": 50000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 15
    },
    {
      "name": "Martian fertilizer",
      "icon": "♧",
      "cost": 500000000000000000,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 16
    },
    {
      "name": "Giant lemon titan planet sponsorship",
      "icon": "☀",
      "cost": 50000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 18
    },
    {
      "name": "Asteroid ice cubes",
      "icon": "◈",
      "cost": 500000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 19
    },
    {
      "name": "Solar-powered squeezing",
      "icon": "☀",
      "cost": 50000000000000000000000,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 21
    },
    {
      "name": "Living lemon nebula sponsorship",
      "icon": "☀",
      "cost": 5000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 23
    },
    {
      "name": "Galactic sponsorship",
      "icon": "✦",
      "cost": 50000000000000000000000000,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 24
    },
    {
      "name": "Black hole lemon concentrate",
      "icon": "◉",
      "cost": 500000000000000000000000000,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 25
    },
    {
      "name": "Black-hole drive-through sponsorship",
      "icon": "☀",
      "cost": 680000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 25
    },
    {
      "name": "Time-loop staff",
      "icon": "◎",
      "cost": 5000000000000000000000000000000,
      "desc": "Double automatic earnings · one time",
      "click": 1,
      "auto": 2,
      "stageIndex": 29
    },
    {
      "name": "Fourth-dimensional sales pitch",
      "icon": "⟐",
      "cost": 50000000000000000000000000000000,
      "desc": "Double clicks per tap · one time",
      "click": 2,
      "auto": 1,
      "stageIndex": 30
    },
    {
      "name": "Wormhole express shipping",
      "icon": "∞",
      "cost": 500000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 31
    },
    {
      "name": "Alternate-reality recipe",
      "icon": "✧",
      "cost": 5000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 32
    },
    {
      "name": "Pocket-universe picnic sponsorship",
      "icon": "☀",
      "cost": 50000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 33
    },
    {
      "name": "Crystal citrus dimension sponsorship",
      "icon": "☀",
      "cost": 500000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 34
    },
    {
      "name": "Multiverse monopoly",
      "icon": "⊛",
      "cost": 500000000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 37
    },
    {
      "name": "Beyond-reality cookie empire sponsorship",
      "icon": "☀",
      "cost": 5000000000000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 41
    },
    {
      "name": "Lemonade at the end of time sponsorship",
      "icon": "☀",
      "cost": 50000000000000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 42
    },
    {
      "name": "Infinite lemonade glitch",
      "icon": "∞",
      "cost": 5000000000000000000000000000000000000000000000,
      "desc": "×1.5 sales and business earnings · one time",
      "click": 1.5,
      "auto": 1.5,
      "stageIndex": 44
    }
  ],
  "stages": [
    {
      "name": "Lemonade stand",
      "at": 0,
      "file": "stage-classic-1.png",
      "id": "stage-redone-1",
      "legacyAt": 0
    },
    {
      "name": "Upgraded lemonade stand",
      "at": 250,
      "file": "stage-classic-2.png",
      "id": "stage-redone-2",
      "legacyAt": 250
    },
    {
      "name": "Lemonade shop",
      "at": 2500,
      "file": "stage-classic-3.png",
      "id": "stage-redone-3",
      "legacyAt": 2500
    },
    {
      "name": "Bottling workshop",
      "at": 25000,
      "file": "stage-classic-4.png",
      "id": "stage-redone-4",
      "legacyAt": 25000
    },
    {
      "name": "Lemonade factory",
      "at": 250000,
      "file": "stage-classic-5.png",
      "id": "stage-redone-5",
      "legacyAt": 250000
    },
    {
      "name": "Mega lemonade factory",
      "at": 2500000,
      "file": "stage-classic-6.png",
      "id": "stage-redone-6",
      "legacyAt": 2500000
    },
    {
      "name": "Neon lemon night market",
      "at": 25000000,
      "file": "stage-expansion-1.png",
      "id": "world-1",
      "legacyAt": 25000000000000000
    },
    {
      "name": "Lemonade metropolis",
      "at": 250000000,
      "file": "stage-classic-7.png",
      "id": "stage-redone-7",
      "legacyAt": 25000000
    },
    {
      "name": "Dinosaur lemonade park",
      "at": 2500000000,
      "file": "stage-expansion-4.png",
      "id": "world-4",
      "legacyAt": 25000000000000000000
    },
    {
      "name": "Clockwork citrus city",
      "at": 25000000000,
      "file": "stage-expansion-5.png",
      "id": "world-5",
      "legacyAt": 250000000000000000000
    },
    {
      "name": "Underwater lemonade kingdom",
      "at": 250000000000,
      "file": "stage-expansion-3.png",
      "id": "world-3",
      "legacyAt": 2500000000000000000
    },
    {
      "name": "Cloud-top citrus resort",
      "at": 2500000000000,
      "file": "stage-expansion-2.png",
      "id": "world-2",
      "legacyAt": 250000000000000000
    },
    {
      "name": "Dragonfruit dragon roost",
      "at": 25000000000000,
      "file": "stage-expansion-7.png",
      "id": "world-7",
      "legacyAt": 2.5e+22
    },
    {
      "name": "Worldwide lemonade empire",
      "at": 250000000000000,
      "file": "stage-classic-8.png",
      "id": "stage-redone-8",
      "legacyAt": 250000000
    },
    {
      "name": "Lemon launch headquarters",
      "at": 2500000000000000,
      "file": "stage-classic-9.png",
      "id": "stage-redone-9",
      "legacyAt": 2500000000
    },
    {
      "name": "Moon lemonade colony",
      "at": 25000000000000000,
      "file": "stage-classic-10.png",
      "id": "stage-redone-10",
      "legacyAt": 25000000000
    },
    {
      "name": "Martian lemonade civilization",
      "at": 250000000000000000,
      "file": "stage-classic-11.png",
      "id": "stage-redone-11",
      "legacyAt": 250000000000
    },
    {
      "name": "Pixel lemon arcade planet",
      "at": 2500000000000000000,
      "file": "stage-expansion-15.png",
      "id": "world-15",
      "legacyAt": 2.5e+30
    },
    {
      "name": "Giant lemon titan planet",
      "at": 25000000000000000000,
      "file": "stage-expansion-25.png",
      "id": "world-25",
      "legacyAt": 2.5e+40
    },
    {
      "name": "Candy comet cafe",
      "at": 250000000000000000000,
      "file": "stage-expansion-6.png",
      "id": "world-6",
      "legacyAt": 2.5e+21
    },
    {
      "name": "Solar system juice trade",
      "at": 2500000000000000000000,
      "file": "stage-classic-12.png",
      "id": "stage-redone-12",
      "legacyAt": 2500000000000
    },
    {
      "name": "Lemon-powered Dyson sphere",
      "at": 25000000000000000000000,
      "file": "stage-expansion-8.png",
      "id": "world-8",
      "legacyAt": 2.5e+23
    },
    {
      "name": "Starlight cookie constellation",
      "at": 250000000000000000000000,
      "file": "stage-expansion-9.png",
      "id": "world-9",
      "legacyAt": 2.5e+24
    },
    {
      "name": "Living lemon nebula",
      "at": 2500000000000000000000000,
      "file": "stage-expansion-19.png",
      "id": "world-19",
      "legacyAt": 2.5e+34
    },
    {
      "name": "Galactic lemonade empire",
      "at": 25000000000000000000000000,
      "file": "stage-classic-13.png",
      "id": "stage-redone-13",
      "legacyAt": 25000000000000
    },
    {
      "name": "Black-hole drive-through",
      "at": 250000000000000000000000000,
      "file": "stage-expansion-10.png",
      "id": "world-10",
      "legacyAt": 2.5e+25
    },
    {
      "name": "Cosmic ocean of lemonade",
      "at": 2500000000000000000000000000,
      "file": "stage-expansion-20.png",
      "id": "world-20",
      "legacyAt": 2.5e+35
    },
    {
      "name": "Gravity-flipped juice city",
      "at": 25000000000000000000000000000,
      "file": "stage-expansion-17.png",
      "id": "world-17",
      "legacyAt": 2.5e+32
    },
    {
      "name": "Tiny atom lemonade civilization",
      "at": 250000000000000000000000000000,
      "file": "stage-expansion-24.png",
      "id": "world-24",
      "legacyAt": 2.5e+39
    },
    {
      "name": "Time-travel lemonade express",
      "at": 2500000000000000000000000000000,
      "file": "stage-expansion-11.png",
      "id": "world-11",
      "legacyAt": 2.5e+26
    },
    {
      "name": "Multidimensional lemonade empire",
      "at": 25000000000000000000000000000000,
      "file": "stage-classic-14.png",
      "id": "stage-redone-14",
      "legacyAt": 250000000000000
    },
    {
      "name": "Rainbow wormhole bazaar",
      "at": 250000000000000000000000000000000,
      "file": "stage-expansion-18.png",
      "id": "world-18",
      "legacyAt": 2.5e+33
    },
    {
      "name": "Mirror-world citrus exchange",
      "at": 2500000000000000000000000000000000,
      "file": "stage-expansion-12.png",
      "id": "world-12",
      "legacyAt": 2.5e+27
    },
    {
      "name": "Pocket-universe picnic",
      "at": 25000000000000000000000000000000000,
      "file": "stage-expansion-13.png",
      "id": "world-13",
      "legacyAt": 2.5e+28
    },
    {
      "name": "Crystal citrus dimension",
      "at": 250000000000000000000000000000000000,
      "file": "stage-expansion-16.png",
      "id": "world-16",
      "legacyAt": 2.5e+31
    },
    {
      "name": "Dreamland lemonade carnival",
      "at": 2500000000000000000000000000000000000,
      "file": "stage-expansion-14.png",
      "id": "world-14",
      "legacyAt": 2.5e+29
    },
    {
      "name": "Origami universe orchard",
      "at": 25000000000000000000000000000000000000,
      "file": "stage-expansion-21.png",
      "id": "world-21",
      "legacyAt": 2.5e+36
    },
    {
      "name": "Multiverse lemonade citadel",
      "at": 250000000000000000000000000000000000000,
      "file": "stage-classic-15.png",
      "id": "stage-redone-15",
      "legacyAt": 2500000000000000
    },
    {
      "name": "Infinite hotel juice service",
      "at": 2500000000000000000000000000000000000000,
      "file": "stage-expansion-23.png",
      "id": "world-23",
      "legacyAt": 2.5e+38
    },
    {
      "name": "Celestial citrus garden",
      "at": 25000000000000000000000000000000000000000,
      "file": "stage-expansion-26.png",
      "id": "world-26",
      "legacyAt": 2.5e+41
    },
    {
      "name": "Probability lemonade exchange",
      "at": 250000000000000000000000000000000000000000,
      "file": "stage-expansion-27.png",
      "id": "world-27",
      "legacyAt": 2.5e+42
    },
    {
      "name": "Beyond-reality cookie empire",
      "at": 2500000000000000000000000000000000000000000,
      "file": "stage-expansion-28.png",
      "id": "world-28",
      "legacyAt": 2.5e+43
    },
    {
      "name": "Lemonade at the end of time",
      "at": 25000000000000000000000000000000000000000000,
      "file": "stage-expansion-22.png",
      "id": "world-22",
      "legacyAt": 2.5e+37
    },
    {
      "name": "The lemonverse heart",
      "at": 250000000000000000000000000000000000000000000,
      "file": "stage-expansion-29.png",
      "id": "world-29",
      "legacyAt": 2.5e+44
    },
    {
      "name": "Sunshine beyond infinity",
      "at": 2500000000000000000000000000000000000000000000,
      "file": "stage-expansion-30-divine.png",
      "id": "world-30",
      "legacyAt": 2.4999999999999997e+45
    }
  ],
  "stageFlavors": [
    "A little stand. A very big dream.",
    "More lemons. More customers.",
    "Your very own lemonade shop.",
    "Bottling sunshine by the crate.",
    "The neighborhood is just the beginning.",
    "An empire made of freshly squeezed ambition.",
    "The city glows. The lemonade flows.",
    "Every block has a lemonade stand now.",
    "Tiny arms. Huge thirst.",
    "Every gear turns toward lemonade.",
    "Even mermaids need a cold drink.",
    "Refreshments above the clouds.",
    "Your delivery drivers breathe fire.",
    "One planet. One favorite drink.",
    "Next stop: the stars.",
    "One small sip for humankind.",
    "Red planet. Yellow lemons.",
    "One more quarter, one more sip.",
    "Your orchard has its own gravity.",
    "Sweet treats at escape velocity.",
    "Delivering fresh juice across the solar system.",
    "Bottling an entire sun.",
    "Cookies written in the stars.",
    "The stars are growing lemons now.",
    "Billions of stars. Billions of thirsty customers.",
    "Please keep your cup outside the event horizon.",
    "Sail the seas of freshly squeezed sunshine.",
    "Upside down, freshly squeezed.",
    "Smallest cups. Biggest ambitions.",
    "Yesterday’s customers, tomorrow’s recipe.",
    "New dimensions. Same delicious lemonade.",
    "All roads lead to a cold glass.",
    "Your reflection opened a franchise.",
    "A whole universe in a lunchbox.",
    "Every crystal contains a tiny lemon.",
    "Dream big. Squeeze bigger.",
    "Fold a universe. Plant an orchard.",
    "Every reality deserves a cold glass.",
    "Unlimited rooms. Unlimited room service.",
    "Even the gods want refills.",
    "All possible customers at once.",
    "Cookies outside the laws of physics.",
    "Last call before forever.",
    "The source of every lemon ever grown.",
    "One lemon. Infinite power."
  ],
  "goals": [
    {
      "name": "Open for business",
      "desc": "Reach Lemonade shop",
      "metric": "stage",
      "target": 2,
      "reward": 100,
      "minStage": 2,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Bottled sunshine",
      "desc": "Reach Bottling workshop",
      "metric": "stage",
      "target": 3,
      "reward": 1000,
      "minStage": 3,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Factory boss",
      "desc": "Reach Lemonade factory",
      "metric": "stage",
      "target": 4,
      "reward": 10000,
      "minStage": 4,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Lemonade empire",
      "desc": "Reach Mega lemonade factory",
      "metric": "stage",
      "target": 5,
      "reward": 100000,
      "minStage": 5,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Neon lemon night market discovered",
      "desc": "Reach Neon lemon night market",
      "metric": "stage",
      "target": 6,
      "reward": 1000000,
      "minStage": 6,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "City of citrus",
      "desc": "Reach Lemonade metropolis",
      "metric": "stage",
      "target": 7,
      "reward": 10000000,
      "minStage": 7,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Dinosaur lemonade park discovered",
      "desc": "Reach Dinosaur lemonade park",
      "metric": "stage",
      "target": 8,
      "reward": 100000000,
      "minStage": 8,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Clockwork citrus city discovered",
      "desc": "Reach Clockwork citrus city",
      "metric": "stage",
      "target": 9,
      "reward": 1000000000,
      "minStage": 9,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Underwater lemonade kingdom discovered",
      "desc": "Reach Underwater lemonade kingdom",
      "metric": "stage",
      "target": 10,
      "reward": 10000000000,
      "minStage": 10,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Cloud-top citrus resort discovered",
      "desc": "Reach Cloud-top citrus resort",
      "metric": "stage",
      "target": 11,
      "reward": 100000000000,
      "minStage": 11,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Dragonfruit dragon roost discovered",
      "desc": "Reach Dragonfruit dragon roost",
      "metric": "stage",
      "target": 12,
      "reward": 1000000000000,
      "minStage": 12,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Worldwide lemonade sensation",
      "desc": "Reach Worldwide lemonade empire",
      "metric": "stage",
      "target": 13,
      "reward": 10000000000000,
      "minStage": 13,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Lemonade ready for liftoff",
      "desc": "Reach Lemon launch headquarters",
      "metric": "stage",
      "target": 14,
      "reward": 100000000000000,
      "minStage": 14,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "One giant sip",
      "desc": "Reach Moon lemonade colony",
      "metric": "stage",
      "target": 15,
      "reward": 1000000000000000,
      "minStage": 15,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Red planet refreshments",
      "desc": "Reach Martian lemonade civilization",
      "metric": "stage",
      "target": 16,
      "reward": 10000000000000000,
      "minStage": 16,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Pixel lemon arcade planet discovered",
      "desc": "Reach Pixel lemon arcade planet",
      "metric": "stage",
      "target": 17,
      "reward": 100000000000000000,
      "minStage": 17,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Giant lemon titan planet discovered",
      "desc": "Reach Giant lemon titan planet",
      "metric": "stage",
      "target": 18,
      "reward": 1000000000000000000,
      "minStage": 18,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Candy comet cafe discovered",
      "desc": "Reach Candy comet cafe",
      "metric": "stage",
      "target": 19,
      "reward": 10000000000000000000,
      "minStage": 19,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Ringed-planet regular",
      "desc": "Reach Solar system juice trade",
      "metric": "stage",
      "target": 20,
      "reward": 100000000000000000000,
      "minStage": 20,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Lemon-powered Dyson sphere discovered",
      "desc": "Reach Lemon-powered Dyson sphere",
      "metric": "stage",
      "target": 21,
      "reward": 1000000000000000000000,
      "minStage": 21,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Starlight cookie constellation discovered",
      "desc": "Reach Starlight cookie constellation",
      "metric": "stage",
      "target": 22,
      "reward": 10000000000000000000000,
      "minStage": 22,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Living lemon nebula discovered",
      "desc": "Reach Living lemon nebula",
      "metric": "stage",
      "target": 23,
      "reward": 100000000000000000000000,
      "minStage": 23,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Milky Way lemonade",
      "desc": "Reach Galactic lemonade empire",
      "metric": "stage",
      "target": 24,
      "reward": 1000000000000000000000000,
      "minStage": 24,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Black-hole drive-through discovered",
      "desc": "Reach Black-hole drive-through",
      "metric": "stage",
      "target": 25,
      "reward": 10000000000000000000000000,
      "minStage": 25,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Cosmic ocean of lemonade discovered",
      "desc": "Reach Cosmic ocean of lemonade",
      "metric": "stage",
      "target": 26,
      "reward": 100000000000000000000000000,
      "minStage": 26,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Gravity-flipped juice city discovered",
      "desc": "Reach Gravity-flipped juice city",
      "metric": "stage",
      "target": 27,
      "reward": 1000000000000000000000000000,
      "minStage": 27,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Tiny atom lemonade civilization discovered",
      "desc": "Reach Tiny atom lemonade civilization",
      "metric": "stage",
      "target": 28,
      "reward": 10000000000000000000000000000,
      "minStage": 28,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Time-travel lemonade express discovered",
      "desc": "Reach Time-travel lemonade express",
      "metric": "stage",
      "target": 29,
      "reward": 100000000000000000000000000000,
      "minStage": 29,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Lemonade through the portal",
      "desc": "Reach Multidimensional lemonade empire",
      "metric": "stage",
      "target": 30,
      "reward": 1000000000000000000000000000000,
      "minStage": 30,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Rainbow wormhole bazaar discovered",
      "desc": "Reach Rainbow wormhole bazaar",
      "metric": "stage",
      "target": 31,
      "reward": 10000000000000000000000000000000,
      "minStage": 31,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Mirror-world citrus exchange discovered",
      "desc": "Reach Mirror-world citrus exchange",
      "metric": "stage",
      "target": 32,
      "reward": 100000000000000000000000000000000,
      "minStage": 32,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Pocket-universe picnic discovered",
      "desc": "Reach Pocket-universe picnic",
      "metric": "stage",
      "target": 33,
      "reward": 1000000000000000000000000000000000,
      "minStage": 33,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Crystal citrus dimension discovered",
      "desc": "Reach Crystal citrus dimension",
      "metric": "stage",
      "target": 34,
      "reward": 10000000000000000000000000000000000,
      "minStage": 34,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Dreamland lemonade carnival discovered",
      "desc": "Reach Dreamland lemonade carnival",
      "metric": "stage",
      "target": 35,
      "reward": 100000000000000000000000000000000000,
      "minStage": 35,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Origami universe orchard discovered",
      "desc": "Reach Origami universe orchard",
      "metric": "stage",
      "target": 36,
      "reward": 1000000000000000000000000000000000000,
      "minStage": 36,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Multiverse lemonade mogul",
      "desc": "Reach Multiverse lemonade citadel",
      "metric": "stage",
      "target": 37,
      "reward": 10000000000000000000000000000000000000,
      "minStage": 37,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Infinite hotel juice service discovered",
      "desc": "Reach Infinite hotel juice service",
      "metric": "stage",
      "target": 38,
      "reward": 100000000000000000000000000000000000000,
      "minStage": 38,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Celestial citrus garden discovered",
      "desc": "Reach Celestial citrus garden",
      "metric": "stage",
      "target": 39,
      "reward": 1000000000000000000000000000000000000000,
      "minStage": 39,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Probability lemonade exchange discovered",
      "desc": "Reach Probability lemonade exchange",
      "metric": "stage",
      "target": 40,
      "reward": 10000000000000000000000000000000000000000,
      "minStage": 40,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Beyond-reality cookie empire discovered",
      "desc": "Reach Beyond-reality cookie empire",
      "metric": "stage",
      "target": 41,
      "reward": 100000000000000000000000000000000000000000,
      "minStage": 41,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Lemonade at the end of time discovered",
      "desc": "Reach Lemonade at the end of time",
      "metric": "stage",
      "target": 42,
      "reward": 1000000000000000000000000000000000000000000,
      "minStage": 42,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "The lemonverse heart discovered",
      "desc": "Reach The lemonverse heart",
      "metric": "stage",
      "target": 43,
      "reward": 10000000000000000000000000000000000000000000,
      "minStage": 43,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Sunshine beyond infinity discovered",
      "desc": "Reach Sunshine beyond infinity",
      "metric": "stage",
      "target": 44,
      "reward": 100000000000000000000000000000000000000000000,
      "minStage": 44,
      "section": "Business discoveries",
      "sectionIndex": 0
    },
    {
      "name": "Fresh batch",
      "desc": "Earn 250 lifetime clicks",
      "metric": "total",
      "target": 250,
      "reward": 10,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Ten thousand served",
      "desc": "Earn 10K lifetime clicks",
      "metric": "total",
      "target": 10000,
      "reward": 400,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Lemonade millionaire",
      "desc": "Earn 1M lifetime clicks",
      "metric": "total",
      "target": 1000000,
      "reward": 40000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Unstoppable lemonade",
      "desc": "Earn 100M lifetime clicks",
      "metric": "total",
      "target": 100000000,
      "reward": 4000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Citrus billionaire",
      "desc": "Earn 1B lifetime clicks",
      "metric": "total",
      "target": 1000000000,
      "reward": 40000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Ten billion served",
      "desc": "Earn 10B lifetime clicks",
      "metric": "total",
      "target": 10000000000,
      "reward": 400000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Citrus trillionaire",
      "desc": "Earn 1T lifetime clicks",
      "metric": "total",
      "target": 1000000000000,
      "reward": 40000000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Quadrillion lemonade club",
      "desc": "Earn 10Qa lifetime clicks",
      "metric": "total",
      "target": 10000000000000000,
      "reward": 400000000000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Citrus quintillion club",
      "desc": "Earn 1Qi lifetime clicks",
      "metric": "total",
      "target": 1000000000000000000,
      "reward": 40000000000000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Lemonade beyond counting",
      "desc": "Earn 1Sx lifetime clicks",
      "metric": "total",
      "target": 1e+21,
      "reward": 40000000000000000000,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Cosmic cash",
      "desc": "Earn 100T lifetime clicks",
      "metric": "total",
      "target": 100000000000000,
      "reward": 4000000000000,
      "minStage": 24,
      "section": "Lemonade milestones",
      "sectionIndex": 1
    },
    {
      "name": "Squeeze master",
      "desc": "Reach 100 clicks per tap",
      "metric": "power",
      "target": 100,
      "reward": 200,
      "section": "Sales mastery",
      "sectionIndex": 2,
      "minStage": 2
    },
    {
      "name": "Million-lemon squeeze",
      "desc": "Reach 1M clicks per tap",
      "metric": "power",
      "target": 1000000,
      "reward": 2000000,
      "section": "Sales mastery",
      "sectionIndex": 2,
      "minStage": 6
    },
    {
      "name": "Billion-lemon squeeze",
      "desc": "Reach 1B clicks per tap",
      "metric": "power",
      "target": 1000000000,
      "reward": 2000000000,
      "section": "Sales mastery",
      "sectionIndex": 2,
      "minStage": 9
    },
    {
      "name": "Star-powered squeeze",
      "desc": "Reach 1T clicks per tap",
      "metric": "power",
      "target": 1000000000000,
      "reward": 2000000000000,
      "minStage": 21,
      "section": "Sales mastery",
      "sectionIndex": 2
    },
    {
      "name": "Reality-bending recipe",
      "desc": "Reach 1Qa clicks per tap",
      "metric": "power",
      "target": 1000000000000000,
      "reward": 2000000000000000,
      "minStage": 36,
      "section": "Sales mastery",
      "sectionIndex": 2
    },
    {
      "name": "Multiverse sales master",
      "desc": "Reach 1Qi clicks per tap",
      "metric": "power",
      "target": 1000000000000000000,
      "reward": 2000000000000000000,
      "minStage": 37,
      "section": "Sales mastery",
      "sectionIndex": 2
    },
    {
      "name": "Infinite squeeze",
      "desc": "Reach 1Sx clicks per tap",
      "metric": "power",
      "target": 1e+21,
      "reward": 2000000000000000000000,
      "minStage": 44,
      "section": "Sales mastery",
      "sectionIndex": 2
    },
    {
      "name": "Juice on autopilot",
      "desc": "Reach 100 clicks per second",
      "metric": "rate",
      "target": 100,
      "reward": 1000,
      "section": "Business production",
      "sectionIndex": 3,
      "minStage": 2
    },
    {
      "name": "Nonstop sunshine",
      "desc": "Reach 10K clicks per second",
      "metric": "rate",
      "target": 10000,
      "reward": 100000,
      "section": "Business production",
      "sectionIndex": 3,
      "minStage": 4
    },
    {
      "name": "Million-sip business",
      "desc": "Reach 1M clicks per second",
      "metric": "rate",
      "target": 1000000,
      "reward": 2000000,
      "section": "Business production",
      "sectionIndex": 3,
      "minStage": 6
    },
    {
      "name": "Billion-sip business",
      "desc": "Reach 1B clicks per second",
      "metric": "rate",
      "target": 1000000000,
      "reward": 2000000000,
      "section": "Business production",
      "sectionIndex": 3,
      "minStage": 9
    },
    {
      "name": "Starlight production",
      "desc": "Reach 1T clicks per second",
      "metric": "rate",
      "target": 1000000000000,
      "reward": 2000000000000,
      "minStage": 22,
      "section": "Business production",
      "sectionIndex": 3
    },
    {
      "name": "Reality on autopilot",
      "desc": "Reach 1Qa clicks per second",
      "metric": "rate",
      "target": 1000000000000000,
      "reward": 2000000000000000,
      "minStage": 36,
      "section": "Business production",
      "sectionIndex": 3
    },
    {
      "name": "Multiverse lemonade production",
      "desc": "Reach 1Qi clicks per second",
      "metric": "rate",
      "target": 1000000000000000000,
      "reward": 2000000000000000000,
      "minStage": 37,
      "section": "Business production",
      "sectionIndex": 3
    },
    {
      "name": "Eternal lemonade flow",
      "desc": "Reach 1Sx clicks per second",
      "metric": "rate",
      "target": 1e+21,
      "reward": 2000000000000000000000,
      "minStage": 44,
      "section": "Business production",
      "sectionIndex": 3
    },
    {
      "name": "First lemonade hire",
      "desc": "Own your first automatic business",
      "metric": "machines",
      "target": 1,
      "reward": 15,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Bigger cup, bigger sale",
      "desc": "Buy your first Upselling upgrade",
      "metric": "upsells",
      "target": 1,
      "reward": 25,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Sweet side hustle",
      "desc": "Buy your first cookie counter",
      "metric": "cookies",
      "target": 1,
      "reward": 50,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Lemonade growth investor",
      "desc": "Buy 5 different boosts",
      "metric": "boosts",
      "target": 5,
      "reward": 5000,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Shopping spree",
      "desc": "Buy 10 shop items",
      "metric": "purchases",
      "target": 10,
      "reward": 250,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Lemon crew",
      "desc": "Own 10 automatic business upgrades",
      "metric": "machines",
      "target": 10,
      "reward": 150,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Big spender",
      "desc": "Buy 50 shop items",
      "metric": "purchases",
      "target": 50,
      "reward": 1250,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Lemon army",
      "desc": "Own 50 automatic business upgrades",
      "metric": "machines",
      "target": 50,
      "reward": 750,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Lemonade machine city",
      "desc": "Own 100 automatic business upgrades",
      "metric": "machines",
      "target": 100,
      "reward": 1500,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Shopping planet",
      "desc": "Buy 100 shop items",
      "metric": "purchases",
      "target": 100,
      "reward": 2500,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Everything must go",
      "desc": "Buy 1000 shop items",
      "metric": "purchases",
      "target": 1000,
      "reward": 25000,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Planet of juicers",
      "desc": "Own 250 automatic business upgrades",
      "metric": "machines",
      "target": 250,
      "reward": 3750,
      "minStage": 13,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Galactic shopping spree",
      "desc": "Buy 250 shop items",
      "metric": "purchases",
      "target": 250,
      "reward": 6250,
      "minStage": 24,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Galaxy of juice bots",
      "desc": "Own 500 automatic business upgrades",
      "metric": "machines",
      "target": 500,
      "reward": 7500,
      "minStage": 24,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Dimensional franchise collector",
      "desc": "Buy 500 shop items",
      "metric": "purchases",
      "target": 500,
      "reward": 12500,
      "minStage": 30,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Multiverse bottling crew",
      "desc": "Own 1000 automatic business upgrades",
      "metric": "machines",
      "target": 1000,
      "reward": 15000,
      "minStage": 37,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "Cosmic business overdrive",
      "desc": "Buy every boost",
      "metric": "boosts",
      "target": 31,
      "reward": 100000000000000000000000000000000000000000000,
      "minStage": 44,
      "section": "Team & shopping",
      "sectionIndex": 4
    },
    {
      "name": "First squeeze",
      "desc": "Make 25 taps",
      "metric": "taps",
      "target": 25,
      "reward": 75,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Lemonade rush",
      "desc": "Make 100 taps",
      "metric": "taps",
      "target": 100,
      "reward": 300,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Lemonade sales legend",
      "desc": "Make 1,000 taps",
      "metric": "taps",
      "target": 1000,
      "reward": 10000,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Citrus marathon",
      "desc": "Make 2,500 taps",
      "metric": "taps",
      "target": 2500,
      "reward": 25000,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Never stop squeezing",
      "desc": "Make 5,000 taps",
      "metric": "taps",
      "target": 5000,
      "reward": 50000,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Legendary lemon fingers",
      "desc": "Make 10,000 taps",
      "metric": "taps",
      "target": 10000,
      "reward": 100000,
      "section": "Squeeze milestones",
      "sectionIndex": 5
    },
    {
      "name": "Squeezer dodger 1",
      "desc": "Avoid 1 squeezers in Flappy Lemon",
      "metric": "dodges",
      "target": 1,
      "reward": 1000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "A little luck",
      "desc": "Catch 5 golden lemons",
      "metric": "lucky",
      "target": 5,
      "reward": 1000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Cookie catcher 10",
      "desc": "Catch 10 space cookies",
      "metric": "caught",
      "target": 10,
      "reward": 2000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Squeezer dodger 10",
      "desc": "Avoid 10 squeezers in Flappy Lemon",
      "metric": "dodges",
      "target": 10,
      "reward": 10000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Cookie catcher 50",
      "desc": "Catch 50 space cookies",
      "metric": "caught",
      "target": 50,
      "reward": 10000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Squeezer dodger 50",
      "desc": "Avoid 50 squeezers in Flappy Lemon",
      "metric": "dodges",
      "target": 50,
      "reward": 50000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Squeezer dodger 100",
      "desc": "Avoid 100 squeezers in Flappy Lemon",
      "metric": "dodges",
      "target": 100,
      "reward": 100000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Cookie catcher 250",
      "desc": "Catch 250 space cookies",
      "metric": "caught",
      "target": 250,
      "reward": 50000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "Squeezer dodger 500",
      "desc": "Avoid 500 squeezers in Flappy Lemon",
      "metric": "dodges",
      "target": 500,
      "reward": 500000,
      "section": "Arcade & golden lemons",
      "sectionIndex": 6
    },
    {
      "name": "1 fresh starts",
      "desc": "Rebirth 1 times",
      "metric": "rebirths",
      "target": 1,
      "reward": 1000,
      "section": "Fresh starts",
      "sectionIndex": 7
    },
    {
      "name": "5 fresh starts",
      "desc": "Rebirth 5 times",
      "metric": "rebirths",
      "target": 5,
      "reward": 5000,
      "section": "Fresh starts",
      "sectionIndex": 7
    },
    {
      "name": "10 fresh starts",
      "desc": "Rebirth 10 times",
      "metric": "rebirths",
      "target": 10,
      "reward": 10000,
      "section": "Fresh starts",
      "sectionIndex": 7
    },
    {
      "name": "25 fresh starts",
      "desc": "Rebirth 25 times",
      "metric": "rebirths",
      "target": 25,
      "reward": 25000,
      "section": "Fresh starts",
      "sectionIndex": 7
    },
    {
      "name": "50 fresh starts",
      "desc": "Rebirth 50 times",
      "metric": "rebirths",
      "target": 50,
      "reward": 50000,
      "section": "Fresh starts",
      "sectionIndex": 7
    }
  ]
};
