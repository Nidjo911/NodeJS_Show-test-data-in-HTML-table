// main.js
const { createDataset } = require('./dataGenerator');
const TensileAnalyzer = require('./tensileAnalysis');

async function main() {
    try {
        // Generate dataset
        await createDataset();
        console.log('Dataset created successfully');

        // Analyze data
        const analyzer = new TensileAnalyzer();
        await analyzer.loadData('tensile_data.csv');
        console.log('Data loaded successfully');

        // Train model
        const trainingResult = await analyzer.train();
        console.log('Training completed:', trainingResult);

        // Generate visualization
        await analyzer.generatePlot();
        console.log('Analysis complete!');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();