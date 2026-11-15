export interface OdishaFestival {
  id: string;
  name: string;
  odiaName: string;
  slug: string;
  image: string;
  tithi: string;
  tithiOdia: string;
  season: string;
  region: string;
  primaryDeity: string;
  summary: string;
  whyWeCelebrate: string;
  fullStory: string;
  rituals: string[];
  traditionalFood: string[];
  culturalSignificance: string;
}

export const ODISHA_30_FESTIVALS: OdishaFestival[] = [
  // 1. Jagannath Rath Yatra
  {
    id: 'rath-yatra',
    name: 'Jagannath Rath Yatra',
    odiaName: 'ଜଗନ୍ନାଥ ରଥଯାତ୍ରା',
    slug: 'rath-yatra',
    image: '/festivals/rath-yatra.jpg?v=5',
    tithi: 'Asadha Shukla Dwitiya (June/July)',
    tithiOdia: 'ଆଷାଢ଼ ଶୁକ୍ଳ ଦ୍ୱିତୀୟା',
    season: 'Monsoon (Barsha Ritu)',
    region: 'Puri (Celebrated Statewide & Globally)',
    primaryDeity: 'Lord Jagannath, Balabhadra & Devi Subhadra',
    summary: 'The world-famous Chariot Festival where the Lord of the Universe leaves His sanctum to meet all devotees on the Grand Road.',
    whyWeCelebrate: 'To provide universal Darshan to all living beings irrespective of caste, creed, religion, or social standing, as Mahaprabhu journeys to His aunt\'s house at the Gundicha Temple.',
    fullStory: 'According to the Skanda Purana and Utkala Khanda, King Indradyumna and Queen Gundicha built the great temple of Puri. Queen Gundicha asked Lord Jagannath for a sacred boon: that once every year, the Lord along with His siblings Balabhadra and Subhadra would visit her garden palace for nine days. During Rath Yatra, the supreme divine emerges from the sanctum onto the mammoth wooden chariots: Nandighosha (45 ft, 16 wheels), Taladhwaja (44 ft, 14 wheels), and Darpadalana (43 ft, 12 wheels). The titular King of Puri, the Gajapati Maharaja, performs the Chhera Panhara—sweeping the chariot floors with a golden broom—proclaiming that before the Almighty, the King is merely a humble sweeper.',
    rituals: [
      'Snana Yatra & 15-day Anavasara secret healing period',
      'Netrotsava & Nabajoubara Besha (New Youth appearance)',
      'Goti Pahandi: Sacred rhythmic swaying procession onto chariots',
      'Chhera Panhara: Sweeping the chariots by Gajapati Maharaja',
      'Bahuda Yatra (Return Journey) and Suna Besha (Golden Attire)'
    ],
    traditionalFood: ['Poda Pitha', 'Khaja', 'Maha Prasada (Abadha)', 'Rasagola (Niladri Bije)'],
    culturalSignificance: 'The ultimate symbol of egalitarianism and universal brotherhood, where God descends from the altar to walk alongside the common human.'
  },

  // 2. Raja Parba
  {
    id: 'raja-parba',
    name: 'Raja Parba',
    odiaName: 'ରଜ ପର୍ବ',
    slug: 'raja-parba',
    image: '/festivals/raja-parba.jpg?v=5',
    tithi: 'First 3 Days of Asadha Month (Mid-June)',
    tithiOdia: 'ଜ୍ୟେଷ୍ଠ ସଂକ୍ରାନ୍ତିରୁ ଆଷାଢ଼ ଦ୍ୱିତୀୟ ଦିନ ପର୍ଯ୍ୟନ୍ତ',
    season: 'Onset of Monsoon',
    region: 'Coastal and All Across Odisha',
    primaryDeity: 'Mother Earth (Bhumi Devi)',
    summary: 'A 4-day vibrant celebration honoring Mother Earth\'s womanhood, fertility, and agrarian rest before the monsoon plowing.',
    whyWeCelebrate: 'Honoring Mother Earth who undergoes her menstrual cycle (rejuvenation) for three days. Agriculture is halted, celebrating womanhood and female empowerment.',
    fullStory: 'Raja Parba is unique to Odisha and celebrates the regenerative powers of nature and women. It is believed that during the first three days of the solar month of Mithuna (June), Mother Earth (Bhumi Devi) undergoes menstruation before receiving the life-giving monsoon showers. As a mark of deep respect, all agricultural work like plowing, digging, and pruning trees is strictly forbidden to allow the earth to rest. Girls and young women are freed from all household chores; they dress in brand-new handloom sarees, paint intricate red Alata on their feet, swing on decorated banyan rope swings (Raja Doli), and sing traditional folk songs like "Banaste Dakila Gaja". On the fourth day (Basumati Snana), Mother Earth is bathed with turmeric water and decorated with flowers.',
    rituals: [
      'Pahili Raja: First day of rest and preparation',
      'Raja Sankranti: Main festival day celebrated with swings and sweets',
      'Bhuindaha (Sesa Raja): Concluding day of the earth\'s rest',
      'Basumati Snana: Ceremonial holy bath of the grinding stone (symbol of Bhumi Devi)',
      'Raja Doli: Decorated wooden rope swings hung from giant banyan and mango branches'
    ],
    traditionalFood: ['Authentic Poda Pitha (baked in earthen leaf packets)', 'Manda Pitha', 'Chakuli Pitha', 'Raja Paan (cardamom betel leaf)'],
    culturalSignificance: 'A pioneering ancient eco-feminist festival that celebrates female biology, fertility, and ecological balance centuries ahead of modern thought.'
  },

  // 3. Kartik Purnima & Boita Bandana
  {
    id: 'kartik-purnima',
    name: 'Kartik Purnima & Boita Bandana',
    odiaName: 'କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା ଓ ବୋଇତ ବନ୍ଦାଣ',
    slug: 'kartik-purnima',
    image: '/festivals/kartik-purnima.jpg?v=5',
    tithi: 'Kartika Purnima (October/November)',
    tithiOdia: 'କାର୍ତ୍ତିକ ଶୁକ୍ଳ ପୂର୍ଣ୍ଣିମା',
    season: 'Autumn (Sarat Ritu)',
    region: 'All Rivers, Ponds & Sea Coasts of Odisha',
    primaryDeity: 'Lord Jagannath, Vishnu & Sea God Varuna',
    summary: 'The historic maritime festival commemorating Kalinga\'s seafaring merchants setting sail across the Indian Ocean in giant wooden boats.',
    whyWeCelebrate: 'To remember the maritime heritage of ancient Kalinga and the brave merchants (Sadhabas) who traded with Bali, Java, Sumatra, and Sri Lanka.',
    fullStory: 'In ancient times, the merchants of Kalinga (Sadhabas) were world-renowned navigators who mastered trade winds. On the auspicious full moon day of Kartika month, when favorable northeast trade winds began to blow, their massive wooden merchant ships (Boitas) were prepared for multi-month voyages across the Indian Ocean to Indonesia (Java, Sumatra, Bali) and Ceylon. Before departure, merchant wives (Sadhabanis) worshipped the ships with turmeric, betel nuts, and sacred lamps, chanting: "Aa Ka Ma Bai, Pana Gua Thoi, Pana Gua Tora, Masaka Dharama Mora" (invoking the holy months of Asadha, Kartika, Magha, and Baisakha). Today, at the break of dawn, millions of Odias gather at rivers, sea beaches, and temple ponds to float miniature decorative boats made of banana bark, cork, and colored paper with ghee lamps.',
    rituals: [
      'Early dawn holy bath before sunrise',
      'Boita Bandana: Floating illuminated miniature boats with betel nut and flowers',
      'Chanting the traditional maritime anthem: "Aa Ka Ma Bai"',
      'Panchuka Vrata culmination (strict five-day holy fasting)',
      'Commencement of the historic Bali Yatra fair'
    ],
    traditionalFood: ['Habisha Anna (sun-dried rice cooked with ghee, ginger, and raw banana)', 'Chuda Ghasa', 'Pua', 'Chenna Bhoga'],
    culturalSignificance: 'A majestic testament to Odisha\'s proud global maritime civilization, entrepreneurship, and communal spiritual devotion.'
  },

  // 4. Kumar Purnima
  {
    id: 'kumar-purnima',
    name: 'Kumar Purnima',
    odiaName: 'କୁମାର ପୂର୍ଣ୍ଣିମା',
    slug: 'kumar-purnima',
    image: '/festivals/kumar-purnima.jpg?v=5',
    tithi: 'Ashvina Purnima (September/October)',
    tithiOdia: 'ଆଶ୍ୱିନ ଶୁକ୍ଳ ପୂର୍ଣ୍ଣିମା',
    season: 'Sharad (Autumn Moon)',
    region: 'Statewide Across Odisha',
    primaryDeity: 'Lord Kartikeya (Kumar) & The Full Moon (Chanda)',
    summary: 'A joyful festival celebrated by maiden girls and youths praying for a handsome, virtuous, and loving life partner like Lord Kumar.',
    whyWeCelebrate: 'Young girls invoke the blessings of handsome Lord Kartikeya and the pure Autumn Moon to seek virtuous life partners, beauty, and happiness.',
    fullStory: 'Kumar Purnima falls on the dazzling full moon night of Ashvina month. It is dedicated to Kumar (Lord Kartikeya), the epitome of youth, valor, and supreme handsomeness. On this day, young unmarried girls wake up at dawn, take a sacred bath, and perform the "Anjula" ritual—offering water, parched rice (Lia), and seven varieties of wild autumn flowers to the rising sun. Throughout the day they dress in festive new clothes, sing folk melodies like "Phula Baula Beni", and play the traditional competitive cowrie game called Puchi. When the full moon rises at twilight, they assemble in courtyards to offer "Chanda Chakata"—a special crescent-shaped delicacy made of banana, cottage cheese, grated coconut, and honey—to the glowing moon.',
    rituals: [
      'Anjula: Sunrise offering of Lia and autumn flowers to Surya Deva',
      'Playing traditional Puchi folk game and dice',
      'Singing traditional "Phula Baula Beni" ballads',
      'Chanda Puja: Offering crescent-shaped Chanda Chakata under the full moon',
      'Gaja Laxmi Puja: Simultaneous worship of Goddess Lakshmi in towns like Dhenkanal'
    ],
    traditionalFood: ['Chanda Chakata (banana, chhena, milk, grated coconut, and sugar)', 'Lia (puffed paddy)', 'Kakara Pitha'],
    culturalSignificance: 'A poetic celebration of youth, elegance, hope, and sisterhood under the silvery autumn moonlight.'
  },

  // 5. Dola Purnima & Dola Yatra
  {
    id: 'dola-purnima',
    name: 'Dola Purnima & Dola Yatra',
    odiaName: 'ଦୋଳ ପୂର୍ଣ୍ଣିମା',
    slug: 'dola-purnima',
    image: '/festivals/dola-purnima.jpg?v=5',
    tithi: 'Phalguna Purnima (February/March)',
    tithiOdia: 'ଫାଲ୍ଗୁନ ଶୁକ୍ଳ ପୂର୍ଣ୍ଣିମା',
    season: 'Basanta (Spring Arrival)',
    region: 'Puri, Coastal Odisha, and Every Village',
    primaryDeity: 'Radha Krishna & Village Tutelary Deities',
    summary: 'The grand spring swing festival where deities travel village-to-village in ornate palanquins (Vimanas) playing with herbal Phagu colors.',
    whyWeCelebrate: 'To celebrate the arrival of spring (Vasantotsav), the divine pastimes of Radha-Krishna swinging on decorated swings, and reading the new annual almanac.',
    fullStory: 'Dola Purnima is one of the oldest festivals of Odisha, celebrating the cosmic union of Radha and Krishna on a celestial swing (Dola). Beginning five days before the full moon (Phagu Dasami), village deities are placed inside intricately carved, brightly painted wooden palanquins called Vimanas. Village youth shoulder these heavy palanquins, carrying the deities from door to door across neighborhoods. Every family sweeps their courtyard, draws beautiful Rangoli designs, and offers worship along with natural red powder (Phagu). On the night of Dola Purnima, all Vimanas from surrounding villages assemble in a central field called the "Dola Melana", creating a breathtaking spectacle of dozens of glowing canopies. Village priests sit together and ritually read the new Odia Panjika (almanac), foretelling rainfall, agriculture, and cosmic events.',
    rituals: [
      'Dola Vimana Parikrama: Carrying village deities in palanquins from house to house',
      'Offering Abira and herbal Phagu colors to deities',
      'Dola Melana: Spectacular grand assembly of dozens of village palanquins in open fields',
      'Nutan Panjika Patha: Public recitation of the newly calculated Odia astrological almanac',
      'Holika Dahana: Burning the demon Holika on the eve of Purnima'
    ],
    traditionalFood: ['Chenna Pitha', 'Chuda Bhoga', 'Kanji', 'Sweet Khaja'],
    culturalSignificance: 'Deepens village solidarity and welcomes nature\'s bloom, bridging community bonds through devotional music and spring colors.'
  },

  // 6. Durga Puja & Dussehra
  {
    id: 'durga-puja',
    name: 'Durga Puja & Dussehra',
    odiaName: 'ଦୁର୍ଗା ପୂଜା / ଦଶହରା',
    slug: 'durga-puja',
    image: '/festivals/durga-puja.jpg?v=4',
    tithi: 'Ashvina Shukla Sasthi to Dashami (September/October)',
    tithiOdia: 'ଆଶ୍ୱିନ ଶୁକ୍ଳ ଷଷ୍ଠୀରୁ ଦଶମୀ',
    season: 'Autumn (Sharad)',
    region: 'Cuttack, Bhubaneswar, Jajpur, and Statewide',
    primaryDeity: 'Maa Durga (Mahishasuramardini)',
    summary: 'The grand autumn festival celebrating the victory of Goddess Durga over evil, famed for Cuttack\'s Chandi Medha (pure silver backdrops).',
    whyWeCelebrate: 'To celebrate the victory of good over demonic tyranny (Mahishasura Mardini) and the divine power (Shakti) that upholds cosmic righteousness.',
    fullStory: 'Durga Puja in Odisha has an ancient history dating back to King Chodaganga Deva in the 11th century. What makes Odisha\'s celebration world-renowned is Cuttack\'s "Chandi Medha"—breathtaking backdrops and crowns for the Mother Deity crafted from hundreds of kilograms of pure silver filigree (Tarakasi) and pure gold. Over 170 community Pandals in Cuttack compete to produce the most ornate silver tableaux. On Vijaya Dashami (Dussehra), traditional martial weapons are worshipped (Aparajita Puja), followed by the grand immersion carnival (Bhasani Jatra) where traditional drummers (Ghanta, Ghumura) escort the statues through illuminated heritage streets.',
    rituals: [
      'Bodhana & Bilwa Barana: Awakening the Goddess beneath the sacred wood-apple tree',
      'Maha Saptami, Ashtami & Sandhi Puja rituals with 108 lotus flowers',
      'Chandi Medha exhibition of pure silver filigree craftsmanship',
      'Aparajita Puja: Ancient martial blessing of tools and weapons',
      'Bhasani Jatra: Rhythmic, jubilant immersion carnival on the river banks'
    ],
    traditionalFood: ['Khichdi Mahaprasad', 'Labra curry', 'Dahi Bara Aloo Dum', 'Cuttack Chenna Jilapi'],
    culturalSignificance: 'Showcases Odisha\'s peerless silver craftsmanship, communal harmony, and the eternal reverence for feminine cosmic power.'
  },

  // 7. Nuakhai
  {
    id: 'nuakhai',
    name: 'Nuakhai',
    odiaName: 'ନୂଆଖାଇ',
    slug: 'nuakhai',
    image: '/festivals/nuakhai.jpg?v=4',
    tithi: 'Bhadrava Shukla Panchami (August/September)',
    tithiOdia: 'ଭାଦ୍ରବ ଶୁକ୍ଳ ପଞ୍ଚମୀ (ଗଣେଶ ଚତୁର୍ଥୀର ପରଦିନ)',
    season: 'Late Monsoon (Bhadra)',
    region: 'Western Odisha (Sambalpur, Balangir, Bargarh, Kalahandi, Sundargarh)',
    primaryDeity: 'Maa Samaleswari, Patneswari, Manikeswari & Mother Nature',
    summary: 'Western Odisha\'s supreme agricultural thanksgiving festival where families unite to partake of the season\'s first harvested rice.',
    whyWeCelebrate: 'To offer gratitude to Mother Earth and patron deities for the first harvest of paddy, reaffirming family bonds and social harmony.',
    fullStory: 'Dating back to the Vedic era and systematized in the 12th century by the Chauhan kings of Patna State, Nuakhai (meaning "eating the new grain") is the heart and soul of Western Odisha. Farmers carefully harvest the earliest ripe grains of paddy. On the morning of Bhadrava Shukla Panchami, at the exact astrologically predetermined moment (Lagna), the newly harvested grain (Nabanna) is ground, mixed with milk, honey, jaggery, banana, and coconut, and offered to Goddess Samaleswari and village Gramadevis. Afterwards, families gather in new Sambalpuri handloom attire to eat the blessed Nabanna together on sal leaf plates. This is followed by the deeply emotional "Nuakhai Juhar"—youngsters touch the feet of all elders seeking blessings, and friends embrace each other, forgiving all past grudges.',
    rituals: [
      'Beherana: Village council meeting to determine sacred harvest timing',
      'Nabanna Lagna: Offering the first grain to presiding mother deities',
      'Kutumba Bhojana: Dining together as an extended family on sal leaves',
      'Nuakhai Juhar: Universal touching of feet and reconciliation between villagers',
      'Nuakhai Bhetghat: Evening cultural performances of Dalkhai and Rasarkeli'
    ],
    traditionalFood: ['Nabanna (fresh grain with milk, honey, coconut, and jaggery)', 'Kakara Pitha', 'Arisa Pitha', 'Chaula Bara'],
    culturalSignificance: 'The ultimate festival of agricultural gratitude, inter-generational respect, emotional reconciliation, and agrarian pride.'
  },

  // 8. Bali Yatra
  {
    id: 'bali-yatra',
    name: 'Bali Yatra (Cuttack)',
    odiaName: 'ବାଲି ଯାତ୍ରା',
    slug: 'bali-yatra',
    image: '/festivals/bali-yatra.jpg?v=4',
    tithi: 'Begins on Kartika Purnima (November)',
    tithiOdia: 'କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମାରୁ ଆରମ୍ଭ (୭ ରୁ ୧୦ ଦିନ)',
    season: 'Early Winter (Hemanta)',
    region: 'Cuttack (Mahanadi Riverbed near Barabati Fort)',
    primaryDeity: 'Commemorative Maritime Carnival (Varuna & Lord Kartikeswar)',
    summary: 'Asia\'s largest open-air historic trade and maritime fair celebrating the ancient ocean merchants of Kalinga sailing to Bali.',
    whyWeCelebrate: 'Commemorating the voyages of ancient Odia seafarers to Indonesia and celebrating Odisha\'s thriving commerce, artisans, and culinary traditions.',
    fullStory: 'Spanning across nearly 50 acres of the dry riverbed of the sacred Mahanadi River beneath the historic ramparts of Barabati Fort, Bali Yatra ("Voyage to Bali") is one of the world\'s largest open-air trade expos. Beginning on the full moon day of Kartika month, it commemorates the ancient maritime merchants who sailed to Southeast Asian islands for spice and silk trade. The contemporary fair attracts over 5 million visitors over 8 to 10 days, featuring more than 2,000 stalls representing master weavers, terracotta artists, tribal craftspersons, brass sculptors, and innovative modern enterprises. It is equally famous for its vibrant food streets featuring iconic street delicacies.',
    rituals: [
      'Lighting the ceremonial lamp on the Mahanadi waterfront',
      'Boita Bandana boat floating on the adjoining Gadagadia Ghat',
      'Showcasing traditional maritime models and hand-carved boats',
      'Open-air cultural stages featuring Odissi, Gotipua, and folk theatre',
      'Historic trade negotiations between rural craftsmen and international buyers'
    ],
    traditionalFood: ['Thunka Puri & Chhena Tarkari', 'Cuttack Dahi Bara Aloo Dum', 'Bada Chhena Jilapi', 'Gupchup'],
    culturalSignificance: 'A living celebration of enterprise, maritime resilience, and the economic backbone of Odisha\'s micro-artisan heritage.'
  },

  // 9. Raja Sankranti
  {
    id: 'raja-sankranti',
    name: 'Raja Sankranti (Mithuna Sankranti)',
    odiaName: 'ରଜ ସଂକ୍ରାନ୍ତି',
    slug: 'raja-sankranti',
    image: '/festivals/raja-sankranti.jpg?v=4',
    tithi: 'Mithuna Sankranti Day (Mid-June, 2nd Day of Raja)',
    tithiOdia: 'ମିଥୁନ ସଂକ୍ରାନ୍ତି ଦିନ',
    season: 'Onset of Rainy Season',
    region: 'Statewide Across Odisha',
    primaryDeity: 'Mother Earth & Sun God (Mithuna Transit)',
    summary: 'The main festive day of the Raja festival celebrating the transit of the Sun into Gemini and the sacred rejuvenation of agriculture.',
    whyWeCelebrate: 'To mark the Sun\'s transit into the zodiac sign of Mithuna, signaling the arrival of torrential agricultural monsoon rains.',
    fullStory: 'Raja Sankranti is the second and most festive day of the four-day Raja festival. On this day, the sun moves from Taurus into Gemini (Mithuna Rashi). Villages across Odisha resonate with the joyous laughter of young girls swinging on decorative swings tied to ancient banyan and mango branches. Men participate in traditional outdoor sports like Kabaddi, Bagha Chheli, and card tournaments. The aromas of Poda Pitha baked overnight in earthen ovens wrapped in banana leaves fill every village lane. Families exchange sweets and special aromatic Raja betel leaves (Paan) with silver foil.',
    rituals: [
      'Wearing new handloom attire and decorative red Alata on feet',
      'Swinging on Raja Doli swings while singing folk songs',
      'Playing traditional village games like Kabaddi and Bagha Chheli',
      'Distributing homemade leaf-baked Poda Pitha to relatives and neighbors',
      'Chewing sweet fragrant Raja Paan with rose essence'
    ],
    traditionalFood: ['Baked Poda Pitha', 'Manda Pitha', 'Chakuli with Dalma', 'Raja Paan with cardamom and clove'],
    culturalSignificance: 'Celebrates community camaraderie, agrarian rest, folk music, and ecological respect for the fertility of the soil.'
  },

  // 10. Sital Sasthi
  {
    id: 'sital-sasthi',
    name: 'Sital Sasthi',
    odiaName: 'ଶୀତଳ ଷଷ୍ଠୀ',
    slug: 'sital-sasthi',
    image: '/festivals/sital-sasthi.jpg?v=4',
    tithi: 'Jyeshtha Shukla Sasthi (May/June)',
    tithiOdia: 'ଜ୍ୟେଷ୍ଠ ଶୁକ୍ଳ ଷଷ୍ଠୀ',
    season: 'Peak Summer / Pre-Monsoon',
    region: 'Sambalpur and Western Odisha',
    primaryDeity: 'Lord Shiva & Goddess Parvati (Celestial Marriage)',
    summary: 'The divine marriage of Lord Shiva and Goddess Parvati celebrated as a real human wedding with community foster parents and night-long carnivals.',
    whyWeCelebrate: 'To invoke divine grace for cooling the scorching summer heat with refreshing monsoon showers through the celestial wedding of Shiva and Parvati.',
    fullStory: 'Originating over 400 years ago in Sambalpur, Sital Sasthi portrays the cosmic union of Lord Shiva (Loknath, Balunkeswar, Jageswar) and Goddess Parvati in the form of a real-life Odia community wedding. Prominent citizens are chosen as the human "foster parents" of the bride (Parvati) and groom (Shiva). The groom\'s procession (Barayatra) leaves with grand fanfare, fireworks, and hundreds of folk dance troupes (Ghumura, Sambalpuri, Dalkhai). The divine wedding is conducted strictly according to traditional Vedic rituals. On the following day, the divine newlyweds tour the city in an all-night ceremonial chariot procession (Sobhayatra), receiving offerings of cool water and curd rice from thousands of households.',
    rituals: [
      'Selection of human foster parents (Kanyadana parents) for Goddess Parvati',
      'Patra Pindha: Formal engagement and marriage proposal rituals',
      'Barayatra: Magnificent groom\'s procession with folk music across Sambalpur',
      'Vedic Vivaha: Solemn wedding ceremony with chanting of sacred mantras',
      'Nagar Parikrama: All-night triumphal procession of the newlyweds through city streets'
    ],
    traditionalFood: ['Curd Pakhala with tender mango and roasted green chilies', 'Panakam (jaggery lemon drink)', 'Sarsatia', 'Chaul Bara'],
    culturalSignificance: 'Blurs the boundary between humanity and divinity, turning an entire city into extended relatives of Lord Shiva and Devi Parvati.'
  },

  // 11. Maha Vishuba Sankranti / Pana Sankranti
  {
    id: 'maha-vishuba-sankranti',
    name: 'Maha Vishuba Sankranti (Pana Sankranti)',
    odiaName: 'ମହା ବିଷୁବ ସଂକ୍ରାନ୍ତି / ପଣା ସଂକ୍ରାନ୍ତି',
    slug: 'maha-vishuba-sankranti',
    image: '/festivals/maha-vishuba-sankranti.jpg?v=4',
    tithi: 'Mesha Sankranti (14th April - Odia New Year)',
    tithiOdia: 'ମେଷ ସଂକ୍ରାନ୍ତି (ବୈଶାଖ ପ୍ରଥମ ଦିନ)',
    season: 'Grisma (Summer Arrival)',
    region: 'Statewide Across Odisha',
    primaryDeity: 'Lord Jagannath, Lord Shiva & Lord Hanuman',
    summary: 'The traditional Odia Solar New Year celebrated by sipping refreshing Bela Pana and hanging a water dripper over the holy Tulsi plant.',
    whyWeCelebrate: 'Marks the onset of the solar year, summer solstice, and birth of Lord Hanuman; promotes health and hydration during peak summer heat.',
    fullStory: 'Pana Sankranti marks the first day of the solar month of Baisakha and is celebrated as the Odia New Year (Maha Vishuba Sankranti). On this day, a small earthen pot with a tiny hole at the bottom (Basundhara Theki) filled with water or pana is hung over the holy Tulsi plant in courtyards. A sacred thread allows drops of water to drip steadily onto the sacred plant, symbolizing the human duty to protect vegetation from scorching summer heat. Families prepare and share "Bela Pana"—a deliciously cooling nectar made of wood-apple pulp, cottage cheese, grated coconut, black pepper, and jaggery. It also marks the grand culmination of the Danda Nacha penance festivals.',
    rituals: [
      'Basundhara Theki: Hanging an earthen water-dripping pot over the Tulsi plant',
      'Drinking and distributing sweet cooling Bela Pana to visitors and poor travelers',
      'Reading the newly calculated Odia almanac for the agricultural year',
      'Hanuman Jayanti prayers and recitation of Sundara Kanda',
      'Meru Sankranti fire-walking ceremonies of Danda Nacha'
    ],
    traditionalFood: ['Bela Pana (wood apple, chhena, banana, and black pepper drink)', 'Chhatua (roasted gram flour with jaggery)', 'Pakhala'],
    culturalSignificance: 'Highlights Ayurvedic dietary wisdom for summer cooling alongside deep respect for medicinal flora and sacred botanical life.'
  },

  // 12. Panchu Pandava Lila
  {
    id: 'panchu-pandava-lila',
    name: 'Panchu Pandava Lila',
    odiaName: 'ପାଞ୍ଚୁ ପାଣ୍ଡବ ଲୀଳା',
    slug: 'panchu-pandava-lila',
    image: '/festivals/panchu-pandava-lila.jpg?v=4',
    tithi: 'During Chandan Yatra (Baisakha Shukla Akshaya Tritiya to Jyeshtha)',
    tithiOdia: 'ବୈଶାଖ ଶୁକ୍ଳ ଅକ୍ଷୟ ତୃତୀୟାରୁ ଚନ୍ଦନ ଯାତ୍ରା ସମୟ',
    season: 'Summer (Grisma)',
    region: 'Puri (Narendra Sarovar) and Heritage Temples',
    primaryDeity: 'Five Guardian Shivas of Puri & Madanmohana',
    summary: 'The divine summer water festival where the five guardian Shivalingas of Puri accompany Lord Jagannath on celestial swan boats.',
    whyWeCelebrate: 'To honor the cosmic brotherhood of Lord Shiva and Lord Vishnu (Harihara concept) and to cool the divine forms during the summer heat.',
    fullStory: 'In the sacred city of Puri, five ancient Shiva temples guard the perimeter of the Jagannath temple: Lokanatha, Jameswara, Kapalamochana, Markandeyeswara, and Nilakantheswara—collectively known as the "Pancha Pandavas". During the 21-day summer Chandan Yatra, the representative brass idols of these five Shivas accompany Madanmohana (the representative of Lord Jagannath) to the holy Narendra Sarovar lake. The deities are anointed with fragrant sandalwood paste and rowed on gorgeously decorated swan-shaped boats (Bhadra and Nanda) amidst torchlights, Vedic chants, and temple water music.',
    rituals: [
      'Procession of the five Shivas from their respective shrines to Narendra Sarovar',
      'Chapa Khela: Rowing of the decorated swan boats on the sacred lake',
      'Anointing deities with aromatic sandalwood paste and camphor',
      'Night-long Mandap bhoga and devotional Gita Govinda singing',
      'Jala Krida: Divine water sports performed to beat the summer heat'
    ],
    traditionalFood: ['Chandan Bhoga', 'Sweet Manda Pitha', 'Cool herbal Pana', 'Chhena Khaja'],
    culturalSignificance: 'A supreme embodiment of the Harihara synthesis—uniting Shaivism and Vaishnavism in mutual devotion and harmony.'
  },

  // 13. Dhanu Yatra
  {
    id: 'dhanu-yatra',
    name: 'Dhanu Yatra (Bargarh)',
    odiaName: 'ଧନୁ ଯାତ୍ରା (ବରଗଡ଼)',
    slug: 'dhanu-yatra',
    image: '/festivals/dhanu-yatra.jpg?v=4',
    tithi: 'Pausha Shukla Panchami to Purnima (December/January)',
    tithiOdia: 'ପୌଷ ଶୁକ୍ଳ ପଞ୍ଚମୀରୁ ପୌଷ ପୂର୍ଣ୍ଣିମା',
    season: 'Winter (Sita Ritu)',
    region: 'Bargarh, Western Odisha',
    primaryDeity: 'Lord Krishna, Balarama & Maharaj Kansa',
    summary: 'The World\'s Largest Open-Air Theater where an entire city turns into Mathura and a real actor commands the town as King Kansa.',
    whyWeCelebrate: 'To dramatically re-enact the triumph of divine justice and truth (Lord Krishna) over pride, despotism, and arrogance (King Kansa).',
    fullStory: 'Inscribed into the Guinness World Records as the largest open-air theatrical festival on Earth, Dhanu Yatra transforms the entire 8 sq km town of Bargarh into the mythological city of Mathura. The Jeera river is treated as the holy Yamuna, and the village of Ambapali across the river becomes Gopapura (Vrindavan). For 11 days, without any written script, hundreds of local citizens and actors perform the epic narrative of Lord Krishna\'s arrival in Mathura for the Dhanu bow tournament. Most amazingly, the actor playing Maharaj Kansa rides an imperial chariot, enters administrative government offices, inspects hospitals, and issues royal "fines" to ministers and bureaucrats, which are genuinely accepted as part of living folk tradition!',
    rituals: [
      'Coronation of Maharaj Kansa in Mathura (Hatpada, Bargarh)',
      'Balya Leela episodes performed in Ambapali (Gopapura)',
      'Maharaj Kansa\'s daily royal rides with elephants and cavalry',
      'Kansa\'s official administrative Darbar and symbolic fines to dignitaries',
      'The climactic Dhanu Bhanga (breaking of the sacred bow) and slaying of Kansa'
    ],
    traditionalFood: ['Sambalpuri Chaula Bara', 'Sarsatia (sweet thread dessert)', 'Khali Pitha', 'Rasagola'],
    culturalSignificance: 'A monumental living theater of democracy, accountability, and the eternal victory of righteous dharma over tyrannical power.'
  },

  // 14. Chaiti Parva
  {
    id: 'chaiti-parva',
    name: 'Chaiti Parva',
    odiaName: 'ଚଇତି ପର୍ବ',
    slug: 'chaiti-parva',
    image: '/festivals/chaiti-parva.jpg?v=4',
    tithi: 'Chaitra Month to Purnima (March/April)',
    tithiOdia: 'ଚୈତ୍ର ପୂର୍ଣ୍ଣିମା ଓ ସମଗ୍ର ଚୈତ୍ର ମାସ',
    season: 'Spring (Basanta)',
    region: 'Koraput, Rayagada, Malkangiri & Coastal Fishing Villages',
    primaryDeity: 'Goddess Baseli (Goddess of Fertility & Sea)',
    summary: 'The tribal spring festival of dancing and community hunting, celebrated with the famous Chaiti Ghoda (dummy horse) dance.',
    whyWeCelebrate: 'To celebrate the arrival of spring blossoms, praying for bountiful sea catch, abundant forest fruits, and clan prosperity.',
    fullStory: 'Chaiti Parva is the premier spring carnival among the indigenous tribes of Southern Odisha (Dongria Kondh, Paraja, Bhatra) and the traditional Kaibarta (fishing) communities. In Koraput, the festival begins with sacred forest hunts, followed by night-long community Dhemsa dances around crackling bonfires. In coastal fishing villages, it is celebrated with the vibrant "Chaiti Ghoda Nacha"—dancers step into a hollow wooden horse framework decorated with bright red cloth, beads, and bells, accompanied by the musical duet of the horse rider (Rauta) and his witty companion (Rautani).',
    rituals: [
      'Worship of the wooden horse effigy of Goddess Baseli',
      'Traditional Chaiti Ghoda dance performances with poetic banter',
      'Community hunting expeditions (Bheta) into the forest hills',
      'Village Dhemsa dances linking arms in hypnotic serpentine chains',
      'Distributing seasonal forest wine (Mahua) and millet porridge'
    ],
    traditionalFood: ['Mandia Jau (finger millet porridge)', 'Mahua flower cakes', 'Fresh river crab and shrimp curry'],
    culturalSignificance: 'A celebration of indigenous ecological harmony, storytelling, rhythm, and communal affection.'
  },

  // 15. Gandha Mela
  {
    id: 'gandha-mela',
    name: 'Gandha Mela',
    odiaName: 'ଗନ୍ଧ ମେଳା',
    slug: 'gandha-mela',
    image: '/festivals/gandha-mela.jpg?v=4',
    tithi: 'Chaitra Shukla Triyodashi to Purnima (April)',
    tithiOdia: 'ଚୈତ୍ର ଶୁକ୍ଳ ତ୍ରୟୋଦଶୀରୁ ପୂର୍ଣ୍ଣିମା',
    season: 'Springtime on Hills',
    region: 'Gandhamardan Hills (Harishankar & Nrusinghanath)',
    primaryDeity: 'Lord Harishankar, Nrusinghanath & Sanjeevani Hill',
    summary: 'The sacred herbal and tribal mela celebrated on the legendary Gandhamardan medicinal mountain where Sanjeevani grew.',
    whyWeCelebrate: 'To honor the divine medicinal herbs, perennial spring streams, and ecological richness of the sacred Gandhamardan mountain range.',
    fullStory: 'Gandhamardan Hill, straddling Balangir and Bargarh districts, is celebrated in the Ramayana as the holy mountain that Lord Hanuman carried across the sky to save Lakshmana with the miraculous Sanjeevani herb. The mountain is home to two ancient sanctums: Nrusinghanath on the northern face and Harishankar on the southern face, connected by crystal-clear perennial streams. During Gandha Mela, traditional Vaidyas (herbal healers), Ayurvedic scholars, and tribal medicine men gather with pilgrims to offer prayers to the hill gods and trade rare forest herbs and natural honey.',
    rituals: [
      'Holy bath in the perennial natural waterfall springs of Harishankar',
      'Trek along the 16 km mountain spine visiting ancient herbal caves',
      'Offering wild forest flowers and honey to Lord Nrusinghanath',
      'Conclave of traditional tribal healers (Kaviraj) sharing medicinal wisdom',
      'Protection vows taken by local communities to guard the mountain from mining'
    ],
    traditionalFood: ['Herbal sweet Kheer', 'Wild hill berry prasad', 'Rice cakes wrapped in Sal leaves', 'Pakhala'],
    culturalSignificance: 'A living shrine of botanical conservation, indigenous healthcare wisdom, and mythological sacred geography.'
  },

  // 16. Makara Mela
  {
    id: 'makara-mela',
    name: 'Makara Mela',
    odiaName: 'ମକର ମେଳା',
    slug: 'makara-mela',
    image: '/festivals/makara-mela.jpg?v=4',
    tithi: 'Makara Sankranti (14th/15th January)',
    tithiOdia: 'ମକର ସଂକ୍ରାନ୍ତି ଦିନ (ମାଘ ମାସ ପ୍ରବେଶ)',
    season: 'Sisira (Winter Harvest)',
    region: 'Kalijai Island (Chilika), Keonjhar, Mayurbhanj, Dhenkanal',
    primaryDeity: 'Surya Deva, Maa Kalijai & Jagannath',
    summary: 'The harvest and winter solstice festival marked by boat pilgrimages to Kalijai Island and the preparation of Makar Chaula.',
    whyWeCelebrate: 'To welcome the northward journey of the Sun (Uttarayana), celebrating the abundance of harvested winter paddy with Makar Chaula.',
    fullStory: 'Makara Sankranti is observed across Odisha with immense fervor. In Keonjhar and Mayurbhanj, tribal communities celebrate with archery competitions and traditional cock-fights. In the coastal Chilika lagoon, thousands of colorfully decorated wooden fishing boats embark on a spectacular water pilgrimage to the island shrine of Goddess Kalijai. The crowning highlight of the day is "Makar Chaula"—an unctuous sweet offering prepared by soaking freshly harvested fragrant winter rice, pounding it lightly, and blending it with rich milk, jaggery, crushed black pepper, fresh ginger, grated coconut, banana, and ripe sugarcane chips.',
    rituals: [
      'Early morning river/sea bath during the sacred Uttarayana transit',
      'Preparing and offering sacred Makar Chaula to Sun God and family deities',
      'Spectacular boat carnival across Chilika lake to Kalijai Island',
      'Traditional kite flying competitions in Cuttack and coastal towns',
      'Tying of Makara bracelets symbolizing lifelong friendship (Makara Basiba)'
    ],
    traditionalFood: ['Authentic Makar Chaula', 'Tila Ladu (sesame jaggery sweets)', 'Poda Pitha', 'Chuda Ghasa'],
    culturalSignificance: 'Blends agricultural abundance with solar science, lifelong friendships, and sacred coastal water pilgrimages.'
  },

  // 17. Bada Osha
  {
    id: 'bada-osha',
    name: 'Bada Osha',
    odiaName: 'ବଡ଼ ଓଷା',
    slug: 'bada-osha',
    image: '/festivals/bada-osha.jpg?v=4',
    tithi: 'Kartika Shukla Trayodashi & Chaturdashi (November)',
    tithiOdia: 'କାର୍ତ୍ତିକ ଶୁକ୍ଳ ଚତୁର୍ଦ୍ଦଶୀ (ବଡ଼ ଓଷା)',
    season: 'Late Autumn (Kartika)',
    region: 'Dhabaleswar Island (Cuttack) and Statewide',
    primaryDeity: 'Lord Dhabaleswar (Shiva)',
    summary: 'The supreme fasting vow dedicated to Lord Dhabaleswar on an island in the Mahanadi river, famous for Gaja Bhoga.',
    whyWeCelebrate: 'Devotees observe a strict 24-hour waterless fast to seek health, divine forgiveness, liberation from sins, and family prosperity.',
    fullStory: 'Bada Osha ("The Great Vow") is regarded as the most rigorous and spiritually potent Shaivite fast in Odisha. It is centered at the island temple of Lord Dhabaleswar, set upon a rocky hill surrounded by the Mahanadi river. According to folklore, a desperate thief once stole a black calf and hid inside the temple to escape the owner. Praying frantically to Lord Shiva to protect him, the Lord turned the black calf completely white (Dhabala). The amazed owner forgave the thief, and Shiva was named Dhabaleswar. On Bada Osha night, over a hundred thousand devotees cross the river or suspension bridge to fast, pray, and receive the famed white Gaja Bhoga.',
    rituals: [
      'Nirjala Upavasa (strict fast without drinking water) throughout the day and night',
      'Pilgrimage across the Mahanadi to Dhabaleswar Island Temple',
      'Maha Dipa lighting atop the sanctum temple spire at midnight',
      'Distribution of sacred Gaja Bhoga at dawn to break the fast',
      'Recitation of the sacred Bada Osha narrative and Shiva Sahasranama'
    ],
    traditionalFood: ['Dhabaleswar Gaja Bhoga (steamed white rice flour, grated coconut, and sugar wrapped in fresh leaves)', 'Atta Kakara', 'Aromatic Kheer'],
    culturalSignificance: 'A profound testament to divine mercy, spiritual redemption, ascetic discipline, and island temple heritage.'
  },

  // 18. Kandhei Festival / Kandhei Jatra
  {
    id: 'kandhei-festival',
    name: 'Kandhei Festival (Toy Carnival)',
    odiaName: 'କଣ୍ଢେଇ ଯାତ୍ରା',
    slug: 'kandhei-festival',
    image: '/festivals/kandhei-festival.jpg?v=4',
    tithi: 'Ashadha Purnima / Chaitra (Berhampur)',
    tithiOdia: 'ଆଷାଢ଼ ପୂର୍ଣ୍ଣିମା ଓ ଚୈତ୍ର ମାସ (ବ୍ରହ୍ମପୁର)',
    season: 'Summer / Monsoon onset',
    region: 'Berhampur, Ganjam District',
    primaryDeity: 'Tutelary Toy Deities & Lord Jagannath',
    summary: 'A 250-year-old heritage toy and puppet carnival celebrating traditional terracotta, coir, and wooden toy artisans.',
    whyWeCelebrate: 'To preserve the indigenous folk toy-crafting traditions of Ganjam and celebrate childhood, artistic imagination, and joy.',
    fullStory: 'Kandhei Jatra is a unique folk festival celebrated for over two and a half centuries in the Silk City of Berhampur, Ganjam. Originally started by King Pitambar Dev of the Mohuri royal dynasty to encourage rural craftspersons, the festival transforms the historical streets of Khaspa Street and Old Berhampur into an enormous open-air toy gallery. Hundreds of artisan families showcase handcrafted toys made of clay, terracotta, coir, paper-mache, and light woods representing mythological characters, dancing peacocks, elephant riders, and wooden dolls.',
    rituals: [
      'Setting up heritage wooden kiosks along Old Berhampur street lanes',
      'Ceremonial invocation of the ancestral deity of toy makers',
      'Traditional puppet performances narrating folk stories to children',
      'Distribution of traditional clay whistles, spinning tops, and miniature chariots',
      'Community processions with giant papier-mache caricatures'
    ],
    traditionalFood: ['Berhampuri Chenna Gaja', 'Sweet Pheni', 'Spicy Puri Upma', 'Achar'],
    culturalSignificance: 'One of India\'s rarest living festivals dedicated entirely to preserving the tactile heritage of handmade folk toys.'
  },

  // 19. Konark Dance Festival
  {
    id: 'konark-dance-festival',
    name: 'Konark Dance Festival',
    odiaName: 'କୋଣାର୍କ ନୃତ୍ୟ ଉତ୍ସବ',
    slug: 'konark-dance-festival',
    image: '/festivals/konark-dance-festival.jpg?v=4',
    tithi: 'December 1st to 5th Annually',
    tithiOdia: 'ପ୍ରତିବର୍ଷ ଡିସେମ୍ବର ୧ ରୁ ୫ ତାରିଖ',
    season: 'Winter (Sita Ritu)',
    region: 'Sun Temple Open Air Auditorium, Konark',
    primaryDeity: 'Sun God (Surya) & Nataraja',
    summary: 'India\'s premier classical dance festival bringing the sculpted dancers of the 13th-century Sun Temple to living life.',
    whyWeCelebrate: 'To celebrate classical Indian dance traditions against the backdrop of the UNESCO World Heritage Sun Temple and promote tourism.',
    fullStory: 'Every year during the cool winter evenings of early December, the open-air auditorium beside the mammoth Sun Temple of Konark comes alive with the magical tinkling of Ghungroos and classical melodies. Initiated by Odisha Tourism and eminent Odissi guru Padmavibhushan Kelucharan Mohapatra, the festival features legendary dancers and classical troupes from across the globe performing Odissi, Bharatanatyam, Kathak, Kathakali, Manipuri, and Kuchipudi. The floodlit stone chariot of the Sun God provides a spellbinding backdrop that makes the 800-year-old stone sculptures of the Natya Mandapa appear to have stepped off the walls into living flesh.',
    rituals: [
      'Lighting the sacred inaugural lamp to Surya Deva and Nataraja',
      'Nightly classical dance presentations by Padma awardee exponents',
      'Simultaneous International Sand Art Festival on nearby Chandrabhaga Beach',
      'Craft bazaar showcasing Pipili Applique and stone sculptures',
      'Global convergence of art historians, musicologists, and tourists'
    ],
    traditionalFood: ['Puri Khaja', 'Dalma and Ghee Arwa Rice', 'Coastal fish fry', 'Chenna Poda'],
    culturalSignificance: 'Odisha\'s crown jewel cultural showcase, celebrating the timeless harmony between classical dance, music, and stone architecture.'
  },

  // 20. Behera Parba
  {
    id: 'behera-parba',
    name: 'Behera Parba',
    odiaName: 'ବେହେରା ପର୍ବ',
    slug: 'behera-parba',
    image: '/festivals/behera-parba.jpg?v=4',
    tithi: 'Pre-Monsoon Agricultural Season',
    tithiOdia: 'ପ୍ରାକ୍-ମୌସୁମୀ କୃଷି ଆରମ୍ଭ ପୂର୍ବରୁ',
    season: 'Late Summer (Jyeshtha)',
    region: 'Western Odisha (Sambalpur, Sonepur, Bargarh)',
    primaryDeity: 'Ancestral Village Spirits (Beheras) & Soil Mother',
    summary: 'A sacred community festival honoring clan ancestors, village elders, and the primordial soil spirits protecting rural farmland.',
    whyWeCelebrate: 'To seek the blessings of departed ancestors and guardian village elders for fertility, protection against disease, and peace.',
    fullStory: 'Behera Parba is an ancient rural folk observance in Western and Central Odisha. In rural Odia society, "Behera" denotes the respected village chief or elder who maintains social cohesion and resolves disputes. During Behera Parba, villagers assemble under the sacred village banyan tree (Gramathan). They invoke the blessings of past clan founders and natural guardian spirits with offerings of wild tubers, fresh grain, and unpolished rice. Accompanied by the deep resonance of the Madal and Dhol drums, elders recite the oral genealogies and folk history of the village, ensuring that younger generations never forget their ancestral roots.',
    rituals: [
      'Assembling at the village Gramathan altar under the sacred banyan tree',
      'Ritual cleansing of community agricultural tools and boundary stones',
      'Recitation of ancestral clan ballads by village elders',
      'Folk drumming and rhythmic community group dances',
      'Communal feast prepared with contributions from every household'
    ],
    traditionalFood: ['Arisa Pitha', 'Karadi (tender bamboo shoot curry)', 'Peetha with jaggery', 'Pakhala'],
    culturalSignificance: 'Safeguards oral genealogy, honors communal elders, and anchors social harmony in rural agrarian societies.'
  },

  // 21. Paika Akhada
  {
    id: 'paika-akhada',
    name: 'Paika Akhada & Martial Heritage',
    odiaName: 'ପାଇକ ଆଖଡ଼ା ଓ ସମର କଳା',
    slug: 'paika-akhada',
    image: '/festivals/paika-akhada.jpg?v=4',
    tithi: 'Dussehra & Maha Vishuba Sankranti',
    tithiOdia: 'ଦଶହରା ଓ ମହା ବିଷୁବ ସଂକ୍ରାନ୍ତି',
    season: 'Autumn / Spring Solstice',
    region: 'Khordha, Nayagarh, Puri, Cuttack',
    primaryDeity: 'Goddess Durga, Barabhujha & Mahavir Hanuman',
    summary: 'The thrilling traditional martial arts exhibitions of Odisha\'s peasant-militia warriors (Paikas) who led India\'s first freedom war.',
    whyWeCelebrate: 'To honor the courage of the historic Paika warriors who led the 1817 Paika Rebellion against the British East India Company.',
    fullStory: 'The Paikas ("foot-soldiers") were the legendary agrarian warrior class of Odisha who guarded the Gajapati kingdom for centuries and launched the historic 1817 Paika Rebellion against British colonial rule under Bakshi Jagabandhu—predating the 1857 Sepoy Mutiny by 40 years! During festivals like Dussehra and Sankranti, young boys and veterans from traditional Akhadas (martial arenas) don traditional red dhotis, tiger-print sashes, and brass armlets. To the thunderous beats of Dhumsa war drums and Kahali bugles, they demonstrate jaw-dropping martial arts: spinning heavy iron swords, balancing on swords, staff fighting (Lathi Khela), leaping through flaming hoops, and building multi-tiered human battle pyramids.',
    rituals: [
      'Worship of the traditional weapons (Astra Puja) with vermilion and flowers',
      'Demonstration of sword fighting (Khanda Khela) and shield parries',
      'Acrobatic stick fighting (Lathi Khela) and human battle towers',
      'Leaping through fiery rings and breaking stones on the chest',
      'Chanting martial invocations to Goddess Barabhujha and Mahavir Hanuman'
    ],
    traditionalFood: ['Ghee-roasted sprouted gram (Chana)', 'Poda Pitha for stamina', 'Milk and almond energy drinks', 'Dalma'],
    culturalSignificance: 'A ferocious and magnificent celebration of patriotism, physical discipline, martial agility, and freedom struggle history.'
  },

  // 22. Kalinjar Yatra
  {
    id: 'kalinjar-yatra',
    name: 'Kalinjar Yatra',
    odiaName: 'କାଳିଞ୍ଜର ଯାତ୍ରା',
    slug: 'kalinjar-yatra',
    image: '/festivals/kalinjar-yatra.jpg?v=4',
    tithi: 'Maha Shivaratri & Chaitra Purnima',
    tithiOdia: 'ମହା ଶିବରାତ୍ରି ଓ ଚୈତ୍ର ପୂର୍ଣ୍ଣିମା',
    season: 'Spring / Late Winter',
    region: 'Western Odisha Hill Ranges',
    primaryDeity: 'Lord Shiva (Kalinjara Swamy)',
    summary: 'The mountain cave pilgrimage where devotees trek up steep forested crags with holy water to worship ancient rock lingams.',
    whyWeCelebrate: 'To perform spiritual austerity, conquer worldly desires, and seek inner awakening at the ancient mountain cave shrines of Shiva.',
    fullStory: 'Kalinjar Yatra is celebrated at ancient sacred hill-caverns across the Western and Central borders of Odisha. The name evokes the mythical Kalinjara mountain of Puranic lore where Lord Shiva destroyed the power of Kala (Time and Death). Thousands of pilgrims, clad in unstitched saffron cotton clothes, undertake barefoot mountain treks through sal and mahua forests, carrying pots of holy spring water on their shoulders. Upon reaching the natural rock sanctuaries, they perform sacred Abhisheka of the natural Swayambhu Shivalingams, keeping vigils around bonfires with kirtans echoing across the valleys.',
    rituals: [
      'Barefoot mountain climb carrying water pots on bamboo poles (Bahungi)',
      'Abhisheka of ancient rock-carved Shivalingams with honey, milk, and spring water',
      'Lighting earthen lamps inside sacred natural rock caverns',
      'Night-long Shiva Kirtans with traditional Khanjani instruments',
      'Offering wild forest bilva leaves and forest tubers to the deity'
    ],
    traditionalFood: ['Wild forest fruit offerings', 'Kheer prepared with hill stream water', 'Roasted sweet potatoes', 'Pana'],
    culturalSignificance: 'Preserves the ascetic cave-dwelling traditions of early Tantric Shaivism in Odisha\'s forested interior.'
  },

  // 23. Adapa Mandap Bije
  {
    id: 'adapa-mandap',
    name: 'Adapa Mandap Bije (Gundicha Yatra)',
    odiaName: 'ଆଡ଼ପ ମଣ୍ଡପ ବିଜେ (ଗୁଣ୍ଡିଚା ମନ୍ଦିର)',
    slug: 'adapa-mandap',
    image: '/festivals/adapa-mandap.jpg?v=4',
    tithi: 'Asadha Shukla Panchami (During Rath Yatra)',
    tithiOdia: 'ଆଷାଢ଼ ଶୁକ୍ଳ ପଞ୍ଚମୀ ରାତ୍ରି',
    season: 'Monsoon (Barsha)',
    region: 'Gundicha Temple, Puri',
    primaryDeity: 'Chaturdha Murti (Lord Jagannath, Balabhadra, Subhadra & Sudarshana)',
    summary: 'The holy ritual where the deities enter the Adapa Mandap of Gundicha Temple; Darshan here is said to yield the merit of 100 horse sacrifices.',
    whyWeCelebrate: 'To witness the Lord on the birthplace altar (Janma Bedi) where King Indradyumna first sculpted the deities and where Adapa Abadha is offered.',
    fullStory: 'During the annual Rath Yatra, after reaching the Gundicha Temple, the holy deities remain on their chariots for two days. On the auspicious night of Asadha Shukla Panchami, the sacred "Adapa Mandap Bije" takes place. The servitors carry the massive wooden idols in a rhythmic, swaying procession known as Goti Pahandi from the chariots into the sanctum of the Gundicha Temple, ascending the throne called the "Adapa Mandap" or "Janma Bedi" (birth altar). Puranas declare that seeing Lord Jagannath on the Adapa Mandap bestows spiritual merit ten times greater than seeing Him in the main Puri temple. For the next seven days, the famous "Adapa Abadha" is prepared and distributed to pilgrims.',
    rituals: [
      'Goti Pahandi procession carrying the deities from chariots to the sanctum',
      'Adapa Bije: Consecrating the deities onto the golden Janma Bedi throne',
      'Hera Panchami: The dramatic visit of Goddess Lakshmi protesting her exclusion',
      'Preparation of sacred Adapa Abadha over multi-layered earthen pots',
      'Distribution of Mahaprasad to millions of waiting devotees'
    ],
    traditionalFood: ['Adapa Abadha (rice, dalma, mahura, besara, and sweet kanika)', 'Gundicha Khaja', 'Chhena Jhili'],
    culturalSignificance: 'The philosophical core of Rath Yatra—the return of the Divine to the primordial place of creation and infinite compassion.'
  },

  // 24. Sahi Jatra
  {
    id: 'sahi-jatra',
    name: 'Sahi Jatra (Puri)',
    odiaName: 'ସାହି ଯାତ୍ରା (ପୁରୀ)',
    slug: 'sahi-jatra',
    image: '/festivals/sahi-jatra.jpg?v=4',
    tithi: 'Chaitra Shukla Navami (Rama Navami) to Purnima',
    tithiOdia: 'ଚୈତ୍ର ଶୁକ୍ଳ ନବମୀ (ରାମ ନବମୀ) ରୁ ପୂର୍ଣ୍ଣିମା',
    season: 'Spring (Chaitra)',
    region: 'Grand Road & Traditional Sahis of Puri',
    primaryDeity: 'Lord Rama, Hanuman & Jagannath (Jagannath as Rama)',
    summary: 'An 800-year-old open-air martial drama where the historical military quarters (Sahis) of Puri stage epic street theater with giant demon masks.',
    whyWeCelebrate: 'To celebrate Rama Navami through dramatic martial re-enactment, preserving the ancient warrior gymnastics of the Jagannath temple guardians.',
    fullStory: 'Sahi Jatra is a world-unique open-air street theater tradition that has thrived in the pilgrim town of Puri since the 12th century. The historic town around the Jagannath Temple is divided into seven ancient military sectors called Sahis (Kalikadevi Sahi, Kundhaibenta Sahi, Bali Sahi, Harachandi Sahi, etc.), each established by ancient kings to protect the shrine. Beginning on Rama Navami, each Sahi takes turn enacting an episode of the Ramayana on the Grand Road. Young men don massive, gorgeously hand-carved wooden masks: Ravana with ten majestic tiers of heads, Parashurama wielding his battle-axe, Hanuman with a giant swinging tail, and the demoness Tadaka. The actors engage in fierce martial sword dances and stick duels while moving in procession.',
    rituals: [
      'Each Sahi presenting its specific Ramayana episode on the Grand Road',
      'Donning heritage painted wooden masks weighing up to 25 kg',
      'Acrobatic sword dances and martial stick duels to traditional drums',
      'Procession of the ten-headed demon King Ravana challenging Lord Rama',
      'Celebration of Rama\'s coronation and cosmic victory over adharma'
    ],
    traditionalFood: ['Puri Khaja', 'Rabidi', 'Chhena Poda', 'Pana'],
    culturalSignificance: 'A rare living fusion of martial gymnastics, temple military history, mask craftsmanship, and community theatrical street pride.'
  },

  // 25. Utkal Dibasa
  {
    id: 'utkal-dibasa',
    name: 'Utkal Dibasa (Odisha Day)',
    odiaName: 'ଉତ୍କଳ ଦିବସ (ଓଡ଼ିଶା ଦିବସ)',
    slug: 'utkal-dibasa',
    image: '/festivals/utkal-dibasa.jpg?v=4',
    tithi: '1st of April Annually',
    tithiOdia: 'ପ୍ରତିବର୍ଷ ଏପ୍ରିଲ ୧ ତାରିଖ',
    season: 'Spring (Chaitra/Baisakha)',
    region: 'Statewide and by Odia Diasporas Worldwide',
    primaryDeity: 'Bande Utkala Janani (Mother Odisha)',
    summary: 'Odisha Statehood Day commemorating the formation of Odisha on 1st April 1936 as the very first state formed on linguistic basis in British India.',
    whyWeCelebrate: 'To honor the struggles of great visionary patriots who reunited the scattered Odia-speaking tracts into a unified proud state.',
    fullStory: 'On 1st April 1936, after decades of relentless cultural and intellectual struggle led by the Utkal Sammilani, Odisha was officially carved out of the Bengal, Bihar, and Madras Presidencies, becoming the first state in British India created on a linguistic basis. Visionary leaders like Utkal Gourab Madhusudan Das, Utkalmani Gopabandhu Das, Maharaja Krushna Chandra Gajapati of Paralakhemundi, Fakir Mohan Senapati, and Gangadhar Meher worked tirelessly to preserve the classical Odia language and literature. Today, Utkal Dibasa is celebrated with statewide pride, colorful cultural pageants, poetry festivals, and the solemn collective singing of the state anthem "Bande Utkala Janani" (Glory to Mother Utkala).',
    rituals: [
      'Singing the official State Anthem: "Bande Utkala Janani"',
      'Garlanding statues of Utkal Gourab Madhusudan Das and Gopabandhu Das',
      'Statewide cultural symposia, Odissi recitals, and literary conferences',
      'Awarding state honors to eminent Odia writers, artists, and social pioneers',
      'Public distribution of Odia sweets across educational and government institutions'
    ],
    traditionalFood: ['Authentic Pakhala Thali with Badi Chura and Macha Bhaja', 'Chhena Poda', 'Rasagola', 'Pitha'],
    culturalSignificance: 'A proud celebration of linguistic heritage, cultural unity, and the enduring resilience of the Odia identity.'
  },

  // 26. Mahari Dance
  {
    id: 'mahari-dance',
    name: 'Mahari Dance (Sacred Temple Dance)',
    odiaName: 'ମାହାରୀ ନୃତ୍ୟ (ପବିତ୍ର ମନ୍ଦିର ନୃତ୍ୟ)',
    slug: 'mahari-dance',
    image: '/festivals/mahari-dance.jpg?v=4',
    tithi: 'Daily Temple Sevayat Rituals & Special Parvas',
    tithiOdia: 'ପ୍ରତିଦିନ ସକାଳ ଧୂପ ଓ ବଡ଼ସିଂହାର ବେଶ ସମୟରେ',
    season: 'Perennial Sacred Heritage',
    region: 'Shree Jagannath Temple, Puri',
    primaryDeity: 'Lord Jagannath (Divine Beloved)',
    summary: 'The primordial devotional temple dance of the consecrated female servitors of Lord Jagannath; the direct divine mother of classical Odissi.',
    whyWeCelebrate: 'To honor the centuries-old tradition of pure devotional surrender, where the dancer performs exclusively as the spiritual bride of the Lord.',
    fullStory: 'Mahari dance is the sacred, ancient ritual dance form that was performed exclusively inside the sanctum sanctorum of the Jagannath Temple in Puri. The dancers, known as Maharis (from "Maha-Nari" meaning great women or "Mahan-Rupini"), were consecrated temple servitors wedded to Lord Jagannath. Unlike court dances meant for human entertainment, the Mahari danced purely for the pleasure of the Divine. In the morning during Sakar Dhupa, they performed energetic rhythmic Nrutya to awaken the deities; at night during Badasinghara Besha, they performed delicate, emotive Abhinaya singing verses from Jayadeva\'s Gita Govinda to lull the Lord to sleep. Their spiritual postures, eye movements, and hand mudras served as the foundational bedrock from which modern classical Odissi dance was reconstructed.',
    rituals: [
      'Gita Govinda Abhinaya performed with deep spiritual ecstasy',
      'Adorning the sacred traditional Sambalpuri and Khandua silk sarees',
      'Wearing the silver crown (Tahiya) and authentic temple gold jewelry',
      'Offering pure devotional surrender (Madhura Bhakti) before the altar',
      'Preserving ancient palm-leaf dance treatises like Abhinaya Chandrika'
    ],
    traditionalFood: ['Mahaprasad Nirmalya', 'Kora Khai', 'Gopal Bhoga', 'Sweet Chhena Gaja'],
    culturalSignificance: 'The pure, unadulterated spiritual wellspring of Odissi dance, blending high philosophy, Bhakti, and aesthetic grace.'
  },

  // 27. Gotipua Dance
  {
    id: 'gotipua-dance',
    name: 'Gotipua Dance Heritage',
    odiaName: 'ଗୋଟିପୁଅ ନୃତ୍ୟ ପରମ୍ପରା',
    slug: 'gotipua-dance',
    image: '/festivals/gotipua-dance.jpg?v=4',
    tithi: 'Chandan Yatra, Jhulan Yatra & Village Melas',
    tithiOdia: 'ଚନ୍ଦନ ଯାତ୍ରା, ଝୁଲଣ ଯାତ୍ରା ଓ ବସନ୍ତ ମେଳା',
    season: 'Spring and Summer',
    region: 'Raghurajpur Heritage Village & Puri District',
    primaryDeity: 'Lord Jagannath & Radha Krishna',
    summary: 'The traditional acrobatic dance performed by young boys dressed as maiden girls, famous for breathtaking Bandhas mimicking temple sculptures.',
    whyWeCelebrate: 'To celebrate the divine romantic and devotional pastimes of Radha and Krishna through youthful energy, devotion, and supreme physical flexibility.',
    fullStory: 'Gotipua (literally meaning "single boy" in Odia) is a centuries-old dance tradition nurtured in traditional village gymnasiums (Akhadas) of Puri, particularly in the heritage village of Raghurajpur. Initiated during the 16th century by King Ramachandra Deva, young boys aged 6 to 14 are trained rigorously in physical acrobatics, rhythm, and devotion. Dressed exquisitely in female attire with traditional blouses, Kanchula handloom dhotis, floral headgear, and painted feet, the Gotipuas perform intricate rhythmic footwork to the beats of the Mardala drum. Their signature marvel is the "Bandha Nrutya"—forming jaw-dropping acrobatic postures, backbends, and multi-tier human arches that mirror the stone apsaras carved on Konark and Jagannath temples.',
    rituals: [
      'Rigorous daily training in traditional village Akhadas from childhood',
      'Elaborate makeup, hair styling with fresh flowers, and female costume dressing',
      'Executing complex acrobatic Bandhas (lotus, chariot, and arch postures)',
      'Singing Odia Champu and Chhanda poetry while performing dynamic footwork',
      'Performing during the holy Chandan Yatra processions and village carnivals'
    ],
    traditionalFood: ['Poda Pitha', 'Chhena Gaja', 'Khiri (rice pudding)', 'Manda Pitha'],
    culturalSignificance: 'The vital historical bridge that kept Odia classical dance alive through colonial disruptions, celebrated globally for unbelievable flexibility.'
  },

  // 28. Danda Nacha
  {
    id: 'danda-nacha',
    name: 'Danda Nacha & Meru Parba',
    odiaName: 'ଦଣ୍ଡ ନାଚ ଓ ମେରୁ ପର୍ବ',
    slug: 'danda-nacha',
    image: '/festivals/danda-nacha.jpg?v=4',
    tithi: 'Chaitra Month culminating on Meru Sankranti (April)',
    tithiOdia: 'ଚୈତ୍ର ମାସରୁ ଆରମ୍ଭ ହୋଇ ପଣା ସଂକ୍ରାନ୍ତି (ମେରୁ) ରେ ଶେଷ',
    season: 'Peak Summer (Chaitra/Baisakha)',
    region: 'Ganjam, Nayagarh, Boudh, Dhenkanal',
    primaryDeity: 'Lord Shiva (Hara) & Goddess Gauri (Parvati)',
    summary: 'One of India\'s most intense physical penance dances where barefoot Danduas walk on burning coals and scorching sand to conquer ego.',
    whyWeCelebrate: 'To perform extreme ascetic penance, eliminate pride, pray for healing from severe diseases, and invoke rainfall and fertile harvests.',
    fullStory: 'Danda Nacha is an ancient religious penance festival celebrated with unmatched devotion in Southern and Central Odisha, particularly in Ganjam. Devotees participating in the vow are called "Danduas" or "Bhoktas". For 13, 18, or 21 days, they abandon family life, observe strict celibacy, eat only one simple vegetarian meal a day, and undergo grueling bodily penances divided into three distinct phases: Dhuli Danda (acrobatic yoga postures executed on blazing summer midday sand), Pani Danda (standing submerged in deep pond water singing prayers), and Agni Danda (walking over glowing charcoal embers and swinging upside down over burning herbal pyres). The festival culminates on Meru Sankranti amidst ecstatic beating of Dhol drums.',
    rituals: [
      'Dhuli Danda: Rigorous acrobatic postures on blistering hot noon sands',
      'Pani Danda: Cold water meditation standing submerged in temple ponds',
      'Agni Danda: Fearless walking over red-hot charcoal embers and fire swings',
      'Worship of the two sacred Danda poles representing Hara and Gauri',
      'Night-time comic and devotional folk theater featuring Prabha, Chadheya, and Patara Saura'
    ],
    traditionalFood: ['Bela Pana', 'Moong Dal boiled without oil or salt', 'Seasonal watermelon and cucumber', 'Pakhala'],
    culturalSignificance: 'A fierce spiritual crucible proving that faith and mental discipline can transcend all bodily pain and worldly attachment.'
  },

  // 29. Tula Yatra
  {
    id: 'tula-yatra',
    name: 'Tula Yatra (Autumn Harvest Balance)',
    odiaName: 'ତୁଳା ଯାତ୍ରା',
    slug: 'tula-yatra',
    image: '/festivals/tula-yatra.jpg?v=4',
    tithi: 'Tula Sankranti (Mid-October)',
    tithiOdia: 'ତୁଳା ସଂକ୍ରାନ୍ତି ଦିନ (କାର୍ତ୍ତିକ ମାସ ପ୍ରବେଶ)',
    season: 'Autumn (Sarat)',
    region: 'Southern & Coastal Odisha',
    primaryDeity: 'Sun God, Goddess Lakshmi & Village Deities',
    summary: 'The harvest balance festival celebrating ecological equilibrium, fair trade, and weighing of grains for the divine.',
    whyWeCelebrate: 'To celebrate the celestial balance of day and night, offering newly formed grain kernels to deities and praying for ethical trade and abundance.',
    fullStory: 'Tula Sankranti marks the entrance of the Sun into the zodiac sign of Libra (Tula), which symbolizes the balance scale. In ancient Odia culture, this coincided with the paddy fields filling with milk in the newly forming grain stalks (Dhana Gira). Farmers and merchants gather to worship giant balance scales (Tula) used in trading houses. They weigh newly formed paddy kernels, freshly harvested sesame, and jaggery against the stone idol of Goddess Lakshmi, thanking the divine for fair weight, honest trade, and abundant seasonal harvest. In rural temples, grand ceremonial palanquins carrying village deities are placed on wooden swings to symbolize cosmic equilibrium.',
    rituals: [
      'Worshipping the balance scales (Tula Danda) with vermilion, paddy, and flowers',
      'Offering the newly formed milky grain (Kshira Dhana) to Goddess Lakshmi',
      'Distributing seasonal sweet rice pudding and jaggery pitha to community workers',
      'Ritual balancing of deities on decorative swings',
      'Prayers for honest commercial ethics and equitable agricultural distribution'
    ],
    traditionalFood: ['Tula Pitha', 'Kheer made with newly formed rice grains', 'Sweet puffed lia', 'Steamed sweet potatoes'],
    culturalSignificance: 'A rare celebration of commercial honesty, fair trade, ecological balance, and agrarian gratitude.'
  },

  // 30. Bhabani Yatra
  {
    id: 'bhabani-yatra',
    name: 'Bhabani Yatra (Chhatar Yatra)',
    odiaName: 'ଭବାନୀ ଯାତ୍ରା (ଛତର ଯାତ୍ରା)',
    slug: 'bhabani-yatra',
    image: '/festivals/bhabani-yatra.jpg?v=4',
    tithi: 'Maha Ashtami of Durga Puja (October)',
    tithiOdia: 'ଆଶ୍ୱିନ ଶୁକ୍ଳ ମହାଷ୍ଟମୀ ରାତ୍ରି ଓ ନବମୀ ପ୍ରଭାତ',
    season: 'Autumn (Sharad)',
    region: 'Bhawanipatna, Kalahandi District',
    primaryDeity: 'Maa Manikeswari (Maa Bhabani)',
    summary: 'The electrifying annual procession of Maa Manikeswari where over 300,000 devotees escort the Goddess\'s royal parasol to the sound of Ghumura drums.',
    whyWeCelebrate: 'To celebrate the triumphant royal homecoming of Goddess Manikeswari (Bhabani) after defeating demonic forces on Vijayadashami night.',
    fullStory: 'Celebrated with breathtaking passion in Bhawanipatna, the royal capital of Kalahandi, the Bhabani Yatra (famously called Chhatar Yatra) is one of Eastern India\'s most mammoth tribal-tantric gatherings. At midnight on Maha Ashtami, the secret ritual worship of the presiding deity, Goddess Manikeswari (Bhabani), takes place inside the temple sanctum. Early in the morning before dawn, the Goddess\'s sacred royal parasol (Chhatar) is carried in a 3 km triumphant procession from the hilltop temple of Jenakhal back to the main royal palace palace shrine. Over 300,000 devotees line the streets, and hundreds of traditional Ghumura drummers play their circular clay and monitor-lizard-skin drums in hypnotic, thundering rhythm, while devotees release white doves into the sky for peace and divine blessings.',
    rituals: [
      'Nisitha Puja: Midnight esoteric Tantric worship of Maa Manikeswari',
      'Carrying the sacred flower-adorned royal Chhatar in dawn procession',
      'Thunderous Ghumura martial drumming performances by warrior troupes',
      'Releasing white doves into the autumn sky symbolizing liberation and peace',
      'Nagar Parikrama: The Goddess entering the royal palace palace court to bless the people'
    ],
    traditionalFood: ['Royal Mahaprasad', 'Chaul Bara with spicy tomato chutney', 'Arisa Pitha', 'Sweet Khiri'],
    culturalSignificance: 'A powerful testament to the unbreakable bond between indigenous tribal culture and royal Sanatana heritage in Western Odisha.'
  }
];
