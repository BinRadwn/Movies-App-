var nvWidth = 0,
isTrue = !0;
$(".start-toggel-menu").click(function() {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".start-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1100), $(".nav-tab-menu .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1200), $(".nav-tab-menu .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1300), $(".nav-tab-menu .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1400), $(".nav-tab-menu .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1500), $(".nav-tab-menu .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".start-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
        opacity: "0",
        paddingTop: "500px"
    },
    500), isTrue = !isTrue)
});


let searchImput = document.getElementById("searchImput")

searchImput.addEventListener('keyup',function(){
    
    let searchResult = [];
    let temp = '';
    for(var i = 0; i<newMovies.length;i++){
        if(newMovies[i].title.toLowerCase().includes(searchImput.value.toLowerCase()) == true){
            temp+=`<div class="col-md-4">
            <div class="item py-4" >
                <img src="https://image.tmdb.org/t/p/w500${newMovies[i].poster_path}" class="w-100" alt="">
                <div class="layer text-center py-5">
                    <h2>${newMovies[i].title}</h2>
                    <p>${newMovies[i].overview}</p>
                    <p>${newMovies[i].vote_average}</p>
                    <p>${newMovies[i].release_date}</p>
                </div>
            </div>
        </div>`
        }
    }
    document.getElementById("movied").innerHTML = temp
}) 


/*Start Home */
let divWidth = $(".box").innerWidth(); 
$(".nav-box").css('left',`-${divWidth}`)
$(".setting i").click(function(){
    if($(".nav-box").css('left') == '0px')
    {    
        $('.nav-box').animate({left: `-${divWidth}`}, 1000)
    }
    else
    {
        $('.nav-box').animate({left:'0px'}, 1000)
    }
})
/*End Home */

/* Start content */
let Nowplaying = document.getElementById("Nowplaying")
let Popular = document.getElementById("Popular")
let TopRated = document.getElementById("TopRated")
let Trending = document.getElementById("Trending")
let Upcoming = document.getElementById("Upcoming")
let ContactUs = document.getElementById("ContactUs")
let newMovies= [];
async function getMovies(){
let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=920fe3845ee29a8b079f6702734eaf39&language=en-US&page=1')
let data = await response.json();
newMovies = data.results;
displayData()
}
getMovies()

Nowplaying.addEventListener('click' , async function(){
    let response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=920fe3845ee29a8b079f6702734eaf39&language=en-US&page=1')
    let data = await response.json();
    newMovies = data.results
    console.log(newMovies)
    displayData()
})
Popular.addEventListener('click' , async function(){
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=920fe3845ee29a8b079f6702734eaf39&language=en-US&page=1')
    let data = await response.json();
    newMovies = data.results
    console.log(newMovies)
    displayData()
})

TopRated.addEventListener('click' , async function(){
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=920fe3845ee29a8b079f6702734eaf39&language=en-US&page=1')
    let data = await response.json();
    newMovies = data.results
    console.log(newMovies)
    displayData()
})

Trending.addEventListener('click' , async function(){
    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=920fe3845ee29a8b079f6702734eaf39')
    let data = await response.json();
    newMovies = data.results
    console.log(newMovies)
    displayData()
})

Upcoming.addEventListener('click' , async function(){
    let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=920fe3845ee29a8b079f6702734eaf39&language=en-US&page=1')
    let data = await response.json();
    newMovies = data.results
    console.log(newMovies)
    displayData()
})

function displayData(){
    let temp = '';
    newMovies.forEach(element => {
        
        temp+=`<div class="col-md-4">
        <div class="item py-4" >
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="w-100" alt="">
            <div class="layer text-center py-5">
                <h2>${element.title}</h2>
                <p>${element.overview}</p>
                <p>${element.vote_average}</p>
                <p>${element.release_date}</p>
            </div>
        </div>
    </div>`
    });
    document.getElementById("movied").innerHTML = temp
}

$("#ContactUs").click(function(){
    $("html,body").animate({scrollTop:"5500px"},2000)

})
/*End Content */

/*Start Contact*/

let myName = document.getElementById('name')
let myEmail = document.getElementById('email')
let myPhone = document.getElementById('phone')
let myAge = document.getElementById('age')
let mypassword = document.getElementById('password')
let myRePassword = document.getElementById('rePassword')

function getValue(){
    let value = {
        name        :   myName.value,
        Email       :   myEmail.value,
        Phone       :   myPhone.value,
        Password    :   mypassword.value,
        rePassword  :   myName.value,
    }
    validName()
}
function validName(){
    let regex = /^[A-Z][a-z]{3,8}[0-9]?$/;
    if(regex.test(myName.value)){
        console.log("tmam")
        document.getElementById("namealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("namealert").style.display="block"
    }
}

function validPhone(){
    let regex = /^[0-9]{11}$/;
    if(regex.test(myPhone.value)){
        console.log("tmam")
        document.getElementById("phonealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("phonealert").style.display="block"
    }
}

function validEmail(){
    let regex = /^[@.]$/;
    if(regex.test(myEmail.value)){
        console.log("tmam")
        document.getElementById("emailalert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("emailalert").style.display="block"
    }
}

function validAge(){
    let regex = /^[0-9]{2}$/;
    if(regex.test(myAge.value)){
        console.log("tmam")
        document.getElementById("agealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("agealert").style.display="block"
    }
}


function validPassword(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(myAge.value)){
        console.log("tmam")
        document.getElementById("passwordalert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("passwordalert").style.display="block"
    }
}

/*End Contact */