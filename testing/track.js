const geoip = require("geoip-lite");

// Fungsi untuk mendapatkan informasi geolocation IP
function getIpInfo(ip) {
  const geo = geoip.lookup(ip); // Mengambil informasi geolocation berdasarkan IP
  return geo;
}

// Contoh penggunaan
const ip = "8.8.8.8"; // Ganti dengan IP yang ingin Anda lacak
const ipInfo = getIpInfo(ip);

if (ipInfo) {
  console.log("IP Information:", ipInfo);
} else {
  console.log("IP not found");
}
