import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFirst} from './../../ducks/reducer'
import {updateLast} from './../../ducks/reducer'
import {updateEmail} from './../../ducks/reducer'

class WizardTen extends Component {
    render(){
        const {updateFirst, updateLast, updateEmail} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFirst(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => updateLast(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => updateEmail (e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
function mapsStateToProps(state){
    const {first, last, email} = state;
    return {
        first,
        last,
        email
    }
}
export default connect(mapsStateToProps, {updateFirst, updateLast, updateEmail}) (WizardTen);