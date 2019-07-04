import React from 'react';

import './App.css';

import Drums from "./Components/Drums"

import Slider from "./Components/Slider"
import PlayPause from './Components/PlayPause';
import Tone from 'tone'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
                    name: 'Make a beat!', 
                    color: "",
                    }

      this.repeat = this.repeat.bind(this)
      this.playAudio = this.playAudio.bind(this)
      this.pauseAudio = this.pauseAudio.bind(this)
      this.playAndPause = this.playAndPause.bind(this)
      
  }

  
  componentDidMount() {
    this.kick = new Tone.Player("http://localhost:3000/public/kick-electro01.wav").toMaster();
    this.snare = new Tone.Player("http://localhost:3000/public/snare-noise.wav").toMaster();
    this.hihat = new Tone.Player("http://localhost:3000/public/hihat-plain.wav").toMaster();
    this.index = 2; 
    //var loop = new Tone.Loop(this.repeater, "8n").start(0);
    Tone.Transport.scheduleRepeat(this.repeat, "8n");
 }
    
 repeat() {
  //let step = this.index+1;
  if (this.index > 9) {
     // Cheap way to always start at the right place 
     // Probably a way to do this with a Tone call back 
     // At the End of a loop
     this.index = 2;     
  }
  let kickInputs = document.querySelector(
      `.kick input:nth-child(${this.index})`
  );
  let snareInputs = document.querySelector(
    `.snare input:nth-child(${this.index})`
  );
  let hihatInputs = document.querySelector(
      `.hihat input:nth-child(${this.index})`
  );
  if(kickInputs.checked) {
      this.kick.start(0);
  }
  if(snareInputs.checked) {
     this.snare.start(0);
  }
  if(hihatInputs.checked) {
      this.hihat.start(0);
  }
  this.index++;
}
  
  
  first_click = true;
 
  playAndPause() {
    if (this.first_click) {
      this.playAudio();
      this.first_click = false;
    } else {
      this.pauseAudio();
      this.first_click = true;
    }
  }

  playAudio() {
    this.setState({name: 'Playing'})
    this.setState({color: "red"})
    Tone.Transport.start();
  }
    
  pauseAudio() {
    console.log("Pause Audio")
    this.setState({name: 'Paused'})
    this.setState({color: ''})
    Tone.Transport.pause();
  }

  render() {
    return (
      <div className = "container">
        <h1 style={{color: this.state.color}}>Drum Machine</h1><br></br>
          <Drums /><br></br><br></br>
          <h4 style={{color: this.state.color}}>{this.state.name}</h4><br></br>
          <PlayPause 
            playAndPause={this.playAndPause}
             /><br></br>
          <Slider />
      </div>
    )   
  }
}


export default App