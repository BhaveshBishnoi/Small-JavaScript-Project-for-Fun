let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let symbolSet = "!~#@$%^&*><?/+_-=";

//Selectors

const passBox = document.querySelector('#passbox')
const passLength = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numberInc = document.getElementById('numbers');
const symbolInc = document.getElementById('symbols');
const passGenerate = document.getElementById('generate');

let getRandomNumber = (dataSet) => {
    return dataSet[Math.floor(Math.random()*dataSet.length)];

}

const getPassword = (password ='') =>{

    if(upperCase.checked){
        password += getRandomNumber(upperSet);
    }
    if(lowerCase.checked){
        password += getRandomNumber(lowerSet);
    }
    if(numberInc.checked){
        password += getRandomNumber(numberSet);
    }
    if(symbolInc.checked){
password += getRandomNumber(symbolSet);        
    }

    if (password.length < passLength.value) {
        return getPassword(password)
    }
    console.log(truncateString(password, passLength.value));
    
     passBox.textContent = truncateString(password, passLength.value);
}



passGenerate.addEventListener('click', function(){
getPassword();
})

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}