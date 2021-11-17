{
    function cardMaker(object) {

        let cardContainer = document.getElementById('card_container');

        // created card div to place information into
        let menuCard = document.createElement('article');
        menuCard.classList.add('menuCard');
        let object_json = JSON.stringify(object)
        menuCard.setAttribute('onclick', `handle_click('${object_json}')`);

        let cardImage = document.createElement('img');
        cardImage.src = object.image_src;

        let cardName = document.createElement('h2');
        cardName.innerText = object.name;

        let cardDescription = document.createElement('p');
        cardDescription.innerText = object.description;

        let cardPrice = document.createElement('h5');
        cardPrice.innerText = object.price;


        menuCard.appendChild(cardImage);
        menuCard.appendChild(cardName);
        menuCard.appendChild(cardDescription);
        menuCard.appendChild(cardPrice);
        cardContainer.appendChild(menuCard);
    }

    function handle_click(object_json) {
        console.log('you have clicked');
        Cookies.set('selected_item', object_json);
    }

    let menu_item = {
        name: 'Blackberry',
        description: 'yummy yummy container of blackberries',
        image_src: 'http://loremflickr.com/150/150/blackberry',
        price: 4.00
    };

    cardMaker(menu_item);

    let menu_items = [
        {
            name: 'Blackberry',
            description: 'yummy yummy container of blackberries',
            image_src: 'http://loremflickr.com/150/150/blackberry',
            price: 4.00
        }, {
            name: 'Apple',
            description: 'yummy yummy bag of apples',
            image_src: 'http://loremflickr.com/150/150/apple',
            price: 6.00
        }, {
            name: 'Mint',
            description: 'I am sponsored by Ryan Reynolds',
            image_src: 'http://loremflickr.com/150/150/mint',
            price: 5.00
        }, {
            name: 'Blackberry',
            description: 'yummy yummy container of blackberries',
            image_src: 'http://loremflickr.com/150/150/berry',
            price: 4.50
        }, {
            name: 'Blackberry',
            description: 'yummy yummy container of blackberries',
            image_src: 'http://loremflickr.com/150/150/blackberries',
            price: 4.75
        }
    ];

    for (let i = 0; i < menu_items.length; i++) {
        cardMaker(menu_items[i]);
    }

    let new_menu_item = {
        name: "Hawaiian Pizza",
        description: "A very hawaiian Pizza",
        image_src: "http://lorempixel.com/150/150/abstract/hawaiian%20pizza",
        price: 15,
    }

let new_menu_item_json = JSON.stringify(new_menu_item);
let new_menu_item_parsed = JSON.parse(new_menu_item_json);
}
 
