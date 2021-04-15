/* Global Variables */
const KEY = '&appid=e10c89103e701eaf19221327ec9ba201';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const DEF_CODE = '07463';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let genButton = document.getElementById('generate');
genButton.addEventListener('click', clickAction);

function clickAction(event){
    console.log("boop!");
    let textBox = document.getElementById('zip');
    let feelingsBox = document.getElementById('feelings');
    var userZIP = textBox.value;
    var userFeelings = feelingsBox.value;

}

let getData = async(url = '', key = '', code = '') => {
    const res = await fetch(url + code + key);
    try {
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

let postData = async(url = '', data = {}) => {
    const req = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const res = await req.json();
        return res;
    } catch(e) {
        console.log(`error: ${e}`);
    }
}
//getData(BASE_URL + DEF_CODE + KEY);
postData('/add', {
    temperature: '231', 
    date: d,
    feelings: "happy :D"    
});