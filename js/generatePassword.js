var specialCharacters = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')'
];
var upperCaseCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
var lowerCaseCharacters = upperCaseCharacters.map(function(letter){
    return letter.toLowerCase();
}); 
var numericValues = ['0','1','2','3','4','5','6','7','8','9'];

function setPassword(){
    var passwordOptions = {
        length: document.getElementById('passwordLength').value, 
        numericValues: document.getElementById('numericValues').checked,
        upperCase: document.getElementById('upperCaseLetters').checked,
        lowerCase: document.getElementById('lowerCaseLetters').checked,
        specialCharacters: document.getElementById('specialCharacters').checked
    }
    alert('Your new password is ' + generatePassword(passwordOptions));
}

function getRandomNumber(max){
        return Math.floor(Math.random() * Math.floor(max));
}
function generatePassword(options){
var result = '';
var passwordOptions = []; 
if(options.numericValues){
    passwordOptions = passwordOptions.concat(numericValues);
}
if(options.upperCase){
    passwordOptions = passwordOptions.concat(upperCaseCharacters);
}
if(options.lowerCase){
    passwordOptions = passwordOptions.concat(lowerCaseCharacters);
}
if(options.specialCharacters){
    passwordOptions = passwordOptions.concat(specialCharacters); 
}

for(i=0; i<options.length; i++){
    result += passwordOptions[getRandomNumber(passwordOptions.length)]; 
}

return result; 

}