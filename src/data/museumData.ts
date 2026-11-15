// Comprehensive Database for the Redesigned Virtual Museum (12 Categories)

export interface MuseumArtifact {
  id: string;
  name: string;
  odiaName: string;
  category: 
    | 'Ancient Odisha Sculptures'
    | 'Temple Architecture'
    | 'Traditional Paintings'
    | 'Pattachitra Art'
    | 'Palm Leaf Engraving'
    | 'Traditional Jewellery'
    | 'Tribal Artifacts'
    | 'Traditional Musical Instruments'
    | 'Handloom and Textiles'
    | 'Historical Coins and Objects'
    | 'Buddhist Heritage'
    | 'Traditional Handicrafts';
  period: string;
  district: string;
  region: string;
  materials: string[];
  historicalBackground: string;
  culturalSignificance: string;
  description: string;
  image: string;
  gallery: string[];
  has3D: boolean;
  sketchfabId?: string;
  studentSummary: string;
  quizQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const allMuseumArtifacts: MuseumArtifact[] = [
  // 1. Ancient Odisha Sculptures
  {
    id: 'art-01',
    name: 'Konark Sun Chariot Wheel (Chakra)',
    odiaName: 'କୋଣାର୍କ ସୂର୍ଯ୍ୟ ଚକ୍ର',
    category: 'Ancient Odisha Sculptures',
    period: '13th Century CE (Ganga Dynasty, King Narasimhadeva I)',
    district: 'Puri',
    region: 'Coastal Odisha',
    materials: ['Khondalite Stone', 'Chlorite Stone'],
    historicalBackground: 'Carved under King Narasimhadeva I of the Eastern Ganga Dynasty around 1250 CE, the 24 gigantic chariot wheels of Konark function as precise sundials.',
    culturalSignificance: 'Symbol of cosmic time (Kala Chakra) and the national emblem of Odisha\'s architectural genius, featured on the Indian 10-rupee currency note.',
    description: 'Each wheel has 8 major spokes and 8 minor spokes. The shadow cast by the hub on the spokes calculates exact time to the minute.',
    image: '/konark.jpg',
    gallery: [
      '/konark.jpg',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    ],
    has3D: true,
    sketchfabId: 'a3d1c9ef007641d490538f5f4b0e9db6',
    studentSummary: 'A 13th-century stone sundial that tells time using shadows of the sun! It has 16 spokes and intricate carvings of dancing musicians.',
    quizQuestion: {
      question: 'How do the spokes of the Konark Sun Temple wheel tell time?',
      options: ['By the shadow cast by the axle hub', 'By water dripping through the stone', 'By mechanical gears inside', 'By moonlight reflection'],
      correctIndex: 0,
      explanation: 'The shadow cast by the hub on the carved spokes measures the exact time of day based on the sun\'s position.'
    }
  },
  {
    id: 'art-02',
    name: 'Alasa Kanya (Bracket Maiden with Mirror)',
    odiaName: 'ଦର୍ପଣୀ ଅଳସା କନ୍ୟା',
    category: 'Ancient Odisha Sculptures',
    period: '11th Century CE (Somavamsi Dynasty)',
    district: 'Khordha',
    region: 'Bhubaneswar Temple Complex',
    materials: ['Sandstone', 'Red Ochre Wash'],
    historicalBackground: 'Sculpted on the vimana wall of the Rajarani Temple in Bhubaneswar, representing the classic sensuous Odishan feminine aesthetic.',
    culturalSignificance: 'Depicts an Alasa Kanya (indolent maiden) admiring herself in a round mirror while adjusting her coiffure, celebrating beauty and grace.',
    description: 'Sculpted with remarkable depth and fluidity, displaying delicate folds of jewellery, waistband, and serene facial expression.',
    image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80'
    ],
    has3D: true,
    sketchfabId: '768ce950df6e44b89895efc582fa08d2',
    studentSummary: 'A stone statue of a graceful maiden looking into a hand mirror, carved over 1,000 years ago on the walls of Bhubaneswar temples.',
    quizQuestion: {
      question: 'Which temple in Bhubaneswar is most famous for its delicate Alasa Kanya sculptures?',
      options: ['Rajarani Temple', 'Biraja Temple', 'Samaleswari Temple', 'Taratarini Temple'],
      correctIndex: 0,
      explanation: 'Rajarani Temple is world-famous for its high-relief sculptures of graceful maiden figures.'
    }
  },

  // 2. Temple Architecture
  {
    id: 'art-03',
    name: 'Kalinga Rekha Deula Architectural Shikhara Model',
    odiaName: 'କଳିଙ୍ଗ ରେଖା ଦେଉଳ ଶିଖର',
    category: 'Temple Architecture',
    period: '8th - 12th Century CE',
    district: 'Khordha',
    region: 'Old Town, Bhubaneswar',
    materials: ['Laterite Core', 'Sandstone Cladding'],
    historicalBackground: 'The Rekha Deula (tall curvilinear sanctum tower) is the hallmark of classic Kalinga architectural order seen in Lingaraj Temple.',
    culturalSignificance: 'Houses the sacred Garbhagriha, crowned by an Amalaka disc and Kalasha pot, symbolizing Mount Meru ascending towards the heavens.',
    description: 'Divided into Bada (vertical wall), Gandi (curvilinear spire), and Mastaka (crowning finials) with intricate chaitya-arch motifs.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'],
    has3D: true,
    sketchfabId: 'a3d1c9ef007641d490538f5f4b0e9db6',
    studentSummary: 'Kalinga architecture has three parts: Rekha Deula (tall tower), Pidha Deula (pyramidal porch), and Khakhara Deula (semi-cylindrical roof).',
    quizQuestion: {
      question: 'What is the top disc of a Kalinga temple tower called?',
      options: ['Amalaka', 'Gandi', 'Jagamohana', 'Natamandira'],
      correctIndex: 0,
      explanation: 'The fluted stone disc crowning the Rekha Deula shikhara is called the Amalaka.'
    }
  },

  // 3. Traditional Paintings
  {
    id: 'art-04',
    name: 'Ganjapa Circular Playing Cards (Dasavatara Set)',
    odiaName: 'ଗଞ୍ଜପା ପଶା କାର୍ଡ଼',
    category: 'Traditional Paintings',
    period: '16th Century CE onwards',
    district: 'Ganjam',
    region: 'Digapahandi & Paralakhemundi',
    materials: ['Layered Cotton Cloth', 'Tamarind Seed Gum', 'Chalk', 'Natural Pigments', 'Lacquer'],
    historicalBackground: 'Ganjapa is an ancient circular playing card game popular in royal courts and artisan villages of Ganjam and Puri.',
    culturalSignificance: 'A set contains 144 circular hand-painted cards featuring the ten incarnations (Dasavatara) of Lord Vishnu.',
    description: 'Each card is meticulously hand-drawn with squirrel-hair brushes and coated with natural resin to make it waterproof and durable.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'Round, hand-painted playing cards made from cotton cloth and painted with figures of Vishnu\'s ten avatars!',
    quizQuestion: {
      question: 'What is used to give Ganjapa playing cards their stiffness and glossy waterproof finish?',
      options: ['Tamarind seed glue and natural lacquer', 'Plastic coating', 'Wax paper', 'Metal sheets'],
      correctIndex: 0,
      explanation: 'Traditional Chitrakars use boiled tamarind seed paste for layering and natural lac for water resistance.'
    }
  },

  // 4. Pattachitra Art
  {
    id: 'art-05',
    name: 'Kaliya Dalan Masterpiece on Tussar Silk',
    odiaName: 'କାଳୀୟ ଦଳନ ପଟ୍ଟଚିତ୍ର',
    category: 'Pattachitra Art',
    period: 'Contemporary Mastercraft (Preserved Traditional Method)',
    district: 'Puri',
    region: 'Raghurajpur Heritage Village',
    materials: ['Handwoven Tussar Silk', 'Conch Shell White', 'Hingula Red', 'Haritala Yellow', 'Lampblack'],
    historicalBackground: 'Pattachitra is a 1,000-year-old scroll painting art form inextricably linked to Lord Jagannath\'s temple rituals during Anavasara period.',
    culturalSignificance: 'Depicts young Krishna subduing the venomous serpent Kaliya in the Yamuna river, flanked by praying Nagakanyas.',
    description: 'Framed by intricate geometric and floral floral borders with vibrant mineral colors that never fade over centuries.',
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80'],
    has3D: true,
    sketchfabId: '768ce950df6e44b89895efc582fa08d2',
    studentSummary: 'Pattachitra painters (Chitrakaras) make all colors from nature: white from conch shells, red from cinnabar stone, black from burnt soot!',
    quizQuestion: {
      question: 'Which village in Puri district is famous across the world for Pattachitra scroll paintings?',
      options: ['Raghurajpur', 'Nuapatna', 'Kotpad', 'Aradi'],
      correctIndex: 0,
      explanation: 'Raghurajpur is India\'s premier heritage crafts village where every family practices traditional Pattachitra art.'
    }
  },

  // 5. Palm Leaf Engraving
  {
    id: 'art-06',
    name: 'Talapatra Khuda (Geeta Govinda Palm-Leaf Manuscript)',
    odiaName: 'ତାଳପତ୍ର ଖୋଦେଇ ଗୀତ ଗୋବିନ୍ଦ',
    category: 'Palm Leaf Engraving',
    period: '12th Century CE Legacy',
    district: 'Puri',
    region: 'Raghurajpur & Nimapada',
    materials: ['Seasoned Dried Palmyra Leaves', 'Iron Stylus (Lekhani)', 'Lampblack soot', 'Turmeric paste'],
    historicalBackground: 'Ancient Odia scholars engraved poetry, astronomy, and Jayadeva\'s Geeta Govinda using sharp iron styluses on dried palm leaves.',
    culturalSignificance: 'Preserves the living literary and artistic bridge between classical Sanskrit lyricism and folk Odia miniature illustrations.',
    description: 'Slender palm leaves strung together with cotton cords between decorative wooden covers. Soot rubbed into incisions makes the delicate drawings permanent.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'Before paper was invented, books in Odisha were etched onto dried palm leaves using a sharp iron needle and rubbed with soot!',
    quizQuestion: {
      question: 'What sharp metal tool is used to etch illustrations onto dried palm leaves?',
      options: ['Iron Stylus (Lekhani)', 'Chisel', 'Ink Quill', 'Laser pen'],
      correctIndex: 0,
      explanation: 'Artisans use a steel or iron stylus called Lekhani to etch fine lines into the leaf fibres.'
    }
  },

  // 6. Traditional Jewellery
  {
    id: 'art-07',
    name: 'Cuttack Tarakasi Silver Filigree Peacock (Mayura)',
    odiaName: 'କଟକ ତାରକସୀ ରୂପା ମୟୂର',
    category: 'Traditional Jewellery',
    period: '500-Year-Old Maritime Craft Tradition',
    district: 'Cuttack',
    region: 'Naya Sadak & Balu Bazar, Cuttack',
    materials: ['99% Pure Fine Silver Wire (Chandi)', 'Borax Flux', 'Charcoal Furnace'],
    historicalBackground: 'Tarakasi was nurtured in Cuttack through ancient maritime trade routes connecting Kalinga to Java, Sumatra, and Persia.',
    culturalSignificance: 'Adorns the deities during Cuttack\'s famous Durga Puja Silver Tableaux (Chandi Medha) and forms exquisite heirloom bridal ornaments.',
    description: 'Pure silver is drawn into hairline thin wires, twisted into delicate zig-zag ribbons, and soldered into an intricate open-mesh peacock motif.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'],
    has3D: true,
    sketchfabId: '768ce950df6e44b89895efc582fa08d2',
    studentSummary: 'Silver is stretched until it is thinner than a strand of hair and woven like lace into peacocks, jewelry, and chariot miniatures!',
    quizQuestion: {
      question: 'Which city in Odisha is world-renowned as the Silver City for its Tarakasi filigree art?',
      options: ['Cuttack', 'Rourkela', 'Sambalpur', 'Berhampur'],
      correctIndex: 0,
      explanation: 'Cuttack is hailed as the Silver City due to its centuries-old Tarakasi silver filigree master craftsmen.'
    }
  },

  // 7. Tribal Artifacts
  {
    id: 'art-08',
    name: 'Dongria Kondh Embroidered Kapdaganda Shawl',
    odiaName: 'ଡଙ୍ଗରିଆ କନ୍ଧ କାପଡ଼ାଗଣ୍ଡା ଚାଦର',
    category: 'Tribal Artifacts',
    period: 'Indigenous Heritage (GI Tagged 2024)',
    district: 'Rayagada',
    region: 'Niyamgiri Hills',
    materials: ['Coarse Off-White Cotton Fabric', 'Red, Green, Yellow Embroidery Threads'],
    historicalBackground: 'Embroidered exclusively by Dongria Kondh maidens as tokens of affection for prospective grooms and community ceremonies.',
    culturalSignificance: 'The geometric triangular motifs represent Niyam Dongar hills, green signifies fertile agriculture, red represents blood and sacrifice, and yellow symbolises peace.',
    description: 'Hand-stitched needlework forming concentric mountain triangles with delicate border zig-zags along the borders.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'A hand-embroidered tribal shawl with red, green, and yellow mountain triangles, woven by the Dongria Kondh tribe of Niyamgiri.',
    quizQuestion: {
      question: 'What do the triangular geometric motifs on the Kapdaganda shawl symbolize?',
      options: ['The sacred Niyamgiri hills', 'Ocean waves', 'Arrowheads', 'Temple gates'],
      correctIndex: 0,
      explanation: 'The triangles represent the sacred hills of Niyamgiri where the tribe reveres their presiding deity Niyamraja.'
    }
  },

  // 8. Traditional Musical Instruments
  {
    id: 'art-09',
    name: 'Mardala (Classical Odissi Percussion Drum)',
    odiaName: 'ଓଡ଼ିଶୀ ମାର୍ଦ୍ଦଳ',
    category: 'Traditional Musical Instruments',
    period: 'Ancient Kalinga Tradition (Mentioned in Natyashastra)',
    district: 'Puri',
    region: 'Classical Temple Ensembles',
    materials: ['Hollow Jackfruit Wood (Panasa)', 'Layered Goat Leather', 'Iron paste (Karani)'],
    historicalBackground: 'The primary rhythm instrument of classical Odissi music and dance, depicted in 9th-century temple sculptures of Parasurameswara and Konark.',
    culturalSignificance: 'Considered divine, with the right drumhead tuned to high resonance and the left tuned to deep bass to produce microtonal rhythmic syllables.',
    description: 'Two-headed barrel drum played with open palms and fingers, creating the iconic rhythmic Bols of Odissi dance.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'The sacred drum of Odissi dance made from jackfruit wood and goat leather, producing deep rich rhythmic beats!',
    quizQuestion: {
      question: 'Which instrument provides the essential percussion rhythm for classical Odissi dance and music?',
      options: ['Mardala', 'Tabla', 'Dholak', 'Bongos'],
      correctIndex: 0,
      explanation: 'The Mardala is the official classical percussion instrument of Odisha with its own unique rhythmic notation system.'
    }
  },

  // 9. Handloom and Textiles
  {
    id: 'art-10',
    name: 'Berhampuri Patta Silk Saree (Kumbha Phoda)',
    odiaName: 'ବ୍ରହ୍ମପୁରୀ ପାଟ ଶାଢ଼ୀ',
    category: 'Handloom and Textiles',
    period: '200-Year-Old Silk Weaving Dynasty (GI Tagged)',
    district: 'Ganjam',
    region: 'Berhampur Silk Weavers Quarter',
    materials: ['Pure Mulberry Silk Yarn', 'Zari Gold Threads', 'Natural Vegetable Dyes'],
    historicalBackground: 'Introduced under the patronage of the Mohuri royal dynasty in the 18th century, Berhampur became the Silk City of South India.',
    culturalSignificance: 'Worn by priests during Jagannath temple sanctum rites and gifted during weddings as sacred ritual attire (Joda and Saree).',
    description: 'Famous for the Kumbha Phoda (triangular temple pinnacles) interlocking warp-and-weft borders that cannot be replicated on machine power looms.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'A glorious heavy silk saree with pointed temple borders, handwoven on pit-looms in the Silk City of Berhampur!',
    quizQuestion: {
      question: 'What is the characteristic temple border pattern woven into authentic Berhampuri Patta silk sarees called?',
      options: ['Kumbha (Temple Spire)', 'Paisley', 'Fish Scale', 'Checkerboard'],
      correctIndex: 0,
      explanation: 'The Kumbha (phoda) technique creates sharp serrated temple spires along the borders of Berhampur silks.'
    }
  },

  // 10. Historical Coins and Objects
  {
    id: 'art-11',
    name: 'Ancient Ganga Dynasty Gold Fanams and Punch-Marked Coins',
    odiaName: 'ପ୍ରାଚୀନ ଗଙ୍ଗ ବଂଶ ସ୍ୱର୍ଣ୍ଣ ମୁଦ୍ରା',
    category: 'Historical Coins and Objects',
    period: '3rd Century BCE to 12th Century CE',
    district: 'Kalahandi',
    region: 'Asurgarh Archaeological Excavations',
    materials: ['Silver', 'Gold Electrum', 'Copper'],
    historicalBackground: 'Excavated from the ancient fortified settlement of Asurgarh in Kalahandi and Sisupalgarh near Bhubaneswar.',
    culturalSignificance: 'Proves the prosperous maritime trade of ancient Kalinga across the Indian Ocean to Ceylon, Rome, and Southeast Asia.',
    description: 'Silver punch-marked coins bearing symbols of the sun, tree, bull, and river, alongside minuscule gold fanams inscribed with royal bull emblems.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'],
    has3D: false,
    studentSummary: 'Ancient silver and gold coins minted more than 2,000 years ago by the rulers of Kalinga, found in fort ruins!',
    quizQuestion: {
      question: 'Which ancient fortified archaeological site in Kalahandi district yielded punch-marked silver coins and beads?',
      options: ['Asurgarh', 'Barabati', 'Hukitola', 'Chhatia'],
      correctIndex: 0,
      explanation: 'Asurgarh is an urban settlement dating back to the Mauryan era with rich numismatic findings.'
    }
  },

  // 11. Buddhist Heritage
  {
    id: 'art-12',
    name: 'Ratnagiri Carved Green Chlorite Buddha in Bhumisparsha Mudra',
    odiaName: 'ରତ୍ନଗିରି ଭୂମିସ୍ପର୍ଶ ବୁଦ୍ଧ ପ୍ରତିମା',
    category: 'Buddhist Heritage',
    period: '8th - 10th Century CE (Bhaumakara Dynasty)',
    district: 'Jajpur',
    region: 'Ratnagiri Mahavihara (Diamond Triangle)',
    materials: ['Green Chlorite Schist Stone'],
    historicalBackground: 'Discovered during ASI excavations of Monastery No. 1 at Ratnagiri, which was once a major rival university to Nalanda.',
    culturalSignificance: 'Depicts Lord Buddha touching the earth to witness his enlightenment, showcasing the zenith of Mahayana and Vajrayana art in Odisha.',
    description: 'Colossal stone head with tranquil meditative countenance, curly ushnisha topknot, and flanked by bodhisattvas Padmapani and Vajrapani.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'],
    has3D: true,
    sketchfabId: 'a3d1c9ef007641d490538f5f4b0e9db6',
    studentSummary: 'A gigantic peaceful stone sculpture of Lord Buddha discovered inside the ancient Buddhist monastery ruins of Ratnagiri in Jajpur.',
    quizQuestion: {
      question: 'Which three Buddhist monastic sites form the famous "Diamond Triangle" of Odisha?',
      options: ['Ratnagiri, Lalitgiri, and Udayagiri', 'Dhauli, Konark, and Puri', 'Kapilash, Joranda, and Saptasajya', 'Harishankar, Nrusinghanath, and Samaleswari'],
      correctIndex: 0,
      explanation: 'Ratnagiri, Lalitgiri, and Udayagiri in Jajpur and Cuttack districts constitute Odisha\'s Diamond Triangle of Buddhist archaeology.'
    }
  },

  // 12. Traditional Handicrafts
  {
    id: 'art-13',
    name: 'Sadeibareni Dhokra Tribal Elephant (Hathi)',
    odiaName: 'ସଦେଇବରେଣୀ ଢୋକ୍ରା ହାତୀ',
    category: 'Traditional Handicrafts',
    period: '4,000-Year-Old Lost-Wax Bronze Tradition',
    district: 'Dhenkanal',
    region: 'Sadeibareni Artisan Village',
    materials: ['Beeswax', 'Clay Core', 'Scrap Brass / Bronze Alloy', 'Rice Husk'],
    historicalBackground: 'Practiced by the indigenous nomadic Situla community of Dhenkanal using the same metallurgical lost-wax method as the Mohenjo-daro Dancing Girl.',
    culturalSignificance: 'Depicts royal ceremonial elephants carrying deities, folk musicians, and auspicious kalash urns, believed to bring good fortune.',
    description: 'Distinctive rustic wire-mesh appearance created by hand-coiling beeswax threads over a clay model before molten brass is poured in.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'],
    has3D: true,
    sketchfabId: '768ce950df6e44b89895efc582fa08d2',
    studentSummary: 'Bronze figures made using beeswax coils that melt away when molten metal is poured into the clay mold, a technique 4,000 years old!',
    quizQuestion: {
      question: 'Which lost-wax casting craft is famously practiced in the artisan village of Sadeibareni in Dhenkanal?',
      options: ['Dhokra Craft', 'Pattachitra', 'Silver Filigree', 'Applique'],
      correctIndex: 0,
      explanation: 'Sadeibareni is internationally recognized for its authentic non-ferrous Dhokra lost-wax metal castings.'
    }
  }
];
