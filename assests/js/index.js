
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const body = document.body;


    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        menu.classList.toggle('active');
    });


    body.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });



    var targetDate = new Date("May 15, 2025 00:00:00").getTime(); 


    var x = setInterval(function() {

  
        var now = new Date().getTime();

   
        var distance = targetDate - now;

  
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".day").innerHTML = days + " D";
        document.querySelector(".hour").innerHTML = hours + " H";
        document.querySelector(".min").innerHTML = minutes + " M";
        document.querySelector(".sec").innerHTML = seconds + " S";

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".count").innerHTML = "EXPIRED";
        }
    }, 1000);
    
const textarea = document.getElementById('message');
const charCountSpan = document.getElementById('char-count');
const remainingSpan = document.getElementById('remaining');

textarea.addEventListener('input', function() {
    const maxLength = 100;
    const remainingChars = maxLength - textarea.value.length;

    if (remainingChars <= 0) {
        charCountSpan.innerHTML = `<span class="remaining-number">0</span> You have reached the maximum character limit.`;
    } else {
        remainingSpan.textContent = remainingChars;
        charCountSpan.innerHTML = `<span class="remaining-number">${remainingChars}</span> Characters Remaining`;
    }
});


