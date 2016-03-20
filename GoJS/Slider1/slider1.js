/**  Created by Misha on 06.08.2015 */
function Slider(selector, options) {
    var self = this;

    var sliderNode = document.querySelector(selector);
    var sliderImagesNode = document.querySelector('.slider__images-wrap');
    var prevSlideNode = document.querySelector('.slider__pager_previous');
    var nextSlideNode = document.querySelector('.slider__pager_next');
    var paginatorNode = document.querySelector('.slider__pagination');


    var imagesCount = sliderImagesNode.children.length;
    var imageWidth = sliderImagesNode.offsetWidth;

    var currentSlideIndex = 0;

    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) return;
        currentSlideIndex++;
    };

    this.prevSlide = function () {
        if (currentSlideIndex === 0) return;
        currentSlideIndex--;
    };

    this.__render = function () {
        console.log(currentSlideIndex);
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * imageWidth) + 'px';
        // arrow visibility
        prevSlideNode.style.visibility = (currentSlideIndex === 0) ? 'hidden' : '';
        nextSlideNode.style.visibility = (currentSlideIndex === imagesCount - 1) ? 'hidden' : '';

        //pimpochki
        paginatorNode.querySelector('.active').classList.remove('active');
        paginatorNode
            .children[currentSlideIndex]
            .querySelector('a')
            .classList.add('active');
    };

    nextSlideNode.onclick = function () {
        self.nextSlide();
        self.__render();
    };

    prevSlideNode.onclick = function () {
        self.prevSlide();
        self.__render();

    };

    paginatorNode.onclick = function (event) {
        var link = event.target;
        if (link.tagName != 'A') return;
        currentSlideIndex = +link.dataset.slider__item;
        self.__render();
    };

    this.__render();

    // auto prokrutka
    /*if (options.changeInterval) {
        var timerId;
        var startAutoSlide = function () {
            // delete Arrow
            prevSlideNode.style.display = 'none';
            nextSlideNode.style.display = 'none';
            timerId = setInterval(function () {
                self.nextSlide();
                self.__render();
            }, options.changeInterval)
        };

        startAutoSlide();

        sliderNode.onmousemove = function () {
            prevSlideNode.style.display = '';
            nextSlideNode.style.display = '';
            clearInterval(timerId);
        };

        sliderImagesNode.onmouseout = function () {
            startAutoSlide();
        };

    }*/
    sliderImagesNode.style.transition = 'margin-left linear .5s'

}

