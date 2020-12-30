const width = 28
const grid =document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = [];
let pacmanCurrentIndex = 490
let keyCount = 0
let score = 0

const layout = [
    1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1 
]

function createBord() {
    for(let i = 0; i <layout.length; i ++){
        const square = document.createElement('div')
        grid.appendChild(square) 
        squares.push(square)

        if(layout[i] === 0){
           squares[i].classList.add('pac-dot')
        } else if( layout[i] === 1){
            squares[i].classList.add('wall')
        } else if( layout[i] === 2){
            squares[i].classList.add('ghost-lair')
        }else if ( layout[i] === 3){
            squares[i].classList.add('power-pellet')
        }else if ( layout[i] === 4){
            squares[i].classList.add('empty')
        } 
    }
}
createBord()

squares[pacmanCurrentIndex].classList.add('pacman')
 

function control(e) {
    
    squares[pacmanCurrentIndex].classList.remove('pacman')

    switch(e.keyCode){
    case 40:    //down-arrow-key
        if(
            
            !squares[pacmanCurrentIndex + width].classList.contains('wall')&&
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')&&
            pacmanCurrentIndex + width < width * width){
            pacmanCurrentIndex += width}
            
            if (pacmanCurrentIndex === 757){
                pacmanCurrentIndex = 26}
            if (pacmanCurrentIndex === 782){
                pacmanCurrentIndex = 1}
            

        
    break;

    case 39:    //right-arrow-key


        if( 
            
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            pacmanCurrentIndex % width < width -1) 
            pacmanCurrentIndex +=1
                
            if (pacmanCurrentIndex === 391){
                pacmanCurrentIndex = 364}

            
        
    break;
    
    case 38:    //up-arrow-key

        if( 

            !squares[pacmanCurrentIndex -width].classList.contains('wall')&&
            pacmanCurrentIndex - width >= 0){
            pacmanCurrentIndex-= width}
            
            if (pacmanCurrentIndex === 26){
                pacmanCurrentIndex = 757}
            if (pacmanCurrentIndex === 1){
                pacmanCurrentIndex = 782}
   
    break;
   
    case 37:    //left-arrow-key

        if( 
            !squares[pacmanCurrentIndex -1].classList.contains('wall')&&
            pacmanCurrentIndex % width !==0)
            pacmanCurrentIndex -=1
            
            if(
                pacmanCurrentIndex === 364){ 
                pacmanCurrentIndex = 391}
   
    break;
}
    squares[pacmanCurrentIndex].classList.add('pacman')
    
    dotEaten()   

}

document.addEventListener('keyup', control,)

function dotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    score++ 
    scoreDisplay.textContent = score
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    squares[pacmanCurrentIndex].classList.add('empty')
    }
}

class ghost {
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId
    }
}

ghosts = [
    new ghost('ghost1', 348, 250),
    new ghost('ghost2', 376, 400),
    new ghost('ghost3', 351, 350),
    new ghost('ghost2', 379, 450),
]
// create ghosts
ghosts.forEach(ghost => squares[ghost.startIndex].classList.add(ghost.className))
// move ghosts
ghosts.forEach(ghost => moveGhosts(WebGLShaderPrecisionFormat))


function moveGhosts(){

}