import * as character from '../src/plant-rpg.js';

describe('Character', () => {
	test('should create new sunflower character', () => {
		const initialState = { water: 10, seeds: 10, petals: 1 };
		const plantName = character.storeState(initialState);
		expect(plantName()).toMatchObject({ water: 10, seeds: 10, petals: 1 });
	});
});
