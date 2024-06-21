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
updateTime();
setInterval(updateTime, 1000);
