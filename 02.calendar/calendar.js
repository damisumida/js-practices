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
let last_day = new Date(year, month + 1, 1)

console.log(year + "年" + String(month + 1) + "月");
console.log("日 月 火 水 木 金 土");
let first_week = ' '
for (let i = 1; i <= 8-first_day.getDay(); i++){
  first_week = first_week.concat(String(i).padStart(3))
}
console.log(first_week.padStart(21))
console.log(last_day)
