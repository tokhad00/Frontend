const house = {
    address: prompt("Введите адрес дома: "),
    yearOfBuild: Number(prompt("Введите год постройки: ")),
    floors: Number(prompt("Введите количество этажей: ")),
    flats: [],
    calculateTotalArea() {
        let totalArea = 0;
        for (let j = 0; j < this.flats.length; j++) {
            totalArea += this.flats[j].area;
        }
        return totalArea;
    },

    calculateTotalPopulation() {
        let totalPopulation = 0;
        for (let j = 0; j < this.flats.length; j++) {
            totalPopulation += this.flats[j].numberOfTenants;
        }
        return totalPopulation;
    },

    calculateTotalSumOfUtilities() {
        let totalSumOfUtilities = 0;
        for (let j = 0; j < this.flats.length; j++) {
            totalSumOfUtilities += this.flats[j].getSumOfUtilities();
        }
        return totalSumOfUtilities;
    },

    calculateAverageDensity() {
        return this.calculateTotalArea() / this.calculateTotalPopulation();
    }
};

const numberOfFlats = Number(prompt("Введите количество квартир: "));

for (let i = 0; i < numberOfFlats; i++) {
    house.flats.push({
        numberOfRooms: Math.round((Math.random() * 4) + 1),
        numberOfTenants: Math.round((Math.random() * 9) + 1),
        area: Number(((Math.random() * 70) + 20).toFixed(2)),
        floor: Math.round((Math.random() * (house.floors - 1)) + 1),
        numberOfFlat: Math.round((Math.random() * (numberOfFlats - 1)) + 1),
        getSumOfUtilities() {
            const sumOfUtilitiesInWarmPeriod = ((this.area * this.numberOfTenants) / 2) * 7;  //суммарно за апрель-октябрь
            const sumOfUtilitiesInColdPeriod = ((1.8 * this.area * this.numberOfTenants) / 2) * 5; //суммарно за январь-март и ноябрь-декабрь
            return sumOfUtilitiesInWarmPeriod + sumOfUtilitiesInColdPeriod;
        },
    });
}

console.log(house);
console.table(house.flats);
console.log("Годовая сумма КУ для квартиры [1]: " + house.flats[1].getSumOfUtilities());
console.log("Суммарная площадь дома: " + house.calculateTotalArea());
console.log("Население дома составляет: " + house.calculateTotalPopulation());
console.log("Общая годовая сумма КУ по всему дому: " + house.calculateTotalSumOfUtilities());
console.log("Средняя плотность населения: " + house.calculateAverageDensity());