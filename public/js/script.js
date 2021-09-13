const isEmpty = (obj) => {
    for(let key in obj){
        return false
    }
    return true
}

let task = document.querySelector(".task__text")
let score = document.querySelector(".score")

const getNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)

let questionArray = ["4 этажа: В доме 4 этажа, чем выше этаж, тем больше человек там живёт. На какой этаж чаще ездит лифт?","Что должно стоять на месте знака вопроса?, 6636/3, 8118/4, 2242/0, 3316/?","Какое число идёт дальше? 10, 9, 60, 90, 70, 66,..","Сколько чисел от 1 до 1000 содержат как минимум одну цифру 3?","Печать царя Соломона. На гробнице мудрого легендарного библейского царя Соломона потомки изобразили знаменитую печать правителя. Сколько равносторонних треугольников изображено на печати?","Пропорция, полученная делением величины на две части таким образом, при котором отношение большей части к меньшей равно отношению всей величины к её большей части.","Бейсбольный мяч с битой вместе стоят $13. Но мяч дешевле бейсбольной биты на $3. Рассчитайте стоимость каждого предмета. (в ответ запишите сначала цену мяча, после цену биты без пробела и без $, например: 133)","Операционная система, в которой работают хакеры.","0 день(Zero Day) - это?(одно обобщающие слово).","https & http  что лучше?","Стена&Экран, который обеспечивает безопасность следя за исходящем и выходящем трафиком в сети.","Название сайта, на котором обучаются студенты?","Налог на самозанятых (для юр.лиц, в %). Ответ записать в виде числа","Общее количество групп первых и вторых курсов IThub","Кто бот-мастер в колледже? (запиши имя и фамилию с больших букв через пробел)","Стоимость набора “Хеллоу хабс” с 40% скидкой (ответ в рублях)","Расшифруй: “Са ихшзнй”","Производительность труда повысили на 25%. На сколько процентов уменьшится время выполнения задания?","Расход предприятия по итогам любых пяти подряд идущих месяцев оказался больше дохода. Может ли случиться так, чтобы по итогам года доход превысил расход? (Да/Нет)","На какое максимальное количество частей можно разделить пиццу за шесть разрезов?","Положительное число увеличивается в 19 раз, если в его десятичной записи поменять местами цифры, стоящие на первом и третьем местах после запятой. Найдите третью цифру после запятой в десятичной записи этого числа.","На часах Клауса минутные деления нанесено небольшими штрихами. Глянув на часы на шестом часу после полудня, Клаус обнаружил, что большая стрелка отстает от малой на 3 деления. Сколько было на часах?","Один наблюдательный сотрудник заметил, что участники заседания поздоровались каждый с каждым и вышло 78 рукопожатий. Сколько всего было участников?","Чему равна одна треть от одной четвёртой от одной пятой от половины от 120?","Лозунг ИБ","Для нумерации страниц в учебнике понадобилось 534 цифры. Сколько страниц в учебнике?","Два теплохода одновременно вышли из портов и с постоянной скоростью движутся во встречном направлении. Скорость одного теплохода 20 км/час, другого – 30 км/час. На каком расстоянии друг от друга они будут находиться ровно за один час до их встречи?","Две фирмы предлагают вам работу и обе обещают начальную зарплату 180 тысяч рублей в год. Первая фирма гарантирует ежегодное увеличение зарплаты на 20 тысяч рублей. Вторая фирма обещает каждые полгода добавлять по 5 тысяч рублей.","В мельнице было восемь мешков, на каждом мешке сидело по две мыши, пришел мельник с котом, сколько теперь стало ног?","Один продавец продавал машину за 1100$, но у него никто ее не покупал. Затем он сбавил цену до 880$. Опять нет покупателя. Снова сбавил до 704$. Покупателя и за такую цену найти не удалось. Еще раз снизив цену, ему все таки удалось продать автомобиль. Так сколько заплатили за автомобиль?","Можно ли разделить на 3 сумму одиннадцати тысяч, одиннадцати сотен и одиннадцати?","На листке написано двузначное число. Если листок перевернуть вверх ногами, число уменьшится на 75. Какое число написано на листке?","Четыре студента были наняты, чтобы выполнить задание согласно графику. Каждый из них работает с одинаковой скоростью, но после первого дня работы два студента ушли. Два оставшихся студента могут закончить выполнение работы на два дня позже запланированного срока. Сколько дней было первоначально запланировано для выполнения задания?"]

const answerArray = ["1","1","96","271","31","1,618","58","Kali Linux","Уязвимость","https","Firewall","Булгаков","6","40","Антон Хрипунов","348","Мы другие","20","Да","22","0,9405","17:24","13","1","За ИБ","214","50км","2","2","563,20$","Да","91","3"]

let userQuestion

const generateQuestion = (userQuestion) => {
    userQuestion = questionArray[getNumber(0, questionArray.length)]
    return userQuestion
}

let errorButton = document.querySelector(".error__button")

let errorBlock = document.querySelector(".error")
let loginBlock = document.querySelector(".login")
let taskBlock = document.querySelector(".task")

errorButton.addEventListener("click", event => {
    errorBlock.style.display = "none"
    taskBlock.style.display = "block"
})
const err = () => {
    taskBlock.style.display = "none"
    errorBlock.style.display = "flex"
}


const send = async(body) => {
    let res = await fetch("/api", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
}

const take = async () => {
    let res = await fetch("/api");
    let data = await res.json();
    data.forEach(element => {
        if(element.email === body.email){
            body.score = element.score
            body.question = element.question
            body.finish = element.finish
            task.innerHTML = element.question
            let lvl = document.querySelectorAll(".header__lvl")
            if(body.score >= 16){
                loginBlock.style.display = "none"
                taskBlock.style.display = "none"
                score.style.display = "flex"
                let standart = "1970-01-01T00:00:00.000Z"
                if(body.finish == standart){
                    body.finish = element.updatedAt
                    update(body)
                }
                for(let i = 0; i <= body.score; i++){
                    lvl[i].className += " disable"
                }
            } else {
                lvl[body.score].className += " active"
                if(loginBlock.style.display !== "none"){
                    loginBlock.style.display = "none"
                    taskBlock.style.display = "block"
                }
                for(let i = 0; i < body.score; i++){
                    lvl[i].className += " disable"
                }
            }
        }
    })
}


const user = document.forms.loginUser

const answer = document.forms.answerUser

let body = {}

user.addEventListener("submit", event => {
    event.preventDefault()
    for(let i = 0; i < event.target.elements.length; i++){
        let element = event.target.elements[i]
        if (element.name){
            if(element.value.length !== 0) {
                body[element.name] = element.value
                body.question = generateQuestion(userQuestion)
            }
        }
    }
    if(isEmpty(body) === false){
        send(body)
        body.score = 0
        take()
    }
})

const updateData = (event, ele) => {

    event.preventDefault()
    for(let i = 0; i < event.target.elements.length; i++){
        let element = event.target.elements[i]
        if (element.name){
            if(element.value.length !== 0) {
                let qw = body.question
                for(let i = 0; i < questionArray.length; i++){
                    if(qw === questionArray[i]) {
                        if (ele.value === answerArray[i]) {
                            body.score++
                            body.question = generateQuestion(userQuestion)
                        }
                        if (ele.value !== answerArray[i]) {
                            err()
                        }
                    }
                }
            }
        }
    }
    if(isEmpty(body) === false){
        if(body.score === 16){
            taskBlock.style.display = "none"
            score.style.display = "flex"
        }
        update(body)
        take()
        ele.value = ""
    }
}
const update = async (body) => {

   await fetch("/api/update", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
}

answer.addEventListener("submit", event => {
    let element = document.querySelector(".task__answer")
    updateData(event, element)
})
