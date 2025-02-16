let tablinks = document.getElementsByClassName('tab-links');
console.log(tablinks)
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

// ------------------------code for nav menu----------------------------
let sideMenu= document.getElementById("sideMenu");
function openMenu(){
    sideMenu.style.right ="0";
}
function closeMenu(){
    sideMenu.style.right ="-200px";
}