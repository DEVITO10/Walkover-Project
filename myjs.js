const ques_pool = {};
var score = 0;

var cname = null;
var cemail = null;
const myDivs = ["candidate-credentials","question","instruction","final-result"];

window.addEventListener("load",function(){
    document.getElementById("date").textContent = new Date().toLocaleDateString();
    var settime = setInterval(() => {document.getElementById("time").textContent = new Date().toLocaleTimeString();},1000);
});

function submitCredentials(){
    cname = document.getElementById("name").value;
    cemail = document.getElementById("email").value;
    console.log(cname+cemail);
    for(var div in myDivs){
        if(myDivs[div]=="instruction")
            document.getElementById(myDivs[div]).style.display="block";
        else
            document.getElementById(myDivs[div]).style.display="none";
    }
}

var timer;
function acceptInstruction(){
    for(var div in myDivs){
        if(myDivs[div]=="question")
            document.getElementById(myDivs[div]).style.display="block";
        else
            document.getElementById(myDivs[div]).style.display="none";
    }
    initialiseTime();
    timer = setInterval(countdown,1000);
}

function finalSubmit(){
    clearInterval(timer);

    for(var div in myDivs){
        if(myDivs[div]=="final-result")
            document.getElementById(myDivs[div]).style.display="block";
        else
            document.getElementById(myDivs[div]).style.display="none";
    }

    let final_message = "Your Assessment is Successfully Submitted.";
    final_message+="<br><br>";
    final_message+="Dear, "+cname+" your final score is "+score+".";
    final_message+="<br><br>";
    final_message+="You can safely close this page."
    document.getElementById("final-result").innerHTML = final_message
}

var start, end;
function initialiseTime(){
    start = new Date();
    end = new Date(start.getTime() + 10*60*1000);
    countdown();
}
function countdown(){
    const curr = new Date();
    var diff = end.getTime() - curr.getTime();
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = hours+":"+minutes+":"+seconds;
    if(diff <= 0){
        finalSubmit();
        document.getElementById("timer").innerHTML = "00:00:00";
    }
}




