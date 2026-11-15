// Odisha Music Archive - 5 Primary Streams
export interface OdishaMusicSubtype {
  name: string;
  odiaName: string;
  description: string;
}

export interface OdishaMusic {
  id: string;
  number: number;
  title: string;
  odiaTitle: string;
  image: string;
  subtitle: string;
  origin: string;
  overview: string;
  subtypes: OdishaMusicSubtype[];
  ragas: string[];
  instruments: string[];
  story: {
    hi: string;
    en: string;
    or: string;
  };
}

export const ODISHA_MUSIC: OdishaMusic[] = [
  {
    "id": "classical-music",
    "number": 1,
    "title": "शास्त्रीय संगीत (Classical Music)",
    "odiaTitle": "ଶାସ୍ତ୍ରୀୟ ଓଡ଼ିଶୀ ସଙ୍ଗୀତ",
    "image": "/music/classical-music.jpg?v=2",
    "subtitle": "Odissi Sangita & Gita Govinda Tradition",
    "origin": "Puri Jagannath Temple & Ancient Kalinga Shastras",
    "overview": "ओडिशा का शास्त्रीय संगीत भारत की सबसे समृद्ध और प्राचीन संगीत शैलियों में से एक है, जो उत्तर भारतीय (हिन्दुस्तानी) और दक्षिण भारतीय (कर्नाटक) दोनों से पूर्णतः स्वतंत्र अपनी विशिष्ट राग, ताल और प्रबंध परंपरा पर आधारित है।",
    "subtypes": [
      {
        "name": "ओडिसी संगीत (Odissi Sangita)",
        "odiaName": "ଓଡ଼ିଶୀ ସଙ୍ଗୀତ",
        "description": "ओडिशा का पारंपरिक शास्त्रीय संगीत। इसके चार मुख्य अंग हैं: ध्रुवपद (Dhruvapada - गंभीर भक्तिमय गायकी), चित्रकला (Chitrakala - कलात्मक राग विस्तार), चित्रपद (Chitrapada - छंदबद्ध पद गायन) और पंचाल (Panchal - द्रुत गति की राग बंदिशें)।"
      },
      {
        "name": "गीत गोविंद (Gita Govinda)",
        "odiaName": "ଗୀତ ଗୋବିନ୍ଦ",
        "description": "12वीं शताब्दी में महाकवि जयदेव द्वारा रचित संस्कृत के अमर शास्त्रीय अष्टपदी पद, जो भगवान जगन्नाथ के नित्य सेवा अनुष्ठान और मंदिर परंपरा का अभिन्न अंग हैं।"
      }
    ],
    "ragas": [
      "मंगल गुर्जरी (Mangala Gujjari)",
      "धनश्री (Dhanasri)",
      "कामोदी (Kamodi)",
      "कल्याण (Kalyana)",
      "बड़ाड़ी (Baradi)"
    ],
    "instruments": [
      "मर्दल (Mardala)",
      "बांसुरी (Venu)",
      "तानपुरा (Tanpura)",
      "गिनी / मंजीरा (Gini)",
      "वायलिन / सितार"
    ],
    "story": {
      "hi": "ओडिसी शास्त्रीय संगीत का इतिहास 2000 वर्ष पुराना है। भरतमुनि के 'नाट्यशास्त्र' में इसे 'ओड्र-मागधी' शैली के रूप में मान्यता दी गई है। यह संगीत भगवान जगन्नाथ की उपासना से विकसित हुआ, जहां हर रात महाप्रभु के शयन के समय जयदेव की अष्टपदी गाई जाती है। यह शास्त्रीयता, भक्ति और काव्य का दिव्य समन्वय है।",
      "en": "Odissi classical music is an independent classical tradition of India, mentioned as Audra-Magadhi in the Natya Shastra. Rooted in the daily sevas of Lord Jagannath, its primary limbs include Dhruvapada, Chitrakala, Chitrapada, and Panchal, sung to the rhythmic majesty of the Mardala.",
      "or": "ଓଡ଼ିଶୀ ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତ ଏକ ସ୍ୱତନ୍ତ୍ର ଓ ପ୍ରାଚୀନ ପରମ୍ପରା। ଏହାର ମୁଖ୍ୟ ଚାରୋଟି ଅଙ୍ଗ ହେଉଛି ଧ୍ରୁବପଦ, ଚିତ୍ରକଳା, ଚିତ୍ରପଦ ଓ ପଞ୍ଚାଳ। ଶ୍ରୀଜଗନ୍ନାଥ ମନ୍ଦିରରେ ଜୟଦେବଙ୍କ ଗୀତଗୋବିନ୍ଦ ଗାନ ଏହାର ମୁଖ୍ୟ ଆଧାର।"
    }
  },
  {
    "id": "light-classical-devotional",
    "number": 2,
    "title": "उप-शास्त्रीय और भक्ति संगीत (Light-Classical & Devotional Music)",
    "odiaTitle": "ଉପ-ଶାସ୍ତ୍ରୀୟ ଓ ଭକ୍ତି ସଙ୍ଗୀତ",
    "image": "/music/light-classical.jpg?v=2",
    "subtitle": "Bhajan, Janana & Khanjani Traditions",
    "origin": "Puri, Cuttack & Rural Bhakti Mathas",
    "overview": "ओडिशा की आत्मा भगवान जगन्नाथ की भक्ति में बसी है। उप-शास्त्रीय और भक्ति संगीत व्यक्तिगत आत्मसमर्पण, आर्त-प्रार्थना और निर्गुण रहस्यवाद का मधुरतम रूप है।",
    "subtypes": [
      {
        "name": "भजन (Bhajan)",
        "odiaName": "ଭଜନ",
        "description": "भगवान जगन्नाथ, श्री कृष्ण और शिव की स्तुति में गाए जाने वाले भावपूर्ण भक्ति गीत, जो भक्त कवि सालबेग, बनमाली दास, और दीनकृष्ण दास द्वारा रचित हैं।"
      },
      {
        "name": "जणाण (Janana)",
        "odiaName": "ଜଣାଣ",
        "description": "भगवान जगन्नाथ के प्रति व्यक्तिगत आर्त भाव, अनन्य समर्पण और संकट में रक्षक के रूप में पुकारने वाले अत्यंत मार्मिक पद (जैसे 'आहे नील शैल')।"
      },
      {
        "name": "खंजनी भजन (Khanjani Bhajana)",
        "odiaName": "ଖଞ୍ଜଣି ଭଜନ",
        "description": "हाथ में छोटे डफ (खंजनी) और झांझ के साथ गाया जाने वाला महिमा धर्म और संतों का निर्गुण भक्ति संगीत, जिसे संत कवि भीम भोई ने अमर बनाया।"
      }
    ],
    "ragas": [
      "भैरवी",
      "काफी",
      "मिश्र काफी",
      "झिंझोटी",
      "देसी राग"
    ],
    "instruments": [
      "खंजनी (Khanjani)",
      "हारमोनियम (Harmonium)",
      "पखावज / मृदंग",
      "गिनी / करताल (Kartal)"
    ],
    "story": {
      "hi": "ओडिशा का भक्ति संगीत केवल गाने के लिए नहीं, बल्कि अश्रुओं से ईश्वर को पुकारने के लिए है। भक्त सालबेग (एक मुस्लिम सेनापति के पुत्र) जब गंभीर रूप से बीमार हुए और रथयात्रा में प्रभु जगन्नाथ के रथ के दर्शन करने पहुंचे, तो उनके द्वारा रचित 'आहे नील शैल' जणाण गाते ही भगवान का नंदीघोष रथ उनके सामने आकर रुक गया था। यह संगीत उसी अटूट विश्वास की जीवित धारा है।",
      "en": "Light-Classical and Devotional music of Odisha embodies personal surrender and mystical longing for Lord Jagannath. From the soul-stirring Jananas of Salabega to the philosophical Khanjani Bhajans of saint-poet Bhima Bhoi, this music is sung in every village and temple.",
      "or": "ଓଡ଼ିଶାର ଭକ୍ତି ସଙ୍ଗୀତରେ ଭଜନ, ଜଣାଣ ଓ ଖଞ୍ଜଣି ଭଜନ ପ୍ରଧାନ। ଭକ୍ତ ସାଲବେଗ, ବନମାଳୀ ଓ ଭୀମ ଭୋଇଙ୍କ ରଚିତ ଭକ୍ତିପଦ ଶ୍ରୀଜଗନ୍ନାଥଙ୍କ ନିକଟରେ ଅତୁଟ ଭକ୍ତିର ପ୍ରତୀକ।"
    }
  },
  {
    "id": "light-music",
    "number": 3,
    "title": "सुगम संगीत (Light Music - Chhanda & Champu)",
    "odiaTitle": "ସୁଗମ ସଙ୍ଗୀତ (ଛାନ୍ଦ ଓ ଚମ୍ପୂ)",
    "image": "/music/light-music.jpg?v=2",
    "subtitle": "Poetic Masterpieces of Kavi Samrat & Kavisurya",
    "origin": "Ancient Palm Leaf (Tala Patra) Manuscripts & Royal Courts",
    "overview": "ओड़िया साहित्य और संगीत का स्वर्णिम संगम। छंद और चंपू संगीत शास्त्रीय व्याकरण और लोक सुगमता के बीच का वह सेतु है जो अत्यंत कर्णप्रिय और काव्यमय है।",
    "subtypes": [
      {
        "name": "छंद (Chhanda)",
        "odiaName": "ଛାନ୍ଦ",
        "description": "विशेष लय, वृत्तों और छंदों (जैसे रसकुल्या, चोखी, मंगला, बंगश्री) में गाई जाने वाली पारंपरिक ओड़िया महाकाव्य रचनाएँ (कवि सम्राट उपेंद्र भंज और अभिमन्यु सामंतसिंहार की कृतियां)।"
      },
      {
        "name": "चंपू (Champu)",
        "odiaName": "ଚମ୍ପୂ",
        "description": "गद्य और पद्य के उत्कृष्ट मिश्रण वाली संगीतमय रचनाएँ, जिनमें हर पद ओड़िया वर्णमाला के एक अक्षर से शुरू होता है (जैसे कवि सूर्य बलदेव रथ का 'किशोर चंद्रानंद चंपू')।"
      },
      {
        "name": "पद्यावली और आधुनिक ओडिया गीत",
        "odiaName": "ପଦ୍ୟାବଳୀ ଓ ଆଧୁନିକ ଗୀତ",
        "description": "भावपूर्ण काव्य गीत, आधुनिक ओड़िया सुगम संगीत और प्रकृति व प्रेम के माधुर्य से सजे सुरीले गीत।"
      }
    ],
    "ragas": [
      "चोखी (Chokhi)",
      "बंगालश्री (Bangalashri)",
      "कलहंस केदार",
      "रसकुल्या"
    ],
    "instruments": [
      "हारमोनियम",
      "तबला",
      "सितार",
      "बांसुरी",
      "तानपुरा"
    ],
    "story": {
      "hi": "मध्यकालीन ओडिशा में जब ताड़पत्रों पर लोहे की लेखनी से काव्य उकेरे जाते थे, तब कवि केवल कविता नहीं लिखते थे, बल्कि हर छंद के ऊपर उसकी गायन रागिनी (वृत्त) तय करते थे। 'किशोर चंद्रानंद चंपू' में 'क' से लेकर 'क्ष' तक हर वर्ण से एक स्वतंत्र गीत की रचना की गई, जिसे आज भी हर संगीत प्रेमी बड़े आदर से गाता है। यह ओड़िया भाषा की संगीतमय समृद्धि का सर्वोच्च उदाहरण है।",
      "en": "Light music of Odisha flourishes through Chhanda (metrical poetic verse) and Champu (lyrical blend of prose and poetry). Celebrated in the works of Kavi Samrat Upendra Bhanja and Kavisurya Baladev Rath, each piece is tuned to melodic classical meters.",
      "or": "ଛାନ୍ଦ ଓ ଚମ୍ପୂ ଓଡ଼ିଆ ସାହିତ୍ୟ ଓ ସଙ୍ଗୀତର ମଣିକାଞ୍ଚନ ସଂଯୋଗ। କବିସମ୍ରାଟ ଉପେନ୍ଦ୍ର ଭଞ୍ଜ ଓ କବିସୂର୍ଯ୍ୟ ବଳଦେବ ରଥଙ୍କ ସୁମଧୁର ରଚନା ସୁଗମ ସଙ୍ଗୀତର ଶ୍ରେଷ୍ଠ ନିଦର୍ଶନ।"
    }
  },
  {
    "id": "folk-music",
    "number": 4,
    "title": "लोक संगीत (Folk Music)",
    "odiaTitle": "ଲୋକ ସଙ୍ଗୀତ (ସମ୍ବଲପୁରୀ ଓ ଉପକୂଳ ଲୋକଗୀତ)",
    "image": "/music/folk-music.jpg?v=2",
    "subtitle": "Sambalpuri, Dalkhai, Pala & Daskathia",
    "origin": "Western Odisha (Sambalpur, Bargarh) & Coastal River Plains",
    "overview": "ओडिशा की माटी, खेतों की हरियाली, नदियों की कल-कल और ग्रामीणों के सीधे-सरल उल्लास से उपजा लोक संगीत, जिसकी ऊर्जा सुनते ही तन-मन को थिरकने पर मजबूर कर देती है।",
    "subtypes": [
      {
        "name": "संबलपुरी व पश्चिमी ओडिया लोकगीत",
        "odiaName": "ସମ୍ବଲପୁରୀ ଲୋକଗୀତ",
        "description": "डालखाई (Dalkhai), रसरकेली (Rasarkeli), मायलाजड़ा (Mayalajada), करमा गीत (Karma Gita) और घुमुरा (Ghumura) के ऊर्जावान लोकगीत।"
      },
      {
        "name": "कथावाचन और गाथा गीत",
        "odiaName": "ପାଲା ଓ ଦାସକାଠିଆ",
        "description": "पाला (Pala - चंवर और झांझ के साथ शास्त्रीय-लोक कथावाचन) और दसकाठिया (Daskathia - काठ की दो पट्टियों 'काठिया' की खनकती थाप पर रामायण/पौराणिक कथा गायन)।"
      },
      {
        "name": "अन्य पारंपरिक लोकगीत",
        "odiaName": "ଅନ୍ୟାନ୍ୟ ପାରମ୍ପରିକ ଲୋକଗୀତ",
        "description": "घोड़ा नाच गीत (Ghoda Nacha), जोगी गीत (केंदरा वाद्य पर गाए जाने वाले वैराग्य गीत), केंदरा गीत, और रज पर्व के झूले के रज गीत (Raja Geeta)।"
      }
    ],
    "ragas": [
      "संबलपुरी धुन",
      "लोक धुन",
      "राग पहाड़ी",
      "दादरा व कहरवा ताल"
    ],
    "instruments": [
      "ढोल (Dhol)",
      "मादल (Madal)",
      "निशान (Nishan)",
      "ताशा (Tasha)",
      "माहुरी (Mahuri)",
      "केंदरा (Kendara)",
      "काठिया (Kathia)"
    ],
    "story": {
      "hi": "ओडिशा के लोकगीत जीवन के हर मोड़ के साथी हैं। जब वसंत में कोयल कूकती है तो संबलपुर की घाटियों में 'डालखाई रे...' की गूंज सुनाई देती है; जब चैत्र आता है तो मछुआरे ढोल-माहुरी के साथ घोड़ा नाच गाते हैं; और जब सावन के झूले पड़ते हैं तो युवतियां 'बनस्ते डाकिले गज...' रज गीत गाती हैं। यह संगीत प्रकृति के साथ अटूट जुड़ाव का उत्सव है।",
      "en": "Folk music of Odisha resonates with infectious rhythm and earthy warmth. It includes the thunderous vitality of Sambalpuri Dalkhai and Rasarkeli, the storytelling brilliance of Pala and Daskathia, and melodic Jogi and Raja folk songs.",
      "or": "ଓଡ଼ିଶାର ଲୋକ ସଙ୍ଗୀତରେ ଡାଲଖାଇ, ରସରକେଲି, ପାଲା, ଦାସକାଠିଆ ଓ ଘୋଡ଼ା ନାଚ ଗୀତ ଅନ୍ତର୍ଭୁକ୍ତ। ଏହି ସଙ୍ଗୀତ ଓଡ଼ିଶାର ଗ୍ରାମୀଣ ଜୀବନର ସାଂସ୍କୃତିକ ପରିଚୟ।"
    }
  },
  {
    "id": "tribal-music",
    "number": 5,
    "title": "जनजातीय संगीत (Tribal Music)",
    "odiaTitle": "ଜନଜାତୀୟ ସଙ୍ଗୀତ",
    "image": "/music/tribal-music.jpg?v=2",
    "subtitle": "Indigenous Rhythms of Santal, Kandha, Sora & Juang",
    "origin": "Mayurbhanj, Koraput, Keonjhar & Eastern Ghats Forests",
    "overview": "ओडिशा की 62 से अधिक जनजातियों की सदियों पुरानी आदिम संगीतमय परंपरा। यह संगीत किसी बनावट से परे प्रकृति, वन, वर्षा, वन्यजीवों और पुरखों की आत्माओं के प्रति निष्कपट आभार है।",
    "subtypes": [
      {
        "name": "प्रमुख भाषाएँ और बोलियाँ",
        "odiaName": "ପ୍ରମୁଖ ଆଦିବାସୀ ଭାଷା",
        "description": "संथाली (Santali), कुई (Kui - कंध जनजाति), मुंडारी (Mundari), हो (Ho), सौरा (Sora), बोंडा (Bonda) और देसिया (Desia) बोलियों में रचित गीत।"
      },
      {
        "name": "चांगु संगीत (Changu Music)",
        "odiaName": "ଚାଙ୍ଗୁ ଗୀତ",
        "description": "जुआंग और भुइयां जनजाति का प्रसिद्ध संगीत, जिसमें गोलाकार बड़े डफ (चांगु) को डंडे से बजाते हुए युवक-युवतियां सामूहिक नृत्य करते हैं।"
      },
      {
        "name": "उत्सव व पर्व गीत",
        "odiaName": "ପର୍ବପର୍ବାଣି ଗୀତ",
        "description": "दंड नाच / दंड गाना (Danda Gana), नुआखाई और चैत परब (Chaita Parba) जैसे फसली व मौसमी उत्सवों पर गाए जाने वाले सामूहिक गान।"
      }
    ],
    "ragas": [
      "प्रकृति की आदिम लय",
      "पेंटाटोनिक स्केल (Pentatonic Tribal Modes)"
    ],
    "instruments": [
      "चांगु (Changu Drum)",
      "मादल (Madal)",
      "धुम्पा (Dhumpa)",
      "तिरिओ (Tirio Bamboo Flute)",
      "घंटा"
    ],
    "story": {
      "hi": "जनजातीय संगीत केवल मनोरंजन नहीं है, बल्कि प्रकृति के साथ सह-अस्तित्व की प्रार्थना है। जब मयूरभंज के जंगलों में संथाली मादल बजता है या कोरापुट की पहाड़ियों में बोंडा और कंध युवतियां सामूहिक सुर मिलाती हैं, तो ऐसा लगता है जैसे स्वयं वनदेवी गा रही हों। चांगु की गूंज दूर-दूर तक पहाड़ियों में फैल जाती है और पूरा गांव एक ताल, एक गति में बंध जाता है।",
      "en": "Odisha is home to 62 indigenous tribes, each preserving an unadulterated musical heritage. Sung in Santali, Kui, Mundari, Ho, Sora, and Bonda languages, tribal music uses frame drums like the Changu, flutes, and organic rhythmic chants honoring mother earth.",
      "or": "ଓଡ଼ିଶାର ୬୨ଟି ଜନଜାତିଙ୍କ ପାରମ୍ପରିକ ସଙ୍ଗୀତ ପ୍ରକୃତି ଓ ଜଙ୍ଗଲ ସହିତ ଗଭୀର ଭାବେ ଜଡ଼ିତ। ଚାଙ୍ଗୁ ବାଦ୍ୟ, ମାଦଳ ଓ ତିରିଓ ବଂଶୀ ସହିତ ସାନ୍ତାଳୀ, କୁଇ ଓ ମୁଣ୍ଡାରୀ ଭାଷାରେ ଏହି ସଙ୍ଗୀତ ଗାନ କରାଯାଏ।"
    }
  }
];
