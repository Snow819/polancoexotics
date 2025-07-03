<template>
  <div class="Blog_head">
    <div class="Blog_head_inside">
      <div class="Blog_head_inside_first">
        <p>$165,000</p>
        <h3>Ranger Black-<br>2021</h3>
      </div>
      <div class="Blog_head_wrapper">
        <div>
          <i class="bi bi-fuel-pump"></i>
          <sub>Fuel Type</sub>
          <b>Petrol</b>
        </div>
        <div>
          <i class="bi bi-speedometer"></i>
          <sub>Mileage</sub>
          <b>250 Miles</b>
        </div>
        <div>
          <i class="bi bi-gear-wide"></i>
          <sub>Transmission</sub>
          <b>Manual</b>
        </div>
        <div>
          <i class="bi bi-calendar2-week"></i>
          <sub>Year</sub>
          <b>2021</b>
        </div>
        <div>
         <button>Learn More<i class="bi bi-arrow-up-right"></i></button>
        </div>
      </div>
    </div>
  </div>
  <div>
  <Exploreallvehicles/>
  </div>
  <div>
    <whychoose/>
  </div>
  <div>
    <Browse/>
  </div>
  <div>
    <Shop/>
  </div>
  <div>
    <Explore/>
  </div>
  <div>
    <Calculator/>
  </div>
</template>

<script>
import Exploreallvehicles from '@/components/Exploreallvehicles.vue';
import whychoose from '@/components/whychoose.vue';
import Browse from '@/components/Browse.vue';
import Shop from '@/components/Shop.vue';
import Explore from '@/components/Explore.vue';
import Calculator from '@/components/Calculator.vue';
export default {
  name:'Blog',
    components: {
     Exploreallvehicles,
     whychoose,
     Browse,
     Shop,
     Explore,
     Calculator
    }
  }


</script>

<style scoped>
*{
    border:none;
    padding: 0;
    margin: 0;
}

.Blog_head{
  background-image: url(/public/blogbackground.jpg);
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
}

.Blog_head_inside{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5cm !important;
  padding: 0px 50px;
}

.Blog_head_wrapper div{
  display: flex;
  flex-direction: column;
  /* column-gap: 20px; */
  color: white;
  padding-bottom: 20px;
}

.Blog_head_wrapper i,.Blog_head_wrapper sub,.Blog_head_wrapper p{
  padding-bottom: 10px;
}

.Blog_head_wrapper{
  background-color: rgba(255, 255, 255, 0.126);
  padding: 40px;
  padding-right:95px;
  border-radius: 20px;
}

.Blog_head_inside_first p{
   font-size: 170%;
   font-weight: 700;
}

.Blog_head_inside_first h3{
  font-size: 60px;
  font-weight: 700;
}

.Blog_head_inside_first{
  color: white;
}

.Blog_head_wrapper button{
  padding: 10px;
  border-radius: 5px;
}

.Blog_head_wrapper b{
  font-weight: 800;
  font-size: 120%;
}

@media screen and (max-width: 1200px){
  *{
    padding: 0;
    margin: 0;
  }

  .Blog_head_inside{
    flex-direction: column;
  }

  .Blog_head_inside_first p{
   /* font-size: clamp(10px 6vh 7px); */
   font-weight: 700;
  }

.Blog_head_inside_first h3{
  font-size: clamp(25px, 15vh, 20px) ;
}

.Blog_head_inside{
  padding-top: 70px !important;
}

.Blog_head_wrapper i,.Blog_head_wrapper sub,.Blog_head_wrapper p{
  padding-bottom: 4px;
}

.Blog_head_wrapper{
  background-color: rgba(255, 255, 255, 0.126);
  padding: 15px;
  padding-right:95px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}

}
</style>