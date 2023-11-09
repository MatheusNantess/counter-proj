//consts 

const btnDecrease = document.querySelector('.decrease')
const btnReset = document.querySelector('.reset')
const btnIncrease = document.querySelector('.increase')
const spanValue = document.getElementById('value')
let value = parseInt(spanValue.textContent)

//addEventlisteners


btnIncrease.addEventListener('click', function(){
    value +=1
    spanValue.textContent = value
    colorChange()


})
btnDecrease.addEventListener('click', function(){
    value -=1
    spanValue.textContent = value
    colorChange()
})

btnReset.addEventListener('click', function(){
    spanValue.textContent = 0
    spanValue.style.color = 'black'
    value = 0
})
//



//functions
const colorChange = () => {
    if(value > 0){
        spanValue.style.color = 'green'

    } else if(value <0){
        spanValue.style.color = 'red'

    } else{
        spanValue.style.color = 'black'
    }
}


