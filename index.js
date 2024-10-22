let videoIds = ["video1", "video2", "video3", "video4", "video5", "video6"];
let videoAbout = ["aboutVideo1", "aboutVideo2", "aboutVideo3", "aboutVideo4", "aboutVideo5", "aboutVideo6"];

function displayingBgImg() {
    let oldVal = 0;
    let currentVal = 1;

    setInterval(function() {
        let oldId = document.getElementById(videoIds[oldVal]);
        let oldAboutId = document.getElementById(videoAbout[oldVal]);
        oldId.classList.add("d-none");
        oldAboutId.classList.add("d-none");

        let currentId = document.getElementById(videoIds[currentVal]);
        let currentAboutId = document.getElementById(videoAbout[currentVal]);
        currentId.classList.remove("d-none");
        currentAboutId.classList.remove("d-none");

        oldVal = currentVal;
        currentVal = (currentVal + 1) % 6;
    }, 3000);
}

displayingBgImg();

// Slider section 3 
var swiper = new Swiper(".swiper-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerslide: true,
    fade: true,
    grabcursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },

});

// section 3

let all = document.getElementById("all");
let trending = document.getElementById("trending");
let tech = document.getElementById("tech");
let Career = document.getElementById("Career");
let cxo = document.getElementById("cxo");
let productivity = document.getElementById("productivity");
let gsoc = document.getElementById("gsoc");
let panel = document.getElementById("panel");


function TotalCards() {
    let section3CardNames = []
    for (let num = 1; num <= 22; num++){
        section3CardNames.push("section3Card" + num);
    }
    return section3CardNames;
}

let section3Cards = TotalCards(); // All Cards

function removingAllCards() {
    for (let i of section3Cards) {
        let eachCard = document.getElementById(i);
        eachCard.classList.add("d-none");
    }
}

function addingCards(cardArray) {
    for (let i of cardArray) {
        let eachCard = document.getElementById(i);
        eachCard.classList.remove("d-none");
    }
}

let trendingCards = ["section3Card7","section3Card10","section3Card11"];
let techCards = ["section3Card1","section3Card5","section3Card2", "section3Card12","section3Card13", "section3Card14"];
let careerCards = ["section3Card5","section3Card6","section3Card7", "section3Card8","section3Card9", "section3Card10", "section3Card14","section3Card16", "section3Card17" ];
let cxoCards = ["section3Card10","section3Card11","section3Card12", "section3Card13","section3Card14", "section3Card15", "section3Card17","section3Card16", "section3Card18" ];
let productivityCards =  ["section3Card15", "section3Card17","section3Card16","section3Card17","section3Card18","section3Card4", "section3Card5","section3Card6",  ];
let gsocCards = ["section3Card18","section3Card19"];
let panelCards = ["section3Card20","section3Card21","section3Card22"];

let previousCheckedBtn = all; 
function checkingSection3btnChecked() {
    
    all.addEventListener("click", function() {
        all.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        addingCards(section3Cards);
        previousCheckedBtn = all;
    });

    trending.addEventListener("click", function() {
        // changing checked btn color
        trending.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = trending;

        removingAllCards();
        addingCards(trendingCards);
    });
    tech.addEventListener("click", function() {
        // changing checked btn color
        tech.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = tech;

        removingAllCards();
        addingCards(techCards);
    });
    Career.addEventListener("click", function() {
        // changing checked btn color
        Career.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = Career;

        removingAllCards();
        addingCards(careerCards);        
    });
    cxo.addEventListener("click", function() {
        // changing checked btn color
        cxo.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = cxo;

        removingAllCards();
        addingCards(cxoCards);      
    });
    productivity.addEventListener("click", function() {
        // changing checked btn color
        productivity.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = productivity;

        removingAllCards();
        addingCards(productivityCards);      
    });
    gsoc.addEventListener("click", function() {
        // changing checked btn color
        gsoc.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = gsoc;

        removingAllCards();
        addingCards(gsocCards);
    });
    panel.addEventListener("click", function() {
        // changing checked btn color
        panel.classList.add("section3-card-btn-checked");
        previousCheckedBtn.classList.remove("section3-card-btn-checked");
        previousCheckedBtn = panel;

        removingAllCards();
        addingCards(panelCards);
        
    });

}

checkingSection3btnChecked();


// Review Section


var swiper2 = new Swiper("#swiper2", {
    grabCursor: true,
    spaceBetween: 25,
    loop: true,
    centerslide: true,
    fade: true,
    pagination: {
        el: "#pagination2",
    },
    navigation: {
        nextEl: "#next2",
        prevEl: "#prev2",
    },
});



// Get free potcast section

let getOtpBtn = document.getElementById("getOtpBtn");
let nameInput = document.getElementById("nameInput");
let numberInput = document.getElementById("numberInput");
let nameErrorMsg = document.getElementById("nameErrorMsg");
let numberErrorMsg = document.getElementById("numberErrorMsg");

let podcastSection = document.getElementById("podcastSection");
let otpSection = document.getElementById("otpSection");
let inputs = document.querySelectorAll(".otp-input");
let otpVerifyBtn = document.getElementById("otpVerifyBtn");
let timer = document.getElementById("timer");
let customerNum = document.getElementById("customerNum");

function triggerTimer() {
    let seconds = 30;
    let interval = setInterval(function() {
        seconds -= 1;
        timer.textContent = `${seconds} sec`;
        if (seconds < 1) {
            clearInterval(interval);
        }
    }, 1000);
}

function getOtpage() {
    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.addEventListener("keyup" , function(event) {
            let currentInput = input;
            let nextInput = input.nextElementSibling;
            let prevInput = input.previousElementSibling;
            
            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled", true);
                nextInput.focus();
            }
            
            if (event.key === "Backspace") {
                inputs.forEach((input, index1) => {
                    if (index <= index1 && prevInput) {
                        input.setAttribute("disabled", true);
                        prevInput.focus();
                        prevInput.value = "";
                    }
                });
            }
            
            if (!inputs[5].disabled && inputs[5].value !== "") {
                console.log("last");
                otpVerifyBtn.classList.add("active-verify-btn");
                return;
            }
            otpVerifyBtn.classList.remove("active-verify-btn");
            
        });
    });
}




getOtpBtn.onclick = function() {
    if ( (nameInput.value === "") && (numberInput.value === "") ) {
        nameErrorMsg.textContent = "*Required";
        numberErrorMsg.textContent = "*Required";
    }
    else if (nameInput.value === "") {
        nameErrorMsg.textContent = "*Required";
    }
    else  if (numberInput.value === "") {
        numberErrorMsg.textContent = "*Required";
    }
    else if (isNaN(numberInput.value)) {
        numberErrorMsg.textContent = "Enter Valid Numbers"   
    }
    else if  (!((numberInput.value).length === 10)) {
        numberErrorMsg.textContent = "Number Must be  10 Digits"
    }

    else {
        nameErrorMsg.textContent = "";
        numberErrorMsg.textContent = "";
        
        
        podcastSection.classList.add("d-none");
        otpSection.classList.remove("d-none");
        
        customerNum.textContent = numberInput.value;

        triggerTimer();
        getOtpage()
        

    }
    
}





