const getWeatherData = async (city) => {
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6298914cf8de1f991e5ab27e61a35d5e&units=metric&lang=ru`);
       return await response.json();
    }catch(error) {
        console.error(error);
    }
};

var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
var d = new Date();
var n = d.getDay();

const rimer = async (radke) => {
    const mitar = await getWeatherData(radke);
    document.querySelector(".appWeather__info-city").innerHTML = mitar.name;
    document.querySelector(".appWeather__info-temperature").innerHTML = Math.round(+mitar.main.temp) + "&#8451;" + " || " + Math.round(+mitar.main.temp*1.8 + 32) + "&#8457;";
    document.querySelector(".appWeather__info-img").innerHTML = '<img src="https://openweathermap.org/img/wn/' + mitar.weather[0].icon + '@2x.png" alt="">' 
    document.querySelector(".appWeather__info-description").innerHTML = mitar.weather[0].description;
    document.querySelector(".appWeather__info-day").innerHTML = days[n];
    document.querySelector(".appWeather__datas-feels-like").innerHTML = "Ощущается как:  " + Math.round(+mitar.main.feels_like) + "&#8451;" + " || " + Math.round(+mitar.main.feels_like*1.8 + 32) + "&#8457;";
    document.querySelector(".appWeather__datas-wind").innerHTML = "Ветер:  " + Math.round(+mitar.wind.speed*3600/1000) + " км/ч";
    document.querySelector(".appWeather__datas-visibility").innerHTML = "Видимость:  " + +mitar.visibility/1000 + " км";
    document.querySelector(".appWeather__datas-pressure").innerHTML = "Давление:  " + +mitar.main.pressure + " мбар";
    document.querySelector(".appWeather__datas-humidity").innerHTML = "Влажность:  " + +mitar.main.humidity + "%";
    const sunrise = new Date(+mitar.sys.sunrise*1000);
    document.querySelector(".appWeather__timing-sunrise").innerHTML = "Восход " + sunrise.getHours() + ":" + sunrise.getMinutes();
    const sunset = new Date(+mitar.sys.sunset*1000);
    document.querySelector(".appWeather__timing-sunset").innerHTML = "Закат " + sunset.getHours() + ":" + sunset.getMinutes();
    const update = new Date(+mitar.dt*1000);
    document.querySelector(".appWeather__timing-update").innerHTML = "Обновлено в " + update.getHours() + ":" + update.getMinutes();
};

