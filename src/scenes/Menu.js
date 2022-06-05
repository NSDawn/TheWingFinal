// VAR DECLARATION
let wing_x = 0; let wing_y = 0; let wing_z = 0;
let button_state = true;
let buttonPlay;

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
        IMG["button0.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["button1.png"].resize(CANVAS_SIZE.x/4, 0);

        buttonPlay = new Button(new v2(CANVAS_SIZE.x/2, CANVAS_SIZE.y/2), "START GAME");
        return;
    }
    sceneDraw() { // runs once per ∆t
        
        background(UI.VLIGHT_COLOR);
        /*
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
        */

        image(
            IMG["title.png"],
            0,
            0,
        );
        buttonPlay.draw();

        /*
        textSize(CANVAS_SIZE.x/10); text(
            "The Wing", 
            CANVAS_SIZE.x/20, CANVAS_SIZE.y/2, 
            UI.DARK_COLOR,
        );
        */
        
        
        
        if (keyJustTyped == "x") {
            changeScene("Play");
        }
        
        return;
    } 
}

class Button {
    constructor (in_pos, in_text) {
        this.pos = in_pos;
        this.text = in_text;
        this.isDown = false;
        this.size = CANVAS_SIZE.x/4;
        this.sprite = 0;
        
    }
    draw () {
        let boundA = new v2(this.pos.x, this.pos.y);
        let boundB = new v2(this.pos.x + this.size, this.pos.y + this.size/2.5);
        let currMousePos = new v2(mouseX, mouseY);
        this.shift = this.size/32;

        this.sprite = currMousePos.isWithin(boundA, boundB) ? 1 : 0;

        
        image(
            IMG["button" + String(this.sprite) + ".png"],
            this.pos.x - (this.shift * this.sprite),
            this.pos.y + (this.shift * this.sprite),
            this.size - (this.shift * this.sprite),
            this.size / 2.5 - (this.shift * this.sprite),
        );
        
        this.text_color = this.sprite? UI.LIGHT_COLOR : UI.VLIGHT_COLOR;

        textAlign(CENTER, CENTER);
        fill(this.text_color); textSize(UI.TEXTSIZE), text(
            this.text, 
            this.pos.x + this.size/2 - (this.shift * this.sprite *2) ,
            this.pos.y + this.size/5 + (this.shift * this.sprite), 
        );
        textAlign(LEFT, BOTTOM);

    }

    isDown () {

    }
}
