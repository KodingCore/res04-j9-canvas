function exercice6()
{
    /*
    let yellow = "#FFD65B";
    
    Vous avez dans les fichiers des exercices, un fichier pacman.png avec un pacman bouche ouverte d'environ 100px de rayon.

    Faites en sorte de lui faire ouvrir et fermer la bouche toutes les secondes, et faites en sorte que le fond de votre canvas soit gris foncÃ©.
    */
    let canvas = document.querySelector("#ex6");
    let ctx = canvas.getContext("2d");
    
    canvas.style.backgroundColor = "grey";
    
    let myImg = document.createElement("img");
    canvas.appendChild(myImg);

    // On dÃ©finie la source de cette image
    myImg.src = 'pacman.png';

    // Quand l'image est chargÃ©e par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg,canvas.width/2 - myImg.naturalWidth / 2,canvas.height/2 - myImg.naturalHeight / 2);
    };
}

function exercice5()
{
    let canvas = document.querySelector("#ex5");
    let ctx = canvas.getContext("2d");
    
    let circle = {
        color: "blue",
        radius: 10,
        x:canvas.width/2,
        y:canvas.height/2,
    }
    
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
    
    let tailleDeBase = circle.radius;
    console.log(tailleDeBase);
    
    let idInterval = setInterval(function()
    {
        
        if(circle.radius >= canvas.width/4)
        {
            clearInterval(idInterval);
        }
        else
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circle.radius += 10;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
            
            ctx.fill();
        }
        
    }, 100);
}

function exercice4()
{
    let canvas = document.querySelector("#ex4");
    
    let circle = {
        color: "blue",
        radius:100,
        x:canvas.width/2,
        y:canvas.height/2
    };
    
    let ctx = canvas.getContext("2d");
    
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
    
    let positionDeBase = canvas.getBoundingClientRect();
    console.log(positionDeBase);
    
    let idInterval = setInterval(function()
    {
        
        if(circle.x === canvas.width/2 - 150)
        {
            clearInterval(idInterval);
        }
        else
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circle.x -= 10;
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
            
            ctx.fill();
        }
        
    }, 100);
}

function exercice3()
{
    
    let canvas = document.querySelector('#ex3');

    let ctx = canvas.getContext('2d');
    
    ctx.width = canvas.width;
    ctx.height = canvas.height;

    ctx.font = "bold 68px Montserrat";

    ctx.fillStyle = "black";

    ctx.fillText("Geometry.io", 0, canvas.height/2);
}

function exercice2()
{
    let canvas = document.querySelector("#ex2");
    
    let circle = {
        color: "blue",
        radius:100,
        x:canvas.width/2,
        y:canvas.height/2
    };
    
    let ctx = canvas.getContext("2d");
    
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fill();
}

function exercice1()
{
    let canvas = document.querySelector("#ex1");
    
    let ctx = canvas.getContext("2d");
    
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    ctx.fillStyle  =  "red";
    ctx.fillRect(100, 50, 200, 200);
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(let canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});