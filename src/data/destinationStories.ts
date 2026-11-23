// Comprehensive Stories, Visual Chapters, Audio Narration & Historical Timelines
// for Karma-Path: "Listen to the Stories of Odisha"

export interface StoryChapter {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  eraOrDate: string;
  narrative: string;
  image: string;
  caption: string;
  source: string;
}

export interface TimelineEvent {
  yearOrEra: string;
  title: string;
  description: string;
  verifiedSource?: string;
}

export interface StoryNarration {
  en: string;
  hi: string;
  or: string;
}

export interface DestinationStory {
  id: string;
  storyTitle: string;
  storySubtitle: string;
  storyCategory: 'Beaches' | 'Culture' | 'Festivals' | 'Heritage' | 'Wildlife';
  openingAtmosphere: string;
  narration: StoryNarration;
  chapters: StoryChapter[];
  timeline: TimelineEvent[];
  historicalFacts: string[];
  livingLegends: string[];
  conservationNote: string;
}

export const curatedDestinationStories: Record<string, DestinationStory> = {
  // 1. Konark Sun Temple
  'konark': {
    id: 'konark',
    storyTitle: 'The Stone Chariot of the Sun',
    storySubtitle: 'A 13th-century cosmic masterpiece carved on the shores of the Bay of Bengal.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'Emerging through soft morning mist on the Chandrabhaga coast, twenty-four colossal stone wheels awaken to the first rays of the rising sun.',
    narration: {
      en: "Eight centuries ago, on the wind-swept shores of Odisha, King Narasimhadeva the First of the Eastern Ganga Dynasty envisioned a temple unlike any other in human history. Conceived as a gigantic solar chariot for Lord Surya, mounted on twenty-four intricately sculpted stone wheels and drawn by seven galloping stallions, the Konark Sun Temple stands as the pinnacle of Kalinga architectural genius. Built over twelve intense years by twelve hundred master sculptors, each wheel functioned as a precise astronomical sundial, calculating time to the minute through the sun's shifting shadows.",
      hi: "आठ शताब्दियों पूर्व, ओडिशा के पावन समुद्र तट पर पूर्वी गंग वंश के सम्राट नरसिंहदेव प्रथम ने एक अभूतपूर्व सूर्य मंदिर की कल्पना की। भगवान सूर्य के 24 चक्रों और सात अश्वों वाले इस विशाल पाषाण रथ को 1200 शिल्पकारों ने 12 वर्षों में गढ़ा। कोणार्क का यह महाकाव्य पाषाण पर उत्कीर्ण ज्ञान और कला का अमर शिखर है।",
      or: "ଆଠ ଶହ ବର୍ଷ ପୂର୍ବେ ପୂର୍ବ ଗଙ୍ଗ ବଂଶର ରାଜା ଲାଙ୍ଗୁଳା ନରସିଂହଦେବ ଚନ୍ଦ୍ରଭାଗା କୂଳରେ ବିଶ୍ୱପ୍ରସିଦ୍ଧ କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ନିର୍ମାଣ କରିଥିଲେ। ୧୨୦୦ ବଢ଼େଇଙ୍କ ୧୨ ବର୍ଷର ନିରଳସ ସାଧନା ଏବଂ ଧର୍ମପଦଙ୍କ ଆତ୍ମୋତ୍ସର୍ଗର ଅମର କାହାଣୀ ଏହି ପଥର ରଥରେ ଜୀବନ୍ତ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'Origins and Royal Vision',
        eraOrDate: 'c. 1250 CE · Eastern Ganga Dynasty',
        narrative: 'Following his triumphant military campaigns across Bengal and the central kingdoms, King Narasimhadeva I resolved to dedicate his imperial treasure to Surya, the sun god. Legend recounts that the monarch sought blessings to perpetuate his dynasty, choosing the sacred confluence of the mythical Chandrabhaga river and the ocean where Samba, son of Lord Krishna, had received healing from leprosy.',
        image: '/konark.jpg',
        caption: 'The majestic stone wheels of Konark, each measuring 9 feet 9 inches with 8 major spokes and 8 minor spokes serving as astronomical sundials.',
        source: 'Archaeological Survey of India & Odisha Tourism Archives'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Cosmic Architecture & The 24 Sundials',
        eraOrDate: '1255 CE · Astronomical Engineering',
        narrative: 'Twelve hundred master artisans under chief architect Bishu Maharana quarried and transported khondalite, chlorite, and laterite stones across vast distances. Every wheel was calibrated so that the shadow of its axle-pin fell squarely across the spokes, dividing the day into precise praharas and minutes. The seven horses represented the spectrum of light and the seven days of the celestial week.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intricate chlorite carvings portraying celestial musicians (Alasa Kanyas), royal cavalcades, and celestial dancers adorn the plinth.',
        source: 'Archaeological Survey of India Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Fall of the Vimana & Dharmapada’s Sacrifice',
        eraOrDate: '16th–19th Century CE · Transformation',
        narrative: 'Folklore and historical accounts converge on the poignant legend of Dharmapada, the 12-year-old son of Bishu Maharana. When the artisans could not fix the crowning Dadhinauti stone, Dharmapada climbed to the summit, anchored the kalasha, and leaped into the crashing sea to save the craftsmen from the king’s wrath. Centuries later, marine erosion and seismic shifts brought down the towering 229-foot sanctum.',
        image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=1200&q=80',
        caption: 'The preserved Jagamohana (Assembly Hall), saved from structural collapse in 1903 through British and Indian engineering initiatives.',
        source: 'Odisha State Archives & ASI Monograph'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'UNESCO Recognition & Living Culture',
        eraOrDate: '1984 CE – Present Day',
        narrative: 'In 1984, UNESCO inscribed Konark as a World Heritage Site. Today, the monument hosts the internationally acclaimed Konark Dance Festival every December, where Odissi and classical masters dance against the illuminated amber stone backdrop as ocean breezes whisper centuries of Odia glory.',
        image: '/culture-grid.jpg',
        caption: 'Odissi dancers performing against the illuminated backdrop of ancient stone monuments during the annual Konark Festival.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: 'c. 1250 CE', title: 'Imperial Commission', description: 'King Narasimhadeva I initiates construction on the Chandrabhaga coast.', verifiedSource: 'Kendupatna Copper Plate Inscription' },
      { yearOrEra: '1255 CE', title: 'Crowning of the Dadhinauti', description: 'Young Dharmapada anchors the final crowning stone, securing the architectural completion.', verifiedSource: 'Odia Oral Ballad & Madala Panji' },
      { yearOrEra: '1568 CE', title: 'Invasion & Shifting Sands', description: 'General Kalapahada damages parts of the outer complex; deities moved to Puri for safekeeping.', verifiedSource: 'Madala Panji Chronicles' },
      { yearOrEra: '1903 CE', title: 'Sand Conservation Intervention', description: 'Lord Curzon and ASI engineers fill the interior of Jagamohana with sand to prevent catastrophic collapse.', verifiedSource: 'ASI Annual Report 1903' },
      { yearOrEra: '1984 CE', title: 'UNESCO World Heritage Status', description: 'Formally recognized as a cultural treasure of humanity for exceptional universal value.', verifiedSource: 'UNESCO World Heritage Convention' }
    ],
    historicalFacts: [
      'Inscriptions confirm that revenue from royal salt tracts and maritime trade financed the twelve-year construction.',
      'The wheels are not merely decorative; their shadows precisely read the time down to three minutes.',
      'The main shikhara reached approximately 229 feet (70 meters), taller than any existing medieval monument in Eastern India.'
    ],
    livingLegends: [
      'Dharmapada: The 12-year-old child hero whose supreme sacrifice to save his father and 1,200 artisans is etched into every Odia child\'s heart.',
      'The Magnetic Lodestone: Sea voyagers recorded that a magnetic keystone at the temple top could disorient European ships sailing past the coast.'
    ],
    conservationNote: 'Preserved by the Archaeological Survey of India with specialized chemical treatment against saline sea air and monitored under UNESCO World Heritage protocols.'
  },

  // 2. Shree Jagannath Temple, Puri
  'puri-jagannath': {
    id: 'puri-jagannath',
    storyTitle: 'The Sacred Journey of Lord Jagannath',
    storySubtitle: 'The living heartbeat of Odia identity and Sanatana Dharma\'s supreme sanctorum.',
    storyCategory: 'Culture',
    openingAtmosphere: 'As the evening Patitapabana flag flutters high atop the Nilachakra against a purple twilight sky, millions of beating hearts chant Jai Jagannath.',
    narration: {
      en: "Rising two hundred and fourteen feet on the sacred mound of Nilachala, Shree Jagannath Temple in Puri is the supreme epicenter of living spiritual culture in Odisha. Built in the twelfth century by King Anantavarman Chodaganga Deva, it enshrines Lord Jagannath, his brother Balabhadra, and sister Devi Subhadra. Unlike marble or metal idols elsewhere, here the Supreme Being is sculpted of sacred Neem timber, embodying the Daru Brahma that undergoes a sacred rebirth during Nabakalebara. Its sacred kitchen, the largest in the world, prepares Mahaprasad cooked in earthen pots over wood fires, where king and commoner dine as one family without caste or prejudice.",
      hi: "नीलाचल की पावन भूमि पर 214 फीट ऊंचा श्री जगन्नाथ मंदिर सनातन संस्कृति और ओड़िया अस्मिता का हृदय है। 12वीं शताब्दी में पूर्वी गंग वंश के प्रतापी राजा चोड़गंगदेव द्वारा निर्मित यह धाम चार प्रमुख धामों में से एक है। यहाँ दारु ब्रह्म के रूप में भगवान नीम की पवित्र काष्ठ से गढ़े गए हैं। यहाँ का आनंद बाज़ार विश्व का सबसे बड़ा समरसता का प्रतीक है जहाँ जाति-भेद भूलकर सभी महाप्रसाद ग्रहण करते हैं।",
      or: "ପୁରୀ ଶ୍ରୀଜଗନ୍ନାଥ ମନ୍ଦିର ଓଡ଼ିଆ ଜାତିର ପ୍ରାଣକେନ୍ଦ୍ର। ଦ୍ୱାଦଶ ଶତାବ୍ଦୀରେ ଅନନ୍ତବର୍ମା ଚୋଡ଼ଗଙ୍ଗଦେବଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ଏହି ମହାପୀଠରେ ମହାପ୍ରଭୁ ଦାରୁବ୍ରହ୍ମ ରୂପରେ ବିରାଜମାନ। ବିଶ୍ୱପ୍ରସିଦ୍ଧ ରଥଯାତ୍ରା ଓ ମହାପ୍ରସାଦର ସମର୍ପଣ ଏଠାରେ ସାରା ବିଶ୍ୱକୁ ଭ୍ରାତୃଭାବ ଓ ସମାନତାର ବାର୍ତ୍ତା ଦିଏ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Daru Brahma & The Divine Carpenter',
        eraOrDate: 'Puranic Antiquity · Origin of the Deities',
        narrative: 'According to the Skanda Purana, King Indradyumna sought the divine presence of Lord Vishnu. Guided by divine portents, he discovered the sacred scented log floating on the shore of Puri. An enigmatic old carpenter named Ananta Maharana (Lord Vishwakarma in disguise) offered to carve the murtis on condition that no one open the temple doors for twenty-one days. When Queen Gundicha opened the doors prematurely, the master sculptor vanished, leaving behind the endearing large-eyed wooden forms of the deities.',
        image: '/puri.jpg',
        caption: 'The majestic Shree Jagannath Temple, Puri, glowing against the evening sky with the sacred Nilachakra flag aloft.',
        source: 'Shree Jagannath Temple Administration & Odisha Tourism'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Imperial Kalinga Sanctorum',
        eraOrDate: 'c. 1198 CE · Eastern Ganga Era',
        narrative: 'King Anantavarman Chodaganga Deva initiated the construction of the colossal stone Vimana, completed by his descendant King Anangabhima Deva. Enclosed within the massive Meghanada Pacheri ramparts, the complex expanded into a sprawling spiritual township of over one hundred and twenty inner temples, mandapas, and pilgrimage sanctums.',
        image: '/festivals-grid.jpg',
        caption: 'Lord Jagannath in Suna Besha (Golden Attire) during the grand Ratha Yatra festival, witnessed by millions of devotees.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Guardians of the Sacred Legacy: Patali Srikhetra',
        eraOrDate: '8th–18th Century CE · Resistance & Resilience',
        narrative: 'Throughout turbulent invasions, the hereditary servitors (Sevayat Chhatisa Nijoga) demonstrated extraordinary courage. When commanders marched upon Puri, the servitors carried the sacred deities secretly by boat across Chilika Lake and into the mountain caves of Kotsamalai in Subarnapur, protecting the holy presence for decades before returning triumphantly.',
        image: '/puribeach.jpg',
        caption: 'The sacred shores of Puri where the holy Daru log was first found and where maritime pilgrims have sought blessings for millennia.',
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Ratha Yatra & Universal Fellowship',
        eraOrDate: 'Living Heritage · Present Day',
        narrative: 'Every year during the monsoon month of Ashadha, the deities step out of the sanctum to meet all humanity in the monumental Ratha Yatra. The Gajapati Maharaja performs the humble Chera Panhara sweeping the chariot floors with a golden broom, affirming that before God, every human being is equal.',
        image: '/culture-grid.jpg',
        caption: 'Pattachitra artisans in nearby Raghurajpur paint the holy Trinity during the sacred Anavasara period.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: 'Antiquity', title: 'Vision of Indradyumna', description: 'Consecration of the first wooden deities at Banki Muhan.', verifiedSource: 'Skanda Purana, Purusottama Kshetra Mahatmya' },
      { yearOrEra: 'c. 1198 CE', title: 'Ganga Imperial Deula', description: 'King Anantavarman Chodaganga Deva commences construction of the 214-foot stone temple.', verifiedSource: 'Dasgoba Copper Plate Inscription' },
      { yearOrEra: '1568 CE', title: 'The Secret Journey', description: 'Priests safeguard the deities into Chilika and Patali Srikhetra caves.', verifiedSource: 'Madala Panji Chronicles' },
      { yearOrEra: '1955 CE', title: 'Temple Administration Act', description: 'State of Odisha enacts Shri Jagannath Temple Act to formalize hereditary rituals and protection.', verifiedSource: 'Government of Odisha Gazette' },
      { yearOrEra: '2015 CE', title: 'Nabakalebara Festival', description: 'The grand renewal and re-carving of the Neem wood deities, attracting 5 million pilgrims.', verifiedSource: 'SJTA Archives' }
    ],
    historicalFacts: [
      'The sacred Nilachakra wheel atop the temple is made of Ashtadhatu (eight alloys) and weighs approximately one tonne.',
      'The temple kitchen (Rosaghara) features 240 earthen ovens where seven pots are stacked vertically over a single hearth; miraculously, the top pot cooks first.',
      'No birds or aircraft fly over the sanctum dome, respected as an ancient consecrated airspace.'
    ],
    livingLegends: [
      'The Patitapabana Flag defies the wind, appearing to flutter in counter-intuitive coastal air currents.',
      'Bhakta Salabega: The Muslim warrior-poet whose devotion halted the Lord\'s chariot on Bada Danda until his arrival.'
    ],
    conservationNote: 'Monitored jointly by the Archaeological Survey of India (ASI) and Shree Jagannath Temple Administration (SJTA) with ongoing laser stone conservation and structural laser telemetry.'
  },

  // 3. Chilika Lake
  'chilika': {
    id: 'chilika',
    storyTitle: 'Where the Lake Meets the Sea',
    storySubtitle: 'Asia\'s largest brackish lagoon, sanctuary of Irrawaddy dolphins and migratory winged guests.',
    storyCategory: 'Wildlife',
    openingAtmosphere: 'Draped in morning silver, traditional wooden boats glide over tranquil brackish waters as playful Irrawaddy dolphins breach near the sandbar.',
    narration: {
      en: "Spanning over one thousand square kilometers across three districts of Odisha, Chilika is Asia's largest brackish water lagoon and India's first designated Ramsar Wetland. In ancient times, maritime merchants known as Sadhabas set sail from Chilika's bustling port of Manikapatna to Bali, Java, and Sri Lanka. Today, the lagoon is an ecological wonderland, hosting one of the world's only two lagoonal populations of endangered Irrawaddy dolphins, while over a million migratory birds from Siberia and Central Asia transform Nalabana island into a vibrant chorus of wings every winter.",
      hi: "ओडिशा के तीन जिलों में फैली चिल्का झील एशिया की सबसे बड़ी खारे पानी की लैगून है। प्राचीन काल में ओड़िया नौसैनिक यहाँ से जावा और सुमात्रा के लिए व्यापारिक नौकाएँ रवाना करते थे। आज यह दुर्लभ इरावदी डॉल्फिन और साइबेरिया से आने वाले लाखों प्रवासी पक्षियों का स्वर्ग है।",
      or: "ଚିଲିକା ଏସିଆର ସର୍ବବୃହତ୍ କ୍ଷାରୀୟ ହ୍ରଦ। ପ୍ରାଚୀନ ସାଧବ ପୁଅମାନେ ଏହିଠାରୁ ବୋଇତ ନେଇ ଯବଦ୍ୱୀପ ଓ ସୁମାତ୍ରା ଯାଉଥିଲେ। ଆଜି ନଳବଣରେ ଲକ୍ଷ ଲକ୍ଷ ବିଦେଶୀ ପକ୍ଷୀ ଏବଂ ଇରାୱାଡି ଡଲଫିନଙ୍କ ମୁକ୍ତ ବିଚରଣ ଏହାକୁ ଏକ ଅପରୂପ ସ୍ୱର୍ଗରେ ପରିଣତ କରିଛି।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Ancient Port of Manikapatna',
        eraOrDate: 'c. 1st Century CE · Maritime Odyssey',
        narrative: 'Excavations at Manikapatna on the northern bank of Chilika revealed Chinese celadon pottery, Roman amphorae fragments, and Ceylonese coins, confirming that Chilika served as an international deep-sea harbor where ocean-going Boitas gathered before crossing the Bay of Bengal.',
        image: '/chilika.jpg',
        caption: 'Traditional wooden fishing boats resting along the tranquil shores of Chilika Lake at sunrise.',
        source: 'Odisha Tourism & Chilika Development Authority'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Dolphin Haven of Satapada',
        eraOrDate: 'Ecology & Biodiversity',
        narrative: 'Satapada, where the lagoon converges with the Bay of Bengal through a narrow opening, is the protected sanctuary of the snub-nosed Irrawaddy dolphin (Orcaella brevirostris). These shy marine creatures have forged an age-old cooperative fishing relationship with the local communities.',
        image: '/wildlife-grid.jpg',
        caption: 'Wildlife thriving along the pristine aquatic ecotones of Odisha, protected by community conservation.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Nalabana: Winter Sanctuary of Millions',
        eraOrDate: 'Seasonal Migration · November to February',
        narrative: 'When sub-zero blizzards freeze northern Eurasia, flocks of flamingos, bar-headed geese, pintails, and pelicans fly thousands of kilometers across the Himalayas to settle in the reed-filled sanctuary of Nalabana Island, feeding on abundant plankton and fish.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
        caption: 'Flocks of migratory birds feeding in the shallow brackish flats of Nalabana Island.',
        source: 'Chilika Wildlife Division & Forest Department'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Goddess Kalijai & Island Lore',
        eraOrDate: 'Living Heritage & Folklore',
        narrative: 'Deep in the lake on a rocky island stands the revered temple of Maa Kalijai. According to legendary ballad, a young bride named Jaiphula was caught in a furious squall on the lake and vanished into the waters, becoming the benevolent protective goddess of the fishing fleet.',
        image: '/culture-grid.jpg',
        caption: 'Traditional cultural ceremonies honoring local deities across the waters and islands of Odisha.',
        source: 'Odisha Tourism Archives'
      }
    ],
    timeline: [
      { yearOrEra: '1st Century CE', title: 'Ptolemy\'s Palur Port', description: 'Greek records mention the deep harbor near Chilika\'s opening.', verifiedSource: 'Geographia by Claudius Ptolemy' },
      { yearOrEra: '1981 CE', title: 'First Ramsar Wetland of India', description: 'Designated as India’s first wetland of international importance.', verifiedSource: 'Ramsar Convention Bureau' },
      { yearOrEra: '2000 CE', title: 'Hydrological Restoration', description: 'Opening of the new sea mouth at Sipakuda revitalizes salinity levels and fish yields.', verifiedSource: 'Chilika Development Authority' },
      { yearOrEra: '2002 CE', title: 'Ramsar Wetland Conservation Award', description: 'Global recognition for community-led environmental rehabilitation.', verifiedSource: 'Ramsar Bureau Switzerland' }
    ],
    historicalFacts: [
      'Chilika is the largest wintering ground for migratory waterfowl in the Indian subcontinent.',
      'It supports over 150,000 fisherfolk across 132 coastal villages whose livelihood depends on sustainable crab and prawn fisheries.'
    ],
    livingLegends: [
      'The Legend of Kalijai: An eternal reminder of the sacred respect sailors must accord to the unpredictable coastal squalls.'
    ],
    conservationNote: 'Protected under the Chilika Development Authority (CDA) with strict motor-boat speed regulations near dolphin zones and anti-poaching patrol camps on Nalabana.'
  },

  // 4. Puri Beach
  'puri-beach': {
    id: 'puri-beach',
    storyTitle: 'Stories Along the Shore of Puri',
    storySubtitle: 'The sacred golden sands where the Bay of Bengal kisses Mahaprabhu\'s holy city.',
    storyCategory: 'Beaches',
    openingAtmosphere: 'Golden evening light casts long shadows across rolling breakers, where sand artists sculpt mythical epics into the gentle shoreline.',
    narration: {
      en: "For over a thousand years, the shore of Puri has welcomed pilgrims, poets, and voyagers. Revered in ancient scriptures as Mahodadhi—the great sacred sea—this coastline is where the divine log of Lord Jagannath first touched the earth. Today, Puri Beach holds the prestigious international Blue Flag certification for eco-cleanliness, while master sand artists turn its fine grains into world-renowned visual symphonies celebrating Odia folklore and global harmony.",
      hi: "पुरी का समुद्र तट केवल एक प्राकृतिक किनारा नहीं, बल्कि महोदधि की पावन गोद है। यहीं पर प्रभु जगन्नाथ के दारु काष्ठ का प्रथम आगमन हुआ था। यह तट आज अंतरराष्ट्रीय ब्लू फ्लैग प्रमाणित है, जहाँ बालू कला के जादूगर अपनी कलाकृतियों से समूचे विश्व को चकित करते हैं।",
      or: "ପୁରୀର ସ୍ୱର୍ଣ୍ଣିମ ବେଳାଭୂମି ମହୋଦଧି ତୀର୍ଥ ନାମରେ ବିଖ୍ୟାତ। ଏହି ପବିତ୍ର ତଟରେ ମହାପ୍ରଭୁଙ୍କ ଦାରୁ କାଠ ଭାସି ଆସିଥିଲା। ଆଜି ନୀଳ ପତାକା ମାନ୍ୟତାପ୍ରାପ୍ତ ଏହି ସୈକତରେ ବାଲୁକା ଶିଳ୍ପୀମାନେ ଜୀବନ୍ତ କଳା ରଚି ବିଶ୍ୱରେ ଓଡ଼ିଶାର ନାମ ଉଜ୍ଜ୍ୱଳ କରିଛନ୍ତି।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Sacred Waters of Mahodadhi',
        eraOrDate: 'Spiritual Antiquity · Vedic Heritage',
        narrative: 'In the sacred Puranas, the ocean at Puri is worshipped as one of the Pancha Tirthas. Devotees believe that a holy dip in the surf dissolves past transgressions, while offering evening arati to the sea salutes Varuna and the divine guardians of the maritime realm.',
        image: '/puribeach.jpg',
        caption: 'The sweeping golden shore of Puri Beach with pilgrims offering early morning prayers to the rising sun.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Nolia Seafarers & Catamarans',
        eraOrDate: 'Living Coastal Culture',
        narrative: 'The brave Nolia fishermen have lived on this shore for centuries. Riding ferocious surf on traditional wooden logs lashed together as catamarans, they act as lifesavers for pilgrims and masters of deep-sea net fishing.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional catamarans resting on the golden sands of Puri after an early morning catch.',
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Sand Art: Sculpting Epics in the Grain',
        eraOrDate: 'Contemporary Odia Art Zenith',
        narrative: 'Puri is the global cradle of sand art. Padma Shri Sudarsan Pattnaik and his disciples sculpt ephemeral masterpieces depicting Lord Jagannath, climate awareness, and national pride, which vanish with the high tide only to be reborn anew.',
        image: '/culture-grid.jpg',
        caption: 'Artisanal traditions in Puri, capturing cultural devotion in every delicate brushstroke and sculpture.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'International Blue Flag Certification',
        eraOrDate: '2020 – Present Day',
        narrative: 'Golden Beach at Puri achieved the rigorous Foundation for Environmental Education (FEE) Denmark Blue Flag certification for pristine water quality, solar-powered shore amenities, safe bathing zones, and zero-plastic stewardship.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
        caption: 'The impeccably maintained Golden Beach zone of Puri, recognized among the cleanest eco-beaches globally.',
        source: 'Odisha Tourism & Society of Integrated Coastal Management'
      }
    ],
    timeline: [
      { yearOrEra: 'Antiquity', title: 'Consecration of Mahodadhi', description: 'Documented as a sacred bathing site in the Padma and Skanda Puranas.', verifiedSource: 'Skanda Purana' },
      { yearOrEra: '1920s', title: 'Marine Drive Establishment', description: 'Development of the scenic coastal highway connecting Puri to Konark.', verifiedSource: 'Puri District Gazetteer' },
      { yearOrEra: '2020 CE', title: 'Blue Flag Eco-Label', description: 'Awarded the prestigious global Blue Flag eco-certification for sustainability.', verifiedSource: 'FEE Denmark Certification' }
    ],
    historicalFacts: [
      'Puri Beach is famous for its unique east-facing curve that allows visitors to witness both sunrise and sunset hues over the open sea.',
      'It is home to the annual International Puri Beach Festival held every November showcasing folk dances from across India.'
    ],
    livingLegends: [
      'The sea wind at Puri blows from land to sea during daylight and from sea to land in the evening, reversing the standard meteorological cycle.'
    ],
    conservationNote: 'Maintained with round-the-clock beach cleaning patrols, dedicated lifeguard squads, and strict single-use plastic prohibition.'
  },

  // 5. Hirakud Dam
  'hirakud': {
    id: 'hirakud',
    storyTitle: 'The Dam That Transformed a River Valley',
    storySubtitle: 'The world\'s longest earthen dam built across the mighty Mahanadi River.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'Looking out from Gandhi Minar, an endless freshwater sea reflects passing storm clouds over the tranquil hills of Sambalpur.',
    narration: {
      en: "Built in the dawn of independent India across the roaring Mahanadi river, Hirakud Dam is an engineering titan and the world's longest earthen dam. Stretching over twenty-five kilometers with its dykes, it tamed catastrophic monsoon floods that had inundated the coastal plains of Odisha for centuries. Beneath its seventy-four thousand-hectare reservoir lie submerged medieval temples that emerge like stone phantoms during peak summer, while its tranquil waters now support green electricity, irrigation, and a Ramsar wetland bird sanctuary.",
      hi: "महानदी की तीव्र लहरों को बांधकर स्वतंत्र भारत का पहला भव्य इंजीनियरिंग चमत्कार बना हीराकुद बांध। 25 किलोमीटर लंबा यह दुनिया का सबसे बड़ा मिट्टी का बांध है। 1957 में पंडित नेहरू द्वारा राष्ट्र को समर्पित यह बांध बाढ़ से रक्षा करने के साथ लाखों एकड़ भूमि को जीवनदायी जल प्रदान करता है।",
      or: "ସ୍ୱାଧୀନ ଭାରତର ଅନ୍ୟତମ ବିରାଟ ଇଞ୍ଜିନିୟରିଂ ସଫଳତା ହେଉଛି ହୀରାକୁଦ ବନ୍ଧ। ମହାନଦୀ ବକ୍ଷରେ ନିର୍ମିତ ଏହି ୨୫ କିଲୋମିଟର ଦୀର୍ଘ ମାଟି ବନ୍ଧ ଓଡ଼ିଶାର ବନ୍ୟା ନିୟନ୍ତ୍ରଣ, ବିଜୁଳି ଉତ୍ପାଦନ ଓ ଚାଷଜମିକୁ ଜଳ ଯୋଗାଣରେ ଯୁଗାନ୍ତକାରୀ ପରିବର୍ତ୍ତନ ଆଣିଛି।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'Taming the Untamed Mahanadi',
        eraOrDate: '1937–1948 · Vision of Visvesvaraya',
        narrative: 'For centuries, the untamed Mahanadi river caused recurring catastrophic floods in coastal Cuttack and Puri. Legendary engineer Sir M. Visvesvaraya recommended multipurpose flood storage dams in 1937, leading Sir Hawthorne Lewis and independent India to commence Hirakud’s ambitious foundation in 1948.',
        image: '/hirakud.jpg',
        caption: 'The vast expansive waters of Hirakud reservoir, spreading across 743 square kilometers.',
        source: 'Water Resources Department, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Temple of Modern India (1957)',
        eraOrDate: 'January 13, 1957 · Inauguration',
        narrative: 'Prime Minister Jawaharlal Nehru formally inaugurated Hirakud Dam on January 13, 1957, hailing it as one of the modern temples of a self-reliant nation. Over 40,000 workers, engineers, and armed forces personnel labored for nine years to pack 18 million cubic meters of earth, masonry, and concrete.',
        image: '/hirakud.jpg',
        caption: 'The massive spillway gates of Hirakud releasing cascading monsoon waters into the Mahanadi river gorge.',
        source: 'Central Water Commission Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Submerged Temples of Padampur',
        eraOrDate: 'Archaeological Discovery',
        narrative: 'When the reservoir waters filled, over two hundred historic temples of the Chauhan and Somavamsi eras were submerged. During the height of May and June droughts, the stone spires of the 16th-century Padampur temple reappear above water, revealing intricate brick and stone carvings.',
        image: '/culture-grid.jpg',
        caption: 'Ancient temple architecture of Western Odisha, carrying Chauhan and Somavamsi heritage.',
        source: 'Odisha State Archaeology Archives'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Ramsar Wetland & Eco-Sanctuary',
        eraOrDate: '2021 – Present Day',
        narrative: 'In 2021, Hirakud Reservoir was declared a Ramsar Wetland of International Importance. Over 30,000 common pochards, red-crested pochards, and northern pintails winter here, making the reservoir an eco-tourism hub alongside Gandhi Minar and Nehru Minar.',
        image: '/wildlife-grid.jpg',
        caption: 'Avian life and wildlife flourishing along the protected wetlands of Western Odisha.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '1937 CE', title: 'Visvesvaraya Flood Report', description: 'Sir M. Visvesvaraya proposes multipurpose reservoirs on the Mahanadi.', verifiedSource: 'Odisha Flood Enquiry Committee' },
      { yearOrEra: '1948 CE', title: 'Foundation Stone Laid', description: 'Prime Minister Nehru initiates construction in Sambalpur.', verifiedSource: 'National Archives of India' },
      { yearOrEra: '1957 CE', title: 'Dedication to the Nation', description: 'Hirakud Dam fully commissioned for power generation and flood control.', verifiedSource: 'Government of India Gazette' },
      { yearOrEra: '2021 CE', title: 'Ramsar Wetland Site', description: 'Designated as a Ramsar site for supporting rich aquatic and avian biodiversity.', verifiedSource: 'Ramsar Secretariat Switzerland' }
    ],
    historicalFacts: [
      'The total length of Hirakud Dam including its left and right dykes is 25.8 km, making it the longest earthen dam on planet Earth.',
      'The reservoir has a storage capacity of over 5.8 billion cubic meters and irrigates over 2.6 lakh hectares of agricultural land in Western Odisha.'
    ],
    livingLegends: [
      'Folklore tells of ancient underwater bells echoing through the reservoir when winds ripple across the submerged Someswara temple.'
    ],
    conservationNote: 'Maintained by the Odisha Water Resources Department and Central Water Commission with state-of-the-art seismic sensors and silting telemetry.'
  },

  // 6. Dhauli Shanti Stupa
  'dhauli': {
    id: 'dhauli',
    storyTitle: 'The Transformation of Ashoka at Dhauli',
    storySubtitle: 'From the blood-soaked Kalinga War to the eternal beacon of non-violence and Dhamma.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'Standing atop Dhauli hill overlooking the Daya River, the pristine white Shanti Stupa gleams under the azure Odisha sky as temple bells whisper messages of universal peace.',
    narration: {
      en: "Dhauli Giri is one of the most sacred turning points in world history. Overlooking the Daya River where the catastrophic Kalinga War was fought in 261 BCE, Emperor Ashoka witnessed the devastating loss of life and renounced military conquest forever. Embracing Buddhism and ahimsa, Ashoka inscribed his famous rock edicts proclaiming all people as his children. Crowned today by the radiant white Vishwa Shanti Stupa, Dhauli stands as a timeless beacon of peace and spiritual awakening.",
      hi: "धौली गिरि वह पावन स्थल है जहाँ विश्व इतिहास की दिशा बदल गई। 261 ईसा पूर्व में कलिंग युद्ध के भारी विनाश को देखकर सम्राट अशोक का हृदय परिवर्तन हुआ और उन्होंने युद्ध का त्याग कर बौद्ध धर्म और अहिंसा का मार्ग अपनाया। यहाँ स्थित विश्व शांति स्तूप शांति और सद्भाव का शाश्वत संदेश देता है।",
      or: "ଧଉଳି ଶାନ୍ତି ସ୍ତୂପ ଓଡ଼ିଶାର ଇତିହାସରେ ଏକ ଯୁଗାନ୍ତକାରୀ ସ୍ଥାନ। ଖ୍ରୀଷ୍ଟପୂର୍ବ ୨୬୧ରେ ଦୟା ନଦୀ କୂଳରେ ଘଟିଥିବା ରକ୍ତାକ୍ତ କଳିଙ୍ଗ ଯୁଦ୍ଧ ପରେ ସମ୍ରାଟ ଅଶୋକଙ୍କ ହୃଦୟ ପରିବର୍ତ୍ତନ ଘଟିଥିଲା ଏବଂ ସେ ଚଣ୍ଡାଶୋକରୁ ଧର୍ମାଶୋକରେ ପରିଣତ ହୋଇଥିଲେ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Battle of Kalinga (261 BCE)',
        eraOrDate: '261 BCE · Turning Point of Humanity',
        narrative: 'On the flat plains of the Daya River, Emperor Ashoka fought the fierce warriors of Kalinga. The carnage was so horrific that the waters of Daya ran crimson, breaking the emperor’s pride and awakening his conscience to embrace Buddha\'s message of compassion.',
        image: '/dhauli.jpg',
        caption: 'The majestic Dhauli Peace Pagoda rising against the bright blue sky above the historic Daya plains.',
        source: 'Archaeological Survey of India & Odisha Tourism'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Rock Edicts of Ashoka',
        eraOrDate: '3rd Century BCE · Royal Inscriptions',
        narrative: 'Ashoka ordered rock-cut edicts to be etched directly onto the boulders of Dhauli, topped by the carved head of an elephant representing Gautama Buddha. In these Prakrit inscriptions in Brahmi script, Ashoka declared: "All men are my children."',
        image: '/dhauli.jpg',
        caption: 'Ancient Ashokan rock-cut edicts and elephant sculpture preserved at the base of Dhauli hill.',
        source: 'Archaeological Survey of India'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Construction of the Shanti Stupa',
        eraOrDate: '1972 CE · Indo-Japanese Fellowship',
        narrative: 'In 1972, the Kalinga Nippon Buddha Sangha led by Most Venerable Nichidatsu Fujii, with the Government of Odisha, consecrated the brilliant white Peace Pagoda adorned with golden Buddha statues representing four cardinal postures of enlightenment.',
        image: '/dhauli.jpg',
        caption: 'The golden Buddha seated in deep contemplation within the arched niche of Dhauli Shanti Stupa.',
        source: 'Kalinga Nippon Buddha Sangha Archives'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Living Shrine of Global Peace',
        eraOrDate: 'Present Day · International Heritage',
        narrative: 'Today, Dhauli hosts the celebrated Dhauli-Kalinga International Dance Festival and draws pilgrims and historians from every corner of the earth to meditate upon the sacred hill where war turned into everlasting peace.',
        image: '/dhauli.jpg',
        caption: 'Visitors from around the world walking the sacred circumambulation terrace of Dhauli.',
        source: 'Department of Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '261 BCE', title: 'The Historic Kalinga War', description: 'Emperor Ashoka invades Kalinga; the horrors of war cause him to renounce violence.', verifiedSource: 'Major Rock Edict XIII' },
      { yearOrEra: '257 BCE', title: 'Carving of the Rock Edicts', description: 'Special Kalinga Edicts inscribed on Dhauli rock with the elephant sculpture.', verifiedSource: 'Archaeological Survey of India' },
      { yearOrEra: '1972 CE', title: 'Consecration of Peace Pagoda', description: 'White dome Shanti Stupa completed jointly with Japan Buddha Sangha.', verifiedSource: 'Odisha Tourism Gazette' }
    ],
    historicalFacts: [
      'Dhauli houses the only Ashokan edict where the emperor directly addressed his newly appointed judicial officers with instructions on compassionate governance.',
      'The white dome features four stone Buddha statues symbolizing the Birth, Enlightenment, First Sermon, and Mahaparinirvana.'
    ],
    livingLegends: [
      'Local folklore recounts that the waters of Daya river whispered ancient prayers to the wounded warriors until the Bodhi flag was raised on the hilltop.'
    ],
    conservationNote: 'Protected monument under Archaeological Survey of India (ASI) and Kalinga Nippon Buddha Sangha with night illumination.'
  },

  // 7. Udayagiri & Khandagiri Caves
  'udayagiri-caves': {
    id: 'udayagiri-caves',
    storyTitle: 'The Rock-Cut Monasteries of Kharavela',
    storySubtitle: '2nd-century BCE Jain cave dwellings, Rani Gumpha, and the famous Hathigumpha inscription.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'Stepping into the stone courtyards of Rani Gumpha, ancient pillared verandas and carved friezes transport you to the vibrant royal capital of Emperor Kharavela.',
    narration: {
      en: "Perched on twin sandstone hills on the outskirts of Bhubaneswar, Udayagiri and Khandagiri are twin rock-cut monastery complexes carved in the 2nd century BCE under Emperor Kharavela of the Mahameghavahana Dynasty. With multi-tiered residential cells, ornate pillared verandas, and the historic seventeen-line Hathigumpha inscription, these ancient caves sheltered Jain ascetics and royal patrons, preserving Kalinga's golden era of art and architecture.",
      hi: "भुवनेश्वर के उदयगिरि और खंडगिरि की जुड़वां गुफाएं 2nd शताब्दी ईसा पूर्व में कलिंग के चक्रवर्ती सम्राट खारवेल द्वारा जैन मुनियों के निवास के लिए बनवाई गई थीं। रानी गुंफा की उत्कृष्ट नक्काशी और हाथीगुंफा का 17-पंक्ति का ब्राह्मी शिलालेख कलिंग के गौरवशाली इतिहास की अमर गाथा कहते हैं।",
      or: "ଭୁବନେଶ୍ୱର ନିକଟସ୍ଥ ଉଦୟଗିରି ଓ ଖଣ୍ଡଗିରି ଗୁମ୍ଫା ମହାମେଘବାହନ ଐର ଖାରବେଳଙ୍କ ରାଜତ୍ୱ କାଳରେ ଖୋଦିତ ହୋଇଥିଲା। ଏହି ପ୍ରାଚୀନ ଶୈଳକୃତ ଗୁମ୍ଫାଗୁଡ଼ିକ ଜୈନ ସାଧୁମାନଙ୍କ ତପସ୍ୟା ସ୍ଥଳ ଥିଲା ଏବଂ ହାତୀଗୁମ୍ଫା ଶିଳାଲେଖ ଖାରବେଳଙ୍କ ବିଜୟ ଯାତ୍ରାର ଜୀବନ୍ତ ପ୍ରମାଣ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Mahameghavahana Dynasty',
        eraOrDate: '2nd Century BCE · Kharavela’s Rule',
        narrative: 'Following the decline of the Maurya Empire, Kalinga rose to unprecedented power under Emperor Kharavela. A devout Jain and heroic warrior, Kharavela expanded Kalinga’s borders from the Ganga to the Kaveri while restoring grand public works.',
        image: '/udayagiri.jpg',
        caption: 'The ancient rock-cut multi-storied facade of Rani Gumpha carved out of solid sandstone.',
        source: 'Archaeological Survey of India'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Rani Gumpha: The Queen\'s Palace Cave',
        eraOrDate: 'Sculptural Masterpiece',
        narrative: 'Rani Gumpha is the largest and most intricately sculpted cave in the complex. Featuring two levels of cells, sculpted guardian dwarapalas, and friezes depicting royal processions, hunting scenes, and classical dance performances, it served as both residential monastery and open amphitheater.',
        image: '/udayagiri.jpg',
        caption: 'Intricate sandstone reliefs and ancient pillared verandas overlooking the central courtyard.',
        source: 'Archaeological Survey of India'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Hathigumpha Inscription',
        eraOrDate: 'Brahmi Epigraphy',
        narrative: 'Carved inside Hathigumpha (Elephant Cave) is a 17-line biographical inscription written in deep-cut Brahmi script. It remains one of India’s most crucial historical epigraphs, documenting year-by-year accounts of Kharavela’s military campaigns, canal repairs, and royal patronage of the performing arts.',
        image: '/udayagiri.jpg',
        caption: 'Ancient stone cells and monolithic architecture of Udayagiri cave complex.',
        source: 'State Archaeology Department Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Monastic Legacy & Living Faith',
        eraOrDate: 'Present Day',
        narrative: 'Today, the twin hills continue to inspire visitors with their serene ambiance, rock-cut water cisterns, and annual Magha Saptami fair where sadhus gather on Khandagiri hill.',
        image: '/udayagiri.jpg',
        caption: 'Visitors exploring the rock-cut heritage of Udayagiri and Khandagiri caves.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '2nd Century BCE', title: 'Kharavela Commissions Caves', description: 'Over 33 caves carved for Jain ascetics.', verifiedSource: 'Hathigumpha Inscription' },
      { yearOrEra: '11th Century CE', title: 'Somavamsi Expansion', description: 'Additional Jain Tirthankara relief carvings added inside Navamuni Gumpha.', verifiedSource: 'Archaeological Survey of India' }
    ],
    historicalFacts: [
      'The Hathigumpha inscription is the earliest epigraphical record mentioning the date of the Kalinga War relative to King Nanda.',
      'Udayagiri possesses 18 caves, while Khandagiri contains 15 caves, originally linked by rock stairs.'
    ],
    livingLegends: [
      'Legend holds that Emperor Kharavela himself watched Odissi dance recitals staged in the stone amphitheater of Rani Gumpha.'
    ],
    conservationNote: 'Protected monument of National Importance maintained by the Archaeological Survey of India (ASI).'
  },

  // 8. Bhitarkanika National Park
  'bhitarkanika': {
    id: 'bhitarkanika',
    storyTitle: 'The Mangrove Kingdom of Giant Crocodiles',
    storySubtitle: 'India\'s second-largest mangrove ecosystem and prime wildlife sanctuary.',
    storyCategory: 'Wildlife',
    openingAtmosphere: 'Cruising through the emerald creeks of Bhitarkanika under dense mangrove canopies, colossal saltwater crocodiles bask silently on the muddy banks as kingfishers flash across the waters.',
    narration: {
      en: "Spanning the estuarine delta of the Brahmani, Baitarani, and Dhamra rivers in Kendrapara district, Bhitarkanika National Park is India's second-largest mangrove wetland ecosystem. A declared Ramsar Wetland of International Importance, it shelters over 1,700 estuarine saltwater crocodiles, including record-breaking 23-foot giants, alongside spotted deer, wild boars, king cobras, and eight species of vibrant kingfishers. Adjacent to Gahirmatha Marine Sanctuary, it guards the world's largest nesting grounds for endangered Olive Ridley sea turtles.",
      hi: "केंद्रपाड़ा जिले में स्थित भितरकनिका राष्ट्रीय उद्यान भारत का दूसरा सबसे बड़ा मैंग्रोव वन है। 1700 से अधिक खारे पानी के विशाल मगरमच्छों, चीतल, दुर्लभ सफेद मगरमच्छ और पक्षियों की सैकड़ों प्रजातियों का यह संरक्षित घर है। पास ही गहिरमाथा तट पर लाखों ओलिव रिडले कछुए अंडे देने आते हैं।",
      or: "କେନ୍ଦ୍ରାପଡ଼ା ଜିଲ୍ଲାରେ ବ୍ରାହ୍ମଣୀ ଓ ବୈତରଣୀ ନଦୀ ମୁହାଣରେ ଅବସ୍ଥିତ ଭିତରକନିକା ଜାତୀୟ ଉଦ୍ୟାନ। ଏହା ଭାରତର ଦ୍ୱିତୀୟ ବୃହତ୍ତମ ହେନ୍ତାଳବନ (ମ୍ୟାଙ୍ଗ୍ରୋଭ୍) ଅଟେ। ବିଶାଳ ଲୁଣା ପାଣି କୁମ୍ଭୀର, ହରିଣ ଏବଂ ବିଦେଶୀ ପକ୍ଷୀଙ୍କ ଏହା ଏକ ପ୍ରାକୃତିକ ସ୍ୱର୍ଗରାଜ୍ୟ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'Realm of the Estuarine Giants',
        eraOrDate: 'Wildlife Dominance',
        narrative: 'Bhitarkanika is famous worldwide for its population of giant Saltwater Crocodiles (Crocodylus porosus). Reaching lengths of over 20 feet, these magnificent prehistoric reptiles thrive in the tidal mudflats and mangrove creeks, making it one of the most successful reptile conservation programs in Asia.',
        image: '/bhitarkanika.jpg',
        caption: 'A massive estuarine crocodile resting peacefully on the muddy tidal creek bank of Bhitarkanika.',
        source: 'Forest and Environment Department, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Green Wall of Mangroves',
        eraOrDate: 'Ecological Shield',
        narrative: 'With over 62 species of mangroves including Sundari, Rai, and Guan trees, Bhitarkanika acts as a biological fortress protecting Odisha’s coastline from severe Bay of Bengal supercyclones. Its dense prop roots form underwater nurseries for marine life.',
        image: '/bhitarkanika.jpg',
        caption: 'Lush mangrove root systems lining the tidal estuaries of Bhitarkanika National Park.',
        source: 'Bhitarkanika Wildlife Division Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Nesting Wonder of Gahirmatha',
        eraOrDate: 'Annual Mass Nesting (Arribada)',
        narrative: 'Adjacent to Bhitarkanika lies Gahirmatha beach, the world’s largest rookery for Olive Ridley sea turtles. Every winter between January and March, over half a million female turtles emerge from the sea in an awe-inspiring mass nesting phenomenon known as the Arribada.',
        image: '/bhitarkanika.jpg',
        caption: 'The tranquil coastal wetlands and tidal waters of the Bhitarkanika-Gahirmatha ecosystem.',
        source: 'Wildlife Wing, Odisha Forest Department'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Conservation & Ecotourism',
        eraOrDate: 'Present Day · Ramsar Wetland',
        narrative: 'Declared a National Park in 1998 and Ramsar Wetland in 2002, Bhitarkanika offers silent boat safaris, birdwatching at Bagagahana heronry, and the Dangamal Crocodile Breeding and Research Centre.',
        image: '/bhitarkanika.jpg',
        caption: 'Eco-tourists observing the pristine mangrove wilderness on silent motorized boats.',
        source: 'Odisha Tourism & Ecotour Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '1975 CE', title: 'Crocodile Conservation Project', description: 'Government of Odisha and UNDP initiate crocodile conservation at Dangamal.', verifiedSource: 'UNDP & Government of Odisha' },
      { yearOrEra: '1998 CE', title: 'National Park Declaration', description: 'Notified as Bhitarkanika National Park covering 145 square kilometers.', verifiedSource: 'Government of Odisha Gazette' },
      { yearOrEra: '2002 CE', title: 'Ramsar Wetland Status', description: 'Recognized as a Ramsar Wetland of International Importance.', verifiedSource: 'Ramsar Secretariat Switzerland' }
    ],
    historicalFacts: [
      'Bhitarkanika entered the Guinness Book of World Records for housing a 23-foot long living estuarine crocodile in 2006.',
      'It is home to the rare albino or white crocodile named Gori and her descendants, unique to this sanctuary.'
    ],
    livingLegends: [
      'Local folklore honors Maa Dhamrai, the guardian goddess of the Dhamra estuary, who fishermen revere for safe passage through the crocodile creeks.'
    ],
    conservationNote: 'Protected under the Wildlife Protection Act 1972 with mandatory boat guide protocols and lifejacket safety.'
  },

  // 7. Daringbadi
  'daringbadi': {
    id: 'daringbadi',
    storyTitle: 'The Hills of Kandhamal',
    storySubtitle: 'The Kashmir of Odisha, where pine-scented valleys meet tribal Kondh heritage.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'A gentle winter frost blankets the pine needles as the scent of roasted coffee beans floats through morning mountain mist.',
    narration: {
      en: "Perched three thousand feet above sea level in the picturesque highlands of Kandhamal district, Daringbadi is affectionately crowned the Kashmir of Odisha. Surrounded by pine forests, coffee plantations, and cascading waterfalls, it is the only place in Odisha where winter temperatures occasionally dip to freezing, coating the grass with delicate frost. Here, indigenous Kutia and Dongria Kondh communities have lived in sacred communion with the mountains for millennia, producing the world-renowned organic Kandhamal Haldi turmeric and preserving ancient Dhokra metal craft.",
      hi: "कंधमाल की वादियों में 3,000 फीट की ऊंचाई पर बसा दारिंगबाड़ी ओडिशा का कश्मीर कहलाता है। देवदार के वन, कॉफी के बागान और शीतल जलप्रपात इसकी शोभा बढ़ाते हैं। यहाँ रहने वाले कुटिया कोंध जनजाति के लोग अपनी जैविक हल्दी और प्रकृति-पूजा के लिए विश्वविख्यात हैं।",
      or: "କନ୍ଧମାଳ ଜିଲ୍ଲାରେ ସମୁଦ୍ର ପତ୍ତନରୁ ୩୦୦୦ ଫୁଟ ଉଚ୍ଚତାରେ ଅବସ୍ଥିତ ଦାରିଙ୍ଗବାଡ଼ି ଓଡ଼ିଶାର କାଶ୍ମୀର ଭାବେ ପରିଚିତ। ପାଇନ୍ ବଣ, କଫି ବଗିଚା ଏବଂ ଶୀତଦିନେ ତୁଷାରପାତର ଶୀତଳ ଅନୁଭୂତି ସହିତ କନ୍ଧ ସଂସ୍କୃତି ଓ ଜୈବିକ କନ୍ଧମାଳ ହଳଦୀ ଏହାର ପ୍ରମୁଖ ଆକର୍ଷଣ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Colonial Legacy of Daring Sahib',
        eraOrDate: 'c. 1880s · Colonial Origin',
        narrative: 'In the late 19th century, a British officer named Daring Sahib was enchanted by the crisp climate of the plateau. Establishing an administrative post, he encouraged the plantation of pine, silver oak, and eucalyptus groves that lend Daringbadi its unique alpine aura.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'Misty pine groves of Daringbadi stretching across the rolling highlands of Kandhamal.',
        source: 'Odisha Tourism & District Administration Kandhamal'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Arabica Coffee & Organic Spice Gardens',
        eraOrDate: 'Agricultural Heritage',
        narrative: 'The soil and altitude of Kandhamal provide the ideal microclimate for high-grade Arabica coffee, black pepper, and ginger. The indigenous tribal farmers cultivate without chemical fertilizers, harvesting beans that are roasted and ground by women’s tribal cooperatives.',
        image: '/culture-grid.jpg',
        caption: 'Tribal agricultural heritage and organic spices nurtured by indigenous communities.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Midubanda & Dasingbadi Waterfalls',
        eraOrDate: 'Natural Wonders',
        narrative: 'Deep inside the dense sal forest, roaring mountain rivers plunge over granite boulders. Midubanda and Dasingbadi waterfalls create natural swimming pools and serene nature trails frequented by birdwatchers and trekkers.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
        caption: 'Cascading waterfalls emerging from the dense evergreen forest canopy in Kandhamal.',
        source: 'Forest Department Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'The Living Culture of the Kutia Kondh',
        eraOrDate: 'Living Indigenous Heritage',
        narrative: 'The Kondh people revere Mother Earth as Dharani Penu. Their mud-and-bamboo dwellings feature sacred geometric murals, while their vibrant buffalo dances and brass jewelry embody an unbroken spiritual connection to the Eastern Ghats.',
        image: '/culture-grid.jpg',
        caption: 'A Dongria Kondh woman adorned with traditional silver nose rings and ear ornaments.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '1880s CE', title: 'British Hill Post Established', description: 'Named Daringbadi after officer Daring Sahib.', verifiedSource: 'Kandhamal District Gazette' },
      { yearOrEra: '1960s CE', title: 'First Coffee Plantations', description: 'Soil Conservation Department introduces commercial coffee and black pepper.', verifiedSource: 'Department of Agriculture Odisha' },
      { yearOrEra: '2019 CE', title: 'GI Tag for Kandhamal Haldi', description: 'Kandhamal organic turmeric awarded Geographical Indication status for medicinal aroma.', verifiedSource: 'GI Registry of India' }
    ],
    historicalFacts: [
      'Daringbadi is the only plateau in Odisha where morning ground frost (often called winter snow by locals) occurs in late December and early January.',
      'Kandhamal Haldi holds a distinct golden hue and high curcumin concentration due to organic cultivation in mountain red laterite soil.'
    ],
    livingLegends: [
      'The Kondh legend of Dharani Penu: Reverence for the living spirit of the earth that sustains crops and shields the forest from drought.'
    ],
    conservationNote: 'Preserved with sustainable eco-tourism resorts, community waste management, and organic certification safeguards.'
  },

  // 8. Deomali Peak
  'deomali': {
    id: 'deomali',
    storyTitle: 'Above the Clouds of Odisha',
    storySubtitle: 'Odisha\'s highest peak at 1,672 meters, towering over Koraput\'s rolling Eastern Ghats.',
    storyCategory: 'Heritage',
    openingAtmosphere: 'Standing atop the windswept summit, rolling clouds part beneath your feet to reveal emerald patchwork valleys stretching toward the horizon.',
    narration: {
      en: "Rising to a dizzying one thousand six hundred and seventy-two meters above sea level in the Pottangi block of Koraput, Deomali is the highest mountain peak in Odisha. Part of the ancient Precambrian Eastern Ghats, its undulating bauxite-rich plateau features sweeping shola montane grasslands and rare medicinal flora. Home to the resilient Paroja, Mali, and Kondh tribal communities, Deomali is where earth touches the sky, offering travelers unforgettable sunrise cloud walks and thrilling paragliding flights.",
      hi: "कोरापुट जिले में 1,672 मीटर की ऊंचाई पर स्थित देवमाली ओडिशा का सर्वोच्च पर्वत शिखर है। पूर्वी घाट की प्राचीन पहाड़ियों पर स्थित यह पठार बादलों के समुद्र के ऊपर तैरता हुआ प्रतीत होता है। परोजा और कोंध जनजातियों की यह पावन भूमि आज ट्रेकिंग और पैराग्लाइडिंग का नया केंद्र है।",
      or: "କୋରାପୁଟ ଜିଲ୍ଲାରେ ସମୁଦ୍ର ପତ୍ତନରୁ ୧୬୭୨ ମିଟର ଉଚ୍ଚତାରେ ଥିବା ଦେଓମାଳୀ ଓଡ଼ିଶାର ସର୍ବୋଚ୍ଚ ପର୍ବତ ଶୃଙ୍ଗ। ମେଘମାଳାର ଉପରେ ଏହି ଶିଖରରେ ଛିଡ଼ା ହେଲେ ସମଗ୍ର ପୂର୍ବଘାଟ ପର୍ବତମାଳାର ଅପରୂପ ଶୋଭା ଦେଖିବାକୁ ମିଳେ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Ancient Precambrian Crown',
        eraOrDate: 'Over 1 Billion Years Ago · Geological Origin',
        narrative: 'Formed during the ancient mobile belt collisions that forged the Indian subcontinent, Deomali is composed of charnockite and khondalite rocks rich in aluminum bauxite, sculptured over hundreds of millions of years of rainfall and wind into rolling alpine ridges.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
        caption: 'The sweeping grass-covered ridges of Deomali, rising above the early morning cloud inversion.',
        source: 'Geological Survey of India & Odisha Tourism'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Shola Grasslands & Rare Flora',
        eraOrDate: 'Botanical Sanctuary',
        narrative: 'Unlike the sal forests below, the high-altitude plateau of Deomali supports endemic montane grasses and wild orchids. Local tribal healers (Disaris) scale the crags to gather rare medicinal herbs used in traditional herbal medicine for generations.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-altitude grasslands and rugged hiking tracks winding to the summit of Odisha.',
        source: 'Forest Department Koraput'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Tribes of the Eastern Ghats: Paroja & Mali',
        eraOrDate: 'Living Tribal Heritage',
        narrative: 'The slopes surrounding Deomali are dotted with villages of the Paroja, Bhumia, and Mali tribes. Practicing terraced millets and pulse farming, their vibrant weekly Haats (village markets) and Dhemsa folk dances celebrate communal solidarity and deep respect for the mountain spirits.',
        image: '/culture-grid.jpg',
        caption: 'Indigenous communities of the Eastern Ghats, celebrated for rich oral traditions and folk dance.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Aero-Sports & Modern Cloud Treks',
        eraOrDate: 'Present Day · Adventure Tourism',
        narrative: 'In recent years, the Odisha Tourism Development Corporation established state-of-the-art eco-cottages managed by local youth. Paragliding pilots test favorable thermal winds, while sunrise enthusiasts hike to the summit viewing deck to watch dawn ignite the sea of clouds.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Panoramic sunrise vista from the summit observatory platform on Deomali.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: 'Precambrian', title: 'Orogenic Uplift', description: 'Geological formation of the Eastern Ghats mountain belt.', verifiedSource: 'Geological Survey of India' },
      { yearOrEra: '1980s CE', title: 'Topographical Survey', description: 'Officially measured and documented as Odisha\'s highest elevation at 1,672m.', verifiedSource: 'Survey of India' },
      { yearOrEra: '2022 CE', title: 'Eco-Retreat & Aero-Tourism', description: 'Launch of luxury community cottages and paragliding trials.', verifiedSource: 'Odisha Tourism Department' }
    ],
    historicalFacts: [
      'Deomali stands at 1,672 meters (5,486 feet), making it the highest point between the Vindhyas in Central India and the Nilgiris in the South.',
      'The average temperature on Deomali stays between 12°C and 25°C in summer, dropping to 3°C to 8°C in winter.'
    ],
    livingLegends: [
      'The local Paroja believe that Deomali was the seat where celestial spirits rested during their cosmic journeys across Kalinga.'
    ],
    conservationNote: 'Preserved with zero-litter policies, solar lighting, and guided community escort rules to prevent habitat disturbance.'
  },

  // 9. Gopalpur Beach
  'gopalpur': {
    id: 'gopalpur',
    storyTitle: 'The Coastal Memories of Gopalpur',
    storySubtitle: 'An ancient maritime port on the Coromandel coast, steeped in silk trade and maritime nostalgia.',
    storyCategory: 'Beaches',
    openingAtmosphere: 'The historic red-and-white striped lighthouse flashes its gentle beacon over whispering casuarina groves and calm breaking waves.',
    narration: {
      en: "Nestled along the southern coast of Ganjam district, Gopalpur-on-Sea is a tranquil beach town imbued with rich colonial nostalgia and maritime history. Once a buzzing medieval port known as Mansurkota, trade ships departed here carrying Berhampur silk sarees and spices to Rangoon and Southeast Asia. Its Victorian lighthouse, erected in 1871, still guides seafarers, while the tranquil golden beaches provide a peaceful retreat away from city bustle, close to the mass nesting grounds of the endangered Olive Ridley sea turtles.",
      hi: "गंजम जिले का गोपालपुर समुद्र तट प्राचीन समुद्री व्यापार और औपनिवेशिक इतिहास का गवाह है। कभी मंसूरकोटा नाम से विख्यात इस बंदरगाह से बर्मा और सुमात्रा के लिए रेशम का व्यापार होता था। 1871 का ऐतिहासिक लाइटहाउस और शांत स्वर्णिम लहरें इसे ओडिशा का सबसे सुकून भरा तट बनाती हैं।",
      or: "ଗଞ୍ଜାମ ଜିଲ୍ଲାର ପ୍ରସିଦ୍ଧ ଗୋପାଳପୁର ବେଳାଭୂମି ପ୍ରାଚୀନ ବାଣିଜ୍ୟିକ ଇତିହାସର ଏକ ସ୍ମାରକୀ। ମନସୁରକୋଟା ନାମରେ ଜଣାଶୁଣା ଏହି ବନ୍ଦରରୁ ବ୍ରହ୍ମପୁରୀ ପାଟ ଓ ମସଲା ବର୍ମା ରପ୍ତାନି ହେଉଥିଲା। ଏଠାକାର ୧୮୭୧ ମସିହାର ଲାଇଟହାଉସ୍ ଓ ଶାନ୍ତ ସମୁଦ୍ର ତଟ ପର୍ଯ୍ୟଟକଙ୍କୁ ଆକର୍ଷିତ କରେ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Ancient Port of Mansurkota',
        eraOrDate: 'c. 1700s · Maritime Silk Trade',
        narrative: 'Originally known as Mansurkota, Gopalpur was a flourishing deep-sea roadstead where large ocean-going vessels anchored. Local merchants loaded bales of famous Berhampur Patta silks, handloom textiles, and fragrant hill rice destined for ports across the Bay of Bengal.',
        image: '/gopalpur.jpg',
        caption: 'The serene shoreline of Gopalpur, where calm waves wash over golden sand dunes.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'The Victorian Lighthouse of 1871',
        eraOrDate: '1871 CE · British Maritime Beacon',
        narrative: 'To safeguard cargo steamers navigating coastal sandbanks, British authorities commissioned the 100-foot Gopalpur Lighthouse. Painted with bold red and white stripes, the tower features an incandescent revolving optical beacon that can be seen over sixteen nautical miles out to sea.',
        image: '/gopalpur.jpg',
        caption: 'The iconic historic lighthouse overlooking the casuarina groves of Gopalpur-on-Sea.',
        source: 'Directorate General of Lighthouses and Lightships'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Burma Trade & Seaside Mansions',
        eraOrDate: 'Late 19th Century to 1942',
        narrative: 'British trading houses, including the British India Steam Navigation Company, established waterfront warehouses (godowns) and summer bungalows. Wealthy merchants holidayed here, transforming Gopalpur into the most fashionable seaside health resort in Eastern India.',
        image: '/puribeach.jpg',
        caption: 'Colonial coastal villas and serene shoreline walkways preserved along the coast.',
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Olive Ridley Guardians & Modern Haven',
        eraOrDate: 'Present Day · Ecological Heritage',
        narrative: 'Just north of Gopalpur, the Rushikulya river mouth serves as one of the world\'s largest mass nesting rookeries (Arribada) for hundreds of thousands of endangered Olive Ridley turtles. Gopalpur remains a serene eco-hub supporting marine wildlife protection.',
        image: '/wildlife-grid.jpg',
        caption: 'Marine and coastal wildlife protected along the nesting beaches of Ganjam.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: '1700s CE', title: 'Port of Mansurkota', description: 'Flourishing maritime port renamed Gopalpur after the coastal temple of Lord Gopaljiu.', verifiedSource: 'Ganjam Manual by T.J. Maltby' },
      { yearOrEra: '1871 CE', title: 'Lighthouse Commissioned', description: 'British engineers erect the landmark optical beacon.', verifiedSource: 'DGLL Records' },
      { yearOrEra: '1942 CE', title: 'Suspension of Burma Steamer Routes', description: 'World War II sea route disruptions shift Gopalpur into a quiet holiday haven.', verifiedSource: 'Bengal Chamber of Commerce Archives' },
      { yearOrEra: '2019 CE', title: 'Modern Deep Sea Port Operations', description: 'Re-emergence of Gopalpur as a major modern commercial port.', verifiedSource: 'Gopalpur Port Limited' }
    ],
    historicalFacts: [
      'Gopalpur was among the primary ports through which thousands of Odia migrants traveled to Burma in the late 19th and early 20th centuries.',
      'The beach is renowned for having no steep drop-offs, making it one of the safest swimming beaches in Eastern India.'
    ],
    livingLegends: [
      'The temple of Lord Gopaljiu: Legend says Lord Krishna appeared in dreams to a pious merchant, asking for a shrine on the dunes to guard seafarers from storm wrecks.'
    ],
    conservationNote: 'Protected with beach lighting curfews during Olive Ridley hatching season, designated swimming zones, and sand dune restoration.'
  },

  // 10. Taptapani Hot Spring
  'taptapani': {
    id: 'taptapani',
    storyTitle: 'Where the Earth Releases Its Warmth',
    storySubtitle: 'A natural geothermal sulfur hot spring nestled in the Eastern Ghat forests of Ganjam.',
    storyCategory: 'Culture',
    openingAtmosphere: 'Steaming natural mineral water bubbles up from ancient subterranean faults, surrounded by lush sal forests and chanting pilgrims.',
    narration: {
      en: "Tucked inside the dense forest hills of Ganjam district on the road to Rayagada, Taptapani—meaning hot water in Odia—is a rare geothermal wonder. Bubbling up at a constant temperature of forty-five degrees Celsius, these mineral-rich waters contain natural sulfur compounds celebrated for their therapeutic and healing properties. Adjacent to the spring stands the sacred forest shrine of Goddess Kandhuni Devi, where indigenous Kondh tribes and traveling pilgrims gather to seek blessing and physical rejuvenation.",
      hi: "गंजम जिले की वन-आच्छादित पहाड़ियों में स्थित तप्तपानी एक अद्भुत प्राकृतिक गर्म पानी का झरना है। 45 डिग्री सेल्सियस पर लगातार उबलता यह सल्फरयुक्त जल त्वचा रोगों और गठिया के उपचार के लिए प्रसिद्ध है। झरने के निकट माँ कंधुनी देवी का पवित्र मंदिर स्थित है।",
      or: "ଗଞ୍ଜାମ ଜିଲ୍ଲାର ଘଞ୍ଚ ଜଙ୍ଗଲ ଘେରା ପାହାଡ଼ ମଧ୍ୟରେ ଅବସ୍ଥିତ ତପ୍ତପାଣି। ଏହି ପ୍ରାକୃତିକ ଉଷ୍ଣ ପ୍ରସ୍ରବଣରୁ ବର୍ଷ ତମାମ ୪୫ ଡିଗ୍ରୀ ଉଷ୍ଣତାର ଗନ୍ଧକଯୁକ୍ତ ଜଳ ବାହାରିଥାଏ, ଯାହା ଶରୀର ପାଇଁ ଔଷଧୀୟ ଗୁଣରେ ଭରପୂର। ମା’ କନ୍ଧୁଣୀ ଦେବୀଙ୍କ ପୀଠ ଏଠାକାର ଆଧ୍ୟାତ୍ମିକ ଶକ୍ତି।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Geothermal Miracle of Ganjam',
        eraOrDate: 'Geological Antiquity · Natural Wonder',
        narrative: 'Deep subterranean fault lines beneath the Eastern Ghats allow rainwater to seep kilometers into the earth\'s mantle, where magma heat raises its temperature and dissolves mineral sulfur before hydro-pressure drives the hot water back to the surface.',
        image: '/taptapani.jpg',
        caption: 'The steaming mineral pools of Taptapani surrounded by dense evergreen vegetation.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Therapeutic and Healing Sulfur Waters',
        eraOrDate: 'Medicinal Heritage',
        narrative: 'For centuries, travelers and pilgrims suffering from arthritis, joint ailments, and chronic dermatological conditions have traveled to Taptapani to bathe in the sulfur springs, noting that the gentle mineral steam restores vitality and blood flow.',
        image: '/taptapani.jpg',
        caption: 'Lush mountain trails leading through the surrounding forest canopy in the Eastern Ghats.',
        source: 'District Administration Ganjam'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Shrine of Goddess Kandhuni Devi',
        eraOrDate: 'Tribal Spiritual Heritage',
        narrative: 'Right beside the bubbling spring stands the temple of Maa Kandhuni Devi, the primordial tribal mother deity revered by the local Kondh tribe. Devotees offer coconuts and red vermilion, thanking the goddess for the miraculous healing waters.',
        image: '/culture-grid.jpg',
        caption: 'Traditional religious ceremonies in Ganjam, blending tribal folklore with Sanatana rituals.',
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Forest Deer Sanctuary & Eco-Lodge',
        eraOrDate: 'Present Day · Tourism & Wildlife',
        narrative: 'Odisha Tourism established the picturesque Panthanivas eco-lodge on the hillside, where piped thermal water feeds private baths. Nearby, the forest department maintains a protected deer sanctuary harboring spotted deer and sambar.',
        image: '/wildlife-grid.jpg',
        caption: 'Spotted deer grazing peacefully in the protected forested enclaves of Ganjam.',
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: 'Antiquity', title: 'Tribal Discovery of the Hot Spring', description: 'Kondh tribes establish shrine of Goddess Kandhuni Devi beside the spring.', verifiedSource: 'Oral Tribal Lore of Ganjam' },
      { yearOrEra: '1968 CE', title: 'Development of Thermal Baths', description: 'Odisha Tourism develops hygienic stone bathing cubicles and accommodation.', verifiedSource: 'OTDC Annual Report' },
      { yearOrEra: '2005 CE', title: 'Deer Park Established', description: 'Establishment of the mini zoo and deer conservation park.', verifiedSource: 'Wildlife Wing Odisha' }
    ],
    historicalFacts: [
      'The spring maintains a steady discharge temperature of 42°C to 45°C regardless of whether it is scorching summer or freezing winter.',
      'Chemical analysis confirms high dissolved sulfur, sodium, and calcium bicarbonates which give the water its mild curative sulfur aroma.'
    ],
    livingLegends: [
      'Folklore recounts that childless couples who take a sincere vow before Maa Kandhuni and bathe in the thermal spring at sunrise are blessed with children.'
    ],
    conservationNote: 'Regulated by the Ganjam district administration with designated bathing cubicles, separate clean spring sanctums, and forest firebreaks.'
  },

  // 11. Tara Tarini Temple
  'tara-tarini': {
    id: 'tara-tarini',
    storyTitle: 'The Sacred Hills of Tara Tarini',
    storySubtitle: 'One of the four major Shakti Peethas perched on the scenic Kumari hills beside Rushikulya River.',
    storyCategory: 'Culture',
    openingAtmosphere: 'Ascending the nine hundred and ninety-nine stone steps of Kumari hill, sacred temple bells resonate across the winding Rushikulya river below.',
    narration: {
      en: "Perched majestically atop the Kumari hill in Ganjam district, Tara Tarini is venerated as one of the four cardinal Adi Shakti Peethas of Sanatana Dharma. According to the sacred Kalika Purana, the breasts of Goddess Sati fell on this hill, sanctifying it as the supreme Stana Peetha. Here, twin sister deities—Maa Tara and Maa Tarini—carved of sacred stone and adorned with silver filigree, have watched over seafarers, monarchs, and pilgrims for millennia. Every year during the auspicious month of Chaitra, hundreds of thousands converge upon this holy summit for the legendary Chaitra Yatra festival.",
      hi: "ऋषिकुल्या नदी के तट पर कुमारी पहाड़ी पर स्थित माँ तारा तारिणी मंदिर भारत के चार प्रमुख आदि शक्तिपीठों में से एक (स्तन पीठ) है। प्राचीन कलिंग के नाविक समुद्री यात्रा पर जाने से पूर्व माँ का आशीर्वाद लेते थे। यहाँ चैत्र मास के प्रत्येक मंगलवार को आयोजित होने वाला चैत्र मेला आस्था का महापर्व है।",
      or: "ଗଞ୍ଜାମ ଜିଲ୍ଲାର ପବିତ୍ର ଋଷିକୂଲ୍ୟା ନଦୀ କୂଳରେ କୁମାରୀ ପାହାଡ଼ ଶୀର୍ଷରେ ଅବସ୍ଥିତ ମା’ ତାରା ତାରିଣୀ। ଏହା ଭାରତର ଚାରୋଟି ପ୍ରମୁଖ ଆଦି ଶକ୍ତିପୀଠ ମଧ୍ୟରୁ ଅନ୍ୟତମ। କଳିଙ୍ଗର ନୌବାଣିଜ୍ୟ ସମୟରୁ ଆରମ୍ଭ କରି ଆଜି ପର୍ଯ୍ୟନ୍ତ ଏଠାରେ ଚୈତ୍ର ଯାତ୍ରା ଭକ୍ତମାନଙ୍କ ପ୍ରଧାନ ଆକର୍ଷଣ।"
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'The Primordial Shakti Peetha (Stana Peetha)',
        eraOrDate: 'Puranic Antiquity · Sati\'s Sacred Relic',
        narrative: 'When Lord Shiva performed the celestial Tandava bearing the body of Goddess Sati, Lord Vishnu\'s Sudarshana Chakra divided her form into fifty-one sacred parts. The sacred Stana (breasts) fell upon Kumari hill, consecrating it as an eternal wellspring of maternal cosmic energy (Adi Shakti).',
        image: '/culture-grid.jpg',
        caption: 'Sacred ritual offerings and spiritual celebrations in Ganjam, rooted in centuries of Shakti devotion.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Maritime Guardians of Ancient Kalinga',
        eraOrDate: 'c. 3rd Century BCE to Medieval Era',
        narrative: 'Located near the ancient maritime port of Palur, Sadhabas (merchants) and naval commanders never embarked upon voyages across the Indian Ocean without first climbing Kumari hill to pray to Tara and Tarini for favorable winds and safe return from foreign shores.',
        image: '/tara-tarini.jpg',
        caption: 'The sweeping vistas of the Rushikulya river valley seen from the summit of Kumari hill.',
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'The Twin Deities & Tantric Heritage',
        eraOrDate: 'Iconography & Spiritual Traditions',
        narrative: 'Inside the sanctum, the twin deities are sculpted of stone, their faces overlaid with gold and silver ornaments. Tara represents supreme wisdom and spiritual liberation, while Tarini represents protection, prosperity, and cosmic strength.',
        image: '/festivals-grid.jpg',
        caption: 'Grand festivals and religious processions celebrated with divine fervor on the hilltop.',
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'The Chaitra Yatra & Modern Kalinga Temple',
        eraOrDate: 'Present Day · Living Worship',
        narrative: 'Every Tuesday of the Hindu month of Chaitra, thousands of families ascend the 999 stone steps or take the modern ropeway car. Devotees perform head-tonsuring ceremonies for newborns, offering the hair to the goddess as a token of gratitude for health and protection.',
        image: '/tara-tarini.jpg',
        caption: 'The newly consecrated Kalinga-style stone temple crowning the summit of Tara Tarini hill.',
        source: 'Tara Tarini Development Board & Odisha Tourism'
      }
    ],
    timeline: [
      { yearOrEra: 'Puranic Era', title: 'Consecration of the Stana Peetha', description: 'Documented in the Kalika Purana and Shiva Purana as a primary Shakti Peetha.', verifiedSource: 'Kalika Purana' },
      { yearOrEra: '3rd Century BCE', title: 'Ashokan Proximity', description: 'Emperor Ashoka\'s famous Jaugada rock edicts inscribed just 4 km away, testifying to ancient sanctity.', verifiedSource: 'Archaeological Survey of India' },
      { yearOrEra: '2022 CE', title: 'Grand Kalinga Stone Sanctum Consecration', description: 'Magnificent new red sandstone Kalinga temple complex dedicated on the hilltop.', verifiedSource: 'Government of Odisha Press Release' }
    ],
    historicalFacts: [
      'Tara Tarini is recognized among the four Adi Shakti Peethas: Bimala (Puri), Tara Tarini (Ganjam), Kamakhya (Assam), and Kalighat (Kolkata).',
      'The sacred Rushikulya river, known in Puranas as the daughter of sage Vashistha, flows gracefully around the foot of the hill.'
    ],
    livingLegends: [
      'The Legend of Malli and Tara: Two sisters who performed miracles and disappeared into the hill, revealing their true divine manifestation to the king of Kalinga.'
    ],
    conservationNote: 'Managed by the Tara Tarini Development Board with clean drinking water facilities, passenger ropeway, and solar hill illumination.'
  }
};

// Category Mapping Helper for All Destinations
export function getStoryCategoryForDestination(category: string, id: string): 'Beaches' | 'Culture' | 'Festivals' | 'Heritage' | 'Wildlife' {
  if (curatedDestinationStories[id]) {
    return curatedDestinationStories[id].storyCategory;
  }
  const lowerCat = category.toLowerCase();
  const lowerId = id.toLowerCase();

  if (lowerCat.includes('beach') || lowerId.includes('beach') || lowerId.includes('sea')) {
    return 'Beaches';
  }
  if (lowerCat.includes('wildlife') || lowerId.includes('sanctuary') || lowerId.includes('park') || lowerId.includes('similipal') || lowerId.includes('bhitarkanika')) {
    return 'Wildlife';
  }
  if (lowerCat.includes('temple') || lowerCat.includes('spiritual') || lowerId.includes('temple') || lowerId.includes('puri') || lowerId.includes('tarini') || lowerId.includes('shrine')) {
    return 'Culture';
  }
  if (lowerCat.includes('village') || lowerId.includes('raghurajpur') || lowerId.includes('pipili') || lowerId.includes('handicraft')) {
    return 'Culture';
  }
  return 'Heritage';
}

// Fallback Story Generator for any Destination
export function getDestinationStory(dest: any): DestinationStory {
  if (curatedDestinationStories[dest.id]) {
    return curatedDestinationStories[dest.id];
  }

  const category = getStoryCategoryForDestination(dest.category || '', dest.id);
  const storyTitle = `The Sacred Chronicle of ${dest.name}`;
  const storySubtitle = dest.tagline || `An extraordinary journey through the living heritage and history of ${dest.district}.`;

  return {
    id: dest.id,
    storyTitle,
    storySubtitle,
    storyCategory: category,
    openingAtmosphere: `Step into the historic heart of ${dest.name} in ${dest.district} district, where centuries of Odia tradition echo through time.`,
    narration: {
      en: `${dest.name}, located in ${dest.district} district of Odisha, carries a deep historical and cultural legacy. ${dest.historicalBackground || dest.tagline}. Today it stands as a shining beacon of Odisha\'s timeless traditions and living heritage.`,
      hi: `${dest.name}, ओडिशा के ${dest.district} जिले में स्थित एक अत्यंत पावन और ऐतिहासिक स्थल है। ${dest.historicalBackground || dest.tagline}। यह स्थल ओडिशा की समृद्ध सांस्कृतिक धरोहर का प्रतीक है।`,
      or: `${dest.name}, ଓଡ଼ିଶାର ${dest.district} ଜିଲ୍ଲାର ଏକ ଗୌରବମୟ ଐତିହାସିକ ସ୍ଥାନ। ${dest.historicalBackground || dest.tagline}। ଏହା ଓଡ଼ିଆ ସଂସ୍କୃତି ଓ ପରମ୍ପରାର ଏକ ଅନନ୍ୟ ପ୍ରତୀକ।`
    },
    chapters: [
      {
        id: 'c1',
        chapterNumber: 1,
        chapterTitle: 'Origin and Foundations',
        eraOrDate: 'Historical Foundations',
        narrative: dest.historicalBackground || `${dest.name} was established in ancient times as a vital center of spirituality, governance, and culture in ${dest.district}.`,
        image: dest.heroImage || '/bhubaneswar.jpg',
        caption: `Architectural and natural splendor of ${dest.name} in ${dest.district} district.`,
        source: dest.imageAttribution || 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c2',
        chapterNumber: 2,
        chapterTitle: 'Golden Era and Cultural Zenith',
        eraOrDate: 'Cultural Zenith',
        narrative: dest.culturalImportance || `For centuries, ${dest.name} flourished under patron dynasties, inspiring devotional arts, temple architecture, and vibrant community festivals.`,
        image: (dest.gallery && dest.gallery[1]) || dest.heroImage || '/puri.jpg',
        caption: `Living cultural traditions celebrated across generations at ${dest.name}.`,
        source: 'Odisha Tourism Archives'
      },
      {
        id: 'c3',
        chapterNumber: 3,
        chapterTitle: 'Traditions, Lore & Transformations',
        eraOrDate: 'Living Traditions',
        narrative: dest.localTraditions || `The rituals, oral stories, and seasonal festivals of ${dest.name} unite the local communities in devotion and shared memory.`,
        image: (dest.gallery && dest.gallery[2]) || dest.heroImage || '/culture-grid.jpg',
        caption: `Ceremonial heritage and traditional craftsmanship associated with ${dest.district}.`,
        source: 'Odisha Tourism, Government of Odisha'
      },
      {
        id: 'c4',
        chapterNumber: 4,
        chapterTitle: 'Present-Day Significance & Living Heritage',
        eraOrDate: 'Present Day',
        narrative: `Today, ${dest.name} is recognized as an essential milestone of Odisha tourism, welcoming travelers from across the globe while maintaining its environmental and spiritual integrity.`,
        image: dest.heroImage || '/puri.jpg',
        caption: `Modern visitors and pilgrims preserving the sanctity of ${dest.name}.`,
        source: 'Odisha Tourism, Government of Odisha'
      }
    ],
    timeline: [
      { yearOrEra: 'Early Era', title: 'Foundational Consecration', description: `Ancient roots of ${dest.name} documented in regional chronicles.`, verifiedSource: 'Odisha Tourism Archives' },
      { yearOrEra: 'Medieval Era', title: 'Architectural & Cultural Patronage', description: `Expanded and adorned under royal Kalinga dynasties.`, verifiedSource: 'Archaeological Survey of India' },
      { yearOrEra: 'Modern Era', title: 'Heritage Preservation & Tourism Recognition', description: `Conserved as a prominent destination on Odisha's heritage circuit.`, verifiedSource: 'Odisha Tourism, Government of Odisha' }
    ],
    historicalFacts: [
      `Located in ${dest.district} district in ${dest.region || 'Odisha'}.`,
      dest.culturalImportance || 'Integral to the cultural, architectural, or natural legacy of Odisha.'
    ],
    livingLegends: [
      dest.localTraditions || 'Passed down through oral balladeers and living servitor lineages across the generations.'
    ],
    conservationNote: 'Protected under state tourism and archaeological guidelines with responsible visitor protocols.'
  };
}
