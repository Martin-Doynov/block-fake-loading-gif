// Select the node that will be observed for mutations
var targetNode = document.body;

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            var overlay = document.querySelector('#overlay');
            if (overlay) {
                overlay.parentNode.removeChild(overlay);
            }

            // Loads by default the hidden divs
            var divs = ['courses_wrapper', 'subjects_wrapper', 'groups_wrapper'];
            divs.forEach(function(id) {
                var div = document.getElementById(id);
                if (div && div.style.display === 'none') {
                    div.style.display = 'block';
                }
            });
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
