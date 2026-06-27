  const cardArray = [
    { name: "fruit1", img: "images/fruit1.jpg" },
    { name: "fruit2", img: "images/fruit2.jpg" },
    { name: "fruit3", img: "images/fruit3.jpg" },
    { name: "fruit4", img: "images/fruit4.jpg" },
    // { name: "fruit5", img: "images/fruit5.jpg" },
    // { name: "fruit6", img: "images/fruit6.jpg" },
    // { name: "fruit7", img: "images/fruit7.jpg" },
    // { name: "fruit8", img: "images/fruit8.jpg" },
    // { name: "fruit9", img: "images/fruit9.jpg" },
    // { name: "fruit10", img: "images/fruit10.jpg" },
    // { name: "fruit11", img: "images/fruit11.jpg" },
    // { name: "fruit12", img: "images/fruit12.jpg" },
    // { name: "fruit13", img: "images/fruit13.jpg" },
    // { name: "fruit14", img: "images/fruit14.jpg" },
    // { name: "fruit15", img: "images/fruit15.jpg" },
    // { name: "fruit16", img: "images/fruit16.jpg" },
    // { name: "fruit17", img: "images/fruit17.jpg" },
    // { name: "fruit18", img: "images/fruit18.jpg" },
    // { name: "fruit19", img: "images/fruit19.jpg" },
    // { name: "fruit20", img: "images/fruit20.jpg" },
    // { name: "fruit21", img: "images/fruit21.jpg" },
    // { name: "fruit22", img: "images/fruit22.jpg" },
    // { name: "fruit23", img: "images/fruit23.jpg" },
    // { name: "fruit24", img: "images/fruit24.jpg" },
    // { name: "fruit25", img: "images/fruit25.jpg" },

]
    const delay=1500;
    let firstGuess= '';
    let secondGuess= '';
    let count=0;
    let prevTarget =null;

    const game =document.querySelector('.gameBoard');
    const gameGrid= shuffleArray(cardArray.concat(cardArray));

    function shuffleArray(array){
    return array.sort(()=>0.5-Math.random());
    }

    function createCards(item){
        const card=document.createElement('div');
        card.classList.add('card');
        card.dataset.name=item.name;

        const front=document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage=`url(${item.img})`;

        card.appendChild(front);
        card.appendChild(back);

        return card;
    }
    function initGameBoard(){
        gameGrid.forEach(item =>{
            const card=createCards(item);
            game.appendChild(card);
        })
    }
    function handleCardClick(event){
    const clicked =event.target;
    if(clicked.nodeName==='SECTION' || clicked===prevTarget|| clicked.parentNode.classList.contains('match')|| clicked.parentNode.classList.contains('selected')){
    return;
    }
    if(count<2){
        count++;
        clicked.parentNode.classList.add('selected','flipped');
        if(count===1){
            firstGuess=clicked.parentNode.dataset.name;
        }else{
            secondGuess=clicked.parentNode.dataset.name;
        if(firstGuess&& secondGuess){
            if(firstGuess=== secondGuess){
                setTimeout(match,delay);
            }
            setTimeout(resetGuess,delay);
    }
    }
    prevTarget===clicked;
    }
    }

    function match(){
    const selected=document.querySelectorAll('.selected');
    selected.forEach(card=>card.classList.add('match'));
    }

    function resetGuess(){
    firstGuess='';
    secondGuess='';
    count=0;
    prevTarget=null;

    const selected=document.querySelectorAll('.selected');
    selected.forEach(card=>card.classList.remove('selected','flipped'));
    }

    game.addEventListener('click',handleCardClick);
    
    initGameBoard();




