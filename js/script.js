//**************************************************************
//**************************************************************
//       GLOBAL VARIABLE DECLARATIONS
//**************************************************************
//**************************************************************

// Hamburger menu icon
const menuButton = document.getElementById('menu-button');

// Sidebar
const navMenu = document.getElementById('nav-menu');

// Close sidebar button
const closeButton = document.getElementById('close-button');

// Navbar links
const homeNavLink = document.getElementById('home-nav-link');
const articleNavLink = document.getElementById('article-nav-link');
const contactNavLink = document.getElementById('contact-nav-link');
const sourcesNavLink = document.getElementById('sources-nav-link');

// Navbar links array
const navLinksArr = [homeNavLink, articleNavLink, contactNavLink, sourcesNavLink];

//**************************************************************
//**************************************************************
//       FUNCTION DECLARATIONS
//**************************************************************
//**************************************************************

// Clear highlight from previous page nav link
const clearPrevious = () => {
    navLinksArr.forEach((link) => {
        link.classList.remove('current');
    });
};

// Highlight current page nav link
const highlightCurrent = () => {
    // Get URL of current page
    let currentURL = document.URL;

    // Check which page name is part of current URL string
    if(currentURL.includes('index.html') || currentURL === 'https://sultanatwal.wmdd.ca/') {
        homeNavLink.classList.add('current');
    }

    else if(currentURL.includes('article.html')) {
        articleNavLink.classList.add('current');
    }

    else if(currentURL.includes('contact.html')) {
        contactNavLink.classList.add('current');
    }

    else if(currentURL.includes('sources.html')) {
        sourcesNavLink.classList.add('current');
    }
};

//**************************************************************
//**************************************************************
//       EVENT LISTENERS
//**************************************************************
//**************************************************************

// Highlight current link in navbar on page load
window.addEventListener('load', () => {
    clearPrevious();
    highlightCurrent();
});

// On clicking hamburger icon, show sidebar
menuButton.addEventListener('click', () => {
    navMenu.style.left = "0";
});

// On clicking 'X' button, hide sidebar
closeButton.addEventListener('click', () => {
    navMenu.style.left = "-45vw";
});
