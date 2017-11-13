var name = "Kent"
var holiday = "Thanksgiving"
var days = 14
function happyHolidays() {
  return 'Happy holidays!'
}
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
function happyCountdown(holiday, days) {
  return `Happy ${holiday}, ${days}!`
}