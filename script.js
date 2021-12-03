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
/* used for saving the final variables */

if(document.getElementById('submit').clicked == true)

/* if the submit button is pressed... */
{
    var maletype = document.getElementById('sexmale');
    var femaletype = document.getElementById('sexfemale');
    var username = document.getElementById("name").value;

    /* we first recieve the input from the input bar and also check
    for inputs from the radiobuttons */

    if (stringcheck(username) == true & maletype == "male"){

        gender_saved = gender_status;
        username_saved = username;
    }
    if (stringcheck(username) == true & femaletype == "female"){

        gender_saved = gender_status;
        username_saved = username;
    }

    /* if the name is valid and the radio buttons are selected, then we can submit our inputs as the saved variables */

    else if (stringcheck(username) == true){
        web_req = httpGet(`https://api.genderize.io/?name=${username}`);
        resolve = JSON.parse(web_req);

        gender_saved = resobj["gender"];
        username_saved = resobj["name"];

        var percentage = document.querySelector('#correctness');
        percentage = resolve['probability'];
        
        var sex = document.querySelector('#sextype');
        sex = resolve["gender"];

        /* if no gender option is selected, then we send a request to the guessing url and reslove the answers
        then we use the name, gender and the probability as our desired variables and show them on our page */

    }
}

if(document.getElementById('save').clicked == true){

    /* if the save button is pressed */

    if(localStorage.getItem(username_saved) !== null){

    /* and the username is not priorly added to our storage */

    localStorage.setItem(username_saved, gender_saved);
    var oper = document.querySelector('#answer_saved');
    oper.innerText = username_saved;

    /* then we can add the username to our storage and show the results */

    }
}

if(document.getElementById('delete').clicked == true){

    var username = document.getElementById("name").value;
    localStorage.removeItem(username); 

    /* if the delete button is selected, the name written in the bar will be deleted from the storage */
}
