{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const canvas = document.getElementById('gameCanvas');\
const context = canvas.getContext('2d');\
canvas.width = window.innerWidth;\
canvas.height = window.innerHeight;\
\
const sushiImages = [\
    'sushi1.png', // Add paths to sushi images\
    'sushi2.png',\
    'sushi3.png',\
];\
\
class Sushi \{\
    constructor(x, y, image) \{\
        this.x = x;\
        this.y = y;\
        this.image = new Image();\
        this.image.src = image;\
        this.width = 50;\
        this.height = 50;\
        this.velocity = \{\
            x: (Math.random() - 0.5) * 4,\
            y: (Math.random() - 0.5) * 4\
        \};\
    \}\
\
    draw() \{\
        context.drawImage(this.image, this.x, this.y, this.width, this.height);\
    \}\
\
    update() \{\
        this.x += this.velocity.x;\
        this.y += this.velocity.y;\
        this.draw();\
    \}\
\}\
\
let sushis = [];\
\
function spawnSushi() \{\
    const x = Math.random() * canvas.width;\
    const y = Math.random() * canvas.height;\
    const image = sushiImages[Math.floor(Math.random() * sushiImages.length)];\
    sushis.push(new Sushi(x, y, image));\
\}\
\
function animate() \{\
    requestAnimationFrame(animate);\
    context.clearRect(0, 0, canvas.width, canvas.height);\
    sushis.forEach((sushi, index) => \{\
        sushi.update();\
        if (sushi.x < 0 || sushi.x > canvas.width || sushi.y < 0 || sushi.y > canvas.height) \{\
            sushis.splice(index, 1);\
        \}\
    \});\
\}\
\
canvas.addEventListener('click', (event) => \{\
    sushis.forEach((sushi, index) => \{\
        if (event.clientX > sushi.x && event.clientX < sushi.x + sushi.width &&\
            event.clientY > sushi.y && event.clientY < sushi.y + sushi.height) \{\
            sushis.splice(index, 1);\
        \}\
    \});\
\});\
\
setInterval(spawnSushi, 1000);\
animate();\
}