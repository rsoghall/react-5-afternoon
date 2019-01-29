import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAddOne} from './../../ducks/reducer';
import {updateAddTwo} from './../../ducks/reducer';
import {updateAddThree} from './../../ducks/reducer';

class WizardNine extends Component {

    render(){
        const {updateAddOne, updateAddTwo, updateAddThree} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => updateAddOne (e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => updateAddTwo (e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => updateAddThree (e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapsStateToProps(state){
    const {addOne, addTwo, addThree} = state;
    return {
        addOne,
        addTwo,
        addThree
    }
}
export default connect(mapsStateToProps, {updateAddOne, updateAddTwo, updateAddThree}) (WizardNine);