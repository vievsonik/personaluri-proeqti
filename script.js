const container= document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const  weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const innerBox = document.querySelector('.inner-box');


search.addEventListener('click', () =>{
    
    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
        if(json.cod === '404'){
            container.style.height = '404px';
            weatherBox.style.disply = 'none';
            weatherDetails.style.disply = 'none';
            error404.style.disply = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.disply = 'none';
          error404.classList.remove('fadeIn');

          const image = document.querySelector('.weather-box img');
          const temperature = document.querySelector('.weather-box .temperature');
          const discription = document.querySelector('.weather-box .description');
          const humidity = document.querySelector('.weather-details .humidity span')
          const wind = document.querySelector('.weather-details .wind span')
          
          switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

                case 'Rain':
                image.src = 'images/rain.png';
                break;


                case 'Snow':
                image.src = 'images/snow.png';
                break;

                case 'Clouds':
                image.src = 'images/clouds.png';
                break;


                case 'Haze':
                image.src = 'images/haze.png';
                break;

                default:
                    image.sec ='';
          }

          temperature.innerHTML = `${parseInt(json.main.temp)}<span> *C </span>`;
          discription.innerHTML = `${json.weather[0].description}`;
          humidity.innerHTML = `${(json.main.humidity)}%`;
          wind.innerHTML = `${parseInt(json.wind.speed)} km/h `;

          weatherBox.style.disply = '';
          weatherDetails.style.disply = '';
          weatherBox.classList.add('fadeIn');
          weatherDetails.classList.add('fadeIn')
          innerBox.style.height = '590px';


    })
})

