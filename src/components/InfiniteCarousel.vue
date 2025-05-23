<template>
  <div class="carousel-container">
    <button class="nav-button prev" @click="scrollLeft">←</button>

    <div class="carousel" ref="carousel">
      <div 
        v-for="(card, index) in displayCards" 
        :key="index" 
        class="card"
        :style="{ 'transform': `translateX(-${offset}px)` }"
      >
        <div class="card-content">
          <img :src="card.image" alt="Card Image" class="card-image" />
          <div class="container-1">
            <h4>{{ card.title }}</h4>
          <p>{{ card.description }}</p>
          </div>
          <div class="container-3">
                <div>
                    <i class="bi bi-speedometer"></i>
                    <p>0 Miles</p>
                </div>
                <div>
                    <i class="bi bi-fuel-pump"></i>
                    <p>Petrol</p>
                </div>
                <div>
                    <i class="bi bi-gear-wide"></i>
                    <p>automatic</p>
                </div>
            </div>
            <div  class="container-2">
                <p>$160,000</p>
                <button>View details<i class="bi bi-arrow-up-right"></i></button>
            </div>
        </div>
      </div>
    </div>

    <button class="nav-button next" @click="scrollRight">→</button>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'InfiniteCarousel',
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const carousel = ref(null);
    const currentIndex = ref(0);
    const offset = ref(0);
    const cardWidth = ref(200);

    const displayCards = computed(() => {
      return [...props.cards, ...props.cards, ...props.cards];
    });

    onMounted(() => {
      if (carousel.value && displayCards.value.length > 0) {
        const firstCard = carousel.value.querySelector('.card');
        if (firstCard) {
          cardWidth.value = firstCard.offsetWidth + 
            parseInt(window.getComputedStyle(firstCard).marginLeft) + 
            parseInt(window.getComputedStyle(firstCard).marginRight);
        }

        currentIndex.value = props.cards.length;
        offset.value = currentIndex.value * cardWidth.value;
      }
    });

    const scrollRight = () => {
      currentIndex.value++;
      offset.value = currentIndex.value * cardWidth.value;

      if (currentIndex.value >= props.cards.length * 2) {
        setTimeout(() => {
          const cards = carousel.value.querySelectorAll('.card');
          cards.forEach(card => card.style.transition = 'none');

          currentIndex.value = currentIndex.value - props.cards.length;
          offset.value = currentIndex.value * cardWidth.value;

          setTimeout(() => {
            cards.forEach(card => card.style.transition = 'transform 0.5s ease');
          }, 50);
        }, 500);
      }
    };

    const scrollLeft = () => {
      currentIndex.value--;
      offset.value = currentIndex.value * cardWidth.value;

      if (currentIndex.value < props.cards.length) {
        setTimeout(() => {
          const cards = carousel.value.querySelectorAll('.card');
          cards.forEach(card => card.style.transition = 'none');

          currentIndex.value = currentIndex.value + props.cards.length;
          offset.value = currentIndex.value * cardWidth.value;

          setTimeout(() => {
            cards.forEach(card => card.style.transition = 'transform 0.5s ease');
          }, 50);
        }, 500);
      }
    };

    return {
      carousel,
      displayCards,
      currentIndex,
      offset,
      scrollLeft,
      scrollRight
    };
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.card {
  min-width: 200px;
  height: auto;
  background-color: #FFFFFF12;
  color: white;
  border-radius: 8px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  transition: transform 0.5s ease;
  /* padding: 10px; */
  margin-top: 50px;
}

.card-content {
  text-align: center;
  width: 100%;
}

.card h4 {
  /* font-size: 1.2rem; */
  margin-bottom: 8px;
  /* color: black; */
}

.card-image {
  width: 320px;
  height: 290px;
  max-height: 150px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  margin-bottom: 8px;
}

.card p {
  font-size: 0.9rem;
  color: #b6b5b5;
}

.nav-button {
  position: absolute;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.prev {
  left: 0px;
  top: 5px;
}

.next {
  left: 50px;
  top: 5px;
}
.container-1{
  margin: 5px 20px;
  padding: 5px;
  text-align: left;
  border-bottom: 2px solid #cbc8c820;
  
}
.container-2{
    display: flex;
    justify-content: space-between;
    padding: 15px 20px; 
    text-align: center;  
}
.container-2 p{
    font-weight: 800;
    font-size: 120%;
}
.container-2 button{
    background-color: inherit;
    font-size: 100%;
    color: #405FF2;
    font-weight: 600;
}
.container-3{
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    padding: 8px 0px;
    color: rgba(222, 217, 217, 0.586);
    border-bottom: 2px solid #b2b1b120;
}

/* Responsive Styles */
@media (max-width:756px) {
  


  .carousel-container {
    flex-direction: column;
  }

  .carousel {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .card {
    min-width: 80%;
    margin: 0 5%;
    scroll-snap-align: start;
  }

  .nav-button {
    display: none; /* hide arrows on small screens */
  }
}

</style>