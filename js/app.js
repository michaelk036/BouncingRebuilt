let speed = 18;
let scale = 0.15;
//let speed = 19; Reefscape
//let scale = 1; Reefscape
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 200,
    y: 300,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    //dvd.img.src = 'reef-scape.svg'; Reefscape
    dvd.img.src = 'rebuilt.png';
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;

        checkHitBox();
        update();   
    }, speed)
}


function checkHitBox(){
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }    
}

function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}
