const sportsProducts = [
  {
    id: 1,
    title: 'Football',
    price: 29.99,
    description: 'Premium quality football for training and matches.',
    category: 'football',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: 'Cricket Bat',
    price: 49.99,
    description: 'Lightweight cricket bat made from English willow.',
    category: 'cricket',
    image: 'https://images.unsplash.com/photo-1505843276877-1a781979e8c0?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.7, count: 80 }
  },
  {
    id: 3,
    title: 'Basketball',
    price: 24.99,
    description: 'Durable basketball suitable for indoor and outdoor play.',
    category: 'basketball',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.3, count: 60 }
  },
  {
    id: 4,
    title: 'Tennis Racket',
    price: 59.99,
    description: 'Lightweight tennis racket for all skill levels.',
    category: 'tennis',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.6, count: 45 }
  },
  {
    id: 5,
    title: 'Dumbbells (Pair)',
    price: 39.99,
    description: 'Set of 2 dumbbells, perfect for home workouts.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.8, count: 100 }
  },
  {
    id: 6,
    title: 'Yoga Mat',
    price: 19.99,
    description: 'Non-slip yoga mat for all types of exercises.',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.4, count: 70 }
  },
  {
    id: 7,
    title: 'Badminton Shuttlecock (Pack of 6)',
    price: 9.99,
    description: 'High-durability shuttlecocks for badminton.',
    category: 'badminton',
    image: 'https://images.unsplash.com/photo-1505843276877-1a781979e8c0?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.2, count: 30 }
  },
  {
    id: 8,
    title: 'Cycling Helmet',
    price: 34.99,
    description: 'Safety helmet for cycling enthusiasts.',
    category: 'cycling',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.7, count: 55 }
  },
  {
    id: 9,
    title: 'Running Shoes',
    price: 69.99,
    description: 'Comfortable running shoes for men and women.',
    category: 'running',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.9, count: 150 }
  },
  {
    id: 10,
    title: 'Swimming Goggles',
    price: 14.99,
    description: 'Anti-fog swimming goggles for clear underwater vision.',
    category: 'swimming',
    image: 'https://images.unsplash.com/photo-1505843276877-1a781979e8c0?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.1, count: 40 }
  },
  // --- New products below ---
  {
    id: 11,
    title: 'Table Tennis Bat',
    price: 22.99,
    description: 'Professional table tennis bat for fast play.',
    category: 'table tennis',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.3, count: 35 }
  },
  {
    id: 12,
    title: 'Boxing Gloves',
    price: 44.99,
    description: 'Durable boxing gloves for training and sparring.',
    category: 'boxing',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.6, count: 60 }
  },
  {
    id: 13,
    title: 'Golf Ball Set',
    price: 17.99,
    description: 'Pack of 12 high-quality golf balls.',
    category: 'golf',
    image: 'https://images.unsplash.com/photo-1505843276877-1a781979e8c0?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.2, count: 25 }
  },
  {
    id: 14,
    title: 'Skateboard',
    price: 54.99,
    description: 'Sturdy skateboard for tricks and cruising.',
    category: 'skating',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.5, count: 40 }
  },
  {
    id: 15,
    title: 'Hockey Stick',
    price: 32.99,
    description: 'Lightweight hockey stick for field hockey.',
    category: 'hockey',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.4, count: 28 }
  },
  {
    id: 16,
    title: 'Skipping Rope',
    price: 8.99,
    description: 'Adjustable skipping rope for cardio workouts.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.3, count: 50 }
  },
  {
    id: 17,
    title: 'Volleyball',
    price: 21.99,
    description: 'Soft-touch volleyball for beach and indoor play.',
    category: 'volleyball',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.5, count: 33 }
  },
  {
    id: 18,
    title: 'Kettlebell',
    price: 27.99,
    description: 'Cast iron kettlebell for strength training.',
    category: 'fitness',
    image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.7, count: 44 }
  },
  {
    id: 19,
    title: 'Surfboard',
    price: 199.99,
    description: 'Lightweight surfboard for all wave conditions.',
    category: 'surfing',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.8, count: 18 }
  },
  {
    id: 20,
    title: 'Ski Goggles',
    price: 31.99,
    description: 'Anti-fog ski goggles for clear vision on the slopes.',
    category: 'skiing',
    image: 'https://images.unsplash.com/photo-1505843276877-1a781979e8c0?auto=format&fit=crop&w=400&q=80',
    rating: { rate: 4.6, count: 22 }
  }
];

export default sportsProducts; 