import React from 'react'

class Kick extends React.Component {
    constructor() {
        super();
        
        this.playKick=this.playKick.bind(this);
    }
    

    playKick() {
        document.getElementById('kicky').play();
    }
    render() {
        return (
            <div className="kick" onClick = {this.playKick}>
            <h4>Kick</h4>
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
    
    export default Kick
    