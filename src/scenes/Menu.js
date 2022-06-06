// VAR DECLARATION
let wing_x = 0; let wing_y = 0; let wing_z = 0;
let button_state = true;
let buttonPlay;
let wingbgTick = 0; let heartbgTickX = 0; let heartbgTickY = 0; 

// SCENE (sceneMenu)
class sceneMenu {
    constructor() { }
    scenePreload() { // runs once before EVERYTHING else
        return;
    }
    sceneInit() { // runs once when this scene is switched to
        
        IMG["title.png"].resize(CANVAS_SIZE.x/2, 0);
        IMG["button0.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["button1.png"].resize(CANVAS_SIZE.x/4, 0);
        IMG["menuwingsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);
        IMG["menuheartsbg.png"].resize(CANVAS_SIZE.x * 1.5, 0);

        buttonPlay = new Button(new v2(4*CANVAS_SIZE.x/6, 9*CANVAS_SIZE.y/12), "START >>");
        return;
    }
    sceneDraw() { // runs once per ∆t
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
        //hearts bg
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
       
       
        // title peepeepoopoo
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
        
        
        
        if (buttonPlay.isClicked()) {
            changeScene("Play");
        }
        
        return;
    } 
}

class Button {
    constructor (in_pos, in_text) {
        this.pos = in_pos;
        this.text = in_text;
        this.hasClicked = false;
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
            this.pos.y + this.size/6 + (this.shift * this.sprite), 
        );
        textAlign(LEFT, BOTTOM);

        if (mouseJustClicked && Boolean(this.sprite)) {
            this.hasClicked = true;
        }

    }

    isClicked () {
        if (this.hasClicked) {
            this.hasClicked = false;
            return true;
        }
        return false;
    }
}
