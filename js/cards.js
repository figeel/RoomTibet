// Данные карточек
const cardsData = [
    {
        background: 'url(img/cards/card-background01.jpeg)',
        title: 'Озеро возле гор',
        description: 'романтическое приключение',
        price: '480 $',
        full_description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.'
    },
    {
        background: 'url(img/cards/card-background02.jpeg)',
        title: 'Ночь в горах',
        description: 'в компании друзей',
        price: '500 $',
        full_description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.'
    },
    {
        background: 'url(img/cards/card-background03.jpeg)',
        title: 'Йога в горах',
        description: 'для тех, кто забоится о себе',
        price: '230 $',
        full_description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.'
    },
    // Добавляйте новые объекты для новых карточек
];

// Функция создания карточки
function createCard(card) {
    return `
        <div class="popular-ways-card" style="background-image: ${card.background}">
            <div class="card-content">
                <div class="card-content-visible">
                    <div class="popular-ways-card-text">
                        <p class="card-title">${card.title}</p>
                        <p class="card-description">${card.description}</p>
                    </div>
                    <div class="card-price">
                        <p class="card-price-text">${card.price}</p>
                    </div>
                </div>
                <div class="card-full-description">
                    <p class="card-full-description-text">${card.full_description}</p>
                </div>
                <a href="#!" class="button card-button">Программа тура</a>
            </div>
        </div>
    `;
}

// Функция рендера всех карточек
function renderCards() {
    const container = document.querySelector('.popular-ways-cards');
    container.innerHTML = cardsData.map(card => createCard(card)).join('');
}

// Первоначальный рендер
renderCards();

// Для добавления новой карточки просто добавьте новый объект в cardsData и вызовите renderCards()
// Пример:
// cardsData.push({
//     background: 'url(../img/new-image.jpg)',
//     title: 'Новый тур',
//     description: 'новое описание',
//     price: '999 $'
// });
// renderCards();   