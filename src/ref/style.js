const CANVAS_SIZE = new v2(600, 400);

const UI = {

    /*
    PRIMARY_COLOR: '#FF0000',
    VLIGHT_COLOR: '#F6F6F6',
    MLIGHT_COLOR: 'E6E6E6',
    LIGHT_COLOR: '#99AAB5',
    DARK_COLOR: '#2C2F33',
    VDARK_COLOR: '#23272A',
    NOTIF_COLOR: '#ff481f',
    BLOCKED_COLOR: '#ff816b',
    */
    PRIMARY_COLOR: '#FF0000',
    VLIGHT_COLOR: '#fffaff',
    MLIGHT_COLOR: 'd6bdd9',
    LIGHT_COLOR: '#b493b7',
    DARK_COLOR: '#66316b',
    VDARK_COLOR: '#343036',
    NOTIF_COLOR: '#ff481f',
    BLOCKED_COLOR: '#ff816b',

    BUFF: CANVAS_SIZE.x/60,
    TEXTSIZE: CANVAS_SIZE.x/40,

    PFP: {
        "*p": "pfp_*p.png",
        "*t": "blank.png",
        "kc": "pfp_kc.jpg",
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

IMG_LIST = [
    "pfp_*p.png",
    "pfp_kc.jpg",
    "pfp_nk.png",
    "pfp_f.png",
    "pfp_m.png",
    "pfp_fj.png",
    "pfp_tp.png",
    "pfp_w.png",

    "blank.png",

    "mascot.png",
]