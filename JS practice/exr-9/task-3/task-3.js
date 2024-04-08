function addDays(date, days = 1) {
  const timestamp = date.getTime();
  const convertDaysToMs = 24*60*60*1000;
  return new Date(timestamp + days * convertDaysToMs);
}

const Date = new Date();
const updateDate = addDays(Date, 6)
alert(updateDate)