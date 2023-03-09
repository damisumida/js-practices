function disp_calendar(){
  const argv = require('minimist')(process.argv.slice(2));
  const now = new Date()
  const year = (argv.y != undefined) ? argv.y : now.getFullYear()
  const month = (argv.m != undefined) ? argv.m - 1 : now.getMonth()
  const first_date = new Date(year, month, 2)
  const last_date = new Date(year, month + 1, 0)

  console.log((month + 1 + "月 " + year).padStart(13))
  console.log("日 月 火 水 木 金 土")
  disp_first_week(first_date)
  disp_nextweeks(first_date, last_date)
}

function disp_first_week(first_day){
  const first_week = build_first_week(first_day)
  console.log(first_week.padStart(20))
}

function build_first_week(first_day){
  let week = ''
  for (let i = 1; i <= 8-first_day.getDay(); i++){
    week = week.concat(String(i).padStart(2))
    if(first_day.getDay() == 0){ break; }
    week = week.concat(' ')
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
