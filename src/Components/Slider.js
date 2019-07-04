import React from "react"

class Slider extends React.Component {
    render() {
        return (
            <div className = "slider">
                <tone-slider label="BPM" min="60" max="300" exp="2" value="120"/>
            </div>
        )
    }
}

export default Slider