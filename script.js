function request(targeturl){  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", targeturl);
    xmlHttp.send(null);
    return xmlHttp.request_response;

    /* a funtcion for sending requests to our designated url */
}

function stringcheck(input_string){
    var regex = /^[a-z A-Z]+$/;
    return regex.test(input_string);

    /* function made for checking the only letters condition */
}

var gender_saved = "";
var username_saved = "";

if(document.getElementById('submit').clicked == true)
{
    var gender_status = document.querySelector('#gender-status');
    var username = document.getElementById("name").value;
    if (stringcheck(username) == true & gender_status == "male"){
        gender_saved = gender_status;
        username_saved = username;
    }
    if (stringcheck(username) == true & gender_status == "female"){
        gender_saved = gender_status;
        username_saved = username;
    }
    else if (stringcheck(username) == true){
        web_req = httpGet(`https://api.genderize.io/?name=${username}`);
        resolve = JSON.parse(web_req);
        gender_saved = resobj["gender"];
        username_saved = resobj["name"];



    }
}

if(document.getElementById('save').clicked == true){
    if(localStorage.getItem(username_saved) !== null){
    localStorage.setItem(username_saved, gender_saved);
    var oper = document.querySelector('#answer_saved');
    oper.innerText = username_saved;
    }
}

if(document.getElementById('delete').clicked == true){
    var username = document.getElementById("name").value;
    localStorage.removeItem(username); 
}
