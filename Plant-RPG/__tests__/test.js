import * as character from '../src/plant-rpg.js';

describe('Character', () => {
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
});
