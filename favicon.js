// icon.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired"); // Debugging line

    var link = document.createElement('link');

    link.rel = 'icon';
    link.type = 'image/png';
    link.href = 'https://raw.githubusercontent.com/Byson94/Lonely-Orbit-TermsAndConditions/main/Icon.png';

//adding new texts to reload progress
    if (document.head) {
        document.head.appendChild(link);
        console.log("Favicon link added to the head"); // Debugging line
    } else {
        console.log("Document head not found"); // Debugging line
    }
});
