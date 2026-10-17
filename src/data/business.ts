export const business = {
  name: 'Cosera Resto',
  slug: 'cosera-resto-jambi',
  category: 'Resto & Coffee',
  city: 'Kota Jambi',
  rating: 4.6,
  reviewCount: 190,
  phone: '6282278071017',
  phoneDisplay: '0822-7807-1017',
  phoneNote: 'Nomor reservasi dari caption Instagram resmi — verifikasi via WA sebelum datang.',
  mapsUrl: 'https://maps.google.com/?q=CO.SERA+Jl+Sumantri+Brojonegoro+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Jl+Sumantri+Brojonegoro+Sipin+Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Jl. Prof. DR. Sumantri Brojonegoro No.119, Payo Lebar, Jelutung, Kota Jambi (area Sipin)',
  hours: 'Buka setiap hari 07.00–22.00 (dine in)',
  instagram: 'https://www.instagram.com/cosera.id',
  instagramLabel: '@cosera.id (7,7 rb pengikut)',
  gofood: 'https://gofood.co.id/jambi/restaurant/co-sera-jelutung-43887fab-9e0c-4808-9f96-e324a453b3ab',
  schemaType: 'Restaurant',
  ctaLabel: 'Reservasi via WA',
  ctaUrl: 'https://wa.me/6282278071017',
  title: 'Cosera Resto Jambi — Resto & Coffee Sipin Jelutung',
  description: 'CO.SERA resto & coffee di Jl. Sumantri Brojonegoro Jambi, buka 07.00–22.00 tiap hari. Tenderloin steak, soto ayam, carbonara — reservasi 0822-7807-1017.',
  canonicalPath: '/',
  ogImage: '/images/cosera-steak.webp',
};

export const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/menu', label: 'Menu' },
  { href: '/acara', label: 'Paket Acara' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' },
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const menuGroups = [
  {
    category: 'Makanan — Nasional & Internasional',
    items: [
      { name: 'Tenderloin Steak', price: 'Rp149.500', status: 'Terverifikasi GoFood', desc: 'Menu terlaris di GoFood CO.SERA Jelutung.', img: 'steak' },
      { name: 'Nasi Soto Ayam Bening', price: 'Rp45.500', status: 'Terverifikasi GoFood', desc: 'Harga GoFood, dapat berbeda dengan dine-in.', img: 'soto' },
      { name: 'Spaghetti Carbonara', price: 'Rp71.500', status: 'Terverifikasi GoFood', desc: 'Harga GoFood, dapat berbeda dengan dine-in.', img: 'carbonara' },
      { name: 'Nasi Goreng', price: 'Tanya via WA', status: 'Disebut reviewer', desc: 'Direkomendasikan pengunjung di ulasan.', img: 'nasgor' },
    ],
  },
  {
    category: 'Kopi & Minuman',
    items: [
      { name: 'Kopi Susu Signature', price: 'Tanya via WA', status: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.', img: 'kopsus' },
      { name: 'Matcha Latte', price: 'Tanya via WA', status: 'Estimasi', desc: 'Harga estimasi, konfirmasi via WA.', img: 'matcha' },
    ],
  },
];

export const eventPackages = [
  { name: 'Rapat & Gathering Kantor', desc: 'Ruangan untuk meeting dan kumpul tim, reservasi slot via WA.', price: 'Tanya via WA' },
  { name: 'Ulang Tahun & Selebrasi', desc: 'Paket makan grup untuk acara ulang tahun keluarga.', price: 'Tanya via WA' },
  { name: 'Arisan & Komunitas', desc: 'Slot rutin arisan dan kumpul komunitas tiap pekan.', price: 'Tanya via WA' },
  { name: 'Katering & Pesanan Partai', desc: 'Pesanan jumlah banyak untuk acara di luar resto.', price: 'Tanya via WA' },
];

export const notes: string[] = [
  'Harga GoFood belum termasuk PPN (info Instagram resmi) dan dapat berbeda dengan harga dine-in.',
  'Nomor 0822-7807-1017 berasal dari caption Instagram resmi — verifikasi via WA sebelum datang.',
];
