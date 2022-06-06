let save = {
    "tick": 0,
    "msg": {
        "testUser" : [
        ]
    },
    "flag": {
        "gameStart" : false,
    },
    "day" : 1, 
    "isDaytime" : true,
};

let SETTINGS = {
    SENSITIVITY : 10,
    SCROLL_INVERT: false,

};

function restartGame() {
    save = {
        "tick": 0,
        "msg": {
            "testUser" : [
            ]
        },
        "flag": {
            "gameStart" : false,
        },
        "day" : 1, 
        "isDaytime" : true,
    };

    selectedUser = "";

    availableUsers = []; 

    currentSlice = {};
    currentLineNum = {}; currentLine = {}; currentLineTyped = {}; 
    currentChoice = {}; currentSelectedChoice = {};
    notif = {};
    typeTick = 0; // referenced for the | thing, and for the typing... message 
    scrollOffset = 0; maxScroll = 0;
    scrollOffsetUsers = 0; maxScrollUsers = 0;
    autoScrollDown = false; autoScrollDownTick = 3;


}