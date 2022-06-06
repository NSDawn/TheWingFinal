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