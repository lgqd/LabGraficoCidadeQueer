
function getQueer(){
    chrome.storage.local.get({myQueer: 'KUIR'}, function(items){
        document.getElementById("queerInput").value = items.myQueer;
    });
    document.getElementById("queerButton").addEventListener("click", saveQueer);
}

function saveQueer(){
    var newQueer = document.getElementById("queerInput").value;
    chrome.storage.local.set({myQueer: newQueer}, function(){});
    window.close();
}

window.addEventListener('load', getQueer);
