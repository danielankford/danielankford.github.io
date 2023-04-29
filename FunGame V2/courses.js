let w = window.innerWidth
let h = window.innerHeight
let level = parseInt(window.localStorage.getItem("level"))
let nextStage = false
let previousStage = false
var courses = {
    0: {
        0: {//This is the course.
            0: [0,h/2,w,200,"SOMETHING"],
            1: [w-200,h/2,200,200, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,h/2+100]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    1: {
        0: {//This is the course.
            0: [50,0,200,500,"SOMETHING"],
            1: [50,500,w-50,200,"SOMETHING"],
            2: [w-200,500,200,200, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [125,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    2: {
        0: {//This is the course.
            0: [50,0,200,500,"SOMETHING"],
            1: [50,500,w-50,200,"SOMETHING"],
            2: [w-200,200,200,300,"SOMETHING"],
            3: [w-200,200,200,200, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [125,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    3: {
        0: {//This is the course.
            0: [50,0,200,500,"SOMETHING"],
            1: [50,500,w-50,200,"SOMETHING"],
            2: [w-200,200,200,300,"SOMETHING"],
            3: [200,200,w,200, "SOMETHING"],
            4: [w-200,200,200,200, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [125,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    4: {
        0: {//This is the course.
            0: [0,300,400,200,"SOMETHING"],
            1: [400,300,200,400, "SOMETHING"],
            2: [600,500,400,200, "SOMETHING"],
            3: [800,0,200,600, "SOMETHING"],
            4: [800,0,200,200, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,350]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    5: {
        0: {//This is the course.
            0: [w-300,0,200,200,"SOMETHING"],
            1: [w-700,200,600,200, "SOMETHING"],
            2: [w-700,120,200,200, "SOMETHING"],
            3: [w-900,120,200,80, "SOMETHING"],
            4: [w-900,120,80,80, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [w-250,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    6: {
        0: {//This is the course.
            0: [0,h-400,200,400,"SOMETHING"],
            1: [200,h-600,200,400,"SOMETHING"],
            2: [400,h-600,200,200,"SOMETHING"],
            3: [400,h-600,200,200,"COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,h-50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    7: {
        0: {//This is the course.
            0: [0,h/4,170,400,"SOMETHING"],
            1: [170,h/4+230,170,170,"SOMETHING"],
            2: [300,h/4-100,100,500,"SOMETHING"],
            3: [300,h/4-100,500,200,"SOMETHING"],
            4: [600,h/4-100,200,200,"COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,h/4+50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    8: {
        0: {//This is the course.
            0: [w/2-200,0,200,200,"SOMETHING"],
            1: [w/2-500,200,800,200,"SOMETHING"],
            2: [w/2-500,400,170,300, "SOMETHING"],
            3: [w/2-500,700,170,20, "COMPLETE"],
        },
        1: {//This is where the player starts
            "starting": [w/2-100,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    9: {
        0: {//This is the course.
            0: [0,0,200,200,"SOMETHING"],
            1: [140,200,200,200,"SOMETHING"],
            2: [280,400,200,200,"SOMETHING"],
            3: [420,600,200,100,"SOMETHING"],
            4: [420,650,200,50,"COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    10: {
        0: {//This is the course.
            0: [0,h-100,170,100,"SOMETHING"],
            1: [170,h-150,170,100,"SOMETHING"],
            2: [340,h-200,170,100,"SOMETHING"],
            3: [500,h-250,170,100,"SOMETHING"],
            4: [670,h-300,300,400, "SOMETHING"],
            5: [670,h-100,300,100, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [50,h-50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    11: {
        0: {//This is the course.
            0: [w-170,100,170,100,"SOMETHING"],
            1: [w-170,200,80,100,"SOMETHING"],
            2: [w-200,280,80,100,"SOMETHING"],
            3: [50,280,w-200,100, "SOMETHING"],
            4: [50,280,80,100, "COMPLETE"]
        },
        1: {//This is where the player starts
            "starting": [w-50,150]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    12: {
        0: {//This is the course.
            0: [0,100,300,100,"SOMETHING"],
            1: [200,200,300,100,"SOMETHING"],
            2: [400,0,100,300,"SOMETHING"],
            3: [500,0,500,100,"SOMETHING"],
            4: [1000,0,100,500,"SOMETHING"],
            5: [0,500,1100,100,"SOMETHING"],
            6: [0,210,100,300,"SOMETHING"],
            7: [0,210,100,50,"COMPLETE"],
        },
        1: {//This is where the player starts
            "starting": [50,150]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    13: {
        0: {//This is the course.
            0: [0,0,100,220,"SOMETHING"],
            1: [0,220,150,80,"SOMETHING"],
            2: [150,0,150,300,"SOMETHING"],
            3: [150,0,200,50, "SOMETHING"],
            4: [350,0,100,300, "SOMETHING"],
            5: [430,220,80,80, "SOMETHING"],
            6: [510,200,80,80, "SOMETHING"],
            7: [590,180,80,80, "SOMETHING"],
            8: [670,160,80,80, "SOMETHING"],
            9: [750,140,80,80, "SOMETHING"],
            10: [830,120,80,80, "SOMETHING"],
            11: [910,100,80,80, "SOMETHING"],
            12: [990,80,80,80, "SOMETHING"],
            13: [1070,60,80,80, "SOMETHING"],
            14: [1150,40,80,80, "SOMETHING"],
            15: [1230,20,80,80, "SOMETHING"],
            16: [1310,0,80,250, "SOMETHING"],
            17: [1230,210,80,80, "SOMETHING"],
            18: [1150,230,80,80, "SOMETHING"],
            19: [1070,250,80,80, "SOMETHING"],
            20: [990,270,80,80, "SOMETHING"],
            21: [910,290,80,80, "SOMETHING"],
            22: [830,310,80,80, "SOMETHING"],
            23: [830,310,80,400, "SOMETHING"],
            24: [830,640,400,100, "SOMETHING"],
            25: [1230,640,50,100, "COMPLETE"],
        },
        1: {//This is where the player starts
            "starting": [50,50]
        },//This is an empty dictionary that gets filled out with code
          //This is able to show the boundaries of the different shapes from above.
          //VERY USEFUL DONT DELETE EVEN THOUGH IT IS EMPTY
        2: {},
        3: "INCOMPLETE"
    },
    
    
    
}
let completeVar
function createCourse(x) {
    //Starts the character in a certain position.
    if (starting == true) {
        character.x = x[1]["starting"][0]
        character.y = x[1]["starting"][1]
        starting = false
    }
    for(let i=0;i<Object.keys(x[0]).length;i++) {
        if (x[0][i][4] == "COMPLETE") {
            fill(0,255,0)
            rect(x[0][i][0],x[0][i][1],x[0][i][2],x[0][i][3])
            fill(255,0,0)
            completeVar = i
        }
        else {
            rect(x[0][i][0],x[0][i][1],x[0][i][2],x[0][i][3])
        }
        
        //Creates the Range that will be used later :)
        x[2][i] = {}
        x[2][i]['x'] = [x[0][i][0],x[0][i][0]+x[0][i][2]]
        x[2][i]['y'] = [x[0][i][1],x[0][i][1]+x[0][i][3]]

        //Sorts it from least to greatest so I dont have to do it manually.
        //Ngl, this code was copied. I don't think this will do much harm :)
        x[2][i]['x'] = x[2][i]['x'].sort(function (a, b) {  return a - b;  })
        x[2][i]['y'] = x[2][i]['y'].sort(function (a, b) {  return a - b;  })
    }
    return [Object.keys(x[0]).length]
}

function moving(x) {
    
    let xMove = false
    let yMove = false
    let square = false
    for(i=0;i<Object.keys(x[0]).length;i++) {
        for(p=0;p<Object.keys(x[2][i]).length;p++) {
            //This is to see if X is able to move
            if (between(character.x,x[2][i]['x'][0],x[2][i]['x'][1])) {
                xMove = true
            }
            if (between(character.y,x[2][i]['y'][0],x[2][i]['y'][1])) {
                yMove = true
            }
            if (xMove == true && yMove == true) {
                square = true
                break
            }
            else {
                xMove = false
                yMove = false
            }

            //This is to see if Y is able to move
        }
        if (square == true) {
            //Has the positions of when x and y is true
            xTrue = [x[2][i]['x'][0],x[2][i]['x'][1]]
            yTrue = [x[2][i]['y'][0],x[2][i]['y'][1]]
            //Finds the middle to see where is it more.
            xMiddle = (xTrue[0] + xTrue[1]) / xTrue.length
            yMiddle = (yTrue[0] + yTrue[1]) / yTrue.length
            //Finds to see if the character is more right
            if (character.x > xMiddle) {
                moreRight = true
            }
            //If not, then it would be more left
            else {
                moreRight = false
            }
            //Finds to see if the character is more down
            if (character.y > yMiddle) {
                moreDown = true
            }
            //If not, then the character is more up
            else {
                moreDown = false
            }
            //If the character is more up, change the 
            
            moveAble = true
            //to see if there is a rectanlge to the left, right, bottom, or top of the character's current position
            let rightTrue = false
            let leftTrue = false
            let upTrue = false
            let downTrue = false
            for(m=0;m<Object.keys(x[0]).length;m++) {
                for(n=0;n<Object.keys(x[2][i]).length;n++) {
                    if (between((character.x)+(character.size/2),x[2][m]["x"][0],x[2][m]["x"][1]) && between((character.y),x[2][m]["y"][0],x[2][m]["y"][1])) { //Right
                        rightTrue = true
                    }
                    if (between((character.x)-(character.size/2),x[2][m]["x"][0],x[2][m]["x"][1]) && between((character.y),x[2][m]["y"][0],x[2][m]["y"][1])) { //Left
                        leftTrue = true                        
                    }
                    if (between((character.y)+(character.size/2),x[2][m]["y"][0],x[2][m]["y"][1]) && between((character.x),x[2][m]["x"][0],x[2][m]["x"][1])) { //Down
                        downTrue = true
                    }
                    if (between((character.y)-(character.size/2),x[2][m]["y"][0],x[2][m]["y"][1]) && between((character.x),x[2][m]["x"][0],x[2][m]["x"][1])) { //Up
                        upTrue = true
                    }
                }
            }


            if (moreRight == true) {
                if (rightTrue == false) {
                    if (character.x >= ((x[2][i]['x'][1]) - character.size/2)) {
                        moveAble = false
                    }
                    else {
                    moveAble = true
                    }
                }
            }
            else if(moreRight == false) {
                if (leftTrue == false) {
                    if (((character.x) <= (x[2][i]['x'][0] + character.size/2)+(0.00000000001))) {
                        moveAble = false
                    }
                    else {
                        moveAble = true
                    }
                }
            }
            if (moreDown == true) {
                if (downTrue == false) {
                    if (character.y >= ((x[2][i]['y'][1]) - character.size/2)) {
                        moveAbleY = false
                    }
                    else {
                       moveAbleY = true
                    }
                }
            }
            else if (moreDown == false) {
                if (upTrue == false) {
                    if (character.y <= ((x[2][i]['y'][1]) - character.size/2)) {
                        moveAbleY = false
                    }
                    else {
                       moveAbleY = true
                    }
                }
            }

            break
        }

    }

    if ((moveAbleY == true) && (moveAble == true)) {
        moveAble = true
    }
    else {
        moveAble = false
        if (win != true) {
            die = true
        }
        else {
            die = false
        }
        
    }
    if (collideRectRect(character.x-character.size/2,character.y-character.size/2,character.size,character.size,x[0][completeVar][0],x[0][completeVar][1],x[0][completeVar][2],x[0][completeVar][3])) {
        moveAble = false
        win = true
    }
    
    

    //IF both are able to move, then return True. If not, return False

    if (moveAble == true) {
        if(keyIsDown(38) || keyIsDown(87)) {
            character.up()
        }
        
    }
    if (moveAble == true) {
        if(keyIsDown(40) || keyIsDown(83)) {
            character.down()
        }
        
    }
    if (moveAble == true) {
        if(keyIsDown(39) || keyIsDown(68)) {
            character.right()
        }
        
    }
    if (moveAble == true) {
        if(keyIsDown(37) || keyIsDown(65)) {
            character.left()
        }
        
    }
}

function winner(x) {
    if (winPhase == true) {
        x[level][3] = "COMPLETE"
        window.localStorage.setItem(level,"COMPLETE")
        winPhase = false
    }
    let gameMenu = document.getElementById("gameMenu")
    let nextButton = document.getElementById("nextStage")
    let previousButton = document.getElementById("previousStage")
    gameMenu.style.display = "flex"
    if (typeof x[level+1] != "undefined") {
        nextStage = true
        document.getElementById("completeMessage").innerText = "Congratulations! You've completed the stage!"
        nextButton.disabled = false
        
    }
    else {
        document.getElementById("completeMessage").innerText = "Congratulations! You've Completed the Game!"
        nextButton.disabled = true
    }
    if (x[level-1] == null) {
        previousButton.disabled = true
    }
    else {
        previousStage = true
        previousButton.disabled = false
    }
}
function deathMessageFunction() {
    if (deathSequence == true) {
        let deathMessages = ["you died","TIP: If you're having trouble, switch difficulty","L BOZO"]
        deathMessage = random(deathMessages)
        deathSequence = false
    }
    return deathMessage
}
function death(x) {
    die = false

    let gameMenu = document.getElementById("gameMenu")
    let nextButton = document.getElementById("nextStage")
    let previousButton = document.getElementById("previousStage")
    
    document.getElementById("completeMessage").innerText = deathMessageFunction()
    gameMenu.style.display = "flex"
    if (typeof window.localStorage.getItem(level+1) != undefined) {
        if((window.localStorage.getItem(level+1) == "COMPLETE") || window.localStorage.getItem(level+1) == "ON") {
            nextButton.disabled = false
            window.localStorage.setItem(level+1,"ON")
        }
        else {
            nextButton.disabled = true
        }
    }
    if (typeof window.localStorage.getItem(level-1) != undefined) {
        if(window.localStorage.getItem(level-1) == "COMPLETE") {
            previousButton.disabled = false
        }
        else {
            previousButton.disabled = true
        }
    }
}

function playing(x) {
    createCourse(x[level])
    rectMode(CENTER)
    character.show()
    rectMode(CORNER)
    moving(x[level])

    if (win == true) {
        winner(x)
    }
    if (die == true) {
        death(x)
        if(deathSound == true) {
            dieSound.play()
            backgroundSong.stop()
            deathSound = false
        }
    }
}