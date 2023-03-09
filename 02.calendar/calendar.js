function disp_calendar(){
  const argv = require('minimist')(process.argv.slice(2));
  const now = new Date()
  const year = parse_year(argv, now)
  const month = parse_month(argv, now)
  const first_day = new Date(year, month, 2)
  const last_day = new Date(year, month + 1, 0)

  console.log((month + 1 + "月 " + year).padStart(13))
  console.log("日 月 火 水 木 金 土")
  disp_first_week(first_day)
  disp_nextweeks(first_day, last_day)
}

function parse_year(argv, now){
  if(argv.y != undefined){
    return argv.y
  } else {
    return now.getFullYear()
  }
}

function parse_month(argv, now){
  if(argv.m != undefined){
    return argv.m - 1
  } else {
    return now.getMonth()
  }
}

function disp_first_week(first_day){
  const first_week = build_first_week(first_day)
  console.log(first_week.padStart(20))
}

function build_first_week(first_day){
  let week = ''
  for (let i = 1; i <= 8-first_day.getDay(); i++){
    week = week.concat(String(i).padStart(2))
    week = week.concat(' ')
    if(first_day.getDay() == 0){ break; }
  }
  return week
}

function disp_nextweeks(first_day, last_day){
  for (let i = 0; i < 4; i++){
    let week = ''
    for(let j = 1; j < 8; j++){
      if (last_day.getDate() < 8-first_day.getDay() + j + i * 7){ break; }
      week = week.concat(String(8-first_day.getDay() + j + i * 7).padStart(2))
      week = week.concat(' ')
    }
    console.log(week)
  }
}

disp_calendar()
