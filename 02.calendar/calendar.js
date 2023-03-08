let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()

for(let i = 2;i < process.argv.length; i++){
  if(process.argv[i] == '-y') {
    year = process.argv[i+1]
  } else if(process.argv[i] == '-m') {
    month = process.argv[i+1]
  }
}
let first_day = new Date(year, month, 2)
let last_day = new Date(year, month + 1, 0)

console.log((first_day.getMonth() + "月 " + first_day.getFullYear()).padStart(15));
console.log("日 月 火 水 木 金 土");

let first_week = ' '
for (let i = 1; i <= 8-first_day.getDay(); i++){
  first_week = first_week.concat(' ')
  first_week = first_week.concat(String(i).padStart(2))
}
console.log(first_week.padStart(20))

for (let i = 0; i < 4; i++){
  let week = ''
  for(let j = 1; j < 8; j++){
    if (last_day.getDate() < 8-first_day.getDay() + j + i * 7){
      break;
    }
    week = week.concat(String(8-first_day.getDay() + j + i * 7).padStart(2))
    week = week.concat(' ')
  }
  console.log(week)
}
