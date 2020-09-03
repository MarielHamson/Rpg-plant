import * as character from '../src/plant-rpg.js';

describe('Character', () => {
  jest.useFakeTimers();

  afterEach(function() {
    jest.clearAllTimers();
  });
  
  test('should create new sunflower character', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plantName = character.storeState(initialState);
    expect(plantName()).toMatchObject({ water: 10, seeds: 10, petals: 1 });
  });

  test('should add a name', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    const plantName = character.assignName('Sunflower');
    const plantWithName = plant(plantName);
    expect(plantWithName).toMatchObject({
      water: 10,
      seeds: 10,
      petals: 1,
      name: 'Sunflower',
    });
  });

  test('battle decrements petals by 2', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.battleLost)).toMatchObject({
      water: 10,
      seeds: 10,
      petals: -1,
    });
  });

  test('battle increases petals by 1', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.battleWon)).toMatchObject({
      water: 10,
      seeds: 10,
      petals: 2,
    });
  });

  test('battle squirrel win', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.battleWithSquirrel(plant()['water']))).toMatchObject(
      {
        water: 10,
        seeds: 10,
        petals: 2,
      }
    );
  });

  test('battle squirrel loss', () => {
    const initialState = { water: 9, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.battleWithSquirrel(plant()['water']))).toMatchObject(
      {
        water: 9,
        seeds: 10,
        petals: -1,
      }
    );
  });

  test('seeds decrement by 2 every 1000ms', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    character.plantWilts(plant);
    jest.advanceTimersByTime(1001);
    expect(plant()).toMatchObject({
      water: 10,
      seeds: 8,
      petals: 1,
    });
  });
  test('seeds increment by 2', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.increaseSeeds)).toMatchObject({
      water: 10,
      seeds: 12, 
      petals: 1,
    });
	});
	
	test('water decrement by 4 every 2000ms', () => {
		const initialState = { water: 10, seeds: 10, petals:1 };
		const plant = character.storeState(initialState);
		character.waterLevel(plant);
		jest.advanceTimersByTime(2001);
		expect(plant()).toMatchObject({
			water: 6,
			seeds:10,
			petals:1
		});
  });
  
  test('water increments by 2', () => {
    const initialState = { water: 10, seeds: 10, petals: 1 };
    const plant = character.storeState(initialState);
    expect(plant(character.increaseWater)).toMatchObject({
      water: 12,
      seeds: 10,
      petals: 1,
    });
  });

  test('new plant is created if seeds are over 20', () => {
    const initialState = { water: 10, seeds: 20, petals: 1 };
    const plant = character.storeState(initialState);
    const plant2 = character.newPlant(plant()["seeds"]);
    expect(plant2()).toMatchObject({
      water: 5,
      seeds: 5,
      petals: 2,
    });
  })

});
