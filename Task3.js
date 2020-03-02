const hostExp = /\.([^\.]+?)$/;

domain = hostExp.exec(location.hostname);
console.log(domain[1]);