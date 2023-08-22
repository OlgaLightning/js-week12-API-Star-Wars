//Получаем доступ к DOM (форме и кнопке)

const selectInput = document.querySelector('#item');
const insertNumber = document.querySelector('#numbers');
const button = document.querySelector('.btn');

//Вешаем подслушку на кнопку

button.addEventListener('click', function () {

    //Назначаем переменные для получения введенных пользователем данных

    const selectedItem = selectInput.value;
    const selectedNumber = insertNumber.value;

    const answer = document.querySelector('.answer');

    //Опустошаем предыдущие записи

    answer.innerHTML = '';

    //Условие запроса на получение данных о планетах, людях и фильмах с сервера 

    if (selectedItem === 'Planets' && selectedNumber >= 1 && selectedNumber <= 10) {
        for (let i = 1; i <= 10; i++) {
            fetch('https://swapi.dev/api/planets/')
                .then(response => response.json())
                .then(data => {
                    answer.textContent = ` Name: ${data.name}`;
                })
                .catch(error => console.log('Error!', error))
        }
    } else if (selectedItem === 'People' && selectedNumber >= 1 && selectedNumber <= 10) {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(data => {
                answer.textContent = ` Character: ${data.name}`;
            })
            .catch(error => console.log('Error!', error))
    } else if (selectedItem === 'Films' && selectedNumber >= 1 && selectedNumber <= 10) {
        fetch('https://swapi.dev/api/films/1')
            .then(response => response.json())
            .then(data => {
                answer.textContent = ` Film: ${data.title}`;
            })
            .catch(error => console.log('Error!', error))
    } else {
        answer.textContent = 'Error 404';
        answer.style.background = 'red';
    }

})