// Odisha Classical & Folk Dances Archive
export interface OdishaDance {
  id: string;
  name: string;
  odiaName: string;
  category: 'Classical' | 'Martial Folk' | 'Folk Dance' | 'Sambalpuri Folk' | 'Acrobatic Folk';
  image: string;
  district: string;
  originVillage: string;
  significance: string;
  performanceStyle: string;
  costumes: string[];
  instruments: string[];
  story: {
    hi: string;
    en: string;
    or: string;
  };
}

export const ODISHA_DANCES: OdishaDance[] = [
  {
    "id": "odissi",
    "name": "Odissi Classical Dance",
    "odiaName": "ଶାସ୍ତ୍ରୀୟ ଓଡ଼ିଶୀ ନୃତ୍ୟ",
    "category": "Classical",
    "image": "/dances/odissi.jpg?v=4",
    "district": "Puri & Khordha (Bhubaneswar)",
    "originVillage": "Jagannath Temple, Puri & Udayagiri Caves",
    "significance": "भारत के सबसे प्राचीन शास्त्रीय नृत्यों में से एक, जिसकी उत्पत्ति 2000 वर्ष पूर्व कलिंग के मंदिरों और उदयगिरि-खंडगिरि की गुफाओं (2री शताब्दी ई.पू.) में हुई थी। यह भगवान जगन्नाथ को समर्पित एक दिव्य आराधना है।",
    "performanceStyle": "त्रिभंगी (शरीर के तीन मोड़ों की मुद्रा) और चौका (वर्गाकार मुद्रा)। नर्तक अत्यंत कोमल हस्त-मुद्राओं, नवरसों के भावों और तालबद्ध घुंघरुओं की झंकार से 'गीत गोविंद' के पदों का अभिनय करते हैं।",
    "costumes": [
      "संबलपुरी/बोमकाई सिल्क साड़ी (पट्टवस्त्र)",
      "कटक की चांदी की तारकशी (Silver Filigree)",
      "ताहिया (सफेद फूलों का मुकुट)",
      "कमरबंद (Bengapatia)"
    ],
    "instruments": [
      "मर्दल (Mardala)",
      "बांसुरी (Venu)",
      "मंजीरा (Gini)",
      "सितार/वायलिन"
    ],
    "story": {
      "hi": "ओड़िशी नृत्य केवल एक कला नहीं बल्कि ईश्वर से साक्षात्कार का माध्यम है। प्राचीन काल में जगन्नाथ मंदिर की देवदासियां (जिन्हें माहारी कहा जाता था) गर्भगृह में महाप्रभु के विश्राम के समय जयदेव रचित 'गीत गोविंद' के पदों पर एकांत में नृत्य करती थीं। कालांतर में गोटीपुअ बालकों ने इसे मंदिर की चारदीवारी से बाहर लाकर जन-जन तक पहुंचाया। 1950 के दशक में गुरु केलुचरण महापात्र, पंकज चरण दास और देबाप्रसाद दास ने इसे आधुनिक शास्त्रीय मंच पर विश्वव्यापी ख्याति दिलाई।",
      "en": "Odissi is one of the oldest surviving classical dance traditions of India, rooted in the Natya Shastra and depicted in the stone friezes of Konark and Udayagiri (2nd century BCE). Originally danced by Maharis (temple devadasis) in devotion to Lord Jagannath, it embodies the iconic Tribhanga (tri-bent stance of grace) and Chowka (square stance of strength). Revived globally by legend Guru Kelucharan Mohapatra.",
      "or": "ଓଡ଼ିଶୀ ନୃତ୍ୟ ଓଡ଼ିଶାର ଏକ ପ୍ରାଚୀନ ଶାସ୍ତ୍ରୀୟ ନୃତ୍ୟ ପରମ୍ପରା, ଯାହା ଶ୍ରୀଜଗନ୍ନାଥ ସଂସ୍କୃତି ସହିତ ଅଭିନ୍ନ ଭାବେ ଜଡ଼ିତ। କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ଓ ଉଦୟଗିରି ଗୁମ୍ଫାର ଶିଳ୍ପକଳାରେ ଏହି ନୃତ୍ୟର ପ୍ରାଚୀନତା ସୁସ୍ପଷ୍ଟ। ତ୍ରିଭଙ୍ଗ ଓ ଚୌକ ମୁଦ୍ରା ସହିତ ମର୍ଦ୍ଦଳର ତାଳରେ ଏହା ପରିବେଷିତ ହୁଏ।"
    }
  },
  {
    "id": "chhau",
    "name": "Mayurbhanj Chhau",
    "odiaName": "ମୟୂରଭଞ୍ଜ ଛଉ ନୃତ୍ୟ",
    "category": "Martial Folk",
    "image": "/dances/chhau.jpg?v=4",
    "district": "Mayurbhanj",
    "originVillage": "Baripada (Royal Heritage Palace)",
    "significance": "यूनेस्को (UNESCO) अमूर्त सांस्कृतिक धरोहर। मयूरभंज के राजघराने द्वारा पोषित यह मार्शल नृत्य चैत्र पर्व पर भगवान शिव और मां पार्वती की आराधना के लिए किया जाता है।",
    "performanceStyle": "पुरुलिया और सेराइकेला छऊ के विपरीत, मयूरभंज छऊ में मुखौटा (Mask) नहीं पहना जाता! इसमें नर्तक अपनी खुली आंखों, चेहरे के भावों, तलवार-ढाल के करतब, ऊंची छलांगों और मार्शल स्टेप्स (उफली और तोपका) से युद्ध का जीवंत दृश्य प्रस्तुत करते हैं।",
    "costumes": [
      "रंगीन सिल्क धोती और कमरपट्टा",
      "सिर पर पगड़ी व पंख",
      "हाथ में तलवार और ढाल",
      "पारंपरिक बाजूबंद"
    ],
    "instruments": [
      "धोल (Dhol)",
      "छाड़छड़ी (Chhadchhada)",
      "माहुरी (Mahuri)",
      "धुमसा (Dhumsa)"
    ],
    "story": {
      "hi": "मयूरभंज छऊ एक अद्वितीय मार्शल आर्ट नृत्य है जिसका जन्म भंज राजवंश के योद्धाओं के सैन्य अभ्यास से हुआ। 'छऊ' शब्द संस्कृत के 'छाया' या 'छावनी' (सैन्य शिविर) से लिया गया है। चैत्र संक्रांति के दौरान मयूरभंज के बारीपदा में दो पारंपरिक अखाड़े (उत्तर साही और दक्षिण साही) एक दूसरे के साथ इस अद्भुत शौर्य नृत्य की प्रतियोगिता करते हैं। यह नृत्य रामायण और महाभारत के वीर रस के प्रसंगों को मंच पर साक्षात कर देता है।",
      "en": "Inscribed on the UNESCO Intangible Cultural Heritage list, Mayurbhanj Chhau is an extraordinary martial dance native to the former royal kingdom of Mayurbhanj. Performed during Chaiti Parva without masks, dancers execute athletic leaps, sword maneuvers, and ancient war drills known as Uflis.",
      "or": "ମୟୂରଭଞ୍ଜର ବିଶ୍ୱପ୍ରସିଦ୍ଧ ଛଉ ନୃତ୍ୟ ୟୁନେସ୍କୋ ଦ୍ୱାରା ସ୍ୱୀକୃତ। ଏହି ନୃତ୍ୟରେ ମୁଖା ବ୍ୟବହାର ନକରି ମୁକ୍ତ ଭାବେ ଯୁଦ୍ଧ କୌଶଳ, ତଲୱାର ଓ ଢାଲ ଧରି ଚୈତ୍ର ପର୍ବରେ ଶିବ-ପାର୍ବତୀଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ପରିବେଷଣ କରାଯାଏ।"
    }
  },
  {
    "id": "gotipua",
    "name": "Gotipua Dance",
    "odiaName": "ଗୋଟିପୁଅ ନୃତ୍ୟ",
    "category": "Folk Dance",
    "image": "/dances/gotipua.jpg?v=4",
    "district": "Puri",
    "originVillage": "Raghurajpur Heritage Crafts Village",
    "significance": "आधुनिक ओड़िशी नृत्य की जननी। 16वीं शताब्दी में गजपति राजा रामचंद्र देव के काल में जब माहारी देवदासियों पर प्रतिबंध लगे, तब रघुराजपुर के छोटे बालकों ने इस भक्ति नृत्य को जीवित रखा।",
    "performanceStyle": "14 वर्ष से कम आयु के बालक बालिकाओं का शृंगार करके मंच पर हैरतअंगेज एक्रोबैटिक आसन करते हैं, जिसे 'बंध नृत्य' (Bandha Nrutya) कहते हैं। बालक शरीर को मोड़कर कमल का फूल, मंदिर का विमान, और रथ की आकृतियां बनाते हैं।",
    "costumes": [
      "कांचुला (रेशमी चोली)",
      "घेरेदार पट्टवस्त्र",
      "बालों में फूलों की ताहिया",
      "माथे पर अल्पना व चंदन टीका"
    ],
    "instruments": [
      "मर्दल (Mardala)",
      "गिनी (Gini / Small Cymbals)",
      "हारमोनियम",
      "कण्ठ संगीत"
    ],
    "story": {
      "hi": "ओड़िया भाषा में 'गोटी' का अर्थ है 'एक' और 'पुअ' का अर्थ है 'बालक'। चैतन्य महाप्रभु के आगमन और वैष्णव भक्ति आंदोलन के समय इस नृत्य को विशेष प्रोत्साहन मिला। रघुराजपुर गांव के गुरु अपने बालकों को अत्यंत कठिन योगासनों और ताल साधना में प्रशिक्षित करते हैं। बालक राधा-कृष्ण की प्रेमलीला और जगन्नाथ वंदना का अद्भुत समागम प्रस्तुत करते हैं। आज भी रघुराजपुर की हर गली में घुंघरुओं और मर्दल की थाप गूंजती है।",
      "en": "Gotipua (literally meaning 'single boy') is the living ancestor of modern Odissi dance, centered in the heritage craft village of Raghurajpur. Young boys train intensively in sacred acrobatic postures called 'Bandhas' to portray the divine devotion of Radha and Krishna.",
      "or": "ରଘୁରାଜପୁର ଗ୍ରାମର ପ୍ରାଣବନ୍ତ ଗୋଟିପୁଅ ନୃତ୍ୟ ଆଧୁନିକ ଓଡ଼ିଶୀର ଜନନୀ ସଦୃଶ। କୋମଳମତି ବାଳକମାନେ ନାରୀ ବେଶରେ ସଜ୍ଜିତ ହୋଇ ଅଦ୍ଭୁତ ବନ୍ଧନୃତ୍ୟ ଓ ଶ୍ରୀକୃଷ୍ଣ ଲୀଳା ପରିବେଷଣ କରନ୍ତି।"
    }
  },
  {
    "id": "ghumura-kalahandi",
    "name": "Kalahandi Ghumura",
    "odiaName": "କଳାହାଣ୍ଡି ଘୁମୁରା ନୃତ୍ୟ",
    "category": "Martial Folk",
    "image": "/dances/ghumura-kalahandi.jpg?v=4",
    "district": "Kalahandi & Nuapada",
    "originVillage": "Bhawanipatna & Junagarh",
    "significance": "पौराणिक मान्यताओं के अनुसार घुमुरा देवी दुर्गा का रणवाद्य था, जिसे उन्होंने महिषासुर मर्दन के समय बजाया था। यह कालाहांडी के प्राचीन शासकों का वीर रस से ओतप्रोत युद्ध नृत्य है।",
    "performanceStyle": "मिट्टी के गोल घड़े (जिसके मुख पर गोह की खाल मढ़ी होती है) को नर्तक अपनी छाती और पेट पर बांधते हैं। दोनों हाथों से तेज गति से घुमुरा बजाते हुए हवा में कलाबाजियां, गोल चक्कर और एक्रोबैटिक छलांगें लगाते हैं।",
    "costumes": [
      "संबलपुरी धोती और अंगवस्त्र",
      "सिर पर मोरपंखी पगड़ी",
      "पैरों में भारी घुंघरू",
      "गले में कौड़ियों की माला"
    ],
    "instruments": [
      "घुमुरा (Ghumura Clay Drum)",
      "निशान (Nishan)",
      "ताल (Taal)",
      "मादल (Madal)"
    ],
    "story": {
      "hi": "घुमुरा नृत्य कालाहांडी की माटी की धड़कन है। प्राचीन काल में राजाओं की सेना जब युद्ध के मैदान में उतरती थी, तब सैनिकों का उत्साह बढ़ाने के लिए घुमुरा बजाया जाता था। नर्तक जब एक साथ लयबद्ध ताल में 'धिन-ता-ता-धिन' बजाते हुए तीव्र गति से घूमते हैं, तो पूरा वातावरण गूंज उठता है। यह नृत्य बुराई पर अच्छाई की विजय और अदम्य जनजातीय शौर्य का प्रतीक है।",
      "en": "Kalahandi Ghumura is an ancient heroic martial drum dance. Dancers strap an earthen pitcher drum covered with reptile skin across their chests and whirl with lightning speed and acrobatic jumps, historically performed to rally war troops.",
      "or": "କଳାହାଣ୍ଡିର ପ୍ରସିଦ୍ଧ ଘୁମୁରା ନୃତ୍ୟ ଏକ ପ୍ରାଚୀନ ରଣବାଦ୍ୟ ନୃତ୍ୟ। ମାଟିର ପାତ୍ରରେ ଚମଡ଼ା ଛାଉଣି ହୋଇଥିବା ଘୁମୁରାକୁ ଛାତିରେ ବାନ୍ଧି ନୃତ୍ୟଶିଳ୍ପୀମାନେ ଅତ୍ୟନ୍ତ ଦ୍ରୁତ ଗତିରେ ଘୂରି ଘୂରି ନାଚନ୍ତି।"
    }
  },
  {
    "id": "ranapa",
    "name": "Ranapa Stilt Dance",
    "odiaName": "ରଣପା ନୃତ୍ୟ",
    "category": "Acrobatic Folk",
    "image": "/dances/ranapa.jpg?v=4",
    "district": "Ganjam",
    "originVillage": "Chhatrapur & Berhampur",
    "significance": "गंजाम जिले के ग्रामीण क्षेत्रों का विश्वप्रसिद्ध बांस की लकड़ियों पर चलने वाला हैरतअंगेज नृत्य। यह भगवान श्री कृष्ण के बचपन में ग्वालों के साथ बिताए गए खेल-कूद की स्मृति में मनाया जाता है।",
    "performanceStyle": "नर्तक अपने पैरों में 5 से 7 फीट ऊंचे मजबूत बांस के डंडे (रणपा) बांधते हैं और बिना किसी सहारे के ढोल और माहुरी की तेज धुन पर पिरामिड बनाना, मॉक कॉम्बैट और छलांग लगाना प्रदर्शित करते हैं।",
    "costumes": [
      "पीली और लाल धोती",
      "रंग-बिरंगी पगड़ी",
      "घुटनों पर बंधे रक्षक पट्टे",
      "मोरपंख कलगी"
    ],
    "instruments": [
      "ढोल (Dhol)",
      "माहुरी (Mahuri)",
      "झांझ (Brass Jhanj)"
    ],
    "story": {
      "hi": "ओड़िया में 'रण' का अर्थ है 'युद्ध/कठिन चाल' और 'पा' का अर्थ है 'पैर'। प्राचीन काल में राजाओं के गुप्तचर और सैनिक बाढ़ या घने जंगलों में ऊंचे बांस के डंडों (रणपा) के सहारे तेजी से संदेश पहुंचाते थे। बाद में गंजाम के कलाकारों ने इसे भक्ति और मनोरंजन के एक अद्वितीय नृत्य में बदल दिया। डंडों पर खड़े होकर जब कलाकार ढोल की थाप पर हवा में छलांग लगाते हैं, तो दर्शक दांतों तले उंगली दबा लेते हैं।",
      "en": "Ranapa is Ganjam breathtaking stilt dance. Dancers tie 5-to-7 feet tall bamboo stilts to their legs and perform complex synchronized steps, pyramid formations, and acrobatic mock battles to the beats of Dhol and Mahuri.",
      "or": "ଗଞ୍ଜାମ ଜିଲ୍ଲାର ପ୍ରସିଦ୍ଧ ରଣପା ନୃତ୍ୟ ବାଉଁଶ ଖୁଣ୍ଟ ଉପରେ କରାଯାଉଥିବା ଏକ ବିସ୍ମୟକର କଳା। କଳାକାରମାନେ ୫-୭ ଫୁଟ ଉଚ୍ଚା ବାଉଁଶ ବାନ୍ଧି ଢୋଲ ଓ ମାହୁରୀର ତାଳେ ତାଳେ ଚମତ୍କାର ଭାରସାମ୍ୟ ରକ୍ଷା କରି ନାଚନ୍ତି।"
    }
  },
  {
    "id": "paika-nrutya",
    "name": "Paika Nrutya (Warrior Dance)",
    "odiaName": "ପାଇକ ନୃତ୍ୟ",
    "category": "Martial Folk",
    "image": "/dances/paika-nrutya.jpg?v=4",
    "district": "Khordha & Puri",
    "originVillage": "Barunei Hills & Khordha Fort",
    "significance": "1817 के ऐतिहासिक पाइका विद्रोह (Paika Rebellion - भारत का प्रथम स्वाधीनता संग्राम) के वीर पाइका लड़ाकों की शौर्य गाथा। यह ओड़िशा के किसान-सैनिकों का पारंपरिक युद्ध अभ्यास है।",
    "performanceStyle": "चमकती हुई इस्पात की तलवारें (खांडा) और मजबूत ढाल लेकर आमने-सामने युद्ध के पैंतरे, तलवारबाजी के दांव-पेंच, ऊंची छलांगें और व्यूह रचना का रोमांचक प्रदर्शन।",
    "costumes": [
      "योद्धा धोती (कच्छा बांधकर)",
      "लाल पगड़ी और कमरपट्टा",
      "छाती पर कवच पट्टिका",
      "हाथ में भारी खांडा तलवार"
    ],
    "instruments": [
      "कहाली (Kahali Trumpet)",
      "रण ढोल (War Dhol)",
      "धुमसा (Dhumsa)",
      "तुरी"
    ],
    "story": {
      "hi": "पाइका का अर्थ है 'पैदल सैनिक'। जब-जब कलिंग की भूमि पर आक्रमण हुआ, तब-तब खेतों में हल चलाने वाले किसान अपने हल छोड़कर तलवार उठा लेते थे और मातृभूमि की रक्षा के लिए जान की बाजी लगा देते थे। बक्शी जगबंधु के नेतृत्व में पाइका वीरों ने अंग्रेजों के छक्के छुड़ा दिए थे। आज भी दशहरा और उत्कल दिवस पर खोरधा की बारुणेई पहाड़ी की तलहटी में पाइका अखाड़े यह शौर्य नृत्य गर्व से प्रस्तुत करते हैं।",
      "en": "Paika Nrutya is the valiant warrior dance of Odisha historic peasant militia from Khordha, who led the 1817 Paika Rebellion. Armed with heavy swords and shields, performers display lightning offensive and defensive martial drills.",
      "or": "ଖୋର୍ଦ୍ଧାର ବୀର ପାଇକମାନଙ୍କ ସ୍ମୃତିରେ ପାଇକ ନୃତ୍ୟ ଅନୁଷ୍ଠିତ ହୁଏ। ୧୮୧୭ର ପ୍ରଥମ ସ୍ୱାଧୀନତା ସଂଗ୍ରାମ (ପାଇକ ବିଦ୍ରୋହ)ର ବୀରତ୍ୱକୁ ସ୍ମରଣ କରି ଖଣ୍ଡା ଓ ଢାଲ ଧରି ଏହି ଯୁଦ୍ଧ ନୃତ୍ୟ ପରିବେଷଣ କରାଯାଏ।"
    }
  },
  {
    "id": "chaiti-ghoda",
    "name": "Chaiti Ghoda (Horse Dance)",
    "odiaName": "ଚଇତି ଘୋଡ଼ା ନୃତ୍ୟ",
    "category": "Folk Dance",
    "image": "/dances/chaiti-ghoda.jpg?v=4",
    "district": "Cuttack & coastal Odisha",
    "originVillage": "Mahanadi riverbanks & coastal fisherman villages",
    "significance": "तटीय ओड़िशा के कैवर्त (मछुआरा) समुदाय द्वारा चैत्र पूर्णिमा पर देवी बासेली (घोड़े और जल की देवी) की पूजा के लिए किया जाने वाला लोक उत्सव नृत्य।",
    "performanceStyle": "नर्तक रंगीन कपड़ों, घुंघरुओं और फूलों से सजे लकड़ी के घोड़े के ढांचे के भीतर प्रवेश करता है और घोड़े की तरह सरपट दौड़ने, नाचने का अभिनय करता है। साथ में 'राउताणी' (पत्नी) और 'चढ़ेया' हास्य और संवाद करते हैं।",
    "costumes": [
      "सजा हुआ काठ का घोड़ा (डमी हॉर्स)",
      "पारंपरिक कैवर्त पगड़ी",
      "घूंघट व रंगीन ओढ़नी (राउताणी पात्र)",
      "मोर मुकुट"
    ],
    "instruments": [
      "ढोल (Dhol)",
      "माहुरी (Mahuri)",
      "खंजनी (Khanjani)",
      "जोड़ी नगरा"
    ],
    "story": {
      "hi": "रामायण की कथा के अनुसार, जब भगवान श्री राम ने वनवास जाते समय गंगा पार की थी, तब केवट ने उन्हें अपनी नाव से पार कराया था। प्रसन्न होकर प्रभु ने उसे वरदान दिया था। चैत्र के महीने में मछुआरे अपनी नावों और जालों की पूजा करते हैं और बासेली देवी के सम्मान में काठ के घोड़े पर बैठकर घर-घर जाकर नाचते-गाते हैं। यह नृत्य भक्ति के साथ-साथ लोक हास्य और मनोरंजन का अनूठा संगम है।",
      "en": "Chaiti Ghoda is a beloved coastal folk dance where the lead dancer enters an elaborately decorated wooden horse dummy, galloping and trotting alongside humorous characters like Rautani and Chadheya in honor of Goddess Baseli.",
      "or": "ଚୈତ୍ର ପୂର୍ଣ୍ଣିମାରେ ଧୀବର ସମ୍ପ୍ରଦାୟ ଦ୍ୱାରା ଦେବୀ ବାସେଳୀଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ କାଠ ଘୋଡ଼ା ଧରି ଚଇତି ଘୋଡ଼ା ନୃତ୍ୟ ପରିବେଷଣ କରାଯାଏ।"
    }
  },
  {
    "id": "chaiti-ghoda-music",
    "name": "Chaiti Ghoda Musical Troupe",
    "odiaName": "ଚଇତି ଘୋଡ଼ା ବାଦନ ଓ ମାହୁରୀ",
    "category": "Folk Dance",
    "image": "/dances/chaiti-ghoda-music.jpg?v=4",
    "district": "Kendrapada & Jagatsinghpur",
    "originVillage": "Coastal Delta settlements",
    "significance": "चइति घोड़ा नृत्य की प्राणवायु इसका संगीत दल है। माहुरी की सुरीली धुन और ढोल के ताल पर गांव का हर व्यक्ति थिरकने पर मजबूर हो जाता है।",
    "performanceStyle": "ढोल और माहुरी वादक नर्तकों के चारों ओर गोला बनाकर चलते हैं। वादक न केवल वाद्य बजाते हैं बल्कि संवादों में हास्य और व्यंग्य का आदान-प्रदान भी करते हैं।",
    "costumes": [
      "श्वेत धोती और पीला उत्तरीय",
      "गले में तुलसी माला",
      "माथे पर चंदन लेप"
    ],
    "instruments": [
      "माहुरी (Mahuri Horn)",
      "ढोल (Double-headed Dhol)",
      "कांसी (Bell metal plate)"
    ],
    "story": {
      "hi": "माहुरी ओड़िशा का पारंपरिक सुषिर वाद्य है, जिसकी बनावट शहनाई जैसी होती है। जब ढोलकिए 'धिन-ताना-धिन' की थाप देते हैं और माहुरी वादक लोकगीतों की तान छेड़ते हैं, तो पूरा गांव उत्सव के रंग में डूब जाता है। यह संगीत केवल वाद्य नहीं बल्कि पीढ़ियों से मौखिक रूप से चली आ रही लोक परंपरा का संरक्षण है।",
      "en": "The musical troupe is the beating pulse of the Chaiti Ghoda procession. Masters of the traditional Odia Mahuri (reed horn) and resonant twin Dhols engage in musical banter, driving the festive fervor.",
      "or": "ଚଇତି ଘୋଡ଼ା ନୃତ୍ୟର ପ୍ରାଣ ହେଉଛି ଏହାର ବାଦନ ଦଳ। ମାହୁରୀର ସୁମଧୁର ସ୍ୱର ଓ ଢୋଲର ତାଳ ଗ୍ରାମୀଣ ଉତ୍ସବକୁ ଜୀବନ୍ତ କରିତୋଳେ।"
    }
  },
  {
    "id": "rasarkeli",
    "name": "Rasarkeli (Sambalpuri Folk)",
    "odiaName": "ରସରକେଲି ନୃତ୍ୟ",
    "category": "Sambalpuri Folk",
    "image": "/dances/rasarkeli.jpg?v=4",
    "district": "Sambalpur & Bargarh",
    "originVillage": "Western Odisha river valley",
    "significance": "पश्चिमी ओड़िशा की संबलपुरी लोक परंपरा का सबसे मधुर और लावण्यमयी नृत्य। यह वसंत ऋतु में प्रेम, यौवन, प्रकृति और सामाजिक सौहार्द का उत्सव है।",
    "performanceStyle": "संबलपुरी हथकरघा साड़ियों में सजी युवतियां और युवक एक-दूसरे के हाथों में हाथ डालकर अर्धवृत्त में तालबद्ध तालियों और कमर के लचकदार झटकों के साथ थिरकते हैं।",
    "costumes": [
      "संबलपुरी बांध साड़ी (लाल-काली बार्डर)",
      "हाथों में बंधरिया (चांदी के कड़े)",
      "गले में खगला हार",
      "बालों में मयूरपंख"
    ],
    "instruments": [
      "मादल (Madal)",
      "ढोल (Dhol)",
      "निशान (Nishan)",
      "ताशा (Tasha)"
    ],
    "story": {
      "hi": "रसरकेली का अर्थ है 'रस और आनंद की क्रीड़ा'। संबलपुरी गीतों में जब 'रसरकेली बो' का आलाप लिया जाता है, तो मादल की गूंज से दिशाएं मुखरित हो उठती हैं। यह नृत्य खेती की बुवाई और कटाई के बाद गांव के युवक-युवतियों के बीच पारस्परिक प्रेम, आदर और आनंद साझा करने का माध्यम है। इसकी धुन में माटी की खुशबू और असीम ऊर्जा समाई होती है।",
      "en": "Rasarkeli is a graceful Sambalpuri folk dance celebrating youth, nature, and community joy. Women in iconic handloom tie-dye sarees dance in flowing curves to the rhythmic pulses of the Madal and Dhol.",
      "or": "ରସରକେଲି ପଶ୍ଚିମ ଓଡ଼ିଶାର ଏକ ଅତ୍ୟନ୍ତ ଲୋକପ୍ରିୟ ସମ୍ବଲପୁରୀ ନୃତ୍ୟ। ମାଦଳ ଓ ଢୋଲର ତାଳେ ତାଳେ ସମ୍ବଲପୁରୀ ଶାଢ଼ୀ ପରିହିତା ଯୁବତୀମାନେ ଅତ୍ୟନ୍ତ ମନମୁଗ୍ଧକର ଭାବେ ନାଚନ୍ତି।"
    }
  },
  {
    "id": "jaiphula",
    "name": "Jaiphula (Sambalpuri Folk)",
    "odiaName": "ଜାଇଫୁଲ ନୃତ୍ୟ",
    "category": "Sambalpuri Folk",
    "image": "/dances/jaiphula.jpg?v=4",
    "district": "Sonepur & Balangir",
    "originVillage": "Mahanadi-Tel river confluence",
    "significance": "'जाईफूल' का अर्थ है 'चमेली का फूल'। यह नृत्य सहेलियों के बीच अटूट मित्रता ('सखी' या 'जाईफूल' का नाता) और फसल की विजय के हर्षोल्लास का प्रतीक है।",
    "performanceStyle": "सहेलियां एक-दूसरे के कंधे पर हाथ रखकर फूलों की तरह खिलती और झुकती हुई तरंगों की भांति आगे-पीछे चलती हैं। गीत अत्यंत मधुर और भक्तिमय होते हैं।",
    "costumes": [
      "पारंपरिक संबलपुरी इक्कत साड़ी",
      "बालों में चमेली (जाई) के फूलों का गजरा",
      "चांदी की पायल और बिछुए"
    ],
    "instruments": [
      "मादल (Madal)",
      "बांसुरी (Flute)",
      "ढोल (Dhol)",
      "घुंघरू"
    ],
    "story": {
      "hi": "ओड़िशा की ग्रामीण संस्कृति में सहेलियां एक-दूसरे को फूलों के नाम से पुकारती हैं—जैसे जाईफूल, बउल, आदि। यह संबंध जीवनभर निभाया जाता है। जाईफूल नृत्य में सखियां अपनी सुख-दुख, प्रेम और परिवार की बातें गीतों के माध्यम से व्यक्त करती हैं। नृत्य की गति अत्यंत सौम्य और हृदय को छू लेने वाली होती है।",
      "en": "Named after the fragrant Jasmine flower ('Jaiphula'), this Sambalpuri folk tradition honors deep sisterhood, friendship, and harvest triumph through gentle swaying choreography.",
      "or": "ଜାଇଫୁଲ ନୃତ୍ୟ ସାଙ୍ଗ-ସାଥୀଙ୍କ ମଧ୍ୟରେ ଥିବା ଅତୁଟ ବନ୍ଧୁତା ଓ ଆନନ୍ଦର ପ୍ରତୀକ। କନ୍ୟାମାନେ ସମ୍ବଲପୁରୀ ଗୀତ ଗାଇ ଫୁଲ ପରି ଝୁଲି ଝୁଲି ନାଚନ୍ତି।"
    }
  },
  {
    "id": "maleshree",
    "name": "Maleshree (Heroic Dance)",
    "odiaName": "ମାଲେଶ୍ରୀ ନୃତ୍ୟ",
    "category": "Sambalpuri Folk",
    "image": "/dances/maleshree.jpg?v=4",
    "district": "Balangir & Sambalpur",
    "originVillage": "Patnagarh & Sambalpur royal gates",
    "significance": "मां समलेश्वरी और देवी पाटणेश्वरी के सम्मान में किया जाने वाला वीर रस का नृत्य। यह युद्ध में विजय और राजाओं की रक्षा करने वाले रक्षकों की वीरता का प्रतीक है।",
    "performanceStyle": "तीव्र पदचाप, वीरोचित मुद्राएं और हाथों से तलवार चलाने का प्रतीकात्मक अभिनय। नर्तकों की ऊर्जा और आंखों के भाव अत्यंत प्रभावशाली होते हैं।",
    "costumes": [
      "संबलपुरी वीरोचित परिधान",
      "लाल रिबन और पगड़ी",
      "हाथों में ध्वज या प्रतीकात्मक शस्त्र"
    ],
    "instruments": [
      "धुमसा (Dhumsa)",
      "निशान (Nishan)",
      "माहुरी (Mahuri)",
      "ताशा"
    ],
    "story": {
      "hi": "मालेश्री नृत्य की उत्पत्ति पश्चिमी ओड़िशा के राजदरबारों में देवी वंदना से हुई। राजा जब किसी युद्ध या बड़े अनुष्ठान पर निकलते थे, तो देवी का आशीर्वाद लेने के लिए यह वीर नृत्य किया जाता था। नगाड़ों और धुमसा की तीव्र गूंज शरीर में रोमांच पैदा कर देती है। यह नृत्य ओड़िशा के जनजातीय और सामरिक गौरव का सजीव दस्तावेज है।",
      "en": "Maleshree is a dynamic Sambalpuri dance symbolizing valor and martial tradition, performed to invoke Goddess Samaleswari and royal warrior deities.",
      "or": "ମାଲେଶ୍ରୀ ନୃତ୍ୟ ପଶ୍ଚିମ ଓଡ଼ିଶାର ବୀରତ୍ୱ ଓ ସାମରିକ ପରମ୍ପରାର ପ୍ରତୀକ। ମା’ ସମଲେଶ୍ୱରୀଙ୍କ ବନ୍ଦନା କରି ଯୋଦ୍ଧାମାନଙ୍କ ଭଳି ଉତ୍ସାହ ସହିତ ଏହା ପରିବେଷିତ ହୁଏ।"
    }
  },
  {
    "id": "bauli",
    "name": "Bauli Dance (Pitcher Balance)",
    "odiaName": "ବଉଳି ନୃତ୍ୟ",
    "category": "Sambalpuri Folk",
    "image": "/dances/bauli.jpg?v=4",
    "district": "Bargarh & Sambalpur",
    "originVillage": "Hirakud reservoir foothills",
    "significance": "जल की पवित्रता और नारी सुलभ संतुलन का अद्भुत संगम। 'बउल' (मित्र) के रिश्ते का सम्मान करते हुए इस नृत्य में पनिहारिनों के जीवन को दर्शाया गया है।",
    "performanceStyle": "नर्तकियां अपने सिर पर पीतल या मिट्टी के 3 से 5 कलश (घड़े) एक के ऊपर एक रखकर बिना हाथ लगाए ढोल की थाप पर संतुलन के साथ जटिल नृत्य स्टेप्स करती हैं।",
    "costumes": [
      "चटख संबलपुरी साड़ी",
      "सिर पर सजे हुए कलश (Ghada)",
      "हाथों में कांच की चूड़ियां",
      "कमरधनी"
    ],
    "instruments": [
      "ढोल (Dhol)",
      "माहुरी (Mahuri)",
      "मंजीरा",
      "घुंघरू"
    ],
    "story": {
      "hi": "ओड़िशा के गांवों में जब पनिहारिनें नदी या कुएं से पानी भरकर लौटती हैं, तो उनके सिर पर रखे कलश उनकी गरिमा और संतुलन का प्रतीक होते हैं। बउली नृत्य में यही दैनिक कर्म एक कठिन कला का रूप ले लेता है। कलशों का संतुलन बनाए रखते हुए जब युवतियां झुकती और घूमती हैं, तो दर्शक उनकी एकाग्रता और सुंदरता देखकर मुग्ध हो जाते हैं।",
      "en": "Bauli is a gentle, awe-inspiring Sambalpuri balancing dance where women balance multiple polished brass water pitchers on their heads while dancing intricate steps.",
      "or": "ବଉଳି ନୃତ୍ୟ ନାରୀର ଅତୁଳନୀୟ ଭାରସାମ୍ୟ ଓ ସୌନ୍ଦର୍ଯ୍ୟର ପରିଚୟ। ମୁଣ୍ଡ ଉପରେ କଳସ ରଖି ବିନା ହାତ ସାହାଯ୍ୟରେ କଳାକାରମାନେ ତାଳେ ତାଳେ ନୃତ୍ୟ କରନ୍ତି।"
    }
  },
  {
    "id": "ghumura-folk",
    "name": "Desiya Ghumura (Rural Heartbeat)",
    "odiaName": "ଦେଶୀୟ ଘୁମୁରା (ଲୋକସ୍ପନ୍ଦନ)",
    "category": "Folk Dance",
    "image": "/dances/ghumura-folk.jpg?v=4",
    "district": "Koraput & Rayagada",
    "originVillage": "Eastern Ghats tribal hills",
    "significance": "ग्रामीण ओड़िशा की धड़कन। फसल कटाई के बाद खेतों में जब पूरा समुदाय एकत्र होता है, तब यह उल्लासपूर्ण नृत्य रात-रात भर चलता है।",
    "performanceStyle": "ढोल वादक और घुमुरा वादक आमने-सामने आकर लयबद्ध जुगलबंदी करते हैं। पैरों की थाप और ढोल की तीव्र आवाज पूरे जंगल और घाटी में गूंजती है।",
    "costumes": [
      "पारंपरिक जनजातीय उत्तरीय",
      "कमर पर बंधा घुमुरा",
      "सिर पर पंख व फूलों की माला",
      "पैरों में घुंघरू"
    ],
    "instruments": [
      "पारंपरिक घुमुरा (Ghumura)",
      "निशान (Nishan)",
      "ताशा",
      "मादल"
    ],
    "story": {
      "hi": "यह नृत्य ओड़िशा के सुदूर पहाड़ी अंचलों में जीवन के सीधे और सच्चे उल्लास को दर्शाता है। यहां कोई कृत्रिमता नहीं है, केवल माटी से जुड़ाव और ढोल की थाप पर बेपरवाह थिरकते कदम हैं। ग्रामीण इसे 'लोक जीवन का स्पंदन' मानते हैं, जो हर दुख-दर्द को भुलाकर नई उमंग भर देता है।",
      "en": "Desiya Ghumura is the true heartbeat of rural life in the hills of southern and western Odisha, performed during post-harvest gatherings with infectious energy.",
      "or": "ଦେଶୀୟ ଘୁମୁରା ଗ୍ରାମୀଣ ଜୀବନର ସ୍ପନ୍ଦନ। ଫସଲ ଅମଳ ପରେ ଆଦିବାସୀ ଓ ଗ୍ରାମବାସୀମାନେ ଏକତ୍ରିତ ହୋଇ ଢୋଲ ଓ ଘୁମୁରାର ତାଳେ ତାଳେ ଆନନ୍ଦ ଉଲ୍ଲାସରେ ନାଚନ୍ତି।"
    }
  }
];
