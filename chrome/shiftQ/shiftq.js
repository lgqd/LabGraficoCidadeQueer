chrome.storage.local.get({myQueer: 'KUIR'}, function(items){
    var currentQueer = items.myQueer;

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
                    var replacedText = text.replace(/queer/gi, thisQueer);

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
        mutations.some(function(mutation) {
            if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
                var node = mutation.target.querySelector("div#search");
                if (node) {
                    replace(currentQueer);
                    return true;
                }
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
