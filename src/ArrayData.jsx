import "./App.css";

export default function ArrayData(data) {

    const keyData = {

        "asdfjkl;": {

            "character": {
                "asdf": ["f", "d", "s", "a"],
                "jkl;": ["j", "k", "l", ";"]
            },

            "word": {
                "asdf": ["as", "fad", "dfs", "sad", "afs", "da", "fd", "sfa", "ads", "df"],
                "jkl;": ["jk", "l;", "jkl", "kj;", "ll", ";;", "kl", "jl", "k;;", "j;"]
            },

            "sentence": {
                "asdf": ["Sad dad adds sass as fast",
                    "A sad fad fades as dads add",
                    "Fads and sass fade as dads do",
                    "Fast sad fads add sad sass",
                    "Dads add sass as sad fads fade"],

                "jkl;": ["Jake asked Julia to juggle a lake",
                    "Julia likes a lake, Jake agrees",
                    "A jelly lake leaked all around Jake",
                    "Jake juggled a lucky leak, Julia laughed",
                    "All Julia asked Jake Eel or lake",
                ],

            },

            "paragraph": [

                "The quick brown fox jumps over the lazy dog every afternoon at exactly twelve. Amazingly, Victor zipped past the bakery with just enough time to wave hello. Jack quietly adjusted his zebra-print jacket as the wind began to pick up. Xavier and Quentin played backgammon beneath the buzzing neon lights. Behind the yellow gazebo, a wizard mixed potions with quirky precision."

            ],


        },
        "qweruiop": {
            "character": {
                "qwer": ["r", "e", "w", "q", "f"],
                "uiop": ["u", "i", "o", "p", "j"]
            },
            "word": {
                "qwer": ["qw", "er", "we", "req", "wer", "eq", "wqr", "ree", "wr", "qwe"],
                "uiop": ["ui", "po", "iuo", "opi", "up", "oi", "ipu", "puo", "pio", "ou"]
            },
            "sentence": {
                "qwer": ["A quest a reward, a quiet era",
                    "A queer urge, a rare quest",
                    "A rare quest, a quiet aura",
                    "A rare quest, a quest near",
                    "A quiet era, a rare urge",
                    "A quest urge, a rare quest",
                    "A quiet ear, a rare quest",
                    "A rare quest, a quest rare",
                    "A quest a rare urge, quiet",
                    "A quest near, a rare aura",
                ],
                "uiop": ["A map is a simple idea",
                    "A pipe is a simple aim",
                    "I am a mime, a poet",
                    "A map is pure, a mime",
                    "I am a mime, a poet",
                    "A mime is a pure aim",
                    "I am a poet, a mime",
                    "A mime, a poet, a simple aim",
                    "I am a poem, a simple aim",
                    "A mime is a pure aim",
                ]
            },
            "paragraph": ["Lions danced freely in the fictional zoo during the annual parade, while kangaroos boxed with zeal. Underneath the buzzing light, Hazel wrote a complex jazz melody. Pack my box with five dozen liquor jugs, whispered the voice in his dream. Zigzagging through the park, Becky marveled at quartz stones near the fountain. Every jar of pickles must be examined by quality inspectors before shipping."],
        },
        "zxcvnm,.": {
            "character": {
                "zxcv": ["v", "c", "x", "z", "f"],
                "nm,.": ["n", "m", ",", ".", "j"]
            },
            "word": {
                "zxcv": ["zx", "cv", "xz", "vc", "zxc", "xcv", "cz", "vx", "czx", "xvc"],
                "nm,.": ["nm", "m,", "n.", ",.", "mn", ".,m", "n,m", "m.n", "mn,", ".,n"]
            },
            "sentence": {
                "zxcv": ["Cave vex axe, leave zeal exact",
                    "Eva gave a cave, vex zeal",
                    "Zeal gave cave, exact a vex",
                    "Axe cave, Eva leave a vex",
                    "Vex Eva, cave leave zeal exact",
                    "A zeal cave, Eva gave vex",
                    "Cease axe, cave save Eva’s zeal",
                    "Eva’s cave vex, zeal leave axe",
                    "Vex a zeal cave, Eva ceases",
                    "Axe zeal, Eva cave a vex",
                ],
                "nm,.": ["A man ran near a room",
                    "A man ran, and a mare",
                    "A man ran, near a ram",
                    "A man ran under a near moon",
                    "A ram ran, near a mane",
                    "A man ran near a mare",
                    "A man ran around, near a man",
                    "A mare ran, near a ram",
                    "A man ran, a mare ran near",
                    "A man ran near, a ram ran",
                ]
            },
            "paragraph": ["Fred’s antique typewriter jammed when he typed quickly with gloved hands. The breeze blew quietly through Jasper's velvet curtains, stirring memories. Nobody expects a flying pizza to zoom across the highway at midnight. Zebras and koalas surprisingly coexist in the quirky virtual zoo app. Wavy lines of code danced on the screen as Zoe fixed the bug."]
        },
        "asdfghjkl;": {

            "character": {
                "asdfg": ["f", "d", "s", "a", "g"],
                "hjkl;": ["j", "k", "l", ";", "h"]
            },

            "word": {
                "asdfg": ["asdf", "gsda", "fdasg", "sdfa", "gadsf",
                    "dagf", "fgsd", "sadfg", "dfga", "asdg"],
                "hjkl;": ["hjkl", "lk;j", "jkh;", "h;jk", "kjl;",
                    "hl;jk", "jklh;", "k;lj", ";hjk", "ljkh"],
            },

            "sentence": {
                "asdfg": ["A sad figure fades in edge",
                    "Sage digs a side, feeds a seed.",
                    "A faded sage dies inside edge.",
                    "Big sage digs safe side of ease.",
                    "A sage is fading in a side.",
                    "Sad figs fade as edge dies. ",
                    "Sage feeds safe side, digs again.",
                    "A safe edge is fading aside.",
                    "A sage died as edge fades.",
                    "Edge fades as a sage digs.",],

                "hjkl;": ["Hi, Hilo jogs uphill, cool and kind",
                    "Hoku juggles koi, lil joy unfolds",
                    "Huli holds jollo, juki lurks uphill",
                    "Hilo, the juki king, looks up",
                    "Huki joins Hilo, joyful in loop",
                ]
            },

            "paragraph": ["A joyful breeze tickled Max as he zipped along the quiet canyon road. Jen's exquisite quilt was admired by villagers and foxes alike. Brightly colored kites flew above the zigzag path at the park’s zenith. Vexed by the quiz, Zachary glanced out the window for answers. Oscar juggled six boxes while humming a tune from a jazz opera."],
        },

        "qwertyuiop": {

            "character": {
                "qwert": ["t", "r", "e", "w", "q", "f"],
                "yuiop": ["u", "i", "o", "p", "y", "j"],
            },

            "word": {
                "qwert": ["qwer", "wert", "trewq", "erqt", "wqet",
                    "rqwe", "tewr", "eqtw", "rewtq", "twqr"],
                "yuiop": ["yuiop", "uiop", "oiuy", "puio", "youp",
                    "iuoy", "uopyi", "poyi", "yoip", "oiup"]
            },

            "sentence": {
                "qwert": [
                    "A quiet tree waits near water.",
                    "The writer waits at quiet retreat.",
                    "Waiter ate at quiet terrace area.",
                    "Retreat at twilight, write a tale.",
                    "A waiter retreated after quiet tea.",
                    "Write a quiet treat at twilight.",
                    "A writer waits at eerie tree.",
                    "Quite a rare wait at retreat.",
                    "Retire after a quiet water tale.",
                    "A quiet waiter ate at retreat."
                ],
                "yuiop": [
                    "Yoyo played a pure piano play.",
                    "A young yuppie used a yoyo daily.",
                    "Pious youth enjoy a pure yule joy.",
                    "Yuppy youth pop up every year.",
                    "A yoyo player opposes a yuppy.",
                    "Every yoyo user enjoys pure joy.",
                    "Yoyo appeal pops up every year.",
                    "A yule party is a poppy joy.",
                    "Youth enjoy yoyo, pop it up.",
                    "Yuppies enjoy a unique yoyo opera."
                ],
            },

            "paragraph": ["The quick brown fox jumps over the lazy dog every afternoon at exactly twelve. Amazingly, Victor zipped past the bakery with just enough time to wave hello. Jack quietly adjusted his zebra-print jacket as the wind began to pick up. Xavier and Quentin played backgammon beneath the buzzing neon lights. Behind the yellow gazebo, a wizard mixed potions with quirky precision."]
        },

        "zxcvbbnm,.": {

            "character": {
                "zxcvb": ["z", "x", "c", "v", "b"],
                "bnm,.": ["b", "n", "m", ",", "."]
            },

            "word": {
                "zxcvb": ["zxcb", "vcbz", "bzxcv", "cvbz", "xbvc",
                    "czvb", "vxcbz", "bczx", "zvbx", "cbvx"],
                "bnm,.": ["nm,b", "bmn.", "nmb.", "mnb,", "b.nm",
                    "m,bn", "nb,m.", "bm.n", "n.m,b", "mn.b"]
            },

            "sentence": {
                "zxcvb": [
                    "Babe vibe is basic and viable.",
                    "Civic babe evades basic vibe cave.",
                    "Brave babe excels in basic vibe.",
                    "Vibe a basic babe in cave.",
                    "Babe excites a vibe in cave.",
                    "Babe is a vibe, excel basic.",
                    "Basic vibe is viable by babe.",
                    "Cave vibe excites brave basic babe.",
                    "Babe vibes excite basic civic cave.",
                    "Basic babe vibes are ever visible."
                ],
                "bnm,.": [
                    "A babe made a big name.",
                    "Babe amends an aim in time.",
                    "A big babe means a main aim.",
                    "Babe name is an aim in me.",
                    "A man made a babe in time.",
                    "Babe in a main maze, am I?",
                    "A babe aims at a main name.",
                    "In a maze, babe made a name.",
                    "Babe means an aim in time.",
                    "A babe made an aim in maze."
                ],
            },

            "paragraph": ["Lions danced freely in the fictional zoo during the annual parade, while kangaroos boxed with zeal. Underneath the buzzing light, Hazel wrote a complex jazz melody. Pack my box with five dozen liquor jugs, whispered the voice in his dream. Zigzagging through the park, Becky marveled at quartz stones near the fountain. Every jar of pickles must be examined by quality inspectors before shipping."],
        },

    }

    let keyObject = keyData[data["row"]]
    let keyArrayObject = keyObject[data["typePractice"]]

    let stringlength = data["row"].length
    let stringlengthDivid = stringlength / 2

    let firstDvision = data["row"].slice(0, stringlengthDivid)
    let secondDivsion = data["row"].slice(stringlengthDivid, stringlength)

    let firstArray = data["typePractice"] === "paragraph" ? keyArrayObject : keyArrayObject[firstDvision]
    let secondArray = data["typePractice"] === "paragraph" ? keyArrayObject : keyArrayObject[secondDivsion]

    let lengthAray = data["typePractice"] === "word" ? firstArray.length / 2 : firstArray.length

    let randomch1 = []
    let randomch2 = []

    for (let a = 1; a <= lengthAray; a++) {

        const firstCh = firstArray[Math.floor(Math.random() * firstArray.length)]
        const secondCh = secondArray[Math.floor(Math.random() * firstArray.length)]

        randomch1.push(firstCh)
        randomch2.push(secondCh)
    }


    let randomch = data["typePractice"] === 'word' ? [...randomch1, ...randomch2] : [...randomch1, " ", ...randomch2];

    let randomchSentenc = data["typePractice"] === "sentence" ? [randomch1[0], randomch2[0]] : randomch;

    let randomchPara = data["typePractice"] === "paragraph" ? [...randomch1] : randomchSentenc;

    return randomchPara;

}

