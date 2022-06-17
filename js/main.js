let mainImg = document.querySelector('.mainImg')
let container = document.querySelector(".container")
let logo = document.querySelector(".logo")
function changeMainImg(imgSrc){
    mainImg.src = imgSrc ;    
}
function changeBgColor(color){
    container.style.background = color;
}
function changeLogoColor(logoColor){
    logo.style.color = logoColor
}