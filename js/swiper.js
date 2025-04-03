let slider = {
    isActive: false,
    startX: 0,
    currentTranslate: 0,
    currentIndex: 0,
    sliderWidth: 0,

    init() {
      if (window.innerWidth > 768) return;
      
      this.sliderWidth = document.querySelector('.block-post').offsetWidth + 20;
      this.isActive = true;
      
      const wrapper = document.querySelector('.block-posts');
      wrapper.addEventListener('touchstart', this.touchStart.bind(this));
      wrapper.addEventListener('touchmove', this.touchMove.bind(this));
      wrapper.addEventListener('touchend', this.touchEnd.bind(this));
    },

    touchStart(e) {
      this.startX = e.touches[0].clientX;
    },

    touchMove(e) {
      if (!this.isActive) return;
      e.preventDefault();
      
      const currentX = e.touches[0].clientX;
      const diff = currentX - this.startX;
      
      document.querySelector('.block-posts').style.transform = 
        `translateX(${this.currentTranslate + diff}px)`;
    },

    touchEnd(e) {
      if (!this.isActive) return;
      
      const endX = e.changedTouches[0].clientX;
      const diff = endX - this.startX;
      const threshold = this.sliderWidth * 0.15;

      if (Math.abs(diff) > threshold) {
        if (diff > 0 && this.currentIndex > 0) {
          this.currentIndex--;
        } else if (diff < 0 && this.currentIndex < 2) {
          this.currentIndex++;
        }
      }

      this.currentTranslate = -this.currentIndex * this.sliderWidth;
      document.querySelector('.block-posts').style.transform = 
        `translateX(${this.currentTranslate}px)`;
    }
  };

  // Инициализация при загрузке
  slider.init();

  // Переинициализация при изменении размера
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !slider.isActive) {
      slider.init();
    } else if (window.innerWidth > 768 && slider.isActive) {
      location.reload(); // Простой сброс для демо
    }
  });