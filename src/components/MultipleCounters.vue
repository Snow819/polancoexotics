// MultipleCounters.vue
<template>
  <div class="counters-container">
    <div v-for="(counter, index) in counters" :key="index" class="counter-item">
      <div class="counter-value">{{ counter.displayValue }}</div>
      <div class="counter-label">{{ counter.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultipleCounters',
  data() {
    return {
      counters: [
        { 
          startValue: 0, 
          endValue: 836, 
          displayValue: '0M',
          suffix: 'M',
          label: 'Cars for sale' 
        },
        { 
          startValue: 0, 
          endValue: 738, 
          displayValue: '0M',
          suffix: 'M',
          label: 'DEALERS REVIEWS' 
        },
        { 
          startValue: 0, 
          endValue: 100, 
          displayValue: '0M',
          suffix: 'M',
          label: 'VISITORS PER DAY' 
        },
        { 
          startValue: 0, 
          endValue: 238, 
          displayValue: '0M',
          suffix: 'M',
          label: 'VERIFIED DEALERS' 
        }
      ],
      duration: 2000 // Animation duration in milliseconds
    }
  },
  mounted() {
    this.startAllCounters()
  },
  methods: {
    startAllCounters() {
      const startTime = performance.now()
      
      const updateCounters = () => {
        const currentTime = performance.now()
        const elapsed = currentTime - startTime
        
        if (elapsed < this.duration) {
          // Calculate the eased progress (ease-out)
          const progress = 1 - Math.pow(1 - elapsed / this.duration, 3)
          
          // Update each counter
          this.counters.forEach(counter => {
            const currentValue = counter.startValue + (counter.endValue - counter.startValue) * progress
            counter.displayValue = Math.round(currentValue) + counter.suffix
          })
          
          // Continue animation
          requestAnimationFrame(updateCounters)
        } else {
          // Animation complete - set final values
          this.counters.forEach(counter => {
            counter.displayValue = counter.endValue + counter.suffix
          })
        }
      }
      
      // Start the animation
      requestAnimationFrame(updateCounters)
    }
  }
}
</script>

<style scoped>
.counters-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* max-width: 100px; */
  margin: 0 auto;
}

.counter-item {
  text-align: center;
  padding: 1.5rem;
  min-width: 150px;
}

.counter-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  margin-bottom: 0.5rem;
}

.counter-label {
  font-size: 1rem;
  color: black;
}
@media screen and (max-width: 768px) {
    *{
        padding: 0;
        margin: 0;
    }
    .counters-container{
        display: block;
    }
}
</style>