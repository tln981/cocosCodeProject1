// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _isActive:true,
        _counter: 0,
        _timer:0,
        anim:cc.Animation,
        _isRoll:false
    },
    onLoad(){
        this._isActive=false;
        this.anim=this.node.getComponent(cc.Animation);

    },
    update(dt) {
        if(this._isActive==true){
            if(this._isRoll==false){
                this.anim.play('roll');
                this._isRoll=true;
            }
            this._timer+=dt;
            this._counter+=2.5;
            this.node.y++;
            const scaleFactor = Math.max(0, 3 - this._counter / 320);
            this.node.scale = cc.v2(scaleFactor, scaleFactor)
            if(this.node.y>300){
                this.node.active=false;
            }
        }
    },

});
