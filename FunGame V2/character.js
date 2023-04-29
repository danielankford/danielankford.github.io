function characterBox() {
    //easy -- 5
    //medium -- 10
    //hard -- 15
    //impossible -- 20
    this.speed = parseInt(window.localStorage.getItem("speed"))
    this.size = 25
    this.x = 100
    this.y = 700
    this.evel = 0

    this.show = function() {
        fill(0,0,0)
        rect(this.x,this.y,this.size,this.size)
        fill(255,0,0)
    }


    this.up = function() {
        this.y -= this.speed
    }
    this.down = function() {
        this.y += this.speed
    }
    this.left = function() {
        this.x -= this.speed
    }
    this.right = function() {
        this.x += this.speed
    }
}