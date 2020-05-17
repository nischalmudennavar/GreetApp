const time=document.getElementById('time');
const greeting=document.getElementById('greeting');
const name=document.getElementById('name');
const focus=document.getElementById('focus');


// shoe time 

function showTime()
{
    let today=new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec=today.getSeconds();


    const amPm= hour>=12 ? 'PM' : 'AM';

    hour=hour % 12 || 12;


    time.innerHTML=` ${(hour)}<span>:<span/>${addZero(min)}<span>:<span/>${addZero(sec)} `;

    setTimeout(showTime,1000)

}


function setBGgreet()
{
    let today=new Date(),
      hour=today.getHours();


    if(hour < 12)
    {
        //morning
        var body=document.getElementById('body')
        var pic1= "url('./morning.jpg')"
        body.style.backgroundImage =pic1;
        greeting.innerHTML="Good Morning";


    }else if (hour<18)
    {
        //afternoon
        var body=document.getElementById('body')
    body.style.backgroundImage =" url('./afternoon.jpg') ";

        greeting.innerHTML="Good Afternoon";
    }
    else{
        //evenung
        var body=document.getElementById('body')
      body.style.backgroundImage ="url('./night.jpg')";
        greeting.innerHTML="Good Evening ";
        
    }
}
//add zeros 

function addZero(n)
{
    return (parseInt(n,10)< 10 ? '0' : '') +n;
}


function getName()
{
    if(localStorage.getItem('name') === null)
    {
        name.textContent='[Enter Name]';
    }else
    {
        name.textContent = localStorage.getItem('name');
    }
}
function getFocus()
{
    if(localStorage.getItem('focus') === null)
    {
        focus.textContent='[Enter focus]';
    }else
    {
        focus.textContent = localStorage.getItem('focus');
    }
}



function setName(e)
{
    if(e.type==='keypress')
    {

        if(e.which== 13 || e.keyCode ==13)
        {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }

    }else{

        localStorage.setItem('name',e.target.innerText)
    }
}

function setfocus(e)
{
    if(e.type==='keypress')
    {

        if(e.which== 13 || e.keyCode ==13)
        {
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }

    }else{

        localStorage.setItem('focus',e.target.innerText)
    }
}





name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);

focus.addEventListener('keypress',setfocus);
focus.addEventListener('blur',setfocus);


let quotes=[
    {
        "quote":"A writer is someone for whom writing is more difficult than it is for other people.",
        "author":"Thomas Mann"
    },
    {
        "quote":" Happy Little Accidents ",
        "author":" Bob Ross "
    },
    {
        "quote":"Dreams never fade as long as you make them a reality.",
        "author":"Steven Cuoco"
    },
    {
        "quote":"You can't solve a problem unless you know the problem.",
        "author":"Sheeja Jose"
    }
    
]

const quo=document.getElementById('quotes')
const auth=document.getElementById('author')

function getQuotes()
{
    let number = Math.floor(Math.random() * quotes.length);
    quote.innerHTML=""+quotes[number].quote;
    auth.innerHTML="- "+quotes[number].author;

}



//running
showTime();
setBGgreet();
getName();
getFocus();

setInterval(getQuotes,5000)
