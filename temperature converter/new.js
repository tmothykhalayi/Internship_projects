document.getElementById("convert-btn").addEventListener("click", function() {
    // Get input temperature and selected unit
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    // Validate if the input is a valid number
    if (isNaN(temperatureInput) || temperatureInput === "") {
        alert("Please enter a valid number.");
        return;
    }

    let temperature = parseFloat(temperatureInput);
    let convertedTemp = {};

    // Convert the temperature based on the selected unit
    switch (unit) {
        case "celsius":
            convertedTemp.fahrenheit = (temperature * 9/5) + 32;
            convertedTemp.kelvin = temperature + 273.15;
            break;
        
        case "fahrenheit":
            convertedTemp.celsius = (temperature - 32) * 5/9;
            convertedTemp.kelvin = ((temperature - 32) * 5/9) + 273.15;
            break;
        
        case "kelvin":
            convertedTemp.celsius = temperature - 273.15;
            convertedTemp.fahrenheit = ((temperature - 273.15) * 9/5) + 32;
            convertedTemp.kelvin = temperature; // Kelvin value should be the same as input
            break;

        default:
            alert("Please select a valid unit!");
            return;
    }

    // Display the result
    document.getElementById("converted-temp").innerHTML = `
      <strong>Converted Temperatures:</strong><br>
      Celsius: ${convertedTemp.celsius !== undefined ? convertedTemp.celsius.toFixed(2) : 'N/A'} °C<br>
      Fahrenheit: ${convertedTemp.fahrenheit !== undefined ? convertedTemp.fahrenheit.toFixed(2) : 'N/A'} °F<br>
      Kelvin: ${convertedTemp.kelvin !== undefined ? convertedTemp.kelvin.toFixed(2) : 'N/A'} K
    `;
});
