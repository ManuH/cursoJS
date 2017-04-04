var player = prompt('Piedra, Papel o Tijera');
var pcOption = Math.floor((Math.random() * 3) + 1);
var pc = '';
var winner = '';

switch (pcOption) {
   
    case 3:
        pc = 'Tijera'
    break;

    case 2:
        pc = 'Papel'
    break;

    default: 
        pc = 'Piedra'
} 

switch (player) {
    case 'Piedra':
        if (pc === 'Papel') {
            winner = 'PC'
        } else if (pc === 'Tijera') {
            winner = 'Player';
        } else {
            winner = 'No Winners';
        }
    break;

    case 'Papel':
        if (pc === 'Tijera') {
            winner = 'PC'
        } else if (pc === 'Piedra') {
            winner = 'Player';
        } else {
            winner = 'No Winners';
        }
    break;

    default:
        if (pc === 'Piedra') {
            winner = 'PC'
        } else if (pc === 'Papel') {
            winner = 'Player';
        } else {
            winner = 'No Winners';
        }
    break;
}
alert('Player choose: ' + player);
alert('PC choose: ' + pc);
alert('The winner is: ' + winner);
