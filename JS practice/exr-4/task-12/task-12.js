const MyName='Денис'
const programmingLanguage = 'JavaScript'
const courseCreatorName= 'Nikita Sergeevich'
const reasonText='Money Money Money'
const numberOfMonth= 0
let myInfoText=`Всем привет! Меня зовут, ${MyName}.Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разботчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage}
${numberOfMonth} месяцев.
Я уверен, что пройду данный курс до конца!`

myInfoText=myInfoText.replaceAll('javaScript', 'JAVASCRIPT');
console.log(myInfoText)
console.log (myInfoText.length)
console.log(myInfoText.charAt(0))
console.log(myInfoText.charAt(myInfoText.length -1))
