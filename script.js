const container= document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const  weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const innerBox = document.querySelector('.inner-box');

// 728b0ee6df5687559812bd3169ad77b7
search.addEventListener('click', () =>{
  
    const APIKey = '5360a0e22e268d8f063bdd4b4e954ccf';
    const city = document.querySelector('.search-box input').value;
    if (city === '')
        return
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
        if(json.cod === '404'){
            innerBox.style.height = '570px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }
        weatherBox.style.display = 'block';
        weatherDetails.style.display = 'block';
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

          const image = document.querySelector('.weather-box img');
          const temperature = document.querySelector('.weather-box .temperature');
          const discription = document.querySelector('.weather-box .description');        
          switch (json.weather[0].main){
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
                image.src = 'images/cloud1.png';
                break;


                case 'Haze':
                image.src = 'images/haze.png';
                break;

                default:
                    image.src ='';
          }

          temperature.innerHTML = `${parseInt(json.main.temp)}<span> *C </span>`;
          discription.innerHTML = `${json.weather[0].description}`;
        
          weatherBox.style.disply = '';
          weatherDetails.style.disply = '';
          weatherBox.classList.add('fadeIn');
          weatherDetails.classList.add('fadeIn')
          innerBox.style.height = '590px';


    })
})

