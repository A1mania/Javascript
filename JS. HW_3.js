// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


    for(let i=1; i<11; i++){
            console.log(Math.pow(2, i))
    }

    // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
    
    let i
    const checkExp = function exponent(i) {
        if(typeof(i) == 'number'){
                console.log(Math.pow(2, i))
      }
    }
checkExp(3)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
   
mm = [':)',':):)',':):):)',':):):):)',':):):):):)']
   for(let i=0; i<5; i++){
            console.log(mm[i])
    }

    // второй способ

let a = '';
       for(let i=0; i<5; i++){
            console.log(a +=':)')
    }

//     2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

mm = [':)',':):)',':):):)',':):):):)',':):):):):)']
const printSmile = function Smile(i,numberOfRows) {  
for(let i=0; i<numberOfRows; i++)
            console.log(mm[i])
}

// printSmile(':):)',2)
printSmile(':):):):)',4)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

let v = ['a','e','i','o','u']
let c = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let vCount = 0
let cCount = 0
    const getWordStructure = function getWordStructure(word){
        word = word.toLowerCase();
        for (let i = 0; i <= word.length - 1; i++){
                        if (v.includes(word[i])){                 
                           vCount++
                        }
                         else if (c.includes(word[i])){
                        cCount++
                         }

        }
            console.log('Слово ' + word + ' состоит из ' + vCount + ' гласных и ' + cCount + ' согласных букв')}

    // getWordStructure('case')
    // getWordStructure('Case')
    getWordStructure('Check-list')