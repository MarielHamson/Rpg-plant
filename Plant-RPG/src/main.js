import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { stateControl, battleWithSquirrel } from './plant-rpg';

$(document).ready(function() {
    $('#battle').click(function() {
      const newState = stateControl(battleWithSquirrel(stateControl()['water']));
      //battleWithSquirrel(plant()['water'])
      console.log(newState);
      $('#petals-value').text(`Petals: ${newState.petals}`);
    });
  
    $('#show-state').click(function() {
      const currentState = stateControl();
      $('#water-value').text(`Water: ${currentState.water}`);
      $('#seeds-value').text(`Seeds: ${currentState.seeds}`);
      $('#petals-value').text(`Petals: ${currentState.petals}`);
    });
  });