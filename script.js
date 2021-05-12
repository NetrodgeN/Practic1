
'use strict';
let numberOfFilms

function start () {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");
// Проверяет не правдивые варианты использования, если это так, то вопрос повторяется.
// Если пустая строка. Если нажата отмена. Если ввёл не число (абв, аб2, ..., ...)
// цикл повторяется пока цикл правдив
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");
    }
}
start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};



function rememberMyFilms(){for (let i = 0; i <2; i++){
    const lastViewedMovie = prompt("Один из последних посмотренных фильмов?",""),
        ratingFilm = prompt ("На сколько оцените его?","");

    if (lastViewedMovie != null &&
        ratingFilm != null &&
        lastViewedMovie != '' &&
        ratingFilm != '' &&
        lastViewedMovie.length <50){
        personalMovieDB.movies[lastViewedMovie] = ratingFilm;
        console.log ('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log ("Вы киноман");
    }else {
        console.log ("Произошла ошибка");
    }
}
detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB(hidden) {
    // если база не скрыта, то мы её показываем.
    if(!hidden) {
        //приват фолс передаётся в консоль лог, т.к. тут хайден с оператором отрицания
        // обратного превращения то фолс превращается в тру, иф - тру, консоль лог сработает
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres



function writeYourGenres() {
    // всё начинается с 0, но для удобство пользователя пишем с 1.
    //
    for ( let i =1; i <= 3; i++){
        // важно что нужно писать вопрос с бэктиками ``
        const genre = prompt(`Ваш любимый жанр под номером ${i} ?`);
        // если написать просто i, то начнётся с нуля и ноль будет empty.
        personalMovieDB.genres[i - 1] = genre;
    }
};
//Работает также как пример выше, только на доли секунды быстрее.
//function writeYourGenres() {
//     for ( let i =1; i <= 3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`);
//     }
// };
writeYourGenres();
