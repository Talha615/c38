var ball;
var database,position
var gameState=0,playerCount
var form,player,game
var allplayers
var car,car2,car3,car4,cars
function setup(){
    createCanvas(displayWidth-50,displayHeight-140);
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()




}


function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)

    }
    if (gameState===1){
        clear()
        game.play()
    }
}












