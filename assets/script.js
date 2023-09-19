function togglemode () {

  const html= document.documentElement
  html.classList.toggle('light')
  
  /*  essa é a forma mais complexa
  if(html.classList.contains('light')) {
 html.classList.remove('light')

 }
  else {
  html.classList.add('light')
 }*/

 // pra fazer a troca das fotos vamos usar o mesmo codigo mas vamos fazr algumas aletrações

 // pegar a tag da imagem

 const img = document.querySelector("#profile img")

 //substituir a imagem 

 if (html.classList.contains("light")) {

// se tiver o light mode adicionar a imagem light

 img.setAttribute("src", "./assets/avatar-light.png")
 
 }  else {

//se tiver sem light mode manter a imagem normal 

img.setAttribute("src", "./assets/avatar2.png")

  }
 
 
 

}