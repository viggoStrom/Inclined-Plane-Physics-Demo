/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = 9.82

        this.bodies.forEach(box => {
            box.angle = this.plane.angle
        });
    }
    
    update = () => {
        this.plane.update()

        this.bodies.forEach(box => {
            box.update()
            box.draw()
        });
    }
}