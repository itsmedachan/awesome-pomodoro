'use strict';

{
  let nowTime = new Date();
  let nowHour = nowTime.getHours();
  let nowMin  = nowTime.getMinutes();
  let nowSec  = nowTime.getSeconds();
  let time_title = nowHour + ":" + nowMin + ":" + nowSec;
  document.title = time_title;
}