// Gerben Pellekaan
// Software Developer

const GETAL=6;

//<br> is volgende regel.
document.write('<br>1 x ' + GETAL + ' = ' +1 * GETAL) 
document.write('<br>2 x ' + GETAL + ' = ' +2 * GETAL)
document.write('<br>3 x ' + GETAL + ' = ' +3 * GETAL)
document.write('<br>4 x ' + GETAL + ' = ' +4 * GETAL)
document.write('<br>5 x ' + GETAL + ' = ' +5 * GETAL)
document.write('<br>6 x ' + GETAL + ' = ' +6 * GETAL)
document.write('<br>7 x ' + GETAL + ' = ' +7 * GETAL)
document.write('<br>8 x ' + GETAL + ' = ' +8 * GETAL)
document.write('<br>9 x ' + GETAL + ' = ' +9 * GETAL)
document.write('<br>10 x ' + GETAL + ' = ' +10 * GETAL)

document.write('<br>')

invoer= parseInt(prompt('Voer een getal in'));
document.write('<br>' + invoer + ' + 6 = ');
invoer = invoer + 6;
document.write (invoer);

document.write('<br>' + invoer + ' x 10 = ');
invoer = invoer * 10;
document.write (invoer);

document.write('<br>' + invoer + ' : 5 = ');
invoer = invoer / 5;
document.write (invoer);

document.write('<br>' + invoer + ' - 12 = ');
invoer = invoer - 12;
document.write (invoer);