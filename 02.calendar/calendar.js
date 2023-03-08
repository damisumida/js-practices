let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()

const argv = require('minimist')(process.argv.slice(2));
if(argv.y != undefined){
  year = argv.y
}
if(argv.m != undefined){
  month = argv.m
}

let first_day = new Date(year, month, 2)
let last_day = new Date(year, month + 1, 0)

console.log((month+1 + "月 " + year).padStart(13));
console.log("日 月 火 水 木 金 土");

let first_week = ' '
for (let i = 1; i <= 8-first_day.getDay(); i++){
  first_week = first_week.concat(String(i).padStart(2))
  first_week = first_week.concat(' ')
}
console.log(first_week.padStart(21))

for (let i = 0; i < 4; i++){
  let week = ''
  for(let j = 1; j < 8; j++){
    if (last_day.getDate() < 8-first_day.getDay() + j + i * 7){ break; }
    week = week.concat(String(8-first_day.getDay() + j + i * 7).padStart(2))
    week = week.concat(' ')
  }
  console.log(week)
}
