<template>
    <div class="wrapper">
        <div class="search_for_first">
            <h2>Are You Looking <br>
                For a Car ?</h2>
            <p>We are committed to providing our customers with <br>
                exceptional service</p>
            <div>
                <button>Get Started <i class="bi bi-arrow-up-right"></i></button>
                <img src="../../public/images/electric-car.svg fill.png" alt="img">
            </div>
        </div>
        <div class="search_for_first_2">
            <h2>Do You Want to <br>
                Sell a Car ?</h2>
            <p>We are committed to providing our customers with <br>
                exceptional service.</p>
            <div>
                <button>Get Started <i class="bi bi-arrow-up-right"></i></button>
                <img src="../../public/images/electric-car2.svg.png" alt="img">
            </div>
        </div>
        <div>
            <h1>We're BIG on what <br>
                matters to you</h1>
        </div>
        <div class="search_for_second">
            <div>
                <img src="../../public/images/first.png" alt="img">
                <h4>Special Financing Offers</h4>
                <p>Our stress-free finance department that can <br>
                    find financial solutions to save you money.</p>
            </div>
            <div>
                <img src="../../public/images/second.png" alt="img">
                <h4>Trusted Car Dealership</h4>
                <p>Our stress-free finance department that can <br>
                    find financial solutions to save you money.</p>
            </div>
            <div>
                <img src="../../public/images/third.png" alt="img">
                <h4>Transparent Pricing</h4>
                <p>Our stress-free finance department that can <br>
                    find financial solutions to save you money.</p>
            </div>
            <div>
                <img src="../../public/images/forth.png" alt="img">
                <h4>Expert Car Service</h4>
                <p>Our stress-free finance department that can <br>
                    find financial solutions to save you money</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.wrapper{
    margin-top: 50px;
    padding: 25px 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap:65px;
}
.wrapper img{
   height: 70px;
   width: 80px;
}
.search_for_second{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap:25px;
}
.search_for_second img{
    height: 40px;
    width: 50px;
}
.search_for_first{
    background-color: #E9F2FF;
    padding: 60px;
    border-radius: 20px;
}
.search_for_first_2{
    background-color: #FFE9F3;
    padding: 60px;
    border-radius: 20px;
    
}
.search_for_first div,.search_for_first_2 div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search_for_first_2 button{
    color: white;
    background-color: #050B20;
    font-weight: 800;
    padding: 12px 12px;
    border-radius: 10px;
}
.search_for_first button{
    color: white;
    background-color: #405FF2;
    font-weight: 800; 
    padding: 12px 12px;
    border-radius: 10px;
}
.wrapper h2{
    font-weight: 800;
    font-size: 120%;
    padding-bottom: 20px;
}
.wrapper p{
    padding-bottom: 20px;
}
.wrapper h1{
    font-size: 250%;
}

.search_for_second h4{
    padding-bottom: 20px;
    padding-top: 10px;
}
.search_for_second p{
    padding-bottom: 20px;
}
@media screen and (max-width: 1200px){
  *{
    margin: 0;
    padding: 0;
  }
  .wrapper{
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
  } 
}

</style>