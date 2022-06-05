// VAR DECLARATION
let wing_x = 0; let wing_y = 0; let wing_z = 0;

// SCENE (sceneMenu)
class sceneMenu {
    constructor() { }
    scenePreload() { // runs once before EVERYTHING else
        return;
    }
    sceneInit() { // runs once when this scene is switched to
        for(let i = 0; i <5;i++){
            let photo_name = "wing" + String(i) + ".png";
            IMG[photo_name].resize(CANVAS_SIZE.x/4,0);
        }
        IMG["title.png"].resize(CANVAS_SIZE.x/2, 0);
        return;
    }
    sceneDraw() { // runs once per ∆t
        
        background(UI.VLIGHT_COLOR);

        // wing background
        for(let i = 1; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if ((i==1 || i==5) && (j ==3 || j==7)){
                    wing_z = 1
                } else if((i==2 || i==6) && (j ==3 || j==7)){
                    wing_z = 2
                } else if((i==3 || i==7) && (j ==3 || j==7)){
                    wing_z = 3
                } else if((i==4 || i==8) && (j ==3 || j==7)){
                    wing_z = 4
                } else{ 
                    wing_z = 0
                }
                tint(255, 100);
                image(IMG["wing" + String(wing_z) + ".png"],((-750+wing_x+150*i)),((-500+wing_y+100*j)))
                tint(255, 255);
            }
        }
        wing_x = (wing_x + 1) %(CANVAS_SIZE.x)
        wing_y = (wing_y + 2)%(CANVAS_SIZE.y)

        image(
            IMG["title.png"],
            0,
            0,
        );
        
        /*
        textSize(CANVAS_SIZE.x/10); text(
            "The Wing", 
            CANVAS_SIZE.x/20, CANVAS_SIZE.y/2, 
            UI.DARK_COLOR,
        );
        */

        let button_state = IMG["button0.png"];
        image(
            IMG["button0.png"],
            7 * CANVAS_SIZE.x/8,
            7 * CANVAS_SIZE.y/8,
            CANVAS_SIZE.x/8,
            
        );
        
        if (keyJustTyped == "x") {
            changeScene("Play");
        }
        
        return;
    }
}

