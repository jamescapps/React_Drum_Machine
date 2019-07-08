import React from "react"

import Tone from 'tone'

class Slider extends React.Component {
   constructor() {
       super()
       this.handleChange = this.handleChange.bind(this)
   }
   componentDidMount() {
    this.beats.addEventListener("change", this.handleChange);
   }


    handleChange(event) {
        Tone.Transport.bpm.value = event.detail
    }
    

    render() {
        return (
            <div className = "slider">
                <tone-slider ref={elem => this.beats = elem} label="bpm" min="60" max="300" exp="2" value="120"/>
            </div>
        )
    }
}

export default Slider