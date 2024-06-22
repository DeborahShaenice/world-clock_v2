function updateTime() {
  let TokyoElement = document.querySelector("#Tokyo");
  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");
  TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
  TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let BuenosAiresElement = document.querySelector("#BuenosAires");
  let BuenosAiresDateElement = BuenosAiresElement.querySelector(".date");
  let BuenosAiresTimeElement = BuenosAiresElement.querySelector(".time");
  let BuenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");
  BuenosAiresDateElement.innerHTML = BuenosAiresTime.format("MMMM Do YYYY");
  BuenosAiresTimeElement.innerHTML = BuenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
