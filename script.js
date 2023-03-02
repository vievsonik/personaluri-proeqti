const container= document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const  weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const APIKey = '5360a0e22e268d8f063bdd4b4e954ccf';
    const city = document.querySelector('search-box input').value;
    if (city === '')
        return
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
    .then(response => response.jason())
    .then (json=>{
        if(json.cod === '404'){
            container.style.height = '404px';
            weatherBox.style.disply = 'none';
            weatherDetails.style.disply = 'none';
            error404.style.disply = 'block'

        }

    })
})

