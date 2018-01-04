
  $(document).ready(function(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      console.log("No Geolocation :( ");
    }

    function showPosition(position){
      var map = document.getElementById("map_img");
      console.log(position);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lon + "&zoom=13&size=300x300&sensor=false";
      map.appendChild(img);

      var proxy = 'https://cors-anywhere.herokuapp.com/';
      var my_api = 'https://api.darksky.net/forecast/c839493393fe3317535ed18053f0093f/'+lat+','+lon;
      $.getJSON(proxy+my_api, function(weather){
        var temp = document.getElementById("temp");
        var feel = document.getElementById("feels_like");
        var hum = document.getElementById("humidity");
        var wind = document.getElementById("wind_speed");
        var precip = document.getElementById("precipitation");
        var summ = document.getElementById("summary");
        var currentTime = document.getElementById("time");
        var weather_icon = document.getElementById("temp_icon");


        var currentTemp = weather.currently.temperature.toFixed(0);
        var time = weather.currently.time;
        var newTime = Date();
        var timesss = newTime.split(' ')
        var day = timesss[2];
        var mon = timesss[1];
        var yr = timesss[3]
        var time_stamp = timesss[4]
        console.log(day);
        var feelsLike = weather.currently.apparentTemperature;
        var humidity = weather.currently.humidity;
        var windSped = weather.currently.windSpeed;
        var summary = weather.currently.summary;
        var precipitation = weather.currently.precipProbability;
        var currentWeather = weather.currently.icon;


        switch (currentWeather) {
          case 'clear-day':
          weather_icon.innerHTML = '<i class="wi wi-day-sunny"></i>'
          document.body.style.backgroundImage = "url('media/cloudyNight.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'clear-night':
          weather_icon.innerHTML = '<i class="wi wi-night-alt-cloudy"></i>'
          document.body.style.backgroundImage = "url('media/clearNight.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'rain':
          weather_icon.innerHTML += '<i class="wi wi-rain"></i>'
          document.body.style.backgroundImage = "url('media/rainyDay.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'snow':
          weather_icon.innerHTML += '<i class="wi wi-snow"></i>'
          document.body.style.backgroundImage = "url('media/snowyDay.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'wind':
          weather_icon.innerHTML += '<i class="wi wi-cloudy-gusts"></i>'
          document.body.style.backgroundImage = "url('media/cloudyNight.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'fog':
          weather_icon.innerHTML += '<i class="wi wi-fog"></i>'
          document.body.style.backgroundImage = "url('media/fog.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'cloudy':
          weather_icon.innerHTML += '<i class="wi wi-cloudy"></i>'
          document.body.style.backgroundImage = "url('media/overcast.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'partly-cloudy-night':
          weather_icon.innerHTML += '<i class="wi wi-night-alt-partly-cloudy wi-fw"></i>'
          document.body.style.backgroundImage = "url('media/cloudyNight.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'partly-cloudy-day':
          weather_icon.innerHTML += '<i class="wi wi-day-cloudy"></i>'
          document.body.style.backgroundImage = "url('media/cloudyDay.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'hail':
          weather_icon.innerHTML += '<i class="wi wi-hail"></i>'
          document.body.style.backgroundImage = "url('media/snowyDay.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'thunderstorm':
          weather_icon.innerHTML += '<i class="wi wi-storm-showers"></i>'
          document.body.style.backgroundImage = "url('media/thunderStorm.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          case 'tornado':
          weather_icon.innerHTML += '<i class="wi wi-tornado"></i>'
          document.body.style.backgroundImage = "url('media/cloudyNight.jpg')";
          document.body.style.backgroundSize = 'cover';
          break;

          default:
          weather_icon.innerHTML += '<i class="wi wi-night-alt-cloudy"></i>'
          document.body.style.backgroundImage = "url('media/overcast.jpg')";
          document.body.style.backgroundSize = 'cover';
        }

        currentTime.innerHTML += '<p>'+mon+' '+day+','+yr+'</p>';
        temp.innerHTML += currentTemp+'<i class="wi wi-fahrenheit"></i>';
        feel.innerHTML += 'Feels Like:  '+feelsLike.toFixed(0)+'<i class="wi wi-fahrenheit"></i>';
        // hum.innerHTML += 'Humidity: '+humidity.toFixed(1)+'%';
        wind.innerHTML += 'Wind:  '+windSped.toFixed(1)+'mph';
        // precip.innerHTML += 'Precipitation: '+precipitation.toFixed(0)+'%';
        summ.innerHTML += 'Today: '+summary;

        console.log(weather);
      });
    };
  });
