cc.Class({
    extends: cc.Component,

    properties: {
        nodeTrafficLight: cc.Node,
        nodeChicken: cc.Node,
        nodeCar: cc.Node,
        nodeGameOver:cc.Node,
        _isCallTrafficLight:false,
        _isCallChicken:false,
        _isCallGameOver:false,
        _timer: 0
    },
    onLoad(){
        this.node.getComponent(cc.AudioSource).play();
        this._isCallTrafficLight=false;
        this._isCallChicken=false;
        this._isCallGameOver=false;
    },
    update(dt) {
        if (this._timer == 0) {
            if(!this._isCallTrafficLight){
                this.nodeTrafficLight.getComponent('trafficLights')._isActive = true;
                this._isCallTrafficLight=true;
            }
        }
        this._timer += dt;
        if (this._timer > 13) {
            if(!this._isCallChicken){
                this.nodeChicken.getComponent('chicken')._isActive = true;
                this.nodeCar.getComponent('car')._isActive = true;
                this._isCallChicken=true;
            }
        }
        if (this.nodeChicken.y < this.nodeCar.y) {
            if (this.nodeChicken.getComponent('chicken')._isDie == false) {
                this.nodeChicken.getComponent('chicken')._isDie = true;
                this.nodeChicken.getComponent('chicken').anim.play('die');
                this.nodeChicken.getComponent(cc.AudioSource).play();
                this.nodeChicken._isActive=false;
            }
        }
        if (this._timer > 19) {
            if(!this._isCallGameOver){
                this.nodeGameOver.getComponent('GameOver')._isActive=true;
                this._isCallGameOver=true;
            }
        }

    },
});
