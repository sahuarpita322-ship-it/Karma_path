// Data for Odisha Village Artisans, Traditional Foods, and Responsible Tourism Experiences

export interface VillageArtisan {
  id: string;
  name: string;
  odiaName: string;
  village: string;
  district: string;
  craft: string;
  yearsOfExperience: number;
  awards?: string[];
  photo: string;
  story: string;
  speciality: string;
  phoneContact?: string;
  verified: boolean;
  featuredProductIds: string[];
}

export interface VillageRecipe {
  id: string;
  name: string;
  odiaName: string;
  village: string;
  district: string;
  category: 'Sweet' | 'Savory' | 'Traditional Meal' | 'Pickle & Condiment';
  ingredients: string[];
  preparationTime: string;
  traditionalMethod: string;
  culturalImportance: string;
  photo: string;
  contributor: string;
}

export interface VillageTourismExperience {
  id: string;
  title: string;
  odiaTitle: string;
  village: string;
  district: string;
  duration: string;
  groupSize: string;
  pricePerPerson: number;
  hostName: string;
  hostTitle: string;
  description: string;
  itinerary: string[];
  inclusions: string[];
  guidelines: string[];
  photo: string;
  verified: boolean;
}

export const VERIFIED_VILLAGE_ARTISANS: VillageArtisan[] = [
  {
    id: 'art-mohan-rao',
    name: 'K. Mohan Rao',
    odiaName: 'କେ. ମୋହନ ରାଓ',
    village: 'Nuagaon / Berhampur',
    district: 'Ganjam',
    craft: 'GI-Tagged Berhampuri Patta Silk Weaving',
    yearsOfExperience: 38,
    awards: ['National Merit Award (Handloom)', 'State Master Weaver Honour'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    story: 'Born into the traditional Devanga weaver lineage of Ganjam, Master Mohan Rao has preserved the intricate Phoda Kumbha (interlocked temple spire) double-warp technique on pit looms for over 38 years. His family supplies the sacred silk Joda robes worn by deities during major temple car festivals.',
    speciality: 'Heavy mulberry silk sarees with 100% pure zari and traditional temple spire borders.',
    verified: true,
    featuredProductIds: ['p-9']
  },
  {
    id: 'art-kailash-maharana',
    name: 'Kailash Maharana',
    odiaName: 'କୈଳାସ ମହାରଣା',
    village: 'Belaguntha',
    district: 'Ganjam',
    craft: 'Belaguntha Flexible Brass Fish (Pitala Machha)',
    yearsOfExperience: 35,
    awards: ['National Handicrafts Award', 'Odisha Shilpi Samman'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    story: 'Master Kailash is among the few surviving master sculptors of the 200-year-old Belaguntha brass fish craft. Without a single drop of solder or welding, he meticulously rivets dozens of paper-thin interlocking brass scales so the fish wiggles with organic fluidity when suspended.',
    speciality: 'Metamorphic kinetic brass sculpture and traditional temple lamps.',
    verified: true,
    featuredProductIds: ['p-10']
  },
  {
    id: 'art-rabindra-maharana',
    name: 'Guru Rabindra Maharana',
    odiaName: 'ଗୁରୁ ରବୀନ୍ଦ୍ର ମହାରଣା',
    village: 'Raghurajpur',
    district: 'Puri',
    craft: 'Pattachitra & Palm-Leaf Stylus Engraving',
    yearsOfExperience: 42,
    awards: ['National Heritage Master Craftsman', 'Rashtrapati Puraskar Nominee'],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    story: 'Carrying forward an uninterrupted 5-generation lineage in Raghurajpur, Guru Rabindra prepares his own organic pigments from crushed river rocks, conch shells, and tamarind glue. He has trained over 120 village youth in ancient mythological scroll painting.',
    speciality: 'Mythological Dasavatara and Krishna Leela paintings on canvas and dried palm leaves.',
    verified: true,
    featuredProductIds: ['p-1', 'p-7']
  },
  {
    id: 'art-kishori-meher',
    name: 'Kishori Meher',
    odiaName: 'କିଶୋରୀ ମେହେର',
    village: 'Nuapatna',
    district: 'Cuttack',
    craft: 'Khandua Pata Gitagovinda Silk Weaving',
    yearsOfExperience: 40,
    awards: ['State Handloom Ratna', 'Utkal Weaving Excellence Award'],
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    story: 'Weaving in Nuapatna since age 14, Kishori Meher specializes in weaving complete Sanskrit verses of Jayadeva’s Gita Govinda directly into the warp threads of Khandua Pata silk, a tradition revered in the Puri Jagannath temple since the 12th century.',
    speciality: 'Tie-and-dye calligraphic Sanskrit border sarees in natural lac red and turmeric yellow.',
    verified: true,
    featuredProductIds: ['p-2']
  },
  {
    id: 'art-sukri-mirgan',
    name: 'Sukri Mirgan',
    odiaName: 'ଶୁକ୍ରୀ ମିର୍ଗାନ',
    village: 'Kotpad',
    district: 'Koraput',
    craft: 'Aal-Tree Organic Dyed Tribal Handloom',
    yearsOfExperience: 30,
    awards: ['Tribal Craft Preservation Fellow', 'UNDP Rural Artisan Pioneer'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    story: 'Sukri leads a cooperative of 24 tribal women in Kotpad who forage wild Aal tree root bark from the Nabarangpur-Koraput forests. The roots undergo a sacred 20-day natural dyeing cycle with castor oil and wood ash before being woven on unmotorized frame looms.',
    speciality: 'Heavy, breathable organic cotton shawls and dupattas with ancestral crab and fish motifs.',
    verified: true,
    featuredProductIds: ['p-3']
  },
  {
    id: 'art-mangaraj-rana',
    name: 'Mangaraj Rana',
    odiaName: 'ମଙ୍ଗରାଜ ରଣା',
    village: 'Sadeibareni',
    district: 'Dhenkanal',
    craft: 'Lost-Wax Dhokra Metal Casting',
    yearsOfExperience: 28,
    awards: ['National Tribal Arts Award'],
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    story: 'Living in the quiet forest village of Sadeibareni, Mangaraj utilizes ancient beeswax wire modeling and clay molds to cast one-of-a-kind rustic brass figurines, preserving a technique continuous since the Mohenjo-daro Dancing Girl.',
    speciality: 'Primitive folk musicians, elephant howdahs, and tribal ritual diya lamps.',
    verified: true,
    featuredProductIds: ['p-6']
  }
];

export const VERIFIED_VILLAGE_RECIPES: VillageRecipe[] = [
  {
    id: 'rec-1',
    name: 'Ganjam Ambula & Mango Achar with Badi Chura',
    odiaName: 'ଗଞ୍ଜାମ ଆମ୍ବୁଲ ଖଟା ଓ ବଡ଼ି ଚୂରା',
    village: 'Nuagaon / Berhampur',
    district: 'Ganjam',
    category: 'Pickle & Condiment',
    ingredients: [
      'Sundried raw mangoes (Ambula)',
      'Hand-ground black mustard seed paste',
      'Panch Phoran (Five spice blend)',
      'Crushed dried moong badis',
      'Pure cold-pressed mustard oil',
      'Roasted green chillies and curry leaves'
    ],
    preparationTime: '30 Minutes (plus 4 days sun-curing)',
    traditionalMethod: 'Whole desi mangoes are soaked in rock salt and turmeric, dried under the hot Ganjam sun on bamboo mats, then slow-cured in spiced mustard oil. Served alongside hand-crushed roasted badi chura with green chillies.',
    culturalImportance: 'A staple of Southern Odisha culinary heritage, famously paired with afternoon water rice (Pakhala) during hot summer days.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    contributor: 'Manorama Patro, Berhampur Women SHG'
  },
  {
    id: 'rec-2',
    name: 'Belaguntha Kheer & Sanakhemundi Pakhala Thali',
    odiaName: 'ବେଲଗୁଣ୍ଠା ଖୀରି ଓ ସାନଖେମୁଣ୍ଡି ପଖାଳ',
    village: 'Belaguntha',
    district: 'Ganjam',
    category: 'Traditional Meal',
    ingredients: [
      'Ganjam fragrant short-grain rice',
      'Pure buffalo milk (for Kheer)',
      'Green cardamom and bay leaves',
      'Fermented water rice (Torani)',
      'Roasted pumpkin flowers (Kakharu Phula Bhaja)',
      'Sukhua or Saag Bhaja'
    ],
    preparationTime: '45 Minutes',
    traditionalMethod: 'Rice is slow-simmered in earthen pots over woodfire until thick and creamy, sweetened with unrefined cane jaggery. Pakhala is seasoned with roasted cumin, green chillies, and fresh mint.',
    culturalImportance: 'Offered during community village feasts (Melana) and harvest celebrations across the Bhanjanagar valley.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    contributor: 'Bipin Bihari Maharana, Belaguntha'
  },
  {
    id: 'rec-3',
    name: 'Raghurajpur Chhena Poda in Sal Leaves',
    odiaName: 'ଶାଳପତ୍ର ପୋଡ଼ା ଛେନା',
    village: 'Raghurajpur',
    district: 'Puri',
    category: 'Sweet',
    ingredients: [
      'Fresh cow milk cottage cheese (Chhena)',
      'Cane sugar & organic jaggery',
      'Cardamom powder',
      'Ghee & semolina (Sooji)',
      'Forest Sal leaves (Shorea robusta)'
    ],
    preparationTime: '2 Hours (slow bake)',
    traditionalMethod: 'Soft fresh chhena is kneaded by hand with cardamom and sugar, wrapped securely in triple layers of green Sal leaves, and slow-baked inside glowing cow-dung charcoal embers until caramelized with a dark crust.',
    culturalImportance: 'The quintessential sweet offering of coastal Odisha, beloved by temple devotees and artisan guests.',
    photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    contributor: 'Guru Rabindra, Raghurajpur'
  },
  {
    id: 'rec-4',
    name: 'Kotpad Mandia Jau (Nutritious Ragi Porridge)',
    odiaName: 'କୋଟପାଡ଼ ମାଣ୍ଡିଆ ଜାଉ',
    village: 'Kotpad',
    district: 'Koraput',
    category: 'Traditional Meal',
    ingredients: [
      'Stone-ground indigenous Finger Millet (Mandia)',
      'Sour buttermilk or water rice torani',
      'Salt & crushed green chillies',
      'Finely chopped onions and coriander'
    ],
    preparationTime: '25 Minutes',
    traditionalMethod: 'Ragi flour is whisked with fermented water, brought to a gentle simmer in a mud handi until velvety, and cooled before mixing with churned village curd.',
    culturalImportance: 'Ancient superfood providing cooling endurance to tribal weavers and farmers working under the tropical sun.',
    photo: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    contributor: 'Sukri Mirgan, Kotpad'
  }
];

export const VERIFIED_VILLAGE_EXPERIENCES: VillageTourismExperience[] = [
  {
    id: 'exp-berhampuri-silk',
    title: 'Berhampuri Patta Silk Pit-Loom Weaving Demonstration & Studio Tour',
    odiaTitle: 'ବ୍ରହ୍ମପୁର ପାଟ ବୁଣା କର୍ମଶାଳା',
    village: 'Nuagaon / Berhampur',
    district: 'Ganjam',
    duration: '3 Hours',
    groupSize: '2 - 6 Guests',
    pricePerPerson: 650,
    hostName: 'Master Weaver K. Mohan Rao',
    hostTitle: 'National Award-winning Handloom Patriarch',
    description: 'Step into an authentic weaver’s verandah in the silk hamlet of Nuagaon. Watch the intricate double-warp Kumbha spire weaving on centuries-old wooden pit looms, try your hand at spinning pure silk threads on the Charkha, and enjoy a traditional glass of Ganjam sweet buttermilk.',
    itinerary: [
      'Welcome with traditional Chandan teeka and fresh coconut water.',
      'Guided walk through the village weaver streets where pit looms echo with rhythmic shuttles.',
      'Hands-on session learning warp alignment and the Phoda Kumbha interlocking technique.',
      'Private viewing of rare antique Berhampuri Patta bridal drapes.'
    ],
    inclusions: [
      'Hands-on loom trial session',
      'Local seasonal refreshments and traditional Ganjam Pakhala / sweets',
      'Direct interaction with master weaver family',
      'Souvenir pure silk bookmark'
    ],
    guidelines: [
      'Remove footwear before stepping onto loom platforms.',
      'Photography permitted with artisan consent.',
      'Advance booking required 24 hours prior.'
    ],
    photo: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    verified: true
  },
  {
    id: 'exp-belaguntha-fish',
    title: 'Belaguntha Flexible Brass Fish Sheet Metal Workshop',
    odiaTitle: 'ବେଲଗୁଣ୍ଠା ପିତ୍ତଳ ମାଛ ଗଢ଼ା ଶିକ୍ଷା',
    village: 'Belaguntha',
    district: 'Ganjam',
    duration: '2.5 Hours',
    groupSize: '2 - 8 Guests',
    pricePerPerson: 500,
    hostName: 'Kailash Maharana',
    hostTitle: 'Master Metal Sculptor',
    description: 'Learn the secrets of the world-famous kinetic brass flexible jumping fish (Pitala Machha) in the artisan home workshop of Belaguntha. Witness cold-hammering, scale cutting, and interlocking joints assembled without glue or welding.',
    itinerary: [
      'Introduction to the 200-year history of Belaguntha sheet metal craft.',
      'Demonstration of precision chisel cutting and scale perforations.',
      'Hands-on assembly of miniature brass jointed scales.',
      'Visit to village brass casting furnaces and community temple.'
    ],
    inclusions: [
      'All safety goggles, aprons, and brass sheet materials provided',
      'Tea, Belaguntha Kheeri, and village refreshments',
      'Handmade miniature brass souvenir to take home'
    ],
    guidelines: [
      'Participants must wear closed-toe shoes.',
      'Suitable for adults and children aged 12+ under guidance.'
    ],
    photo: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    verified: true
  },
  {
    id: 'exp-raghurajpur-pattachitra',
    title: 'Raghurajpur Pattachitra Masterclass & Village Heritage Walk',
    odiaTitle: 'ରଘୁରାଜପୁର ପଟ୍ଟଚିତ୍ର ଓ ଗୋଟିପୁଅ ଅନୁଭୂତି',
    village: 'Raghurajpur',
    district: 'Puri',
    duration: '4 Hours',
    groupSize: '1 - 10 Guests',
    pricePerPerson: 850,
    hostName: 'Guru Rabindra Maharana',
    hostTitle: 'Heritage Village Master Artist',
    description: 'Experience India’s premier heritage craft village. Paint your own traditional bookmark using natural stone pigments on handmade cloth canvas, explore living verandah art galleries, and watch a private Gotipua acrobatic dance rehearsal.',
    itinerary: [
      'Walking tour of mural-painted village houses.',
      'Pigment preparation demo: grinding Hingula red and Haritala yellow.',
      'Guided painting of a traditional floral or bird motif.',
      'Gotipua dance rehearsal viewing at the village Gurukul.'
    ],
    inclusions: [
      'Raw cotton canvas & natural mineral pigments',
      'Fresh coconut water and village Chhena Poda',
      'Completed personalized painting to take home'
    ],
    guidelines: [
      'Art materials wash off easily with water.',
      'Respect silence during Gotipua dance training.'
    ],
    photo: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    verified: true
  }
];
