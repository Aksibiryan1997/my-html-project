function createElmnt(type, class1, class2, parent) {
    const elemnt = document.createElement(`${type}`);
    if(class1) {
        elemnt.classList.add(class1);
    }
    if(class2) {
        elemnt.classList.add(class2);
    }
    document.querySelector(`${parent}`).append(elemnt);
}



//куда будет рендериться выбираем внутри данной функции
createElmnt("div","appWeather","",".render-page");
//в моем случае это будет блок с классом ".render-page"
//к сожалению ничего лучше пока как рендеринг я не смог придумать

createElmnt("input","searching-city","appWeather__searching-city",".appWeather");
createElmnt("button","submitting","appWeather__submitting",".appWeather");
document.querySelector(".submitting").innerHTML = "Подтвердить";

createElmnt("div","info","appWeather__info",".appWeather");
createElmnt("div","info-city","appWeather__info-city",".appWeather__info");
createElmnt("div","info-temperature","appWeather__info-temperature",".appWeather__info");
createElmnt("div","info-img","appWeather__info-img",".appWeather__info");
createElmnt("div","info-description","appWeather__info-description",".appWeather__info");
createElmnt("div","info-day","appWeather__info-day",".appWeather__info");

createElmnt("div","datas","appWeather__datas",".appWeather");
createElmnt("div","datas-feels-like","appWeather__datas-feels-like",".appWeather__datas");
createElmnt("div","datas-wind","appWeather__datas-wind",".appWeather__datas");
createElmnt("div","datas-visibility","appWeather__datas-visibility",".appWeather__datas");
createElmnt("div","datas-pressure","appWeather__datas-pressure",".appWeather__datas");
createElmnt("div","datas-humidity","appWeather__datas-humidity",".appWeather__datas");

createElmnt("div","timing","appWeather__timing",".appWeather");
createElmnt("div","timing-sunrise","appWeather__timing-sunrise",".appWeather__timing");
createElmnt("div","timing-sunset","appWeather__timing-sunset",".appWeather__timing");
createElmnt("div","timing-update","appWeather__timing-update",".appWeather__timing");
