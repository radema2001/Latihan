 // X|x Counter
 let countX = 0;
 // O|o Counter
 let countO = 0;
 // Convert params to String
 const str = params.toString();

 for (let i = 0; i < str.length; i++) {
   if (str[i].toLowerCase() === 'x') {
     // Detect X|x
     countX++;
   } else if (str[i].toLowerCase() === 'o') {
     // Detect O|o
     countO++;
   } else {
     // Detect Other
     return 'INVALID';
   }
 }

 // Comparison
 return countX === countO;


