let up = document.querySelector('.up')
let down = document.querySelector('.down')
let kilometr = document.querySelector('.km')
let sapas_hoda = document.querySelector('.sapas')

up.onclick = () => {
       if (kilometr.textContent < 80) {
              kilometr.textContent = +kilometr.textContent + 5
              sapas_hoda.textContent = (+sapas_hoda.textContent) + 10

       }
}
down.onclick = () => {
       if (kilometr.textContent > 20) {
              kilometr.textContent = +kilometr.textContent - 5
              sapas_hoda.textContent = (+sapas_hoda.textContent) - 10

       }
}

let temp = document.querySelector('.temp')
let up1 = document.querySelector('.up1')
let down1 = document.querySelector('.down1')
let temperatyra = document.querySelector('.temperartura')

up1.onclick = () => {
       temp.textContent++
       if (temp.textContent > 15) {
              temperatyra.textContent = "Кондиционер"
       }
}
down1.onclick = () => {
       temp.textContent--
       if (temp.textContent <= 15) {
              temperatyra.textContent = "Печка"
       }


}

let diski = document.querySelector('.diski')
let diski1 = document.querySelector('.diski1')
let diski_h1 = document.querySelector('.diski_h1')
let diski_img = document.querySelector('.img')



diski.onclick = () => {

       diski_img.src = './img/photo_2023-12-16_18-09-45__2_-removebg-preview.png'
       diski_h1.textContent = 21
       diski_h1.style.fontFamily = "Poppins"
}

diski1.onclick = () => {
       diski_h1.textContent = 19

}

let checkbox = document.querySelector('.checkbox')


checkbox.onclick = () => {
       if (checkbox.checked) {
              sapas_hoda.textContent = (+sapas_hoda.textContent) - 20
       } else {
              sapas_hoda.textContent = (+sapas_hoda.textContent) + 20
       }

}

let bg_modal = document.querySelector('.bg-modal')


let input = document.querySelector('.input')
let input_close = document.querySelector('.input-close')
let main = document.querySelector('.mainn')
input.onclick = () => {
       main.style.display = "none"
       bg_modal.style.display = "flex"
}

let white = document.querySelector('.btn-modal1')
let besheviy = document.querySelector('.btn-modal2')
let black = document.querySelector('.btn-modal')
let main_img = document.querySelector('.main_car')

white.onclick = () => {
       main_img.setAttribute('src', './img/white-car.png')
       
}
besheviy.onclick = () => {
       main_img.setAttribute('src', './img/besheviy-car.png')
      
}
black.onclick = () => {
       main_img.setAttribute('src', './img/image 1.png')
     
       
}
input_close.onclick = () => {
       main.style.display = "flex"
       main.style.flexDirection = "column"
       bg_modal.style.display = "none"

}