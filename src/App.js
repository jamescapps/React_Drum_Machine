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
      this.checkElectro = this.checkElectro.bind(this)
      this.checkRock = this.checkRock.bind(this)
      this.checkHipHop = this.checkHipHop.bind(this)
  }

  
    
  componentDidMount() {
    let electroInput = document.querySelector(".electro input[type=checkbox]")
    let rockInput = document.querySelector(".rock input[type=checkbox]")
    let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
     //Where do I put above so that I don't have to do it every time?
    window.onload = this.checkElectro();    

    if (electroInput.checked) {
      this.checkElectro();
    }
    
    if (rockInput.checked) {
      this.checkRock();
    }

    if (hipHopInput.checked) {
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
  let electroInput = document.querySelector(".electro input[type=checkbox]")
  let rockInput = document.querySelector(".rock input[type=checkbox]")
  let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
  //Where do I put above so that I don't have to do it every time?
  this.kick = new Tone.Player("./electrokick.wav").toMaster()
  this.snare = new Tone.Player("./electrosnare.wav").toMaster()
  this.hihat = new Tone.Player("./electrohihat.wav").toMaster()
  rockInput.checked = false;
  hipHopInput.checked = false;
  electroInput.checked = true;
  rockInput.disabled = false;
  hipHopInput.disabled = false;
}


  
checkRock() {
    let rockInput = document.querySelector(".rock input[type=checkbox]")
    let electroInput = document.querySelector(".electro input[type=checkbox]")
    let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
    //Where do I put above so that I don't have to do it every time?
    this.kick = new Tone.Player("./rockkick.wav").toMaster()
    this.snare = new Tone.Player("./rocksnare.wav").toMaster()
    this.hihat = new Tone.Player("./rockhihat.wav").toMaster()
    electroInput.checked = false;
    hipHopInput.checked = false;
    rockInput.disabled = true;
    hipHopInput.disabled = false;
    
}

  checkHipHop() {
    let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
    let electroInput = document.querySelector(".electro input[type=checkbox]")
    let rockInput = document.querySelector(".rock input[type=checkbox]")
    //Where do I put above so that I don't have to do it every time?
    this.kick = new Tone.Player("./hiphopkick.wav").toMaster()
    this.snare = new Tone.Player("./hiphopsnare.wav").toMaster()
    this.hihat = new Tone.Player("./hiphophihat.wav").toMaster()
    electroInput.checked = false;
    rockInput.checked = false;
    rockInput.disabled = false;
    hipHopInput.disabled = true;
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
    let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
    let electroInput = document.querySelector(".electro input[type=checkbox]")
    let rockInput = document.querySelector(".rock input[type=checkbox]")
        //Where do I put above so that I don't have to do it every time?
    this.setState({name: 'Playing'})
    this.setState({color: "red"})
    Tone.Transport.start();

    //Below prevents user from switching drum kits while loop is playing, thus preventing the buffer error that occurs some of the time.
    rockInput.disabled = true;
    hipHopInput.disabled = true;
    electroInput.disabled = true;
  }
    
  pauseAudio() {
    let hipHopInput = document.querySelector(".hiphop input[type=checkbox]")
    let electroInput = document.querySelector(".electro input[type=checkbox]")
    let rockInput = document.querySelector(".rock input[type=checkbox]")
     //Where do I put above so that I don't have to do it every time?
    this.setState({name: 'Paused'})
    this.setState({color: ''})
    Tone.Transport.pause();

    //Below reenables the ability to switch between drum kits.
    rockInput.disabled = false;
    hipHopInput.disabled = false;
    electroInput.disabled = false;
  }

  render() {
    return (
      <div className = "container">
       <h1 style={{color: this.state.color}}>Drum Machine</h1><br></br><br></br>
       <div className = "sets">
        <div className = "electro"><h5>Electro</h5><input type="checkbox" onClick={this.checkElectro} className = "check1"/></div>
        <div className = "rock"><h5>Rock</h5><input type="checkbox" onClick={this.checkRock} className = "check2"/></div>
        <div className = "hiphop"><h5>HipHop</h5><input type="checkbox" onClick={this.checkHipHop} className = "check3"/></div> 
       </div>
         <Drums/>
          <h4 style={{color: this.state.color}}>{this.state.name}</h4><br></br>
          <PlayPause 
            playAndPause={this.playAndPause}/>
          <Slider />
      </div>
    )   
  }
}


export default App