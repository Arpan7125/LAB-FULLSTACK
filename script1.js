document.addEventListener('DOMContentLoaded', () => {
  const coffeeContainer = document.getElementById('coffeeContainer');
  const searchBtn = document.getElementById('searchBtn');
  const sortOrder = document.getElementById('sortOrder');
  const searchInput = document.getElementById('searchInput');
  const form = document.getElementById('feedbackForm');
  const greetingMsg = document.getElementById('greetingMsg');
  const locationMsg = document.getElementById('locationMsg');
  if (locationMsg && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationMsg.textContent = `Your location: Latitude ${latitude.toFixed(4)}, Longitude ${longitude.toFixed(4)}`;
      },
      (error) => {
        locationMsg.textContent = "Location access denied or unavailable.";
      }
    );
  } else if (locationMsg) {
    locationMsg.textContent = "Geolocation is not supported by your browser.";
  }

  let coffeeList = [];

  // Fetch and display coffee
  async function loadCoffeeData() {
    const res = await fetch(' https://api.sampleapis.com/coffee/hot');
    coffeeList = await res.json();
    displayCoffees(coffeeList.slice(0, 8));
  }

  function displayCoffees(data) {
    coffeeContainer.innerHTML = '';
    data.forEach(coffee => {
      coffeeContainer.innerHTML += `
        <div class="border p-4 rounded shadow bg-white">
          <img src="${coffee.image}" alt="${coffee.title}" class="w-full h-40 object-cover mb-2 rounded">
          <h3 class="text-xl font-bold">${coffee.title}</h3>
          <p>${coffee.description}</p>
          <p class="text-sm mt-1 text-gray-600"><strong>Ingredients:</strong> ${coffee.ingredients.join(', ')}</p>
        </div>
      `;
    });
  }

  searchBtn.addEventListener('click', () => {
    const term = searchInput.value.toLowerCase();
    const filtered = coffeeList.filter(c => c.title.toLowerCase().includes(term));
    displayCoffees(filtered);
  });

  sortOrder.addEventListener('change', () => {
    const order = sortOrder.value;
    const sorted = [...coffeeList].sort((a, b) => {
      return order === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
    displayCoffees(sorted.slice(0, 8));
  });


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        locationMsg.textContent = `Your location: Latitude ${latitude}, Longitude ${longitude}`;
      }, () => {
        locationMsg.textContent = 'Location access denied.';
      });
    }
  }

  loadCoffeeData();
  showGreeting();
  getLocation();
});
