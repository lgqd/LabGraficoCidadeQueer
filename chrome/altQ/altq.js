chrome.storage.local.get({myQueer: 'KUIR'}, function(items){
    var myQueerArr = items.myQueer.replace(/ /g, '').split(",");
    var currentQueer = myQueerArr[Math.floor(Math.random()*myQueerArr.length)];
    if(Math.random() > 0.66){
        currentQueer = currentQueer.toUpperCase();
    }

    var observerConfig = {
        childList: true,
        subtree: true
    };

    function replace(thisQueer){
        var elements = document.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];

                if (node.nodeType === 3) {
                    var text = node.nodeValue;
                    var replacedText = "";
                    if(thisQueer.toUpperCase() === thisQueer){
                        replacedText = text.replace(/queer/gi, thisQueer);
                    }
                    else{
                        replacedText = text.replace(/queer/g, thisQueer.toLowerCase())
                            .replace(/Queer/g, thisQueer[0].toUpperCase()+thisQueer.slice(1).toLowerCase())
                            .replace(/QUEER/g, thisQueer.toUpperCase());
                    }

                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }

    /* Observer1: Looks for 'div.search' */
    var mObserver = new MutationObserver(function(mutations) {
        /* For each MutationRecord in 'mutations'... */
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && (mutation.addedNodes.length > 0) && (mutation.target.getAttribute("id") === "search")) {
                replace(currentQueer);
            }
        });
    });

    try{
        mObserver.observe(document.body, observerConfig);
    }
    catch(err){
        console.log(err);
    }
    replace(currentQueer);
});
