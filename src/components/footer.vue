<template>
    <div class="last">
        <div class="footer_introduction">
        <div class="join">
            <h4>join PolancoExotics</h4>
            <p>Recieve updates</p>
        </div>
        <div class="search">
            <input type="text" placeholder="Your email address">
            <button>Sign Up</button>
        </div>
    </div>
    </div>
    <div class="footer_second_container">
        <div>
            <h3>Company</h3>
            <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Services</li>
                <li>FAQs</li>
                <li>Terms</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h3>Quick Links</h3>
            <ul>
                <li>Get in Touch</li>
                <li>Help center</li>
                <li>Live chat</li>
                <li>How it works</li>
            </ul>
        </div>
        <div>
            <h3>Our Brands</h3>
            <ul>
                <li>Ferrari</li>
                <li>Lamborghini</li>
                <li>Bugatti</li>
                <li>McLaren</li>
                <li>Aston Martin</li>
                <li>Pagani</li>
                <li>Koenigsegg</li>
                <li>Rolls-Royce</li>
            </ul>
        </div>
        <div>
            <h3>Vehicle Types</h3>
            <ul>
                <li>Supercar</li>
                <li>Hypercar</li>
                <li>Exotic SUV</li>
                <li>Grand Tourer (GT) </li>
                <li>Exotic Coupe</li>
                <li>Roadster</li>
                <li>Exotic Electric Car</li>
                <li>Luxury Limousine</li>
            </ul>
        </div>
        <div>
           <div class="mobile_wrapper">
            <h3>Our Mobile App</h3>
           <div class="mobile">
            <i class="bi bi-apple"></i>
            <div>
                <p>Download on the</p>
                <h3>Apple Store</h3>
            </div>
           </div>
           <div class="mobile_1">
            <i class="bi bi-google-play"></i>
            <div>
                <p>Get in on</p>
                <h5>Google Play</h5>
           </div>
           </div>
           <div>
            <h3>Connect With Us</h3>
            <socials/>
           </div>
        </div>
    </div>
    </div>
    <div class="footer_foot">
        <div class="footer_foot_copyright">
            <p><i class="bi bi-c-circle"></i>2025 polancoexotics.com.All rights reserved.</p>
        </div>
        <div class="footer_foot_terms">
            <p>Terms&conditions . Privacy Notice</p>
            <button><i class="bi bi-arrow-up-square-fill"></i></button>
        </div>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
    list-style-type: none;

}
.last{
    padding-top:3cm;
    /* padding-left: 150px;
    padding-right: 150px; */
}
footer{
   background-color: #050B20;
   color: white;
}
.footer_introduction{
    display: flex;
    justify-content: space-between;
    margin: 0px 80px;
    margin-bottom: 65px;  
}
.join h4{
  font-size: 140%;
  padding-bottom: 7px;
}
.search{
    border-radius: 15px;
    padding: 3px 0px;
    padding-right: 4px;
    padding-left: 5px;
    height: fit-content;
    background-color: #39393a60;
}
.search input{
    background-color: #39393a60;
    color: white;
    padding: 10px 0px;
    padding-left: 15px;
    width: 9cm;
    border-top-left-radius: 17px;
    border-bottom-left-radius:17px;
}
.footer_introduction button{
    background-color: rgba(0, 0, 255, 0.737);
    color: white;
    padding: 10px;
    border-radius: 18px;
}
.footer_second_container{
 display: flex;
 justify-content: space-between;
 border-top: 2px solid rgba(255, 255, 255, 0.105);
 margin: 0px 80px;
 padding-top: 60px;  
}
.footer_second_container h3{
    color: whitesmoke;
    margin: 0;
    padding: 0;
    font-size: 120%;
    padding-bottom: 20px;    
}
.footer_second_container li{
    padding-bottom: 20px;
}
.mobile,.mobile_1{
    display: flex;
    /* align-items: center; */
    gap: 32px;
    margin-bottom: 5px;
    background-color: rgba(250, 248, 248, 0.142);
    border-radius: 25px;
}
.mobile_1{
    padding: 15px;
}
.mobile{
  padding: 5px;
}
.mobile_1 i{
    font-size: 170%;
}
.mobile i{
    font-size: 230%;
}
.mobile p,.mobile_1 p{
    font-size: 80%;
    color: rgba(240, 248, 255, 0.599);
}
.mobile_wrapper h3{
  margin-top: 20px;
}
.footer_foot{
    display: flex;
    justify-content: space-between;
    border-top: 2px solid rgba(255, 255, 255, 0.105);
    margin-top: 30px;
    padding: 0px 70px;
    padding-top:20px;
    padding-bottom: 10px;
}
.footer_foot_terms{
    display: flex;
    align-items: center;
    gap: 20px;
}
@media screen and (max-width: 1200px){
  *{
    margin: 0;
    padding: 0;
  }
  .footer_introduction{
    margin: 0;
    padding: 0;
    display: grid;
    padding: 0px 30px;
  }
  .join{
   text-align: center;
   padding-bottom: 20px;
  }
  .search input{
    width: 6cm;
  }
  .footer_second_container{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 0.5cm;
    padding-top: 30px;
  }
  .footer_second_container h3{
    font-size: 17 0%;
  }
  .footer_foot{
    display: grid;
  }
  .footer_foot div{
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
  }
  .mobile,.mobile_1{
    margin: 0;
    padding: 0;
    gap: 0px;
    width: fit-content ;
    align-items: center;
  }
  .mobile{
    padding: 10px 10px;
    margin: 0px 110px;
  }
  .mobile_1{
    padding: 20px 20px;
    margin: 20px 120px;
  }


}

</style>
<script>
import socials from './socials.vue';

export default {
    components: {
        socials
    }
}
</script>