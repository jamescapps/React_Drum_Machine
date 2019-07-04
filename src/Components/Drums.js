import React from "react"

import Kick from "./Kick"
import Snare from "./Snare"
import HiHat from "./HiHat"

class Drums extends React.Component {
    render() {
        return (
            <div className = "drums">
                <Kick />
                <Snare />
                <HiHat />
            </div>
        )
    }    
}

export default Drums