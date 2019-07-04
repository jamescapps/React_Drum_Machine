import React from 'react'

class Snare extends React.Component {
    constructor() {
        super();
        
        this.playSnare=this.playSnare.bind(this);
        
    }
        
    
   

    playSnare() {
        document.getElementById('snarey').play();
       
    }

    render() {
        return (
            <div className="snare"  onClick = {this.playSnare}>
            <h4>Snare</h4>
                
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                
            </div> 
        )
    }
}

export default Snare