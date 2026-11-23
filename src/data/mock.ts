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
  { id: 't1', name: 'Konark Sun Temple', state: 'Odisha', category: 'Temple', highlight: 'UNESCO 13th C. Sun chariot architecture', image: '/konark.jpg' },
  { id: 't2', name: 'Jagannath Temple Puri', state: 'Odisha', category: 'Temple', highlight: 'Ratha Yatra divine shrine', image: '/puri.jpg' },
  { id: 't3', name: 'Chilika Lake', state: 'Odisha', category: 'Lagoon', highlight: 'Irrawaddy dolphins & migratory birds', image: '/chilika.jpg' },
  { id: 't4', name: 'Dhauli Shanti Stupa', state: 'Odisha', category: 'Buddhist', highlight: 'Emperor Ashoka Kalinga peace edicts', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' },
  { id: 't5', name: 'Lingaraj Temple Bhubaneswar', state: 'Odisha', category: 'Temple', highlight: '11th C. Kalinga temple architecture', image: '/bhubaneswar.jpg' },
  { id: 't6', name: 'Similipal National Park', state: 'Odisha', category: 'Wildlife', highlight: 'UNESCO Biosphere tiger & elephant reserve', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80' },
  { id: 't7', name: 'Daringbadi Hill Station', state: 'Odisha', category: 'Hills', highlight: 'Kashmir of Odisha pine valleys', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { id: 't8', name: 'Bhitarkanika National Park', state: 'Odisha', category: 'Wildlife', highlight: 'Giant saltwater crocodiles & mangroves', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80' },
  { id: 't9', name: 'Gopalpur Beach', state: 'Odisha', category: 'Beach', highlight: 'Historic maritime port & golden sands', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: 't10', name: 'Chandipur Beach', state: 'Odisha', category: 'Beach', highlight: 'Unique hide-and-seek disappearing sea', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80' },
  { id: 't11', name: 'Hirakud Dam', state: 'Odisha', category: 'Heritage', highlight: 'Longest earthen dam across Mahanadi', image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80' },
  { id: 't12', name: 'Deomali Hills', state: 'Odisha', category: 'Hills', highlight: 'Highest mountain peak in Koraput', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' },
  { id: 't13', name: 'Raghurajpur Heritage Village', state: 'Odisha', category: 'Village', highlight: 'Pattachitra & Gotipua master artisans', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' },
  { id: 't14', name: 'Pipili Applique Hamlet', state: 'Odisha', category: 'Village', highlight: 'Centuries-old Chandua cloth embroidery', image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80' },
  { id: 't15', name: 'Ratnagiri Buddhist Complex', state: 'Odisha', category: 'Buddhist', highlight: 'Pushpagiri Mahavihara carved monastery gate', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80' },
  { id: 't16', name: 'Tara Tarini Temple', state: 'Odisha', category: 'Temple', highlight: 'Sacred twin Goddess Shakti Peetha on Rushikulya', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
  { id: 't17', name: 'Puri Golden Beach', state: 'Odisha', category: 'Beach', highlight: 'Blue Flag certified sacred surf', image: '/puribeach.jpg' },
  { id: 't18', name: 'Udayagiri & Khandagiri Caves', state: 'Odisha', category: 'Cave', highlight: '2nd C. BCE Jain monk rock dwellings & Hathigumpha', image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80' },
  { id: 't19', name: 'Satkosia Gorge Sanctuary', state: 'Odisha', category: 'Wildlife', highlight: 'Mahanadi river canyon & Gharial sanctuary', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80' },
  { id: 't20', name: 'Barabati Fort Cuttack', state: 'Odisha', category: 'Heritage', highlight: '14th C. Ganga Dynasty moat & arched gateway', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80' }
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
    name: { en: 'Dhauli Shanti Stupa', hi: 'धौली शांति स्तूप', or: 'ଧଉଳି ଶାନ୍ତି ସ୍ତୂପ' },
    location: 'Bhubaneswar, Khurda, Odisha',
    tagline: {
      en: 'Emperor Ashoka\'s Kalinga War transformation site and historic Peace Pagoda.',
      hi: 'सम्राट अशोक के कलिंग युद्ध परिवर्तन का स्थल और ऐतिहासिक शांति स्तूप।',
      or: 'ସମ୍ରାଟ ଅଶୋକଙ୍କ କଳିଙ୍ଗ ଯୁଦ୍ଧ ପରିବର୍ତ୍ତନ ସ୍ଥଳୀ ଏବଂ ଐତିହାସିକ ଶାନ୍ତି ସ୍ତୂପ।'
    },
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    overview: {
      en: 'Dhauli Hill, situated on the banks of the sacred Daya River, is the transformative cradle of Buddhism in India where Emperor Ashoka renounced conquest by war in favor of conquest by Dharma (Dhammavijaya) in 261 BCE.',
      hi: 'पवित्र दया नदी के तट पर स्थित धौली पहाड़ी भारत में बौद्ध धर्म का परिवर्तनकारी पालना है, जहां 261 ईसा पूर्व में कलिंग युद्ध के बाद सम्राट अशोक ने युद्ध पर विजय के बजाय धर्म विजय को अपनाया।',
      or: 'ପବିତ୍ର ଦୟା ନଦୀ କୂଳରେ ଅବସ୍ଥିତ ଧଉଳି ପାହାଡ଼ ହେଉଛି ଭାରତରେ ବୌଦ୍ଧ ଧର୍ମର ରୂପାନ୍ତରଣ ସ୍ଥଳୀ, ଯେଉଁଠାରେ ଖ୍ରୀଷ୍ଟପୂର୍ବ ୨୬୧ରେ କଳିଙ୍ଗ ଯୁଦ୍ଧ ପରେ ସମ୍ରାଟ ଅଶୋକ ହିଂସା ତ୍ୟାଗ କରି ଧର୍ମବିଜୟ ଆପଣେଇଥିଲେ।'
    },
    whyFamous: {
      en: 'Famous for the ancient 3rd-century BCE Rock Edicts of Ashoka, the sculpted rock elephant, and the dazzling white Peace Pagoda (Vishwa Shanti Stupa) built by Indo-Japanese collaboration.',
      hi: 'अशोक के प्राचीन तीसरी शताब्दी ईसा पूर्व के शिलालेखों, नक्काशीदार रॉक हाथी, और इंडो-जापानी सहयोग द्वारा निर्मित चमकदार सफेद शांति स्तूप के लिए प्रसिद्ध है।',
      or: 'ଖ୍ରୀଷ୍ଟପୂର୍ବ ତୃତୀୟ ଶତାବ୍ଦୀର ପ୍ରାଚୀନ ଅଶୋକଙ୍କ ଶିଳାଲେଖ, ପ୍ରସ୍ତର ଖୋଦିତ ହାତୀ ଏବଂ ଇଣ୍ଡୋ-ଜାପାନୀୟ ସହଯୋଗରେ ନିର୍ମିତ ଧବଳ ଶାନ୍ତି ସ୍ତୂପ ପାଇଁ ପ୍ରସିଦ୍ଧ।'
    },
    history: {
      en: 'Following the devastating Kalinga War in 261 BCE, which saw immense bloodshed on the plains of Daya River, Ashoka embraced the non-violent teachings of Gautama Buddha and inscribed his imperial edicts on the natural rocks of Dhauli.',
      hi: '261 ईसा पूर्व में विनाशकारी कलिंग युद्ध के बाद, जिसमें दया नदी के मैदानों पर भारी रक्तपात हुआ था, अशोक ने गौतम बुद्ध की अहिंसक शिक्षाओं को अपनाया और धौली की प्राकृतिक चट्टानों पर अपने शाही आदेशों को अंकित किया।',
      or: 'ଖ୍ରୀଷ୍ଟପୂର୍ବ ୨୬୧ର ଭୟାବହ କଳିଙ୍ଗ ଯୁଦ୍ଧ ପରେ, ଯେଉଁଥିରେ ଦୟା ନଦୀ କୂଳରେ ଅପାର ରକ୍ତପାତ ହୋଇଥିଲା, ଅଶୋକ ଗୌତମ ବୁଦ୍ଧଙ୍କ ଅହିଂସା ମାର୍ଗ ଗ୍ରହଣ କରିଥିଲେ ଏବଂ ଧଉଳି ପ୍ରସ୍ତରରେ ନିଜର ଶିଳାଲେଖ ଖୋଦନ କରିଥିଲେ।'
    },
    architecture: {
      en: 'Features early rock-cut Mauryan elephant sculpture overlooking Ashokan edicts, crowned by the dome-shaped white Shanti Stupa built in 1972 with stone panels depicting Buddha\'s enlightenment and Ashoka laying down his sword.',
      hi: 'इसमें अशोक के शिलालेखों के ऊपर मौर्य काल की नक्काशीदार हाथी की मूर्ति है, जिसके ऊपर 1972 में बना गुंबद के आकार का सफेद शांति स्तूप है जिसमें बुद्ध के ज्ञानोदय और अशोक द्वारा अपनी तलवार रखने के दृश्य हैं।',
      or: 'ଏଥିରେ ଅଶୋକଙ୍କ ଶିଳାଲେଖ ଉପରେ ମୌର୍ଯ୍ୟ ଯୁଗର ପ୍ରସ୍ତର ଖୋଦିତ ହାତୀ ମୂର୍ତ୍ତି ଏବଂ ୧୯୭୨ରେ ନିର୍ମିତ ଶାନ୍ତି ସ୍ତୂପ ରହିଛି ଯେଉଁଥିରେ ବୁଦ୍ଧଙ୍କ ଜ୍ଞାନପ୍ରାପ୍ତି ଏବଂ ଅଶୋକଙ୍କ ଖଡ୍ଗ ତ୍ୟାଗ ଚିତ୍ରିତ ହୋଇଛି।'
    },
    culturalImportance: {
      en: 'A beacon of world peace, religious tolerance, and spiritual pilgrimage for Buddhists, historians, and travelers globally.',
      hi: 'विश्व शांति, धार्मिक सहिष्णुता और विश्व भर के बौद्धों, इतिहासकारों और यात्रियों के लिए आध्यात्मिक तीर्थ का प्रतीक।',
      or: 'ବିଶ୍ୱ ଶାନ୍ତି, ଧାର୍ମିକ ସହିଷ୍ଣୁତା ଏବଂ ବିଶ୍ୱବ୍ୟାପୀ ବୌଦ୍ଧ, ଇତିହାସକାର ତଥା ପର୍ଯ୍ୟଟକଙ୍କ ପାଇଁ ଏକ ଆଧ୍ୟାତ୍ମିକ ତୀର୍ଥସ୍ଥଳୀ।'
    },
    facts: [
      { en: 'The rock elephant at Dhauli is regarded as one of the oldest rock-cut sculptures in India.', hi: 'धौली में रॉक हाथी को भारत की सबसे पुरानी रॉक-कट मूर्तियों में से एक माना जाता है।', or: 'ଧଉଳିର ପ୍ରସ୍ତର ହାତୀ ଭାରତର ପ୍ରାଚୀନତମ ପ୍ରସ୍ତର ଖୋଦିତ ମୂର୍ତ୍ତି ମଧ୍ୟରୁ ଗୋଟିଏ।' },
      { en: 'The peace pagoda was jointly inaugurated in 1972 by Japanese Buddhist master Nichidatsu Fujii and Chief Minister of Odisha.', hi: 'शांति स्तूप का संयुक्त रूप से 1972 में जापानी बौद्ध गुरु निचिदात्सु फ़ूजी और ओडिशा के मुख्यमंत्री द्वारा उद्घाटन किया गया था।', or: '୧୯୭୨ ମସିହାରେ ଜାପାନୀ ବୌଦ୍ଧ ଗୁରୁ ନିଚିଦାତ୍ସୁ ଫୁଜି ଏବଂ ଓଡ଼ିଶାର ମୁଖ୍ୟମନ୍ତ୍ରୀଙ୍କ ଦ୍ୱାରା ଏହି ସ୍ତୂପ ଉଦଘାଟିତ ହୋଇଥିଲା।' }
    ],
    visitorInfo: {
      bestTimeToVisit: { en: 'October to March (Sunset is scenic)', hi: 'अक्टूबर से मार्च (सूर्यास्त दर्शनीय है)', or: 'ଅକ୍ଟୋବରରୁ ମାର୍ଚ୍ଚ (ସୂର୍ଯ୍ୟାସ୍ତ ଅତ୍ୟନ୍ତ ମନୋରମ)' },
      entry: { en: 'Free entry for all visitors.', hi: 'सभी आगंतुकों के लिए निःशुल्क प्रवेश।', or: 'ସମସ୍ତ ପର୍ଯ୍ୟଟକଙ୍କ ପାଇଁ ପ୍ରବେଶ ମାଗଣା।' },
      tips: [
        { en: 'Witness the evening Light and Sound show narrating the story of Kalinga and Ashoka.', hi: 'कलिंग और अशोक की कहानी सुनाने वाले शाम के लाइट एंड साउंड शो को देखें।', or: 'ସନ୍ଧ୍ୟା ସମୟରେ କଳିଙ୍ଗ ଏବଂ ଅଶୋକଙ୍କ କାହାଣୀ ପ୍ରଦର୍ଶନ କରୁଥିବା ଆଲୋକ ଓ ଧ୍ୱନି ଶୋ ଦେଖନ୍ତୁ।' }
      ]
    },
    images: ['/bhubaneswar.jpg'],
    mapLocation: { lat: 20.1923, lng: 85.8394 }
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

// Re-export rich Odisha ecosystem data
export * from './odishaData';
