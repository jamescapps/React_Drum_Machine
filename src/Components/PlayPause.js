import React from 'react'


class PlayPause extends React.Component {
       constructor(props) {
           super()
           this.state = {clicked: false}
           this.handleClick = this.handleClick.bind(this)
       }

    isOn = true;
    handleClick() {
        if(this.isOn) {
            this.setState({clicked: true});
            this.isOn = false;
        } else {
            this.setState({clicked: false});
            this.isOn = true;
        }
        this.props.playAndPause();
        
    }      
      
    render() {
        var className = this.state.clicked ? "fa fa-pause fa-lg" : "fa fa-play fa-lg";
        return (
            <div className="playpause">
                <button className="playbtn" onClick={this.handleClick} > <i className= {className}  > </i></button>
            </div>
        )
    }
}



export default PlayPause