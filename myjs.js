const ques_pool = {};
var cname = null;
var cemail = null;
const myDivs = ["candidate-credentials","question","instruction"]

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

function acceptInstruction(){
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




