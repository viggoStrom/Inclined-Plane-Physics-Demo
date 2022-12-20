/** @type {HTMLCanvasElement} */


class body {
    constructor(mass, frictionCoefficient) {
        this.mass = mass
        this.mu = frictionCoefficient

        this.position = {}
        this.position.x = canvas.width / 2
        this.position.y = canvas.height / 2

        this.velocity = {}
        this.velocity.x = 0
        this.velocity.y = 0

        this.size = {}
        this.size.height = 50
        this.size.width = 100
    }

    draw = () => {
        ctx.fillStyle = "grey"
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
        ctx.fillText(`${this.mass} kg`, this.position.x, this.position.y - 120)
        ctx.fillText(`${this.velocity.total.toFixed(1)} m/s`, this.position.x, this.position.y - 80)
        ctx.fillText(`${this.mu.toFixed(1)} μ`, this.position.x, this.position.y - 40)
    }

    update = () => {
        this.velocity.total = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2)

        this.draw()
        this.text()
    }
}
u