<template>
<div class="wrapper">
<div>
    <img src="/Audi.png" alt="image">
</div>
<div class="wrapper_text">
    <h3>Get A Fair Price For Your Car <br> Sell To Us Today</h3>
    <p>We are committed to providing our customers with exceptional service, competitive<br>
        pricing, and a wide range of.</p><br>
   <ul>
    <li><span><i class="bi bi-check-circle"></i></span>We are the UK’s largest provider, with more patrols in more places</li>
    <li><span><i class="bi bi-check-circle"></i></span>You get 24/7 roadside assistance</li>
    <li><span><i class="bi bi-check-circle"></i></span>We fix 4 out of 5 cars at the roadside</li>
   </ul>
   
    <button>Get Started <i class="bi bi-arrow-up-right"></i></button>
</div>
</div>
<div class="statistics">
<MultipleCounters />
</div>
</template>
<style scoped>
.wrapper{
    display: grid;
    grid-template-columns:1fr 1fr;
    margin-top: 2.5cm;
    margin-left: 70px;
    margin-right: 70px;
    background-color: #EEF1FB;
    border-radius: 10px;
    row-gap: 1cm;
    column-gap: 2cm;
}
.wrapper_text{
    padding-top:50px;
    padding-bottom: 10px;
}
.wrapper h3{
    font-size: 200%;
    padding-bottom: 35px;
}
.wrapper p{
    /* padding-bottom: 20px; */
}
.wrapper img{
    width: 100%;
    height: 400px;
}
.statistics{
    padding-top: 50px;
    padding-bottom: 50px;
}
.statistics h4{
    font-size: 170%;
    font-weight: 800;
}
.statistics sup{
    font-size: 70%;
    /* color: white; */
}
ul li{
    padding-bottom: 15px;
    list-style-type: none;
    font-size: 90%;
    font-weight: 700;
}
span{
    padding-right: 5px;
}
button{
    background-color:blue;
    color: white;
    padding: 10px;
    border-radius:8px;
}
@media screen and (max-width: 768px) {
    *{
        padding: 0;
        margin: 0;
    }
    .statistics{
        display: block;
    }
    .statistics div{
        padding-bottom: 25px;
        padding-left: 0;
        padding-right: 0;
    }
    .wrapper{
        grid-template-columns: 1fr;
        padding-right:15px;
        padding-left: 15px;
        margin-top: 1.5cm;
    }
}

</style>
<script>
import MultipleCounters from './MultipleCounters.vue';

export default {
  components: {
    MultipleCounters
  }
}
</script>