// Comprehensive Odisha Cultural Heritage, Village Discovery, Marketplace & Safety Data

export interface Destination {
  id: string;
  name: string;
  odiaName: string;
  district: string;
  region: string;
  category: 'Temple' | 'Heritage' | 'Nature' | 'Beach' | 'Wildlife' | 'Village' | 'Hills' | 'Cave';
  tagline: string;
  heroImage: string;
  gallery: string[];
  lat: number;
  lng: number;
  sketchfabEmbed?: string;
  panoramaImage?: string;
  has3D: boolean;
  historicalBackground: string;
  culturalImportance: string;
  localTraditions: string;
  bestSeason: string;
  nearbyAttractions: string[];
  localFood: string[];
  localHandicrafts: string[];
  localAccommodation: string;
  responsibleGuidelines: string[];
  nearbyVillages: string[];
  imageSource?: string;
  imageAttribution?: string;
}

export interface Village {
  id: string;
  name: string;
  odiaName: string;
  district: string;
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
  block?: string;
}

export interface Artisan {
  id: string;
  name: string;
  villageId: string;
  villageName: string;
  district: string;
  craftCategory: string;
  avatar: string;
  experienceYears: number;
  bio: string;
  makingProcessStory: string;
  processVideoUrl?: string;
  verifiedArtisan: boolean;
  phone: string;
  awards: string[];
}

export interface Product {
  id: string;
  artisanId: string;
  artisanName: string;
  name: string;
  odiaName?: string;
  description: string;
  village: string;
  district: string;
  category: 'Pattachitra' | 'Sambalpuri textiles' | 'Ikat' | 'Pipili applique' | 'Silver filigree' | 'Dhokra craft' | 'Palm-leaf engraving' | 'Stone carving' | 'Terracotta' | 'Tribal jewellery' | 'Traditional weaving' | 'Handloom' | 'Handicrafts' | 'Traditional food' | 'Jewellery' | 'Paintings' | 'Home décor' | 'Brass jewellery' | 'Wood craft';
  materials: string[];
  manufacturingProcess: string;
  price: number;
  originalPrice?: number;
  available: boolean;
  stock?: number;
  images: string[];
  artisanStory: string;
  karmaReward: number; // Defaults to 20 for verified purchases
  size?: string;
  colors?: string[];
  careInstructions?: string;
  deliveryTime?: string;
  rating?: number;
  reviewCount?: number;
  verifiedArtisan?: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  isNewArrival?: boolean;
  reviews?: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    verifiedPurchase: boolean;
  }[];
}

export interface FolkSong {
  id: string;
  title: string;
  odiaTitle?: string;
  language: string;
  dialect: string;
  district: string;
  village: string;
  community: string;
  category: 'Sambalpuri' | 'Dalkhai' | 'Rasarkeli' | 'Kui' | 'Desia' | 'Kela Keluni' | 'Ho/Munda' | 'Bonda' | 'Regional';
  festival: string;
  artist: string;
  lyrics: string;
  lyricsEnglish: string;
  culturalSignificance: string;
  recordingDate: string;
  audioSampleUrl: string;
  verified: boolean;
}

export interface CulturalDance {
  id: string;
  name: string;
  type: 'Dance' | 'Festival' | 'Ritual' | 'Cuisine';
  originRegion: string;
  community: string;
  description: string;
  culturalSignificance: string;
  instrumentsUsed?: string[];
  videoOrImageUrl: string;
  privacyLevel: 'Public' | 'Community Protected' | 'Sacred';
}

export interface CulturalExperience {
  id: string;
  title: string;
  village: string;
  district: string;
  duration: string;
  requiredKarma: number;
  price: number;
  image: string;
  description: string;
  communityHost: string;
  maxParticipants: number;
  responsiblePledge: string;
}

export interface DAOProposal {
  id: string;
  title: string;
  author: string;
  villageOrDistrict: string;
  description: string;
  category: 'Policy' | 'Karma Reward' | 'Cultural Privacy' | 'Eco Tourism';
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  status: 'Active' | 'Passed' | 'Rejected';
  deadline: string;
  hasVoted?: 'for' | 'against' | 'abstain';
}

import { all70OdishaDestinations } from './destinationsData';
import { allOdishaVillages } from './villagesData';
import { allMuseumArtifacts, type MuseumArtifact } from './museumData';
import { all30OdishaDistricts, type DistrictInfo } from './districtsData';

// 70+ COMPREHENSIVE ODISHA DESTINATIONS ACROSS ALL 30 DISTRICTS
export const odishaDestinations: Destination[] = all70OdishaDestinations;

// COMPREHENSIVE VILLAGES (INCLUDING BERHAMPUR & GANJAM)
export const odishaVillages: Village[] = allOdishaVillages;

export { all30OdishaDistricts, allMuseumArtifacts, type DistrictInfo, type MuseumArtifact };

// ARTISANS
export const odishaArtisans: Artisan[] = [
  {
    id: 'art-1',
    name: 'Guru Rabindra Maharana',
    villageId: 'v-raghurajpur',
    villageName: 'Raghurajpur',
    district: 'Puri',
    craftCategory: 'Pattachitra & Palm Leaf Engraving',
    avatar: '/culture-grid.jpg',
    experienceYears: 34,
    bio: 'Born in a lineage of traditional Chitrakaras, Guru Rabindra has trained over 40 youth in natural pigment preparation and intricate Pattachitra lines.',
    makingProcessStory: 'Every painting starts with hand-gluing two cotton sheets with tamarind seed paste. Stone powders (Hingula for red, Haritala for yellow, conch shell for white) are grounded for 3 days before painting with fine squirrel-hair brushes.',
    verifiedArtisan: true,
    phone: '+91 94371 88201',
    awards: ['State Award for Master Craftsmen 2012', 'National Merit Certificate 2018']
  },
  {
    id: 'art-2',
    name: 'Kishori Meher',
    villageId: 'v-nuapatna',
    villageName: 'Nuapatna (Tigiria)',
    district: 'Cuttack',
    craftCategory: 'Khandua Pata & Silk Ikat',
    avatar: '/culture-grid.jpg',
    experienceYears: 28,
    bio: 'Seventh generation weaver of sacred Khandua Pata silks dedicated to the Shree Jagannath temple, specializing in calligraphy wefts.',
    makingProcessStory: 'The Sanskrit shlokas of Gita Govinda are tied into silk warp threads millimeter by millimeter before natural lac dyeing. One saree takes nearly 30 days of meticulous loom work.',
    verifiedArtisan: true,
    phone: '+91 94372 99314',
    awards: ['Sant Kabir National Handloom Award Finalist 2021']
  },
  {
    id: 'art-3',
    name: 'Sukri Mirgan',
    villageId: 'v-kotpad',
    villageName: 'Kotpad',
    district: 'Koraput',
    craftCategory: 'Organic Aal Dye Tribal Weaving',
    avatar: '/culture-grid.jpg',
    experienceYears: 22,
    bio: 'Championing women weavers in Kotpad to protect the rare tribal natural dye tradition from extinction.',
    makingProcessStory: 'We forage Aal roots from the jungle, grind them on stone mortars, and mix with castor oil and wood ash. The deep maroon dye gets richer with every wash and never fades.',
    verifiedArtisan: true,
    phone: '+91 94380 44109',
    awards: ['State Tribal Craft Champion 2022']
  },
  {
    id: 'art-4',
    name: 'Abdul Samad',
    villageId: 'v-pipili',
    villageName: 'Pipili',
    district: 'Puri',
    craftCategory: 'Pipili Applique & Chandua',
    avatar: '/culture-grid.jpg',
    experienceYears: 30,
    bio: 'Leads the family workshop responsible for stitching the ceremonial canopy over the Nandighosa chariot during Puri Rath Yatra.',
    makingProcessStory: 'Cloth patches are cut freehand without stencils and edge-embroidered with mirror insets and yellow piping using traditional chain and buttonhole stitches.',
    verifiedArtisan: true,
    phone: '+91 98611 22340',
    awards: ['Puri District Shilpi Samman 2017']
  },
  {
    id: 'art-5',
    name: 'Prabhat Mohapatra',
    villageId: 'v-raghurajpur',
    villageName: 'Cuttack Old Town',
    district: 'Cuttack',
    craftCategory: 'Silver Filigree (Tarakasi)',
    avatar: '/culture-grid.jpg',
    experienceYears: 40,
    bio: 'Master of Cuttack’s 500-year-old Tarakasi silver filigree, transforming raw silver into thread as fine as gossamer.',
    makingProcessStory: 'Pure 92.5% silver is drawn through steel dies to hair-thin wires, twisted into spirals, and soldered over charcoal without glue into exquisite lacework.',
    verifiedArtisan: true,
    phone: '+91 94370 12890',
    awards: ['National Award for Filigree Craft 2008']
  },
  {
    id: 'art-6',
    name: 'Mangaraj Rana',
    villageId: 'v-sadeibareni',
    villageName: 'Sadeibareni',
    district: 'Dhenkanal',
    craftCategory: 'Dhokra Bell-Metal Casting',
    avatar: '/culture-grid.jpg',
    experienceYears: 25,
    bio: 'Practicing the authentic lost-wax method inherited from his ancestors, keeping Sadeibareni on the international indigenous craft map.',
    makingProcessStory: 'A clay core is coated in beeswax wires, covered in river mud, and heated in open pit kilns. Molten brass fills the cavity left by melting wax.',
    verifiedArtisan: true,
    phone: '+91 94379 88312',
    awards: ['State Handicrafts Award 2019']
  }
];

// PRODUCTS: LOCAL HANDS MARKETPLACE
export const odishaProducts: Product[] = [
  {
    id: 'p-1',
    artisanId: 'art-1',
    artisanName: 'Guru Rabindra Maharana',
    name: 'Traditional Pattachitra "Tree of Life with Birds"',
    odiaName: 'ପାରମ୍ପାରିକ ପଟ୍ଟଚିତ୍ର "ଜୀବନ ବୃକ୍ଷ"',
    description: 'Masterpiece cloth painting depicting the mythical Kalpavriksha tree with pairs of dancing peacocks, parrots, and forest deer. Painted on prepared cotton canvas using organic stone colors.',
    village: 'Raghurajpur',
    district: 'Puri',
    category: 'Pattachitra',
    materials: ['Cotton cloth canvas', 'Tamarind seed glue', 'Natural stone pigments (Hingula, Haritala)', 'Conch shell white'],
    manufacturingProcess: 'Hand-glued canvas seasoned for 7 days, painted entirely freehand with squirrel-hair brushes, varnished with natural tree resin.',
    price: 4200,
    available: true,
    images: [
      '/culture-grid.jpg',
      '/culture-grid.jpg'
    ],
    artisanStory: 'Crafted over 18 days by Guru Rabindra in his Raghurajpur verandah studio.',
    karmaReward: 20
  },
  {
    id: 'p-2',
    artisanId: 'art-2',
    artisanName: 'Kishori Meher',
    name: 'Sacred Khandua Pata Silk Saree with Gita Govinda Shlokas',
    odiaName: 'ଖଣ୍ଡୁଆ ପାଟ ଶାଢ଼ୀ',
    description: 'The legendary silk saree of Nuapatna woven with auspicious Sanskrit verses from Jayadeva’s Gita Govinda in the borders. Pure mulberry silk with rich red and yellow natural tones.',
    village: 'Nuapatna',
    district: 'Cuttack',
    category: 'Ikat',
    materials: ['100% Pure Mulberry Silk', 'Natural Lac Dye', 'Organic Turmeric Yellow'],
    manufacturingProcess: 'Double-ikat tie and dye with warp calligraphy shloka weaving on traditional wooden pit looms.',
    price: 9800,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Woven with prayerful dedication by Kishori Meher and his son over 28 continuous days.',
    karmaReward: 20
  },
  {
    id: 'p-3',
    artisanId: 'art-3',
    artisanName: 'Sukri Mirgan',
    name: 'Kotpad Tribal Cotton Shawl with Natural Aal Dye',
    odiaName: 'କୋଟପାଡ଼ ପ୍ରାକୃତିକ ରଙ୍ଗ ଶାଲ୍',
    description: 'Heavy, breathable organic cotton shawl with deep chocolate-maroon Aal tree bark dye and traditional fish, bow, and temple spire motifs.',
    village: 'Kotpad',
    district: 'Koraput',
    category: 'Tribal jewellery',
    materials: ['Organic coarse cotton', 'Aal tree root bark (Indian Madder)', 'Castor oil', 'Cow dung ash'],
    manufacturingProcess: '20-day natural dyeing cycle followed by slow handloom weaving with extra-weft tribal motifs.',
    price: 3600,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Supports women spinners and forest foragers of Kotpad village.',
    karmaReward: 20
  },
  {
    id: 'p-4',
    artisanId: 'art-4',
    artisanName: 'Abdul Samad',
    name: 'Pipili Royal Applique Garden Canopy & Umbrella',
    odiaName: 'ପିପିଲି ଚାନ୍ଦୁଆ ଛତା',
    description: 'A vibrant 6-foot garden umbrella crafted using Pipili’s centuries-old applique needlework with auspicious elephant, peacock, and floral medallions.',
    village: 'Pipili',
    district: 'Puri',
    category: 'Pipili applique',
    materials: ['Cotton base drill fabric', 'Cotton cutwork patches', 'Mirror insets', 'Brass finial'],
    manufacturingProcess: 'Hand-cut fabric patches stitched with chain needle embroidery and decorative mirror work.',
    price: 2800,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Crafted in the Samad family workshop adhering to historic Rath Yatra canopy specifications.',
    karmaReward: 20
  },
  {
    id: 'p-5',
    artisanId: 'art-5',
    artisanName: 'Prabhat Mohapatra',
    name: 'Cuttack Tarakasi Silver Filigree "Mayur" (Dancing Peacock)',
    odiaName: 'କଟକ ତାରକସି ରୂପା ମୟୂର',
    description: 'Delicate 92.5% pure silver filigree sculpture of a dancing peacock with fanned feathers made of whisper-thin twisted silver threads.',
    village: 'Alisha Bazaar',
    district: 'Cuttack',
    category: 'Silver filigree',
    materials: ['92.5% Sterling Silver wire', 'Silver solder flux'],
    manufacturingProcess: 'Wire-drawing, crimping, tweezer-assembly, and charcoal-torch soldering without any internal mold.',
    price: 7500,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Master Prabhat spent 14 days shaping over 600 tiny silver wire coils to build this feather plume.',
    karmaReward: 20
  },
  {
    id: 'p-6',
    artisanId: 'art-6',
    artisanName: 'Mangaraj Rana',
    name: 'Dhokra Lost-Wax Bell-Metal Tribal Musician Figurine',
    odiaName: 'ଢୋକ୍ରା ଆଦିବାସୀ ବାଦକ',
    description: 'Primitive rustic brass idol of a tribal musician playing the traditional Madal drum, cast using the 4,000-year-old Indus-heritage lost-wax process.',
    village: 'Sadeibareni',
    district: 'Dhenkanal',
    category: 'Dhokra craft',
    materials: ['Recycled Brass & Bronze alloy', 'Natural Beeswax', 'Clay core'],
    manufacturingProcess: 'Clay modeling, beeswax thread winding, double clay encapsulation, furnace firing and liquid metal pouring.',
    price: 1950,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Directly benefits the Situla tribal metal smith community in Sadeibareni.',
    karmaReward: 20
  },
  {
    id: 'p-7',
    artisanId: 'art-1',
    artisanName: 'Guru Rabindra Maharana',
    name: 'Etched Palm-Leaf Scroll (Talapatra) "Dasavatara"',
    odiaName: 'ତାଳପତ୍ର ଚିତ୍ର "ଦଶାବତାର"',
    description: 'Intricately etched dried palm-leaf folding bookmark and scroll showing the ten avatars of Lord Vishnu. Etched with a sharp iron stylus and blackened with lampblack.',
    village: 'Raghurajpur',
    district: 'Puri',
    category: 'Palm-leaf engraving',
    materials: ['Tala (Palm) dried leaves', 'Iron stylus (Lekhani)', 'Kajal & bean leaf extract'],
    manufacturingProcess: 'Leaves soaked in neem and turmeric, dried for 3 months, hand-etched with sharp stylus and rubbed with carbon ink.',
    price: 1250,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Ancient technique that preserves manuscripts for upwards of 500 years without paper decay.',
    karmaReward: 20
  },
  {
    id: 'p-8',
    artisanId: 'art-2',
    artisanName: 'Kishori Meher',
    name: 'Sambalpuri Handwoven Cotton Ikat Saree "Saktapar"',
    odiaName: 'ସମ୍ବଲପୁରୀ ସକ୍ତାପାର ଶାଢ଼ୀ',
    description: 'Classic red and black chequered Saktapar Sambalpuri cotton saree with hand-tied Bandha borders of fish and conch shells.',
    village: 'Bargarh',
    district: 'Bargarh',
    category: 'Sambalpuri textiles',
    materials: ['100% Combed Cotton yarn', 'Vat dyes'],
    manufacturingProcess: 'Tie-and-dye warp and weft process woven on wooden frame pit loom.',
    price: 4500,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Celebrated traditional weave of Western Odisha, soft, durable, and naturally breathable.',
    karmaReward: 20
  },
  {
    id: 'p-9',
    artisanId: 'art-mohan-rao',
    artisanName: 'K. Mohan Rao',
    name: 'GI-Tagged Berhampuri Patta Silk Saree with Phoda Kumbha Border',
    odiaName: 'ଜି.ଆଇ. ସ୍ୱୀକୃତ ବ୍ରହ୍ମପୁରୀ ପାଟ ଶାଢ଼ୀ',
    description: 'Authentic heavy mulberry silk saree from the Silk City of Odisha, featuring pure gold-zari Phoda Kumbha (interlocked temple spire) borders. Handwoven on traditional wooden pit looms.',
    village: 'Nuagaon / Berhampur',
    district: 'Ganjam',
    category: 'Handloom',
    materials: ['100% Pure Mulberry Silk', 'Tested Gold Zari', 'Natural lac red dye'],
    manufacturingProcess: 'Double-warp interlocking technique with temple spire border woven entirely by hand.',
    price: 12500,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Woven over 22 days by master weaver K. Mohan Rao in his Nuagaon pit loom studio.',
    karmaReward: 25
  },
  {
    id: 'p-10',
    artisanId: 'art-kailash-maharana',
    artisanName: 'Kailash Maharana',
    name: 'Belaguntha Handcrafted Brass Flexible Jumping Fish (Pitala Machha)',
    odiaName: 'ବେଲଗୁଣ୍ଠା ପିତ୍ତଳ ନମନୀୟ ଡିଆଁ ମାଛ',
    description: 'World-renowned kinetic sheet metal craft of Belaguntha. Hand-riveted interlocking brass scales that wiggle like a living fish when suspended. Created without welding or solder.',
    village: 'Belaguntha',
    district: 'Ganjam',
    category: 'Handicrafts',
    materials: ['Virgin Brass Sheet', 'Brass wire rivets', 'Chiseled scales'],
    manufacturingProcess: 'Cold sheet-metal cutting, individual scale perforation, and mechanical riveting.',
    price: 1850,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Crafted by National Awardee Kailash Maharana preserving a 200-year Ganjam royal tradition.',
    karmaReward: 20
  },
  {
    id: 'p-11',
    artisanId: 'art-ganjam-shg',
    artisanName: 'Manorama Patro & Ganjam Women SHG',
    name: 'Authentic Ganjam Ambula Mango Achar & Spiced Badi Pack',
    odiaName: 'ଗଞ୍ଜାମ ଆମ୍ବୁଲ ଆଚାର ଓ ବଡ଼ି ପ୍ୟାକ୍',
    description: 'Sundried Ganjam country mango slices slow-cured in cold-pressed mustard oil with Panch Phoran, alongside hand-crushed roasted moong badi chura.',
    village: 'Nuagaon / Berhampur',
    district: 'Ganjam',
    category: 'Traditional food',
    materials: ['Sundried Raw Mangoes (Ambula)', 'Cold-pressed Mustard Oil', 'Badi', 'Rock salt'],
    manufacturingProcess: 'Traditional sun-curing on bamboo mats followed by stone-jar maturation.',
    price: 450,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Directly supports women self-help groups in rural Ganjam.',
    karmaReward: 15
  },
  {
    id: 'p-12',
    artisanId: 'art-sushanta-meher',
    artisanName: 'Sushanta Meher',
    name: 'Barpali Sambalpuri Tie-and-Dye Silk Dupatta',
    odiaName: 'ବରପାଲି ସମ୍ବଲପୁରୀ ବାନ୍ଧ ଦୋପଟ୍ଟା',
    description: 'Vibrant Sambalpuri Ikat silk dupatta with geometric floral medallions and fish motifs on a deep indigo and crimson ground.',
    village: 'Barpali',
    district: 'Bargarh',
    category: 'Handloom',
    materials: ['Pure Tussar Mulberry Silk', 'Eco-friendly fast dyes'],
    manufacturingProcess: 'Warp and weft Bandha tie-dye woven on wooden frame loom.',
    price: 2400,
    available: true,
    images: [
      '/culture-grid.jpg'
    ],
    artisanStory: 'Woven in Barpali village carrying forward the legendary legacy of Padmashree Krutartha Acharya.',
    karmaReward: 20
  }
];

// FOLK SONGS: DIGITAL CULTURAL HERITAGE ARCHIVE
export const odishaFolkSongs: FolkSong[] = [
  {
    id: 'song-1',
    title: 'Dalkhai Re Dalkhai',
    odiaTitle: 'ଡାଲଖାଇ ରେ ଡାଲଖାଇ',
    language: 'Sambalpuri',
    dialect: 'Kosali / Western Odia',
    district: 'Bargarh',
    village: 'Barpali',
    community: 'Western Odisha Rural Communities',
    category: 'Dalkhai',
    festival: 'Bhaijiuntia & Dussehra',
    artist: 'Barpali Folk Troupe & Padmini Meher',
    lyrics: `Dalkhai re Dalkhai!
Mui sunilu go tola bhabana,
Dalkhai re Dalkhai...
Nai jau go jhiye jhari bane,
Mahi barasa re jhuruche man...`,
    lyricsEnglish: `Oh Dalkhai, my beloved sister of branches!
I hear your gentle longing,
Do not wander alone into the thick forest rain,
My heart yearns for you in this blessed green monsoon...`,
    culturalSignificance: 'Sung by young women accompanied by brothers during Bhaijiuntia prayer for their brothers’ long life and safety. Rhythmic clapping and Dhol-Nishan beats symbolize village sisterhood.',
    recordingDate: 'Recorded at Bargarh Cultural Utsav, 2024',
    audioSampleUrl: 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3',
    verified: true
  },
  {
    id: 'song-2',
    title: 'Rasarkeli Bo - Joy of the Earth',
    odiaTitle: 'ରସରକେଲି ବୋ',
    language: 'Sambalpuri',
    dialect: 'Sambalpuri',
    district: 'Sambalpur',
    village: 'Chiplima',
    community: 'Sambalpuri Agricultural Folk',
    category: 'Rasarkeli',
    festival: 'Nuakhai & Harvest Celebration',
    artist: 'Chiplima Village Singers',
    lyrics: `Rasarkeli bo, aji nua dhana ghare aila bo!
Mahanadi re paani badhila,
Kalia badal aakhi kholila...`,
    lyricsEnglish: `Oh sweet Rasarkeli, today the fresh autumn harvest has arrived home!
The Mahanadi river swells with golden water,
The dark rainclouds have opened their generous eyes...`,
    culturalSignificance: 'Expression of youthful love and harvest gratitude celebrated during Nuakhai when the first grain is offered to Goddess Samaleswari.',
    recordingDate: 'Recorded during Nuakhai Festival, 2023',
    audioSampleUrl: 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3',
    verified: true
  },
  {
    id: 'song-3',
    title: 'Kui Loku Geeta - Sacred Forest Whispers',
    odiaTitle: 'କୁଇ ଲୋକୁ ଗୀତ',
    language: 'Kui',
    dialect: 'Kandhamal Highland Kui',
    district: 'Kandhamal',
    village: 'Daringbadi',
    community: 'Kondh Indigenous Tribe',
    category: 'Kui',
    festival: 'Meriah Harvest Ritual (Symbolic Peaceful Form)',
    artist: 'Kandhamal Elder Malati Majhi',
    lyrics: `Aanju peneka ladi koochi,
Veli doore koo maana koochi...
Dharani Maata aamuki daya kiaduro...`,
    lyricsEnglish: `The mountain spirits watch over our bamboo groves,
We walk softly where the wild tiger drinks,
Mother Earth Dharani Maata, bestow your grace upon our fields...`,
    culturalSignificance: 'Sacred oral invocation honoring the earth goddess and guardian forest spirits. Preserves indigenous botanical and mountain navigation wisdom.',
    recordingDate: 'Archived with Community Consent, 2024',
    audioSampleUrl: 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3',
    verified: true
  },
  {
    id: 'song-4',
    title: 'Desia Dhemsa Song - Hill Stream Ballad',
    odiaTitle: 'ଦେଶିଆ ଧେମସା ଗୀତ',
    language: 'Desia',
    dialect: 'Koraput Desia Odia',
    district: 'Koraput',
    village: 'Semiliguda',
    community: 'Paroja & Gadaba Tribe',
    category: 'Desia',
    festival: 'Chaitra Parba Festival',
    artist: 'Dambaru Jani & Troupe',
    lyrics: `Dungdunga baje re ho,
Chalo bhai chalo Paroja jhiye,
Dhemsa nachiba ho...`,
    lyricsEnglish: `The Dungdunga drum sounds across the valley,
Come brothers and sisters, Paroja girls,
Let us join hands in the circular Dhemsa dance...`,
    culturalSignificance: 'Accompanies the collective step-dance where entire villages lock arms in undulating circular motion mimicking the movement of mountain streams.',
    recordingDate: 'Recorded at Parab Utsav, 2023',
    audioSampleUrl: 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3',
    verified: true
  },
  {
    id: 'song-5',
    title: 'Kela Keluni Geeta - Tale of the Wandering Minstrels',
    odiaTitle: 'କେଳା କେଳୁଣୀ ଗୀତ',
    language: 'Odia',
    dialect: 'Coastal Coastal Odia',
    district: 'Cuttack',
    village: 'Banki',
    community: 'Traditional Wandering Folk',
    category: 'Kela Keluni',
    festival: 'Folk Fair & Rural Gatherings',
    artist: 'Brundaban Das',
    lyrics: `Kela re Kela tora ghara kouthi?
Mun jhumuka bajaee bulae desh...`,
    lyricsEnglish: `Oh wandering musician, where is your dwelling?
I play my brass bells and wander the whole sweet country...`,
    culturalSignificance: 'Humorous, theatrical dialogue-song between the Kela (husband) and Keluni (wife) capturing witty observations of daily rural Odishan life.',
    recordingDate: 'Recorded at Cuttack Bali Jatra, 2023',
    audioSampleUrl: 'https://cdn.freesound.org/previews/563/563810_11861866-lq.mp3',
    verified: true
  }
];

// CULTURAL EXPERIENCES: UNLOCK HIDDEN ODISHA
export const odishaExperiences: CulturalExperience[] = [
  {
    id: 'exp-1',
    title: 'Masterclass with Guru Rabindra: Paint Your Own Pattachitra',
    village: 'Raghurajpur',
    district: 'Puri',
    duration: '4 Hours (Half Day)',
    requiredKarma: 40,
    price: 650,
    image: '/culture-grid.jpg',
    description: 'Sit with a master artisan on an open village verandah. Learn to grind natural mineral pigments and paint your own miniature Pattachitra artwork to take home.',
    communityHost: 'Raghurajpur Artisan Co-operative',
    maxParticipants: 8,
    responsiblePledge: 'I promise to respect the sacred nature of traditional deities and support local art without bargaining.'
  },
  {
    id: 'exp-2',
    title: 'Sacred Khandua Silk Pit-Loom Weaving Immersion',
    village: 'Nuapatna',
    district: 'Cuttack',
    duration: 'Full Day (6 Hours)',
    requiredKarma: 80,
    price: 850,
    image: '/culture-grid.jpg',
    description: 'Learn the ancient mathematical tie-dye principles of Odia Bandha, operate a traditional bamboo pit loom, and share an authentic vegetarian meal with a weaver family.',
    communityHost: 'Meher Weavers Council',
    maxParticipants: 6,
    responsiblePledge: 'I will honor the spiritual traditions of the weavers and purchase authentic silks.'
  },
  {
    id: 'exp-3',
    title: 'Koraput Agro-Heritage & Organic Millet Feast Walk',
    village: 'Semiliguda',
    district: 'Koraput',
    duration: '5 Hours',
    requiredKarma: 60,
    price: 700,
    image: '/culture-grid.jpg',
    description: 'Walk through indigenous organic millet terraces, understand traditional heirloom seed preservation, and savor an authentic 7-course tribal culinary feast cooked over woodfires.',
    communityHost: 'Koraput Tribal Farmers Federation',
    maxParticipants: 10,
    responsiblePledge: 'I will respect tribal agricultural heritage and maintain ecological cleanliness.'
  },
  {
    id: 'exp-4',
    title: 'Satkosia Gorge Twilight Boat Patrol with Community Wildlife Guards',
    village: 'Tikarpada',
    district: 'Angul',
    duration: '3 Hours',
    requiredKarma: 100,
    price: 1200,
    image: '/culture-grid.jpg',
    description: 'Join trained community eco-guards along the dramatic Mahanadi river canyon. Observe Gharial crocodile basking sandbanks and listening to water bird calls at sunset.',
    communityHost: 'Tikarpada Eco-Development Committee',
    maxParticipants: 6,
    responsiblePledge: 'I will follow all wildlife sanctuary safety protocols and maintain silent reverence.'
  }
];

// COMMUNITY DAO PROPOSALS
export const initialProposals: DAOProposal[] = [
  {
    id: 'prop-1',
    title: 'Establish a 250 Daily Visitor Cap for Bonda Tribal Weekly Market',
    author: 'Mudulipada Gram Sabha Committee',
    villageOrDistrict: 'Koraput / Malkangiri',
    description: 'To protect the cultural privacy and sacred traditions of the Bonda community, commercial photography should be restricted and tourist footfall capped at 250 verified visitors per day.',
    category: 'Cultural Privacy',
    votesFor: 342,
    votesAgainst: 18,
    votesAbstain: 24,
    status: 'Active',
    deadline: '2026-12-15'
  },
  {
    id: 'prop-2',
    title: 'Increase Karma Points for Attending Local Artisan Workshops from 30 to 45 KT',
    author: 'Raghurajpur Crafts Council',
    villageOrDistrict: 'Puri District',
    description: 'Encourage direct tourist engagement with master painters and weavers by offering higher Karma rewards for completed educational workshops.',
    category: 'Karma Reward',
    votesFor: 410,
    votesAgainst: 45,
    votesAbstain: 12,
    status: 'Active',
    deadline: '2026-11-30'
  },
  {
    id: 'prop-3',
    title: 'Mandate Plastic-Free Packaging for All "Local Hands" Marketplace Shipments',
    author: 'Nuapatna Eco-Handloom Guild',
    villageOrDistrict: 'Cuttack',
    description: 'All deliveries from artisans must strictly use biodegradable banana fiber, sal leaf, or recycled cotton pouch packaging.',
    category: 'Eco Tourism',
    votesFor: 580,
    votesAgainst: 8,
    votesAbstain: 5,
    status: 'Active',
    deadline: '2026-12-05'
  }
];
