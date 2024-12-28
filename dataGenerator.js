export default function generateTensileData(dataPoints) {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous data generation (e.g., fetching from a database or API)
      setTimeout(() => {
        const data = [];
        for (let i = 0; i < dataPoints; i++) {
          data.push({ 
            force: Math.random() * 1000, 
            displ: Math.random() * 10, 
            unit: "mm" 
          });
        }
        resolve(data); 
      }, 1000); // Simulate a 1-second delay
    });
  }