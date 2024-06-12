// Write the code as shown in the video below:
const mainHeading=document.querySelector('#main-heading');

mainHeading.style.textAlign='right';
const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='5px';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';
//const basketHeading=document.querySelector('h2');
//basketHeading.style.marginLeft='30px';

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++)
  {
    fruitItems[i].style.background="white";
   // fruitItems[i].style.textColor="white";
    fruitItems[i].style.padding='50px';
    fruitItems[i].style.margin='50px';
    fruitItems[i].style.borderRadius='5px';
    }

  
// Write answer to the questions asked below:
const basketHeading=document.querySelector('h2');
basketHeading.style.color='brown';

const EvenFruitItems=document.querySelectorAll('.fruit:nth-child(even');
for(let i=0;i<EvenFruitItems.length;i++)
  {
    EvenFruitItems[i].style.backgroundColor="brown";
     EvenFruitItems[i].style.color="white";
    
  }