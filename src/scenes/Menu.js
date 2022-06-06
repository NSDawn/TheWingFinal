// VAR DECLARATION
let wing_x = 0; let wing_y = 0; let wing_z = 0;
let button_state = true;
let buttonPlay; let buttonCredits;
let wingbgTick = 0; let heartbgTickX = 0; let heartbgTickY = 0; 

// SCENE (sceneMenu)
class sceneMenu {
    constructor() { }
    scenePreload() { // runs once before EVERYTHING else
        return;
    }
    sceneInit() { // runs once when this scene is switched to
        
        IMG["title.png"].resize(7*CANVAS_SIZE.x/12, 0);
        IMG["button0.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["button1.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["menuwingsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);
        IMG["menuheartsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);

        buttonPlay = new Button(new v2(4*CANVAS_SIZE.x/6, 9*CANVAS_SIZE.y/12), "PLAY >>");
        buttonCredits = new Button(new v2(4*CANVAS_SIZE.x/6, 7*CANVAS_SIZE.y/12), "CREDITS >>");
        return;
    }
    sceneDraw() { // runs once per ∆t

        //music
        MUSIC["Day"].pause();
        MUSIC["MainMenu"].play();
        MUSIC["Credits"].pause();
        

        wingbgTick = (wingbgTick - 1) % (CANVAS_SIZE.x * 1.4);
        heartbgTickX = (heartbgTickX - 2) % (CANVAS_SIZE.x * 1.5);
        heartbgTickY = (heartbgTickY + 0.005) % (2);
        
        background(UI.VLIGHT_COLOR);
        
        // wings bg
        image(
            IMG["menuwingsbg.png"],
            wingbgTick,
            -CANVAS_SIZE.y/5,
        );
        image(
            IMG["menuwingsbg.png"],
            wingbgTick + (CANVAS_SIZE.x * 1.4),
            -CANVAS_SIZE.y/5,
        );
        image(
            IMG["menuwingsbg.png"],
            wingbgTick - (CANVAS_SIZE.x * 1.4),
            -CANVAS_SIZE.y/5,
        );
        // hearts bg
        image(
            IMG["menuheartsbg.png"],
            heartbgTickX,
            -CANVAS_SIZE.y/5 + (CANVAS_SIZE.y/16 * Math.sin(heartbgTickY * Math.PI)),
        );
        image(
            IMG["menuheartsbg.png"],
            heartbgTickX + (CANVAS_SIZE.x * 1.5),
            -CANVAS_SIZE.y/5 + (CANVAS_SIZE.y/16 * Math.sin(heartbgTickY * Math.PI)),
        );
        image(
            IMG["menuheartsbg.png"],
            heartbgTickX - (CANVAS_SIZE.x * 1.5),
            -CANVAS_SIZE.y/5 + (CANVAS_SIZE.y/16 * Math.sin(heartbgTickY * Math.PI)),
        );
       
       
       
        // title peepeepoopoo
        image(
            IMG["title.png"],
            0,
            CANVAS_SIZE.y/16,
        );
        buttonPlay.draw(); buttonCredits.draw();     
        
        if (buttonPlay.isClicked()) {
            changeScene("Play");
        }
        if (buttonCredits.isClicked()) {
            changeScene("Credits");
        }

        // delete later!!
        fill(UI.VDARK_COLOR); textSize(UI.TEXTSIZE); text(
            "vsn 1.0.1: roll credits!",
            0,
            UI.TEXTSIZE * 1.5,
        );
        
        return;
    } 
}


