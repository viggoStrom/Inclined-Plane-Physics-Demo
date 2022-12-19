/** @type {HTMLCanvasElement} */


class inclinedPlane {
    constructor(angle) {
        this.angle = angle
        this.startHeight = canvas.height * 9 / 10
        this.endHeight = this.startHeight * (1 - Math.tan(angle * (Math.PI / 180)))
        this.x1 = 0
        this.y1 = this.startHeight
        this.x2 = canvas.width
        this.y2 = this.endHeight
    }

    setU = (u) => {
        if (u.toFixed(5) < 0 || u.toFixed(5) > 1) {
            return console.error(`LinearInterpolation(): u is only defined for 0 <= u <= 1 and ${u} is not within the span`);
        }

        this.ux = this.x1 + u * (this.x2 - this.x1)
        this.uy = this.y1 + u * (this.y2 - this.y1)
    }

    getU = () => {
        return [this.ux, this.uy]
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

class linearInterpolation {
    constructor(xy1, xy2) {
        this.x1 = xy1[0]
        this.y1 = xy1[1]
        this.x2 = xy2[0]
        this.y2 = xy2[1]
        this.uRadius = 10
        this.straightLineModifier = (this.y2 - this.y1) / (this.x2 - this.x1)
    }

    drawLine = () => {
        ctx.strokeStyle = "#252525"
        ctx.lineWidth = 4

        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.stroke()
    }



    getU = () => {
        return [this.ux, this.uy]
    }

    getXY1 = () => {
        return [this.x1, this.y1]
    }
    getXY2 = () => {
        return [this.x2, this.y2]
    }

    setXY = (xy1, xy2) => {
        this.x1 = xy1[0]
        this.y1 = xy1[1]
        this.x2 = xy2[0]
        this.y2 = xy2[1]
    }

    drawU = () => {
        ctx.strokeStyle = "#363636"
        ctx.lineWidth = 4

        ctx.beginPath()
        ctx.arc(this.ux, this.uy, this.uRadius, 0, 2 * Math.PI)
        ctx.stroke()
    }

    update = (u, xy1, xy2) => {
        this.setXY(xy1, xy2)
        this.setU(u)

        this.drawLine()
        this.drawU()
    }
}