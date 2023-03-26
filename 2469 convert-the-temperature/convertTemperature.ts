function convertTemperature(celsius: number): number[] {
    var kelvin = celsius + 273.15;
    var fahrenheit = celsius * 1.8 + 32;

    return [kelvin, fahrenheit];
}
