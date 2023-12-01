cc.Class({
    extends: cc.Component,
    properties: {
        lights:[cc.Node],
        _indexLight:0,
        _isActive:false,
        _timer:0
    },
    onLoad () {
        this._isActive=false;
        this._timer=3
    },
    start () {
    },
    update (dt) {
        if(this._isActive==true){
            this._timer+=dt;
            if(this._timer >= 4 && this._indexLight < 3){
                this.lights[this._indexLight].getComponent('light')._isActive=true;
                this._timer = 0;
                this._indexLight++;
                if(this._indexLight==2){
                    this.lights[this._indexLight].getComponent('light')._isGreen=true;
                    this._isActive==false;
                }
            }
        }
    },
});
