<template>
    <div class="carousel-container">
      <h2 class="carousel-title">{{ title }}</h2>
      
      <div class="carousel-controls">
        <button @click="prevSlide" class="control-button" :disabled="currentIndex === 0">
          <span class="arrow">&#10094;</span>
        </button>
        
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="trackStyle">
            <div 
              v-for="(card, index) in cards" 
              :key="index" 
              class="carousel-card"
              :class="{ 'active': currentIndex === index }"
            >
              <div class="card-image-container">
                <img :src="card.image" :alt="card.title" class="card-image">
                <div class="card-badge" v-if="card.badge">{{ card.badge }}</div>
              </div>
              <div class="card-content">
                <h3 class="card-title">{{ card.title }}</h3>
                <p class="card-description">{{ card.description }}</p>
                <div class="card-footer">
                  <span class="card-price">{{ card.price }}</span>
                  <button class="card-button">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button @click="nextSlide" class="control-button" :disabled="currentIndex >= cards.length - cardsToShow">
          <span class="arrow">&#10095;</span>
        </button>
      </div>
      
      <div class="carousel-indicators">
        <span 
          v-for="(_, index) in indicatorsCount" 
          :key="index" 
          class="indicator"
          :class="{ 'active': Math.floor(currentIndex / cardsToShow) === index }"
          @click="goToSlide(index * cardsToShow)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardCarousel',
    props: {
      title: {
        type: String,
        default: 'Featured Items'
      },
      cards: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0,
        cardsToShow: 3,
        transitionDuration: 300,
        autoplayInterval: null,
        windowWidth: window.innerWidth
      };
    },
    computed: {
      trackStyle() {
        return {
          transform: `translateX(-${this.currentIndex * (100 / this.cardsToShow)}%)`,
          transition: `transform ${this.transitionDuration}ms ease`
        };
      },
      indicatorsCount() {
        return Math.ceil(this.cards.length / this.cardsToShow);
      }
    },
    mounted() {
      this.updateCardsToShow();
      window.addEventListener('resize', this.handleResize);
      this.startAutoplay();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
      this.stopAutoplay();
    },
    methods: {
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
        }
        this.resetAutoplay();
      },
      nextSlide() {
        if (this.currentIndex < this.cards.length - this.cardsToShow) {
          this.currentIndex += 1;
        } else {
          // Loop back to first slide when reaching the end
          this.currentIndex = 0;
        }
        this.resetAutoplay();
      },
      goToSlide(index) {
        this.currentIndex = index;
        this.resetAutoplay();
      },
      handleResize() {
        this.updateCardsToShow();
        // Make sure currentIndex is valid after resize
        this.currentIndex = Math.min(this.currentIndex, this.cards.length - this.cardsToShow);
        if (this.currentIndex < 0) this.currentIndex = 0;
      },
      updateCardsToShow() {
        this.windowWidth = window.innerWidth;
        
        if (this.windowWidth < 640) {
          this.cardsToShow = 1;
        } else if (this.windowWidth < 1024) {
          this.cardsToShow = 2;
        } else {
          this.cardsToShow = 3;
        }
      },
      startAutoplay() {
        this.autoplayInterval = setInterval(() => {
          this.nextSlide();
        }, 5000); // Change slides every 5 seconds
      },
      stopAutoplay() {
        clearInterval(this.autoplayInterval);
      },
      resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
  }
  
  .carousel-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
  }
  
  .carousel-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-track {
    display: flex;
    width: calc(100% * (var(--total-cards) / var(--visible-cards)));
    will-change: transform;
  }
  
  .carousel-card {
  flex: 0 0 calc(100% / var(--visible-cards));
  padding: 0 0.75rem; /* Increase side padding for more space between cards */
  box-sizing: border-box;
  transition: opacity 0.3s ease;
}
  
  .control-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f8f8f8;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .control-button:hover {
    background-color: #efefef;
  }
  
  .control-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .arrow {
    font-size: 1.2rem;
    user-select: none;
  }
  
  .carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d0d0d0;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .indicator.active {
    background-color: #4285f4;
  }
  
  .card-image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .carousel-card:hover .card-image {
    transform: scale(1.05);
  }
  
  .card-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 0.25rem 0.75rem;
    background-color: #ff4d4d;
    color: white;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  
  .card-content {
    padding: 1.25rem;
    background-color: white;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .card-description {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #4285f4;
  }
  
  .card-button {
    padding: 0.5rem 1rem;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .card-button:hover {
    background-color: #3367d6;
  }
  
  /* Responsive styles */
  @media (max-width: 1024px) {
    .carousel-card {
      --visible-cards: 2;
    }
  }
  
  @media (max-width: 640px) {
    .carousel-card {
      --visible-cards: 1;
    }
    
    .control-button {
      width: 36px;
      height: 36px;
    }
  }
  </style>