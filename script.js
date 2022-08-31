let allchk = true;
let a = 0;
var uploaded_image = "";
let imgchk = false;

const image_input = document.querySelector("#image-input");

function print1() {
    debugger

    allchk = true;
    var i = 0;
    var gValid = false;
    let province2 = document.getElementById("province1").value;
    let city2 = document.getElementById("city1").value;
    let uname2 = document.getElementById("uname1").value;
    let pass2 = document.getElementById("pass1").value;
    let fname2 = document.getElementById("gname1").value;
    let dataCome = document.getElementById("dob1").value;
    let cnumber2 = document.getElementById("cnumber1").value;
    let email2 = document.getElementById("email1").value;
    var genderSel1 = document.getElementsByName("genderSel");
    let conditionSel1 = document.getElementById("conditionChk");


    let emailChk = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/;
    let txtchk = /^[A-Za-z ]+$/;
    let pchk = /^\(?([9]{1})\)?\(?([2]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/;
    let ltrchk = /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9])+$/;
    let passchk = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    let datecheck = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;


    // province
    if (province2 == "") {
        allchk = false;
        document.getElementById("province1").style.border = "solid red 2px";
    } else {
        document.getElementById("province1").style.border = " solid #ced4da 2px";
    }


    // city
    if (city2 == "" || ! txtchk.test(city2)) {
        allchk = false;
        document.getElementById("city1").style.border = " solid red 2px";
    } else {
        document.getElementById("city1").style.border = " solid #ced4da 2px";
    }


    // username
    if (uname2 == "" || ! ltrchk.test(uname2)) {
        allchk = false;
        document.getElementById("uname1").style.border = "solid 2px red";
    } else {
        document.getElementById("uname1").style.border = "solid 2px #ced4da";
    }


    // password
    if (passchk == "" || ! passchk.test(pass2)) {
        allchk = false;
        document.getElementById("pass1").style.border = "solid red 2px";
    } else {
        document.getElementById("pass1").style.border = "solid #ced4da 2px";

    }


    // email
    if (email2 == "" || ! emailChk.test(email2)) {
        allchk = false;
        document.getElementById("email1").style.border = "solid red 2px";
    } else {
        document.getElementById("email1").style.border = "solid #ced4da 2px";

    }


    // contact number
    if (cnumber2 == "" || ! pchk.test(cnumber2)) {
        allchk = false;
        document.getElementById("cnumber1").style.border = " solid red 2px";
    } else {
        document.getElementById("cnumber1").style.border = " solid #ced4da 2px";
    }


    // date of birth
    if (dataCome == "" || ! datecheck.test(dataCome)) {
        allchk = false;
        document.getElementById("dob1").style.border = " red solid 2px";
    } else {
        document.getElementById("dob1").style.border = " #ced4da solid 2px";
    }


    // full name
    if (fname2 == "" || ! txtchk.test(fname2)) {
        allchk = false;
        document.getElementById("gname1").style.border = " solid red 2px";
    } else {
        document.getElementById("gname1").style.border = " solid #ced4da 2px";
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
        document.getElementById("nice").style.border = "red solid 2px";
    } else {

        document.getElementById("nice").style.border = "#ced4da solid 2px";
    }


    // checkbox
    if (! conditionSel1.checked) {
        allchk = false;
        document.getElementById("conditiondiv").style.border = "red 2px solid";
    } else {

        document.getElementById("conditiondiv").style.border = "#ced4da 2px solid";
    }

    //image
    if (imgchk == false) {
        document.getElementById("image-input").style.border = "red 2px solid";
    } else {

        document.getElementById("image-input").style.border = "#ced4da 2px solid";
    }
    if(allchk){
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
