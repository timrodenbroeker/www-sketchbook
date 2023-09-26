var imgFilenamesRemote = [
    "https://timrodenbroeker.de/wp-content/uploads/2019/07/creative_coding_essentials.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2020/11/forloopthumb-2.png",
    "https://timrodenbroeker.de/wp-content/uploads/2020/10/waves4.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2020/03/ttd.png",
    "https://timrodenbroeker.de/wp-content/uploads/2020/08/typemachines_thumbnail.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2021/01/colorsep3.png",
    "https://timrodenbroeker.de/wp-content/uploads/2021/05/copy_thumb_new.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2020/12/basicdatastructures.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2021/01/gridsystems2.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2022/11/modulocourse.jpg",
    "https://timrodenbroeker.de/wp-content/uploads/2019/03/bach.jpg",
    "https://timrodenbroeker.de/wp-content/uploads/2021/10/layers1.png",
    "https://timrodenbroeker.de/wp-content/uploads/2022/02/asciiadventures.gif",
    "https://timrodenbroeker.de/wp-content/uploads/2021/01/ss2.png",
    "https://timrodenbroeker.de/wp-content/uploads/2020/07/bauhaus.png"
];

var imgFilenamesLocal = [
    "./assets/creative_coding_essentials.gif",
    "./assets/forloopthumb-2.png",
    "./assets/waves4.gif",
    "./assets/ttd.png",
    "./assets/typemachines_thumbnail.gif",
    "./assets/colorsep3.png",
    "./assets/copy_thumb_new.gif",
    "./assets/basicdatastructures.gif",
    "./assets/gridsystems2.gif",
    "./assets/modulocourse.jpg",
    "./assets/bach.jpg",
    "./assets/layers1.png",
    "./assets/asciiadventures.gif",
    "./assets/ss2.png",
    "./assets/bauhaus.png"
];

var imgs = new Array();

function preload() {

    for (let i = 0; i < imgFilenamesLocal.length; i++) {
        imgs[i] = loadImage(imgFilenamesLocal[i]);
    }

}

function setup() {
    var c = createCanvas(windowWidth,windowHeight, WEBGL);
    c.parent("coursesCta");
    for (let i = 0; i < imgFilenamesLocal.length; i++) {
        imgs[i].resize(400,300);
    }
}

function draw() {
    background("#FFFFFF");
    imageMode(CENTER);
    var step = 360 / imgs.length;

    for (let i = 0; i < imgs.length; i++) {
        let mag = 500;
        let vel = frameCount * 0.2;
        let x = sin(radians(i*step + vel)) * mag;
        let y = tan(radians(i*step + vel * 2)) * mag;
        let z = cos(radians(i*step + vel)) * mag;

        push();
        translate(x,y,z);
        image(imgs[i],0,0);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }