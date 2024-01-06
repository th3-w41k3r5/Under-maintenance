// Function to convert current time to IST
function getCurrentIST() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const istTime = new Date(now.getTime() + istOffset);
  return istTime;
}

// Set the date to count down to (IST)
const countdownDate = new Date('2024-01-04T18:00:00Z').getTime(); // Convert to UTC

// Update the countdown every second
const timer = setInterval(function() {
  const nowIST = getCurrentIST().getTime();
  const distance = countdownDate - nowIST;

  // Calculate remaining time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Countdown expired!';
  }
}, 1000);
