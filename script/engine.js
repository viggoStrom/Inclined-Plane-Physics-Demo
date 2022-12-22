/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = .1
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
            const Fg = box.mass * this.gravity
            let F1 = Math.sinD(this.angle) * Fg
            const F2 = Math.cosD(this.angle) * Fg
            const Ff = this.mu * F2

            F1 -= Ff

            // console.log(box.velocity);
            box.velocity.x += F1
            box.velocity.y += F2
        });
    }

    planeHeightAt = (x) => {
        const k = -0.625
        const m = plane.startHeight
        return k * x + m
    }

    checkCollision = () => {
        this.bodies.forEach(box => {
            if (box.position.y <= this.planeHeightAt(box.position.x + box.size.width)) {
                this.setboxAngles()
            }
        });
    }

    applyVelocities = () => {
        this.bodies.forEach(box => {
            // box.position.x += box.velocity.x
            // box.position.y += box.velocity.y
            box.position.x += 1
            box.position.y += 1
        });
    }

    update = () => {
        this.checkCollision()
        this.forcesAndVelocity()
        this.applyVelocities()

        this.updateChildren()
    }
}