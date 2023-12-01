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
        anim: cc.Animation,
        _isDie: false,
        _isMove: false,
        _isActive: false,
    },


    onLoad() {
        this._isDie = false;
        this._isMove = false;
        this._isActive = false;
        this.anim = this.node.getComponent(cc.Animation);
        this.anim.play('idle');
    },

    start() {

    },

    update(dt) {
        if (this._isActive == true) {
            if (this._isMove == false) {
                this.anim.play('walk');
                this._isMove = true;
            }
            if (this._isDie == false) {
                this.node.x += 0.5;
            }
        }
    },
});
