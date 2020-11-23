window.addEventListener('load', async e =>{
    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log("SW registered");
        }
        catch(error){
            console.log("SW not registered");
        }
    }
});

let deferredPrompt;
let btnAdd = document.querySelector(".button");

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    btnAdd.style.display = "block";
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
});

btnAdd.addEventListener('click', (e) => {
    // Hide the app provided install promotion
    hideMyInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });
});

$('ul.dropdown ul').hide();
$( "ul.dropdown li" ).hover(
    function(){

        $('ul', this).slideDown(200);
    },
    function(){

        $('ul', this).slideUp(200);


    });

$("#blue").click(function(){
    $('body').css("background-image", "url('images/lightblue.jpg')");
});
$("#gold").click(function(){
    $('body').css("background-image", "url('images/lightgold.jpg')");
});

