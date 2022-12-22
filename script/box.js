/** @type {HTMLCanvasElement} */


class body {
    constructor(mass, frictionCoefficient) {
        this.mass = mass
        this.mu = frictionCoefficient

        this.angle = 0

        this.position = {}
        this.position.x = 1360
        this.position.y = 675

        this.velocity = {}
        this.velocity.x = 0
        this.velocity.y = 0

        this.size = {}
        this.size.width = 140
        this.size.height = 100
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
        let p2y = y - this.size.height * Math.sinD(v)
        ctx.lineTo(p2x, p2y)

        // p3
        let p3x = x + this.size.width * Math.cosD(v) - this.size.height * Math.cosD(u)
        let p3y = y - this.size.height * Math.sinD(u) - this.size.height * Math.sinD(v)
        ctx.lineTo(p3x, p3y)

        // p4
        let p4x = x - this.size.height * Math.cosD(u)
        let p4y = y - this.size.height * Math.sinD(u)
        ctx.lineTo(p4x, p4y)

        ctx.fill()
    }

    text = () => {
        this.velocity.total = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)

        ctx.fillStyle = "white"
        ctx.font = "50px courier new"

        let spacing = 40
        let heightOffset = 10

        let mass = this.mass
        let vel = this.velocity.total.toFixed(1)
        let mu = this.mu.toFixed(1)

        ctx.fillText(`${mass} kg`, this.position.x, this.position.y - this.size.height - spacing * 3 - heightOffset)
        ctx.fillText(`${vel} m/s`, this.position.x, this.position.y - this.size.height - spacing * 2 - heightOffset)
        ctx.fillText(`${mu} μ   `, this.position.x, this.position.y - this.size.height - spacing * 1 - heightOffset)
    }

    update = () => {
        this.draw()
        this.text()
    }
}
