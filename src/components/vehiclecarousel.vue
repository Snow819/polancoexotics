<template>
  <div class="vehicle-carousel-section">
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <h2 class="section-title">Explore All Vehicles</h2>
        <div class="header-right">
          <div class="filter-tabs">
            <button 
              v-for="tab in filterTabs" 
              :key="tab"
              :class="['filter-tab', { active: activeTab === tab }]"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
          <a href="#" class="view-all">
            View All
            <span class="arrow">→</span>
          </a>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="carousel-container">
        <button 
          class="nav-btn prev" 
          @click="prevSlide"
        >
          ❮
        </button>

        <div class="carousel-track-container">
          <div 
            class="carousel-track" 
            :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
            ref="carouselTrack"
          >
            <div 
              v-for="(vehicle, index) in infiniteVehicles" 
              :key="`${vehicle.id}-${Math.floor(index / vehicles.length)}`"
              class="vehicle-card"
              :class="{ 'deal-price': vehicle.isDeal }"
            >
              <!-- Vehicle Image -->
              <div class="vehicle-image">
                <img :src="vehicle.image" :alt="vehicle.name" />
                <div class="favorite-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div v-if="vehicle.isDeal" class="deal-badge">
                  Deal Price
                </div>
              </div>

              <!-- Vehicle Info -->
              <div class="vehicle-info">
                <div class="vehicle-header">
                  <h3 class="vehicle-name">{{ vehicle.name }}</h3>
                  <span class="vehicle-year">{{ vehicle.year }}</span>
                </div>
                
                <p class="vehicle-description">{{ vehicle.description }}</p>

                <!-- Vehicle Specs -->
                <div class="vehicle-specs">
                  <div class="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ vehicle.mileage }} Miles</span>
                  </div>
                  <div class="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2"/>
                      <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ vehicle.fuel }}</span>
                  </div>
                  <div class="spec-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                      <circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ vehicle.type }}</span>
                  </div>
                </div>

                <!-- Price and Action -->
                <div class="vehicle-footer">
                  <div class="price-section">
                    <span class="price">${{ vehicle.price.toLocaleString() }}</span>
                  </div>
                  <button class="view-details-btn">
                    View Details
                    <span class="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          class="nav-btn next" 
          @click="nextSlide"
        >
          ❯
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

export default {
  name: 'VehicleCarousel',
  setup() {
    const currentIndex = ref(0)
    const slideWidth = ref(320)
    const visibleCards = ref(3)
    const activeTab = ref('In Stock')
    const carouselTrack = ref(null)
    const isTransitioning = ref(false)
    
    const filterTabs = ['In Stock', 'New Cars', 'Used Cars']
    
    const vehicles = ref([
      {
        id: 1,
        name: 'T-Cross',
        year: '2023',
        description: '1.0 TSI Crossover Premium 5dr DSG',
        image: 'https://images.unsplash.com/photo-1549399080-d20c50b9e863?w=400&h=250&fit=crop',
        mileage: '35',
        fuel: 'Petrol',
        type: 'SUV',
        price: 18000,
        isDeal: false
      },
      {
        id: 2,
        name: 'C-Class',
        year: '2023',
        description: '2.0 EQ Power Hybrid Premium 5dr 9G-Tronic',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop',
        mileage: '100',
        fuel: 'Petrol',
        type: 'Automatic',
        price: 150000,
        isDeal: false
      },
      {
        id: 3,
        name: 'X5',
        year: '2024',
        description: 'xDrive40i M Sport 5dr Auto',
        image: 'https://images.unsplash.com/photo-1606664675446-3712d1f56c91?w=400&h=250&fit=crop',
        mileage: '50',
        fuel: 'Petrol',
        type: 'SUV',
        price: 65000,
        isDeal: true
      },
      {
        id: 4,
        name: 'Model 3',
        year: '2023',
        description: 'Long Range AWD 4dr Auto',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop',
        mileage: '25',
        fuel: 'Electric',
        type: 'Sedan',
        price: 45000,
        isDeal: false
      },
      {
        id: 5,
        name: 'Civic',
        year: '2023',
        description: '1.5 VTEC Turbo Sport 5dr CVT',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop',
        mileage: '80',
        fuel: 'Petrol',
        type: 'Hatchback',
        price: 28000,
        isDeal: false
      }
    ])

    // Create infinite loop by duplicating vehicles
    const infiniteVehicles = computed(() => {
      const duplicates = 3 // Number of times to duplicate the array
      const result = []
      for (let i = 0; i < duplicates; i++) {
        result.push(...vehicles.value)
      }
      return result
    })

    // Set initial position to middle set to avoid immediate jumping
    const initialOffset = computed(() => vehicles.value.length)

    const nextSlide = () => {
      if (isTransitioning.value) return
      isTransitioning.value = true
      currentIndex.value++
      
      // Check if we need to reset to beginning (seamless loop)
      setTimeout(() => {
        if (currentIndex.value >= vehicles.value.length * 2) {
          // Disable transition temporarily
          if (carouselTrack.value) {
            carouselTrack.value.style.transition = 'none'
          }
          currentIndex.value = vehicles.value.length
          
          // Re-enable transition after a brief moment
          setTimeout(() => {
            if (carouselTrack.value) {
              carouselTrack.value.style.transition = 'transform 0.5s ease'
            }
            isTransitioning.value = false
          }, 50)
        } else {
          isTransitioning.value = false
        }
      }, 500)
    }

    const prevSlide = () => {
      if (isTransitioning.value) return
      isTransitioning.value = true
      currentIndex.value--
      
      // Check if we need to reset to end (seamless loop)
      setTimeout(() => {
        if (currentIndex.value < vehicles.value.length) {
          // Disable transition temporarily
          if (carouselTrack.value) {
            carouselTrack.value.style.transition = 'none'
          }
          currentIndex.value = vehicles.value.length * 2 - 1
          
          // Re-enable transition after a brief moment
          setTimeout(() => {
            if (carouselTrack.value) {
              carouselTrack.value.style.transition = 'transform 0.5s ease'
            }
            isTransitioning.value = false
          }, 50)
        } else {
          isTransitioning.value = false
        }
      }, 500)
    }

    const updateLayout = () => {
      const width = window.innerWidth
      if (width < 480) {
        visibleCards.value = 1
        slideWidth.value = width - 80 // Account for nav buttons and padding
      } else if (width < 768) {
        visibleCards.value = 1
        slideWidth.value = width - 120 // Account for nav buttons and padding
      } else if (width < 1024) {
        visibleCards.value = 2
        slideWidth.value = 350
      } else {
        visibleCards.value = 3
        slideWidth.value = 320
      }
    }

    onMounted(() => {
      updateLayout()
      window.addEventListener('resize', updateLayout)
      // Set initial position to middle set
      currentIndex.value = initialOffset.value
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateLayout)
    })

    return {
      currentIndex,
      slideWidth,
      visibleCards,
      activeTab,
      filterTabs,
      vehicles,
      infiniteVehicles,
      carouselTrack,
      nextSlide,
      prevSlide
    }
  }
}
</script>

<style scoped>
.vehicle-carousel-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.filter-tabs {
  display: flex;
  gap: 5px;
}

.filter-tab {
  padding: 8px 16px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.filter-tab.active {
  background: #2c3e50;
  color: white;
}

.filter-tab:hover:not(.active) {
  background: #e9ecef;
}

.view-all {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
}

.view-all:hover {
  color: #0056b3;
}

/* Carousel Container */
.carousel-container {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

.carousel-track-container {
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
}

/* Vehicle Cards */
.vehicle-card {
  min-width: 300px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

.vehicle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.vehicle-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.vehicle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favorite-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.favorite-btn:hover {
  background: white;
}

.deal-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #28a745;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.vehicle-info {
  padding: 20px;
}

.vehicle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.vehicle-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.vehicle-year {
  color: #666;
  font-size: 0.9rem;
}

.vehicle-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 15px 0;
  line-height: 1.4;
}

.vehicle-specs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.85rem;
}

.spec-item svg {
  color: #999;
}

.vehicle-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.view-details-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;
}

.view-details-btn:hover {
  background: #0056b3;
}

/* Navigation Buttons */
.nav-btn {
  background: white;
  border: 2px solid #e9ecef;
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
  flex-shrink: 0;
}

.nav-btn:hover:not(:disabled) {
  border-color: #007bff;
  color: #007bff;
  box-shadow: 0 4px 12px rgba(0,123,255,0.2);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .container {
    padding: 0 15px;
  }
  
  .header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .carousel-container {
    gap: 15px;
  }
  
  .vehicle-card {
    min-width: 280px;
  }
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .carousel-container {
    gap: 10px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .vehicle-card {
    min-width: calc(100vw - 120px);
    max-width: 350px;
  }
  
  .filter-tabs {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .filter-tab {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  .header-right {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .vehicle-carousel-section {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 10px;
  }
  
  .header {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 1.25rem;
  }
  
  .carousel-container {
    gap: 8px;
  }
  
  .nav-btn {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .vehicle-card {
    min-width: calc(100vw - 86px);
    max-width: 300px;
  }
  
  .vehicle-image {
    height: 180px;
  }
  
  .vehicle-info {
    padding: 15px;
  }
  
  .vehicle-name {
    font-size: 1.1rem;
  }
  
  .price {
    font-size: 1.25rem;
  }
  
  .view-details-btn {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
  
  .filter-tab {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
  
  .carousel-track {
    gap: 15px;
  }
}

@media (max-width: 360px) {
  .vehicle-card {
    min-width: calc(100vw - 76px);
  }
  
  .nav-btn {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
  
  .carousel-container {
    gap: 6px;
  }
}
</style>