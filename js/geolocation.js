
// Function to get user's geolocation
function getUserLocation() {
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById('location').textContent = 
            `Latitude: ${latitude}, Longitude: ${longitude}`;
        },
        // Error callback
        (error) => {
        let errorMessage = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'User denied the request for Geolocation.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'The request to get user location timed out.';
            break;
          default:
            errorMessage = 'An unknown error occurred.';
        }
        document.getElementById('error').textContent = errorMessage;
      }
    );
  } else {
    document.getElementById('error').textContent =
      'Geolocation is not supported by this browser.';
  }
}

// Call the function when the page loads
window.onload = getUserLocation;

