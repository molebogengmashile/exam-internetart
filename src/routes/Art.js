import React,{state} from 'react'
import Snake from '../components/Snake';
import Food from '../components/Food';

import '../components/ArtStyles.css'
import { NavbarJ } from '../components/NavbarJ';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

class Art extends React.Component {
  state = initialState;

  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
  }

  moveSnake = ()=> {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }
  checkIfOutOfBorders ()  {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed (){
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    // alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
  }
 
render (){
  return (
    <>
    <NavbarJ/>
   
    <section className='container-art'>
    <div className='art-block'>

      <div className='game-view'>
         
      <div className='game-area'>
           
           <Snake snakeDots={this.state.snakeDots}/>
           <Food dot={this.state.food}/>
           <div className='blocking-container'>
           <div className='blocking'></div>
           <div className='blocking-1'></div>
           {/* <div className='blocking-2'></div> */}

           </div>
          
              
 
           </div>
      </div>
       
         
      </div>
        {/* <button onClick={this.moveSnake()}>Play</button> */}
      

    <div className='art-block'>
        <h2>The Art explained</h2>
        <br></br>
        <br></br>
          
          <div>
              
          <p>This artwork demonstrates what it would be like to experience a website or social media from different perspectives. 
                  On my Instagram feed, I am often bombarded with new injustices done to black people and people of color, but mainly black.
                   The internet does not know the color of my skin, yet it still manages to guess correctly. With the ability to know my location,
                    these large tech companies (the internet), are able to provide content that is relevant to me. This then becomes what I see every
                     day. This is not entirely the internet's fault. The content that I engage with the most will be more prevalent in my feed, and the content
                      that I don't show interest in, I will see less of. It is this algorithmic model that keeps users coming back. Really it is our way of thinking that
                       reflects on the internet.
                       <br></br>
                       <br></br>
                       The snake game further illustrates what it looks like for different people to explore the same space. Although these people are exposed to the 
                       same information, some aspects of it are hidden or highlighted depending on who you are and how you use the internet.
                        The snakes are allowed to endlessly explore the same space but never really explore the same space. 
                         Although we are the ones teaching this racism on the internet, don't these companies also have the responsibility of providing
                        us with accurate representations of the world?  </p>

          </div>
        </div>
      
  </section>
    </>
    
  )
  
}
  
}
export default Art;
