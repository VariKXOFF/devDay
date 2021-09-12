const isEmpty = (obj) => {
    for(let key in obj){
        return false
    }
    return true
}

// fetch - на отправку данных

const send = async(body) => {
    let res = await fetch("/api", {  // Вставь сюда адрес к папке, которая обрабатывает запросы
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    console.log(data);
}

const update = async(body) => {
    let res = await fetch("/api/update", {  // Вставь сюда адрес к папке, которая обрабатывает запросы
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    console.log(data);
}

// Отправка формы для входа пользователя

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
                body.score = 0
            }
        }
    }
    if(isEmpty(body) === false){
        user.style.display = "none"
        answer.style.display = "flex"
        send(body)
    }
})

// Отправка формы для ответа пользователя

answer.addEventListener("submit", event => {
    event.preventDefault()
    for(let i = 0; i < event.target.elements.length; i++){
        let element = event.target.elements[i]
        if (element.name){
            if(element.value.length !== 0) {
                body.score++
            }
        }
    }
    if(isEmpty(body) === false){
        update(body)
    }
})

