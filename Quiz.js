let questionbox=document.getElementById('questions')
let op1=document.getElementById('one')
let op2=document.getElementById('two')
let op3=document.getElementById('three')
let op4=document.getElementById('four')
let nextque=document.getElementById('next')
quizquestions=[
    {
        q: "How many pieces are there on the board at the start of a game of chess?",
        a:"16",
        b:"20",
        c:"32",
        d: "36",
        cor: "32"
    },
    {
        q: "What is the name of the corgi in Cowboy Bebop?",
        a:"Einstein",
        b:"Edward",
        c:"Rocket",
        d: "Joel",
        cor: "Einstein"
    },
    {
        q: "What model was the sports car gifted to Yuri Gagarin by the French government in 1965?",
        a:"AC Cobra",
        b:"Alpine A110",
        c:"Porsche 911",
        d: "Matra Djet",
        cor: "Matra Djet"
    },
    {
        q: "Sean Bean voices the character of Martin Septim in which Elder Scrolls game?",
        a:"The Elder Scrolls III: Morrowind",
        b:"The Elder Scrolls V: Skyrim",
        c:"The Elder Scrolls IV: Oblivion",
        d: "The Elder Scrolls Online",
        cor: "The Elder Scrolls IV: Oblivion"
    },
    {
        q: "What is the official national language of Pakistan?",
        a:"Urdu",
        b:"Indian",
        c:"Pashto",
        d: "Punjabi",
        cor: "Urdu"
    },
    {
        q:"Which former US president was nicknamed Teddy; after he refused to shoot a defenseless black bear?",
        a:"Andrew Jackson",
        b:"Theodore Roosevelt",
        c:"Woodrow Wilson",
        d:"James F. Fielder",
        cor:"Theodore Roosevelt"
    },
    {
        q:"Which soccer player is featured on the cover of EA Sports' FIFA 18?",
        a:"Neymar",
        b:"Lionel Messi",
        c:"Cristiano Ronaldo",
        d:"Harry Kane",
        cor:"Cristiano Ronaldo"
    },
    {
        q:"What war is Call Of Duty: Black Ops based on?",
        a:"WW1",
        b:"Cold War",
        c:"WW3",
        d:"Vietnam",
        cor:"Cold War"
    }
];
let pick
let i=0
let scorenum=0
score.textContent= `Score: ${scorenum}`
loadquestion()
function loadquestion()
{
if(i < quizquestions.length)
{
questionbox.textContent= quizquestions[i].q
op1.textContent= quizquestions[i].a
op2.textContent= quizquestions[i].b
op3.textContent= quizquestions[i].c
op4.textContent= quizquestions[i].d
op1.addEventListener('click',assign1)
op2.addEventListener('click',assign2)
op3.addEventListener('click',assign3)
op4.addEventListener('click',assign4)
if(i==(quizquestions.length-1)){
    nextque.textContent= `Submit`
}
nextque.addEventListener('click',toggleque)
}
else
{
    document.getElementById('one').style.display="none";
    document.getElementById('two').style.display="none";
    document.getElementById('three').style.display="none";
    document.getElementById('four').style.display="none";
    document.getElementById('questions').style.display="none";
    document.getElementById('next').style.display="none";
    score.textContent= `Final Score: ${scorenum}`
}
}
function toggleque(){
    checkans()
    i++
   loadquestion()
}
function assign1(){
    pick=op1.textContent
}
function assign2(){
    pick=op2.textContent
}
function assign3(){
    pick=op3.textContent
}
function assign4(){
    pick=op4.textContent
}

function checkans(){
    if(pick==quizquestions[i].cor)
    {
    scorenum++
    score.textContent= `Score: ${scorenum}`
    }

}