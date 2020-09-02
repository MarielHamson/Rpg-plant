import * as character from '../src/plant-rpg.js';

describe('Character', () => {
	jest.useFakeTimers();
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

	test('battle squirrel', () => {
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
});
