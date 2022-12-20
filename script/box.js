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

    draw = () => {
        ctx.fillStyle = "whitesmoke"
        ctx.beginPath()
        ctx.moveTo(this.position.x, this.position.y)
        ctx.lineTo(this.position.x, this.position.y - this.size.height)
        ctx.lineTo(this.position.x + this.size.width, this.position.y - this.size.height)
        ctx.lineTo(this.position.x + this.size.width, this.position.y)
        ctx.fill()
    }

    text = () => {
        ctx.fillStyle = "white"
        ctx.font = "50px courier new"
        ctx.fillText(`${this.mass} kg`, this.position.x, this.position.y - this.size.height - 40 * 3)
        ctx.fillText(`${this.velocity.total.toFixed(1)} m/s`, this.position.x, this.position.y - this.size.height - 40 * 2)
        ctx.fillText(`${this.mu.toFixed(1)} μ`, this.position.x, this.position.y - this.size.height - 40 * 1)
    }

    update = () => {
        this.velocity.total = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)

        this.draw()
        this.text()
    }
}
