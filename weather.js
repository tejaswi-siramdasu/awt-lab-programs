function fetchWeather(){
    var city=document.getElementById("temp").value
    console.log(city)
    var request=new XMLHttpRequest();
    var apikey ='9e4e69cdf9d64db420dc6a6c665ea665'
    var url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9e4e69cdf9d64db420dc6a6c665ea665'
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result)
    }
    request.send();
    console.log("Fetching....");
}