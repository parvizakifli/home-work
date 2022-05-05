// 1. Написать функцию, которая принимает один числовой параметр - количество секунд. В ответ функция возвращает мне объект, в котором записаны количество лет, месяцев, дней, часов, минут и секунд, которые равны отправленному количеству секунд. К примеру, если отправить туда 86500, то в ответе я получу объект с значениями years = 0, months = 0, days = 1, hours = 0, minutes = 1, seconds = 40. Потому что 86400 это ровно 24 часа, то есть сутки, поэтому 1 день, а 100 секунд это одна минута и остаются 40 секунд. Нельзя пользоваться объектом Date

function showNumber(num) {
    let parametrNumber = {
        year: Math.floor(num / 60 / 60 / 24 / 30),
        days: Math.floor(num / 60 / 60 / 24),
        hours: Math.floor(num / 60 / 60) % 24,
        minutes: Math.floor(num / 60) % 60,
        second: Math.floor(num) % 60,
    }
    if (typeof num == 'number' && num > 0) {
       return parametrNumber
    } else {
        console.log('wrong');
    }
}
let result= showNumber(555);
console.log(result);

// 2. Написать функцию, которая принимает один числовой параметр - количество секунд. Функция должна каждую секунду выводить в консоль корректное время в формате ЧАСЫ : МИНУТЫ : СЕКУНДЫ. Если одно из этих значений меньше 10, то выводится 0 перед значением. Например 09, 08 и т.д. Функция выводит это в консоль в течение того времени, которое мы определяем через параметр. Например, если вызвать функцию и отправить туда 10, то вывод будет такой, как на вложенной картинке (рис.1) в течении 10 секунд. Вывод происходит каждую секунду, а не одновременно. Нельзя пользоваться setTimeout, setInterval или темами, которые мы еще не прошли. Можно использовать объект Date и работать с ним. Можете также упомянутый пример посмотреть на видео, которое во вложении (рис.2)

function zero(d){
   return d<10?'0'+d:d
};

function showTime(n){
let times=new Date()
let hours=times.getHours()
let minutes=times.getMinutes()
let second=times.getSeconds()
if(typeof n=='number'){
    let count=0
while(true){
    if(count===n){
        console.log('stop');
        break
    }
    let curentSecond=new Date().getSeconds()
    if(curentSecond!==second){
        second=curentSecond
        count++
        console.log(`Time: ${zero(hours)}:${zero(minutes)}:${zero(second)}`);
    }
   
}
}
};
let getResult=showTime(5)
console.log(getResult);

// 3. Написать функцию, которая принимает нынешнюю дату и возвращает объекты таким образом, чтобы я мог по цепочке вызвать следующий метод и настроить отправленную мной первоначально дату (год, месяц и т.д.). Конкретный пример можно посмотреть на приложенной картинке (рис.3). Если я не отправляю никакого значения, то у меня должно остаться нынешнее значение. То есть если я в метод года ничего не отправлю, то год остается 2022

function setDate(getNumber){
    return{
        year(parametYear){
            return{
                month(parametrMonth){
                    return{
                        day(parametDay){
                            return{
                                hours(parametHours){
                                    return{
                                        minutes(parametMinites){
                                            return{
                                                second(parametrSecond){ 
                                                  if(parametYear) getNumber.setFullYear(parametYear);
                                                  if(parametrMonth) getNumber.setMonth(parametrMonth);
                                                  if(parametDay) getNumber.setDate(parametDay);
                                                  if(parametHours) getNumber.setHours(parametHours);
                                                  if(parametMinites) getNumber.setMinutes(parametMinites);
                                                  if(parametrSecond) getNumber.setSeconds(parametrSecond);
                                                    
                                                }
                                            };
                                        }
                                    };
                                }
                            };
                        }
                    };
                }
            };
        }
    };
};

let dates=new Date();
 setDate(dates).year(1994).month(10).day(19).hours(18).minutes(0).second(5);
console.log(dates);

// 4. Написать функцию внутри объекта, которая выполняет работу JSON.stringify. При отправлении туда объекта или примитивных значений превращает все это в формат JSON. Нельзя пользоваться JSON.stringify / JSON.parse. При отправке объекта предполагаем, что внутри будут только примитивные значения (boolean, number, string, undefined, null), методы и вложенные объекты не будут проверяться! Функция должна возвращать строку и при выводе в консоль должен выходить одинаковый результат с методом stringify объекта JSON. Пример вызова функции и ее вывода можете увидеть в приложенной картинке (рис.4)

let newObject={
    name:'John',
    age:26,
    health:null,
    car:undefined,
    isadmin:false,
    toString(){
      return `name:${this.name},age:${this.age},health:${this.health},car:${this.car},isadmin:${this.isadmin}`
    }
}
console.log(newObject.toString());
 


