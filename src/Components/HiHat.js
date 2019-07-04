import React from "react"

class HiHat extends React.Component {
    constructor() {
        super();
        
        
        this.playHiHat=this.playHiHat.bind(this);
    }
    

    playHiHat() {
        document.getElementById('hihaty').play();
    }
    render() {
        return (
            <div className="hihat" onClick = {this.playHiHat}>
            <h4>HiHat</h4>
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

export default HiHat