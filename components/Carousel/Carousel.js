class Carousel {
  constructor(element) {
    this.carouselElement = element;
    this.carouselItems = $('.carousel img');
    this.leftBtn = $('.left-button').click(() => this.previous());
    this.rightBtn = $('.right-button').click(() => this.next());
    this.currentIndex = 0;
    this.carouselItems[this.currentIndex].style.display = 'block';
  }

  previous() {
    this.carouselItems[this.currentIndex].style.display = 'none'
    // TweenMax.to(this.carouselItems[this.currentIndex], 0.3, { width: '0%' });
    
    if (this.currentIndex === 0) {
      console.log('here')
      this.currentIndex = this.carouselItems.length - 1;
    } else {
      this.currentIndex--;
    }
    // TweenMax.from(this.carouselItems[this.currentIndex], 0.3, { width: '100%' });
    this.carouselItems[this.currentIndex].style.display = 'block'
  }

  next() {
    TweenMax.to(this.carouselItems[this.currentIndex], 0.3, { display: 'none' });
    if (this.currentIndex === this.carouselItems.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    TweenMax.to(this.carouselItems[this.currentIndex], 0.3, { display: 'block' });
  }
}

const carousel = $('.carousel');
const newCarousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
      1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
      2. You will need to grab a reference to all of the images
      3. Create a current index
      4. Those buttons are gonna need some click handlers.
      5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
      6. Have fun!
  */
