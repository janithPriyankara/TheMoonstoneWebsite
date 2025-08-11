// Security utility functions for form validation and data sanitization

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (Sri Lankan format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^(\+94|0)?[1-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Rate limiting for form submissions (client-side)
 * @param {string} key - Unique key for the rate limit
 * @param {number} maxAttempts - Maximum attempts allowed
 * @param {number} timeWindow - Time window in milliseconds
 * @returns {boolean} - True if within rate limit
 */
export const checkRateLimit = (key, maxAttempts = 5, timeWindow = 60000) => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(`rateLimit_${key}`) || '[]');
  
  // Remove old attempts outside the time window
  const recentAttempts = attempts.filter(timestamp => now - timestamp < timeWindow);
  
  if (recentAttempts.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  // Add current attempt
  recentAttempts.push(now);
  localStorage.setItem(`rateLimit_${key}`, JSON.stringify(recentAttempts));
  
  return true; // Within rate limit
};

/**
 * Generate a simple CSRF token (for demonstration purposes)
 * In a real application, this should be generated server-side
 * @returns {string} - CSRF token
 */
export const generateCSRFToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * Validate form data before submission
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateFormData = (formData) => {
  const errors = {};
  let isValid = true;

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
    isValid = false;
  }

  // Email validation
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }

  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters long';
    isValid = false;
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
    isValid = false;
  }

  return { isValid, errors };
};

/**
 * Secure local storage wrapper
 */
export const secureStorage = {
  setItem: (key, value) => {
    try {
      const sanitizedValue = typeof value === 'string' ? sanitizeInput(value) : value;
      localStorage.setItem(key, JSON.stringify(sanitizedValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  getItem: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

