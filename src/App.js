import React from 'react';

import './App.css';

import Sets from "./Components/Sets"
import Drums from "./Components/Drums"
import Slider from "./Components/Slider"
import PlayPause from './Components/PlayPause';
import Tone from 'tone'


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
                    name: 'Make a beat!', 
                    color: ""
                  }
      this.repeat = this.repeat.bind(this)
      this.playAudio = this.playAudio.bind(this)
      this.pauseAudio = this.pauseAudio.bind(this)
      this.playAndPause = this.playAndPause.bind(this)
      this.checkElectro = this.checkElectro.bind(this)
      this.checkRock = this.checkRock.bind(this)
      this.checkHipHop = this.checkHipHop.bind(this)
  }

  componentDidMount() {
    this.electroInput = document.querySelector(".electro input[type=checkbox]")
    this.rockInput = document.querySelector(".rock input[type=checkbox]")
    this.hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
   
    window.onload = this.checkElectro();    

    if (this.electroInput.checked) {
      this.checkElectro();
    }
    
    if (this.rockInput.checked) {
      this.checkRock();
    }

    if (this.hipHopInput.checked) {
      this.checkHipHop();
    }

    this.index = 2;
    
    Tone.Transport.scheduleRepeat(this.repeat, "8n");
  }
    
  repeat() {
    if (this.index > 9) {
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
      this.kick.start();
    }
    if(snareInputs.checked) {
      this.snare.start();
    }
    if(hihatInputs.checked) {
      this.hihat.start();
    }

    this.index++;
  } 
  
  checkElectro() {
    this.kick = new Tone.Player("./electrokick.wav").toMaster()
    this.snare = new Tone.Player("./electrosnare.wav").toMaster()
    this.hihat = new Tone.Player("./electrohihat.wav").toMaster()
    this.rockInput.checked = false;
    this.hipHopInput.checked = false;
    this.electroInput.checked = true;
    this.rockInput.disabled = false;
    this.hipHopInput.disabled = false;
  }

  checkRock() {
    this.kick = new Tone.Player("./rockkick.wav").toMaster()
    this.snare = new Tone.Player("./rocksnare.wav").toMaster()
    this.hihat = new Tone.Player("./rockhihat.wav").toMaster()
    this.electroInput.checked = false;
    this.hipHopInput.checked = false;
    this.rockInput.disabled = true;
    this.hipHopInput.disabled = false;
  }

  checkHipHop() {
    this.kick = new Tone.Player("./hiphopkick.wav").toMaster()
    this.snare = new Tone.Player("./hiphopsnare.wav").toMaster()
    this.hihat = new Tone.Player("./hiphophihat.wav").toMaster()
    this.electroInput.checked = false;
    this.rockInput.checked = false;
    this.rockInput.disabled = false;
    this.hipHopInput.disabled = true;
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
    this.rockInput.disabled = true;
    this.hipHopInput.disabled = true;
    this.electroInput.disabled = true;
  }
    
  pauseAudio() {
    this.setState({name: 'Paused'})
    this.setState({color: ''})
    Tone.Transport.pause();
    this.rockInput.disabled = false;
    this.hipHopInput.disabled = false;
    this.electroInput.disabled = false;

    if (this.rockInput.checked) {
      this.rockInput.disabled = true;
    }

    if (this.hipHopInput.checked) {
      this.hipHopInput.disabled = true;
    }
  }

  render() {
    return (
      <div className = "container">
       <h1 style={{color: this.state.color}}>Drum Machine</h1><br></br><br></br>
        <Sets 
          checkElectro={this.checkElectro}
          checkHipHop={this.checkHipHop}
          checkRock={this.checkRock}/>
         <Drums/>
          <h4 style={{color: this.state.color}}>{this.state.name}</h4><br></br>
          <PlayPause playAndPause={this.playAndPause}/>
          <Slider />
      </div>
    )   
  }
}


export default App