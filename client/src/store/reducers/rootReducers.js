import countryStatesReducer from './countryStatesReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
	countryStates: countryStatesReducer
})

export default rootReducers