<template>
  <div class="testimonials-section">
    <div class="container">
      <div class="testimonials-grid">
        <!-- Left Side - Rating Info -->
        <div class="rating-section">
          <h2 class="section-title">What Our Customers Say</h2>
          
          <div class="trustpilot-rating">
            <div class="rating-header">
              <span class="rating-text">Great</span>
              <div class="trustpilot-badge">
                <div class="stars">
                  <span class="star filled">★</span>
                  <span class="star filled">★</span>
                  <span class="star filled">★</span>
                  <span class="star filled">★</span>
                  <span class="star filled">★</span>
                </div>
                <span class="verified">✓ Verified</span>
              </div>
            </div>
            
            <div class="rating-info">
              <div class="stars-display">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
              </div>
              <p class="review-count">Based on 5,801 reviews</p>
              <div class="trustpilot-logo">
                <span>★ Trustpilot</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Testimonials Carousel -->
        <div class="carousel-section">
          <div class="carousel-container">
            <button class="nav-button prev" @click="prevSlide" :disabled="currentSlide === 0">
              ❮
            </button>
            
            <div class="testimonials-carousel">
              <div class="testimonial-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-slide">
                  <div class="testimonial-card">
                    <div class="customer-info">
                      <div class="customer-details">
                        <div class="stars-small">
                          <span class="star filled">★</span>
                          <span class="star filled">★</span>
                          <span class="star filled">★</span>
                          <span class="star filled">★</span>
                          <span class="star filled">★</span>
                        </div>
                        <span class="verified-small">✓ Verified</span>
                      </div>
                      <div class="customer-name">{{ testimonial.name }}</div>
                      <div class="customer-role">{{ testimonial.role }}</div>
                    </div>
                    
                    <p class="testimonial-text">{{ testimonial.text }}</p>
                    
                    <div class="customer-avatars">
                      <img v-for="(avatar, idx) in testimonial.avatars" 
                           :key="idx" 
                           :src="avatar" 
                           :alt="`Customer ${idx + 1}`" 
                           class="avatar"
                           :class="{ active: idx === 0 }">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button class="nav-button next" @click="nextSlide" :disabled="currentSlide === testimonials.length - 1">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CustomerTestimonials',
  setup() {
    const currentSlide = ref(0)
    
    const testimonials = ref([
      {
        name: 'Ali TUFAN',
        role: 'Designer',
        text: "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
        avatars: [
          'https://images.unsplash.com/photo-1494790108755-2616b9493f1c?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face'
        ]
      },
      {
        name: 'Sarah Johnson',
        role: 'Manager',
        text: "Outstanding service and quality. The team went above and beyond to ensure I was completely satisfied with my purchase. Highly recommended!",
        avatars: [
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face'
        ]
      },
      {
        name: 'Mike Chen',
        role: 'Developer',
        text: "Professional, efficient, and reliable. They made the entire process smooth and stress-free. I couldn't be happier with the results.",
        avatars: [
          'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face'
        ]
      }
    ])

    const nextSlide = () => {
      if (currentSlide.value < testimonials.value.length - 1) {
        currentSlide.value++
      }
    }

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      }
    }

    return {
      currentSlide,
      testimonials,
      nextSlide,
      prevSlide
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
}
.testimonials-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
}

/* Left Side - Rating Section */
.rating-section {
  padding-right: 40px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 40px;
  line-height: 1.2;
}

.trustpilot-rating {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rating-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.rating-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.trustpilot-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #00b67a;
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 1rem;
}

.star.filled {
  color: #ffffff;
}

.verified {
  font-size: 0.85rem;
}

.rating-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stars-display {
  display: flex;
  gap: 3px;
}

.stars-display .star {
  color: #00b67a;
  font-size: 1.5rem;
}

.review-count {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

.trustpilot-logo {
  color: #00b67a;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Right Side - Carousel Section */
.carousel-section {
  position: relative;
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.testimonials-carousel {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
}

.testimonial-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 10px;
}

.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.customer-info {
  margin-bottom: 20px;
}

.customer-details {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.stars-small {
  display: flex;
  gap: 2px;
}

.stars-small .star {
  color: #00b67a;
  font-size: 0.9rem;
}

.verified-small {
  color: #00b67a;
  font-size: 0.8rem;
}

.customer-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.customer-role {
  color: #666;
  font-size: 0.9rem;
}

.testimonial-text {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 1rem;
}

.customer-avatars {
  display: flex;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.avatar.active {
  border-color: #00b67a;
}

.nav-button {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  color: #666;
}

.nav-button:hover:not(:disabled) {
  border-color: #00b67a;
  color: #00b67a;
  box-shadow: 0 4px 12px rgba(0,182,122,0.2);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials-grid {
    padding: 0;
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .rating-section {
    padding-right: 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .nav-button {
    position: static;
  }
  .section-title{
    font-size: clamp(3vh, 15px, 5vh);
    text-align: left;
  }
  .testimonials-section{
    padding: 0;
  }
  .rating-section{
    text-align: left;
  }
  .customer-name{
    font-size: clamp(2vh, 10px, 3vh);

  }
 .testimonial-slide {
  min-width: 50%;
  padding: 0 10px;
}
.testimonials-section{
  overflow:hidden;
}
}
</style>