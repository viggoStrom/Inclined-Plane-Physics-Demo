/** @type {HTMLCanvasElement} */


class body {
    constructor(plane, placement, frictionCoefficient) { // placement: 0-1 where on the line to place the box
        this.angle = plane.angle
        this.mu = frictionCoefficient
        this.u = placement // u comes from linear interpolation notation, I think
    }

    draw = () => {
        ctx.beginPath()
        ctx.moveTo()
    }

    update = () => {
        this.draw()
    }
}
