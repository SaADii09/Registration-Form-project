let allchk = true;
let a = 0;
var uploaded_image = "";
let imgchk = false;

const image_input = document.querySelector("#image-input");



var emailChk = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
var txtchk = /^[A-Za-z ]+$/;
var pchk = /^\(?([9]{1})\)?\(?([2]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
var ltrchk = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9])+$/;
var passchk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
var datecheck = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

function print1() {
    debugger

    allchk = true;
    var i = 0;
    var gValid = false;

    var province2 = document.getElementById("province1").value;
    var city2 = document.getElementById("city1").value;
    var uname2 = document.getElementById("uname1").value;
    var pass2 = document.getElementById("pass1").value;
    var fname2 = document.getElementById("gname1").value;
    var dataCome = document.getElementById("dob1").value;
    var cnumber2 = document.getElementById("cnumber1").value;
    var email2 = document.getElementById("email1").value;
    var genderSel1 = document.getElementsByName("genderSel");
    var conditionSel1 = document.getElementById("conditionChk");


    // province
    if (province2 == "") {
        allchk = false;
        document.getElementById("province1").style.border = "solid red 2px";
        document.getElementById("prodiv").innerHTML = "Select Province*";
    } else {
        document.getElementById("province1").style.border = " solid #ced4da 2px";
        document.getElementById("prodiv").innerHTML = "";
    }


    // city
    if (city2 == "" || ! txtchk.test(city2)) {
        allchk = false;
        document.getElementById("city1").style.border = " solid red 2px";

        document.getElementById("citydiv").innerHTML = "Enter City*";

    } else {
        document.getElementById("city1").style.border = " solid #ced4da 2px";
        document.getElementById("citydiv").innerHTML = "";
    }


    // username
    if (uname2 == "" || ! ltrchk.test(uname2)) {
        allchk = false;
        document.getElementById("uname1").style.border = "solid 2px red";
        if (uname2 == "") {
            document.getElementById("userdiv").innerHTML = "Enter Username*";
        } else {
            document.getElementById("userdiv").innerHTML = "Enter Correct Username*";
        }
    } else {
        document.getElementById("uname1").style.border = "solid 2px #ced4da";
        document.getElementById("userdiv").innerHTML = "";
    }


    // password
    if (passchk == "" || ! passchk.test(pass2)) {
        allchk = false;
        document.getElementById("pass1").style.border = "solid red 2px";
        document.getElementById("pasdiv").innerHTML = "Enter Correct Password*";
    } else {
        document.getElementById("pass1").style.border = "solid #ced4da 2px";
        document.getElementById("pasdiv").innerHTML = "";
    }


    // email
    if (email2 == "" || ! emailChk.test(email2)) {
        allchk = false;
        document.getElementById("email1").style.border = "solid red 2px";
        if (email2 == "") {
            document.getElementById("maildiv").innerHTML = "Enter E-mail*";
        } else {
            document.getElementById("maildiv").innerHTML = "Enter Correct E-mail*";
        }
    } else {
        document.getElementById("email1").style.border = "solid #ced4da 2px";
        document.getElementById("maildiv").innerHTML = "";
    }


    // contact number
    if (cnumber2 == "" || ! pchk.test(cnumber2)) {
        allchk = false;
        document.getElementById("cnumber1").style.border = " solid red 2px";
        if (cnumber2 == "") {
            document.getElementById("cdiv").innerHTML = "Enter Contact Number*";
        } else {

            document.getElementById("cdiv").innerHTML = "Contact Number is incorrect*";
        }
    } else {
        document.getElementById("cnumber1").style.border = " solid #ced4da 2px";
        document.getElementById("cdiv").innerHTML = "";
    }


    // date of birth
    if (dataCome == "" || ! datecheck.test(dataCome)) {
        allchk = false;
        document.getElementById("dob1").style.border = " red solid 2px";
        if (dataCome == "") {
            document.getElementById("dobdiv").innerHTML = "select Date*";
        } else {
            document.getElementById("dobdiv").innerHTML = "Select Correct Date*";
        }
    } else {
        document.getElementById("dob1").style.border = " #ced4da solid 2px";
        document.getElementById("dobdiv").innerHTML = "";
    }


    // full name
    if (fname2 == "" || ! txtchk.test(fname2)) {
        allchk = false;
        document.getElementById("gname1").style.border = " solid red 2px";
        if (fname2 == "") {
            document.getElementById("fnamediv").innerHTML = "Enter Full Name*";
        } else {
            document.getElementById("fnamediv").innerHTML = "Enter Correct Name*";
        }
    } else {
        document.getElementById("gname1").style.border = " solid #ced4da 2px";
        document.getElementById("fnamediv").innerHTML = "";
    }


    // Gender
    while (! gValid && i < genderSel1.length) {
        if (genderSel1[i].checked) {
            gValid = true;

        }
        i++;
    }
    if (! gValid) {
        allchk = false;
        document.getElementById("nice").style.color = "red";
        document.getElementById("gSpan").style.color = "red";
        document.getElementById("gSpan").innerHTML = "    Select Gender*";
    } else {
        document.getElementById("nice").style.color = "black";
        document.getElementById("gSpan").innerHTML = "";
    }


    // checkbox
    if (! conditionSel1.checked) {
        allchk = false;
        document.getElementById("conditiondiv").style.border = "red 2px solid";
    } else {

        document.getElementById("conditiondiv").style.border = "#ced4da 2px solid";
    }

    // image
    if (imgchk == false) {
        document.getElementById("image-input").style.border = "red 2px solid";
    } else {
        document.getElementById("image-input").style.border = "#ced4da 2px solid";
    }

    if (allchk) {
        alert("registered successfully!!");
    }
    // document.write(allchk);
    return allchk;
}

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url("${uploaded_image}")`;
        document.querySelector("#display-image").style.width = "400px";
        document.querySelector("#display-image").style.height = "225px";
        document.querySelector("#display-image").style.visibility = "visible";
        if (! uploaded_image == "") {
            imgchk = true;
        }
    });
    reader.readAsDataURL(this.files[0]);
});


function mychange() {
    console.log("sfdjs");
    id = "gname1";
    let inputValue = document.getElementById(id).value;
    if (inputValue == "" || ! txtchk.test(inputValue)) {
        document.getElementById(id).style.border = " solid red 2px";
    } else {
        document.getElementById(id).style.border = " solid #ced4da 2px";
    }
}
