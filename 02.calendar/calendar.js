function disp_calendar(){
  const argv = require('minimist')(process.argv.slice(2));
  const now = new Date()
  const year = (argv.y != undefined) ? argv.y : now.getFullYear()
  const month = (argv.m != undefined) ? argv.m - 1 : now.getMonth()
  const first_date = new Date(year, month, 1)
  const last_date = new Date(year, month + 1, 0)

  console.log((month + 1 + "月 " + year).padStart(13))
  console.log("日 月 火 水 木 金 土")
  disp_date(first_date, last_date, year, month)
}

function disp_date(first_date, last_date, year, month){
  process.stdout.write('1'.padStart(3 * first_date.getDay() + 2))
  disp_suffix(first_date)
  for(let i = 2; i <= last_date.getDate(); i++){
    process.stdout.write(String(i).padStart(2))
    const date = new Date(year, month, i)
    disp_suffix(date)
  }
  process.stdout.write('\n')
}

function disp_suffix(date){
  if(date.getDay() == 6){
    process.stdout.write('\n')
  } else {
    process.stdout.write(' ')
  }
}

disp_calendar()
