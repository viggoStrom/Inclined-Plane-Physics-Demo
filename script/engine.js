/** @type {HTMLCanvasElement} */


class engine {
    constructor(plane, ...bodies) {
        this.plane = plane
        this.bodies = bodies
        this.gravity = .05
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

            if (Ff > F1) {
                F1 = 0
            }
            else if (F1 > Ff) {
                F1 -= Ff
            }

            if (!box.collided) {
                box.velocity.x += F1
                box.velocity.y += F2
            }
        });
    }

    planeHeightAt = (x) => {
        const k = -Math.sinD(this.plane.angle)
        const m = plane.startHeight
        return k * x + m
    }

    checkCollisionWithPlane = () => {
        this.bodies.forEach(box => {
            if (box.position.y >= this.planeHeightAt(box.position.x + box.size.width)) {
                box.collided = true
                this.setboxAngles()
            }
        });
    }

    applyVelocities = () => {
        this.bodies.forEach(box => {
            if (!box.collided) {
                box.position.x += box.velocity.x
                box.position.y += box.velocity.y
            }
        });
    }

    update = () => {
        this.checkCollisionWithPlane()

        this.forcesAndVelocity()
        this.applyVelocities()

        this.updateChildren()
    }
}