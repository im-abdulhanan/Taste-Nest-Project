// dark-light-mode-toggle
let body = document.body
let day_light =  document.getElementById("night")

function darklight(){
  let check = body.classList.contains("light")
  let day_light_change = day_light.classList.contains("night") 
  if(check){
    body.classList.add("dark")
    body.classList.remove("light")
    day_light_change.classList.add("light")
    day_light_change.classList.remove("night")

  }else{
    body.classList.add("light")
    body.classList.remove("dark")
    day_light_change.classList.add("night")
    day_light_change.classList.remove("light")
  }
}

// hero section
// arrow img change
let img = document.getElementById("hero_img_1");
function changeImg(){
  img.setAttribute("src","banner pics/banner_1.jpg")
}