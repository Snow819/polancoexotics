<template>
  <div class="signup-container">
    <h2 class="signup-title">Login</h2>
    
    <div class="social-login">
      <button class="btn-social btn-google">
        <i class="icon-google"></i>
        Continue with Google
      </button>
      <button class="btn-social btn-facebook">
        <i class="icon-facebook"></i>
        Continue with Facebook
      </button>
      <div class="divider">
        <span>or</span>
      </div>
    </div>
    
    <form @submit.prevent="handleSubmit" class="signup-form">
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          @blur="validateEmail"
          placeholder="example@email.com"
          required
        />
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.password }">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          @blur="validatePassword"
          placeholder="Enter your password"
          required
        />
        <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
        <div class="password-strength" v-if="form.password">
          <div 
            class="strength-meter" 
            :style="{ width: passwordStrength + '%' }" 
            :class="strengthClass"
          ></div>
          <span class="strength-text">{{ strengthText }}</span>
        </div>
      </div>
      
      <button type="submit" class="btn-submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Logging in...' : 'Login' }}
      </button>
    </form>
    
    <div class="login-link">
      <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      isSubmitting: false
    }
  },
  computed: {
    passwordStrength() {
      // Calculate password strength (0-100)
      if (!this.form.password) return 0;
      
      let score = 0;
      
      // Length check
      if (this.form.password.length >= 8) score += 25;
      
      // Character diversity checks
      if (/[A-Z]/.test(this.form.password)) score += 25;
      if (/[0-9]/.test(this.form.password)) score += 25;
      if (/[^A-Za-z0-9]/.test(this.form.password)) score += 25;
      
      return score;
    },
    strengthClass() {
      if (this.passwordStrength < 50) return 'weak';
      if (this.passwordStrength < 75) return 'medium';
      return 'strong';
    },
    strengthText() {
      if (this.passwordStrength < 50) return 'Weak';
      if (this.passwordStrength < 75) return 'Medium';
      return 'Strong';
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email address is required';
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      if (!this.form.password) {
        this.errors.password = 'Password is required';
      } else {
        this.errors.password = '';
      }
    },
    validateForm() {
      this.validateEmail();
      this.validatePassword();
      
      // Check if there are any errors
      return !Object.values(this.errors).some(error => error);
    },
    async handleSubmit() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        // Here you would normally make an API call to your backend
        // For example:
        // const response = await this.$http.post('/api/login', this.form);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Store authentication state (you might use Vuex or localStorage)
        localStorage.setItem('isAuthenticated', 'true');
        
        // Redirect to homepage after successful login
        this.$router.push('/');
        
      } catch (error) {
        console.error('Login error:', error);
        // Handle error (display message, etc.)
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.signup-container {
  max-width: 480px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.signup-title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
}

.social-login {
  margin-bottom: 1.5rem;
}

.btn-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-google {
  color: #4285f4;
}

.btn-facebook {
  color: #3b5998;
}

.btn-social:hover {
  background-color: #f5f5f5;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider span {
  padding: 0 1rem;
  color: #777;
  font-size: 0.875rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input[type="email"],
.form-group input[type="password"] {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group.has-error input {
  border-color: #e53935;
}

.error-message {
  color: #e53935;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.checkbox-group label {
  margin-bottom: 0;
  font-weight: normal;
}

.btn-submit {
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #43a047;
}

.btn-submit:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
}

.login-link a {
  color: #2196f3;
  text-decoration: none;
}

.password-strength {
  margin-top: 0.5rem;
}

.strength-meter {
  height: 5px;
  border-radius: 2px;
  transition: width 0.3s;
}

.strength-meter.weak {
  background-color: #ff5252;
}

.strength-meter.medium {
  background-color: #ffab40;
}

.strength-meter.strong {
  background-color: #4caf50;
}

.strength-text {
  font-size: 0.75rem;
  color: #777;
  margin-top: 0.25rem;
}
</style>