import { WordEntry } from '../types';

// Based on actual Anglish wordbook entries and principles
export const authentikWordEntries: WordEntry[] = [
  // Core vocabulary - Nouns
  {
    id: 'computer',
    word: 'Computer',
    meaning: 'Electronic device for processing data and performing calculations',
    kind: 'N',
    anglish: ['Telltale', 'Reckonbox', 'Thinkbox'],
    etymology: {
      oldEnglish: 'tellan (to tell, count) + tæl (tale, number)',
      protoGermanic: '*taljan + *talō',
      cognates: ['German zählen', 'Dutch tellen', 'Old Norse telja']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Telltale follows the pattern of German "Computer" → "Rechner" (calculator)'
  },
  {
    id: 'telephone',
    word: 'Telephone',
    meaning: 'Device for transmitting speech over distances',
    kind: 'N',
    anglish: ['Farspeaker', 'Longtalker'],
    etymology: {
      oldEnglish: 'feorr (far) + sprecan (to speak)',
      protoGermanic: '*ferrai + *sprekaną',
      cognates: ['German Fernsprecher', 'Dutch spreken']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Direct calque of German "Fernsprecher"'
  },
  {
    id: 'television',
    word: 'Television',
    meaning: 'Device for receiving and displaying broadcast images and sound',
    kind: 'N',
    anglish: ['Farseer', 'Faresight'],
    etymology: {
      oldEnglish: 'feorr (far) + sēon (to see)',
      protoGermanic: '*ferrai + *sehwaną',
      cognates: ['German Fernseher', 'Dutch zien']
    },
    attestation: 'neologism',
    category: 'technical'
  },
  {
    id: 'university',
    word: 'University',
    meaning: 'Institution of higher learning and research',
    kind: 'N',
    anglish: ['Highschool', 'Learningstead', 'Wisdomhall'],
    etymology: {
      oldEnglish: 'hēah (high) + scōl (school)',
      protoGermanic: '*hauhaz + *skōlō',
      cognates: ['German Hochschule', 'Dutch school']
    },
    attestation: 'proposed',
    category: 'academic'
  },
  {
    id: 'hospital',
    word: 'Hospital',
    meaning: 'Institution providing medical and surgical treatment',
    kind: 'N',
    anglish: ['Sickhouse', 'Healhouse', 'Lazarhouse'],
    etymology: {
      oldEnglish: 'sēoc (sick) + hūs (house)',
      protoGermanic: '*seukaz + *hūsą',
      cognates: ['German Krankenhaus', 'Dutch ziekenhuis']
    },
    attestation: 'neologism',
    category: 'professional'
  },

  // Verbs
  {
    id: 'understand',
    word: 'Understand',
    meaning: 'To comprehend the meaning or significance of something',
    kind: 'V',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'understandan',
      protoGermanic: '*under + *standaną',
      cognates: ['German verstehen', 'Dutch verstaan']
    },
    attestation: 'attested',
    category: 'authentic',
    notes: 'One of the few abstract verbs that survived from Old English'
  },
  {
    id: 'create',
    word: 'Create',
    meaning: 'To bring something into existence',
    kind: 'V',
    anglish: ['Shape', 'Make', 'Craft', 'Build'],
    etymology: {
      oldEnglish: 'sceppan (to shape), macian (to make)',
      protoGermanic: '*skepjaną, *makōną',
      cognates: ['German schaffen, machen', 'Dutch scheppen, maken']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'destroy',
    word: 'Destroy',
    meaning: 'To damage something so badly that it cannot be repaired',
    kind: 'V',
    anglish: ['Fordo', 'Undo', 'Break', 'Wreck'],
    etymology: {
      oldEnglish: 'fordōn (to destroy utterly)',
      protoGermanic: '*fra + *dōną',
      cognates: ['German verderben', 'Dutch verderven']
    },
    attestation: 'reconstructed',
    category: 'general'
  },

  // Adjectives  
  {
    id: 'important',
    word: 'Important',
    meaning: 'Of great significance or consequence',
    kind: 'AJ',
    anglish: ['Weighty', 'Heavy', 'Grave', 'Momentous'],
    etymology: {
      oldEnglish: 'hefig (heavy, weighty)',
      protoGermanic: '*habīgaz',
      cognates: ['German schwerwiegend', 'Dutch zwaarwegend']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'beautiful',
    word: 'Beautiful',
    meaning: 'Pleasing to the senses, especially sight',
    kind: 'AJ',
    anglish: ['Fair', 'Lovely', 'Winsome', 'Sightly'],
    etymology: {
      oldEnglish: 'fæger (fair, beautiful)',
      protoGermanic: '*fagraz',
      cognates: ['German schön', 'Dutch mooi']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'intelligent',
    word: 'Intelligent',
    meaning: 'Having or showing intelligence, especially of a high level',
    kind: 'AJ',
    anglish: ['Wise', 'Witty', 'Clever', 'Sharp'],
    etymology: {
      oldEnglish: 'wīs (wise), wittig (intelligent)',
      protoGermanic: '*wīsaz, *wittugaz',
      cognates: ['German weise, witzig', 'Dutch wijs']
    },
    attestation: 'attested',
    category: 'general'
  },

  // Scientific terms
  {
    id: 'oxygen',
    word: 'Oxygen',
    meaning: 'Chemical element essential for respiration',
    kind: 'N',
    anglish: ['Sourstuff', 'Breathstuff'],
    etymology: {
      oldEnglish: 'sūr (sour) + stuff',
      reconstruction: 'Calque based on "acid-former" meaning'
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Following German "Sauerstoff" pattern'
  },
  {
    id: 'hydrogen',
    word: 'Hydrogen',
    meaning: 'The lightest chemical element',
    kind: 'N',
    anglish: ['Waterstuff', 'Watermatter'],
    etymology: {
      oldEnglish: 'wæter (water) + stuff',
      reconstruction: 'Calque of "water-former"'
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Following German "Wasserstoff"'
  },
  {
    id: 'carbon',
    word: 'Carbon',
    meaning: 'Chemical element found in all living things',
    kind: 'N',
    anglish: ['Coalstuff', 'Blackstuff'],
    etymology: {
      oldEnglish: 'col (coal, charcoal) + stuff',
      cognates: ['German Kohlenstoff', 'Dutch koolstof']
    },
    attestation: 'neologism',
    category: 'technical'
  },

  // Abstract concepts
  {
    id: 'philosophy',
    word: 'Philosophy',
    meaning: 'The study of fundamental questions about existence, knowledge, and ethics',
    kind: 'N',
    anglish: ['Wisdom-love', 'Loveofwisdom', 'Thoughtlore'],
    etymology: {
      oldEnglish: 'wīsdōm (wisdom) + lufu (love)',
      reconstruction: 'Direct translation of Greek elements'
    },
    attestation: 'proposed',
    category: 'academic'
  },
  {
    id: 'democracy',
    word: 'Democracy',
    meaning: 'System of government by the people',
    kind: 'N',
    anglish: ['Folkright', 'Peoplerule', 'Commonweal'],
    etymology: {
      oldEnglish: 'folc (folk, people) + riht (right, rule)',
      cognates: ['German Volksherrschaft', 'Dutch volksregering']
    },
    attestation: 'proposed',
    category: 'social'
  },
  {
    id: 'geography',
    word: 'Geography',
    meaning: 'The study of Earth\'s features and human activity',
    kind: 'N',
    anglish: ['Earthlore', 'Landlore', 'Worldknowledge'],
    etymology: {
      oldEnglish: 'eorþe (earth) + lār (lore, learning)',
      cognates: ['German Erdkunde', 'Dutch aardrijkskunde']
    },
    attestation: 'neologism',
    category: 'academic'
  },

  // Already authentic Germanic words
  {
    id: 'house',
    word: 'House',
    meaning: 'Building for human habitation',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'hūs',
      protoGermanic: '*hūsą',
      cognates: ['German Haus', 'Dutch huis', 'Old Norse hús']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'water',
    word: 'Water',
    meaning: 'Clear liquid essential for life',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'wæter',
      protoGermanic: '*watōr',
      cognates: ['German Wasser', 'Dutch water', 'Old Norse vatn']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'fire',
    word: 'Fire',
    meaning: 'Rapid oxidation process producing heat and light',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'fȳr',
      protoGermanic: '*fōr',
      cognates: ['German Feuer', 'Dutch vuur', 'Old Norse fúr']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'earth',
    word: 'Earth',
    meaning: 'The planet we live on; soil',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'eorþe',
      protoGermanic: '*erþō',
      cognates: ['German Erde', 'Dutch aarde', 'Old Norse jörð']
    },
    attestation: 'attested',
    category: 'authentic'
  },

  // Food & Cooking
  {
    id: 'restaurant',
    word: 'Restaurant',
    meaning: 'A place where people pay to eat meals',
    kind: 'N',
    anglish: ['Eathouse', 'Foodhall', 'Feedhouse'],
    etymology: {
      reconstruction: 'French restaurant, from restaurer (to restore). The Anglish alternatives use Old English etan (to eat) + hūs (house)',
      cognates: ['German Restaurant', 'Dutch restaurant']
    },
    attestation: 'neologism',
    category: 'culinary'
  },
  {
    id: 'chef',
    word: 'Chef',
    meaning: 'A professional cook, especially the head cook',
    kind: 'N',
    anglish: ['Headcook', 'Kitchenmaster', 'Cookwright'],
    etymology: {
      reconstruction: 'French chef (chief), from Latin caput (head). The Anglish alternatives use Old English cōc (cook) + hēafod (head)',
      cognates: ['German Chefkoch', 'Dutch hoofdkok']
    },
    attestation: 'neologism',
    category: 'professional'
  },
  {
    id: 'recipe',
    word: 'Recipe',
    meaning: 'A set of instructions for preparing a dish',
    kind: 'N',
    anglish: ['Cookwrit', 'Foodway', 'Dishcraft'],
    etymology: {
      oldEnglish: 'cōc (cook) + writ (writing)',
      cognates: ['German Kochschrift', 'Dutch kookschrift']
    },
    attestation: 'neologism',
    category: 'culinary'
  },

  // Animals
  {
    id: 'elephant',
    word: 'Elephant',
    meaning: 'Large mammal with trunk and tusks',
    kind: 'N',
    anglish: ['Tuskbeast', 'Longnose', 'Ivory-bearer'],
    etymology: {
      reconstruction: 'Greek elephas (ivory, elephant), from a non-Indo-European language. The Anglish alternatives use descriptive Old English compounds like lang (long) + nosu (nose)',
      cognates: ['German Elefant', 'Dutch olifant']
    },
    attestation: 'proposed',
    category: 'nature'
  },
  {
    id: 'dolphin',
    word: 'Dolphin',
    meaning: 'Intelligent marine mammal',
    kind: 'N',
    anglish: ['Seapig', 'Waveridder', 'Smartfish'],
    etymology: {
      oldEnglish: 'sæ (sea) + picg (pig)',
      cognates: ['German Meeresschwein', 'Dutch zeeverken']
    },
    attestation: 'reconstructed',
    category: 'nature'
  },
  {
    id: 'butterfly',
    word: 'Butterfly',
    meaning: 'Flying insect with colorful wings',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'buttorfleoge (butter + fly)',
      cognates: ['German Schmetterling', 'Dutch vlinder']
    },
    attestation: 'attested',
    category: 'authentic'
  },

  // Transportation
  {
    id: 'automobile',
    word: 'Automobile',
    meaning: 'Self-propelled passenger vehicle',
    kind: 'N',
    anglish: ['Selfwain', 'Motorwagon', 'Ridewain'],
    etymology: {
      reconstruction: 'French automobile, from Greek auto- (self) + Latin mobilis (movable). The Anglish alternatives use Old English self + wægn (wagon)',
      cognates: ['German Kraftwagen', 'Dutch motorwagen']
    },
    attestation: 'neologism',
    category: 'technical'
  },
  {
    id: 'bicycle',
    word: 'Bicycle',
    meaning: 'Two-wheeled vehicle powered by pedaling',
    kind: 'N',
    anglish: ['Treadwheel', 'Footwain', 'Pushbike'],
    etymology: {
      oldEnglish: 'tredan (to tread) + hwēol (wheel)',
      cognates: ['German Fahrrad', 'Dutch fiets']
    },
    attestation: 'neologism',
    category: 'technical'
  },
  {
    id: 'airplane',
    word: 'Airplane',
    meaning: 'Powered flying vehicle with wings',
    kind: 'N',
    anglish: ['Flycraft', 'Windship', 'Skyboat'],
    etymology: {
      oldEnglish: 'flēogan (to fly) + cræft (craft)',
      cognates: ['German Flugzeug', 'Dutch vliegtuig']
    },
    attestation: 'neologism',
    category: 'technical'
  },

  // Medicine & Health
  {
    id: 'doctor',
    word: 'Doctor',
    meaning: 'Medical practitioner',
    kind: 'N',
    anglish: ['Leech', 'Healer', 'Sickhelper'],
    etymology: {
      oldEnglish: 'lǣce (physician, healer)',
      protoGermanic: '*lēkijaz',
      cognates: ['German Arzt', 'Dutch arts']
    },
    attestation: 'attested',
    category: 'professional'
  },
  {
    id: 'medicine',
    word: 'Medicine',
    meaning: 'Substance used to treat illness',
    kind: 'N',
    anglish: ['Leechcraft', 'Healwort', 'Sickbane'],
    etymology: {
      oldEnglish: 'lǣcecræft (healing art)',
      cognates: ['German Heilkunde', 'Dutch geneeskunde']
    },
    attestation: 'reconstructed',
    category: 'technical'
  },
  {
    id: 'surgery',
    word: 'Surgery',
    meaning: 'Medical treatment involving cutting',
    kind: 'N',
    anglish: ['Knifewerk', 'Cutcraft', 'Bodywork'],
    etymology: {
      oldEnglish: 'cnīf (knife) + weorc (work)',
      cognates: ['German Chirurgie', 'Dutch heelkunde']
    },
    attestation: 'neologism',
    category: 'technical'
  },

  // Education
  {
    id: 'student',
    word: 'Student',
    meaning: 'Person who is learning',
    kind: 'N',
    anglish: ['Learner', 'Scholar', 'Bookman'],
    etymology: {
      oldEnglish: 'leornere (learner)',
      cognates: ['German Schüler', 'Dutch leerling']
    },
    attestation: 'attested',
    category: 'academic'
  },
  {
    id: 'teacher',
    word: 'Teacher',
    meaning: 'Person who instructs others',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'lārēow (teacher, guide)',
      cognates: ['German Lehrer', 'Dutch onderwijzer']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'library',
    word: 'Library',
    meaning: 'Collection of books for reading',
    kind: 'N',
    anglish: ['Bookhall', 'Readhouse', 'Bookstead'],
    etymology: {
      oldEnglish: 'bōc (book) + heall (hall)',
      cognates: ['German Bibliothek', 'Dutch bibliotheek']
    },
    attestation: 'neologism',
    category: 'academic'
  },

  // Weather & Nature
  {
    id: 'hurricane',
    word: 'Hurricane',
    meaning: 'Violent tropical storm',
    kind: 'N',
    anglish: ['Stormwind', 'Whirlwind', 'Wreathwind'],
    etymology: {
      oldEnglish: 'storm + wind',
      cognates: ['German Orkan', 'Dutch orkaan']
    },
    attestation: 'attested',
    category: 'nature'
  },
  {
    id: 'rainbow',
    word: 'Rainbow',
    meaning: 'Arc of colors in the sky',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'regnboga (rain-bow)',
      cognates: ['German Regenbogen', 'Dutch regenboog']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'earthquake',
    word: 'Earthquake',
    meaning: 'Shaking of the ground',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'eorþbeofung (earth-shaking)',
      cognates: ['German Erdbeben', 'Dutch aardbeving']
    },
    attestation: 'attested',
    category: 'authentic'
  },

  // More Verbs
  {
    id: 'purchase',
    word: 'Purchase',
    meaning: 'To buy something',
    kind: 'V',
    anglish: ['Buy', 'Barter', 'Trade'],
    etymology: {
      oldEnglish: 'bycgan (to buy)',
      protoGermanic: '*bugjaną',
      cognates: ['German kaufen', 'Dutch kopen']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'discover',
    word: 'Discover',
    meaning: 'To find out or learn something new',
    kind: 'V',
    anglish: ['Find out', 'Uncover', 'Come upon'],
    etymology: {
      oldEnglish: 'findan (to find)',
      protoGermanic: '*finþaną',
      cognates: ['German finden', 'Dutch vinden']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'explain',
    word: 'Explain',
    meaning: 'To make something clear',
    kind: 'V',
    anglish: ['Spell out', 'Make clear', 'Unfold'],
    etymology: {
      oldEnglish: 'onfoldan (to unfold, explain)',
      cognates: ['German erklären', 'Dutch uitleggen']
    },
    attestation: 'reconstructed',
    category: 'general'
  },

  // More Adjectives
  {
    id: 'enormous',
    word: 'Enormous',
    meaning: 'Extremely large',
    kind: 'AJ',
    anglish: ['Huge', 'Mighty', 'Oversized'],
    etymology: {
      oldEnglish: 'micel (great, much)',
      protoGermanic: '*mikilaz',
      cognates: ['German groß', 'Dutch groot']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'excellent',
    word: 'Excellent',
    meaning: 'Extremely good',
    kind: 'AJ',
    anglish: ['Outstanding', 'First-rate', 'Top-shelf'],
    etymology: {
      oldEnglish: 'ūtstandan (to stand out)',
      cognates: ['German hervorragend', 'Dutch uitstekend']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'terrible',
    word: 'Terrible',
    meaning: 'Very bad or frightening',
    kind: 'AJ',
    anglish: ['Awful', 'Dreadful', 'Frightsome'],
    etymology: {
      oldEnglish: 'egeful (awful, terrible)',
      cognates: ['German schrecklich', 'Dutch verschrikkelijk']
    },
    attestation: 'attested',
    category: 'general'
  },

  // Technology & Modern Life
  {
    id: 'internet',
    word: 'Internet',
    meaning: 'Global network of connected computers',
    kind: 'N',
    anglish: ['Worldwide Web', 'Netweb', 'Linkwork'],
    etymology: {
      oldEnglish: 'net (net) + web (web)',
      reconstruction: 'Modern networking concept'
    },
    attestation: 'neologism',
    category: 'technical'
  },
  {
    id: 'smartphone',
    word: 'Smartphone',
    meaning: 'Mobile phone with computer features',
    kind: 'N',
    anglish: ['Handthink', 'Pocketbrain', 'Thinkspeaker'],
    etymology: {
      oldEnglish: 'hand + þencan (to think)',
      reconstruction: 'Portable thinking device'
    },
    attestation: 'neologism',
    category: 'technical'
  },
  {
    id: 'camera',
    word: 'Camera',
    meaning: 'Device for capturing images',
    kind: 'N',
    anglish: ['Picturebox', 'Imagecatcher', 'Lightsnare'],
    etymology: {
      oldEnglish: 'lēoht (light) + sneare (snare)',
      reconstruction: 'Light-capturing device'
    },
    attestation: 'neologism',
    category: 'technical'
  },

  // Colors
  {
    id: 'purple',
    word: 'Purple',
    meaning: 'Color between blue and red',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'purpul',
      reconstruction: 'From Latin, but naturalized early'
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'orange',
    word: 'Orange',
    meaning: 'Reddish-yellow color',
    kind: 'N',
    anglish: ['Redyellow', 'Flame-hue', 'Sunset-color'],
    etymology: {
      oldEnglish: 'read (red) + geolu (yellow)',
      cognates: ['German rotorange', 'Dutch roodgeel']
    },
    attestation: 'reconstructed',
    category: 'general'
  },

  // Body Parts
  {
    id: 'stomach',
    word: 'Stomach',
    meaning: 'Organ that digests food',
    kind: 'N',
    anglish: ['Belly', 'Gut', 'Maw'],
    etymology: {
      oldEnglish: 'maga (stomach, maw)',
      protoGermanic: '*magô',
      cognates: ['German Magen', 'Dutch maag']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'muscle',
    word: 'Muscle',
    meaning: 'Tissue that contracts to create movement',
    kind: 'N',
    anglish: ['Sinew', 'Flesh', 'Thew'],
    etymology: {
      oldEnglish: 'sinu (sinew)',
      protoGermanic: '*senawô',
      cognates: ['German Sehne', 'Dutch zenuw']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'skeleton',
    word: 'Skeleton',
    meaning: 'Framework of bones in the body',
    kind: 'N',
    anglish: ['Bonework', 'Boneframe', 'Deadframe'],
    etymology: {
      oldEnglish: 'bān (bone) + weorc (work)',
      cognates: ['German Skelett', 'Dutch skelet']
    },
    attestation: 'neologism',
    category: 'technical'
  },

  // Emotions & Mental States
  {
    id: 'anxiety',
    word: 'Anxiety',
    meaning: 'Feeling of worry or unease',
    kind: 'N',
    anglish: ['Worry', 'Unease', 'Dread'],
    etymology: {
      reconstruction: 'Latin anxietas, from anxius (troubled, uneasy). The Anglish alternative "worry" comes from Old English sorg (sorrow, worry)',
      protoGermanic: '*surgō',
      cognates: ['German Sorge', 'Dutch zorg']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'depression',
    word: 'Depression',
    meaning: 'Mental state of low mood',
    kind: 'N',
    anglish: ['Gloom', 'Downcast', 'Heavyheart'],
    etymology: {
      oldEnglish: 'glōm (gloom, darkness)',
      cognates: ['German Schwermut', 'Dutch zwaarmoedigheid']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'excitement',
    word: 'Excitement',
    meaning: 'Feeling of enthusiasm and eagerness',
    kind: 'N',
    anglish: ['Thrill', 'Eagerness', 'Highspirit'],
    etymology: {
      oldEnglish: 'geornnes (eagerness)',
      cognates: ['German Aufregung', 'Dutch opwinding']
    },
    attestation: 'reconstructed',
    category: 'general'
  },

  // Time & Calendar
  {
    id: 'calendar',
    word: 'Calendar',
    meaning: 'System for organizing days and months',
    kind: 'N',
    anglish: ['Daybook', 'Timebook', 'Yearwheel'],
    etymology: {
      oldEnglish: 'dæg (day) + bōc (book)',
      cognates: ['German Kalender', 'Dutch kalender']
    },
    attestation: 'neologism',
    category: 'general'
  },
  {
    id: 'century',
    word: 'Century',
    meaning: 'Period of one hundred years',
    kind: 'N',
    anglish: ['Hundredyear', 'Yearhundred'],
    etymology: {
      oldEnglish: 'hundteontig (hundred) + gēar (year)',
      cognates: ['German Jahrhundert', 'Dutch eeuw']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'minute',
    word: 'Minute',
    meaning: 'Unit of time equal to sixty seconds',
    kind: 'N',
    anglish: ['Mindsecond', 'Shortwhile', 'Tick'],
    etymology: {
      oldEnglish: 'hwīl (while, time)',
      cognates: ['German Minute', 'Dutch minuut']
    },
    attestation: 'proposed',
    category: 'general'
  },

  // Family & Relationships
  {
    id: 'cousin',
    word: 'Cousin',
    meaning: 'Child of one\'s aunt or uncle',
    kind: 'N',
    anglish: ['Sib', 'Kinchild', 'Nearkin'],
    etymology: {
      oldEnglish: 'sibb (kinship, relative)',
      protoGermanic: '*sibjō',
      cognates: ['German Vetter', 'Dutch neef']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'marriage',
    word: 'Marriage',
    meaning: 'Legal union between two people',
    kind: 'N',
    anglish: ['Wedding', 'Wedlock', 'Handfasting'],
    etymology: {
      oldEnglish: 'weddung (wedding ceremony)',
      cognates: ['German Hochzeit', 'Dutch huwelijk']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'divorce',
    word: 'Divorce',
    meaning: 'Legal ending of a marriage',
    kind: 'N',
    anglish: ['Wedbreak', 'Unweeding', 'Bondbreak'],
    etymology: {
      oldEnglish: 'wedd (pledge) + brecan (to break)',
      reconstruction: 'Breaking of marriage bond'
    },
    attestation: 'neologism',
    category: 'social'
  },

  // Clothing & Fashion
  {
    id: 'jacket',
    word: 'Jacket',
    meaning: 'Short coat worn over other clothes',
    kind: 'N',
    anglish: ['Shortcoat', 'Overgarb', 'Topwear'],
    etymology: {
      oldEnglish: 'scort (short) + cāsul (coat)',
      reconstruction: 'Short outer garment'
    },
    attestation: 'neologism',
    category: 'general'
  },
  {
    id: 'fashion',
    word: 'Fashion',
    meaning: 'Popular style of dress or appearance',
    kind: 'N',
    anglish: ['Garb-way', 'Dressway', 'Style'],
    etymology: {
      oldEnglish: 'wīse (way, manner)',
      cognates: ['German Mode', 'Dutch mode']
    },
    attestation: 'reconstructed',
    category: 'social'
  },
  {
    id: 'elegant',
    word: 'Elegant',
    meaning: 'Graceful and stylish in appearance',
    kind: 'AJ',
    anglish: ['Graceful', 'Shapely', 'Wellmade'],
    etymology: {
      oldEnglish: 'fæger (fair, beautiful)',
      cognates: ['German elegant', 'Dutch elegant']
    },
    attestation: 'reconstructed',
    category: 'general'
  },

  // Sports & Games
  {
    id: 'chess',
    word: 'Chess',
    meaning: 'Strategic board game with kings and queens',
    kind: 'N',
    anglish: ['Boardwar', 'Kingplay', 'Checkmate'],
    etymology: {
      oldEnglish: 'cyning (king) + plega (play)',
      reconstruction: 'Game of kings'
    },
    attestation: 'proposed',
    category: 'social'
  },
  {
    id: 'victory',
    word: 'Victory',
    meaning: 'Success in a struggle or contest',
    kind: 'N',
    anglish: ['Win', 'Triumph', 'Overcoming'],
    etymology: {
      oldEnglish: 'sige (victory)',
      protoGermanic: '*sigiz',
      cognates: ['German Sieg', 'Dutch overwinning']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'defeat',
    word: 'Defeat',
    meaning: 'Failure to win a contest',
    kind: 'N',
    anglish: ['Loss', 'Downfall', 'Beating'],
    etymology: {
      oldEnglish: 'fǣr (sudden attack, defeat)',
      cognates: ['German Niederlage', 'Dutch nederlaag']
    },
    attestation: 'attested',
    category: 'authentic'
  },

  // Music & Entertainment
  {
    id: 'concert',
    word: 'Concert',
    meaning: 'Musical performance for an audience',
    kind: 'N',
    anglish: ['Songshow', 'Musicplay', 'Tunehall'],
    etymology: {
      oldEnglish: 'song + scēawung (showing)',
      reconstruction: 'Performance of songs'
    },
    attestation: 'neologism',
    category: 'artistic'
  },
  {
    id: 'theater',
    word: 'Theater',
    meaning: 'Building where plays are performed',
    kind: 'N',
    anglish: ['Playhall', 'Showhouse', 'Stagehouse'],
    etymology: {
      oldEnglish: 'plega (play) + heall (hall)',
      cognates: ['German Theater', 'Dutch theater']
    },
    attestation: 'neologism',
    category: 'artistic'
  },
  {
    id: 'audience',
    word: 'Audience',
    meaning: 'Group of people watching a performance',
    kind: 'N',
    anglish: ['Watchers', 'Onlookers', 'Showfolk'],
    etymology: {
      oldEnglish: 'sceawere (watcher, observer)',
      cognates: ['German Zuschauer', 'Dutch toeschouwers']
    },
    attestation: 'reconstructed',
    category: 'social'
  },

  // Money & Commerce
  {
    id: 'expensive',
    word: 'Expensive',
    meaning: 'Costing a lot of money',
    kind: 'AJ',
    anglish: ['Dear', 'Costly', 'Highpriced'],
    etymology: {
      oldEnglish: 'dēore (precious, costly)',
      protoGermanic: '*deuraz',
      cognates: ['German teuer', 'Dutch duur']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'cheap',
    word: 'Cheap',
    meaning: 'Low in price',
    kind: 'AJ',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'cēap (bargain, price)',
      protoGermanic: '*kaupō',
      cognates: ['German kaufen', 'Dutch koop']
    },
    attestation: 'attested',
    category: 'authentic'
  },
  {
    id: 'profit',
    word: 'Profit',
    meaning: 'Money gained from business',
    kind: 'N',
    anglish: ['Gain', 'Winning', 'Earnings'],
    etymology: {
      oldEnglish: 'gestrīen (gain, profit)',
      cognates: ['German Gewinn', 'Dutch winst']
    },
    attestation: 'attested',
    category: 'authentic'
  },

  // Science & Research  
  {
    id: 'experiment',
    word: 'Experiment',
    meaning: 'Scientific test to discover something',
    kind: 'N',
    anglish: ['Trial', 'Test', 'Trialwork'],
    etymology: {
      reconstruction: 'Latin experimentum, from experiri (to try, test). The Anglish alternatives use Old English fandung (trial, test)',
      cognates: ['German Versuch', 'Dutch proef']
    },
    attestation: 'reconstructed',
    category: 'academic'
  },
  {
    id: 'laboratory',
    word: 'Laboratory',
    meaning: 'Room equipped for scientific work',
    kind: 'N',
    anglish: ['Testroom', 'Trialhouse', 'Workstead'],
    etymology: {
      oldEnglish: 'weorc (work) + stede (place)',
      cognates: ['German Labor', 'Dutch laboratorium']
    },
    attestation: 'neologism',
    category: 'academic'
  },
  {
    id: 'research',
    word: 'Research',
    meaning: 'Careful study to discover new facts',
    kind: 'N',
    anglish: ['Forsaking', 'Deep-seeking', 'Truthhunt'],
    etymology: {
      oldEnglish: 'forscēawung (investigation)',
      cognates: ['German Forschung', 'Dutch onderzoek']
    },
    attestation: 'reconstructed',
    category: 'academic'
  },

  // More Verbs for Daily Life
  {
    id: 'organize',
    word: 'Organize',
    meaning: 'To arrange in an orderly way',
    kind: 'V',
    anglish: ['Order', 'Set up', 'Shape up'],
    etymology: {
      oldEnglish: 'endebyrdan (to put in order)',
      cognates: ['German ordnen', 'Dutch ordenen']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'celebrate',
    word: 'Celebrate',
    meaning: 'To mark a special occasion with festivities',
    kind: 'V',
    anglish: ['Feast', 'Make merry', 'Hold high'],
    etymology: {
      oldEnglish: 'fēostrian (to feast)',
      cognates: ['German feiern', 'Dutch vieren']
    },
    attestation: 'reconstructed',
    category: 'social'
  },
  {
    id: 'remember',
    word: 'Remember',
    meaning: 'To keep in memory',
    kind: 'V',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'gemyndig (mindful), gemunan (remember)',
      protoGermanic: '*gamunanō',
      cognates: ['German sich erinnern', 'Dutch herinneren']
    },
    attestation: 'attested',
    category: 'authentic'
  }
];

export const wordKindLabels = {
  'N': 'Noun',
  'V': 'Verb',
  'AJ': 'Adjective', 
  'AV': 'Adverb',
  'PRO': 'Pronoun',
  'PREP': 'Preposition',
  'CONJ': 'Conjunction',
  'INT': 'Interjection',
  'ART': 'Article',
  'NUM': 'Number',
  'PART': 'Particle',
  'PREF': 'Prefix',
  'SUFF': 'Suffix',
  'PHR': 'Phrase'
} as const;

export const attestationLabels = {
  'attested': 'Attested in historical texts',
  'reconstructed': 'Linguistically reconstructed',
  'neologism': 'Modern Anglish creation',
  'proposed': 'Community proposal'
} as const;