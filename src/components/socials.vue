<style scoped>
  .card {
    display: flex;
    height: 70px;
    width: 200px;
    color: whitesmoke;
  }

  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    padding: 0.25rem;
    cursor: pointer;
  }

  .card .social-link1,.card .social-link2,.card .social-link3,.card .social-link4,.card .social-link5 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }

  .card svg {
    transform: scale(1);
  }

  .card .social-link1:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    animation: bounce_613 0.4s linear;
  }

  .card .social-link2:hover {
    background-color: #1DA1F2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link3:hover {
    background-color: #25D366;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link4:hover {
    background-color: #0a66c2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link5:hover {
    background-color:#000000;
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
    
  }
  @media screen and (max-width: 1200px){
  *{
    margin: 0;
    padding: 0;
  }
  .card {
    display: flex;
    height: 70px;
    width: 370px;
    color: whitesmoke;
  }
}
</style>

<template>
  <div class="card">
    <a class="social-link1">
        <i class="bi bi-instagram"></i>
    </a>
    <a  class="social-link2">
        <i class="bi bi-twitter"></i>
  </a>
  <a class="social-link3">
    <i class="bi bi-whatsapp"></i>
  </a>
    <a class="social-link5">
        <i class="bi bi-tiktok" style="font-weight: 800; font-size: 135%;"></i>
    </a>
  </div>
</template>
