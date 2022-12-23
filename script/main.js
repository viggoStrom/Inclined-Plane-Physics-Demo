/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.height = 1000
canvas.width = canvas.height * 16 / 10

canvas.hasInitiated = false

const plane = new inclinedPlane(20)
const box = new body(10, 0.5)
const physics = new engine(plane, box)

const initiate = () => {
    if (!canvas.hasInitiated) {
        canvas.hasInitiated = true

        physics.initiate()

        window.requestAnimationFrame(frame)
    }
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        initiate()
    }
});

const instructions = () => {
    ctx.fillStyle = "#252525aa"
    ctx.fillRect(canvas.width * (1 / 30), canvas.height * (2 / 5), canvas.width * (14 / 15), canvas.height * (1 / 5))

    ctx.fillStyle = "white"
    ctx.font = "60px courier new"
    ctx.fillText("Please click on the screen or press 'space'", canvas.width * (1 / 15), canvas.height * (1 / 2), canvas.width * (13 / 15))
}

const frame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    physics.update()

    window.requestAnimationFrame(frame)
}

physics.updateChildren()
instructions()