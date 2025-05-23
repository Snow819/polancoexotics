<template>
    <div class="popular_makes">
     <div class="popular_makes_header">
        <h3>Popular Makes</h3>
        <button>view all<i class="bi bi-arrow-up-right"></i></button>
    </div>
    <div class="popular_makes_availability">
        <div>
           <ul>
            <li>In Stock</li>
            <li>Audi</li>
            <li>Ford</li>
            <li>Mercedes Benz</li>
           </ul>
        </div>
    </div>
    <InfiniteCarousel
  :cards="[
    { title: 'Audi-R8-2024', image: '/images/R8.jpg', description: '4.0 D5 PowerPulse Momentum 5dr AWD' },
    { title: 'Tesla-model-s-2024', image: '/images/Tesla_model_s.jpg', description: '4.0 D5 PowerPulse Momentum 5dr AWD' },
    { title: 'Bentley-2024', image: '/images/bentley.png', description: '4.0 D5 PowerPulse Momentum 5dr AWD' },
    { title: 'BMW-7-2024', image: '/images/BMW_7.jpg', description: '4.0 D5 PowerPulse Momentum 5dr AWD' },
    { title: 'C-class-2023', image: '/images/c-class-2023.png', description: '4.0 D5 PowerPulse Momentum 5dr AWD' },
    { title: 'T-cross-2024', image: '/images/T-cross.png', description: '4.0 D5 PowerPulse Momentum 5dr AWD' }
  ]"
/>

    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;   
}
.popular_makes{
    background-color: #050B20;
    color: white;
    padding: 25px 70px;
}
.popular_makes_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
}
.popular_makes_header h3{
    font-size: 150%;
}
.popular_makes_header button{
    background-color: inherit;
    color: white;
    padding: 10px;
    font-size: 110%;
}
.popular_makes_availability ul{
    display: flex;
    gap: 29px;
    padding-top: 20px;
    padding-bottom: 5px;
    
}
.popular_makes_availability ul li{
  cursor: pointer;
  font-weight: 800;
}
.popular_makes_availability{
    border-bottom: 2px solid #fbf8f842;
}
.cards img{
    width: 100%;
    height: 30vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    /* padding: 0.5rem 1rem; */
    column-gap: 15px;
    row-gap:25px;
    padding:50px 0px;
    color: white;

}
.container-1{
    border:2px solid rgba(0, 0, 0, 0.078);
    /* padding-bottom: 30px; */
    border-radius: 15px;
    text-align: center;
    background-color:#FFFFFF12 ;
}
.container-2{
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;   
}
.container-2 p{
    font-weight: 800;
    font-size: 120%;
}
.container-2 button{
    background-color: inherit;
    font-size: 100%;
    color: white;
    font-weight: 600;
}
.container-3{
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
    padding: 8px 0px;
    color: white;
    border-bottom: 2px solid #00000020;
    
}
.container-4{
 padding-top: 20px;
 padding-bottom: 5px;
 margin-right: 20px;
 margin-left: 20px;
 border-bottom: 2px solid #00000020;
}
.container-4 h4{
    padding-bottom: 10px;
    font-size: 120%;
    color:white;
}
.mostsearched-container{
    margin-bottom: 30px;
}
@media screen and (max-width: 1200px){
  *{
    margin: 0;
    padding: 0;
  }
  .cards{
    display: grid;
    grid-template-columns:1fr;
    /* margin: 0; */
    padding: 20px;
  }

}
</style>
<script>
import InfiniteCarousel from '@/components/InfiniteCarousel.vue';

export default {
    name:'Popularmakes',
  components: {
    InfiniteCarousel
  },
  data() {
    return {
      cardData: [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 4' },
        { id: 5, title: 'Card 5' },
      ]
    }
  }
}
</script>
