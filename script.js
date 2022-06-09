let key = "2cfda1f27f8f18422038c85cc30073ad"
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&units=metric&appid=${key}`
let $icon = document.querySelector('.images')
let $city = document.querySelector('.city')
let $desc = document.querySelector('.desc')
let $temp = document.querySelector('.temp')
let $listOfDays = document.querySelector('.listOfDays')
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.daily.forEach(element => {
            $listOfDays.insertAdjacentHTML('beforeend', `
            <div class="day">
                <p>${new Date().getDay()}</p>
                <p>${element.temp.day}</p>
            </div>
            `)
        });
    })
let $btn = document.querySelector('#push')
let $current = document.querySelector('.current')
let $week = document.querySelector('.week')
let $btn2 = document.querySelector('#back')
$btn.addEventListener('click', function(){
    $current.style.display = 'none'
    $week.style.display = 'block'
})  
$btn2.addEventListener('click', function(){
    $current.style.display = 'block'
    $week.style.display = 'none'
})