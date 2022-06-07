// //// //// //// //// //// //// //
// THE WING                      //
// //// //// //// //// //// //// //
/*
    
    Nishant Suria 
    Alyse Rose
    Stephanie Styffe 

*/

// //// //// //// //// //// //// //
// SCENE HANDLING                //
// //// //// //// //// //// //// //

const SCENES = { // everytime you make a new scene, you need to put it into this dictionary.
    "Play" : new scenePlay,
    "Menu": new sceneMenu,
    "Credits": new sceneCredits,
};

let currentScene = "Menu";
let flagHasRunInit = false;
let FONT;
let IMG;
let SFX; let MUSIC;

function setup() {
    // setup runs once for the entire program
    createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y); // defined in style.js
    resizeScreen();
    startGame();
}

function preload() {
    // preloads all the scene's stuff at once. hopefully we don't have too much to load ;-;
    for (s in SCENES) {
        SCENES[s].scenePreload();
    }

    // FONT = loadFont("./assets/fonts/compositeFontB.ttf");
    FONT = loadFont("./assets/fonts/MPLUS1p-Regular.ttf"); // the font!

    IMG = {}
    for (let i = 0; i < IMG_LIST.length; i++) { // preloading all images at once
        IMG[IMG_LIST[i]] = loadImage("./assets/images/" + IMG_LIST[i]);
    }

    SFX = {} 
    for (let i = 0; i < SFX_LIST.length; i++) { // preloading all sounds at once 
        SFX[SFX_LIST[i].split('.')[0]] = new Audio("./assets/sfx/" + SFX_LIST[i]);
    }

    MUSIC = {} 
    for (let i = 0; i < MUSIC_LIST.length; i++) { // preloading all sounds at once 
        MUSIC[MUSIC_LIST[i].split('.')[0]] = new Audio("./assets/music/" + MUSIC_LIST[i]);
    }

}

function draw() {
    textFont(FONT); // font change later pls.
    textAlign(LEFT, BOTTOM);

    // runs sceneInit once per changeScene
    if (!flagHasRunInit) {
        SCENES[currentScene].sceneInit();
        flagHasRunInit = true;
    }
    // runs sceneDraw once per frame
    SCENES[currentScene].sceneDraw();
    
    // see KEY HANDLING
    keyJustTyped = "";
    mouseScroll = 0;
    mouseJustClicked = false;


    
}

function changeScene(sceneKey) {
    if (!(sceneKey in SCENES)) {
        throw ("changeScene: Scene <" + sceneKey + "> does not exist.");
    }
    currentScene = sceneKey;
    flagHasRunInit = false;
    return;
}

// //// //// //// //// //// //// //
// INPUT HANDLING                //
// //// //// //// //// //// //// //

let keyJustTyped = "" // this is set to "" at the end of each frame

function keyTyped() {
    if (!keyJustTyped.includes("*")) { // filters functional keys out
        keyJustTyped = key;
    }    
}

function keyPressed() {
    //console.log(keyCode);
    if (keyCode == "ENTER" || keyCode == "RETURN" || keyCode == "13") {
        keyJustTyped = "*return";
    }
    if (keyCode == "DELETE" || keyCode == "8") {
        keyJustTyped = "*delete";
    }
    if (keyCode == "CMD" || keyCode == "91") {
        keyJustTyped = "*skip";
    }
    
}

let mouseScroll = 0;
function mouseWheel(event) {
    mouseScroll = event.delta / SETTINGS.SENSITIVITY * (SETTINGS.SCROLL_INVERT? 1 : -1);
    
    // this would handle scrolling on the screen vs. scrolling on the whole page, but google chrome doesn't like this.
    if ((mouseX <= CANVAS_SIZE.x) && (mouseX >= 0) && (mouseY <= CANVAS_SIZE.y) && (mouseY >= 0)) {
        return false;
    }
    
}

let mouseJustClicked = false;
function mouseClicked() {
    mouseJustClicked = true;
    resizeScreen();
    
}

// function that parses time to the format we wanna print. i'm passing unix epoch time through it btw
function translateTime(in_int) {
    return ("utc+" + String(in_int));
}

function startGame() {
    runSlice("d1_kcA", "kc");
}

function resizeScreen() {
    // resize screen?
    if (windowWidth * 4 <= windowHeight * 6) {
        CANVAS_SIZE = new v2(windowWidth, windowWidth * (4/6));
    } else {
        CANVAS_SIZE = new v2(windowHeight*(6/4), windowHeight);
    }
    UI.BUFF = CANVAS_SIZE.x/60;
    UI.TEXTSIZE = CANVAS_SIZE.x/45;
    resizeCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
}