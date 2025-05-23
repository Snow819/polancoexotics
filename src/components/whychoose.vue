<template>
    <div>
        
    </div>
    <h3>Why Choose Us?</h3>
    <div class="whychoose">
        <div>
            <img src="../../public/logo.png" alt="img">
         <h4>Special Financing Offers</h4>
        <p>Our stress-free finance department that can <br>
        find financial solutions to save you money</p> </div>
        <div>
            <img src="../../public/f2.svg.png" alt="img">
             <h4>Trusted Car Dealership</h4>
             <p>Our stress-free finance department that can <br>
find financial solutions to save you money</p>
        </div>
        <div>
            <img src="../../public/f3.svg.png" alt="img">
             <h4>Transparent Pricing</h4>
             <p>Our stress-free finance department that can <br>
find financial solutions to save you money.</p>
        </div>
        <div>
            <img src="../../public/f4.svg.png" alt="img">
             <h4>Expert Car Service</h4>
             <p>Our stress-free finance department that can<br>
               find financial solutions to save you money</p>
        </div>
    </div>
</template>
<style scoped>
*{
    margin:0;
    padding:0;
    border: none;
}
h3{
    margin-left: 11rem;
    font-size: 190%;
    margin-top: 3cm;
    color: rgba(0, 0, 0, 0.781);
}
.whychoose{
    display: flex;
    justify-content: center;   
    padding:50px;
    padding-top: 30px;
    gap: 1.7cm;
    /* max-width: 100px;
    margin: 0 auto; */
}
.whychoose p{
    font-size: 80%;
    color: rgba(0, 0, 0, 0.781);
}
.whychoose img{
    height: 50px;
}
.whychoose h4{
    font-size: 120%;
    font-weight: 800;
    padding-bottom: 10px;
}
@media screen and (max-width: 768px) {
    *{
        padding: 0;
        margin: 0;
    }
    .whychoose{
        padding: 20px;
        padding-right: 0;
        display: block;
    }
    .whychoose h4{
        font-size: clamp(23px, 5vh, 30px);
    }
    h3{
        margin: 0;
        padding-left:20px;
        font-size: 200%;
    }
    .whychoose p{
        font-size: clamp(10px, 5vh, 17px); 
    }
    .whychoose div{
        padding-bottom: 50px;
    }
}
</style>