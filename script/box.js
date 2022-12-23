/** @type {HTMLCanvasElement} */


class body {
    constructor(mass, frictionCoefficient) {
        this.mass = mass
        this.mu = frictionCoefficient

        this.angle = 0

        this.position = {}
        this.position.x = 1360
        this.position.y = 300

        this.velocity = {}
        this.velocity.x = 0
        this.velocity.y = 0

        // has to be a square for some reason :<
        this.size = {}
        this.size.width = 100
        this.size.height = 100
    }

    // 
    //  p4 === p3
    //  || box ||
    //  p1 === p2
    // 

    draw = () => {
        const v = this.angle
        const u = 90 - v
        const x = this.position.x
        const y = this.position.y


        ctx.fillStyle = "whitesmoke"
        ctx.beginPath()

        // p1
        const p1x = x
        const p1y = y
        ctx.moveTo(p1x, p1y)

        // p2
        const p2x = x + this.size.width * Math.cosD(v)
        const p2y = y - this.size.height * Math.sinD(v)
        ctx.lineTo(p2x, p2y)

        // p3
        const p3x = p2x - this.size.height * Math.cosD(u)
        const p3y = p2y - this.size.height * Math.sinD(u)
        ctx.lineTo(p3x, p3y)

        // p4
        const p4x = x - this.size.height * Math.cosD(u)
        const p4y = y - this.size.height * Math.sinD(u)
        ctx.lineTo(p4x, p4y)

        ctx.fill()
    }

    text = () => {

        ctx.fillStyle = "white"
        ctx.font = "50px courier new"

        const spacing = 40
        const heightOffset = 10

        this.velocity.total = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)

        const mass = this.mass
        const vel = this.velocity.total.toFixed(1)
        const mu = this.mu.toFixed(1)

        ctx.fillText(`${mass} kg`, this.position.x, this.position.y - this.size.height - spacing * 3 - heightOffset)
        ctx.fillText(`${vel} m/s`, this.position.x, this.position.y - this.size.height - spacing * 2 - heightOffset)
        ctx.fillText(`${mu} μ   `, this.position.x, this.position.y - this.size.height - spacing * 1 - heightOffset)
    }

    arrows = () => {
        const centerX = this.position.x + this.size.width / 2
        const centerY = this.position.y - this.size.height / 2

        ctx.strokeStyle = "red"
        ctx.lineWidth = 10
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + this.velocity.x * 15, centerY)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX, centerY + this.velocity.y * 15)
        ctx.stroke()
    }

    update = () => {
        this.arrows()
        this.draw()
        this.text()
    }
}
