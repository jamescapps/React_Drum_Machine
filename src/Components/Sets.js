import React from 'react'

class Sets extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className = "sets">
                <div className = "electro"><h5>Electro</h5><input type="checkbox" onClick={this.props.checkElectro} className = "check1"/></div>
                <div className = "rock"><h5>Rock</h5><input type="checkbox" onClick={this.props.checkRock} className = "check2"/></div>
                <div className = "hiphop"><h5>HipHop</h5><input type="checkbox" onClick={this.props.checkHipHop} className = "check3"/></div> 
            </div>
        )
    }
}
export default Sets