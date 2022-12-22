/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = .01
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
            let F1 = Math.sinD(box.angle) * Fg
            const F2 = Math.cosD(box.angle) * Fg
            const Ff = box.mu * F2

            F1 -= Ff

            console.log(F1, F2);
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
            box.position.x += box.velocity.x
            box.position.y += box.velocity.y
        });
    }

    update = () => {
        // console.log(this.bodies[0].velocity);
        this.checkCollision()
        this.forcesAndVelocity()
        this.applyVelocities()

        this.updateChildren()
    }
}