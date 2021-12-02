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
    gender_status = document.querySelector('#gender-status');
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

    }
}

if(document.getElementById('delete').clicked == true){
    var username = document.getElementById("name").value;
    localStorage.removeItem(username); 
}
