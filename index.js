const rate = document.querySelectorAll('.list')
const button = document.querySelector('button')
let ratingSelected =''

for(let i=0; i<rate.length;i++){
    rate[i].addEventListener('click',(e)=>{
        ratingSelected = e.target.id
        rate.forEach((li)=>{
            li.style.backgroundColor = 'hsl(214, 24%, 23%)'
        })
        document.getElementById(e.target.id).style.backgroundColor = 'hsl(217, 12%, 63%)'

    })
}

button.addEventListener('click',()=>{
    if(ratingSelected){
        document.getElementById('main').classList.toggle('hidden')
        renderThankYou()
    }
})

function renderThankYou(){
    document.getElementById('thankYou').innerHTML = `<img class="thankYouImg" src="images/illustration-thank-you.svg">
                <div class="rating">You selected ${ratingSelected} out of 5</div>
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!</p>`
}
