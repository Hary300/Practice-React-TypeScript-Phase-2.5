import { type User } from '../components/types/user-type';

const usersData: Array<User> = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    name: 'Amanda Lestari',
    role: 'Frontend Developer',
    location: 'Jakarta, Indonesia',
    bio: 'Suka ngoding React sambil minum kopi. Sedang mendalami animasi web dan performa UI.',
    stats: {
      followers: '1.2K',
      following: '450',
      projects: 24,
    },
    isAvailableForHire: true,
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    name: 'Rian Hidayat',
    role: 'UI/UX Designer',
    location: 'Bandung, Indonesia',
    bio: 'Membuat aplikasi tidak hanya berfungsi, tapi juga indah dan nyaman saat digunakan user.',
    stats: {
      followers: '3.4K',
      following: '120',
      projects: 42,
    },
    isAvailableForHire: false,
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    name: 'Siti Rahma',
    role: 'DevOps Engineer',
    location: 'Yogyakarta, Indonesia',
    bio: 'Spesialis menjinakkan server, hobi otomatisasi, dan memastikan aplikasi dapet rating 99.9% uptime.',
    stats: {
      followers: '890',
      following: '600',
      projects: 15,
    },
    isAvailableForHire: true,
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    name: 'Budi Santoso',
    role: 'Backend Developer',
    location: 'Surabaya, Indonesia',
    bio: 'Arsitek database dan pembuat API yang kokoh. Lebih suka berkutat dengan logika server daripada urusan CSS.',
    stats: {
      followers: '2.1K',
      following: '310',
      projects: 38,
    },
    isAvailableForHire: false,
  },
];

export default usersData;
