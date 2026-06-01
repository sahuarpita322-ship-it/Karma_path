export const stats = {
  plasticCollected: 0,
  tasksCompleted: 0,
  heritagePreserved: 0,
  tokensDistributed: 0
};

export const culturalLocations = [
  { id: 'l1', name: 'Konark Sun Temple', region: 'Odisha', description: '13th-century Sun Temple, UNESCO world heritage.', image: 'https://images.pexels.com/photos/161963/sun-temple-konark-odisha-india-161963.jpeg', place: 'Konark' },
  { id: 'l2', name: 'Jagannath Temple Puri', region: 'Odisha', description: 'Famous pilgrimage temple and Rath Yatra.', image: 'https://images.pexels.com/photos/5193403/pexels-photo-5193403.jpeg', place: 'Puri' },
  { id: 'l3', name: 'Chilika Lake', region: 'Odisha', description: 'Asia\'s largest brackish water lagoon.', image: 'https://images.pexels.com/photos/1628563/pexels-photo-1628563.jpeg', place: 'Chilika' }
];

export type Artifact = {
  id: string;
  name: string;
  category: string;
  year: string;
  location: string;
  image: string;
  text: string;
  embedUrl?: string;
};

export const artifacts: Artifact[] = [
  { id: 'm1', name: 'Konark Sun Temple Sculpture', category: 'Temple sculptures', year: '1255', location: 'Konark', image: '/konark.jpg', text: 'Sun temple stone carving with chariot wheels.', embedUrl: 'https://sketchfab.com/models/6cc905be2ae34e8091eb1eaa84a17738/embed' },
  { id: 'm2', name: 'Tribal Jewelry Set', category: 'Tribal jewelry', year: '1800s', location: 'Odisha', image: 'https://i.etsystatic.com/16212113/r/il/289a8b/4433165196/il_1080xN.4433165196_to4p.jpg', text: 'Ornate tribal necklace from eastern India.', embedUrl: 'https://sketchfab.com/models/144a04dafa4d474e818659fcf20989fa/embed' },
  { id: 'm3', name: 'Traditional Musical Instrument', category: 'Musical instruments', year: '1900', location: 'Chhattisgarh', image: 'https://thumbs.dreamstime.com/b/beautifully-arranged-collection-traditional-musical-instruments-various-cultures-regions-display-includes-340616569.jpg', text: 'Wooden flute and percussion set.', embedUrl: 'https://sketchfab.com/models/7e11e4dd99f34facab955d45aba4b074/embed' },
  { id: 'm4', name: 'Khajuraho Stone Sculpture', category: 'Temple sculptures', year: '950', location: 'Madhya Pradesh', image: 'https://static.vecteezy.com/system/resources/previews/042/561/447/large_2x/famous-sculptures-of-khajuraho-temples-india-photo.jpg', text: 'Intricate narrative panel from Khajuraho.', embedUrl: 'https://sketchfab.com/models/c59d57d280de458f9603e2730aa5c00d/embed' },
  { id: 'm5', name: 'Mysore Royal Dagger', category: 'Traditional weapons', year: '1800', location: 'Karnataka', image: 'https://img.freepik.com/premium-photo/sword-with-dragon-it-is-shown-picture_869640-221276.jpg', text: 'Gold-inlaid ceremonial dagger used by royalty.', embedUrl: 'https://sketchfab.com/models/1d5177709d224e1c91a458036bc11710/embed' },
  { id: 'm6', name: 'Tanjore Painting', category: 'Folk art', year: '1800s', location: 'Tamil Nadu', image: 'https://img1.wsimg.com/isteam/ip/bd95d888-15fd-4e22-9514-3b3e7856faa7/d1fc0d4d-12eb-4019-a7aa-f00566d84891.jpg', text: 'Classical Tanjore painting with gold foil.', embedUrl: 'https://studio.tripo3d.ai/embed/8253cb39-6add-4809-8137-b3e5e725300f' },
  { id: 'm7', name: 'Mughal Architecture Embellishment', category: 'Architecture', year: '1600', location: 'Delhi', image: 'https://live.staticflickr.com/8190/8449126291_0f79d5464c_b.jpg', text: 'Intricate architectural details from the Mughal era.', embedUrl: 'https://sketchfab.com/models/690a33a81d2d44ce99c6bfcb0fab8f7a/embed' },
  { id: 'm8', name: 'Chola Bronze Nataraja', category: 'Temple sculptures', year: '1100', location: 'Tamil Nadu', image: 'https://th.bing.com/th/id/R.bddc02a3da6c89a5c2240af735a8253e?rik=pI50u9we0FhY5g&riu=http%3a%2f%2fwww.jayarts.com%2fcdn%2fshop%2fproducts%2fDSF0415_1200x1200.jpg%3fv%3d1647007616&ehk=CBUn42mK0HTR5HiUs4ohNXHizjBWH7R5emqnSQnYIKU%3d&risl=&pid=ImgRaw&r=0', text: 'Dancing Shiva from Chola period.', embedUrl: 'https://sketchfab.com/models/77bb4116fc134fbf96e0f52403bff7d5/embed' },
  { id: 'm9', name: 'Pattachitra Panel', category: 'Folk art', year: '1700', location: 'Odisha', image: 'https://www.crafttrip.in/image/cache/catalog/jagannath/005-Jagannath-Painting-on-canvas-Indian-Folk-Art-Painting--1000x1000w.jpg', text: 'Colorful religious painting on cloth.', embedUrl: 'https://sketchfab.com/models/fc3b659020894fb78a9137a00bf6b700/embed' },
  { id: 'm10', name: 'Ancient Hindu Temple', category: 'Architecture', year: 'Ancient', location: 'India', image: 'https://www.mytownblog.com/wp-content/uploads/2025/03/Asclique-Featured-Image-17-2.png', text: 'A detailed 3D model of an ancient Hindu temple.', embedUrl: 'https://sketchfab.com/models/45fa803f2a10428183179c860c330a8a/embed' },
  { id: 'm11', name: 'Indian Heritage Landmarks', category: 'Architecture', year: 'Various', location: 'India', image: 'https://travel2next.com/wp-content/uploads/LANDMARKS-IN-INDIA.jpg', text: 'A collection of iconic Indian heritage landmarks in 3D.', embedUrl: 'https://sketchfab.com/models/c168371aaffa4c8294bc0da426d0018a/embed' },
  { id: 'm12', name: 'Rajasthani Turban', category: 'Textile', year: '1800', location: 'Rajasthan', image: 'https://i.etsystatic.com/20406834/r/il/69e32d/4286362059/il_1080xN.4286362059_3pb2.jpg', text: 'Colorful turban representing identity.', embedUrl: 'https://sketchfab.com/models/41ecec5688dc4c0b87bc2f8bb6414156/embed' },
  { id: 'm13', name: 'Bamboo Basket', category: 'Crafts', year: '1980', location: 'North East', image: 'https://png.pngtree.com/background/20230527/original/pngtree-3d-model-of-bamboo-baskets-and-baskets-picture-image_2754150.jpg', text: 'Traditional handwoven basket.', embedUrl: 'https://sketchfab.com/models/33e8a5acbc204fec95da167b38516d07/embed' },
  { id: 'm14', name: 'Kalamkari Textile', category: 'Fabric', year: '1700', location: 'Andhra Pradesh', image: 'https://tse4.mm.bing.net/th/id/OIP.j4mSubn_8FpwFd24prmqpwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3', text: 'Hand-painted cotton cloth.', embedUrl: 'https://sketchfab.com/models/2946bb1675074077bcd72a75b7fe1c2e/embed' },
  { id: 'm15', name: 'Warli Art Panel', category: 'Folk art', year: '1970', location: 'Maharashtra', image: 'https://miro.medium.com/v2/resize:fit:2000/1*uxVoDRfV506S-19jGiyUbg.jpeg', text: 'Monochrome tribal painting style.', embedUrl: 'https://sketchfab.com/models/5ebe30d594db4cb1af069b1506a094ad/embed' },

  { id: 'm16', name: 'Naga Warrior Spear', category: 'Traditional weapons', year: '1850', location: 'Nagaland', image: 'https://i.pinimg.com/736x/b8/9b/27/b89b274390465f67a84962fd5536a187.jpg', text: 'Unmarked tribal spear from Naga community.', embedUrl: 'https://sketchfab.com/models/0bb6110ddb4a4185aa11c7f4bdbe4d7d/embed' },
  { id: 'm17', name: 'Pashmina Shawl', category: 'Textile', year: '1900', location: 'Kashmir', image: 'https://tse1.explicit.bing.net/th/id/OIP.P735UhceL7rR4GCVavu6jgHaJ3?w=1588&h=2117&rs=1&pid=ImgDetMain&o=7&rm=3', text: 'Fine pashmina wool shawl.', embedUrl: 'https://sketchfab.com/models/350fc9b99a284553a643826133c524a5/embed' },
  { id: 'm18', name: 'Bamboo Flute (Bansuri)', category: 'Musical instruments', year: '1800', location: 'All India', image: 'https://i.etsystatic.com/47139480/r/il/c0876d/5574511827/il_fullxfull.5574511827_36io.jpg', text: 'Classic Indian woodwind instrument.', embedUrl: 'https://sketchfab.com/models/dcac0f71cac24a7dba26b061141e226f/embed' },
  { id: 'm19', name: 'Golden Brass Lamp', category: 'Metal craft', year: '1950', location: 'India', image: 'https://m.media-amazon.com/images/I/71CEjyjYrTL.jpg', text: 'An ornate traditional Indian brass lamp (diya), often used in religious ceremonies.', embedUrl: 'https://sketchfab.com/models/0032e769b35b40e0935b913d90256153/embed' }
]; 

export const tourismPlaces = [
  { id: 't1', name: 'Konark Sun Temple', state: 'Odisha', category: 'Temple', highlight: 'Sun chariot architecture', image: '/konark.jpg' },
  { id: 't2', name: 'Jagannath Temple Puri', state: 'Odisha', category: 'Temple', highlight: 'Rath Yatra', image: '/puri.jpg' },
  { id: 't3', name: 'Chilika Lake', state: 'Odisha', category: 'Lagoon', highlight: 'Dolphins and migratory birds', image: '/chilika.jpg' },
  { id: 't4', name: 'Taj Mahal', state: 'Uttar Pradesh', category: 'Monument', highlight: 'Marble mausoleum', image: '/tajmahal.jpg' },
  { id: 't5', name: 'Hampi', state: 'Karnataka', category: 'Historical ruins', highlight: 'Vijayanagara Empire', image: '/hampi.jpg' },
  { id: 't6', name: 'Khajuraho Temples', state: 'Madhya Pradesh', category: 'Temple', highlight: 'Erotic sculptures', image: '/khajuraho.jpg' },
  { id: 't7', name: 'Ajanta Caves', state: 'Maharashtra', category: 'Cave', highlight: 'Buddhist murals', image: '/ajanta.jpg' },
  { id: 't8', name: 'Ellora Caves', state: 'Maharashtra', category: 'Cave', highlight: 'Rock-cut temples', image: '/ellora.jpg' },
  { id: 't9', name: 'Qutub Minar', state: 'Delhi', category: 'Monument', highlight: 'Tall minaret', image: '/qutubminar.jpg' },
  { id: 't10', name: 'India Gate', state: 'Delhi', category: 'Monument', highlight: 'War memorial', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80' },
  { id: 't11', name: 'Red Fort', state: 'Delhi', category: 'Fort', highlight: 'Mughal architecture', image: '/redfort.jpg' },
  { id: 't12', name: 'Amer Fort', state: 'Rajasthan', category: 'Fort', highlight: 'Sheesh Mahal', image: '/amerfort.jpg' },
  { id: 't13', name: 'Jaipur City Palace', state: 'Rajasthan', category: 'Palace', highlight: 'Mughal + Rajput', image: '/jaipur.jpg' },
  { id: 't14', name: 'Jaisalmer Fort', state: 'Rajasthan', category: 'Fort', highlight: 'Golden sandstone fortress', image: '/jaisalmer.jpg' },
  { id: 't15', name: 'Kerala Backwaters', state: 'Kerala', category: 'Nature', highlight: 'Houseboat cruises', image: '/kerala.jpg' },
  { id: 't16', name: 'Munnar', state: 'Kerala', category: 'Hill station', highlight: 'Tea gardens', image: '/munnar.jpg' },
  { id: 't17', name: 'Rann of Kutch', state: 'Gujarat', category: 'Desert', highlight: 'White salt desert', image: '/kutch.jpg' },
  { id: 't18', name: 'Gir National Park', state: 'Gujarat', category: 'Wildlife', highlight: 'Asiatic lions', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=800&q=80' },
  { id: 't19', name: 'Kaziranga National Park', state: 'Assam', category: 'Wildlife', highlight: 'One-horned rhino', image: '/kaziranga.jpg' },
  { id: 't20', name: 'Sundarbans', state: 'West Bengal', category: 'Forest', highlight: 'Bengal tigers', image: '/sundarbans.jpg' },
  { id: 't21', name: 'Mysore Palace', state: 'Karnataka', category: 'Palace', highlight: 'Royal palace', image: '/mysore.jpg' },
  { id: 't22', name: 'Meenakshi Temple', state: 'Tamil Nadu', category: 'Temple', highlight: 'Dravidian architecture', image: '/meenakshi.jpg' },
  { id: 't23', name: 'Mahabalipuram', state: 'Tamil Nadu', category: 'Monument', highlight: 'Rock-cut temples', image: '/mahabalipuram.jpg' },
  { id: 't24', name: 'Shillong', state: 'Meghalaya', category: 'Hill station', highlight: 'Scenic valleys', image: '/shillong.jpg' },
  { id: 't25', name: 'Dharamshala', state: 'Himachal Pradesh', category: 'Spiritual', highlight: 'Tibetan culture', image: '/dharamshala.jpg' },
  { id: 't26', name: 'Shimla', state: 'Himachal Pradesh', category: 'Hill station', highlight: 'Colonial past', image: '/shimla.jpg' },
  { id: 't27', name: 'Manali', state: 'Himachal Pradesh', category: 'Adventure', highlight: 'Snow sports', image: '/manali.jpg' },
  { id: 't28', name: 'Leh Ladakh', state: 'Ladakh', category: 'Adventure', highlight: 'High altitude deserts', image: '/lehladakh.jpg' },
  { id: 't29', name: 'Nubra Valley', state: 'Ladakh', category: 'Valley', highlight: 'Sand dunes & Bactrian camels', image: '/nubra.jpg' },
  { id: 't30', name: 'Rishikesh', state: 'Uttarakhand', category: 'Adventure', highlight: 'River rafting', image: '/rishikesh.jpg' },
  { id: 't31', name: 'Haridwar', state: 'Uttarakhand', category: 'Spiritual', highlight: 'Ganga aarti', image: '/haridwar.jpg' },
  { id: 't32', name: 'Valley of Flowers', state: 'Uttarakhand', category: 'Nature', highlight: 'Alpine blooms', image: '/valleyofflowers.jpg' },
  { id: 't33', name: 'Sanchi Stupa', state: 'Madhya Pradesh', category: 'Buddhist', highlight: 'Ancient stupa', image: '/sanchi.jpg' },
  { id: 't34', name: 'Ajmer Sharif', state: 'Rajasthan', category: 'Dargah', highlight: 'Sufi shrine', image: '/ajmersharif.jpg' },
  { id: 't35', name: 'Bhubaneswar', state: 'Odisha', category: 'Temple', highlight: 'Lingaraj Temple', image: '/bhubaneswar.jpg' },
  { id: 't36', name: 'Puri Beach', state: 'Odisha', category: 'Beach', highlight: 'Sunrise and culture', image: '/puribeach.jpg' },
  { id: 't37', name: 'Bodh Gaya', state: 'Bihar', category: 'Buddhist', highlight: 'Bodhi tree', image: '/bodhgaya.jpg' },
  { id: 't38', name: 'Nalanda University', state: 'Bihar', category: 'Historical', highlight: 'Ancient learning center', image: '/nalanda.jpg' },
  { id: 't39', name: 'Amritsar Golden Temple', state: 'Punjab', category: 'Gurudwara', highlight: 'Langar and reflection pool', image: '/amritsar.jpg' },
  { id: 't40', name: 'Goa Beaches', state: 'Goa', category: 'Beach', highlight: 'Water sports and parties', image: '/goa.jpg' },
  { id: 't41', name: 'Kodaikanal', state: 'Tamil Nadu', category: 'Hill station', highlight: 'Star-shaped lake', image: '/kodaikanal.jpg' },
  { id: 't42', name: 'Ooty', state: 'Tamil Nadu', category: 'Hill station', highlight: 'Botanical gardens', image: '/ooty.jpg' },
  { id: 't43', name: 'Ranthambore National Park', state: 'Rajasthan', category: 'Wildlife', highlight: 'Tigers safari', image: '/ranthambore.jpg' },
  { id: 't44', name: 'Sariska Tiger Reserve', state: 'Rajasthan', category: 'Wildlife', highlight: 'Tiger reserve', image: '/sariska.jpg' },
  { id: 't45', name: 'Cycle of Lake', state: 'Kerala', category: 'Nature', highlight: 'Bird watching', image: '/cycleoflake.jpg' },
  { id: 't46', name: 'Kanha National Park', state: 'Madhya Pradesh', category: 'Wildlife', highlight: 'Barasingha habitat', image: '/kanha.jpg' },
  { id: 't47', name: 'Kaziranga National Park', state: 'Assam', category: 'Wildlife', highlight: 'Rhino reserve', image: '/kaziranga.jpg' },
  { id: 't48', name: 'Sundarbans', state: 'West Bengal', category: 'Forest', highlight: 'Mangrove ecosystem', image: '/sundarbans.jpg' },
  { id: 't49', name: 'Gwalior Fort', state: 'Madhya Pradesh', category: 'Fort', highlight: '3 km long fort', image: '/gwalior.jpg' },
  { id: 't50', name: 'Chittorgarh Fort', state: 'Rajasthan', category: 'Fort', highlight: 'Rajput bravery', image: '/chittorgarh.jpg' },
  { id: 't51', name: 'Fatehpur Sikri', state: 'Uttar Pradesh', category: 'Historical', highlight: 'Mughal city', image: '/fatehpursikri.jpg' },
  { id: 't52', name: 'Sarnath', state: 'Uttar Pradesh', category: 'Buddhist', highlight: 'Buddha sermon site', image: '/sarnath.jpg' },
  { id: 't53', name: 'Belur Math', state: 'West Bengal', category: 'Spiritual', highlight: 'Ramakrishna Mission', image: '/belurmath.jpg' },
  { id: 't54', name: 'Mysore Zoo', state: 'Karnataka', category: 'Wildlife', highlight: 'Family-friendly', image: 'https://tse3.mm.bing.net/th/id/OIP.owpTH_Dd0nCH8R40EN7kFgHaFW?w=1600&h=1157&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 't55', name: 'Great Living Chola Temples', state: 'Tamil Nadu', category: 'Temple', highlight: 'UNESCO site', image: 'https://as2.ftcdn.net/v2/jpg/05/58/64/17/1000_F_558641735_r64vTIWibgjdz1CGMWssVo11jU8DaLvI.jpg' },
  { id: 't56', name: 'Hemis Monastery', state: 'Ladakh', category: 'Monastery', highlight: 'Buddhist festival', image: 'https://www.taleof2backpackers.com/wp-content/uploads/2019/07/Hemis-Monastery-Ladakh.jpg' },
  { id: 't57', name: 'Ganga Aarti Varanasi', state: 'Uttar Pradesh', category: 'Spiritual', highlight: 'Night rituals', image: 'https://media.tripinvites.com/places/varanasi/dasaswamedh-ghat/ganga-aarti/grand-ganga-arti-at-dasaswamedh-ghat-featured.jpg' },
  { id: 't58', name: 'Rani ki Vav', state: 'Gujarat', category: 'Stepwell', highlight: 'Architecture and sculptures', image: 'https://tse4.mm.bing.net/th/id/OIP.lokzbjm0RcxSTCHs0I2MswHaFe?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 't59', name: 'Patna Museum', state: 'Bihar', category: 'Museum', highlight: 'Ancient artifacts', image: 'https://th.bing.com/th/id/OIP.6TivAml5AlfRJjTzkXAa8gHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 't60', name: 'Kedarnath', state: 'Uttarakhand', category: 'Pilgrimage', highlight: 'Chardham site', image: 'https://wallpapercave.com/wp/wp4501800.jpg' },
  { id: 't61', name: 'Gangtok', state: 'Sikkim', category: 'Hill station', highlight: 'Himalayan views', image: 'https://i.ytimg.com/vi/_rofXrDyuS8/maxresdefault.jpg' },
  { id: 't62', name: 'Nainital', state: 'Uttarakhand', category: 'Hill station', highlight: 'Lake city', image: 'https://i.pinimg.com/originals/1e/66/a0/1e66a01ff79e4d32f4a644aede2b4b08.jpg' },
  { id: 't63', name: 'Auroville', state: 'Tamil Nadu', category: 'Community', highlight: 'International township', image: 'https://windows10spotlight.com/wp-content/uploads/2023/01/c21d5a38a28e1da43fd555d1cb5555a1.jpg' },
  { id: 't64', name: 'Lakshadweep', state: 'Lakshadweep', category: 'Island', highlight: 'Coral reefs', image: 'https://www.flamingotravels.co.in/_next/image?url=https:%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2Flakshadweep%20Island.jpg&w=1920&q=90' },
  { id: 't65', name: 'Andaman & Nicobar', state: 'Andaman and Nicobar', category: 'Island', highlight: 'Scuba diving', image: 'https://tse4.mm.bing.net/th/id/OIP.edVXRXmisOpAeRJNzy959wHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 't66', name: 'Pench National Park', state: 'Madhya Pradesh', category: 'Wildlife', highlight: 'Tiger reserve', image: 'https://banasri.in/wp-content/uploads/2024/06/Pench-National-Park.jpg' },
  { id: 't67', name: 'Jodhpur Mehrangarh Fort', state: 'Rajasthan', category: 'Fort', highlight: 'Blue city view', image: 'https://cdn.pixabay.com/photo/2019/08/13/06/49/mehrangarh-fort-4402612_1280.jpg' },
  { id: 't68', name: 'Srisailam', state: 'Andhra Pradesh', category: 'Temple', highlight: 'Stairway to Shiva', image: 'https://chikucab.com/blog/wp-content/uploads/2022/06/Mallikarjuna-Jyotirlinga-Temple.jpg' },
  { id: 't69', name: 'Rameswaram', state: 'Tamil Nadu', category: 'Pilgrimage', highlight: 'Ramanathaswamy Temple', image: 'https://static.wixstatic.com/media/6642a4_fe9bff1cef914db49d5da0af8f13594c~mv2.webp/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/6642a4_fe9bff1cef914db49d5da0af8f13594c~mv2.webp' },
  { id: 't70', name: 'Madurai Meenakshi', state: 'Tamil Nadu', category: 'Temple', highlight: 'Dravidian sculptural pillars', image: 'https://www.templepurohit.com/wp-content/uploads/2016/04/Meenakshi-Amman-temple-madurai-Tamil-Nadu.jpg' }
];

export const placeGuides = {
  'Konark Sun Temple': {
    history: 'Built in 1255 CE by King Narasimhadeva I.',
    famous: 'Shaped as Sun God\'s chariot with 24 wheels.',
    importance: 'Cultural architecture and ritual astronomy.',
    tips: 'Visit at sunrise, book local guide, carry water.'
  },
  'Jagannath Temple Puri': {
    history: 'Dedicated to Lord Jagannath, built in 12th century.',
    famous: 'Rath Yatra grand chariot festival.',
    importance: 'Pilgrimage and Odia identity.',
    tips: 'Avoid festival crowd, respect dress code, keep items ready.'
  }
};

export const culturalPlaceDetails = {
  't1': {
    name: {
      en: 'Konark Sun Temple',
      hi: 'कोणार्क सूर्य मंदिर',
      or: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର',
    },
    location: 'Konark, Odisha',
    tagline: {
      en: 'A 13th-century CE Sun Temple, a UNESCO World Heritage Site.',
      hi: '१३वीं सदी का सूर्य मंदिर, एक यूनेस्को विश्व धरोहर स्थल।',
      or: '୧୩ଶ ଶତାବ୍ଦୀର ସୂର୍ଯ୍ୟ ମନ୍ଦିର, ଏକ ୟୁନେସ୍କୋ ବିଶ୍ୱ ଐତିହ୍ୟ ସ୍ଥଳୀ।',
    },
    heroImage: '/konark.jpg',
    overview: {
      en: 'The Konark Sun Temple is a monumental representation of the sun god Surya\'s chariot. Its 24 wheels are decorated with symbolic designs and it is led by a team of six horses.',
      hi: 'कोणार्क सूर्य मंदिर सूर्य देव के रथ का एक स्मारकीय प्रतिनिधित्व है। इसके 24 पहियों को प्रतीकात्मक डिजाइनों से सजाया गया है और इसका नेतृत्व छह घोड़ों की एक टीम करती है।',
      or: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ହେଉଛି ସୂର୍ଯ୍ୟ ଦେବତା ସୂର୍ଯ୍ୟଙ୍କ ରଥର ଏକ ସ୍ମାରକୀ ପ୍ରତିନିଧିତ୍ୱ। ଏହାର ୨୪ଟି ଚକ ସାଙ୍କେତିକ ଡିଜାଇନ୍‌ରେ ସଜାଯାଇଛି ଏବଂ ଏହାକୁ ଛଅଟି ଘୋଡ଼ାଙ୍କ ଏକ ଦଳ ଆଗେଇ ନେଇଥାଏ।',
    },
    whyFamous: {
        en: 'It is famous for its unique architecture, intricate sculptures, and the grand conception of a chariot for the Sun God.',
        hi: 'यह अपनी अनूठी वास्तुकला, जटिल मूर्तियों और सूर्य देव के लिए एक रथ की भव्य अवधारणा के लिए प्रसिद्ध है।',
        or: 'ଏହା ଏହାର ଅନନ୍ୟ ସ୍ଥାପତ୍ୟ, ଜଟିଳ ମୂର୍ତ୍ତି, ଏବଂ ସୂର୍ଯ୍ୟ ଦେବତାଙ୍କ ପାଇଁ ରଥର ଭବ୍ୟ ପରିକଳ୍ପନା ପାଇଁ ପ୍ରସିଦ୍ଧ।',
    },
    history: {
      en: 'Built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty, the temple is a classic example of Kalinga architecture. It took 12 years and 1200 artisans to complete.',
      hi: 'पूर्वी गंगा राजवंश के राजा नरसिंहदेव प्रथम द्वारा 13 वीं शताब्दी में निर्मित, यह मंदिर कलिंग वास्तुकला का एक उत्कृष्ट उदाहरण है। इसे पूरा करने में 12 साल और 1200 कारीगर लगे।',
      or: '୧୩ଶ ଶତାବ୍ଦୀରେ ପୂର୍ବ ଗଙ୍ଗ ରାଜବଂଶର ରାଜା ନରସିଂହଦେବ ପ୍ରଥମଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ଏହି ମନ୍ଦିର କଳିଙ୍ଗ ସ୍ଥାପତ୍ୟର ଏକ ଶାସ୍ତ୍ରୀୟ ଉଦାହରଣ। ଏହାକୁ ସମ୍ପୂର୍ଣ୍ଣ କରିବାକୁ ୧୨ ବର୍ଷ ଏବଂ ୧୨୦୦ କାରିଗର ଲାଗିଥିଲେ।',
    },
    architecture: {
      en: 'The temple complex is designed as a colossal chariot of the Sun God, with twelve pairs of exquisitely ornamented wheels and drawn by seven horses. The temple is famous for its erotic sculptures of maithunas.',
      hi: 'मंदिर परिसर को सूर्य देव के एक विशाल रथ के रूप में डिजाइन किया गया है, जिसमें बारह जोड़ी उत्कृष्ट रूप से अलंकृत पहिए हैं और सात घोड़ों द्वारा खींचा जाता है। यह मंदिर मैथुन की कामुक मूर्तियों के लिए प्रसिद्ध है।',
      or: 'ମନ୍ଦିର ପରିସରକୁ ସୂର୍ଯ୍ୟ ଦେବତାଙ୍କ ଏକ ବିରାଟ ରଥ ଭାବରେ ପରିକଳ୍ପନା କରାଯାଇଛି, ଯେଉଁଥିରେ ବାର ஜோଡ଼ି ସୁସଜ୍ଜିତ ଚକ ଅଛି ଏବଂ ସାତୋଟି ଘୋଡ଼ା ଦ୍ୱାରା ଟଣାଯାଇଛି। ମନ୍ଦିରଟି ମୈଥୁନର କାମୁକ ମୂର୍ତ୍ତି ପାଇଁ ପ୍ରସିଦ୍ଧ।',
    },
    culturalImportance: {
      en: 'It is a major pilgrimage site for Hindus, who gather here every year for the Chandrabhaga Mela. The temple is a masterpiece of Odishan architecture and a symbol of India\'s heritage.',
      hi: 'यह हिंदुओं के लिए एक प्रमुख तीर्थ स्थल है, जो हर साल चंद्रभागा मेले के लिए यहां इकट्ठा होते हैं। यह मंदिर ओडिशा वास्तुकला का एक उत्कृष्ट नमूना और भारत की विरासत का प्रतीक है।',
      or: 'ଏହା ହିନ୍ଦୁମାନଙ୍କ ପାଇଁ ଏକ ପ୍ରମୁଖ ତୀର୍ଥସ୍ଥାନ, ଯେଉଁମାନେ ପ୍ରତିବର୍ଷ ଚନ୍ଦ୍ରଭାଗା ମେଳା ପାଇଁ ଏଠାରେ ଏକାଠି ହୁଅନ୍ତି। ମନ୍ଦିରଟି ଓଡ଼ିଶୀ ସ୍ଥାପତ୍ୟର ଏକ ଶ୍ରେଷ୍ଠ କୃତି ଏବଂ ଭାରତର ଐତିହ୍ୟର ପ୍ରତୀକ।',
    },
    facts: [
      { en: 'The 24 wheels represent the 24 hours of a day.', hi: '24 पहिए दिन के 24 घंटों का प्रतिनिधित्व करते हैं।', or: '୨୪ଟି ଚକ ଦିନର ୨୪ ଘଣ୍ଟାକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ।' },
      { en: 'The seven horses represent the seven days of the week.', hi: 'सात घोड़े सप्ताह के सात दिनों का प्रतिनिधित्व करते हैं।', or: 'ସାତୋଟି ଘୋଡ଼ା ସପ୍ତାହର ସାତ ଦିନକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ।' },
      { en: 'The main temple was once over 200 feet high.', hi: 'मुख्य मंदिर कभी 200 फीट से अधिक ऊंचा था।', or: 'ମୁଖ୍ୟ ମନ୍ଦିରଟି ଏକଦା ୨୦୦ ଫୁଟରୁ ଅଧିକ ଉଚ୍ଚ ଥିଲା।' },
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'September to March', hi: 'सितंबर से मार्च', or: 'ସେପ୍ଟେମ୍ବରରୁ ମାର୍ଚ୍ଚ' },
      entry: { en: 'Entry fee for Indians: ₹40, Foreigners: ₹600', hi: 'भारतीयों के लिए प्रवेश शुल्क: ₹40, विदेशी: ₹600', or: 'ଭାରତୀୟଙ୍କ ପାଇଁ ପ୍ରବେଶ ଶୁଳ୍କ: ₹୪୦, ବିଦେଶୀ: ₹୬୦୦' },
      tips: [
        { en: 'Visit during sunrise or sunset for the best views.', hi: 'सर्वोत्तम दृश्यों के लिए सूर्योदय या सूर्यास्त के दौरान जाएँ।', or: 'ସର୍ବୋତ୍ତମ ଦୃଶ୍ୟ ପାଇଁ ସୂର୍ଯ୍ୟୋଦୟ କିମ୍ବା ସୂର୍ଯ୍ୟାସ୍ତ ସମୟରେ ପରିଦର୍ଶନ କରନ୍ତୁ।' },
        { en: 'Hire a local guide to understand the history and sculptures.', hi: 'इतिहास और मूर्तियों को समझने के लिए एक स्थानीय गाइड किराए पर लें।', or: 'ଇତିହାସ ଏବଂ ମୂର୍ତ୍ତି ବୁଝିବା ପାଇଁ ଜଣେ ସ୍ଥାନୀୟ ଗାଇଡ୍ ନିଯୁକ୍ତ କରନ୍ତୁ।' },
      ],
    },
    images: [
      'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg',
      'https://images.pexels.com/photos/3889928/pexels-photo-3889928.jpeg',
      'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
    ],
    mapLocation: { lat: 19.8876, lng: 86.0945 },
  },
  't2': {
    name: {
      en: 'Jagannath Temple Puri',
      hi: 'जगन्नाथ मंदिर पुरी',
      or: 'ଜଗନ୍ନାଥ ମନ୍ଦିର ପୁରୀ',
    },
    location: 'Puri, Odisha',
    tagline: {
      en: 'A sacred Hindu temple dedicated to Jagannath.',
      hi: 'जगन्नाथ को समर्पित एक पवित्र हिंदू मंदिर।',
      or: 'ଜଗନ୍ନାଥଙ୍କୁ ସମର୍ପିତ ଏକ ପବିତ୍ର ହିନ୍ଦୁ ମନ୍ଦିର।',
    },
    heroImage: '/puri.jpg',
    overview: {
      en: 'The Jagannath Temple in Puri is a famous, sacred Hindu temple dedicated to Jagannath and located on the eastern coast of India, at Puri in the state of Odisha.',
      hi: 'पुरी में जगन्नाथ मंदिर एक प्रसिद्ध, पवित्र हिंदू मंदिर है जो जगन्नाथ को समर्पित है और भारत के पूर्वी तट पर, ओडिशा राज्य के पुरी में स्थित है।',
      or: 'ପୁରୀରେ ଥିବା ଜଗନ୍ନାଥ ମନ୍ଦିର ହେଉଛି ଏକ ପ୍ରସିଦ୍ଧ, ପବିତ୍ର ହିନ୍ଦୁ ମନ୍ଦିର ଯାହା ଜଗନ୍ନାଥଙ୍କୁ ସମର୍ପିତ ଏବଂ ଭାରତର ପୂର୍ବ ଉପକୂଳରେ, ଓଡ଼ିଶା ରାଜ୍ୟର ପୁରୀରେ ଅବସ୍ଥିତ।',
    },
    whyFamous: {
        en: 'It is famous for its annual Ratha Yatra, or chariot festival, in which the three principal deities are pulled on huge and elaborately decorated temple cars.',
        hi: 'यह अपनी वार्षिक रथ यात्रा, या रथ उत्सव के लिए प्रसिद्ध है, जिसमें तीन प्रमुख देवताओं को विशाल और विस्तृत रूप से सजाए गए मंदिर के रथों पर खींचा जाता है।',
        or: 'ଏହା ବାର୍ଷିକ ରଥଯାତ୍ରା ପାଇଁ ପ୍ରସିଦ୍ଧ, ଯେଉଁଥିରେ ତିନି ମୁଖ୍ୟ ଦେବତାଙ୍କୁ ବିଶାଳ ଏବଂ ସୁସଜ୍ଜିତ ମନ୍ଦିର ରଥରେ ଟଣାଯାଏ।',
    },
    history: {
      en: 'The temple was built by the Ganga dynasty king Anantavarman Chodaganga in the 12th century CE. The temple is one of the Char Dham pilgrimage sites.',
      hi: 'मंदिर का निर्माण 12 वीं शताब्दी में गंगा वंश के राजा अनंतवर्मन चोडगंग ने करवाया था। यह मंदिर चार धाम तीर्थ स्थलों में से एक है।',
      or: 'ଏହି ମନ୍ଦିରଟି ୧୨ଶ ଶତାବ୍ଦୀରେ ଗଙ୍ଗ ବଂଶର ରାଜା ଅନନ୍ତବର୍ମନ ଚୋଡ଼ଗଙ୍ଗଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ହୋଇଥିଲା। ଏହି ମନ୍ଦିର ଚାରି ଧାମ ତୀର୍ଥସ୍ଥଳୀ ମଧ୍ୟରୁ ଅନ୍ୟତମ।',
    },
    architecture: {
      en: 'The temple is a splendid example of Kalinga architecture. It has four gates, and the main temple is surrounded by a high fortified wall.',
      hi: 'यह मंदिर कलिंग वास्तुकला का एक शानदार उदाहरण है। इसके चार द्वार हैं, और मुख्य मंदिर एक ऊंची किलेबंद दीवार से घिरा हुआ है।',
      or: 'ଏହି ମନ୍ଦିର କଳିଙ୍ଗ ସ୍ଥାପତ୍ୟର ଏକ ଚମତ୍କାର ଉଦାହରଣ। ଏହାର ଚାରୋଟି ଦ୍ୱାର ଅଛି, ଏବଂ ମୁଖ୍ୟ ମନ୍ଦିରଟି ଏକ ଉଚ୍ଚ ଦୁର୍ଗ ପ୍ରାଚୀର ଦ୍ୱାରା ଘେରି ରହିଛି।',
    },
    culturalImportance: {
      en: 'The temple is an important pilgrimage destination and one of the four great \'Char Dham\' pilgrimage sites for Hindus.',
      hi: 'यह मंदिर एक महत्वपूर्ण तीर्थ स्थल है और हिंदुओं के लिए चार महान \'चार धाम\' तीर्थ स्थलों में से एक है।',
      or: 'ଏହି ମନ୍ଦିର ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତୀର୍ଥସ୍ଥାନ ଏବଂ ହିନ୍ଦୁମାନଙ୍କ ପାଇଁ ଚାରି ମହାନ \'ଚାରି ଧାମ\' ତୀର୍ଥସ୍ଥଳୀ ମଧ୍ୟରୁ ଅନ୍ୟତମ।',
    },
    facts: [
      { en: 'The flag on top of the temple always flaps in the opposite direction of the wind.', hi: 'मंदिर के ऊपर का झंडा हमेशा हवा की विपरीत दिशा में लहराता है।', or: 'ମନ୍ଦିର ଉପରେ ଥିବା ପତାକା ସବୁବେଳେ ପବନର ବିପରୀତ ଦିଗରେ ଉଡେ।' },
      { en: 'The shadow of the main dome is invisible at any time of day.', hi: 'मुख्य गुंबद की छाया दिन के किसी भी समय अदृश्य रहती है।', or: 'ମୁଖ୍ୟ ଗମ୍ବୁଜର ଛାୟା ଦିନର କୌଣସି ସମୟରେ ଅଦୃଶ୍ୟ ରହେ।' },
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'Throughout the year, but avoid the monsoon season.', hi: 'पूरे साल, लेकिन मानसून के मौसम से बचें।', or: 'ବର୍ଷସାରା, କିନ୍ତୁ ମୌସୁମୀ ଋତୁରୁ ଦୂରେଇ ରୁହନ୍ତୁ।' },
      entry: { en: 'Only Hindus are allowed inside the main temple complex.', hi: 'मुख्य मंदिर परिसर में केवल हिंदुओं को ही प्रवेश की अनुमति है।', or: 'କେବଳ ହିନ୍ଦୁମାନଙ୍କୁ ମୁଖ୍ୟ ମନ୍ଦିର ପରିସର ଭିତରେ ପ୍ରବେଶ କରିବାକୁ ଅନୁମତି ଦିଆଯାଇଛି।' },
      tips: [
        { en: 'Respect the local customs and dress modestly.', hi: 'स्थानीय रीति-रिवाजों का सम्मान करें और शालीनता से कपड़े पहनें।', or: 'ସ୍ଥାନୀୟ ପ୍ରଥାକୁ ସମ୍ମାନ କରନ୍ତୁ ଏବଂ ସାଧାରଣ ଭାବରେ ପୋଷାକ ପିନ୍ଧନ୍ତୁ।' },
      ],
    },
    images: [
      'https://images.pexels.com/photos/12895690/pexels-photo-12895690.jpeg',
      'https://images.pexels.com/photos/1628533/pexels-photo-1628533.jpeg',
    ],
    mapLocation: { lat: 19.8048, lng: 85.8181 },
  },
  't3': {
    name: { en: 'Chilika Lake', hi: 'चिल्का झील', or: 'ଚିଲିକା ହ୍ରଦ' },
    location: 'Odisha',
    tagline: {
      en: 'Asia\'s largest brackish water lagoon.',
      hi: 'एशिया की सबसे बड़ी खारे पानी की झील।',
      or: 'ଏସିଆର ସର୍ବବୃହତ ଲୁଣିଆ ଜଳ ହ୍ରଦ।'
    },
    heroImage: '/chilika.jpg',
    overview: {
      en: 'Chilika Lake is a brackish water lagoon, spread over the Puri, Khurda and Ganjam districts of Odisha state on the east coast of India. It is the largest coastal lagoon in India and the second largest brackish water lagoon in the world.',
      hi: 'चिल्का झील एक खारे पानी की झील है, जो भारत के पूर्वी तट पर ओडिशा राज्य के पुरी, खुर्दा और गंजम जिलों में फैली हुई है। यह भारत की सबसे बड़ी तटीय झील है और दुनिया की दूसरी सबसे बड़ी खारे पानी की झील है।',
      or: 'ଚିଲିକା ହ୍ରଦ ହେଉଛି ଏକ ଲୁଣିଆ ଜଳ ହ୍ରଦ, ଯାହା ଭାରତର ପୂର୍ବ ଉପକୂଳରେ ଓଡ଼ିଶା ରାଜ୍ୟର ପୁରୀ, ଖୋର୍ଦ୍ଧା ଏବଂ ଗଞ୍ଜାମ ଜିଲ୍ଲାରେ ବ୍ୟାପ୍ତ। ଏହା ଭାରତର ସର୍ବବୃହତ ଉପକୂଳବର୍ତ୍ତୀ ହ୍ରଦ ଏବଂ ବିଶ୍ୱର ଦ୍ୱିତୀୟ ସର୍ବବୃହତ ଲୁଣିଆ ଜଳ ହ୍ରଦ।'
    },
    whyFamous: {
      en: 'It is the largest wintering ground for migratory birds on the Indian sub-continent and home to a number of threatened species of plants and animals, notably the Irrawaddy dolphins.',
      hi: 'यह भारतीय उपमहाद्वीप पर प्रवासी पक्षियों के लिए सबसे बड़ा शीतकालीन मैदान है और पौधों और जानवरों की कई खतरे वाली प्रजातियों, विशेष रूप से इरावदी डॉल्फ़िन का घर है।',
      or: 'ଏହା ଭାରତୀୟ ଉପମହାଦେଶରେ ପ୍ରବାସୀ ପକ୍ଷୀମାନଙ୍କ ପାଇଁ ସବୁଠାରୁ ବଡ଼ ଶୀତକାଳୀନ ଆଶ୍ରୟସ୍ଥଳୀ ଏବଂ ଉଦ୍ଭିଦ ଓ ପ୍ରାଣୀମାନଙ୍କର ଅନେକ ବିପଦଗ୍ରସ୍ତ ପ୍ରଜାତି, ବିଶେଷକରି ଇରାୱାଡି ଡଲଫିନର ବାସସ୍ଥାନ।'
    },
    history: {
      en: 'Geological studies indicate that the coastline extended along the western shores of Chilika in the Pleistocene era. Historically, it was an excellent harbor for maritime trade.',
      hi: 'भूवैज्ञानिक अध्ययनों से संकेत मिलता है कि प्लेइस्टोसिन युग में तटरेखा चिल्का के पश्चिमी तटों तक फैली हुई थी। ऐतिहासिक रूप से, यह समुद्री व्यापार के लिए एक उत्कृष्ट बंदरगाह था।',
      or: 'ଭୂତତ୍ତ୍ୱବିତ୍ ମାନଙ୍କ ଅଧ୍ୟୟନରୁ ଜଣାପଡିଛି ଯେ ପ୍ଲିଷ୍ଟୋସିନ୍ ଯୁଗରେ ଚିଲିକାର ପଶ୍ଚିମ ଉପକୂଳ ପର୍ଯ୍ୟନ୍ତ ସମୁଦ୍ରକୂଳ ବ୍ୟାପିଥିଲା। ଐତିହାସିକ ଭାବରେ, ଏହା ସାମୁଦ୍ରିକ ବାଣିଜ୍ୟ ପାଇଁ ଏକ ଉତ୍କୃଷ୍ଟ ବନ୍ଦର ଥିଲା।'
    },
    architecture: {
      en: 'As a natural water body, Chilika does not have traditional architecture, but it features several small islands with notable temples like Kalijai Temple.',
      hi: 'एक प्राकृतिक जल निकाय के रूप में, चिल्का में पारंपरिक वास्तुकला नहीं है, लेकिन इसमें कालीजाई मंदिर जैसे उल्लेखनीय मंदिरों वाले कई छोटे द्वीप हैं।',
      or: 'ଏକ ପ୍ରାକୃତିକ ଜଳାଶୟ ଭାବରେ, ଚିଲିକାରେ ପାରମ୍ପାରିକ ସ୍ଥାପତ୍ୟ ନାହିଁ, କିନ୍ତୁ ଏଥିରେ କାଳିଜାଇ ମନ୍ଦିର ପରି ଉଲ୍ଲେଖନୀୟ ମନ୍ଦିର ଥିବା ଅନେକ ଛୋଟ ଦ୍ୱୀପ ରହିଛି।'
    },
    culturalImportance: {
      en: 'The lake is deeply intertwined with the cultural heritage of Odisha, inspiring numerous poems, stories, and the worship of Goddess Kalijai.',
      hi: 'झील ओडिशा की सांस्कृतिक विरासत के साथ गहराई से जुड़ी हुई है, जो कई कविताओं, कहानियों और देवी कालीजाई की पूजा को प्रेरित करती है।',
      or: 'ଏହି ହ୍ରଦ ଓଡ଼ିଶାର ସାଂସ୍କୃତିକ ଐତିହ୍ୟ ସହିତ ଗଭୀର ଭାବରେ ଜଡିତ, ଯାହା ଅନେକ କବିତା, ଗଳ୍ପ ଏବଂ ମାଆ କାଳିଜାଇଙ୍କ ପୂଜାକୁ ପ୍ରେରଣା ଦେଇଥାଏ।'
    },
    facts: [
      { en: 'It is the first Indian wetland of international importance under the Ramsar Convention.', hi: 'यह रामसर कन्वेंशन के तहत अंतरराष्ट्रीय महत्व का पहला भारतीय आर्द्रभूमि है।', or: 'ରାମସାର ସମ୍ମିଳନୀ ଅଧୀନରେ ଏହା ଆନ୍ତର୍ଜାତୀୟ ଗୁରୁତ୍ୱର ପ୍ରଥମ ଭାରତୀୟ ଆର୍ଦ୍ରଭୂମି ଅଟେ।' },
      { en: 'Over 160 species of birds migrate here during the winter.', hi: 'सर्दियों के दौरान यहां 160 से अधिक प्रजातियों के पक्षी प्रवास करते हैं।', or: 'ଶୀତଦିନେ ଏଠାକୁ ୧୬୦ରୁ ଅଧିକ ପ୍ରଜାତିର ପକ୍ଷୀ ଆସିଥାନ୍ତି।' }
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'November to February', hi: 'नवंबर से फरवरी', or: 'ନଭେମ୍ବରରୁ ଫେବୃଆରୀ' },
      entry: { en: 'No entry fee, but boating charges apply.', hi: 'कोई प्रवेश शुल्क नहीं, लेकिन बोटिंग शुल्क लागू।', or: 'କୌଣସି ପ୍ରବେଶ ଶୁଳ୍କ ନାହିଁ, କିନ୍ତୁ ବୋଟିଂ ଶୁଳ୍କ ଲାଗୁ ହୁଏ।' },
      tips: [
        { en: 'Take an early morning boat ride for bird watching.', hi: 'पक्षी देखने के लिए सुबह जल्दी नाव की सवारी करें।', or: 'ପକ୍ଷୀ ଦେଖିବା ପାଇଁ ସକାଳେ ଶୀଘ୍ର ବୋଟରେ ଯାଆନ୍ତୁ।' }
      ]
    },
    images: [],
    mapLocation: { lat: 19.69, lng: 85.30 }
  },
  't4': {
    name: { en: 'Taj Mahal', hi: 'ताजमहल', or: 'ତାଜମହଲ' },
    location: 'Agra, Uttar Pradesh',
    tagline: {
      en: 'A UNESCO World Heritage Site and symbol of eternal love.',
      hi: 'एक यूनेस्को विश्व धरोहर स्थल और शाश्वत प्रेम का प्रतीक।',
      or: 'ଏକ ୟୁନେସ୍କୋ ବିଶ୍ୱ ଐତିହ୍ୟ ସ୍ଥଳ ଏବଂ ଅନନ୍ତ ପ୍ରେମର ପ୍ରତୀକ।'
    },
    heroImage: '/tajmahal.jpg',
    overview: {
      en: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It is considered one of the most beautiful buildings ever created.',
      hi: 'ताजमहल भारतीय शहर आगरा में यमुना नदी के दाहिने किनारे पर एक हाथीदांत-सफेद संगमरमर का मकबरा है। इसे अब तक की सबसे खूबसूरत इमारतों में से एक माना जाता है।',
      or: 'ତାଜମହଲ ହେଉଛି ଭାରତୀୟ ସହର ଆଗ୍ରାରେ ଯମୁନା ନଦୀର ଡାହାଣ କୂଳରେ ଥିବା ଏକ ଧଳା ମାର୍ବଲ୍ ସମାଧି। ଏହାକୁ ଏପର୍ଯ୍ୟନ୍ତ ନିର୍ମିତ ସବୁଠାରୁ ସୁନ୍ଦର କୋଠା ମଧ୍ୟରୁ ଗୋଟିଏ ବୋଲି ବିବେଚନା କରାଯାଏ।'
    },
    whyFamous: {
      en: 'Famous for its stunning Mughal architecture and being one of the New Seven Wonders of the World.',
      hi: 'अपनी आश्चर्यजनक मुगल वास्तुकला के लिए और दुनिया के सात नए अजूबों में से एक होने के लिए प्रसिद्ध है।',
      or: 'ଏହାର ଆଶ୍ଚର୍ଯ୍ୟଜନକ ମୋଗଲ ସ୍ଥାପତ୍ୟ ଏବଂ ବିଶ୍ୱର ସାତୋଟି ନୂତନ ଆଶ୍ଚର୍ଯ୍ୟ ମଧ୍ୟରୁ ଅନ୍ୟତମ ଭାବରେ ପ୍ରସିଦ୍ଧ।'
    },
    history: {
      en: 'It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.',
      hi: 'इसे 1632 में मुगल सम्राट शाहजहाँ ने अपनी पसंदीदा पत्नी मुमताज महल के मकबरे को रखने के लिए चालू किया था; इसमें स्वयं शाहजहाँ का मकबरा भी है।',
      or: 'ନିଜର ପ୍ରିୟ ପତ୍ନୀ ମୁମତାଜ ମହଲଙ୍କ ସମାଧି ରଖିବା ପାଇଁ ୧୬୩୨ ମସିହାରେ ମୋଗଲ ସମ୍ରାଟ ଶାହଜାହାନଙ୍କ ଦ୍ୱାରା ଏହା ନିର୍ମିତ ହୋଇଥିଲା; ଏଥିରେ ନିଜେ ଶାହଜାହାନଙ୍କ ସମାଧି ମଧ୍ୟ ରହିଛି।'
    },
    architecture: {
      en: 'The Taj Mahal represents the finest and most sophisticated example of Mughal architecture, combining elements from Islamic, Persian, Ottoman Turkish and Indian architectural styles.',
      hi: 'ताजमहल मुगल वास्तुकला का सबसे बेहतरीन और सबसे परिष्कृत उदाहरण है, जिसमें इस्लामी, फारसी, ओटोमन तुर्की और भारतीय वास्तुकला शैलियों के तत्वों का संयोजन है।',
      or: 'ତାଜମହଲ ମୋଗଲ ସ୍ଥାପତ୍ୟର ସର୍ବୋତ୍ତମ ଏବଂ ଅତ୍ୟାଧୁନିକ ଉଦାହରଣକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ, ଯେଉଁଥିରେ ଇସଲାମୀୟ, ପାରସ୍ୟ, ଅଟୋମାନ ତୁର୍କୀ ଏବଂ ଭାରତୀୟ ସ୍ଥାପତ୍ୟ ଶୈଳୀର ଉପାଦାନଗୁଡ଼ିକୁ ଏକତ୍ର କରାଯାଇଛି।'
    },
    culturalImportance: {
      en: 'It is globally admired as a masterpiece of world heritage and represents the rich history of the Mughal era in India.',
      hi: 'इसे विश्व धरोहर की उत्कृष्ट कृति के रूप में विश्व स्तर पर सराहा जाता है और यह भारत में मुगल युग के समृद्ध इतिहास का प्रतिनिधित्व करता है।',
      or: 'ଏହା ବିଶ୍ୱ ଐତିହ୍ୟର ଏକ ଶ୍ରେଷ୍ଠ କୃତି ଭାବରେ ବିଶ୍ୱ ସ୍ତରରେ ପ୍ରଶଂସିତ ଏବଂ ଭାରତରେ ମୋଗଲ ଯୁଗର ସମୃଦ୍ଧ ଇତିହାସକୁ ପ୍ରତିନିଧିତ୍ୱ କରେ।'
    },
    facts: [
      { en: 'The architectural complex was designated as a UNESCO World Heritage Site in 1983.', hi: 'वास्तुकला परिसर को 1983 में यूनेस्को विश्व धरोहर स्थल नामित किया गया था।', or: '୧୯୮୩ ମସିହାରେ ସ୍ଥାପତ୍ୟ ପରିସରକୁ ୟୁନେସ୍କୋ ବିଶ୍ୱ ଐତିହ୍ୟ ସ୍ଥଳୀ ଭାବରେ ମାନ୍ୟତା ଦିଆଯାଇଥିଲା।' },
      { en: 'It took roughly 20,000 artisans over 20 years to complete the complex.', hi: 'परिसर को पूरा करने में लगभग 20,000 कारीगरों को 20 से अधिक वर्षों का समय लगा।', or: 'ଏହି ପରିସରକୁ ସମ୍ପୂର୍ଣ୍ଣ କରିବା ପାଇଁ ପାଖାପାଖି ୨୦,୦୦୦ କାରିଗରଙ୍କୁ ୨୦ ବର୍ଷରୁ ଅଧିକ ସମୟ ଲାଗିଥିଲା।' }
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'October to March', hi: 'अक्टूबर से मार्च', or: 'ଅକ୍ଟୋବରରୁ ମାର୍ଚ୍ଚ' },
      entry: { en: '₹50 for Indians, ₹1100 for Foreigners.', hi: 'भारतीयों के लिए ₹50, विदेशियों के लिए ₹1100।', or: 'ଭାରତୀୟଙ୍କ ପାଇଁ ₹୫୦, ବିଦେଶୀଙ୍କ ପାଇଁ ₹୧୧୦୦।' },
      tips: [
        { en: 'Visit at sunrise for the most beautiful view with the least crowds.', hi: 'कम से कम भीड़ के साथ सबसे खूबसूरत दृश्य के लिए सूर्योदय के समय जाएँ।', or: 'ସବୁଠାରୁ କମ୍ ଭିଡ଼ ସହିତ ସବୁଠାରୁ ସୁନ୍ଦର ଦୃଶ୍ୟ ପାଇଁ ସୂର୍ଯ୍ୟୋଦୟ ସମୟରେ ପରିଦର୍ଶନ କରନ୍ତୁ।' }
      ]
    },
    images: [],
    mapLocation: { lat: 27.1751, lng: 78.0421 }
  },
  't5': {
    name: { en: 'Hampi', hi: 'हम्पी', or: 'ହାମ୍ପି' },
    location: 'Karnataka',
    tagline: {
      en: 'The magnificent ruins of the Vijayanagara Empire.',
      hi: 'विजयनगर साम्राज्य के शानदार खंडहर।',
      or: 'ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ଚମତ୍କାର ଧ୍ୱଂସାବଶେଷ।'
    },
    heroImage: '/hampi.jpg',
    overview: {
      en: 'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire.',
      hi: 'हम्पी दक्षिण भारतीय राज्य कर्नाटक में एक प्राचीन गाँव है। यह विजयनगर साम्राज्य के कई खंडहर मंदिर परिसरों से भरा हुआ है।',
      or: 'ହାମ୍ପି ହେଉଛି ଦକ୍ଷିଣ ଭାରତୀୟ ରାଜ୍ୟ କର୍ଣ୍ଣାଟକର ଏକ ପ୍ରାଚୀନ ଗ୍ରାମ। ଏହା ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ଅନେକ ଧ୍ୱଂସପ୍ରାପ୍ତ ମନ୍ଦିର ପରିସରରେ ପରିପୂର୍ଣ୍ଣ।'
    },
    whyFamous: {
      en: 'Renowned for its breathtaking rock formations, historic ruins, and the iconic stone chariot at the Vittala Temple.',
      hi: 'अपने लुभावने रॉक संरचनाओं, ऐतिहासिक खंडहरों और विठ्ठल मंदिर में प्रतिष्ठित पत्थर के रथ के लिए प्रसिद्ध है।',
      or: 'ଏହାର ଚମତ୍କାର ପଥର ଗଠନ, ଐତିହାସିକ ଧ୍ୱଂସାବଶେଷ ଏବଂ ବିଟ୍ଟଲା ମନ୍ଦିରରେ ଥିବା ପ୍ରସିଦ୍ଧ ପଥର ରଥ ପାଇଁ ପ୍ରସିଦ୍ଧ।'
    },
    history: {
      en: 'Hampi was the capital of the Vijayanagara Empire in the 14th century. Chronicles left by Persian and European travellers, particularly the Portuguese, state Hampi was a prosperous, wealthy and grand city.',
      hi: 'हम्पी 14वीं सदी में विजयनगर साम्राज्य की राजधानी थी। फारसी और यूरोपीय यात्रियों, विशेषकर पुर्तगालियों द्वारा छोड़े गए वृत्तांत बताते हैं कि हम्पी एक समृद्ध, धनवान और भव्य शहर था।',
      or: '୧୪ଶ ଶତାବ୍ଦୀରେ ହାମ୍ପି ବିଜୟନଗର ସାମ୍ରାଜ୍ୟର ରାଜଧାନୀ ଥିଲା। ପାରସ୍ୟ ଏବଂ ୟୁରୋପୀୟ ପର୍ଯ୍ୟଟକ, ବିଶେଷକରି ପର୍ତ୍ତୁଗୀଜମାନଙ୍କ ଦ୍ୱାରା ଛାଡିଯାଇଥିବା ଇତିହାସରୁ ଜଣାପଡେ ଯେ ହାମ୍ପି ଏକ ସମୃଦ୍ଧ, ଧନୀ ଏବଂ ଭବ୍ୟ ସହର ଥିଲା।'
    },
    architecture: {
      en: 'The architecture features the Dravidian style that flourished under the Vijayanagara Empire. Large dimensions, grand pillars, and intricate carvings are hallmarks of Hampi\'s monuments.',
      hi: 'वास्तुकला में द्रविड़ शैली है जो विजयनगर साम्राज्य के तहत फली-फूली। बड़े आयाम, भव्य स्तंभ और जटिल नक्काशी हम्पी के स्मारकों की पहचान हैं।',
      or: 'ଏହି ସ୍ଥାପତ୍ୟରେ ଦ୍ରାବିଡ଼ ଶୈଳୀ ରହିଛି ଯାହା ବିଜୟନଗର ସାମ୍ରାଜ୍ୟ ଅଧୀନରେ ବିକଶିତ ହୋଇଥିଲା। ବଡ଼ ଆକାର, ଭବ୍ୟ ସ୍ତମ୍ଭ ଏବଂ ଜଟିଳ ଖୋଦେଇ ହେଉଛି ହାମ୍ପିର ସ୍ମାରକୀଗୁଡ଼ିକର ବିଶେଷତ୍ୱ।'
    },
    culturalImportance: {
      en: 'It remains a significant religious center, housing the Virupaksha Temple and several other monuments reflecting the deep spiritual and cultural roots of medieval India.',
      hi: 'यह एक महत्वपूर्ण धार्मिक केंद्र बना हुआ है, जिसमें विरुपाक्ष मंदिर और कई अन्य स्मारक हैं जो मध्ययुगीन भारत की गहरी आध्यात्मिक और सांस्कृतिक जड़ों को दर्शाते हैं।',
      or: 'ଏହା ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଧାର୍ମିକ କେନ୍ଦ୍ର ହୋଇ ରହିଛି, ଯେଉଁଥିରେ ବିରୂପାକ୍ଷ ମନ୍ଦିର ଏବଂ ଅନ୍ୟାନ୍ୟ ଅନେକ ସ୍ମାରକୀ ରହିଛି ଯାହା ମଧ୍ୟଯୁଗୀୟ ଭାରତର ଗଭୀର ଆଧ୍ୟାତ୍ମିକ ଏବଂ ସାଂସ୍କୃତିକ ଚେରକୁ ପ୍ରତିଫଳିତ କରିଥାଏ।'
    },
    facts: [
      { en: 'The Vittala Temple complex has 56 musical pillars that produce musical sounds when tapped.', hi: 'विठ्ठल मंदिर परिसर में 56 संगीतमय स्तंभ हैं जो थपथपाने पर संगीतमय ध्वनियाँ उत्पन्न करते हैं।', or: 'ବିଟ୍ଟଲା ମନ୍ଦିର ପରିସରରେ ୫୬ଟି ସାଙ୍ଗୀତିକ ସ୍ତମ୍ଭ ରହିଛି ଯାହାକୁ ବାଡେଇଲେ ସାଙ୍ଗୀତିକ ଶବ୍ଦ ସୃଷ୍ଟି ହୁଏ।' },
      { en: 'Hampi covers an area of 4187.24 hectares and has over 1600 surviving remains.', hi: 'हम्पी 4187.24 हेक्टेयर क्षेत्र में फैला है और इसमें 1600 से अधिक जीवित अवशेष हैं।', or: 'ହାମ୍ପି ୪୧୮୭.୨୪ ହେକ୍ଟର ଅଞ୍ଚଳରେ ବ୍ୟାପ୍ତ ଏବଂ ଏଥିରେ ୧୬୦୦ରୁ ଅଧିକ ବଞ୍ଚିଥିବା ଅବଶେଷ ରହିଛି।' }
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'October to February', hi: 'अक्टूबर से फरवरी', or: 'ଅକ୍ଟୋବରରୁ ଫେବୃଆରୀ' },
      entry: { en: '₹40 for Indians, ₹600 for Foreigners.', hi: 'भारतीयों के लिए ₹40, विदेशियों के लिए ₹600।', or: 'ଭାରତୀୟଙ୍କ ପାଇଁ ₹୪୦, ବିଦେଶୀଙ୍କ ପାଇଁ ₹୬୦୦।' },
      tips: [
        { en: 'Rent a bicycle to explore the vast ruins comfortably.', hi: 'विशाल खंडहरों का आराम से पता लगाने के लिए साइकिल किराए पर लें।', or: 'ବିଶାଳ ଧ୍ୱଂସାବଶେଷକୁ ଆରାମରେ ବୁଲି ଦେଖିବା ପାଇଁ ଏକ ସାଇକେଲ୍ ଭଡାରେ ନିଅନ୍ତୁ।' }
      ]
    },
    images: [],
    mapLocation: { lat: 15.3350, lng: 76.4600 }
  },
  't41': {
    name: { en: 'Kodaikanal', hi: 'कोडाइकनाल', or: 'କୋଡାଇକାନାଲ୍' },
    location: 'Tamil Nadu',
    tagline: {
      en: 'The Princess of Hill Stations.',
      hi: 'हिल स्टेशनों की राजकुमारी।',
      or: 'ପାର୍ବତ୍ୟ ସ୍ଥାନମାନଙ୍କର ରାଜକୁମାରୀ।'
    },
    heroImage: '/kodaikanal.jpg',
    overview: {
      en: 'Kodaikanal is a serene hill station located in the Palani Hills of Tamil Nadu. Known for its pleasant climate and lush greenery, its name translates to "The Gift of the Forest" in the Tamil language.',
      hi: 'कोडाइकनाल तमिलनाडु की पलानी पहाड़ियों में स्थित एक शांत हिल स्टेशन है। अपनी सुखद जलवायु और हरी-भरी हरियाली के लिए जाना जाता है, तमिल भाषा में इसके नाम का अनुवाद "जंगल का उपहार" है।',
      or: 'କୋଡାଇକାନାଲ୍ ତାମିଲନାଡୁର ପଲାନି ପାହାଡ଼ରେ ଅବସ୍ଥିତ ଏକ ଶାନ୍ତ ପାର୍ବତ୍ୟ ସ୍ଥାନ। ଏହାର ସୁଖଦ ଜଳବାୟୁ ଏବଂ ସବୁଜିମା ପାଇଁ ପରିଚିତ, ତାମିଲ ଭାଷାରେ ଏହାର ନାମର ଅର୍ଥ ହେଉଛି "ଜଙ୍ଗଲର ଉପହାର"।'
    },
    whyFamous: {
      en: 'Famous for its star-shaped man-made lake, Pillar Rocks, and the rare Kurinji flower that blooms once every 12 years.',
      hi: 'अपनी तारे के आकार की मानव निर्मित झील, पिलर रॉक्स और दुर्लभ कुरिंजी फूल के लिए प्रसिद्ध है जो हर 12 साल में एक बार खिलता है।',
      or: 'ଏହାର ତାରା ଆକାରର ମନୁଷ୍ୟକୃତ ହ୍ରଦ, ପିଲାର୍ ରକ୍ସ ଏବଂ ୧୨ ବର୍ଷରେ ଥରେ ଫୁଟୁଥିବା ବିରଳ କୁରିଞ୍ଜି ଫୁଲ ପାଇଁ ପ୍ରସିଦ୍ଧ।'
    },
    history: {
      en: 'Established in 1845 by American Christian missionaries and British bureaucrats to escape the high temperatures and tropical diseases of the plains.',
      hi: 'मैदानी इलाकों के उच्च तापमान और उष्णकटिबंधीय बीमारियों से बचने के लिए 1845 में अमेरिकी ईसाई मिशनरियों और ब्रिटिश नौकरशाहों द्वारा स्थापित।',
      or: 'ସମତଳ ଅଞ୍ଚଳର ଅତ୍ୟଧିକ ଗରମ ଏବଂ କ୍ରାନ୍ତୀୟ ରୋଗରୁ ରକ୍ଷା ପାଇବା ପାଇଁ ୧୮୪୫ ମସିହାରେ ଆମେରିକୀୟ ଖ୍ରୀଷ୍ଟିଆନ ମିଶନାରୀ ଏବଂ ବ୍ରିଟିଶ ଅଧିକାରୀମାନଙ୍କ ଦ୍ୱାରା ପ୍ରତିଷ୍ଠିତ।'
    },
    architecture: {
      en: 'The town features a mix of traditional Tamil structures and colonial-era architecture, with several historic churches and heritage bungalows.',
      hi: 'इस शहर में पारंपरिक तमिल संरचनाओं और औपनिवेशिक युग की वास्तुकला का मिश्रण है, जिसमें कई ऐतिहासिक चर्च और विरासत बंगले हैं।',
      or: 'ଏହି ସହରରେ ପାରମ୍ପାରିକ ତାମିଲ ଗଠନ ଏବଂ ଔପନିବେଶିକ ଯୁଗର ସ୍ଥାପତ୍ୟର ମିଶ୍ରଣ ରହିଛି, ଯେଉଁଥିରେ ଅନେକ ଐତିହାସିକ ଗିର୍ଜାଘର ଏବଂ ଐତିହ୍ୟ ବଙ୍ଗଳା ଅଛି।'
    },
    culturalImportance: {
      en: 'It is a hub for nature lovers and a prime example of eco-tourism, highlighting the importance of preserving the Western Ghats ecosystem.',
      hi: 'यह प्रकृति प्रेमियों के लिए एक केंद्र और पर्यावरण-पर्यटन का एक प्रमुख उदाहरण है, जो पश्चिमी घाट पारिस्थितिकी तंत्र के संरक्षण के महत्व को उजागर करता है।',
      or: 'ଏହା ପ୍ରକୃତି ପ୍ରେମୀଙ୍କ ପାଇଁ ଏକ କେନ୍ଦ୍ର ଏବଂ ଇକୋ-ଟୁରିଜିମର ଏକ ପ୍ରମୁଖ ଉଦାହରଣ, ଯାହା ପଶ୍ଚିମ ଘାଟ ପରିବେଶକୁ ସଂରକ୍ଷଣ କରିବାର ଗୁରୁତ୍ୱକୁ ଦର୍ଶାଏ।'
    },
    facts: [
      { en: 'The Kurinji flower found here blooms only once every 12 years.', hi: 'यहां पाया जाने वाला कुरिंजी फूल हर 12 साल में केवल एक बार खिलता है।', or: 'ଏଠାରେ ମିଳୁଥିବା କୁରିଞ୍ଜି ଫୁଲ ୧୨ ବର୍ଷରେ କେବଳ ଥରେ ଫୁଟେ।' },
      { en: 'Kodaikanal Lake is entirely man-made and was created in 1863.', hi: 'कोडाइकनाल झील पूरी तरह से मानव निर्मित है और इसे 1863 में बनाया गया था।', or: 'କୋଡାଇକାନାଲ୍ ହ୍ରଦ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ମନୁଷ୍ୟକୃତ ଏବଂ ଏହାକୁ ୧୮୬୩ ମସିହାରେ ତିଆରି କରାଯାଇଥିଲା।' }
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'October to March', hi: 'अक्टूबर से मार्च', or: 'ଅକ୍ଟୋବରରୁ ମାର୍ଚ୍ଚ' },
      entry: { en: 'No entry fee to the town, specific spots have minimal fees.', hi: 'शहर में कोई प्रवेश शुल्क नहीं, विशिष्ट स्थानों पर न्यूनतम शुल्क है।', or: 'ସହରକୁ କୌଣସି ପ୍ରବେଶ ଶୁଳ୍କ ନାହିଁ, ନିର୍ଦ୍ଦିଷ୍ଟ ସ୍ଥାନଗୁଡ଼ିକରେ ସର୍ବନିମ୍ନ ଶୁଳ୍କ ଅଛି।' },
      tips: [
        { en: 'Carry warm clothing as temperatures can drop, especially at night.', hi: 'गर्म कपड़े साथ रखें क्योंकि तापमान गिर सकता है, खासकर रात में।', or: 'ଗରମ ପୋଷାକ ସାଥିରେ ନିଅନ୍ତୁ କାରଣ ତାପମାତ୍ରା କମିପାରେ, ବିଶେଷକରି ରାତିରେ।' }
      ]
    },
    images: [],
    mapLocation: { lat: 10.2381, lng: 77.4892 }
  },
};
