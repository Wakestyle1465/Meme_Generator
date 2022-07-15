const h1 = document.querySelector('h1')

window.addEventListener('load',(function(){
    h1.classList.toggle('small')
}))


const form =document.querySelector('#memeGenInput')
const memeIMG = document.querySelector('#imgUrl')
const inputTop = document.querySelector('#textBoxTop')
const inputBottom = document.querySelector('#textBoxBottom')

const memeLibrary = document.querySelector('#memeLibrary')


form.addEventListener('submit',function(e){
    e.preventDefault()

const createDiv = document.createElement('div')
const createTextBox1 = document.createElement('p')
const createTextBox2 = document.createElement('p')
const createIMG = document.createElement('img')

createTextBox1.innerText = inputTop.value
createTextBox2.innerText = inputBottom.value
createIMG.src = memeIMG.value
createDiv.classList = '.newClass'
createTextBox1.classList = 'text1'
createTextBox2.classList = 'text2'
createIMG.classList = 'memeImg'



createDiv.appendChild(createIMG)
createDiv.appendChild(createTextBox1)
createDiv.appendChild(createTextBox2)
memeLibrary.appendChild(createDiv)

createDiv.addEventListener('click',function(e){
    e.target.parentElement.remove()
})

})


