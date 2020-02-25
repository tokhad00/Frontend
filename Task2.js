const today = new Date();
const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
const mins = Math.floor((tomorrow - today) / 60000);

console.log(today);
console.log(tomorrow);

alert("До конца дня осталось " + mins + " полных минут");