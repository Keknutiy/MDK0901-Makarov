//Макаров Анатолий Александрович
let books = document.querySelectorAll('.book');
books[1].style.order = '-1';
books[2].style.order = '2';
books[3].style.order = '1';
books[5].style.order = '1';


books[0].querySelectorAll('li')[books[0].querySelectorAll('li').length-2].after(books[0].querySelectorAll('li')[2]);
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';
books[5].querySelectorAll('li')[books[5].querySelectorAll('li').length-2].before(books[5].querySelectorAll('li')[2]);
books[2].querySelector('ul').append(document.createElement('li').textContent='Глава 8: За пределами ES6');
books[5].querySelectorAll('li')[books[5].querySelectorAll('li').length-1].before(books[5].querySelectorAll('li')[3]);



function sortirovka(event) {
    let sortirovkaSpiska = [];
    for(li in event) {
        for(subLi of event) {
            if(subLi.textContent.includes(`Глава ${li}:`)) {
                sortirovkaSpiska.push(subLi);
            }
        }
    }
    return sortirovkaSpiska
}

sortirovka(books[0].querySelectorAll('li')).reduce(function(prev, it, i, poradok){
    poradok[i-1].after(poradok[i]);
});
sortirovka(books[5].querySelectorAll('li')).reduce(function(prev, it, i, poradok){
    poradok[i-1].after(poradok[i]);
});





document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';
document.querySelector('.adv').remove();