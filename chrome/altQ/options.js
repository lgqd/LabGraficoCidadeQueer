var QUEERS = 'queer, kuir, kuír, cuir, cuír, kwir, xxir';

function getQueer(){
    chrome.storage.local.get({myQueer: QUEERS}, function(items){
        document.getElementById("queerInput").value = items.myQueer;
    });
    document.getElementById("queerButton").addEventListener("click", saveQueer);
    document.getElementById("queerReset").addEventListener("click", resetQueer);
}

function saveQueer(){
    var newQueer = document.getElementById("queerInput").value;
    chrome.storage.local.set({myQueer: newQueer}, function(){
        document.getElementById("blink").style.backgroundColor = "#000";
        setTimeout(function() {document.getElementById("blink").style.backgroundColor = "#fff";}, 200);
    });
}

function resetQueer(){
    chrome.storage.local.set({myQueer: QUEERS}, function(){});
    getQueer();
}

window.addEventListener('load', getQueer);
