import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import * as game from './plant-rpg';

$(document).ready(function() {
  const startingState = game.stateControl();
  $('#water-value').text(`Water: ${startingState.water}`);
  $('#seeds-value').text(`Seeds: ${startingState.seeds}`);
  $('#petals-value').text(`Petals: ${startingState.petals}`);

  game.plantWilts(game.stateControl);
  game.waterLevel(game.stateControl);
  setInterval(function() {
    const newState = game.stateControl();
    $('#seeds-value').text(`Seeds: ${newState.seeds}`);
    $('#water-value').text(`Water: ${newState.water}`);
  },1000);
    
    $('#battle').click(function() {
      const newState = game.stateControl(game.battleWithSquirrel(game.stateControl()['water']));
      $('#petals-value').text(`Petals: ${newState.petals}`);
    });
    
    $('#water').click(function() {
      const newState = game.stateControl(game.increaseWater);
      $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#seeds').click(function() {
      const newState = game.stateControl(game.increaseSeeds);
      $('#seeds-value').text(`Seeds: ${newState.seeds}`);
    });
  });