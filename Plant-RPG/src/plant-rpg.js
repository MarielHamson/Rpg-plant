// import * as tools from './tools';
export const storeState = (initialState) => {
	let currentState = initialState;
	return (stateChangeFunction = (state) => state) => {
		const newState = stateChangeFunction(currentState);
		currentState = { ...newState };
		return newState;
	};
};

export const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value,
		});
	};
};
//
export const changeStringState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: value,
		});
	};
};

const initialState = { water: 10, seeds: 10, petals: 1 };
const stateControl = storeState(initialState);
export const assignName = changeStringState('name');
const plantName = assignName('Sunflower'); // changeStringState('name')('Sunflower')
const plantWithName = stateControl(plantName); //storeState(changeStringState('name')('Sunflower'))
console.log(plantWithName);

const battleWon = changeState('petals')(1);
export const battleLost = changeState('petals')(-2);

export const battleWithSquirrel = stateControl(battleLost);
