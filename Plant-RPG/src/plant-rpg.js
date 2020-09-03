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
const initialState2 = {water: 5, seeds: 5, petals: 2 };
export const assignName = changeStringState('name');
export const stateControl = storeState(initialState);

// const plantName = assignName('Sunflower'); // changeStringState('name')('Sunflower')
// const plantWithName = stateControl(plantName); //storeState(changeStringState('name')('Sunflower'))

export const battleWon = changeState('petals')(1);
export const battleLost = changeState('petals')(-2);

export const battleWithSquirrel = (water) => {
  if (water >= 10) {
    return battleWon;
  } else {
    return battleLost;
  }
};

export const newPlant = (seeds) => {
  if (seeds >= 20) {
    return storeState(initialState2);
  } else {
    return;
  }
}

const decreaseSeeds = changeState('seeds')(-2);
export const increaseSeeds = changeState('seeds')(2);

export const plantWilts = (state) => {
  setInterval(() => {
    state(decreaseSeeds);
  }, 1000);
};

const decreaseWater = changeState('water')(-4);
export const increaseWater = changeState('water')(2);

export const waterLevel = (state) => {
	setInterval(() => {
		state(decreaseWater);
	}, 2000);
};
