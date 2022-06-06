// VAR DECLARATION

let buttonBack;
let creditsScroll;

const credits = [
    "COLLABORATORS",
    "Nishant Suria",
    "Stephanie Styffe",
    "Alyse Rose", 
    "",
    "",
    "LIBRARY", 
    "p5.js",
    "",
    "",
    "SPECIAL THANKS", 
    "OverlordMimi",
    "conflxcted",
    "",
    "",
    "This project was made for",
    "UCSC's ARTG/CMPM 120",
]

// SCENE (sceneMenu)
class sceneCredits {
    constructor() { }
    scenePreload() { // runs once before EVERYTHING else
        return;
    }
    sceneInit() { // runs once when this scene is switched to
        
        IMG["credits.png"].resize(CANVAS_SIZE.x/2, 0);
        IMG["button0.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["button1.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["menuwingsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);
        IMG["menuheartsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);

        creditsScroll = 0;
        buttonBack = new Button(new v2(4*CANVAS_SIZE.x/6, 9*CANVAS_SIZE.y/12), "<< BACK");
        return;
    }
    sceneDraw() { // runs once per ∆t

        //music
        MUSIC["Day"].pause();
        MUSIC["MainMenu"].pause();
        MUSIC["Credits"].play();

        wingbgTick = (wingbgTick + 1) % (CANVAS_SIZE.x * 1.4);
        heartbgTickX = (heartbgTickX + 2) % (CANVAS_SIZE.x * 1.5);
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
            IMG["credits.png"],
            CANVAS_SIZE.x/16,
            0,
        );
        buttonBack.draw();      
        
        if (buttonBack.isClicked()) {
            changeScene("Menu");
        }

        let yOffset = 0;
        for (let i = 0; i < credits.length; i++) {
            if (yOffset + creditsScroll < CANVAS_SIZE.y/4) {
                continue;
            } else if (yOffset + creditsScroll > CANVAS_SIZE.y)  {
                fill(UI.VDARK_COLOR); text(
                    credits[i],
                    CANVAS_SIZE.x/16,
                    yOffset + creditsScroll,
                );
                yOffset += UI.TEXTSIZE * 2;
            }

        }
        
        return;
    } 
}

