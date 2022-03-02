let inputFeild = document.getElementById("input-feild");


// inner text set 
const innerTextSet = (id, text) => {
    document.getElementById(id).innerText = text;
}

const loadData = () => {

    let API_KEY = `53fd837fd9da369e11532bb48c5f4c01`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputFeild.value}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
    inputFeild.value = "";
}

const displayData = data => {
    console.log(data);
    innerTextSet("city", data.name);
    innerTextSet("temp", data.main.temp);
    innerTextSet("clouds", data.weather[0].main);
    let icoUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").setAttribute("src", icoUrl);
}

