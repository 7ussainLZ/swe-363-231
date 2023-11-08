const EventEmitter = require('events');

// Create a class that extends EventEmitter
class CustomEventEmitter extends EventEmitter {}

// Instantiate the event emitter
const customEventEmitter = new CustomEventEmitter();

// Event handler for 'userLoggedIn'
customEventEmitter.on('userLoggedIn', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
});

// Event handler for 'userLoggedOut'
customEventEmitter.on('userLoggedOut', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged out`);
});

// Function to simulate random user activity
function simulateUserActivity() {
  const userId = Math.floor(Math.random() * 1000); // Simulate a user ID
  const randomSeconds = Math.random() * 1.9 + 0.1; // Random time from 0.1 to 2 seconds

  // Simulate user login
  customEventEmitter.emit('userLoggedIn', userId);

  // Set a timeout to call this function again for continuous simulation
  setTimeout(simulateUserActivity, randomSeconds * 1000);
}

// Start simulating user activity
simulateUserActivity();
