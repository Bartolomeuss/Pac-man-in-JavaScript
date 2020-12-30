const width = 28
const grid =document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = [];
let pacmanCurrentIndex = 490
let keyCount = 0
let score = 0

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
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
    1,1,1,1,1,1,0,1,1,4,1,1,2,1,1,2,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,2,2,2,2,2,2,2,2,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,2,2,2,2,2,2,2,2,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,2,2,2,2,2,2,2,2,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,1,1,1,1,2,1,4,1,1,0,1,1,1,1,1,1,
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
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
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
            !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')&&
            pacmanCurrentIndex % width < width -1) 
            pacmanCurrentIndex +=1
                
            if (pacmanCurrentIndex === 391){
                pacmanCurrentIndex = 364}

            
        
    break;
    
    case 38:    //up-arrow-key

        if( 

            !squares[pacmanCurrentIndex -width].classList.contains('wall')&&
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')&&
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
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')&&
            pacmanCurrentIndex % width !==0)
            pacmanCurrentIndex -=1
            
            if(
                pacmanCurrentIndex === 364){ 
                pacmanCurrentIndex = 391}
   
    break;
}
    squares[pacmanCurrentIndex].classList.add('pacman')
    
    dotEaten()
    powerPellet()   

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

function powerPellet(){
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
        score += 10
        scoreDisplay.textContent = score
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        squares[pacmanCurrentIndex].classList.add('empty')
        
        ghosts.forEach(ghost => ghost.isScared = true)
        
        setTimeout(unScare,10000)


    }
}

function unScare() {
    ghosts.forEach(ghost => ghost.isScared = false)
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

const ghosts = [
    new ghost('ghost1', 348, 250),
    new ghost('ghost2', 376, 400),
    new ghost('ghost3', 351, 350),
    new ghost('ghost4', 379, 450),
]
// create ghosts
ghosts.forEach(ghost => {
squares[ghost.currentIndex].classList.add(ghost.className)
squares[ghost.currentIndex].classList.add('ghost')
})

// move ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
    
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    
    
    ghost.timerId = setInterval(function() {
        
        
        if(
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ){
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
           
            ghost.currentIndex += direction
           
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        }else direction = directions[Math.floor(Math.random() * directions.length)]
          
        if(ghost.isScared === true){
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        if(ghost.currentIndex === pacmanCurrentIndex || !ghost.isScared){
            
        }

        if(ghost.isScared && 
            squares[ghost.currentIndex].classList.contains('pacman')){
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost' )
            
            ghost.currentIndex =ghost.startIndex
            score += 100
            scoreDisplay.textContent = score
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

        }

    }, ghost.speed )
    
}

function gameOver(){
    if(squares[pacmanCurrentIndex].classList.contains('ghost') && 
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost') ){

        ghost.forEach(ghost => clearInterval(ghost.timerId))

    }
    
}