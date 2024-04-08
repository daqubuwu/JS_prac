const convertMsToDays = (ms) => Math.floor(ms/(24*60*60*1000));

const getDaysB4Bthday = (nextBirthDate) => {
  const birthDate = new Date(nextBirthDate).getTime();
  
  return convertMsToDays(birthDate - new Date().getTime());
};

alert(getDaysB4Bthday("2024-05-05"));