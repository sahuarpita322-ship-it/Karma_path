// Karma For Good: Social Impact Architecture Data
export interface ImpactCategory {
  id: string;
  name: string;
  odiaName: string;
  iconName: string;
  description: string;
  color: string;
  bgGradient: string;
  examples: string[];
}

export interface KarmaActivity {
  id: string;
  name: string;
  odiaName: string;
  category: 'Environmental' | 'Helping People' | 'Education' | 'Elderly Care' | 'Community Service' | 'Culture & Heritage';
  shortDescription: string;
  fullDetails: string;
  timeRequired: string;
  karmaPoints: number;
  difficulty: 'Easy' | 'Medium' | 'Challenging';
  location: string;
  organization?: string;
  image: string;
  impactMetric: string;
  guidelines: string[];
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  organization: string;
  isVerifiedOrg: boolean;
  category: 'Environmental' | 'Helping People' | 'Education' | 'Elderly Care' | 'Community Service' | 'Culture & Heritage';
  location: string;
  district: string;
  date: string;
  time: string;
  volunteersNeeded: number;
  volunteersRegistered: number;
  description: string;
  contactEmail: string;
  isUrgent?: boolean;
}

export interface ImpactStory {
  id: string;
  userName: string;
  userAvatar: string;
  activityTitle: string;
  category: string;
  location: string;
  date: string;
  story: string;
  image: string;
  karmaPoints: number;
  applauseCount: number;
}

export interface KarmaBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiredPoints?: number;
  requiredDeeds?: number;
  color: string;
}

// 6 Core Impact Categories
export const IMPACT_CATEGORIES: ImpactCategory[] = [
  {
    id: 'environmental',
    name: 'Environmental Protection',
    odiaName: 'ପରିବେଶ ସୁରକ୍ଷା',
    iconName: 'FaLeaf',
    description: 'Protect Odisha pristine coastlines, rivers, flora, and wildlife habitats through active conservation.',
    color: '#10B981',
    bgGradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    examples: [
      'Beach and coastal waste cleanup',
      'Native tree and mangrove plantation',
      'Riverbank and lake preservation',
      'Plastic waste collection drives',
      'Protecting Olive Ridley turtle nesting grounds'
    ]
  },
  {
    id: 'helping-people',
    name: 'Helping People in Need',
    odiaName: 'ଜନସେବା ଓ ସହାୟତା',
    iconName: 'FaHandsHelping',
    description: 'Offer dignity, warm meals, and daily essentials to the underprivileged and vulnerable in our communities.',
    color: '#F59E0B',
    bgGradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    examples: [
      'Nutritious meal distribution',
      'Clothing and blanket drives',
      'Assisting persons with disabilities',
      'Supporting rural health initiatives',
      'Access to essential medicines and hygiene'
    ]
  },
  {
    id: 'education',
    name: 'Education & Child Welfare',
    odiaName: 'ଶିକ୍ଷା ଓ ଶିଶୁ ବିକାଶ',
    iconName: 'FaGraduationCap',
    description: 'Ignite curiosity and empower young minds in rural villages and underprivileged neighborhoods.',
    color: '#6366F1',
    bgGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    examples: [
      'Teaching children in craft villages',
      'Donating books, school bags, and stationery',
      'Digital literacy workshops',
      'Volunteering at learning centers',
      'Mentoring youth in rural areas'
    ]
  },
  {
    id: 'elderly-care',
    name: 'Supporting Elderly People',
    odiaName: 'ବରିଷ୍ଠ ନାଗରିକ ସେବା',
    iconName: 'FaHeart',
    description: 'Spend meaningful time, provide companionship, and ensure care for elders living in shelters and villages.',
    color: '#EC4899',
    bgGradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    examples: [
      'Visiting old-age homes and sharing stories',
      'Donating nutritious rations and daily care supplies',
      'Reading books and spiritual literature with elders',
      'Assisting in health and mobility care',
      'Organizing community recreational gatherings'
    ]
  },
  {
    id: 'community-service',
    name: 'Community & Social Service',
    odiaName: 'ସାମାଜିକ ସେବା ଓ ସହଯୋଗ',
    iconName: 'FaUsers',
    description: 'Step up during humanitarian emergencies, blood donation drives, and grassroots community building.',
    color: '#8B5CF6',
    bgGradient: 'from-purple-500/20 via-[#7955AE]/10 to-transparent',
    examples: [
      'Donating blood at recognized health camps',
      'Disaster and flood relief volunteering',
      'Supporting grassroots community welfare NGOs',
      'Civic cleanliness and sanitation initiatives',
      'Supporting village drinking water kiosks'
    ]
  },
  {
    id: 'culture-heritage',
    name: 'Preserving Local Culture',
    odiaName: 'ଐତିହ୍ୟ ଓ କଳା ସଂରକ୍ଷଣ',
    iconName: 'FaPalette',
    description: 'Empower master artisans, safeguard sacred stone carvings, and document ancient folk traditions.',
    color: '#7955AE',
    bgGradient: 'from-[#7955AE]/25 via-violet-500/10 to-transparent',
    examples: [
      'Directly purchasing and promoting artisan crafts',
      'Audio-visual recording of village folk ballads',
      'Cleaning and maintaining temple monument surroundings',
      'Supporting traditional handloom weavers',
      'Workshops teaching younger generations ancient arts'
    ]
  }
];

// Explore Good Deeds Activities (12 Interactive Cards)
export const KARMA_ACTIVITIES: KarmaActivity[] = [
  {
    id: 'act-clean-beach',
    name: 'Clean a Beach at Puri or Chandrabhaga',
    odiaName: 'ସମୁଦ୍ର କୂଳ ସଫେଇ ଅଭିଯାନ',
    category: 'Environmental',
    shortDescription: 'Collect and segregate plastic debris, discarded bottles, and nylon fishing nets to protect marine life.',
    fullDetails: 'Join thousands of pilgrims and tourists in keeping the sacred Bay of Bengal shoreline pristine. Participants receive eco-friendly burlap collection sacks, gloves, and drop-off instructions at Puri or Chandrabhaga Beach.',
    timeRequired: '2 - 3 Hours',
    karmaPoints: 20,
    difficulty: 'Easy',
    location: 'Puri Beach / Chandrabhaga, Konark',
    organization: 'Puri Green Coast Mission & Karma-Path',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    impactMetric: '10 kg Plastic Removed',
    guidelines: [
      'Wear protective gloves and footwear.',
      'Segregate plastic waste from organic kelp and driftwood.',
      'Deposit sacks at designated municipal collection booths.',
      'Upload a selfie or short video with the filled collection sack as proof.'
    ]
  },
  {
    id: 'act-plant-tree',
    name: 'Plant Native Trees in Mahanadi River Belt',
    odiaName: 'ବୃକ୍ଷରୋପଣ ଓ ସବୁଜିମା ସୃଷ୍ଟି',
    category: 'Environmental',
    shortDescription: 'Plant indigenous saplings (Neem, Peepal, Banyan, Mahua) to prevent soil erosion and expand green cover.',
    fullDetails: 'Odisha river valleys thrive on indigenous greenery. Plant a native sapling, secure a tree guard or bamboo barrier, and pledge to nourish it during your trip or partner with local youth clubs for ongoing watering.',
    timeRequired: '1 - 2 Hours',
    karmaPoints: 15,
    difficulty: 'Easy',
    location: 'Cuttack / Naraj Mahanadi Embankment',
    organization: 'Green Utkal Initiative',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Native Tree Planted',
    guidelines: [
      'Choose native species suited for Odisha soil.',
      'Dig a hole at least 1.5 feet deep and water thoroughly.',
      'Take a geo-tagged photo with the planted sapling.',
      'Optional: Mark the GPS coordinates for long-term satellite monitoring.'
    ]
  },
  {
    id: 'act-teach-child',
    name: 'Teach a Child in a Heritage Craft Village',
    odiaName: 'ଶିଶୁଙ୍କୁ ଶିକ୍ଷାଦାନ ଓ ଦିଗ୍‌ଦର୍ଶନ',
    category: 'Education',
    shortDescription: 'Conduct a 2-hour reading, math, or digital literacy session for children of rural artisan families.',
    fullDetails: 'Artisan children possess immense visual talent but often lack access to language tutoring, basic computer concepts, and storybooks. Share knowledge, teach basic english conversation, or conduct an interactive storytelling hour.',
    timeRequired: '2 - 3 Hours',
    karmaPoints: 30,
    difficulty: 'Medium',
    location: 'Raghurajpur / Pipli / Dhauli Foothills',
    organization: 'Bakul Foundation & Rural Learning Pods',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Student Mentored (2 hrs)',
    guidelines: [
      'Respect local cultural sensibilities and child safety protocols.',
      'Bring interactive flashcards, notebooks, or drawing material.',
      'Never photograph children faces without parent/guardian consent.',
      'Get activity verification from the village teacher or community head.'
    ]
  },
  {
    id: 'act-donate-food',
    name: 'Distribute Nutritious Meals to People in Need',
    odiaName: 'ଅନ୍ନଦାନ ଓ କ୍ଷୁଧା ନିବାରଣ',
    category: 'Helping People',
    shortDescription: 'Provide freshly cooked wholesome meals (Khichdi, Dalma, Pakhala) to daily-wage workers and shelter residents.',
    fullDetails: 'In sacred Jagannath culture, sharing food is the highest virtue (Maha Dana). Partner with verified local community kitchens or prepare clean food packets to distribute in labor settlements and temporary shelters.',
    timeRequired: '1 - 2 Hours',
    karmaPoints: 20,
    difficulty: 'Easy',
    location: 'Bhubaneswar Old Town / Railway Settlement Area',
    organization: 'Odisha Hunger Heroes Kitchen',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    impactMetric: '5 Fresh Meals Distributed',
    guidelines: [
      'Ensure food is hygienic, freshly cooked, and neatly packed.',
      'Distribute with dignity, smiles, and kindness.',
      'Do not photograph vulnerable beneficiaries in demeaning ways.',
      'Upload receipts or distribution photos showing your team in action.'
    ]
  },
  {
    id: 'act-old-age-home',
    name: 'Spend Quality Time at an Old-Age Shelter',
    odiaName: 'ବୃଦ୍ଧାଶ୍ରମରେ ବରିଷ୍ଠଙ୍କ ସେବା',
    category: 'Elderly Care',
    shortDescription: 'Visit elderly residents, listen to their oral memories, donate essential supplies, and spread joy.',
    fullDetails: 'Many elderly mothers and grandfathers in old-age homes crave companionship and listening ears. Spend an afternoon playing traditional board games, sharing Odia Bhajans, or helping them organize their daily living spaces.',
    timeRequired: '2 - 3 Hours',
    karmaPoints: 25,
    difficulty: 'Medium',
    location: 'Cuttack / Balasore Senior Citizen Homes',
    organization: 'HelpAge India Odisha Chapter',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Meaningful Companion Visit',
    guidelines: [
      'Call ahead or coordinate with the shelter supervisor.',
      'Bring useful fruits, biscuits, woolen socks, or personal hygiene kits.',
      'Offer genuine active listening without rushing.',
      'Obtain a signature or note of appreciation from the shelter administrator.'
    ]
  },
  {
    id: 'act-donate-books',
    name: 'Donate Books & Stationery to Rural Classrooms',
    odiaName: 'ପୁସ୍ତକ ଓ ଖାତା କଲମ ଦାନ',
    category: 'Education',
    shortDescription: 'Donate primary textbooks, storybooks in Odia/English, pencils, and art supplies to a village school.',
    fullDetails: 'Equip rural government schools and community libraries with inspiring reading books, encyclopedias, geometry boxes, and drawing stationery to open new worlds for children in remote blocks.',
    timeRequired: '1 Hour',
    karmaPoints: 15,
    difficulty: 'Easy',
    location: 'Mayurbhanj / Koraput Tribal Learning Centers',
    organization: 'Utkal Vidya Sahayata',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    impactMetric: '10 Books / Kits Donated',
    guidelines: [
      'Ensure books are in good, readable condition.',
      'Educational and inspirational titles are preferred over scrap.',
      'Take a photo of the school library handover with the headmaster.',
      'Upload the school receipt or acknowledgement note.'
    ]
  },
  {
    id: 'act-support-artisan',
    name: 'Support a Traditional Handicraft Artisan',
    odiaName: 'ପାରମ୍ପାରିକ କାରିଗରଙ୍କୁ ପ୍ରୋତ୍ସାହନ',
    category: 'Culture & Heritage',
    shortDescription: 'Buy directly from a master artisan, record their craft process, and help them list products digitally.',
    fullDetails: 'Pattachitra painters, silver filigree jewelers, and applique weavers are the living heartbeat of Odisha. By visiting their home workshops, purchasing authentic handmade goods, and promoting their stories, you save an ancient lineage.',
    timeRequired: '2 Hours',
    karmaPoints: 20,
    difficulty: 'Medium',
    location: 'Raghurajpur / Pipili / Cuttack Alisha Bazar',
    organization: 'Odisha Crafts Council & Karma-Path',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Artisan Family Supported',
    guidelines: [
      'Pay fair prices without aggressive bargaining.',
      'Learn about the technique (natural vegetable dyes, stylus, filigree wires).',
      'Share their work on social media tagging their name and village.',
      'Upload a photo of your purchase alongside the smiling artisan.'
    ]
  },
  {
    id: 'act-blood-donation',
    name: 'Join a Voluntary Blood Donation Camp',
    odiaName: 'ସ୍ୱେଚ୍ଛାକୃତ ରକ୍ତଦାନ ଅଭିଯାନ',
    category: 'Community Service',
    shortDescription: 'Donate a unit of blood at certified hospital blood banks or licensed Red Cross community camps.',
    fullDetails: 'Blood saves lives during accidents, complex surgeries, and thalassemia management. Points honor your verified participation and courage in donating at an accredited government or Red Cross medical bank.',
    timeRequired: '1 - 2 Hours',
    karmaPoints: 30,
    difficulty: 'Medium',
    location: 'Capital Hospital Blood Bank / Red Cross Bhawan, Bhubaneswar',
    organization: 'Indian Red Cross Society, Odisha State Branch',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Unit Blood Donated (Saves up to 3 lives)',
    guidelines: [
      'Must be 18+ years of age, weighed 45kg+, and in good health.',
      'Follow medical eligibility guidelines provided by the camp doctor.',
      'Rest for 20 minutes post-donation and stay hydrated.',
      'Upload a photo of the official Blood Donor Certificate / Card.'
    ]
  },
  {
    id: 'act-river-cleaning',
    name: 'Riverbank Restoration Drive at Daya River',
    odiaName: 'ଦୟା ନଦୀ କୂଳ ସଫେଇ ଓ ସୁରକ୍ଷା',
    category: 'Environmental',
    shortDescription: 'Remove floating trash, religious immersion remnants, and plastic from historic river ghats.',
    fullDetails: 'The Daya River holds immense historical gravity where Emperor Ashoka renounced violence following the Kalinga War. Help clean its banks to preserve freshwater ecosystems and riverine bio-diversity.',
    timeRequired: '2 - 3 Hours',
    karmaPoints: 25,
    difficulty: 'Medium',
    location: 'Daya River Ghats, Dhauli Peace Pagoda Base',
    organization: 'Odisha River Keepers Alliance',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80',
    impactMetric: '50m Riverbank Restored',
    guidelines: [
      'Work in pairs or groups near water bodies for safety.',
      'Do not wade into deep water currents.',
      'Deposit segregated non-biodegradables in disposal bins.',
      'Upload team activity pictures with timestamp.'
    ]
  },
  {
    id: 'act-disaster-relief',
    name: 'Volunteer in Cyclone & Monsoon Relief Support',
    odiaName: 'ବାତ୍ୟା ଓ ବନ୍ୟା ବିପର୍ଯ୍ୟୟ ସହାୟତା',
    category: 'Community Service',
    shortDescription: 'Help pack dry ration kits, water purification sachets, and assist local emergency shelters.',
    fullDetails: 'Odisha is world-renowned for exemplary disaster management. When cyclones or monsoon floods occur, volunteers are needed to pack rations, assist helpline desks, and coordinate shelter logistics.',
    timeRequired: '4 - 6 Hours',
    karmaPoints: 40,
    difficulty: 'Challenging',
    location: 'OSDMA Emergency Volunteer Hubs, Statewide',
    organization: 'Odisha Disaster Management Authority (OSDMA) Network',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    impactMetric: '1 Day Humanitarian Service',
    guidelines: [
      'Follow all official safety and evacuation advisories.',
      'Work under the direct supervision of certified relief coordinators.',
      'Never enter dangerous floodwaters or downed electrical lines.',
      'Upload authorized shelter volunteer pass or relief coordinator confirmation.'
    ]
  },
  {
    id: 'act-plastic-upcycle',
    name: 'Plastic Waste Collection & Upcycling Drive',
    odiaName: 'ପ୍ଲାଷ୍ଟିକ୍ ବର୍ଜ୍ୟ ସଂଗ୍ରହ ଓ ପୁନଃଚକ୍ରଣ',
    category: 'Environmental',
    shortDescription: 'Collect PET bottles and plastic wrappers from tourist sites and deliver them to recycling kiosks.',
    fullDetails: 'Help turn waste into value! Gather discarded plastic bottles from Konark, Khandagiri, or Dhauli and drop them at municipal bottle-crusher kiosks or eco-brick collection points.',
    timeRequired: '2 Hours',
    karmaPoints: 20,
    difficulty: 'Easy',
    location: 'Udayagiri-Khandagiri Caves & Ekamra Kshetra',
    organization: 'Clean Bhubaneswar Foundation',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    impactMetric: '50 PET Bottles Recycled',
    guidelines: [
      'Empty and rinse beverage bottles if possible.',
      'Crush bottles to reduce volume in sacks.',
      'Hand over to designated recycling partner booths.',
      'Upload a photo at the recycling point.'
    ]
  },
  {
    id: 'act-wildlife-guard',
    name: 'Olive Ridley Turtle Nesting Sanctuary Watch',
    odiaName: 'ଅଲିଭ୍ ରିଡଲେ କଇଁଛ ସଂରକ୍ଷଣ',
    category: 'Environmental',
    shortDescription: 'Assist forest watchers in cordoning off beach nests and preventing feral dog intrusion.',
    fullDetails: 'Rushikulya and Gahirmatha are the world largest mass-nesting grounds (Arribada) for endangered Olive Ridley sea turtles. Volunteers assist in night illumination controls and beach safety.',
    timeRequired: '3 Hours',
    karmaPoints: 25,
    difficulty: 'Medium',
    location: 'Rushikulya River Mouth Beach, Ganjam',
    organization: 'Odisha Wildlife Protection Society',
    image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80',
    impactMetric: 'Protected Sea Turtle Habitat',
    guidelines: [
      'Never touch nesting turtles or hatchlings.',
      'Use only red cellophane light filters; avoid white flashlights.',
      'Maintain at least 10 meters distance from nesting mothers.',
      'Follow Forest Department warden instructions strictly.'
    ]
  }
];

// Volunteer Opportunities (Upcoming events users can join)
export const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  {
    id: 'vol-1',
    title: 'Grand Coastal Cleanliness Campaign - Puri Sea Beach',
    organization: 'Puri Beach Guardians & Red Cross',
    isVerifiedOrg: true,
    category: 'Environmental',
    location: 'Chakratirtha Beach to Light House, Puri',
    district: 'Puri',
    date: '2026-11-22',
    time: '06:00 AM - 09:00 AM',
    volunteersNeeded: 50,
    volunteersRegistered: 38,
    description: 'Annual pre-winter coastal drive removing micro-plastics and synthetic ghost nets. Refreshments, certificates, and cleaning kits provided.',
    contactEmail: 'volunteer@purigreencoast.org',
    isUrgent: true
  },
  {
    id: 'vol-2',
    title: 'Weekend Reading & Art Mentorship for Village Children',
    organization: 'Bakul Children Foundation',
    isVerifiedOrg: true,
    category: 'Education',
    location: 'Community Center, Raghurajpur Craft Village',
    district: 'Puri',
    date: '2026-11-23',
    time: '10:00 AM - 01:00 PM',
    volunteersNeeded: 15,
    volunteersRegistered: 11,
    description: 'Volunteers will guide small groups of children through bilingual storybooks and conduct a paper-craft session.',
    contactEmail: 'connect@bakulfoundation.org'
  },
  {
    id: 'vol-3',
    title: 'Community Blood Donation Drive & Health Screening',
    organization: 'Indian Red Cross Society Odisha',
    isVerifiedOrg: true,
    category: 'Community Service',
    location: 'Red Cross Bhawan, Unit 9, Bhubaneswar',
    district: 'Khurda',
    date: '2026-11-24',
    time: '09:00 AM - 03:00 PM',
    volunteersNeeded: 30,
    volunteersRegistered: 24,
    description: 'Camp supporting state thalassemia pediatric ward blood reserves. Medical doctors and nursing team present.',
    contactEmail: 'bloodbank@redcrossodisha.org',
    isUrgent: true
  },
  {
    id: 'vol-4',
    title: 'Warm Winter Clothes & Blanket Distribution',
    organization: 'Goonj Odisha Volunteers',
    isVerifiedOrg: true,
    category: 'Helping People',
    location: 'Baramunda Labor Colony & Tribal Foothills',
    district: 'Khurda',
    date: '2026-11-29',
    time: '04:00 PM - 07:00 PM',
    volunteersNeeded: 20,
    volunteersRegistered: 14,
    description: 'Distribute sorted, clean warm clothing, blankets, and children sweaters to daily wage families before cold wave onset.',
    contactEmail: 'odisha@goonj.org'
  },
  {
    id: 'vol-5',
    title: 'Oral History & Folk Lore Digital Recording Session',
    organization: 'Odisha Heritage & Folklore Archive',
    isVerifiedOrg: true,
    category: 'Culture & Heritage',
    location: 'Ganjam Folk Guild, Berhampur',
    district: 'Ganjam',
    date: '2026-12-05',
    time: '02:00 PM - 06:00 PM',
    volunteersNeeded: 8,
    volunteersRegistered: 6,
    description: 'Help setup microphones and audio recorders to record elder Ranapa and Prahallada Nataka performers.',
    contactEmail: 'archive@karma-path.org'
  }
];

// Community Impact Wall (Stories of Real Social Impact)
export const COMMUNITY_IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    userName: 'Arpita Sahu',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    activityTitle: 'Collected 12kg Plastic Waste at Chandrabhaga Beach',
    category: 'Environmental',
    location: 'Chandrabhaga Beach, Puri',
    date: '2026-11-12',
    story: 'Organized a sunrise plastic cleanup with 4 fellow tourists along the Konark-Chandrabhaga coast, properly segregating bottles and fishing net fragments. The fishermen joined hands with us!',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    karmaPoints: 20,
    applauseCount: 142
  },
  {
    id: 'story-2',
    userName: 'Debasis Mohapatra',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    activityTitle: 'Planted 10 Banyan & Neem Saplings at Naraj Riverbank',
    category: 'Environmental',
    location: 'Cuttack, Mahanadi Bank',
    date: '2026-11-10',
    story: 'Along with my college friends, we planted 10 indigenous saplings along the riverbank embankment. We also set up bamboo guards to shield them from grazing cattle.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    karmaPoints: 15,
    applauseCount: 98
  },
  {
    id: 'story-3',
    userName: 'Priyanka Das',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    activityTitle: 'Distributed 40 Fresh Meals to Labor Families in Bhubaneswar',
    category: 'Helping People',
    location: 'Old Town, Bhubaneswar',
    date: '2026-11-08',
    story: 'Prepared clean packets of hot Khichdi and Dalma with our community kitchen. Seeing the radiant smiles of children was the purest blessing.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    karmaPoints: 20,
    applauseCount: 215
  },
  {
    id: 'story-4',
    userName: 'Soumya Ranjan Nayak',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    activityTitle: 'Donated 50 Notebooks & Geometry Boxes at Raghurajpur',
    category: 'Education',
    location: 'Raghurajpur Heritage Village',
    date: '2026-11-05',
    story: 'Visited the village primary school and distributed notebooks, pencils, and colors to 25 young artists who are learning traditional Pattachitra sketching.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    karmaPoints: 15,
    applauseCount: 167
  }
];

// Karma Badges & Achievement Levels
export const KARMA_BADGES: KarmaBadge[] = [
  {
    id: 'badge-first-deed',
    name: 'First Good Deed',
    description: 'Completed your very first verified social impact activity.',
    icon: 'FaSeedling',
    requiredDeeds: 1,
    color: '#10B981'
  },
  {
    id: 'badge-kind-heart',
    name: 'Kind Heart',
    description: 'Earned 100+ Karma Points through compassionate community deeds.',
    icon: 'FaHeart',
    requiredPoints: 100,
    color: '#EC4899'
  },
  {
    id: 'badge-nature-guardian',
    name: 'Nature Guardian',
    description: 'Completed 5+ verified environmental and conservation drives.',
    icon: 'FaTree',
    requiredDeeds: 5,
    color: '#059669'
  },
  {
    id: 'badge-helping-hand',
    name: 'Helping Hand',
    description: 'Supported 10+ people or children through welfare and educational deeds.',
    icon: 'FaHandsHelping',
    requiredDeeds: 10,
    color: '#F59E0B'
  },
  {
    id: 'badge-community-hero',
    name: 'Community Hero',
    description: 'Earned 500+ Karma Points and mobilized fellow citizens.',
    icon: 'FaMedal',
    requiredPoints: 500,
    color: '#8B5CF6'
  },
  {
    id: 'badge-karma-champion',
    name: 'Karma Champion',
    description: 'Accumulated 1,000+ Karma Points with outstanding verified impact.',
    icon: 'FaCrown',
    requiredPoints: 1000,
    color: '#F59E0B'
  },
  {
    id: 'badge-humanity-ambassador',
    name: 'Humanity Ambassador',
    description: 'Top-tier 2,000+ Karma Points pillar of compassion and service.',
    icon: 'FaGlobeAmericas',
    requiredPoints: 2000,
    color: '#7955AE'
  }
];
