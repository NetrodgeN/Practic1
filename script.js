/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
""*/


'use strict';



const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?","");
    // Проверяет не правдивые варианты использования, если это так, то вопрос повторяется.
    // Если пустая строка. Если нажата отмена. Если ввёл не число (абв, аб2, ..., ...)
    // цикл повторяется пока цикл правдив
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?","");
        }
    },
    rememberMyFilms: function()
        {for (let i = 0; i <2; i++){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log ("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count >= 30) {
            console.log ("Вы киноман");
        }else {
            console.log ("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        // если база не скрыта, то мы её показываем.
        if(!hidden) {
            //приват фолс передаётся в консоль лог, т.к. тут хайден с оператором отрицания
            // обратного превращения то фолс превращается в тру, иф - тру, консоль лог сработает
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // всё начинается с 0, но для удобство пользователя пишем с 1.
        //
        for ( let i =1; i <= 3; i++){
            // важно что нужно писать вопрос с бэктиками ``
            const genre = prompt(`Ваш любимый жанр под номером ${i} ?`);

            if (genre === '' || genre === null){
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                // если написать просто i, то начнётся с нуля и ноль будет empty.
                personalMovieDB.genres[i - 1] = genre;
            }
          
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
