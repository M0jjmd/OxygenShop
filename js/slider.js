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

    goToImage(index) {
        this.imgNum = index;
        return this.imgs[this.imgNum];
    }

    currentImg() {
        return this.imgNum;
    }
}

const slideshow = () => {
    const slider = new Slider();
    const sliderContainer = document.getElementById('slider');
    const indicatorsContainer = document.getElementById('indicators');
    let interval;

    const createIndicators = () => {
            for (let i = 0; i < slider.imgs.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (i === slider.currentImg()) {
                dot.classList.add('active');
            }

            dot.addEventListener('click', () => {
                slider.nextImg();
                stopAutoSlide();
                const imageUrl = slider.goToImage(i);
                changeImage(imageUrl);
                startAutoSlide();
            });
            indicatorsContainer.appendChild(dot);
        }
    };

    const updateIndicators = () => {
        const dots = document.getElementsByClassName('dot');
        console.log(slider.imgs.length)
        for (let i = 0; i < slider.imgNum.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[slider.currentImg()].classList.add('active');
    };

    const changeImage = (imageUrl) => {
        sliderContainer.innerHTML = '';
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

        sliderContainer.appendChild(imageDiv);

        updateIndicators();
    };

    const startAutoSlide = () => {
        interval = setInterval(() => {
            const imageUrl = slider.nextImg();
            changeImage(imageUrl);
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    document.getElementById('prev').addEventListener('click', () => {
        stopAutoSlide();
        const imageUrl = slider.prevImg();
        changeImage(imageUrl);
        startAutoSlide();
    });

    document.getElementById('next').addEventListener('click', () => {
        stopAutoSlide();
        const imageUrl = slider.nextImg();
        changeImage(imageUrl);
        startAutoSlide();
    });

    createIndicators();

    changeImage(slider.imgNum[slider.currentImg()]);

    startAutoSlide();
};