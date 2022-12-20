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

    setboxAngles = () => {
        this.bodies.forEach(box => {
            box.angle = this.plane.angle
        });
    }

    forces = () => {
        this.bodies.forEach(box => {
            let Fg = box.mass * this.gravity
            let F1 = Math.sinD(this.angle) * Fg
            let F2 = Math.cosD(this.angle) * Fg
            let Ff = this.mu * F2

            let downVelocity = 
        });
    }

    applyVelocities = () => {
        this.bodies.forEach(box => {

        });
    }

    update = () => {
        this.applyVelocities()
        this.setboxAngles()

        this.updateChildren()
    }
}