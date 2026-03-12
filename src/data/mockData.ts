export interface KarmaTask {
  id: string;
  title: string;
  description: string;
  location: string;
  lat: number;
  lng: number;
  reward: number;
  timeEstimate: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  progress: number;
  icon: string;
  image: string;
}

export interface Artifact {
  id: string;
  name: string;
  region: string;
  culture: string;
  image: string;
  story: string;
  significance: string;
  period: string;
}

export interface CulturalMedia {
  id: string;
  title: string;
  type: "Folk Song" | "Ritual Video" | "Dance" | "Oral History" | "Craft Process";
  region: string;
  tribe: string;
  contributor: string;
  thumbnail: string;
  tags: string[];
  likes: number;
}

export interface Transaction {
  id: string;
  type: "earned" | "spent";
  amount: number;
  description: string;
  date: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  tokens: number;
  tasks: number;
  country: string;
}

export interface CulturalPlace {
  id: string;
  name: string;
  image: string;
  lat: number;
  lng: number;
  descriptions: { en: string; hi: string; od: string };
  facts: string[];
  festivals: string[];
  architecture: string;
  timeline: { year: string; event: string }[];
}

export const mockTasks: KarmaTask[] = [
  { id: "1", title: "Beach Plastic Cleanup", description: "Help clean plastic waste from Puri Beach. Collect at least 2kg of plastic waste and document with photos.", location: "Puri Beach, Odisha", lat: 19.7983, lng: 85.8249, reward: 50, timeEstimate: "2 hours", difficulty: "Easy", category: "Environment", progress: 0, icon: "🏖️", image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=400" },
  { id: "2", title: "Document Rare Bird Species", description: "Photograph and document bird species at Chilika Lake. Record species name, habitat, and behavior.", location: "Chilika Lake, Odisha", lat: 19.7215, lng: 85.3190, reward: 75, timeEstimate: "3 hours", difficulty: "Medium", category: "Wildlife", progress: 0, icon: "🦜", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400" },
  { id: "3", title: "Teach English at Village School", description: "Spend a morning teaching basic English to children at a local village school near Konark.", location: "Konark, Odisha", lat: 19.8876, lng: 86.0945, reward: 100, timeEstimate: "4 hours", difficulty: "Medium", category: "Education", progress: 0, icon: "📚", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" },
  { id: "4", title: "Digitize Artisan Handicrafts", description: "Help local artisans photograph and catalog their handicraft products for online marketplace.", location: "Raghurajpur, Odisha", lat: 19.8569, lng: 86.0361, reward: 60, timeEstimate: "2.5 hours", difficulty: "Easy", category: "Culture", progress: 0, icon: "🎨", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400" },
  { id: "5", title: "Eco-Awareness Workshop", description: "Attend and participate in a community eco-awareness workshop on sustainable tourism practices.", location: "Bhubaneswar, Odisha", lat: 20.2961, lng: 85.8245, reward: 40, timeEstimate: "1.5 hours", difficulty: "Easy", category: "Education", progress: 0, icon: "🌱", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400" },
  { id: "6", title: "Map Heritage Trees", description: "Identify and geo-tag heritage trees in the Similipal forest area. Document species and estimated age.", location: "Similipal, Odisha", lat: 21.8286, lng: 86.3370, reward: 80, timeEstimate: "5 hours", difficulty: "Hard", category: "Environment", progress: 0, icon: "🌳", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400" },
  { id: "7", title: "Document Tribal Dance Form", description: "Record and document a traditional tribal dance performance with cultural context.", location: "Koraput, Odisha", lat: 18.8135, lng: 82.7123, reward: 90, timeEstimate: "3 hours", difficulty: "Medium", category: "Culture", progress: 0, icon: "💃", image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400" },
  { id: "8", title: "River Water Quality Testing", description: "Collect water samples and document water quality parameters at key points along the Mahanadi river.", location: "Cuttack, Odisha", lat: 20.4625, lng: 85.8828, reward: 70, timeEstimate: "3 hours", difficulty: "Hard", category: "Environment", progress: 0, icon: "🌊", image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400" },
];

export const mockArtifacts: Artifact[] = [
  { id: "1", name: "Dhokra Tribal Necklace", region: "Baripada, Odisha", culture: "Santhal Tribe", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400", story: "Handcrafted using the lost-wax casting technique passed down through generations of Santhal artisans.", significance: "Represents the spiritual connection between nature and the tribal community.", period: "Traditional (ongoing)" },
  { id: "2", name: "Konark Wheel Replica", region: "Konark, Odisha", culture: "Odia Heritage", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", story: "A miniature replica of the iconic chariot wheel from the 13th-century Konark Sun Temple.", significance: "Symbol of time and the cosmic journey of the Sun God Surya.", period: "13th Century CE" },
  { id: "3", name: "Pattachitra Painting", region: "Raghurajpur, Odisha", culture: "Odia Folk Art", image: "https://images.unsplash.com/photo-1578301978693-85fa9fd0c499?w=400", story: "Traditional cloth-based scroll painting depicting stories from Hindu mythology.", significance: "UNESCO-recognized intangible cultural heritage of Odisha.", period: "12th Century onwards" },
  { id: "4", name: "Tribal Bronze Figure", region: "Koraput, Odisha", culture: "Kondh Tribe", image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=400", story: "Bronze figurine depicting a tribal warrior, created using ancient metallurgy techniques.", significance: "Represents the martial traditions and spiritual beliefs of the Kondh people.", period: "Pre-colonial era" },
  { id: "5", name: "Silver Filigree Ornament", region: "Cuttack, Odisha", culture: "Odia Craftsmanship", image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=400", story: "Delicate silver filigree work known as Tarakasi, a hallmark of Cuttack's artisan tradition.", significance: "One of the finest examples of metalwork in South Asian craftsmanship.", period: "Mughal period onwards" },
  { id: "6", name: "Bamboo Musical Instrument", region: "Mayurbhanj, Odisha", culture: "Ho Tribe", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400", story: "Traditional bamboo flute used in tribal ceremonies and celebrations.", significance: "Central to the musical and spiritual practices of the Ho community.", period: "Ancient (ongoing)" },
];

export const mockCulturalMedia: CulturalMedia[] = [
  { id: "1", title: "Sambalpuri Folk Song - Rangabati", type: "Folk Song", region: "Sambalpur", tribe: "Western Odisha", contributor: "Priya Mehta", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tags: ["music", "folk", "sambalpuri"], likes: 245 },
  { id: "2", title: "Dalkhai Dance Performance", type: "Dance", region: "Balangir", tribe: "Binjhal", contributor: "Rahul Das", thumbnail: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400", tags: ["dance", "tribal", "dalkhai"], likes: 189 },
  { id: "3", title: "Chhau Dance of Mayurbhanj", type: "Dance", region: "Mayurbhanj", tribe: "Various", contributor: "Anita Patel", thumbnail: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400", tags: ["dance", "chhau", "martial"], likes: 312 },
  { id: "4", title: "Tribal Pottery Making", type: "Craft Process", region: "Koraput", tribe: "Paroja", contributor: "Mohan Sabar", thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400", tags: ["craft", "pottery", "tribal"], likes: 156 },
  { id: "5", title: "Oral History of Jagannath Cult", type: "Oral History", region: "Puri", tribe: "Odia", contributor: "Dr. Satya Narayan", thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", tags: ["history", "religion", "jagannath"], likes: 423 },
  { id: "6", title: "Santhal Harvest Ritual", type: "Ritual Video", region: "Baripada", tribe: "Santhal", contributor: "Keshab Murmu", thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400", tags: ["ritual", "harvest", "santhal"], likes: 198 },
];

export const mockTransactions: Transaction[] = [
  { id: "1", type: "earned", amount: 50, description: "Beach Plastic Cleanup completed", date: "2026-03-12" },
  { id: "2", type: "earned", amount: 75, description: "Bird Species Documentation", date: "2026-03-11" },
  { id: "3", type: "spent", amount: 30, description: "Virtual Museum Premium Access", date: "2026-03-10" },
  { id: "4", type: "earned", amount: 100, description: "English Teaching Session", date: "2026-03-09" },
  { id: "5", type: "earned", amount: 60, description: "Artisan Handicraft Digitization", date: "2026-03-08" },
  { id: "6", type: "spent", amount: 50, description: "Guided Eco Trek Booking", date: "2026-03-07" },
  { id: "7", type: "earned", amount: 40, description: "Eco Workshop Attendance", date: "2026-03-06" },
  { id: "8", type: "earned", amount: 80, description: "Heritage Tree Mapping", date: "2026-03-05" },
];

export const mockLeaderboard: LeaderboardUser[] = [
  { rank: 1, name: "Ananya Sharma", avatar: "🧑‍🌾", tokens: 1250, tasks: 28, country: "India" },
  { rank: 2, name: "Marco Silva", avatar: "🧑‍🎨", tokens: 1100, tasks: 24, country: "Brazil" },
  { rank: 3, name: "Yuki Tanaka", avatar: "🧑‍🔬", tokens: 980, tasks: 21, country: "Japan" },
  { rank: 4, name: "Emma Wilson", avatar: "🧑‍🏫", tokens: 850, tasks: 19, country: "UK" },
  { rank: 5, name: "Raj Patel", avatar: "🧑‍💻", tokens: 720, tasks: 16, country: "India" },
  { rank: 6, name: "Sophie Laurent", avatar: "🧑‍🎓", tokens: 680, tasks: 15, country: "France" },
  { rank: 7, name: "Chen Wei", avatar: "🧑‍🌾", tokens: 620, tasks: 14, country: "China" },
  { rank: 8, name: "You", avatar: "⭐", tokens: 425, tasks: 10, country: "Explorer" },
];

export const mockCulturalPlaces: CulturalPlace[] = [
  {
    id: "1", name: "Konark Sun Temple", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
    lat: 19.8876, lng: 86.0945,
    descriptions: {
      en: "Konark Sun Temple was built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty. The temple is designed as a giant chariot of the Sun God Surya, with 24 elaborately carved wheels and pulled by 7 horses. It is a UNESCO World Heritage Site and one of India's most iconic architectural marvels.",
      hi: "कोणार्क सूर्य मंदिर 13वीं शताब्दी में पूर्वी गंग राजवंश के राजा नरसिंहदेव प्रथम द्वारा बनवाया गया था। यह मंदिर सूर्य देव के रथ के रूप में बनाया गया है, जिसमें 24 विस्तृत नक्काशीदार पहिये और 7 घोड़े हैं। यह यूनेस्को विश्व धरोहर स्थल है।",
      od: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର 13ମ ଶତାବ୍ଦୀରେ ପୂର୍ବ ଗଙ୍ଗ ରାଜବଂଶର ରାଜା ନରସିଂହଦେବ ପ୍ରଥମଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ହୋଇଥିଲା। ଏହା ସୂର୍ଯ୍ୟଦେବଙ୍କ ରଥ ଆକାରରେ ଗଢ଼ାଯାଇଛି, ଯେଉଁଥିରେ 24ଟି ନକ୍କାସୀଦାର ଚକ ଓ 7ଟି ଘୋଡ଼ା ଅଛି।"
    },
    facts: ["The temple wheels function as sundials", "Originally stood 70 meters tall", "Built using over 1,200 artisans in 12 years", "The Black Pagoda was used as a navigation point by European sailors"],
    festivals: ["Konark Dance Festival (December)", "Chandrabhaga Mela"],
    architecture: "Kalinga Architecture with Dravidian influences. The temple represents the chariot of Surya with intricate erotic and mythological carvings.",
    timeline: [{ year: "1250 CE", event: "Construction began" }, { year: "1264 CE", event: "Temple completed" }, { year: "1568 CE", event: "Partially destroyed" }, { year: "1984", event: "UNESCO World Heritage Status" }]
  },
  {
    id: "2", name: "Jagannath Temple, Puri", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600",
    lat: 19.8048, lng: 85.8181,
    descriptions: {
      en: "The Jagannath Temple in Puri is one of the four sacred Char Dhams in Hindu pilgrimage. Built in the 12th century by King Anantavarman Chodaganga, it is dedicated to Lord Jagannath, a form of Vishnu. The annual Rath Yatra festival attracts millions of devotees worldwide.",
      hi: "पुरी का जगन्नाथ मंदिर हिन्दू तीर्थयात्रा के चार पवित्र चार धामों में से एक है। 12वीं शताब्दी में राजा अनंतवर्मन चोडगंग द्वारा निर्मित, यह भगवान जगन्नाथ को समर्पित है। वार्षिक रथ यात्रा उत्सव दुनिया भर से लाखों भक्तों को आकर्षित करता है।",
      od: "ପୁରୀର ଜଗନ୍ନାଥ ମନ୍ଦିର ହିନ୍ଦୁ ତୀର୍ଥଯାତ୍ରାର ଚାରି ପବିତ୍ର ଚାର ଧାମ ମଧ୍ୟରୁ ଗୋଟିଏ। 12ମ ଶତାବ୍ଦୀରେ ରାଜା ଅନନ୍ତବର୍ମନ ଚୋଡଗଙ୍ଗଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ, ଏହା ଭଗବାନ ଜଗନ୍ନାଥଙ୍କୁ ସମର୍ପିତ। ବାର୍ଷିକ ରଥଯାତ୍ରା ପର୍ବ ବିଶ୍ୱବ୍ୟାପୀ ଲକ୍ଷ ଲକ୍ଷ ଭକ୍ତଙ୍କୁ ଆକୃଷ୍ଟ କରେ।"
    },
    facts: ["The temple flag always flies opposite to the wind direction", "The Mahaprasad is cooked without modern equipment", "No shadow of the temple falls on the ground at any time of the day", "The sound of the ocean cannot be heard once inside the temple"],
    festivals: ["Rath Yatra (June/July)", "Snana Yatra", "Chandan Yatra"],
    architecture: "Kalinga style with a towering 65m spire (Deula). Features four distinct sections: Vimana, Jagamohana, Natamandira, and Bhogamandapa.",
    timeline: [{ year: "1078 CE", event: "Construction began" }, { year: "1161 CE", event: "Temple completed" }, { year: "1558 CE", event: "Afghan invasion damage" }, { year: "Present", event: "Active pilgrimage site" }]
  },
  {
    id: "3", name: "Chilika Lake", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600",
    lat: 19.7215, lng: 85.3190,
    descriptions: {
      en: "Chilika Lake is Asia's largest brackish water lagoon, spanning over 1,100 sq km. It is home to the endangered Irrawaddy dolphin and hosts over a million migratory birds annually. The lake supports diverse fishing communities and is a Ramsar Wetland of International Importance.",
      hi: "चिलिका झील एशिया की सबसे बड़ी खारे पानी की झील है, जो 1,100 वर्ग किमी में फैली है। यह विलुप्तप्राय इर्रावादी डॉल्फिन का घर है और हर साल दस लाख से अधिक प्रवासी पक्षियों की मेजबानी करती है।",
      od: "ଚିଲିକା ହ୍ରଦ ଏସିଆର ସବୁଠାରୁ ବଡ଼ ଲୁଣା ପାଣି ହ୍ରଦ, ଯାହା 1,100 ବର୍ଗ କିମି ଅଞ୍ଚଳରେ ବ୍ୟାପ୍ତ। ଏହା ବିପନ୍ନ ଇର୍ରାୱାଦୀ ଡଲଫିନର ଘର ଏବଂ ପ୍ରତିବର୍ଷ ଦଶ ଲକ୍ଷରୁ ଅଧିକ ପ୍ରବାସୀ ପକ୍ଷୀଙ୍କୁ ଆଶ୍ରୟ ଦିଏ।"
    },
    facts: ["Home to over 230 bird species", "Contains the only sea-mouth lagoon in India", "Supports 150,000+ fisherfolk", "Kalijai Temple sits on an island within the lake"],
    festivals: ["Makar Mela (January)", "Chilika Mahotsav"],
    architecture: "Natural formation with human settlements including the historic Kalijai Island temple.",
    timeline: [{ year: "Ancient", event: "Formation of the lagoon" }, { year: "1981", event: "Designated Ramsar site" }, { year: "1991", event: "Chilika Development Authority formed" }, { year: "2020", event: "Record 1.2 million migratory birds" }]
  },
  {
    id: "4", name: "Udayagiri & Khandagiri Caves", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    lat: 20.2555, lng: 85.7857,
    descriptions: {
      en: "The Udayagiri and Khandagiri Caves are ancient Jain rock-cut caves dating to the 2nd century BCE, built during the reign of King Kharavela. The caves feature intricate carvings depicting royal processions, elephants, and Jain religious scenes. The Hathi Gumpha inscription is one of India's most important historical records.",
      hi: "उदयगिरि और खंडगिरि गुफाएं दूसरी शताब्दी ईसा पूर्व की प्राचीन जैन शैलकृत गुफाएं हैं, जो राजा खारवेल के शासनकाल में बनी थीं। गुफाओं में राजसी जुलूसों, हाथियों और जैन धार्मिक दृश्यों की जटिल नक्काशी है।",
      od: "ଉଦୟଗିରି ଓ ଖଣ୍ଡଗିରି ଗୁହା ଖ୍ରୀଷ୍ଟପୂର୍ବ ଦ୍ୱିତୀୟ ଶତାବ୍ଦୀର ପ୍ରାଚୀନ ଜୈନ ଶିଳାକୃତ ଗୁହା, ଯାହା ରାଜା ଖାରବେଳଙ୍କ ଶାସନକାଳରେ ନିର୍ମିତ ହୋଇଥିଲା। ଗୁହାରେ ରାଜକୀୟ ଶୋଭାଯାତ୍ରା, ହାତୀ ଓ ଜୈନ ଧାର୍ମିକ ଦୃଶ୍ୟର ସୂକ୍ଷ୍ମ ନକ୍କାସୀ ଅଛି।"
    },
    facts: ["Contains 33 rock-cut caves in Udayagiri and 15 in Khandagiri", "Hathi Gumpha inscription has 17 lines in Brahmi script", "Rani Gumpha is the largest and most ornate cave", "Built as residential blocks for Jain monks"],
    festivals: ["Makar Sankranti celebrations", "Jain pilgrimage events"],
    architecture: "Rock-cut architecture with both natural and enlarged caves. Features bas-reliefs and inscriptions in Brahmi script.",
    timeline: [{ year: "2nd century BCE", event: "Caves excavated under King Kharavela" }, { year: "1st century CE", event: "Additional carvings added" }, { year: "1825", event: "Rediscovered by British archaeologists" }, { year: "Present", event: "Protected monument under ASI" }]
  },
  {
    id: "5", name: "Dhauli Shanti Stupa", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
    lat: 20.2063, lng: 85.8378,
    descriptions: {
      en: "Dhauli is the site of the historic Kalinga War (261 BCE), after which Emperor Ashoka embraced Buddhism and non-violence. The Shanti Stupa (Peace Pagoda) was built in 1972 by Japanese and Indian Buddhists. The hilltop features Ashoka's rock edicts — among the oldest in India.",
      hi: "धौली ऐतिहासिक कलिंग युद्ध (261 ईसा पूर्व) का स्थल है, जिसके बाद सम्राट अशोक ने बौद्ध धर्म और अहिंसा अपनाई। शांति स्तूप 1972 में जापानी और भारतीय बौद्धों द्वारा बनाया गया था।",
      od: "ଧୌଳି ଐତିହାସିକ କଳିଙ୍ଗ ଯୁଦ୍ଧ (261 ଖ୍ରୀଷ୍ଟପୂର୍ବ)ର ସ୍ଥଳ, ଯାହା ପରେ ସମ୍ରାଟ ଅଶୋକ ବୌଦ୍ଧ ଧର୍ମ ଓ ଅହିଂସା ଗ୍ରହଣ କରିଥିଲେ। ଶାନ୍ତି ସ୍ତୂପ 1972ରେ ଜାପାନୀ ଓ ଭାରତୀୟ ବୌଦ୍ଧମାନଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ହୋଇଥିଲା।"
    },
    facts: ["Site of one of the bloodiest wars in ancient India", "Contains Ashoka's earliest rock edicts", "The elephant sculpture symbolizes Buddha's birth", "Over 100,000 soldiers died in the Kalinga War"],
    festivals: ["Dhauli Mahotsav (music and dance festival)", "Buddha Purnima celebrations"],
    architecture: "White hemisphere dome (Japanese Shanti Stupa style) with carved panels depicting Buddha's life.",
    timeline: [{ year: "261 BCE", event: "Kalinga War fought" }, { year: "260 BCE", event: "Ashoka's rock edicts carved" }, { year: "1972", event: "Shanti Stupa constructed" }, { year: "Present", event: "Major peace monument and tourist site" }]
  },
  {
    id: "6", name: "Similipal National Park", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    lat: 21.8286, lng: 86.3370,
    descriptions: {
      en: "Similipal National Park is a 2,750 sq km tiger reserve and biosphere reserve in Mayurbhanj district. Home to Bengal tigers, Asian elephants, and the unique melanistic tiger, it features stunning waterfalls like Barehipani (399m) and Joranda (181m). The park is named after the Simul (silk cotton) trees.",
      hi: "सिमिलिपाल राष्ट्रीय उद्यान मयूरभंज जिले में 2,750 वर्ग किमी का बाघ अभयारण्य और जीवमंडल आरक्षित है। बंगाल टाइगर, एशियाई हाथियों और अनोखे मेलानिस्टिक टाइगर का घर, यहाँ बरेहिपानी (399मी) जैसे शानदार झरने हैं।",
      od: "ସିମିଳିପାଳ ଜାତୀୟ ଉଦ୍ୟାନ ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲାରେ 2,750 ବର୍ଗ କିମିର ବାଘ ଅଭୟାରଣ୍ୟ ଓ ଜୀବମଣ୍ଡଳ ସଂରକ୍ଷଣ। ବଙ୍ଗ ବାଘ, ଏସୀୟ ହାତୀ ଓ ଅନନ୍ୟ ମେଲାନିଷ୍ଟିକ ବାଘର ଘର, ଏଠାରେ ବରେହିପାଣି (399ମି) ପରି ସୁନ୍ଦର ଝରଣା ଅଛି।"
    },
    facts: ["One of the few places where melanistic (black) tigers are found", "Contains over 1,076 species of plants", "Home to 42 species of reptiles and 231 bird species", "Barehipani Falls is the 2nd highest waterfall in India"],
    festivals: ["Chaitra Parba (tribal festival)", "Nature awareness camps"],
    architecture: "Natural landscape with tribal settlements and forest rest houses.",
    timeline: [{ year: "1956", event: "Declared a tiger reserve" }, { year: "1973", event: "Included in Project Tiger" }, { year: "1994", event: "UNESCO Biosphere Reserve" }, { year: "2009", event: "First melanistic tiger photographed" }]
  },
];

export const chatbotResponses: Record<string, string> = {
  "rath yatra": "🛕 **Rath Yatra** is the grand chariot festival of Lord Jagannath, celebrated annually in Puri, Odisha. Three massive chariots carrying the deities — Jagannath, Balabhadra, and Subhadra — are pulled by thousands of devotees along the Grand Road. The festival dates back over 800 years and is one of the oldest and largest religious gatherings in the world. The word 'Juggernaut' in English derives from 'Jagannath'!",
  "konark": "🌞 **Konark Sun Temple** was built in 1250 CE by King Narasimhadeva I as a monumental representation of the Sun God's chariot. The temple originally stood 70 meters tall and featured 24 intricately carved wheels that serve as sundials. The erotic sculptures on its walls represent the celebration of life and human desire. European sailors called it the 'Black Pagoda' because it appeared dark from the sea.",
  "dalkhai": "💃 **Dalkhai** is a vibrant folk dance of Western Odisha, traditionally performed during the festival of Nuakhai by young women. The dance celebrates the harvest season and features graceful movements accompanied by folk songs praising nature and love. The dancers wear colorful traditional attire and the rhythm is set by the Dhol and Mohuri instruments.",
  "chilika": "🌊 **Chilika Lake** is Asia's largest brackish water lagoon, home to the endangered Irrawaddy dolphin and a winter destination for over a million migratory birds from as far as Siberia and Central Asia. The lake contains the sacred Kalijai Island temple. Local fishing communities have sustained their livelihood from the lake for centuries.",
  "jagannath": "🙏 **Jagannath Temple** in Puri is one of the four sacred Char Dhams. Built in the 12th century, it stands 65 meters tall. Fascinating mysteries: the flag atop always flies opposite to the wind, no bird flies over the temple, and the shadow of the main dome is invisible at any time of day. The temple kitchen, called 'the largest kitchen in the world,' feeds 100,000 people daily.",
  "default": "🌿 Welcome to the Karma-Path Cultural Guide! I can tell you about the rich heritage of Odisha — from ancient temples and tribal traditions to wildlife and festivals. Try asking about Rath Yatra, Konark Sun Temple, Dalkhai dance, Chilika Lake, or Jagannath Temple. What would you like to explore?",
};

export const impactStats = {
  plasticRemoved: "2,450 kg",
  speciesDocumented: 187,
  culturalMediaPreserved: 1243,
  treesMaped: 892,
  tasksCompleted: 3567,
  activeVolunteers: 456,
};
