var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
for(var i = 2;i < process.argv.length; i++){
  if(process.argv[i] == '-m') {
    month = process.argv[i+1]
  }
  if(process.argv[i] == '-y') {
    year = process.argv[i+1]
  }
}

console.log(year + "年" + month + "月")
