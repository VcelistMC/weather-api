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

    const data = getData(BASE_URL, KEY, userZIP).then((result) =>
        postData('/add', {
            temperature: result.main.temp, 
            date: d,
            feelings: userFeelings    
        }).then(updateUI('/all'))
    );
}

let getData = async(url = '', key = '', code = '', units = '&units=metric') => {
    const res = await fetch(url + code + key + units);
    try {
        const data = await res.json();
        return data;
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

const updateUI = async (url ='') => {
    let dateHolder = document.getElementById('date');
    let tempHolder = document.getElementById('temp');
    let feelingsHolder = document.getElementById('content');

    const res = await fetch(url);
    try {
        const data = await res.json();
        
        dateHolder.innerText = data.date;
        tempHolder.innerText = data.temp;
        feelingsHolder.innerText = data.user_res;
    } catch(e) {
        console.log(`error: ${e}`);
    }
}