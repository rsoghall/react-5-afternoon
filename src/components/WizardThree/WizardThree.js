import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateProp} from './../../ducks/reducer'

class WizardThree extends Component {
    render(){
        const {updateProp} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">

                    {/* Modify the onClick events to call updateProp */}

                        <Link to="/wFour"><button value="primaryHome" onClick={(e) => updateProp(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={(e) => updateProp(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={(e) => updateProp(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}
//mapStateToProps should only return one property from state.
function mapStateToProps(state){
    const{prop}=state;
    return{
        prop
    }
}

//Modify the export default statement to use connect. updateProp should be passed in as a second parameter.
export default connect(mapStateToProps, {updateProp}) (WizardThree); 
