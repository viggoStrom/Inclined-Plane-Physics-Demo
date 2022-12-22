/** @type {HTMLCanvasElement} */


class body {
    constructor(mass, frictionCoefficient) {
        this.mass = mass
        this.mu = frictionCoefficient

        this.angle = 0

        this.position = {}
        this.position.x = 1350
        this.position.y = 300

        this.velocity = {}
        this.velocity.x = 0
        this.velocity.y = 0

        this.size = {}
        this.size.height = 100
        this.size.width = 140
    }

    // 
    //  p4 === p3
    //  || box ||
    //  p1 === p2
    // 

    draw = () => {
        let v = this.angle
        let u = 90 - v
        let x = this.position.x
        let y = this.position.y

        ctx.fillStyle = "whitesmoke"
        ctx.beginPath()

        // p1
        let p1x = x
        let p1y = y
        ctx.moveTo(p1x, p1y)

        // p2
        let p2x = x + this.size.width * Math.cosD(v)
        let p2y = y - this.size.width * Math.sinD(v)
        ctx.lineTo(p2x, p2y)

        // p3
        let p3x = x
        let p3y = y
        ctx.lineTo(p3x, p3y)

        // p4
        let p4x = x
        let p4y = y
        ctx.lineTo(p4x, p4y)

        ctx.fill()
    }

    text = () => {
        this.velocity.total = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)


        ctx.fillStyle = "white"
        ctx.font = "50px courier new"
        ctx.fillText(`${this.mass} kg`, this.position.x, this.position.y - this.size.height - 40 * 3)
        ctx.fillText(`${this.velocity.total.toFixed(1)} m/s`, this.position.x, this.position.y - this.size.height - 40 * 2)
        ctx.fillText(`${this.mu.toFixed(1)} μ`, this.position.x, this.position.y - this.size.height - 40 * 1)
    }

    update = () => {
        this.draw()
        this.text()
    }
}
