// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Get canvas elements
  const forceDisplacementChart = document.getElementById('forceDisplacementChart');
  const stressStrainChart = document.getElementById('stressStrainChart');

  // Fetch data from server (replace with your actual data fetching logic)
  fetch('/getData')
    .then(response => response.json())
    .then(data => {
      // Create force vs displacement chart
      new Chart(forceDisplacementChart, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Force (kN) vs Displacement (mm)',
            data: data.forces,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Displacement (mm)'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Force (kN)'
              }
            }
          }
        }
      });

      // Create stress vs strain chart
      new Chart(stressStrainChart, {
        type: 'line',
        data: {
          labels: data.strains,
          datasets: [{
            label: 'Stress (MPa) vs Strain',
            data: data.stresses,
            borderColor: 'rgb(153, 102, 255)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Strain'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Stress (MPa)'
              }
            }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});