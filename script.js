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

function recieve(){
    var input_name = document.getElementById("name").value;
}


