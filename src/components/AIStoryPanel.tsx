import { useEffect, useMemo } from 'react';

const specificStories: Record<string, Record<'English' | 'Hindi' | 'Odia', string>> = {
  'Konark Sun Temple': {
    English: `Konark Sun Temple, located on the shores of the Bay of Bengal, is a brilliant testament to Odisha's medieval architecture. Built in the 13th century by King Narasimhadeva I, the temple is designed in the shape of a colossal chariot dedicated to the Sun God, Surya.\n\nThe temple features 24 intricately carved stone wheels and is pulled by seven horses. The walls are adorned with exquisite sculptures depicting daily life, mythical creatures, and divine beings. It is a UNESCO World Heritage site and a masterpiece of Kalinga architecture.\n\nDespite the passage of time and natural decay, the remaining structure continues to awe visitors with its precise astronomical alignments and breathtaking artistry.`,
    Hindi: `कोणार्क सूर्य मंदिर, बंगाल की खाड़ी के तट पर स्थित, ओडिशा की मध्ययुगीन वास्तुकला का एक शानदार प्रमाण है। 13वीं शताब्दी में राजा नरसिंहदेव प्रथम द्वारा निर्मित, यह मंदिर सूर्य देव को समर्पित एक विशाल रथ के आकार में बनाया गया है।\n\nमंदिर में 24 जटिल नक्काशीदार पत्थर के पहिये हैं और इसे सात घोड़ों द्वारा खींचा जाता है। दीवारें दैनिक जीवन, पौराणिक जीवों और दिव्य प्राणियों को दर्शाती उत्कृष्ट मूर्तियों से सजी हैं। यह एक यूनेस्को विश्व धरोहर स्थल है और कलिंग वास्तुकला की एक उत्कृष्ट कृति है।\n\nसमय बीतने और प्राकृतिक क्षय के बावजूद, शेष संरचना अपने सटीक खगोलीय संरेखण और लुभावनी कलात्मकता से आगंतुकों को चकित करती रहती है।`,
    Odia: `ବଙ୍ଗୋପସାଗର ଉପକୂଳରେ ଅବସ୍ଥିତ କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ଓଡ଼ିଶାର ମଧ୍ୟଯୁଗୀୟ ସ୍ଥାପତ୍ୟର ଏକ ଉଜ୍ଜ୍ୱଳ ପ୍ରମାଣ। ୧୩ଶ ଶତାବ୍ଦୀରେ ରାଜା ନରସିଂହଦେବ ପ୍ରଥମଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ଏହି ମନ୍ଦିର ସୂର୍ଯ୍ୟ ଦେବତାଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ଏକ ବିଶାଳ ରଥ ଆକାରରେ ନିର୍ମିତ।\n\nଏହି ମନ୍ଦିରରେ ୨୪ଟି ଜଟିଳ ଖୋଦିତ ପଥର ଚକ ରହିଛି ଏବଂ ଏହାକୁ ସାତୋଟି ଘୋଡ଼ା ଟାଣୁଛନ୍ତି। କାନ୍ଥଗୁଡ଼ିକ ଦୈନନ୍ଦିନ ଜୀବନ, ପୌରାଣିକ ଜୀବ ଏବଂ ଦୈବୀ ସତ୍ତାକୁ ଦର୍ଶାଉଥିବା ସୁନ୍ଦର ମୂର୍ତ୍ତିଗୁଡ଼ିକରେ ସଜ୍ଜିତ। ଏହା ଏକ ୟୁନେସ୍କୋ ବିଶ୍ୱ ଐତିହ୍ୟ ସ୍ଥଳ ଏବଂ କଳିଙ୍ଗ ସ୍ଥାପତ୍ୟର ଏକ ମହାନ କୃତି।\n\nସମୟର ଅତିକ୍ରମ ଏବଂ ପ୍ରାକୃତିକ କ୍ଷୟ ସତ୍ତ୍ୱେ, ଅବଶିଷ୍ଟ ଗଠନ ଏହାର ସଠିକ୍ ଜ୍ୟୋତିର୍ବିଜ୍ଞାନ ଆଲାଇନମେଣ୍ଟ ଏବଂ ଆଶ୍ଚର୍ଯ୍ୟଜନକ କଳାକୃତି ସହିତ ପରିଦର୍ଶକମାନଙ୍କୁ ଆଶ୍ଚର୍ଯ୍ୟ କରିଚାଲିଛି।`
  },
  'Jagannath Temple Puri': {
    English: `The Shree Jagannath Temple of Puri is an important Hindu temple dedicated to Lord Jagannath, a form of Vishnu. Built in the 12th century by King Anantavarman Chodaganga Deva, it is one of the Char Dham pilgrimage sites.\n\nThe temple is famous for its annual Rath Yatra, or chariot festival, in which the three principal deities are pulled on huge and elaborately decorated temple cars. The temple complex is massive, covering an area of over 400,000 square feet, and is surrounded by a high fortified wall.\n\nThe food offered to the deity, known as Mahaprasad, is cooked in the world's largest kitchen within the temple premises and is distributed to thousands of devotees daily.`,
    Hindi: `पुरी का श्री जगन्नाथ मंदिर विष्णु के एक रूप भगवान जगन्नाथ को समर्पित एक महत्वपूर्ण हिंदू मंदिर है। 12वीं शताब्दी में राजा अनंतवर्मन चोडगंग देव द्वारा निर्मित, यह चार धाम तीर्थ स्थलों में से एक है।\n\nयह मंदिर अपनी वार्षिक रथ यात्रा या रथ उत्सव के लिए प्रसिद्ध है, जिसमें तीन प्रमुख देवताओं को विशाल और विस्तृत रूप से सजाए गए मंदिर के रथों पर खींचा जाता है। मंदिर परिसर विशाल है, जो 400,000 वर्ग फुट से अधिक क्षेत्र को कवर करता है, और एक उच्च किलेबंद दीवार से घिरा हुआ है।\n\nदेवता को चढ़ाया जाने वाला भोजन, जिसे महाप्रसाद के रूप में जाना जाता है, मंदिर परिसर के भीतर दुनिया की सबसे बड़ी रसोई में पकाया जाता है और प्रतिदिन हजारों भक्तों को वितरित किया जाता है।`,
    Odia: `ପୁରୀର ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିର ହେଉଛି ଭଗବାନ ବିଷ୍ଣୁଙ୍କ ରୂପ ଭଗବାନ ଜଗନ୍ନାଥଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ହିନ୍ଦୁ ମନ୍ଦିର। ୧୨ଶ ଶତାବ୍ଦୀରେ ରାଜା ଅନନ୍ତବର୍ମନ ଚୋଡ଼ଗଙ୍ଗ ଦେବଙ୍କ ଦ୍ୱାରା ନିର୍ମିତ ଏହା ଚାରି ଧାମ ତୀର୍ଥସ୍ଥାନ ମଧ୍ୟରୁ ଅନ୍ୟତମ।\n\nଏହି ମନ୍ଦିର ଏହାର ବାର୍ଷିକ ରଥ ଯାତ୍ରା ପାଇଁ ପ୍ରସିଦ୍ଧ, ଯେଉଁଥିରେ ତିନି ପ୍ରମୁଖ ଦେବତାଙ୍କୁ ବିଶାଳ ଏବଂ ସୁସଜ୍ଜିତ ମନ୍ଦିର ରଥରେ ଟାଣି ନିଆଯାଏ। ମନ୍ଦିର ପରିସର ବିଶାଳ, ଯାହା ୪୦୦,୦୦୦ ବର୍ଗ ଫୁଟରୁ ଅଧିକ ଅଞ୍ଚଳରେ ବ୍ୟାପ୍ତ ଏବଂ ଏକ ଉଚ୍ଚ ପ୍ରାଚୀର ଦ୍ୱାରା ପରିବେଷ୍ଟିତ।\n\nଦେବତାଙ୍କୁ ଅର୍ପଣ କରାଯାଉଥିବା ଖାଦ୍ୟ ମହାପ୍ରସାଦ ଭାବରେ ଜଣାଶୁଣା, ମନ୍ଦିର ପରିସର ମଧ୍ୟରେ ଥିବା ବିଶ୍ୱର ସର୍ବବୃହତ ରୋଷେଇ ଘରେ ପ୍ରସ୍ତୁତ କରାଯାଏ ଏବଂ ପ୍ରତିଦିନ ହଜାର ହଜାର ଭକ୍ତଙ୍କୁ ବଣ୍ଟନ କରାଯାଏ।`
  },
  'Taj Mahal': {
    English: `The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.\n\nRenowned for its unparalleled beauty and perfect symmetry, the Taj Mahal integrates elements of Islamic, Persian, and Indian architectural styles. The complex includes a mosque, a guest house, and formal gardens surrounded by a crenellated wall on three sides.\n\nRecognized as a UNESCO World Heritage site and one of the New Seven Wonders of the World, it stands as a universal symbol of eternal love and attracts millions of visitors from across the globe each year.`,
    Hindi: `ताजमहल भारतीय शहर आगरा में यमुना नदी के दाहिने किनारे पर एक हाथीदांत-सफेद संगमरमर का मकबरा है। इसे 1632 में मुगल सम्राट शाहजहाँ ने अपनी पसंदीदा पत्नी मुमताज महल के मकबरे को रखने के लिए चालू किया था।\n\nअपनी अद्वितीय सुंदरता और पूर्ण समरूपता के लिए प्रसिद्ध, ताजमहल इस्लामी, फ़ारसी और भारतीय वास्तुकला शैलियों के तत्वों को एकीकृत करता है। परिसर में एक मस्जिद, एक अतिथि गृह और तीन तरफ एक विस्तृत दीवार से घिरे औपचारिक उद्यान शामिल हैं।\n\nयूनेस्को की विश्व धरोहर स्थल और दुनिया के सात नए अजूबों में से एक के रूप में मान्यता प्राप्त, यह शाश्वत प्रेम के सार्वभौमिक प्रतीक के रूप में खड़ा है और हर साल दुनिया भर से लाखों आगंतुकों को आकर्षित करता है।`,
    Odia: `ତାଜମହଲ ହେଉଛି ଭାରତୀୟ ସହର ଆଗ୍ରାରେ ଯମୁନା ନଦୀର ଡାହାଣ କୂଳରେ ଥିବା ଏକ ଧଳା ମାର୍ବଲ୍ ସମାଧି। ନିଜର ପ୍ରିୟ ପତ୍ନୀ ମୁମତାଜ ମହଲଙ୍କ ସମାଧି ରଖିବା ପାଇଁ ୧୬୩୨ ମସିହାରେ ମୋଗଲ ସମ୍ରାଟ ଶାହଜାହାନଙ୍କ ଦ୍ୱାରା ଏହା ନିର୍ମିତ ହୋଇଥିଲା।\n\nଏହାର ଅଦ୍ୱିତୀୟ ସୌନ୍ଦର୍ଯ୍ୟ ଏବଂ ସିଦ୍ଧ ସମମିତି ପାଇଁ ପ୍ରସିଦ୍ଧ ତାଜମହଲ ଇସଲାମୀୟ, ପାରସ୍ୟ ଏବଂ ଭାରତୀୟ ସ୍ଥାପତ୍ୟ ଶୈଳୀର ଉପାଦାନଗୁଡ଼ିକୁ ଏକତ୍ର କରିଥାଏ। ଏହି ପରିସରରେ ଏକ ମସଜିଦ, ଏକ ଅତିଥି ଗୃହ ଏବଂ ତିନି ପାର୍ଶ୍ୱରେ ପ୍ରାଚୀର ଦ୍ୱାରା ପରିବେଷ୍ଟିତ ଆନୁଷ୍ଠାନିକ ଉଦ୍ୟାନ ଅନ୍ତର୍ଭୁକ୍ତ।\n\nୟୁନେସ୍କୋ ବିଶ୍ୱ ଐତିହ୍ୟ ସ୍ଥଳ ଏବଂ ବିଶ୍ୱର ସାତୋଟି ନୂତନ ଆଶ୍ଚର୍ଯ୍ୟ ମଧ୍ୟରୁ ଅନ୍ୟତମ ଭାବରେ ସ୍ୱୀକୃତିପ୍ରାପ୍ତ ଏହା ଅନନ୍ତ ପ୍ରେମର ଏକ ସାର୍ବଜନୀନ ପ୍ରତୀକ ଭାବରେ ଠିଆ ହୋଇଛି ଏବଂ ପ୍ରତିବର୍ଷ ବିଶ୍ୱର ବିଭିନ୍ନ ପ୍ରାନ୍ତରୁ ଲକ୍ଷ ଲକ୍ଷ ପର୍ଯ୍ୟଟକଙ୍କୁ ଆକର୍ଷିତ କରିଥାଏ।`
  },
  'Kodaikanal': {
    English: `Kodaikanal, often referred to as the "Princess of Hill Stations", is a popular tourist destination in Tamil Nadu. Nestled in the rolling hills of the Palani range, it was established by American Christian missionaries and British bureaucrats in the mid-19th century to escape the high temperatures of the plains.\n\nThe town is centered around the star-shaped, man-made Kodaikanal Lake. Visitors are drawn to its scenic beauty, including the Coaker's Walk, Pillar Rocks, and the Kurinji Andavar Temple, famous for the Kurinji flower that blooms once every 12 years.\n\nToday, Kodaikanal remains a serene retreat, blending natural beauty with colonial-era charm. Efforts are ongoing to preserve its fragile ecosystem and protect its rich biodiversity from over-tourism.`,
    Hindi: `कोडाइकनाल, जिसे अक्सर 'हिल स्टेशनों की राजकुमारी' कहा जाता है, तमिलनाडु में एक लोकप्रिय पर्यटन स्थल है। पलानी श्रृंखला की घुमावदार पहाड़ियों में बसा, इसे 19वीं सदी के मध्य में मैदानी इलाकों के उच्च तापमान से बचने के लिए अमेरिकी ईसाई मिशनरियों और ब्रिटिश नौकरशाहों द्वारा स्थापित किया गया था।\n\nयह शहर तारे के आकार की, मानव निर्मित कोडाइकनाल झील के चारों ओर केंद्रित है। आगंतुक इसकी प्राकृतिक सुंदरता की ओर आकर्षित होते हैं, जिसमें कोकर्स वॉक, पिलर रॉक्स और कुरिंजी अंदावर मंदिर शामिल हैं, जो कुरिंजी फूल के लिए प्रसिद्ध है जो हर 12 साल में एक बार खिलता है।\n\nआज, कोडाइकनाल एक शांत आश्रय स्थल बना हुआ है, जो औपनिवेशिक युग के आकर्षण के साथ प्राकृतिक सुंदरता का मिश्रण है। इसके नाजुक पारिस्थितिकी तंत्र को संरक्षित करने और इसकी समृद्ध जैव विविधता को अत्यधिक पर्यटन से बचाने के प्रयास जारी हैं।`,
    Odia: `କୋଡାଇକାନାଲ୍, ଯାହାକୁ ପ୍ରାୟତଃ 'ପାର୍ବତ୍ୟ ସ୍ଥାନମାନଙ୍କର ରାଜକୁମାରୀ' କୁହାଯାଏ, ତାମିଲନାଡୁର ଏକ ଲୋକପ୍ରିୟ ପର୍ଯ୍ୟଟନ ସ୍ଥଳ। ପଲାନି ପର୍ବତମାଳାରେ ଅବସ୍ଥିତ, ଏହାକୁ ୧୯ଶ ଶତାବ୍ଦୀର ମଧ୍ୟଭାଗରେ ସମତଳ ଅଞ୍ଚଳର ଅତ୍ୟଧିକ ଗରମରୁ ରକ୍ଷା ପାଇବା ପାଇଁ ଆମେରିକୀୟ ଖ୍ରୀଷ୍ଟିଆନ ମିଶନାରୀ ଏବଂ ବ୍ରିଟିଶ ଅଧିକାରୀମାନଙ୍କ ଦ୍ୱାରା ପ୍ରତିଷ୍ଠା କରାଯାଇଥିଲା।\n\nଏହି ସହରଟି ତାରା ଆକାରର, ମନୁଷ୍ୟକୃତ କୋଡାଇକାନାଲ ହ୍ରଦକୁ କେନ୍ଦ୍ର କରି ଗଢ଼ି ଉଠିଛି। ପର୍ଯ୍ୟଟକମାନେ ଏହାର ପ୍ରାକୃତିକ ସୌନ୍ଦର୍ଯ୍ୟ ପ୍ରତି ଆକର୍ଷିତ ହୁଅନ୍ତି, ଯେଉଁଥିରେ କୋକର୍ସ ୱାକ୍, ପିଲାର୍ ରକ୍ସ ଏବଂ କୁରିଞ୍ଜି ଆଣ୍ଡାଭର ମନ୍ଦିର ଅନ୍ତର୍ଭୁକ୍ତ, ଯାହା ୧୨ ବର୍ଷରେ ଥରେ ଫୁଟୁଥିବା କୁରିଞ୍ଜି ଫୁଲ ପାଇଁ ପ୍ରସିଦ୍ଧ।\n\nଆଜି, କୋଡାଇକାନାଲ୍ ଏକ ଶାନ୍ତ ଆଶ୍ରୟସ୍ଥଳୀ ହୋଇ ରହିଛି, ଯାହା ପ୍ରାକୃତିକ ସୌନ୍ଦର୍ଯ୍ୟ ସହିତ ଔପନିବେଶିକ ଯୁଗର ଆକର୍ଷଣକୁ ମିଶ୍ରଣ କରେ। ଏହାର ସୂକ୍ଷ୍ମ ପରିବେଶକୁ ସଂରକ୍ଷଣ କରିବା ଏବଂ ଏହାର ସମୃଦ୍ଧ ଜୈବ ବିବିଧତାକୁ ଅତ୍ୟଧିକ ପର୍ଯ୍ୟଟନରୁ ରକ୍ଷା କରିବା ପାଇଁ ପ୍ରୟାସ ଜାରି ରହିଛି।`
  }
};

const getStory = (site: string, lang: 'English' | 'Hindi' | 'Odia') => {
  if (specificStories[site] && specificStories[site][lang]) {
    return specificStories[site][lang];
  }
  
  // Dynamic fallback for all other 60-70 places to ensure rich 3-paragraph details
  const eng = `${site} is one of the most prominent historical and cultural landmarks in India, drawing thousands of tourists and history enthusiasts every year. Its breathtaking architecture and deep-rooted heritage make it a must-visit destination for anyone looking to understand the rich tapestry of Indian history.\n\nVisitors to ${site} are often mesmerized by the intricate details and the grand scale of the site. Local guides and traditional storytellers pass down fascinating legends about its creation, ensuring that the legacy of this incredible place lives on for future generations.\n\nToday, ${site} stands not just as a relic of the past, but as a vibrant symbol of cultural preservation. Efforts are continuously being made to protect its ecological and historical integrity, ensuring it remains pristine for centuries to come.`;

  const hin = `${site} भारत के सबसे प्रमुख ऐतिहासिक और सांस्कृतिक स्थलों में से एक है, जो हर साल हजारों पर्यटकों और इतिहास के प्रति उत्साही लोगों को आकर्षित करता है। इसकी लुभावनी वास्तुकला और गहरी जड़ें वाली विरासत इसे भारतीय इतिहास को समझने की चाह रखने वाले किसी भी व्यक्ति के लिए एक दर्शनीय स्थल बनाती है।\n\n${site} के आगंतुक अक्सर जटिल विवरणों और स्थल के भव्य पैमाने से मंत्रमुग्ध हो जाते हैं। स्थानीय गाइड और पारंपरिक कहानीकार इसके निर्माण के बारे में आकर्षक किंवदंतियों को आगे बढ़ाते हैं, यह सुनिश्चित करते हुए कि इस अविश्वसनीय जगह की विरासत आने वाली पीढ़ियों तक जीवित रहे।\n\nआज, ${site} न केवल अतीत के अवशेष के रूप में, बल्कि सांस्कृतिक संरक्षण के एक जीवंत प्रतीक के रूप में खड़ा है। इसकी पारिस्थितिक और ऐतिहासिक अखंडता की रक्षा के लिए लगातार प्रयास किए जा रहे हैं, यह सुनिश्चित करते हुए कि यह आने वाली सदियों तक प्राचीन बना रहे।`;

  const odia = `${site} ହେଉଛି ଭାରତର ସବୁଠାରୁ ପ୍ରମୁଖ ଐତିହାସିକ ଏବଂ ସାଂସ୍କୃତିକ ସ୍ଥଳୀ ମଧ୍ୟରୁ ଅନ୍ୟତମ, ଯାହା ପ୍ରତିବର୍ଷ ହଜାର ହଜାର ପର୍ଯ୍ୟଟକ ଏବଂ ଇତିହାସପ୍ରେମୀଙ୍କୁ ଆକର୍ଷିତ କରିଥାଏ। ଏହାର ଚମତ୍କାର ସ୍ଥାପତ୍ୟ ଏବଂ ଗଭୀର ଐତିହ୍ୟ ଏହାକୁ ଭାରତୀୟ ଇତିହାସର ସମୃଦ୍ଧ ଚିତ୍ରକୁ ବୁଝିବାକୁ ଚାହୁଁଥିବା ଯେକୌଣସି ବ୍ୟକ୍ତିଙ୍କ ପାଇଁ ଏକ ଦର୍ଶନୀୟ ସ୍ଥାନ କରିଥାଏ।\n\n${site} ର ପରିଦର୍ଶକମାନେ ପ୍ରାୟତଃ ଜଟିଳ ବିବରଣୀ ଏବଂ ସାଇଟର ବିଶାଳ ଆକାର ଦ୍ୱାରା ମନ୍ତ୍ରମୁଗ୍ଧ ହୁଅନ୍ତି। ସ୍ଥାନୀୟ ଗାଇଡ୍ ଏବଂ ପାରମ୍ପାରିକ କାହାଣୀକାରମାନେ ଏହାର ସୃଷ୍ଟି ବିଷୟରେ ଆକର୍ଷଣୀୟ କିମ୍ବଦନ୍ତୀଗୁଡ଼ିକୁ ଆଗକୁ ବଢ଼ାନ୍ତି, ଯାହା ନିଶ୍ଚିତ କରେ ଯେ ଏହି ଅବିଶ୍ୱସନୀୟ ସ୍ଥାନର ଐତିହ୍ୟ ଆଗାମୀ ପିଢ଼ି ପାଇଁ ବଞ୍ଚି ରହିବ।\n\nଆଜି, ${site} କେବଳ ଅତୀତର ଏକ ପ୍ରତୀକ ଭାବରେ ନୁହେଁ, ବରଂ ସାଂସ୍କୃତିକ ସଂରକ୍ଷଣର ଏକ ଜୀବନ୍ତ ପ୍ରତୀକ ଭାବରେ ଠିଆ ହୋଇଛି। ଏହାର ପାରିସ୍ଥିତିକ ଏବଂ ଐତିହାସିକ ଅଖଣ୍ଡତାକୁ ରକ୍ଷା କରିବା ପାଇଁ କ୍ରମାଗତ ଭାବରେ ପ୍ରୟାସ କରାଯାଉଛି, ଯାହା ନିଶ୍ଚିତ କରେ ଯେ ଏହା ଆଗାମୀ ଶତାବ୍ଦୀ ପର୍ଯ୍ୟନ୍ତ ନିର୍ମଳ ରହିବ।`;

  if (lang === 'Hindi') return hin;
  if (lang === 'Odia') return odia;
  return eng;
};

type AIStoryPanelProps = { 
  site: string; 
  language: 'English' | 'Hindi' | 'Odia'; 
  voiceOn: boolean; 
  onLanguageChange: (lang: 'English' | 'Hindi' | 'Odia') => void; 
  onToggleVoice: () => void; 
};

export function AIStoryPanel({ site, language, voiceOn, onLanguageChange, onToggleVoice }: AIStoryPanelProps) {
  const story = useMemo(() => getStory(site, language), [site, language]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (voiceOn) {
        const msg = new SpeechSynthesisUtterance(story);
        msg.lang = language === 'Hindi' ? 'hi-IN' : language === 'Odia' ? 'or-IN' : 'en-US';
        window.speechSynthesis.speak(msg);
      }
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [story, language, voiceOn]);

  return (
    <div className="rounded-2xl border border-sand bg-white/90 p-4 shadow-lg h-72 flex flex-col">
      <div className="mb-3 flex gap-2">
        {(['English', 'Hindi', 'Odia'] as const).map((lang) => (
          <button 
            key={lang} 
            onClick={() => onLanguageChange(lang)} 
            className={`rounded-lg px-2 py-1 text-sm font-medium transition-colors ${language === lang ? 'bg-forest text-white' : 'bg-sand text-earth hover:bg-sand/80'}`}
          >
            {lang}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto pr-2">
        <p className="text-earth whitespace-pre-line text-sm leading-relaxed text-justify">{story}</p>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-sand/50 pt-3">
        <span className="text-xs text-gray-500 font-medium flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${voiceOn ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></span>
          Voice Assistant: {voiceOn ? 'Speaking...' : 'Off'}
        </span>
        <button 
          onClick={onToggleVoice} 
          className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${voiceOn ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' : 'bg-forest text-white hover:bg-emerald-700'}`}
        >
          {voiceOn ? 'Stop Voice' : 'Play Voice'}
        </button>
      </div>
    </div>
  );
}
