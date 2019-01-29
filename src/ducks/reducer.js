//Create a constant variable called initialState that will have all of our state's initial values.

const initialSate ={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
//ACTION TYPES
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
//Create an action type for UPDATE_CITY
const UPDATE_CITY = "UPDATE_CITY";
//Create an action type for UPDATE_PROP
const UPDATE_PROP = "UPDATE_PROP";
//Create an action type for UPDATE_FOUND
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_REAL_ESTATE_AGENT = "UPDATE_REAL_ESTATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADD_ONE = "UPDATE_ADD_ONE";
const UPDATE_ADD_TWO = "UPDATE_ADD_TWO";
const UPDATE_ADD_THREE = "UPDATE_ADD_THREE";
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";




//Default the state parameter to initialState.
function reducer(state =initialSate, action){
//update the reducer function to use a switch statement on the action.type
    switch (action.type) {
//To add our action types to our reducer all we have to do is: case
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload});
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload});
//Add an UPDATE_CITY case to the reducer that updates city.
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});  
//Add an UPDATE_PROP case to the reducer that updates propToBeUsedOn  
        case UPDATE_PROP:
            return Object.assign({}, state, {prop: action.payload});
//Add an UPDATE_FOUND case to the reducer that updates found.
        case UPDATE_FOUND:
        return Object.assign({}, state, {found: action.payload});

        case UPDATE_REAL_ESTATE_AGENT:
        return Object.assign({}, state, {real: action.payload});

        case UPDATE_COST:
        return Object.assign({}, state, {cost: action.paylaod});

        case UPDATE_DOWN_PAYMENT:
        return Object.assign({}, state, {down: action.paylaod});

        case UPDATE_CREDIT:
        return Object.assign({}, state, {credit: action.paylaod});

        case UPDATE_HISTORY:
        return Object.assign({}, state, {history: action.paylaod});

        case UPDATE_ADD_ONE:
        return Object.assign({}, state, {addone: action.paylaod});

        case UPDATE_ADD_TWO:
        return Object.assign({}, state, {addtwo: action.paylaod});

        case UPDATE_ADD_THREE:
        return Object.assign({}, state, {addthree: action.paylaod});

        case UPDATE_FIRST_NAME:
        return Object.assign({}, state, {first: action.paylaod});

        case UPDATE_LAST_NAME:
        return Object.assign({}, state, {last: action.paylaod});

        case UPDATE_EMAIL:
        return Object.assign({}, state, {email: action.paylaod});



    default: return state;
}

}

//Action Creators
export function updateLoanType (loanType){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType (property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        paylod: property
    }
}
//Create an action creator called updateCity
export function updateCity(city){
    return {
    type: UPDATE_CITY,
    payload: city
    }    
}
//Create an action creator called updateProp.
export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
// Create an action creator called updateFound
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateAgent(real){
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: real
    }
}

export function updateCost(cost){
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment(down){
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: down
    }
}

export function updateCredit(credit){
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history){
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateAddOne(addone){
    return {
        type: UPDATE_ADD_ONE,
        payload: addone
    }
}

export function updateAddTwo(addtwo){
    return {
        type: UPDATE_ADD_TWO,
        payload: addtwo
    }
}

export function updateAddThree(addthree){
    return {
        type: UPDATE_ADD_THREE,
        payload: addthree
    }
}

export function updateFirst(first){
    return {
        type: UPDATE_FIRST_NAME,
        payload: first
    }
}

export function updateLast(last){
    return {
        type: UPDATE_LAST_NAME,
        payload: last
    }
}

export function updateEmail(email){
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}
export default reducer;