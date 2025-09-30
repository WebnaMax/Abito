const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Пвх материал 1й сорт',
        price: '160 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '15 июля 11:39',
        img: './images/productImage.png',
    },
    {
        id: 1,
        title: 'Пвх материал 2й сорт',
        price: '170 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '10 июня 16:51',
        img: './images/productImage.png',
    },
    {
        id: 2,
        title: 'Пвх материал 3й сорт',
        price: '180 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '29 июля 09:11',
        img: './images/productImage.png',
    },
    {
        id: 3,
        title: 'Пвх материал 4й сорт',
        price: '190 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '30 июня 11:22',
        img: './images/productImage.png',
    },
    {
        id: 4,
        title: 'Пвх материал 5й сорт',
        price: '200 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '24 июля 18:39',
        img: './images/productImage.png',
    },
    {
        id: 5,
        title: 'Пвх материал 6й сорт',
        price: '210 ₽',
        adress: 'Казань, р-н Вахитовский',
        date: '1 июля 08:52',
        img: './images/productImage.png',
    },

];


const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item, index) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="product">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.adress}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>
        `)
    })
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value);
    });
}

cardWrapper.style.justifyContent = 'flex-start';

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));

})