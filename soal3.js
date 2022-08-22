
  // Get Array From The String
  const arrTime = [];
  let temp = '';

  for (let i = 0; i < currentTime.length; i++) {
    if (currentTime[i] !== ':') {
      temp += currentTime[i];
    }

    if (currentTime[i] === ':' || i === currentTime.length - 1) {
      arrTime.push(Number(temp));
      temp = '';
    }
  }

  // Initial Value From Current Time
  let [hour, minute, second] = arrTime;

  // Initial Value From Timer
  const addHour = Math.floor(timer / 60 / 60);
  const addMinute = Math.floor(timer / 60) % 60;
  const addSecond = timer % 60;

  // Initial Logic
  hour += addHour;
  minute += addMinute;
  second += addSecond;

  // Handle if second more than 59 or less than 0
  if (second > 59) {
    minute += Math.floor(second / 60);
    second %= 60;
  } else if (second < 0) {
    second = (second % 60) + 60;
  }

  // Handle if minute more than 59 or less than 0
  if (minute > 59) {
    hour += Math.floor(minute / 60);
    minute %= 60;
  } else if (minute < 0) {
    minute = (minute % 60) + 60;
  }

  // Handle if hour more than 12 or less than 1
  if (hour > 12) {
    hour %= 12;
  } else if (hour < 1) {
    hour = (hour % 12) + 12;
  }

  // Handle if the number is less than 10
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  // Return Value
  return `${hour}:${minute}:${second}`;
