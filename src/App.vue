<template>
  <div id="app">
    <!-- Responsive Navbar with router links -->
    <nav class="navbar">
      <!-- Logo that becomes a button on mobile -->
      <router-link 
        to="/" 
        class="logo" 
        :class="{ 'logo-button': isMobile }"
        @click.native.prevent="isMobile ? toggleMenu() : goToRoute('/')"
        ref="logoButton"
        :role="isMobile ? 'button' : null"
        :aria-label="isMobile ? 'Toggle menu' : null"
        :aria-expanded="isMobile ? isMenuOpen.toString() : null"
        :tabindex="isMobile ? '0' : null"
        @keydown.enter.native="isMobile && toggleMenu()"
        @keydown.space.native="isMobile && toggleMenu()"
      >
        Your Logo
      </router-link>
      
      <!-- Navigation menu using router-link -->
      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.path" @click.native="closeMenuOnClick">
            {{ item.text }}
          </router-link>
        </li>
        <li><router-link class="link" to="/Signup"><i class="bi bi-person"></i></router-link></li>
      </ul>
    </nav>

    <!-- Router view to display your components -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data() {
    return {
      isMobile: false,
      isMenuOpen: false,
      menuItems: [
        { text: 'Home', path: '/' },
        { text: 'Listing', path: '/Listing' },
        { text: 'Blog', path: '/Blog' },
        { text: 'Pages', path: '/Pages' },
        { text: 'About', path: '/About' },
        { text: 'Contact', path: '/contact' }
      ]
    }
  },
  
  mounted() {
    // Set initial state
    this.checkScreenSize();
    
    // Add event listeners
    window.addEventListener('resize', this.checkScreenSize);
    document.addEventListener('click', this.handleOutsideClick);
  },
  
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('resize', this.checkScreenSize);
    document.removeEventListener('click', this.handleOutsideClick);
  },
  
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      
      // If switching to desktop view, ensure menu is visible
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    },
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    
    closeMenuOnClick() {
      if (this.isMobile) {
        this.isMenuOpen = false;
      }
    },
    
    goToRoute(path) {
      this.$router.push(path);
    },
    
    handleOutsideClick(event) {
      if (!this.isMobile || !this.isMenuOpen) return;
      
      // Fixed: Get the actual DOM element from the ref
      const logoElement = this.$refs.logoButton?.$el || this.$refs.logoButton;
      
      // Check if the ref exists before using contains
      const isClickInside = 
        (logoElement && (logoElement === event.target || 
        (logoElement.contains && logoElement.contains(event.target)))) ||
        event.target.closest('.nav-menu');
        
      if (!isClickInside) {
        this.isMenuOpen = false;
      }
    }
  }
}
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* Navbar Styles */
.navbar {
  background-color: rgba(255, 255, 255, 0.047);
  padding: 1rem 2rem;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100%;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.logo-button {
  cursor: pointer;
  padding: 8px 16px;
  background-color: inherit;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.logo-button:hover {
  background-color: #3e8e41;
}

.nav-menu {
  display: flex;
  list-style: none;
  height: auto;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin-left: 1.5rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-menu a.router-link-exact-active {
  color: #4CAF50;
  font-weight: bold;
}

.nav-menu a:hover {
  color: #4CAF50;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    display: none;
    z-index: 10;
  }
  
  .nav-menu.active {
    display: flex;
  }
  
  .nav-menu li {
    margin: 1rem 0;
    display: block;
    width: 100%;
    text-align: center;
  }
  .navbar{
   padding-left:5px;
  }
}

/* Add additional app styles below */
</style>