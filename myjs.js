window.addEventListener("load",function(){
    document.getElementById("date").textContent = new Date().toLocaleDateString();
    var settime = setInterval(() => {document.getElementById("time").textContent = new Date().toLocaleTimeString();},1000);
});