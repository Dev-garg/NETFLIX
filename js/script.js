if(screen.width < 800){
    document.getElementsByTagName("body")[0].innerHTML = "SORRY!<br/>This Website is currently not available for mobiles";
    document.getElementsByTagName("body")[0].style.cssText = "color:white;font-size:30px;";
}


var q1 = document.getElementById("whatIsNetflix");
var q2 = document.getElementById("netflixCost");
var q3 = document.getElementById("watch");
var q4 = document.getElementById("cancel");
var q5 = document.getElementById("watchOnNetflix");
var q6 = document.getElementById("forKids");
q1.style.display = "none";
q2.style.display = "none";
q3.style.display = "none";
q4.style.display = "none";
q5.style.display = "none";
q6.style.display = "none";


function ques1() {
    if (q1.style.display == "none") {
        q1.style.display = "block";
    }
    else {
        q1.style.display = "none";
    }

    if (q2.style.display == "block" || q3.style.display == "block" || q4.style.display == "block" || q5.style.display == "block" || q6.style.display == "block") {
        q2.style.display = "none"
        q3.style.display = "none"
        q4.style.display = "none"
        q5.style.display = "none"
        q6.style.display = "none"
    }
}

function ques2() {
    if (q2.style.display == "none") {
        q2.style.display = "block";
    }
    else {
        q2.style.display = "none";
    }
    if (q1.style.display == "block" || q3.style.display == "block" || q4.style.display == "block" || q5.style.display == "block" || q6.style.display == "block") {
        q1.style.display = "none";
        q3.style.display = "none";
        q4.style.display = "none";
        q5.style.display = "none";
        q6.style.display = "none";
    }
}

function ques3() {
    if (q3.style.display == "none") {
        q3.style.display = "block";
    }
    else {
        q3.style.display = "none";
    }
    if (q1.style.display == "block" || q2.style.display == "block" || q4.style.display == "block" || q5.style.display == "block" || q6.style.display == "block") {
        q1.style.display = "none";
        q2.style.display = "none";
        q4.style.display = "none";
        q5.style.display = "none";
        q6.style.display = "none";
    }
}

function ques4() {
    if (q4.style.display == "none") {
        q4.style.display = "block";
    }
    else {
        q4.style.display = "none";
    }
    if (q1.style.display == "block" || q2.style.display == "block" || q3.style.display == "block" || q5.style.display == "block" || q6.style.display == "block") {
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "none";
        q5.style.display = "none";
        q6.style.display = "none";
    }
}

function ques5() {
    if (q5.style.display == "none") {
        q5.style.display = "block";
    }
    else {
        q5.style.display = "none";
    }
    if (q1.style.display == "block" || q2.style.display == "block" || q3.style.display == "block" || q4.style.display == "block" || q6.style.display == "block") {
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "none";
        q4.style.display = "none";
        q6.style.display = "none";
    }
}

function ques6() {
    if (q6.style.display == "none") {
        q6.style.display = "block";
    }
    else {
        q6.style.display = "none";
    }
    if (q1.style.display == "block" || q2.style.display == "block" || q3.style.display == "block" || q4.style.display == "block" || q5.style.display == "block") {
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "none";
        q4.style.display = "none";
        q5.style.display = "none";
    }
}

