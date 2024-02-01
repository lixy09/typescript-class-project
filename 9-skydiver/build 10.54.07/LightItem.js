import CanvasItem from './CanvasItem.js';
export default class LightItem extends CanvasItem {
    lightForce;
    speed;
    getLightForce() {
        return this.lightForce;
    }
    setLightForce(lightForce) {
        this.lightForce = lightForce;
    }
    update(elapsed) {
        this.posY -= elapsed * this.speed;
    }
}
//# sourceMappingURL=LightItem.js.map