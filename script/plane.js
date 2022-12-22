/** @type {HTMLCanvasElement} */


class inclinedPlane {
    constructor(angle) {
        if (angle > 40) {
            this.angle = 40
        }
        else if (angle < 0) {
            this.angle = 0
        }
        else {
            this.angle = angle
        }

        // dont touch. It finally works
        this.startHeight = canvas.height * 9 / 10
        this.endHeight = this.startHeight - canvas.width * Math.tanD(this.angle)
    }

    draw = () => {
        ctx.fillStyle = "#252525"
        ctx.beginPath()
        ctx.moveTo(0, this.startHeight)
        ctx.lineTo(canvas.width, this.endHeight)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.fill()
    }

    text = () => {
        ctx.fillStyle = "white"
        ctx.font = "60px courier new"
        ctx.fillText(`${this.angle}º`, 60, 960)
    }

    update = () => {
        this.draw()
        this.text()
    }
}
