/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = .5
    }

    updateChildren = () => {
        this.plane.update()

        this.bodies.forEach(box => {
            box.update()
        });
    }

    setboxAngles = () => {
        this.bodies.forEach(box => {
            box.angle = this.plane.angle
        });
    }

    forcesAndVelocity = () => {
        this.bodies.forEach(box => {
            let Fg = box.mass * this.gravity
            let F1 = Math.sinD(this.angle) * Fg
            let F2 = Math.cosD(this.angle) * Fg
            let Ff = this.mu * F2

            F1 -= Ff

            box.F1 += box.velocity.x
            box.F2 += box.velocity.y
        });
    }

    update = () => {
        this.forcesAndVelocity()

        this.setboxAngles()

        this.updateChildren()
    }
}