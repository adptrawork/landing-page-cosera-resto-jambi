export const business = {
  name: 'Cosera Resto',
  slug: 'cosera-resto-jambi',
  category: 'Resto & Katering Acara',
  city: 'Kota Jambi',
  rating: 4.6,
  reviewCount: 190,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Cosera%20Resto%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Cosera Resto Jambi — Paket Acara & Katering',
  description: 'Cosera Resto Jambi: paket rapat, ultah, arisan & katering, reservasi via WhatsApp.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Nasi Goreng Andalan",
    "price": "Rp 28.000",
    "badge": "Best Seller",
    "stock": "Tersedia"
  },
  {
    "name": "Ayam Bakar Rempah",
    "price": "Rp 32.000",
    "badge": "Favorit",
    "stock": "Tersedia"
  },
  {
    "name": "Kopi Susu Signature",
    "price": "Rp 22.000",
    "badge": "Andalan",
    "stock": "Tersedia"
  },
  {
    "name": "Matcha Latte",
    "price": "Rp 25.000",
    "badge": "Segar",
    "stock": "Tersedia"
  },
  {
    "name": "Snack Platter Berdua",
    "price": "Rp 45.000",
    "badge": "Sharing",
    "stock": "Tersedia"
  },
  {
    "name": "Paket Rombongan 4 Orang",
    "price": "Rp 120.000",
    "badge": "Hemat",
    "stock": "Reservasi"
  }
];
