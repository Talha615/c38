class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }
    getCount(){
        var playerCountStateref=database.ref("playercount")
        playerCountStateref.on("value",function(data){
        playerCount=data.val()

        }) 
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })

    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({

            name:this.name,
            distance:this.distance


        })
    }
static getplayerinfo(){
var playerinforef=database.ref("players") 
playerinforef.on("value",function(data){
    allplayers=data.val()
})

}

}