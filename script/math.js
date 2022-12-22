Math.sinD = (degree) => {
    radian = degree * (Math.PI / 180)
    value = Math.sin(radian)
    return value
}

Math.asinD = (value) => {
    radian = Math.asin(value)
    degree = radian * (180 / Math.PI)
    return degree
}

Math.cosD = (degree) => {
    radian = degree * (Math.PI / 180)
    value = Math.cos(radian)
    return value
}

Math.acosD = (value) => {
    radian = Math.acos(value)
    degree = radian * (180 / Math.PI)
    return degree
}

Math.tanD = (degree) => {
    radian = degree * (Math.PI / 180)
    value = Math.tan(radian)
    return value
}

Math.atanD = (value) => {
    radian = Math.atan(value)
    degree = radian * (180 / Math.PI)
    return degree
}