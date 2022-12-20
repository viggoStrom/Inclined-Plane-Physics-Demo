/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = .5

        this.bodies.forEach(box => {
            box.angle = this.plane.angle
        });
    }

    updateChildren = () => {
        this.plane.update()

        this.bodies.forEach(box => {
            box.update()
        });
    }

    applyGravity = () => {
        this.bodies.forEach(box => {
            box.velocity.y += this.gravity
        });
    }

    setboxAngles = () => {
        this.bodies.forEach(box => {
            box.angle = this.plane.angle
        });
    }

    calculateVelocities = () => {

    }

    applyVelocities = () => {
        this.bodies.forEach(box => {
            box.position.x += box.velocity.x
            box.position.y += box.velocity.y
        });
    }

    update = () => {
        this.applyGravity()
        this.applyVelocities()
        this.setboxAngles()

        this.updateChildren()
    }
}