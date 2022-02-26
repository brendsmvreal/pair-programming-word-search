const { transpose } = require('./matrix_transposition');

const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true   
        }   
    } 

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (v of verticalJoin) {
        if (v.includes(word)) {
            return true   
        }
    } 
    return false;
}
module.exports = wordSearch;