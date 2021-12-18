// start with loading all the content 

document.addEventListener('DOMContentLoaded', () => {
// create a list of constants to use them in images grid 
    const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    },
    {
        name: 'java',
        img: 'images/java.png'
    },
    {
        name: 'node',
        img: 'images/node.png'
    },
    {
        name: 'node',
        img: 'images/node.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'react',
        img: 'images/react.png'
    },
    {
        name: 'react',
        img: 'images/react.png'
    },
    ]
    // we use random to sort randemly the images
    cardArray.sort(() => 0.5 - Math.random())

    // empty arrays and some constents
    // use them like a box 
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [] // here to add the cards chosen
    let cardsChosenId = [] // here to add the ids of cards chosen
    let cardsWon = [] // the cards won



    // creat image element , with 2 attributes src and id then add them to the card

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/background.png')
            card.setAttribute('data-id', i)
            // when u click , the flipcard start runing
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    // select all yhe images and add them to a const , give the first cart chosen to a 1st const and same with 2nd

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
    // when the user click on the same image then replace the image with the background and alert him

        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/background.png')
          cards[optionTwoId].setAttribute('src', 'images/background.png')

        
          alert('You have clicked the same image!')
        }
// check if the 2 images are same by see chosen card
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          //edit the images 
          cards[optionOneId].setAttribute('src', 'images/white.png')
          cards[optionTwoId].setAttribute('src', 'images/white.png')

          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          // add cards chosen to won list 
          cardsWon.push(cardsChosen)
        }
// replace the images with background 
        else {
            cards[optionOneId].setAttribute('src', 'images/background.png')
            cards[optionTwoId].setAttribute('src', 'images/background.png')
            alert('try again')
        }
        cardsChosen = []
        cardsChosenId = []

        // get the h3 of result
        
// display the result 
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent= 'يا سلام عالكلام '
        }

    }

    // creat var and add id to it , add card by id on the empty array of chosen cards,
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
// to the empty array of chosen card's id we add the cards id , then edit the image by set the id image 
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
// allowed you to chose 2 iamges after that start check for match
        if (cardsChosen.length===2){
            setTimeout(checkForMatch , 500)
        }
    }
// call the function to return the card

    createBoard()
        























})