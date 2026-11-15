// Comprehensive Database for Odisha Villages (Including in-depth Ganjam & Berhampur)

export interface Village {
  id: string;
  name: string;
  odiaName: string;
  district: string;
  block: string;
  lat: number;
  lng: number;
  introduction: string;
  speciality: string;
  famousArt: string;
  localHandloom: string;
  localHandicrafts: string;
  traditionalFood: string[];
  folkDances: string[];
  localLanguage: string;
  festivals: string[];
  nearbyAttractions: string[];
  artisans: string[];
  products: string[];
  visitingInfo: string;
  verifiedMedia: string[];
  verifiedStatus: 'Verified' | 'Pending Verification';
  category: 'Handloom' | 'Handicrafts' | 'Tribal culture' | 'Traditional food' | 'Folk music' | 'Historical villages' | 'Eco-tourism';
}

export const allOdishaVillages: Village[] = [
  // Special Focus: Berhampur & Ganjam District Villages
  {
    id: 'vil-berhampur',
    name: 'Berhampur City & Silk Weavers Quarter',
    odiaName: 'ବ୍ରହ୍ମପୁର (ରେଶମ ନଗରୀ)',
    district: 'Ganjam',
    block: 'Berhampur Municipal Corporation / Sadar',
    lat: 19.3150,
    lng: 84.7941,
    introduction: 'Hailed as the "Silk City" of Odisha, Berhampur has been a thriving textile capital for over two centuries, famed for its heavy, lustrous Berhampuri Patta silk sarees and Joda sets carrying the authentic Kumbha (temple spire) borders.',
    speciality: 'GI-Tagged Berhampuri Patta Silk Sarees with Phoda Kumbha temple borders, Ganjam Pickles (Achar), and Papad.',
    famousArt: 'Traditional Silk Weaving and Prahallada Nataka folk performance masks.',
    localHandloom: 'Berhampuri Patta Silk Sarees, Pure Mulberry Tussar Silk Joda, Bridal Temple Sarees.',
    localHandicrafts: 'Coir mats, brass pooja utensils, and hand-molded clay figurines.',
    traditionalFood: ['Ganjam Ambula & Mango Achar', 'Papad & Badi Chura', 'Chenna Jhili', 'Berhampur Upma & Puri', 'Gopalpur Crab Masala'],
    folkDances: ['Ranapa Dance (Stilt Dance)', 'Prahallada Nataka', 'Ghantapatua'],
    localLanguage: 'Southern Odia (Ganjami Dialect)',
    festivals: ['Maa Budhi Thakurani Biennial Yatra', 'Chaitra Mela', 'Ratha Yatra', 'Sital Sasthi'],
    nearbyAttractions: ['Gopalpur-on-Sea Beach (15 km)', 'Maa Tara Tarini Temple (32 km)', 'Taptapani Hot Springs (50 km)', 'Potagarh Fort (28 km)'],
    artisans: ['K. Mohan Rao (Master Silk Weaver)', 'Sunita Patra (Zari Weaving Expert)', 'Rama Chandra Das (Textile Historian)'],
    products: ['Berhampuri Pure Silk Saree', 'Berhampuri Silk Joda', 'Handmade Ganjam Mango Achar Set', 'Spiced Moong Badi'],
    visitingInfo: 'Accessible via Berhampur Railway Station (BAM). Best visited during winter (October to March) or during the vibrant Thakurani Yatra festival.',
    verifiedMedia: [
      '/villages/berhampur.jpg',
      '/villages/berhampur-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-belaguntha',
    name: 'Belaguntha',
    odiaName: 'ବେଲଗୁଣ୍ଠା',
    district: 'Ganjam',
    block: 'Belaguntha / Bhanjanagar',
    lat: 19.8872,
    lng: 84.6293,
    introduction: 'A historic craft village renowned across India for the ingenious "Pitala Machha" (Brass Flexible Jumping Fish), a masterwork of interlocking brass scales that wiggle like a living fish when held.',
    speciality: 'Brass Flexible Jumping Fish (Pitala Machha), Bell Metal Bells, and Traditional Weighing Scales.',
    famousArt: 'Metamorphic flexible brass sheet articulation without welding.',
    localHandloom: 'Cotton gamuchhas and utility towels.',
    localHandicrafts: 'Pitala Machha (Brass Jumping Fish), Brass snakes, Decorative oil lamps, Bell metal thalis.',
    traditionalFood: ['Belaguntha Kheeri', 'Bhanjanagar Mutton Curry', 'Dalma', 'Chakuli Pitha'],
    folkDances: ['Danda Nata', 'Animal Mask Dance (Bagha Nacha of Ganjam)'],
    localLanguage: 'Southern Odia (Ganjami)',
    festivals: ['Danda Yatra', 'Sivaratri', 'Dussehra'],
    nearbyAttractions: ['Bhanjanagar Reservoir (12 km)', 'Kulada Bagheswari Temple (20 km)', 'Taratarini (60 km)'],
    artisans: ['Kailash Maharana (National Awardee Brass Sculptor)', 'Tukuna Maharana (Sheet metal master)'],
    products: ['Belaguntha Brass Flexible Jumping Fish', 'Carved Brass Diya Set', 'Auspicious Bell-metal Bowl'],
    visitingInfo: 'Located 80 km northwest of Berhampur. Regular buses operate from Berhampur and Aska.',
    verifiedMedia: [
      '/villages/belaguntha.jpg',
      '/villages/belaguntha-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  },
  {
    id: 'vil-nuagaon-ganjam',
    name: 'Nuagaon (Ganjam Silk Weaving Village)',
    odiaName: 'ନୂଆଗାଁ (ରେଶମ ବୁଣାକାର ଗ୍ରାମ)',
    district: 'Ganjam',
    block: 'Sanakhemundi',
    lat: 19.4210,
    lng: 84.5840,
    introduction: 'A dedicated weaving village in the Sanakhemundi valley where generations of weaver families operate traditional pit looms to produce pure silk thread for Berhampur silk sarees.',
    speciality: 'Reeling, dyeing, and pit-loom weaving of authentic mulberry silk for Berhampuri Patta.',
    famousArt: 'Double-warp interlocking technique and Zari boundary weaving.',
    localHandloom: 'Pure Silk Sarees, Cotton Dhotis, Angavastrams.',
    localHandicrafts: 'Handloom reed combs and wooden shuttle craft.',
    traditionalFood: ['Sanakhemundi Pakhala', 'Roasted Badi Chura', 'Saag Bhaja', 'Arisa Pitha'],
    folkDances: ['Ranapa Dance', 'Ghantapatua'],
    localLanguage: 'Southern Odia',
    festivals: ['Nuakhai', 'Danda Yatra', 'Ratha Yatra'],
    nearbyAttractions: ['Taptapani Hot Springs (22 km)', 'Chandragiri Tibetan Camp (45 km)', 'Berhampur (35 km)'],
    artisans: ['Sanyasi Patra (Master Pit-Loom Weaver)', 'Bina Patra (Natural Dye Specialist)'],
    products: ['Nuagaon Handwoven Silk Dupatta', 'Pure Zari Temple Scarf'],
    visitingInfo: 'Situated 35 km from Berhampur on the route to Taptapani. Visitors can tour working household looms.',
    verifiedMedia: [
      '/villages/nuagaon.jpg',
      '/villages/nuagaon-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-taratarini-raipur',
    name: 'Tara Tarini Foothill Village (Raipur / Purushottampur)',
    odiaName: 'ତାରା ତାରିଣୀ ପୀଠ ଗ୍ରାମ',
    district: 'Ganjam',
    block: 'Purushottampur',
    lat: 19.4908,
    lng: 84.8967,
    introduction: 'Nestled along the holy Rushikulya river below the Purnagiri hill, this spiritual village is home to the traditional Sevayats, Ranapa stilt dancers, and sacred brass artisans of Maa Tara Tarini.',
    speciality: 'Sacred Temple Prasadam preparation, Ranapa Stilt Dance, and sacred river pilgrimage services.',
    famousArt: 'Ranapa (traditional wooden stilt acrobatics) and temple flag embroidery.',
    localHandloom: 'Red and Yellow Holy Chadars for the Goddess.',
    localHandicrafts: 'Carved red sandstone miniature deities and brass trishulas.',
    traditionalFood: ['Tara Tarini Khechudi Mahaprasad', 'Dalma', 'Sweet Khaja', 'Rushikulya Fresh Fish'],
    folkDances: ['Ranapa Stilt Dance', 'Danda Nata', 'Ghanta Badya'],
    localLanguage: 'Ganjami Odia',
    festivals: ['Chaitra Yatra (Tuesdays of Chaitra month)', 'Diwali', 'Sankranti'],
    nearbyAttractions: ['Maa Tara Tarini Hilltop Temple (Top of the 999 stairs or ropeway)', 'Rushikulya River Ghats', 'Jaugarh Ashokan Rock Edict (8 km)'],
    artisans: ['Guru Narayan Gouda (Ranapa Stilt Dance Legend)', 'Dharani Sevayat (Prasad Master)'],
    products: ['Maa Tara Tarini Sacred Red Chadar', 'Brass Puja Thali with Rushikulya Water Vessel'],
    visitingInfo: '32 km from Berhampur. Ropeway and motor road available to reach the hilltop shrine.',
    verifiedMedia: [
      '/villages/taratarini.jpg',
      '/villages/taratarini-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Historical villages'
  },
  {
    id: 'vil-rambha',
    name: 'Rambha (Chilika South Shore)',
    odiaName: 'ରମ୍ଭା (ଚିଲିକା କୂଳ)',
    district: 'Ganjam',
    block: 'Khallikote',
    lat: 19.5217,
    lng: 85.1050,
    introduction: 'A serene lagoon hamlet on the southern tip of Chilika Lake, famed for its emerald islands (Breakfast Island, Honeymoon Island, Beacon Island) and traditional fisherfolk culture.',
    speciality: 'Lagoon eco-tourism, traditional country-boat crafting, and Chilika lake crabs and prawns.',
    famousArt: 'Net weaving and wooden country-boat (Naa) construction.',
    localHandloom: 'Coarse cotton fisherman lungis and gamuchhas.',
    localHandicrafts: 'Seashell ornaments, pearl oysters, and dry fish preservation.',
    traditionalFood: ['Chilika Crab Curry', 'Fresh Tiger Prawn Masala', 'Macha Besara', 'Pakhala Bhata'],
    folkDances: ['Keuta Nacha (Fisherfolk Song & Dance)', 'Ghoda Nacha'],
    localLanguage: 'Southern Odia',
    festivals: ['Makar Sankranti on Chilika Lake', 'Kartik Purnima Boita Bandana', 'Rambha Boat Carnival'],
    nearbyAttractions: ['Breakfast Island & Victorian Watchtower', 'Bird Island', 'Beacon Island', 'Gopalpur Beach (50 km)'],
    artisans: ['Bhabani Behera (Country Boat Craftsman)', 'Subashini Behera (Shell Jewelry Maker)'],
    products: ['Chilika Lagoon Seashell Windchime', 'Smoked Dried Fish Jar'],
    visitingInfo: 'Located on NH-16, 45 km from Berhampur. OTDC Panthanivas provides excellent boating facilities.',
    verifiedMedia: [
      '/villages/rambha.jpg',
      '/villages/rambha-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Eco-tourism'
  },
  {
    id: 'vil-bhanjanagar',
    name: 'Bhanjanagar Reservoir Hamlet',
    odiaName: 'ଭଞ୍ଜନଗର',
    district: 'Ganjam',
    block: 'Bhanjanagar',
    lat: 19.9300,
    lng: 84.5800,
    introduction: 'Named after the legendary Kabi Samrat Upendra Bhanja, this verdant town is flanked by a sprawling reservoir, green hillocks, and the lively Bagha Nacha (Tiger Mask Dance) tradition.',
    speciality: 'Wooden folk toys, Kabi Samrat literary tradition, and animal mask dance.',
    famousArt: 'Animal Mask Crafting (Tiger, Bull, and Demon paper-mache masks).',
    localHandloom: 'Cotton sarees and traditional dhoti sets.',
    localHandicrafts: 'Wooden folk toys, paper-mache animal masks, terracotta bird whistles.',
    traditionalFood: ['Bhanjanagar Mutton Kassa', 'Chhena Poda', 'Poda Pitha', 'Lau Khatta'],
    folkDances: ['Bagha Nacha (Tiger Dance of Ganjam)', 'Danda Nata', 'Daskathia'],
    localLanguage: 'Ganjami Odia',
    festivals: ['Upendra Bhanja Jayanti', 'Danda Yatra', 'Sivaratri'],
    nearbyAttractions: ['Bhanjanagar Dam & Water Reservoir', 'Biju Patnaik Children\'s Park', 'Belaguntha (12 km)', 'Kulada Temple (8 km)'],
    artisans: ['Jagabandhu Sahu (Animal Mask Artisan)', 'Prakash Bhanja (Wood Carver)'],
    products: ['Hand-painted Folk Tiger Mask (Bagha Mukha)', 'Miniature Wooden Cart'],
    visitingInfo: 'Situated 80 km northwest of Berhampur. Scenic route through green sal forest corridors.',
    verifiedMedia: [
      '/villages/bhanjanagar.jpg',
      '/villages/bhanjanagar-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  },

  // Premier Heritage Villages Across Other Districts
  {
    id: 'vil-raghurajpur',
    name: 'Raghurajpur Heritage Crafts Village',
    odiaName: 'ରଘୁରାଜପୁର ହେରିଟେଜ୍ ଗ୍ରାମ',
    district: 'Puri',
    block: 'Brahmagiri',
    lat: 19.8821,
    lng: 85.8242,
    introduction: 'India\'s premier heritage crafts village where every home is an active art studio. Birthplace of Odissi maestro Kelucharan Mohapatra, renowned for Pattachitra, palm-leaf engraving, and Gotipua dance.',
    speciality: 'Pattachitra paintings, Talapatra Khuda (Palm leaf engraving), Tussar silk paintings, and Gotipua dance gurukuls.',
    famousArt: 'Pattachitra Scroll Painting and Palm Leaf Engraving.',
    localHandloom: 'Hand-painted Tussar silk sarees and scarves.',
    localHandicrafts: 'Pattachitra scrolls, Paper-mache masks, Cow-dung toys, Carved wooden panels.',
    traditionalFood: ['Puri Khaja', 'Dalma', 'Chhena Poda', 'Pakhala Bhata with Saga Bhaja'],
    folkDances: ['Gotipua Dance (Acrobatic precursor to classical Odissi)'],
    localLanguage: 'Coastal Odia',
    festivals: ['Basant Utsav', 'Ratha Yatra', 'Konark Dance Festival', 'Snana Purnima'],
    nearbyAttractions: ['Puri Jagannath Temple (14 km)', 'Puri Beach (15 km)', 'Pipili (26 km)', 'Konark Sun Temple (38 km)'],
    artisans: ['Akshaya Kumar Barik (National Awardee)', 'Pradip Mohapatra (Master Pattachitra Painter)', 'Sushant Maharana (Gotipua Guru)'],
    products: ['Tree of Life Pattachitra Scroll', 'Gita Govinda Palm Leaf Bookmark Set', 'Traditional Paper-Mache Ganesha Mask'],
    visitingInfo: '14 km from Puri town on the Puri-Bhubaneswar highway. Open year-round; tourists can interact with painters in open verandahs.',
    verifiedMedia: [
      '/villages/raghurajpur.jpg',
      '/villages/raghurajpur-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  },
  {
    id: 'vil-pipili',
    name: 'Pipili Applique Craft Town',
    odiaName: 'ପିପିଲି ଚାନ୍ଦୁଆ ଗ୍ରାମ',
    district: 'Puri',
    block: 'Pipili',
    lat: 20.1167,
    lng: 85.8333,
    introduction: 'A vibrant town of master tailors who weave magical canopies, banners, and umbrellas for Lord Jagannath\'s annual Ratha Yatra chariots using centuries-old applique techniques.',
    speciality: 'Chandua Applique Craft (Fabric stitching with mirrors, motifs, and embroidery).',
    famousArt: 'Applique and Patchwork Textile Art (GI Tagged).',
    localHandloom: 'Embroidered cotton wall hangings and parasols.',
    localHandicrafts: 'Chandua Wall Hangings, Garden Umbrellas, Embroidered Lanterns (Kandil), Bags.',
    traditionalFood: ['Pipili Chenna Gaja', 'Rasabali', 'Gupchup', 'Mudhi Mansa'],
    folkDances: ['Ghoda Nacha', 'Pala'],
    localLanguage: 'Coastal Odia',
    festivals: ['Ratha Yatra (Supplying chariot canopies)', 'Chandan Yatra', 'Dussehra'],
    nearbyAttractions: ['Dhauli Shanti Stupa (18 km)', 'Bhubaneswar Temples (24 km)', 'Puri Beach (36 km)'],
    artisans: ['Sayeed Ali (Master Applique Tailor)', 'Manoranjan Mohapatra (Decorative Canopy Maker)'],
    products: ['Pipili Peacock Applique Wall Hanging', 'Handmade Garden Umbrella with Mirror Work', 'Embroidered Silk Tote Bag'],
    visitingInfo: 'Situated on NH-316 between Bhubaneswar and Puri. Both sides of the main street are lined with colorful applique shops.',
    verifiedMedia: [
      '/villages/pipili.jpg',
      '/villages/pipili-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  },
  {
    id: 'vil-nuapatna',
    name: 'Nuapatna (Weavers of Khandua Patta)',
    odiaName: 'ନୂଆପାଟଣା ଖଣ୍ଡୁଆ ପାଟ',
    district: 'Cuttack',
    block: 'Tigiria / Badamba',
    lat: 20.4850,
    lng: 85.4560,
    introduction: 'The sacred handloom village of Odisha where thousands of weavers produce Khandua Patta silk, inscribed with verses from Jayadeva\'s Geeta Govinda, worn daily by Lord Jagannath.',
    speciality: 'Khandua Patta Silk & Cotton Tie-and-Dye (Ikat) Sarees inscribed with sacred calligraphy.',
    famousArt: 'Bandha (Odisha Ikat) warp and weft tie-dye technique.',
    localHandloom: 'Khandua Patta Sarees, Tussar Silk Dupattas, Geeta Govinda inscribed Stoles.',
    localHandicrafts: 'Wooden weaving looms, bamboo shuttles, natural dye extractors.',
    traditionalFood: ['Nuapatna Chenna Poda', 'Dalma with Aromatic Ghee', 'Macha Thukthuka'],
    folkDances: ['Daskathia', 'Pala'],
    localLanguage: 'Central Odia',
    festivals: ['Nuakhai', 'Ratha Yatra', 'Kartik Purnima'],
    nearbyAttractions: ['Bhattarika Temple, Badamba (18 km)', 'Maniabandha Buddhist Village (4 km)', 'Ansupa Lake (28 km)'],
    artisans: ['Ramesh Meher (National Awardee Ikat Weaver)', 'Basanti Meher (Tie-Dye Master)'],
    products: ['Khandua Patta Geeta Govinda Saree', 'Tussar Silk Ikat Dupatta', 'Pure Cotton Bandha Stole'],
    visitingInfo: '70 km from Cuttack city. Household looms produce continuous clatter as master weavers weave silk fabric.',
    verifiedMedia: [
      '/villages/nuapatna.jpg',
      '/villages/nuapatna-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-barpali',
    name: 'Barpali & Bargarh Weaving Hub',
    odiaName: 'ବାରପାଲି ବୁଣାକାର ନଗରୀ',
    district: 'Bargarh',
    block: 'Barpali',
    lat: 21.1833,
    lng: 83.5833,
    introduction: 'The heartland of Sambalpuri Bandha handloom, immortalized by legendary Padma Shri weaver Late Kuntha Meher, producing world-famous curvilinear Ikat motifs.',
    speciality: 'Authentic Sambalpuri Ikat Silk and Cotton Sarees with Conch, Wheel, and Floral motifs.',
    famousArt: 'Complex Double-Ikat Bandha weaving.',
    localHandloom: 'Sambalpuri Cotton & Silk Sarees, Dhotis, Kurtas, Bedcovers.',
    localHandicrafts: 'Clay pots, bamboo reed bobbins.',
    traditionalFood: ['Chaul Bara', 'Ambila', 'Lita with Dal', 'Sarsatia'],
    folkDances: ['Dalkhai', 'Rasarkeli', 'Dhanu Yatra Play'],
    localLanguage: 'Sambalpuri / Kosali',
    festivals: ['Nuakhai', 'Bargarh Dhanu Yatra', 'Sital Sasthi'],
    nearbyAttractions: ['Nrusinghanath Temple (60 km)', 'Debrigarh Wildlife Sanctuary (50 km)', 'Hirakud Dam (40 km)'],
    artisans: ['Bipin Meher (State Awardee Weaver)', 'Subhashree Meher (Ikat Designer)'],
    products: ['Sambalpuri Ikat Cotton Saree', 'Pure Tussar Sambalpuri Silk Saree', 'Ikat Table Runner Set'],
    visitingInfo: '20 km from Bargarh district headquarters. Direct train connections to Barpali station.',
    verifiedMedia: [
      '/villages/barpali.jpg',
      '/villages/barpali-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-kotpad',
    name: 'Kotpad Tribal Handloom Village',
    odiaName: 'କୋଟପାଡ଼ ଆଲ୍ ରଙ୍ଗ ଗ୍ରାମ',
    district: 'Koraput',
    block: 'Kotpad',
    lat: 19.1417,
    lng: 82.3167,
    introduction: 'A world-famous indigenous textile village where the Mirgan community weaves coarse cotton fabric dyed exclusively with organic natural Aal (madder root) dye, giving rich deep maroon and earth hues.',
    speciality: 'GI-Tagged Kotpad Vegetable-Dyed Handloom Shawls, Sarees, and Tribal Towels.',
    famousArt: 'Aal tree bark natural ferment dye extraction and tribal fish/axe/crab motif weaving.',
    localHandloom: 'Kotpad Shawls, Kotpad Sarees, Tuval (Tribal Towels).',
    localHandicrafts: 'Wooden spinning wheels (Charkha), Castor-oil dye vats.',
    traditionalFood: ['Mandia Pej (Finger millet soup)', 'Bamboo shoot curry', 'Forest root fry'],
    folkDances: ['Dhemsa Dance', 'Mirgan Tribal Songs'],
    localLanguage: 'Desia Odia / Bhatri',
    festivals: ['Parab Festival', 'Chaitra Parba', 'Bali Yatra of Koraput'],
    nearbyAttractions: ['Gupteswar Cave (65 km)', 'Duduma Waterfall (85 km)', 'Jeypore Palace (45 km)'],
    artisans: ['Gobardhan Panika (Padma Shri Awardee Weaver)', 'Gouri Panika (Master Natural Dyer)'],
    products: ['Kotpad Aal-Dyed Organic Shawl', 'Kotpad Tribal Border Cotton Saree', 'Handspun Cotton Stole'],
    visitingInfo: '45 km from Jeypore town. Best place to witness the centuries-old natural dyeing process.',
    verifiedMedia: [
      '/villages/kotpad.jpg',
      '/villages/kotpad-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-sadeibareni',
    name: 'Sadeibareni (Ancient Dhokra Craft Village)',
    odiaName: 'ସଦେଇବରେଣୀ ଢୋକ୍ରା ଗ୍ରାମ',
    district: 'Dhenkanal',
    block: 'Dhenkanal Sadar',
    lat: 20.6667,
    lng: 85.5900,
    introduction: 'A nationally celebrated craft hamlet inhabited by the indigenous Situla artisans who practice 4,000-year-old lost-wax bell metal casting using pure beeswax and clay from anthills.',
    speciality: 'Dhokra non-ferrous metal casting (elephants, tribal deities, candleholders, peacocks).',
    famousArt: 'Beeswax thread coiling and lost-wax bronze casting.',
    localHandloom: 'Coarse cotton tribal stoles.',
    localHandicrafts: 'Dhokra Elephants, Horse Figurines, Tribal Dancers, Measuring Bowls.',
    traditionalFood: ['Dhenkanal Magaja Laddoo', 'Chhena Poda', 'Dalma', 'Chakuli'],
    folkDances: ['Danda Nata', 'Tribal Bell Dance'],
    localLanguage: 'Central Odia',
    festivals: ['Joranda Magha Mela', 'Maha Shivaratri', 'Dussehra'],
    nearbyAttractions: ['Kapilash Temple (22 km)', 'Joranda Mahima Gadi (26 km)', 'Saptasajya (18 km)'],
    artisans: ['Pramod Pradhan (State Awardee Dhokra Sculptor)', 'Kanchan Pradhan (Master Caster)'],
    products: ['Hand-cast Dhokra Royal Elephant', 'Dhokra Tribal Musician Pair', 'Antique Dhokra Oil Lamp'],
    visitingInfo: 'Located just 7 km from Dhenkanal town. Visitors can watch casting furnaces operating in open courtyards.',
    verifiedMedia: [
      '/villages/sadeibareni.jpg',
      '/villages/sadeibareni-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  },
  {
    id: 'vil-chandragiri',
    name: 'Chandragiri (Little Tibet of Odisha)',
    odiaName: 'ଚନ୍ଦ୍ରଗିରି ଜିରାଙ୍ଗ',
    district: 'Gajapati',
    block: 'Mohana',
    lat: 19.3486,
    lng: 84.2678,
    introduction: 'A breathtaking high-valley settlement of Tibetan refugees settled since 1963, home to the magnificent Padmasambhava Mahavihara Buddhist Monastery, apple-scented breezes, and hand-knotted woolen carpets.',
    speciality: 'Hand-knotted Tibetan Woolen Carpets, Thangka Buddhist Scroll Paintings, and Monastic Chants.',
    famousArt: 'Tibetan Handloom Carpet Weaving and Thangka Art.',
    localHandloom: 'Handwoven pure wool carpets, Tibetan shawls, Yak wool jackets.',
    localHandicrafts: 'Prayer wheels, incense sticks, brass singing bowls, hand-carved meditation tables.',
    traditionalFood: ['Tibetan Momos & Thukpa', 'Butter Salt Tea', 'Tingmo (Steamed Bread)', 'Gajapati Chenna Murki'],
    folkDances: ['Tibetan Cham Masked Dance', 'Snow Lion Dance'],
    localLanguage: 'Tibetan, Odia, English',
    festivals: ['Losar (Tibetan New Year)', 'Buddha Purnima', 'Dalai Lama Birthday Celebrations'],
    nearbyAttractions: ['Padmasambhava Mahavihara Monastery', 'Khasada Waterfall (12 km)', 'Taptapani Hot Springs (35 km)', 'Mahendragiri (75 km)'],
    artisans: ['Tenzin Norbu (Master Carpet Weaver)', 'Dolma Tsering (Thangka Artist)'],
    products: ['Hand-knotted Tibetan Dragon Woolen Carpet', 'Authentic Singing Meditation Bowl', 'Handmade Herbal Incense'],
    visitingInfo: 'Located 80 km from Berhampur via Taptapani Ghat road. Peaceful, cool climate all year round.',
    verifiedMedia: [
      '/villages/chandragiri.jpg',
      '/villages/chandragiri-thangka.jpg',
      '/villages/chandragiri-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handloom'
  },
  {
    id: 'vil-kantilo',
    name: 'Kantilo (Brass & Bell Metal Heritage)',
    odiaName: 'କଣ୍ଟିଲୋ ବେଲ୍ ମେଟାଲ୍',
    district: 'Nayagarh',
    block: 'Khandapada',
    lat: 20.3620,
    lng: 85.1870,
    introduction: 'Perched on the banks of the sacred Mahanadi river, this ancient temple town is famous for Lord Nilamadhaba (the origin deity of Lord Jagannath) and a flourishing community of Kansari bell-metal utensil artisans.',
    speciality: 'Kansa & Pitala (Bell Metal & Brass) traditional utensils, Puja bells, and Chhena Gaja sweets.',
    famousArt: 'Hammered bell metal alloy casting and polishing.',
    localHandloom: 'Traditional handloom cotton dhotis.',
    localHandicrafts: 'Kansa Thali (Bell metal dinnerware), Puja Bells, Dosa Kadhais, Brass water pots.',
    traditionalFood: ['Kantilo Chhena Gaja (Famous sweet)', 'Nilamadhaba Kanti Bhoga', 'Mahanadi Macha Curry'],
    folkDances: ['Danda Nata', 'Pala'],
    localLanguage: 'Central Odia',
    festivals: ['Magha Saptami Mela', 'Ratha Yatra', 'Pana Sankranti'],
    nearbyAttractions: ['Nilamadhaba Temple on Brahmadri Hill', 'Mahanadi River Ghats', 'Sarankul Ladubaba (42 km)'],
    artisans: ['Bichitra Sahu (Bell Metal Master)', 'Narendra Maharana (Temple Sculptor)'],
    products: ['Traditional Kantilo Kansa Thali Set (Health benefits)', 'Hand-hammered Brass Puja Bell'],
    visitingInfo: 'Located 85 km from Bhubaneswar via Nayagarh road. Panoramic river views from the temple cliff.',
    verifiedMedia: [
      '/villages/kantilo.jpg',
      '/villages/kantilo-card.jpg'
    ],
    verifiedStatus: 'Verified',
    category: 'Handicrafts'
  }
];
