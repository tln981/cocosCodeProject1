
cc.Class({
    extends: cc.Component,

    properties: {
        colorDefaul: cc.Color,
        colorAfter: cc.Color,
        _flag: true,
        _timer: 0,
        _isGreen: false,
        _isActive: false,
        _isBlink: false,
        _couterBlink: 0,
    },
    onLoad(){

    },
    start() {
    },
    update(dt) {
        if (this._isActive == true) {
            this._timer += dt;
            if (this._isBlink == false) {
                if (this._timer > 1 && this._timer < 2) {
                    this.changeColor();
                    this._timer = 2;
                } else if (this._timer > 3.5 && this._timer < 5) {
                    this.changeColor();
                    this._timer = 0;
                    this._isBlink = true;
                }
            } else {
                if (this._couterBlink < 6) {
                    if (this._timer > 0.2) {
                        this._timer=0;
                        this.changeColor();
                        this._couterBlink++;
                    } 
                }
                else{
                    this._isActive=false;
                    if(this._isGreen==true){
                        this.changeColor();
                    }
                }
            }
        }
    },
    changeColor() {
        if (this._flag == true) {
            this.node.color = this.colorDefaul;
        } else {
            this.node.color = this.colorAfter;
        }
        this._flag = !this._flag;
    },
});
