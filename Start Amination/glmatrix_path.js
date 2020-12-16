// Initialize the path parameter x
function TankPath(x) {
    this.x = x;
}
// compute the change of thak's movement
TankPath.prototype.deltaX = function(u) {
    var x = 200 * Math.sin(u);
    return x + this.x;
}


