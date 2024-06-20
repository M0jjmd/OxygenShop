class Slider {
    constructor() {
        this.imgs = [
            "./img/slideshow1.jpg",
            "./img/slideshow2.jpg",
            "./img/slideshow3.jpg"
        ];
        this.imgNum = 0;
    }

    nextImg() {
        this.imgNum = (this.imgNum + 1) % this.imgs.length;
        return this.imgs[this.imgNum];
    }

    prevImg() {
        this.imgNum = (this.imgNum - 1 + this.imgs.length) % this.imgs.length;
        return this.imgs[this.imgNum];
    }

    currentImg() {
        return this.imgNum;
    }
}