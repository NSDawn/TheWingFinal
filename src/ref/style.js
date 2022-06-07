let CANVAS_SIZE = new v2(600, 400);

const UI = {

    PRIMARY_COLOR: '#FF0000',
    VLIGHT_COLOR: '#fffaff',
    MLIGHT_COLOR: '#d6bdd9',
    LIGHT_COLOR: '#b493b7',
    DARK_COLOR: '#66316b',
    VDARK_COLOR: '#343036',
    NOTIF_COLOR: '#ff481f',
    BLOCKED_COLOR: '#ff816b',

    BUFF: CANVAS_SIZE.x/60,
    TEXTSIZE: CANVAS_SIZE.x/45,

    PFP: {
        "*p": "pfp_p.png",
        "*t": "blank.png",
        "kc": "pfp_kc.png",
        "nk": "pfp_nk.png",
        "m" : "pfp_m.png",
        "f" : "pfp_f.png",
        "fj" : "pfp_fj.png",
        "tp" : "pfp_tp.png",
        "w" : "pfp_w.png", 
    },
    
    FULLNAME: {
        "*p": "Indigo Warren",
        "*t" : "", 
        "kc": "Karan Chandrashekar",
        "nk": "Nidia Kaur",
        "m" : "Stacy Warren",
        "f" : "Ky Hernandez",
        "fj" : "Felix Joel",
        "tp" : "Trish Price", 
        "w" : "The Wing"

    },

    SPOOF: { 
        "kc": "*p",
        "nk": "*p",
        "m" : "*p",
        "f" : "*p",
        "fj" : "w",
        "tp" : "fj", 
    }
};

const IMG_LIST = [
    "pfp_p.png",
    "pfp_kc.png",
    "pfp_nk.png",
    "pfp_f.png",
    "pfp_m.png",
    "pfp_fj.png",
    "pfp_tp.png",
    "pfp_w.png",

    "blank.png",

    "mascot.png",

    "credits.png", 

    "title.png",
    "button0.png",
    "button1.png",
    "menuwingsbg.png",
    "menuheartsbg.png",
];

const SFX_LIST = [
    "key01.mp3",
    "key02.mp3",
    "key03.mp3",
    "key04.mp3",
    "key05.mp3",
    "key06.mp3",
    "key07.mp3",
    "key08.mp3",
    "key09.mp3",
    "notif.mp3",
    "thought.mp3",
];

const MUSIC_LIST = [
    "Day.mp3",
    "MainMenu.mp3",
    "Credits.mp3",
];