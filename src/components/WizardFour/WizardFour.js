import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFound} from './../../ducks/reducer'

class WizardFour extends Component {
    render(){
        const {updateFound} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={(e) => updateFound(true)}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={(e) => updateFound(false)}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}
// mapStateToProps should only return one property from state.
function mapStateToProps(state){
    const {found} = state;
        return {
            found
    }
}

//Modify the export default statement to use connect. updateFound should be passed in as a second parameter.
export default connect (mapStateToProps, {updateFound})(WizardFour);