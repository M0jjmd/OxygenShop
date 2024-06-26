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

    selectedImg(currentImg) {
        this.imgNum = currentImg;
        return this.imgs[this.imgNum];
    }

    currentImg() {
        return this.imgNum;
    }
}

const slideshow = () => {
    const slider = new Slider();
    const sliderCont = document.getElementById('slider');
    const indicatorsCont = document.getElementById('indicators');
    let interval;

    const createIndicators = () => {
        for (let i = 0; i < slider.imgs.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                stopAutoSlide();
                const imageUrl = slider.selectedImg(i);
                changeImg(imageUrl);
                updateIndicators();
                startAutoSlide();
            });
            indicatorsCont.appendChild(dot);
        }
    };

    const updateIndicators = () => {
        const dots = document.getElementsByClassName('dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[slider.currentImg()].classList.add('active');
    };

    const changeImg = (imageUrl) => {
        sliderCont.innerHTML = '';
        if (imageUrl == undefined) {
            imageUrl = "./img/slideshow1.jpg";
        }

        const imageDiv = document.createElement('div');
        imageDiv.className = 'image-container';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Imagen ${slider.currentImg() + 1}`;
        img.className = 'slider-image';

        imageDiv.appendChild(img);

        sliderCont.appendChild(imageDiv);

        updateIndicators();
    };

    const startAutoSlide = () => {
        interval = setInterval(() => {
            const imageUrl = slider.nextImg();
            changeImg(imageUrl);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    document.getElementById('prev').addEventListener('click', () => {
        stopAutoSlide();
        const imageUrl = slider.prevImg();
        changeImg(imageUrl);
        startAutoSlide();
    });

    document.getElementById('next').addEventListener('click', () => {
        stopAutoSlide();
        const imageUrl = slider.nextImg();
        changeImg(imageUrl);
        startAutoSlide();
    });

    createIndicators();

    changeImg(slider.imgNum[slider.currentImg()]);

    startAutoSlide();
};
slideshow();