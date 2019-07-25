var map = [

    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,4,1,1,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,2,2,1,2,2,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]

];
var pacman={
    x:4,
    y:6,
    dir:"right"

};

 var world = document.getElementById("world");
function draw(){
 var html = "";
 for( var i = 0;i<map.length;i++){
     for(var j = 0;j<map[i].length;j++){
         if(map[i][j]===1){
             html+= '<div class="wall"></div>';
         }
         else if(map[i][j]===2){
            html+= '<div class="coin"></div>';
        }
         else if(map[i][j]===3){
            html+= '<div class="ground"></div>';
        }
         else if(map[i][j]===4){
            html+= '<div class="pacman '+pacman.dir+'"></div>';
        }
     }
     html+="</br>";
 }
 world.innerHTML = html;
}
draw();

document.onkeydown = function(e){
    
    if(e.code ==="ArrowRight"){
        pacman.dir = "right";
        if(map[pacman.x][pacman.y+1]!==1){
            map[pacman.x][pacman.y] = 3;
            pacman.y = pacman.y+1;
            map[pacman.x][pacman.y] = 4;
        }
    }
    else if(e.code==="ArrowLeft"){
        pacman.dir = "left";
        if(map[pacman.x][pacman.y-1] !==1) {
            map[pacman.x][pacman.y] = 3;
            pacman.y = pacman.y-1;
            map[pacman.x][pacman.y] = 4;

        }
    }
    else if(e.code==="ArrowUp"){
        pacman.dir="up";
        if(map[pacman.x-1][pacman.y]!==1){
            pacman.dir="up";
        
            map[pacman.x][pacman.y]=3;
            
            pacman.x=pacman.x-1;
            
            //变成吃豆人
            map[pacman.x][pacman.y]=4;
        }
    }
    //向下移动
    else if(e.code==="ArrowDown"){
        pacman.dir="down";
        if(map[pacman.x+1][pacman.y]!==1){
                
                map[pacman.x][pacman.y]=3;
                
                
                pacman.x=pacman.x+1;
                
                //变成吃豆人
                map[pacman.x][pacman.y]=4;
                }
        }
    draw();
};