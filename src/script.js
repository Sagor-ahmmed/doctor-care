// mobile menu functionality add here

const navMenu = document.getElementById('navMenu')
const menuItems = document.getElementById('menuItems')
const menu = document.getElementById('menu')
navMenu.addEventListener('click', () => {
    menuItems.classList.toggle('hidden')
    menu.classList.toggle('hidden')

})




// state section tasks here
const state = [
    {
        title: '+3500',
        para: 'Anos no mercado'
    },
    {
        title: '+15',

        para: 'Anos no mercado'
    },

    {
        title: "+10",

        para: 'Anos no mercado'
    }
]

const stateSection = document.getElementById('state')
const mySate = (data) => {
    return `
    <div class='p-3 text-black text-center'> 
    <h1 class='text-4xl'>${data.title}</h1>
       <p class='text-xl'>${data.para}</p>

    </div>
    
          `
}
stateSection.innerHTML = state.map((data) => mySate(data)).join('')



const cards = [
    {
        title: 'Problemas digestivos500',
        para: 'Anos no Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.'
    },
    {
        title: '+Saúde Hormonal',

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },

    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
    {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    },
     {
        title: "+Saúde Hormonal",

        para: 'Anos Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. mercado'
    }
    
]




const cardsection = document.getElementById('cardsection')

const cardAll=(card)=>{
    return `
    <div class='bg-white text-gray-500 pt-2 pb-2 p-2 border rounded-xl  shadow-xl'>
    
   
      <h1 class='text-xl text-center text-black' >${card.title}</h1>
       <p class='text-xs text-justify'>${card.para}</p>
    
    
    </div>
          `
}


cardsection.innerHTML=cards.map((card)=>cardAll(card)).join('')

// footer added
const r=document.getElementById('date')
const date = new Date();
const year=date.getFullYear()
console.log(year)
r.innerText=year;