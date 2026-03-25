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
      reconstruction: 'Latin computare (to calculate, sum up), from com- (together) + putare (to reckon)',
      cognates: ['French computer', 'Spanish computadora', 'Italian computer']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Telltale follows the pattern of German "Computer" → "Rechner" (calculator)',
    forms: ['computers']
  },
  {
    id: 'telephone',
    word: 'Telephone',
    meaning: 'Device for transmitting speech over distances',
    kind: 'N',
    anglish: ['Farspeaker', 'Longtalker'],
    etymology: {
      reconstruction: 'Greek tele- (far, distant) + phone (sound, voice)',
      cognates: ['French téléphone', 'Spanish teléfono', 'Italian telefono']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Direct calque of German "Fernsprecher"',
    forms: ['telephones']
  },
  {
    id: 'television',
    word: 'Television',
    meaning: 'Device for receiving and displaying broadcast images and sound',
    kind: 'N',
    anglish: ['Farseer', 'Faresight'],
    etymology: {
      reconstruction: 'Greek tele- (far, distant) + Latin visio (seeing), from videre (to see)',
      cognates: ['French télévision', 'Spanish televisión', 'Italian televisione']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['televisions']
  },
  {
    id: 'university',
    word: 'University',
    meaning: 'Institution of higher learning and research',
    kind: 'N',
    anglish: ['Highschool', 'Learningstead', 'Wisdomhall'],
    etymology: {
      reconstruction: 'Latin universitas (the whole, universe, guild), from universus (whole, entire)',
      cognates: ['French université', 'Spanish universidad', 'Italian università']
    },
    attestation: 'proposed',
    category: 'academic',
    forms: ['universities']
  },
  {
    id: 'hospital',
    word: 'Hospital',
    meaning: 'Institution providing medical and surgical treatment',
    kind: 'N',
    anglish: ['Sickhouse', 'Healhouse', 'Lazarhouse'],
    etymology: {
      reconstruction: 'Latin hospitale (guest house), from hospes (host, guest)',
      cognates: ['French hôpital', 'Spanish hospital', 'Italian ospedale']
    },
    attestation: 'neologism',
    category: 'professional',
    forms: ['hospitals']
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
    notes: 'One of the few abstract verbs that survived from Old English',
    forms: ['understands', 'understood', 'understanding']
  },
  {
    id: 'create',
    word: 'Create',
    meaning: 'To bring something into existence',
    kind: 'V',
    anglish: ['Shape', 'Make', 'Craft', 'Build'],
    etymology: {
      reconstruction: 'Latin creare (to make, produce, create), from crescere (to grow)',
      cognates: ['French créer', 'Spanish crear', 'Italian creare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['creates', 'created', 'creating']
  },
  {
    id: 'destroy',
    word: 'Destroy',
    meaning: 'To damage something so badly that it cannot be repaired',
    kind: 'V',
    anglish: ['Fordo', 'Undo', 'Break', 'Wreck'],
    etymology: {
      reconstruction: 'Old French destruire, from Latin destruere (to pull down, demolish), from de- (down) + struere (to build)',
      cognates: ['French détruire', 'Spanish destruir', 'Italian distruggere']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['destroys', 'destroyed', 'destroying']
  },

  // Adjectives
  {
    id: 'important',
    word: 'Important',
    meaning: 'Of great significance or consequence',
    kind: 'AJ',
    anglish: ['Weighty', 'Heavy', 'Grave', 'Momentous'],
    etymology: {
      reconstruction: 'Medieval Latin importantem, from Latin importare (to bring in, be of consequence), from in- (into) + portare (to carry)',
      cognates: ['French important', 'Spanish importante', 'Italian importante']
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
      reconstruction: 'Old French bealte (beauty), from Latin bellus (pretty, handsome) + -ful suffix',
      cognates: ['French beau/belle', 'Spanish bello', 'Italian bello']
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
      reconstruction: 'Latin intelligentem, from intelligere (to understand, comprehend), from inter- (between) + legere (to choose, pick out, read)',
      cognates: ['French intelligent', 'Spanish inteligente', 'Italian intelligente']
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
      reconstruction: 'French oxygène, from Greek oxys (sharp, acid) + -genes (producing), coined by Antoine Lavoisier in 1777',
      cognates: ['French oxygène', 'Spanish oxígeno', 'Italian ossigeno']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Following German "Sauerstoff" pattern',
    forms: ['oxygens']
  },
  {
    id: 'hydrogen',
    word: 'Hydrogen',
    meaning: 'The lightest chemical element',
    kind: 'N',
    anglish: ['Waterstuff', 'Watermatter'],
    etymology: {
      reconstruction: 'French hydrogène, from Greek hydro- (water) + -genes (forming), coined by Lavoisier in 1783',
      cognates: ['French hydrogène', 'Spanish hidrógeno', 'Italian idrogeno']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'Following German "Wasserstoff"',
    forms: ['hydrogens']
  },
  {
    id: 'carbon',
    word: 'Carbon',
    meaning: 'Chemical element found in all living things',
    kind: 'N',
    anglish: ['Coalstuff', 'Blackstuff'],
    etymology: {
      reconstruction: 'French carbone, from Latin carbo (coal, charcoal)',
      cognates: ['French carbone', 'Spanish carbono', 'Italian carbonio']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['carbons']
  },

  // Abstract concepts
  {
    id: 'philosophy',
    word: 'Philosophy',
    meaning: 'The study of fundamental questions about existence, knowledge, and ethics',
    kind: 'N',
    anglish: ['Wisdom-love', 'Loveofwisdom', 'Thoughtlore'],
    etymology: {
      reconstruction: 'Greek philosophia, from philo- (loving) + sophia (wisdom)',
      cognates: ['French philosophie', 'Spanish filosofía', 'Italian filosofia']
    },
    attestation: 'proposed',
    category: 'academic',
    forms: ['philosophies']
  },
  {
    id: 'democracy',
    word: 'Democracy',
    meaning: 'System of government by the people',
    kind: 'N',
    anglish: ['Folkright', 'Peoplerule', 'Commonweal'],
    etymology: {
      reconstruction: 'Greek demokratia, from demos (people) + kratos (power, rule)',
      cognates: ['French démocratie', 'Spanish democracia', 'Italian democrazia']
    },
    attestation: 'proposed',
    category: 'social',
    forms: ['democracies']
  },
  {
    id: 'geography',
    word: 'Geography',
    meaning: 'The study of Earth\'s features and human activity',
    kind: 'N',
    anglish: ['Earthlore', 'Landlore', 'Worldknowledge'],
    etymology: {
      reconstruction: 'Greek geographia, from geo- (earth) + -graphia (writing, description)',
      cognates: ['French géographie', 'Spanish geografía', 'Italian geografia']
    },
    attestation: 'neologism',
    category: 'academic',
    forms: ['geographies']
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
    category: 'authentic',
    forms: ['houses']
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
    category: 'authentic',
    forms: ['waters']
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
    category: 'authentic',
    forms: ['fires']
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
    category: 'authentic',
    forms: ['earths']
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
    category: 'culinary',
    forms: ['restaurants']
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
    category: 'professional',
    forms: ['chefs']
  },
  {
    id: 'recipe',
    word: 'Recipe',
    meaning: 'A set of instructions for preparing a dish',
    kind: 'N',
    anglish: ['Cookwrit', 'Foodway', 'Dishcraft'],
    etymology: {
      reconstruction: 'Latin recipe (take!, receive!), imperative of recipere (to take, receive)',
      cognates: ['French recette', 'Spanish receta', 'Italian ricetta']
    },
    attestation: 'neologism',
    category: 'culinary',
    forms: ['recipes']
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
    category: 'nature',
    forms: ['elephants']
  },
  {
    id: 'dolphin',
    word: 'Dolphin',
    meaning: 'Intelligent marine mammal',
    kind: 'N',
    anglish: ['Seapig', 'Waveridder', 'Smartfish'],
    etymology: {
      reconstruction: 'Greek delphinos, possibly from delphys (womb), via Latin delphinus',
      cognates: ['French dauphin', 'Spanish delfín', 'Italian delfino']
    },
    attestation: 'reconstructed',
    category: 'nature',
    forms: ['dolphins']
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
    category: 'authentic',
    forms: ['butterflies']
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
    category: 'technical',
    forms: ['automobiles']
  },
  {
    id: 'bicycle',
    word: 'Bicycle',
    meaning: 'Two-wheeled vehicle powered by pedaling',
    kind: 'N',
    anglish: ['Treadwheel', 'Footwain', 'Pushbike'],
    etymology: {
      reconstruction: 'French bicyclette, from bi- (two) + Greek kyklos (circle, wheel)',
      cognates: ['French bicyclette', 'Spanish bicicleta', 'Italian bicicletta']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['bicycles']
  },
  {
    id: 'airplane',
    word: 'Airplane',
    meaning: 'Powered flying vehicle with wings',
    kind: 'N',
    anglish: ['Flycraft', 'Windship', 'Skyboat'],
    etymology: {
      reconstruction: 'French aéroplane, from Greek aero- (air) + Latin planum (flat surface, plane)',
      cognates: ['French avion', 'Spanish avión', 'Italian aeroplano']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['airplanes']
  },

  // Medicine & Health
  {
    id: 'doctor',
    word: 'Doctor',
    meaning: 'Medical practitioner',
    kind: 'N',
    anglish: ['Leech', 'Healer', 'Sickhelper'],
    etymology: {
      reconstruction: 'Latin doctor (teacher), from docere (to teach)',
      cognates: ['French docteur', 'Spanish doctor', 'Italian dottore']
    },
    attestation: 'attested',
    category: 'professional',
    forms: ['doctors']
  },
  {
    id: 'medicine',
    word: 'Medicine',
    meaning: 'Substance used to treat illness',
    kind: 'N',
    anglish: ['Leechcraft', 'Healwort', 'Sickbane'],
    etymology: {
      reconstruction: 'Latin medicina (healing art), from medicus (physician), from mederi (to heal)',
      cognates: ['French médecine', 'Spanish medicina', 'Italian medicina']
    },
    attestation: 'reconstructed',
    category: 'technical',
    forms: ['medicines']
  },
  {
    id: 'surgery',
    word: 'Surgery',
    meaning: 'Medical treatment involving cutting',
    kind: 'N',
    anglish: ['Knifewerk', 'Cutcraft', 'Bodywork'],
    etymology: {
      reconstruction: 'Old French surgerie, from Latin chirurgia, from Greek kheirourgia (handiwork, surgery), from kheir (hand) + ergon (work)',
      cognates: ['French chirurgie', 'Spanish cirugía', 'Italian chirurgia']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['surgeries']
  },

  // Education
  {
    id: 'student',
    word: 'Student',
    meaning: 'Person who is learning',
    kind: 'N',
    anglish: ['Learner', 'Scholar', 'Bookman'],
    etymology: {
      reconstruction: 'Latin studentem, from studere (to study, be eager)',
      cognates: ['French étudiant', 'Spanish estudiante', 'Italian studente']
    },
    attestation: 'attested',
    category: 'academic',
    forms: ['students']
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
    category: 'authentic',
    forms: ['teachers']
  },
  {
    id: 'library',
    word: 'Library',
    meaning: 'Collection of books for reading',
    kind: 'N',
    anglish: ['Bookhall', 'Readhouse', 'Bookstead'],
    etymology: {
      reconstruction: 'Latin libraria (bookshop, library), from liber (book)',
      cognates: ['French bibliothèque', 'Spanish biblioteca', 'Italian biblioteca']
    },
    attestation: 'neologism',
    category: 'academic',
    forms: ['libraries']
  },

  // Weather & Nature
  {
    id: 'hurricane',
    word: 'Hurricane',
    meaning: 'Violent tropical storm',
    kind: 'N',
    anglish: ['Stormwind', 'Whirlwind', 'Wreathwind'],
    etymology: {
      reconstruction: 'Spanish huracán, from Taino (indigenous Caribbean) hurakán (god of the storm)',
      cognates: ['French ouragan', 'Spanish huracán', 'Italian uragano']
    },
    attestation: 'attested',
    category: 'nature',
    forms: ['hurricanes']
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
    category: 'authentic',
    forms: ['rainbows']
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
    category: 'authentic',
    forms: ['earthquakes']
  },

  // More Verbs
  {
    id: 'purchase',
    word: 'Purchase',
    meaning: 'To buy something',
    kind: 'V',
    anglish: ['Buy', 'Barter', 'Trade'],
    etymology: {
      reconstruction: 'Old French purchaser (to seek to obtain), from pur- (forth) + chaser (to chase, pursue)',
      cognates: ['French poursuivre', 'Spanish procurar', 'Italian procurare']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['purchases', 'purchased', 'purchasing']
  },
  {
    id: 'discover',
    word: 'Discover',
    meaning: 'To find out or learn something new',
    kind: 'V',
    anglish: ['Find out', 'Uncover', 'Come upon'],
    etymology: {
      reconstruction: 'Old French descovrir (to uncover, reveal), from des- (opposite) + covrir (to cover)',
      cognates: ['French découvrir', 'Spanish descubrir', 'Italian scoprire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['discovers', 'discovered', 'discovering']
  },
  {
    id: 'explain',
    word: 'Explain',
    meaning: 'To make something clear',
    kind: 'V',
    anglish: ['Spell out', 'Make clear', 'Unfold'],
    etymology: {
      reconstruction: 'Latin explanare (to make plain or clear), from ex- (out) + planus (flat, plain)',
      cognates: ['French expliquer', 'Spanish explicar', 'Italian spiegare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['explains', 'explained', 'explaining']
  },

  // More Adjectives
  {
    id: 'enormous',
    word: 'Enormous',
    meaning: 'Extremely large',
    kind: 'AJ',
    anglish: ['Huge', 'Mighty', 'Oversized'],
    etymology: {
      reconstruction: 'Latin enormis (irregular, immense), from e- (out of) + norma (rule, norm)',
      cognates: ['French énorme', 'Spanish enorme', 'Italian enorme']
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
      reconstruction: 'Latin excellentem, from excellere (to surpass, excel), from ex- (out) + cellere (to rise high)',
      cognates: ['French excellent', 'Spanish excelente', 'Italian eccellente']
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
      reconstruction: 'Latin terribilis (frightful), from terrere (to frighten)',
      cognates: ['French terrible', 'Spanish terrible', 'Italian terribile']
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
      reconstruction: 'Latin inter (between, among) + English network, coined in the 1970s',
      cognates: ['French internet', 'Spanish internet', 'Italian internet']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['internets']
  },
  {
    id: 'smartphone',
    word: 'Smartphone',
    meaning: 'Mobile phone with computer features',
    kind: 'N',
    anglish: ['Handthink', 'Pocketbrain', 'Thinkspeaker'],
    etymology: {
      reconstruction: 'English smart + phone, where phone comes from Greek phone (sound, voice), modern compound from 1990s',
      cognates: ['French smartphone', 'Spanish smartphone', 'Italian smartphone']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['smartphones']
  },
  {
    id: 'camera',
    word: 'Camera',
    meaning: 'Device for capturing images',
    kind: 'N',
    anglish: ['Picturebox', 'Imagecatcher', 'Lightsnare'],
    etymology: {
      reconstruction: 'Latin camera (vaulted chamber), from Greek kamara (vault). Short for "camera obscura" (dark chamber)',
      cognates: ['French caméra', 'Spanish cámara', 'Italian camera']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['cameras']
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
    category: 'authentic',
    forms: ['purples']
  },
  {
    id: 'orange',
    word: 'Orange',
    meaning: 'Reddish-yellow color',
    kind: 'N',
    anglish: ['Redyellow', 'Flame-hue', 'Sunset-color'],
    etymology: {
      reconstruction: 'Old French orenge, from Arabic nāranj, from Persian nārang, from Sanskrit nāraṅga (orange tree)',
      cognates: ['French orange', 'Spanish naranja', 'Italian arancia']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['oranges']
  },

  // Body Parts
  {
    id: 'stomach',
    word: 'Stomach',
    meaning: 'Organ that digests food',
    kind: 'N',
    anglish: ['Belly', 'Gut', 'Maw'],
    etymology: {
      reconstruction: 'Latin stomachus, from Greek stomakhos (throat, gullet, stomach), from stoma (mouth)',
      cognates: ['French estomac', 'Spanish estómago', 'Italian stomaco']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['stomachs']
  },
  {
    id: 'muscle',
    word: 'Muscle',
    meaning: 'Tissue that contracts to create movement',
    kind: 'N',
    anglish: ['Sinew', 'Flesh', 'Thew'],
    etymology: {
      reconstruction: 'Latin musculus (little mouse), diminutive of mus (mouse), from the appearance of flexing muscles',
      cognates: ['French muscle', 'Spanish músculo', 'Italian muscolo']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['muscles']
  },
  {
    id: 'skeleton',
    word: 'Skeleton',
    meaning: 'Framework of bones in the body',
    kind: 'N',
    anglish: ['Bonework', 'Boneframe', 'Deadframe'],
    etymology: {
      reconstruction: 'Greek skeleton (dried up body), from skeletos (dried up), from skellein (to dry up)',
      cognates: ['French squelette', 'Spanish esqueleto', 'Italian scheletro']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['skeletons']
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
    category: 'authentic',
    forms: ['anxieties']
  },
  {
    id: 'depression',
    word: 'Depression',
    meaning: 'Mental state of low mood',
    kind: 'N',
    anglish: ['Gloom', 'Downcast', 'Heavyheart'],
    etymology: {
      reconstruction: 'Latin depressio, from deprimere (to press down), from de- (down) + premere (to press)',
      cognates: ['French dépression', 'Spanish depresión', 'Italian depressione']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['depressions']
  },
  {
    id: 'excitement',
    word: 'Excitement',
    meaning: 'Feeling of enthusiasm and eagerness',
    kind: 'N',
    anglish: ['Thrill', 'Eagerness', 'Highspirit'],
    etymology: {
      reconstruction: 'Latin excitare (to call forth, rouse), from ex- (out) + citare (to set in motion)',
      cognates: ['French excitation', 'Spanish excitación', 'Italian eccitamento']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['excitements']
  },

  // Time & Calendar
  {
    id: 'calendar',
    word: 'Calendar',
    meaning: 'System for organizing days and months',
    kind: 'N',
    anglish: ['Daybook', 'Timebook', 'Yearwheel'],
    etymology: {
      reconstruction: 'Latin calendarium (account book), from calendae (first day of the month)',
      cognates: ['French calendrier', 'Spanish calendario', 'Italian calendario']
    },
    attestation: 'neologism',
    category: 'general',
    forms: ['calendars']
  },
  {
    id: 'century',
    word: 'Century',
    meaning: 'Period of one hundred years',
    kind: 'N',
    anglish: ['Hundredyear', 'Yearhundred'],
    etymology: {
      reconstruction: 'Latin centuria (group of a hundred), from centum (hundred)',
      cognates: ['French siècle', 'Spanish siglo', 'Italian secolo']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['centuries']
  },
  {
    id: 'minute',
    word: 'Minute',
    meaning: 'Unit of time equal to sixty seconds',
    kind: 'N',
    anglish: ['Mindsecond', 'Shortwhile', 'Tick'],
    etymology: {
      reconstruction: 'Medieval Latin minuta (small part), from Latin minutus (small), from minuere (to diminish)',
      cognates: ['French minute', 'Spanish minuto', 'Italian minuto']
    },
    attestation: 'proposed',
    category: 'general',
    forms: ['minutes']
  },

  // Family & Relationships
  {
    id: 'cousin',
    word: 'Cousin',
    meaning: 'Child of one\'s aunt or uncle',
    kind: 'N',
    anglish: ['Sib', 'Kinchild', 'Nearkin'],
    etymology: {
      reconstruction: 'Old French cosin, from Latin consobrinus (cousin), from con- (together) + sobrinus (cousin on mother\'s side)',
      cognates: ['French cousin', 'Spanish primo', 'Italian cugino']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['cousins']
  },
  {
    id: 'marriage',
    word: 'Marriage',
    meaning: 'Legal union between two people',
    kind: 'N',
    anglish: ['Wedding', 'Wedlock', 'Handfasting'],
    etymology: {
      reconstruction: 'Old French mariage, from marier (to marry), from Latin maritare (to wed), from maritus (husband)',
      cognates: ['French mariage', 'Spanish matrimonio', 'Italian matrimonio']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['marriages']
  },
  {
    id: 'divorce',
    word: 'Divorce',
    meaning: 'Legal ending of a marriage',
    kind: 'N',
    anglish: ['Wedbreak', 'Unweeding', 'Bondbreak'],
    etymology: {
      reconstruction: 'Old French divorce, from Latin divortium (separation), from divertere (to turn aside), from di- (apart) + vertere (to turn)',
      cognates: ['French divorce', 'Spanish divorcio', 'Italian divorzio']
    },
    attestation: 'neologism',
    category: 'social',
    forms: ['divorces']
  },

  // Clothing & Fashion
  {
    id: 'jacket',
    word: 'Jacket',
    meaning: 'Short coat worn over other clothes',
    kind: 'N',
    anglish: ['Shortcoat', 'Overgarb', 'Topwear'],
    etymology: {
      reconstruction: 'Old French jaquet (diminutive of jaque, a type of tunic), possibly from Jacques (James)',
      cognates: ['French jaquette', 'Spanish chaqueta', 'Italian giacca']
    },
    attestation: 'neologism',
    category: 'general',
    forms: ['jackets']
  },
  {
    id: 'fashion',
    word: 'Fashion',
    meaning: 'Popular style of dress or appearance',
    kind: 'N',
    anglish: ['Garb-way', 'Dressway', 'Style'],
    etymology: {
      reconstruction: 'Old French façon (shape, manner), from Latin factio (a making), from facere (to make, do)',
      cognates: ['French façon', 'Spanish facción', 'Italian fazione']
    },
    attestation: 'reconstructed',
    category: 'social',
    forms: ['fashions']
  },
  {
    id: 'elegant',
    word: 'Elegant',
    meaning: 'Graceful and stylish in appearance',
    kind: 'AJ',
    anglish: ['Graceful', 'Shapely', 'Wellmade'],
    etymology: {
      reconstruction: 'Latin elegantem, from eligere (to choose, select), from e- (out) + legere (to choose)',
      cognates: ['French élégant', 'Spanish elegante', 'Italian elegante']
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
      reconstruction: 'Old French esches (plural of eschec, check), from Persian shāh (king)',
      cognates: ['French échecs', 'Spanish ajedrez', 'Italian scacchi']
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
      reconstruction: 'Latin victoria (victory), from victor (conqueror), from vincere (to conquer)',
      cognates: ['French victoire', 'Spanish victoria', 'Italian vittoria']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['victories']
  },
  {
    id: 'defeat',
    word: 'Defeat',
    meaning: 'Failure to win a contest',
    kind: 'N',
    anglish: ['Loss', 'Downfall', 'Beating'],
    etymology: {
      reconstruction: 'Old French desfait (undone), from desfaire (to undo), from Latin dis- (opposite) + facere (to do)',
      cognates: ['French défaite', 'Spanish derrota', 'Italian sconfitta']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['defeats']
  },

  // Music & Entertainment
  {
    id: 'concert',
    word: 'Concert',
    meaning: 'Musical performance for an audience',
    kind: 'N',
    anglish: ['Songshow', 'Musicplay', 'Tunehall'],
    etymology: {
      reconstruction: 'French concert, from Italian concerto (harmony, agreement), from Latin concertare (to contend, compete)',
      cognates: ['French concert', 'Spanish concierto', 'Italian concerto']
    },
    attestation: 'neologism',
    category: 'artistic',
    forms: ['concerts']
  },
  {
    id: 'theater',
    word: 'Theater',
    meaning: 'Building where plays are performed',
    kind: 'N',
    anglish: ['Playhall', 'Showhouse', 'Stagehouse'],
    etymology: {
      reconstruction: 'Greek theatron (place for viewing), from theasthai (to behold), from thea (a view)',
      cognates: ['French théâtre', 'Spanish teatro', 'Italian teatro']
    },
    attestation: 'neologism',
    category: 'artistic',
    forms: ['theaters']
  },
  {
    id: 'audience',
    word: 'Audience',
    meaning: 'Group of people watching a performance',
    kind: 'N',
    anglish: ['Watchers', 'Onlookers', 'Showfolk'],
    etymology: {
      reconstruction: 'Old French audience (hearing, listening), from Latin audientia (a hearing), from audire (to hear)',
      cognates: ['French audience', 'Spanish audiencia', 'Italian udienza']
    },
    attestation: 'reconstructed',
    category: 'social',
    forms: ['audiences']
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
    category: 'authentic',
    forms: ['cheaper', 'cheapest']
  },
  {
    id: 'profit',
    word: 'Profit',
    meaning: 'Money gained from business',
    kind: 'N',
    anglish: ['Gain', 'Winning', 'Earnings'],
    etymology: {
      reconstruction: 'Old French profit, from Latin profectus (progress, profit), from proficere (to make progress), from pro- (forward) + facere (to make)',
      cognates: ['French profit', 'Spanish provecho', 'Italian profitto']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['profits']
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
    category: 'academic',
    forms: ['experiments']
  },
  {
    id: 'laboratory',
    word: 'Laboratory',
    meaning: 'Room equipped for scientific work',
    kind: 'N',
    anglish: ['Testroom', 'Trialhouse', 'Workstead'],
    etymology: {
      reconstruction: 'Medieval Latin laboratorium (workshop), from Latin laborare (to work), from labor (work, toil)',
      cognates: ['French laboratoire', 'Spanish laboratorio', 'Italian laboratorio']
    },
    attestation: 'neologism',
    category: 'academic',
    forms: ['laboratories']
  },
  {
    id: 'research',
    word: 'Research',
    meaning: 'Careful study to discover new facts',
    kind: 'N',
    anglish: ['Forsaking', 'Deep-seeking', 'Truthhunt'],
    etymology: {
      reconstruction: 'French recherche, from rechercher (to seek again), from re- (again) + chercher (to search)',
      cognates: ['French recherche', 'Spanish investigación', 'Italian ricerca']
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
      reconstruction: 'Medieval Latin organizare (to organize), from Latin organum (instrument, organ), from Greek organon (tool, instrument)',
      cognates: ['French organiser', 'Spanish organizar', 'Italian organizzare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['organizes', 'organized', 'organizing']
  },
  {
    id: 'celebrate',
    word: 'Celebrate',
    meaning: 'To mark a special occasion with festivities',
    kind: 'V',
    anglish: ['Feast', 'Make merry', 'Hold high'],
    etymology: {
      reconstruction: 'Latin celebrare (to honor, celebrate), from celeber (frequented, famous)',
      cognates: ['French célébrer', 'Spanish celebrar', 'Italian celebrare']
    },
    attestation: 'reconstructed',
    category: 'social',
    forms: ['celebrates', 'celebrated', 'celebrating']
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
    category: 'authentic',
    forms: ['remembers', 'remembered', 'remembering']
  },

  // Common Verbs - Additional entries
  {
    id: 'discuss',
    word: 'Discuss',
    meaning: 'To talk about something in detail',
    kind: 'V',
    anglish: ['Talk over', 'Bespeak', 'Talk through'],
    etymology: {
      reconstruction: 'Latin discutere (to strike apart, break up), from dis- (apart) + quatere (to shake)',
      cognates: ['French discuter', 'Spanish discutir', 'Italian discutere']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['discusses', 'discussed', 'discussing']
  },
  {
    id: 'permit',
    word: 'Permit',
    meaning: 'To allow something to happen',
    kind: 'V',
    anglish: ['Allow', 'Let', 'Give leave'],
    etymology: {
      reconstruction: 'Latin permittere (to let pass through), from per- (through) + mittere (to send)',
      cognates: ['French permettre', 'Spanish permitir', 'Italian permettere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['permits', 'permitted', 'permitting']
  },
  {
    id: 'permit-n',
    word: 'Permit',
    meaning: 'An official document giving authorisation to do something',
    kind: 'N',
    anglish: ['Leave', 'Licence', 'Warrant', 'Pass'],
    etymology: {
      reconstruction: 'Latin permittere (to let pass through), from per- (through) + mittere (to send); the noun use developed from the verb via nominalization in English',
      cognates: ['French permis', 'Spanish permiso', 'Italian permesso']
    },
    attestation: 'reconstructed',
    category: 'general',
    notes: 'The noun and verb are etymologically the same word but function as distinct parts of speech with distinct Anglish equivalents',
    forms: ['permits']
  },
  {
    id: 'continue',
    word: 'Continue',
    meaning: 'To keep doing something without stopping',
    kind: 'V',
    anglish: ['Keep on', 'Go on', 'Last'],
    etymology: {
      reconstruction: 'Latin continuare (to make continuous), from continuus (uninterrupted), from continere (to hold together)',
      cognates: ['French continuer', 'Spanish continuar', 'Italian continuare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['continues', 'continued', 'continuing']
  },
  {
    id: 'receive',
    word: 'Receive',
    meaning: 'To get or accept something given',
    kind: 'V',
    anglish: ['Get', 'Take in', 'Welcome'],
    etymology: {
      reconstruction: 'Old French receivre, from Latin recipere (to take back, receive), from re- (back) + capere (to take)',
      cognates: ['French recevoir', 'Spanish recibir', 'Italian ricevere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['receives', 'received', 'receiving']
  },
  {
    id: 'develop',
    word: 'Develop',
    meaning: 'To grow or cause to grow gradually',
    kind: 'V',
    anglish: ['Unfold', 'Grow', 'Build up'],
    etymology: {
      reconstruction: 'French développer (to unwrap, unfold), from des- (un-) + voloper (to wrap)',
      cognates: ['French développer', 'Spanish desarrollar', 'Italian sviluppare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['develops', 'developed', 'developing']
  },
  {
    id: 'require',
    word: 'Require',
    meaning: 'To need something as necessary',
    kind: 'V',
    anglish: ['Need', 'Call for', 'Must have'],
    etymology: {
      reconstruction: 'Old French requerre, from Latin requirere (to seek again, need), from re- (again) + quaerere (to seek)',
      cognates: ['French requérir', 'Spanish requerir', 'Italian richiedere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['requires', 'required', 'requiring']
  },
  {
    id: 'arrive',
    word: 'Arrive',
    meaning: 'To reach a destination',
    kind: 'V',
    anglish: ['Come', 'Reach', 'Get to'],
    etymology: {
      reconstruction: 'Old French ariver, from Vulgar Latin arripare (to come to shore), from Latin ad- (to) + ripa (shore)',
      cognates: ['French arriver', 'Spanish arribar', 'Italian arrivare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['arrives', 'arrived', 'arriving']
  },
  {
    id: 'depart',
    word: 'Depart',
    meaning: 'To leave or go away',
    kind: 'V',
    anglish: ['Leave', 'Go forth', 'Fare forth'],
    etymology: {
      reconstruction: 'Old French departir (to divide, separate), from Latin departire, from de- (from) + partire (to divide)',
      cognates: ['French départir', 'Spanish departir', 'Italian dipartire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['departs', 'departed', 'departing']
  },

  // Common Adjectives
  {
    id: 'difficult',
    word: 'Difficult',
    meaning: 'Not easy; requiring effort',
    kind: 'AJ',
    anglish: ['Hard', 'Tough', 'Uneasy'],
    etymology: {
      reconstruction: 'Latin difficilis (hard, difficult), from dis- (not) + facilis (easy)',
      cognates: ['French difficile', 'Spanish difícil', 'Italian difficile']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'simple',
    word: 'Simple',
    meaning: 'Easy to understand or do',
    kind: 'AJ',
    anglish: ['Plain', 'Straightforward', 'Easy'],
    etymology: {
      reconstruction: 'Old French simple, from Latin simplus (simple, plain), from sem- (one) + -plus (fold)',
      cognates: ['French simple', 'Spanish simple', 'Italian semplice']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['simpler', 'simplest']
  },
  {
    id: 'necessary',
    word: 'Necessary',
    meaning: 'Required or essential',
    kind: 'AJ',
    anglish: ['Needful', 'Must-have', 'Nedly'],
    etymology: {
      reconstruction: 'Latin necessarius (unavoidable, necessary), from necesse (unavoidable, necessary)',
      cognates: ['French nécessaire', 'Spanish necesario', 'Italian necessario']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'possible',
    word: 'Possible',
    meaning: 'Able to be done or happen',
    kind: 'AJ',
    anglish: ['Doable', 'Feasible', 'May-be'],
    etymology: {
      reconstruction: 'Old French possible, from Latin possibilis (that can be done), from posse (to be able)',
      cognates: ['French possible', 'Spanish posible', 'Italian possibile']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'ancient',
    word: 'Ancient',
    meaning: 'Very old; from long ago',
    kind: 'AJ',
    anglish: ['Old', 'Elder', 'Foreold'],
    etymology: {
      reconstruction: 'Old French ancien, from Vulgar Latin anteanus, from Latin ante (before)',
      cognates: ['French ancien', 'Spanish anciano', 'Italian antico']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'modern',
    word: 'Modern',
    meaning: 'Relating to the present time',
    kind: 'AJ',
    anglish: ['New', 'Today\'s', 'Newish'],
    etymology: {
      reconstruction: 'Late Latin modernus (modern), from Latin modo (just now), from modus (measure, manner)',
      cognates: ['French moderne', 'Spanish moderno', 'Italian moderno']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'popular',
    word: 'Popular',
    meaning: 'Liked by many people',
    kind: 'AJ',
    anglish: ['Wellliked', 'Beloved', 'Folkish'],
    etymology: {
      reconstruction: 'Latin popularis (of the people), from populus (people)',
      cognates: ['French populaire', 'Spanish popular', 'Italian popolare']
    },
    attestation: 'reconstructed',
    category: 'social'
  },
  {
    id: 'certain',
    word: 'Certain',
    meaning: 'Sure or definite',
    kind: 'AJ',
    anglish: ['Sure', 'Sooth', 'Fixed'],
    etymology: {
      reconstruction: 'Old French certain, from Latin certus (determined, settled), from cernere (to decide)',
      cognates: ['French certain', 'Spanish cierto', 'Italian certo']
    },
    attestation: 'attested',
    category: 'general'
  },

  // Common Nouns - Abstract Concepts
  {
    id: 'animal',
    word: 'Animal',
    meaning: 'Living creature that can move',
    kind: 'N',
    anglish: ['Beast', 'Deer', 'Livewight'],
    etymology: {
      reconstruction: 'Latin animalis (having breath, living), from anima (breath, soul)',
      cognates: ['French animal', 'Spanish animal', 'Italian animale']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['animals']
  },
  {
    id: 'person',
    word: 'Person',
    meaning: 'Individual human being',
    kind: 'N',
    anglish: ['Man', 'Wight', 'Being'],
    etymology: {
      reconstruction: 'Old French persone, from Latin persona (mask, character, person)',
      cognates: ['French personne', 'Spanish persona', 'Italian persona']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['people', 'persons']
  },
  {
    id: 'society',
    word: 'Society',
    meaning: 'Community of people living together',
    kind: 'N',
    anglish: ['Fellowship', 'Commonweal', 'Folkship'],
    etymology: {
      reconstruction: 'French société, from Latin societas (fellowship), from socius (companion, ally)',
      cognates: ['French société', 'Spanish sociedad', 'Italian società']
    },
    attestation: 'reconstructed',
    category: 'social',
    forms: ['societies']
  },
  {
    id: 'nation',
    word: 'Nation',
    meaning: 'Large group of people united by common descent or territory',
    kind: 'N',
    anglish: ['Folk', 'Land', 'Folkdom'],
    etymology: {
      reconstruction: 'Old French nation, from Latin natio (birth, tribe, nation), from nasci (to be born)',
      cognates: ['French nation', 'Spanish nación', 'Italian nazione']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['nations']
  },
  {
    id: 'religion',
    word: 'Religion',
    meaning: 'System of faith and worship',
    kind: 'N',
    anglish: ['Belief', 'Faith', 'Godliness'],
    etymology: {
      reconstruction: 'Latin religio (reverence, respect for what is sacred), possibly from religare (to bind)',
      cognates: ['French religion', 'Spanish religión', 'Italian religione']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['religions']
  },
  {
    id: 'science',
    word: 'Science',
    meaning: 'Systematic study of the natural world',
    kind: 'N',
    anglish: ['Knowledge', 'Lore', 'Wisdom'],
    etymology: {
      reconstruction: 'Old French science, from Latin scientia (knowledge), from scire (to know)',
      cognates: ['French science', 'Spanish ciencia', 'Italian scienza']
    },
    attestation: 'attested',
    category: 'academic',
    forms: ['sciences']
  },
  {
    id: 'justice',
    word: 'Justice',
    meaning: 'Fair treatment according to law',
    kind: 'N',
    anglish: ['Righteousness', 'Fairness', 'Rightfulness'],
    etymology: {
      reconstruction: 'Old French justice, from Latin justitia (righteousness, equity), from justus (just, right)',
      cognates: ['French justice', 'Spanish justicia', 'Italian giustizia']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['justices']
  },
  {
    id: 'freedom',
    word: 'Freedom',
    meaning: 'State of being free from restrictions',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'frēodōm',
      protoGermanic: '*frijadōmaz',
      cognates: ['German Freiheit', 'Dutch vrijheid']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['freedoms']
  },
  {
    id: 'peace',
    word: 'Peace',
    meaning: 'State of harmony without conflict',
    kind: 'N',
    anglish: ['Frith', 'Restfulness', 'Stillness'],
    etymology: {
      reconstruction: 'Old French pais, from Latin pax (peace)',
      cognates: ['French paix', 'Spanish paz', 'Italian pace']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['peaces']
  },
  {
    id: 'power',
    word: 'Power',
    meaning: 'Ability or capacity to do something',
    kind: 'N',
    anglish: ['Might', 'Strength', 'Main'],
    etymology: {
      reconstruction: 'Old French poeir, from Vulgar Latin potere, from Latin potis (able, powerful)',
      cognates: ['French pouvoir', 'Spanish poder', 'Italian potere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['powers']
  },

  // Technology & Business
  {
    id: 'industry',
    word: 'Industry',
    meaning: 'Economic activity concerned with manufacturing',
    kind: 'N',
    anglish: ['Craftwork', 'Making', 'Workfield'],
    etymology: {
      reconstruction: 'Latin industria (diligence, activity), from industrius (diligent)',
      cognates: ['French industrie', 'Spanish industria', 'Italian industria']
    },
    attestation: 'reconstructed',
    category: 'professional',
    forms: ['industries']
  },
  {
    id: 'machine',
    word: 'Machine',
    meaning: 'Device with moving parts that performs work',
    kind: 'N',
    anglish: ['Workcraft', 'Engine', 'Toolwork'],
    etymology: {
      reconstruction: 'French machine, from Latin machina (machine, engine), from Greek mēkhanē (device, contrivance)',
      cognates: ['French machine', 'Spanish máquina', 'Italian macchina']
    },
    attestation: 'reconstructed',
    category: 'technical',
    forms: ['machines']
  },
  {
    id: 'energy',
    word: 'Energy',
    meaning: 'Power or force needed for activity',
    kind: 'N',
    anglish: ['Workfare', 'Strength', 'Might'],
    etymology: {
      reconstruction: 'Late Latin energia, from Greek energeia (activity, operation), from en- (in) + ergon (work)',
      cognates: ['French énergie', 'Spanish energía', 'Italian energia']
    },
    attestation: 'reconstructed',
    category: 'technical',
    forms: ['energies']
  },
  {
    id: 'factory',
    word: 'Factory',
    meaning: 'Building where goods are manufactured',
    kind: 'N',
    anglish: ['Workshed', 'Makehouse', 'Craftstead'],
    etymology: {
      reconstruction: 'Late Latin factoria (oil press), from Latin factor (maker, doer), from facere (to make)',
      cognates: ['French fabrique', 'Spanish fábrica', 'Italian fabbrica']
    },
    attestation: 'neologism',
    category: 'professional',
    forms: ['factories']
  },
  {
    id: 'company',
    word: 'Company',
    meaning: 'Business organization',
    kind: 'N',
    anglish: ['Fellowship', 'Guild', 'Workband'],
    etymology: {
      reconstruction: 'Old French compaignie (companionship), from Vulgar Latin companio (one who eats bread with another), from com- (with) + panis (bread)',
      cognates: ['French compagnie', 'Spanish compañía', 'Italian compagnia']
    },
    attestation: 'reconstructed',
    category: 'professional',
    forms: ['companies']
  },

  // Everyday Life
  {
    id: 'moment',
    word: 'Moment',
    meaning: 'Very brief period of time',
    kind: 'N',
    anglish: ['Blink', 'Eyeblink', 'Wink'],
    etymology: {
      reconstruction: 'Latin momentum (movement, moving power, moment), from movere (to move)',
      cognates: ['French moment', 'Spanish momento', 'Italian momento']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['moments']
  },
  {
    id: 'change',
    word: 'Change',
    meaning: 'Act of becoming different',
    kind: 'N',
    anglish: ['Shift', 'Swapping', 'Wending'],
    etymology: {
      reconstruction: 'Old French changier, from Late Latin cambiare (to exchange, barter), from Celtic *cambion (exchange)',
      cognates: ['French changer', 'Spanish cambiar', 'Italian cambiare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['changes']
  },
  {
    id: 'place',
    word: 'Place',
    meaning: 'Particular position or location',
    kind: 'N',
    anglish: ['Stead', 'Spot', 'Where'],
    etymology: {
      reconstruction: 'Old French place (open space), from Latin platea (courtyard, street), from Greek plateia (broad way)',
      cognates: ['French place', 'Spanish plaza', 'Italian piazza']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['places']
  },
  {
    id: 'example',
    word: 'Example',
    meaning: 'Thing serving as illustration',
    kind: 'N',
    anglish: ['Byspel', 'Sample', 'Showing'],
    etymology: {
      reconstruction: 'Old French example, from Latin exemplum (sample, copy), from eximere (to take out)',
      cognates: ['French exemple', 'Spanish ejemplo', 'Italian esempio']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['examples']
  },
  {
    id: 'problem',
    word: 'Problem',
    meaning: 'Matter or situation requiring solution',
    kind: 'N',
    anglish: ['Riddle', 'Hardship', 'Knot'],
    etymology: {
      reconstruction: 'Old French problème, from Latin problema, from Greek problēma (obstacle, problem), from proballein (to throw forward)',
      cognates: ['French problème', 'Spanish problema', 'Italian problema']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['problems']
  },
  {
    id: 'question',
    word: 'Question',
    meaning: 'Sentence seeking information',
    kind: 'N',
    anglish: ['Asking', 'Frigging', 'Query'],
    etymology: {
      reconstruction: 'Old French question, from Latin quaestio (seeking, inquiry), from quaerere (to seek, ask)',
      cognates: ['French question', 'Spanish cuestión', 'Italian questione']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['questions']
  },
  {
    id: 'answer',
    word: 'Answer',
    meaning: 'Response to a question',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'andswaru',
      protoGermanic: '*andswaru',
      cognates: ['German Antwort', 'Dutch antwoord']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['answers']
  },

  // More Common Verbs
  {
    id: 'present',
    word: 'Present',
    meaning: 'To show or offer for consideration; to give formally',
    kind: 'V',
    anglish: ['Show', 'Give', 'Offer forth', 'Put forward'],
    etymology: {
      reconstruction: 'Old French presenter, from Latin praesentare (to place before), from praesens (present, at hand)',
      cognates: ['French présenter', 'Spanish presentar', 'Italian presentare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['presents', 'presented', 'presenting']
  },
  {
    id: 'present-n-gift',
    word: 'Present',
    meaning: 'A gift given to someone',
    kind: 'N',
    anglish: ['Gift', 'Giving', 'Bestowing'],
    etymology: {
      reconstruction: 'Old French present (gift), from mettre en present (to put in the presence of), from Latin praesens; originally "something placed before one"',
      cognates: ['French cadeau', 'Spanish regalo', 'German Geschenk']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "giefu" (gift) is the direct Germanic equivalent',
    forms: ['presents']
  },
  {
    id: 'present-aj',
    word: 'Present',
    meaning: 'Being in a particular place; existing or occurring now',
    kind: 'AJ',
    anglish: ['Here', 'At hand', 'Nigh', 'Now-here'],
    etymology: {
      reconstruction: 'Old French present, from Latin praesens (at hand, in person), present participle of praeesse (to be before), from prae- (before) + esse (to be)',
      cognates: ['French présent', 'Spanish presente', 'German gegenwärtig']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'present-n-time',
    word: 'Present',
    meaning: 'The current moment in time; the time that is happening now',
    kind: 'N',
    anglish: ['Now', 'This day', 'Nowtide', 'This while'],
    etymology: {
      reconstruction: 'Old French present (time), from Latin praesens tempus (present time); the substantivized use of the adjective praesens',
      cognates: ['French présent', 'Spanish presente', 'German Gegenwart']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "nu" (now) and "andweard" (present, current) cover this sense'
  },
  {
    id: 'produce',
    word: 'Produce',
    meaning: 'To make or manufacture something; to cause something to exist',
    kind: 'V',
    anglish: ['Make', 'Bring forth', 'Yield', 'Shape'],
    etymology: {
      reconstruction: 'Latin producere (to bring forth, lead forward), from pro- (forward) + ducere (to lead)',
      cognates: ['French produire', 'Spanish producir', 'Italian produrre']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['produces', 'produced', 'producing']
  },
  {
    id: 'produce-n',
    word: 'Produce',
    meaning: 'Fresh fruit and vegetables grown for food',
    kind: 'N',
    anglish: ['Growings', 'Garden-yields', 'Earthfood', 'Fresh goods'],
    etymology: {
      reconstruction: 'From the verb produce (Latin producere), nominalized to mean "that which is produced from the earth"; the specific sense of fresh food is distinctly English',
      cognates: ['French produits (maraîchers)', 'Spanish productos (frescos)', 'German Erzeugnisse']
    },
    attestation: 'reconstructed',
    category: 'culinary',
    notes: 'This noun sense (fresh farm goods) is distinct from the verb and carries different stress in speech (PRO-duce vs pro-DUCE)'
  },
  {
    id: 'decide',
    word: 'Decide',
    meaning: 'To make a choice or judgment',
    kind: 'V',
    anglish: ['Choose', 'Settle', 'Make up one\'s mind'],
    etymology: {
      reconstruction: 'Latin decidere (to cut off, determine), from de- (off) + caedere (to cut)',
      cognates: ['French décider', 'Spanish decidir', 'Italian decidere']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['decides', 'decided', 'deciding']
  },
  {
    id: 'consider',
    word: 'Consider',
    meaning: 'To think carefully about something',
    kind: 'V',
    anglish: ['Think over', 'Bethink', 'Weigh'],
    etymology: {
      reconstruction: 'Latin considerare (to examine, contemplate), possibly from com- (with) + sidus (star)',
      cognates: ['French considérer', 'Spanish considerar', 'Italian considerare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['considers', 'considered', 'considering']
  },
  {
    id: 'imagine',
    word: 'Imagine',
    meaning: 'To form a mental picture of something',
    kind: 'V',
    anglish: ['Mind forth', 'Dream up', 'Think up'],
    etymology: {
      reconstruction: 'Old French imaginer, from Latin imaginari (to form a mental picture), from imago (image)',
      cognates: ['French imaginer', 'Spanish imaginar', 'Italian immaginare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['imagines', 'imagined', 'imagining']
  },

  // More Nouns
  {
    id: 'purpose',
    word: 'Purpose',
    meaning: 'Reason for which something exists',
    kind: 'N',
    anglish: ['Goal', 'Aim', 'End'],
    etymology: {
      reconstruction: 'Old French porpos, from Latin propositum (thing put forth), from proponere (to set forth)',
      cognates: ['French propos', 'Spanish propósito', 'Italian proposito']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['purposes']
  },
  {
    id: 'result',
    word: 'Result',
    meaning: 'Outcome or consequence of something',
    kind: 'N',
    anglish: ['Outcome', 'Upshot', 'Aftermath'],
    etymology: {
      reconstruction: 'Medieval Latin resultare (to spring back), from Latin re- (back) + saltare (to leap)',
      cognates: ['French résultat', 'Spanish resultado', 'Italian risultato']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['results']
  },
  {
    id: 'opinion',
    word: 'Opinion',
    meaning: 'View or judgment about something',
    kind: 'N',
    anglish: ['Mind', 'Thought', 'Deeming'],
    etymology: {
      reconstruction: 'Old French opinion, from Latin opinio (belief, judgment), from opinari (to think, believe)',
      cognates: ['French opinion', 'Spanish opinión', 'Italian opinione']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['opinions']
  },
  {
    id: 'effort',
    word: 'Effort',
    meaning: 'Vigorous attempt to do something',
    kind: 'N',
    anglish: ['Struggle', 'Striving', 'Toil'],
    etymology: {
      reconstruction: 'French effort, from Old French esforz (force, exertion), from esforcier (to force)',
      cognates: ['French effort', 'Spanish esfuerzo', 'Italian sforzo']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['efforts']
  },
  {
    id: 'experience',
    word: 'Experience',
    meaning: 'Knowledge gained through doing',
    kind: 'N',
    anglish: ['Undergoing', 'Trial', 'Knowledge'],
    etymology: {
      reconstruction: 'Old French experience, from Latin experientia (a trial, proof, experiment), from experiri (to try)',
      cognates: ['French expérience', 'Spanish experiencia', 'Italian esperienza']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['experiences']
  },

  // High-frequency words with Latin/French/Greek roots — new entries

  {
    id: 'people',
    word: 'People',
    meaning: 'Human beings in general; a group of persons',
    kind: 'N',
    anglish: ['Folk', 'Kith', 'Wightkin'],
    etymology: {
      reconstruction: 'Old French peuple, from Latin populus (people, nation)',
      cognates: ['French peuple', 'Spanish pueblo', 'Italian popolo']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English had "folc" (folk) for the same concept',
    forms: ['peoples']
  },
  {
    id: 'language',
    word: 'Language',
    meaning: 'System of communication using words and grammar',
    kind: 'N',
    anglish: ['Tongue', 'Speech', 'Wordcraft'],
    etymology: {
      reconstruction: 'Old French language, from Latin lingua (tongue, language)',
      cognates: ['French langue', 'Spanish lengua', 'Italian lingua']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "tunge" (tongue) was used for language',
    forms: ['languages']
  },
  {
    id: 'number',
    word: 'Number',
    meaning: 'Arithmetical value; a quantity',
    kind: 'N',
    anglish: ['Tally', 'Count', 'Reckoning'],
    etymology: {
      reconstruction: 'Old French nombre, from Latin numerus (number)',
      cognates: ['French nombre', 'Spanish número', 'Italian numero']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['numbers']
  },
  {
    id: 'move',
    word: 'Move',
    meaning: 'To go from one place to another; to change position',
    kind: 'V',
    anglish: ['Stir', 'Wend', 'Shift'],
    etymology: {
      reconstruction: 'Anglo-French mover, from Latin movere (to move)',
      cognates: ['French mouvoir', 'Spanish mover', 'Italian muovere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['moves', 'moved', 'moving']
  },
  {
    id: 'point',
    word: 'Point',
    meaning: 'A specific location or moment; the tip of something',
    kind: 'N',
    anglish: ['Spot', 'Tip', 'Neb'],
    etymology: {
      reconstruction: 'Old French point, from Latin punctum (prick, point), from pungere (to prick)',
      cognates: ['French point', 'Spanish punto', 'Italian punto']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['points']
  },
  {
    id: 'place-v',
    word: 'Place (verb)',
    meaning: 'To put something in a particular position',
    kind: 'V',
    anglish: ['Set', 'Put', 'Lay'],
    etymology: {
      reconstruction: 'Old French placer, from place (open space), from Latin platea',
      cognates: ['French placer', 'Spanish colocar', 'Italian collocare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['places', 'placed', 'placing']
  },
  {
    id: 'use',
    word: 'Use',
    meaning: 'To employ something for a purpose',
    kind: 'V',
    anglish: ['Wield', 'Handle', 'Work with'],
    etymology: {
      reconstruction: 'Old French user, from Vulgar Latin usare, from Latin usus (use), from uti (to use)',
      cognates: ['French user', 'Spanish usar', 'Italian usare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['uses', 'used', 'using']
  },
  {
    id: 'cause',
    word: 'Cause',
    meaning: 'Something that brings about an effect or result',
    kind: 'N',
    anglish: ['Root', 'Grounds', 'Sake'],
    etymology: {
      reconstruction: 'Old French cause, from Latin causa (reason, cause)',
      cognates: ['French cause', 'Spanish causa', 'Italian causa']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['causes']
  },
  {
    id: 'action',
    word: 'Action',
    meaning: 'The process of doing something',
    kind: 'N',
    anglish: ['Deed', 'Doing', 'Work'],
    etymology: {
      reconstruction: 'Old French action, from Latin actio (a doing), from agere (to do, act)',
      cognates: ['French action', 'Spanish acción', 'Italian azione']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "dæd" (deed) covers this meaning',
    forms: ['actions']
  },
  {
    id: 'form',
    word: 'Form',
    meaning: 'The shape or structure of something',
    kind: 'N',
    anglish: ['Shape', 'Mold', 'Cast'],
    etymology: {
      reconstruction: 'Old French forme, from Latin forma (shape, mold)',
      cognates: ['French forme', 'Spanish forma', 'Italian forma']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['forms']
  },
  {
    id: 'matter',
    word: 'Matter',
    meaning: 'Physical substance; something of concern',
    kind: 'N',
    anglish: ['Stuff', 'Thing', 'Substance'],
    etymology: {
      reconstruction: 'Old French matere, from Latin materia (matter, material, wood)',
      cognates: ['French matière', 'Spanish materia', 'Italian materia']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['matters']
  },
  {
    id: 'case',
    word: 'Case',
    meaning: 'Instance or situation; a legal matter',
    kind: 'N',
    anglish: ['Instance', 'Happening', 'Affair'],
    etymology: {
      reconstruction: 'Old French cas, from Latin casus (fall, event), from cadere (to fall)',
      cognates: ['French cas', 'Spanish caso', 'Italian caso']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['cases']
  },
  {
    id: 'level',
    word: 'Level',
    meaning: 'A position on a scale; a flat surface',
    kind: 'N',
    anglish: ['Floor', 'Step', 'Flat'],
    etymology: {
      reconstruction: 'Old French livel, from Vulgar Latin libellum, from Latin libella (a small balance)',
      cognates: ['French niveau', 'Spanish nivel', 'Italian livello']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['levels']
  },
  {
    id: 'increase',
    word: 'Increase',
    meaning: 'To become or make larger in size or amount',
    kind: 'V',
    anglish: ['Grow', 'Rise', 'Swell'],
    etymology: {
      reconstruction: 'Old French encreistre, from Latin increscere (to grow into), from in- (in) + crescere (to grow)',
      cognates: ['French accroître', 'Spanish aumentar', 'Italian aumentare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['increases', 'increased', 'increasing']
  },
  {
    id: 'provide',
    word: 'Provide',
    meaning: 'To supply or make available',
    kind: 'V',
    anglish: ['Give', 'Yield', 'Furnish'],
    etymology: {
      reconstruction: 'Latin providere (to foresee, provide), from pro- (before) + videre (to see)',
      cognates: ['French pourvoir', 'Spanish proveer', 'Italian provvedere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['provides', 'provided', 'providing']
  },
  {
    id: 'environment',
    word: 'Environment',
    meaning: 'The surroundings in which something lives',
    kind: 'N',
    anglish: ['Surroundings', 'Outworld', 'Garth'],
    etymology: {
      reconstruction: 'Old French environ (around), from en (in) + viron (circle, circuit)',
      cognates: ['French environnement', 'Spanish ambiente', 'Italian ambiente']
    },
    attestation: 'neologism',
    category: 'nature',
    forms: ['environments']
  },
  {
    id: 'government',
    word: 'Government',
    meaning: 'The system by which a state is governed',
    kind: 'N',
    anglish: ['Rule', 'Ruleship', 'Stewardship'],
    etymology: {
      reconstruction: 'Old French governement, from Latin gubernare (to govern), from Greek kybernan (to steer)',
      cognates: ['French gouvernement', 'Spanish gobierno', 'Italian governo']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['governments']
  },
  {
    id: 'information',
    word: 'Information',
    meaning: 'Facts or knowledge about something',
    kind: 'N',
    anglish: ['Tidings', 'Lore', 'Wording'],
    etymology: {
      reconstruction: 'Old French information, from Latin informatio (concept, idea), from informare (to form, instruct)',
      cognates: ['French information', 'Spanish información', 'Italian informazione']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'large',
    word: 'Large',
    meaning: 'Of great size; big',
    kind: 'AJ',
    anglish: ['Big', 'Great', 'Broad'],
    etymology: {
      reconstruction: 'Old French large (wide, broad), from Latin larga (feminine of largus, ample)',
      cognates: ['French large', 'Spanish largo', 'Italian largo']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['larger', 'largest']
  },
  {
    id: 'special',
    word: 'Special',
    meaning: 'Distinguished from what is ordinary',
    kind: 'AJ',
    anglish: ['Wyrd', 'Chosen', 'Hallmark'],
    etymology: {
      reconstruction: 'Old French especial, from Latin specialis (particular), from species (kind, sort)',
      cognates: ['French spécial', 'Spanish especial', 'Italian speciale']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'public',
    word: 'Public',
    meaning: 'Relating to or done by all the people',
    kind: 'AJ',
    anglish: ['Folkly', 'Open', 'Common'],
    etymology: {
      reconstruction: 'Old French public, from Latin publicus (of the people), from populus (people)',
      cognates: ['French public', 'Spanish público', 'Italian pubblico']
    },
    attestation: 'reconstructed',
    category: 'social'
  },
  {
    id: 'private',
    word: 'Private',
    meaning: 'Not open to the public; personal',
    kind: 'AJ',
    anglish: ['Own', 'Closeted', 'Hid'],
    etymology: {
      reconstruction: 'Latin privatus (apart from public life), from privare (to deprive), from privus (one\'s own)',
      cognates: ['French privé', 'Spanish privado', 'Italian privato']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'real',
    word: 'Real',
    meaning: 'Actually existing or happening',
    kind: 'AJ',
    anglish: ['True', 'Sooth', 'Steadfast'],
    etymology: {
      reconstruction: 'Old French reel, from Late Latin realis (actual), from Latin res (thing)',
      cognates: ['French réel', 'Spanish real', 'Italian reale']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'situation',
    word: 'Situation',
    meaning: 'A set of circumstances at a particular time',
    kind: 'N',
    anglish: ['Plight', 'Standing', 'State'],
    etymology: {
      reconstruction: 'French situation, from Late Latin situationem, from situare (to place), from situs (position)',
      cognates: ['French situation', 'Spanish situación', 'Italian situazione']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['situations']
  },
  {
    id: 'area',
    word: 'Area',
    meaning: 'A region or part of a place',
    kind: 'N',
    anglish: ['Field', 'Stretch', 'Ground'],
    etymology: {
      reconstruction: 'Latin area (open space, threshing floor)',
      cognates: ['French aire', 'Spanish área', 'Italian area']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['areas']
  },
  {
    id: 'family',
    word: 'Family',
    meaning: 'A group of related people',
    kind: 'N',
    anglish: ['Kin', 'Kindred', 'Homefolk'],
    etymology: {
      reconstruction: 'Latin familia (household, family), from famulus (servant)',
      cognates: ['French famille', 'Spanish familia', 'Italian famiglia']
    },
    attestation: 'attested',
    category: 'social',
    notes: 'Old English "cynn" (kin, family) is the direct Germanic parallel',
    forms: ['families']
  },
  {
    id: 'body',
    word: 'Body',
    meaning: 'The physical structure of a person or animal',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'bodig',
      protoGermanic: '*budagą',
      cognates: ['German Körper', 'Dutch lichaam']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['bodies']
  },
  {
    id: 'face',
    word: 'Face',
    meaning: 'The front of the head; a surface',
    kind: 'N',
    anglish: ['Mug', 'Visage', 'Andwlita'],
    etymology: {
      reconstruction: 'Old French face, from Vulgar Latin facia, from Latin facies (form, shape, face)',
      cognates: ['French face', 'Spanish faz', 'Italian faccia']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "andwlita" (face) and "ansyn" (face, appearance) are the authentic forms',
    forms: ['faces']
  },
  {
    id: 'child',
    word: 'Child',
    meaning: 'A young human being',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'cild',
      protoGermanic: '*kelþaz',
      cognates: ['German Kind', 'Dutch kind']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['children']
  },
  {
    id: 'city',
    word: 'City',
    meaning: 'Large and important town',
    kind: 'N',
    anglish: ['Burgh', 'Burgstead', 'Greattown'],
    etymology: {
      reconstruction: 'Old French cite, from Latin civitas (citizenship, city), from civis (citizen)',
      cognates: ['French cité', 'Spanish ciudad', 'Italian città']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "burg/burh" was used for fortified towns',
    forms: ['cities']
  },
  {
    id: 'group',
    word: 'Group',
    meaning: 'A number of people or things gathered together',
    kind: 'N',
    anglish: ['Band', 'Cluster', 'Gang'],
    etymology: {
      reconstruction: 'French groupe, from Italian gruppo (bunch, cluster), from Germanic *kruppaz (round mass)',
      cognates: ['French groupe', 'Spanish grupo', 'Italian gruppo']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['groups']
  },
  {
    id: 'order',
    word: 'Order',
    meaning: 'Arrangement; a command; a sequence',
    kind: 'N',
    anglish: ['Array', 'Bode', 'Row'],
    etymology: {
      reconstruction: 'Old French ordre, from Latin ordo (row, rank, order)',
      cognates: ['French ordre', 'Spanish orden', 'Italian ordine']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['orders']
  },
  {
    id: 'age',
    word: 'Age',
    meaning: 'Length of time something has existed; a historical period',
    kind: 'N',
    anglish: ['Eld', 'Tide', 'Yore'],
    etymology: {
      reconstruction: 'Old French aage, from Latin aetatem (accusative of aetas, age, time of life)',
      cognates: ['French âge', 'Spanish edad', 'Italian età']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "ieldu/yldo" (age, old age) and "eald" (old) are the authentic roots',
    forms: ['ages']
  },
  {
    id: 'member',
    word: 'Member',
    meaning: 'A person belonging to a group or organization',
    kind: 'N',
    anglish: ['Fellow', 'Sharer', 'Partaker'],
    etymology: {
      reconstruction: 'Old French membre, from Latin membrum (limb, member)',
      cognates: ['French membre', 'Spanish miembro', 'Italian membro']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['members']
  },
  {
    id: 'service',
    word: 'Service',
    meaning: 'Work done for others; a system providing public needs',
    kind: 'N',
    anglish: ['Help', 'Thane-work', 'Bondwork'],
    etymology: {
      reconstruction: 'Old French service, from Latin servitium (servitude), from servus (slave, servant)',
      cognates: ['French service', 'Spanish servicio', 'Italian servizio']
    },
    attestation: 'reconstructed',
    category: 'professional',
    forms: ['services']
  },
  {
    id: 'office',
    word: 'Office',
    meaning: 'A room for professional work; a position of authority',
    kind: 'N',
    anglish: ['Workroom', 'Deskroom', 'High-seat'],
    etymology: {
      reconstruction: 'Old French office, from Latin officium (duty, service), from opus (work) + facere (to do)',
      cognates: ['French bureau', 'Spanish oficina', 'Italian ufficio']
    },
    attestation: 'neologism',
    category: 'professional',
    forms: ['offices']
  },
  {
    id: 'social',
    word: 'Social',
    meaning: 'Relating to society or human interaction',
    kind: 'AJ',
    anglish: ['Fellowly', 'Folksome', 'Togetherly'],
    etymology: {
      reconstruction: 'Latin socialis (of companionship), from socius (companion, ally)',
      cognates: ['French social', 'Spanish social', 'Italian sociale']
    },
    attestation: 'neologism',
    category: 'social'
  },
  {
    id: 'natural',
    word: 'Natural',
    meaning: 'Existing in or derived from nature',
    kind: 'AJ',
    anglish: ['Earthy', 'Kindly', 'Wildborn'],
    etymology: {
      reconstruction: 'Old French naturel, from Latin naturalis (by birth, natural), from natura (nature)',
      cognates: ['French naturel', 'Spanish natural', 'Italian naturale']
    },
    attestation: 'reconstructed',
    category: 'nature'
  },
  {
    id: 'condition',
    word: 'Condition',
    meaning: 'State of something; a requirement',
    kind: 'N',
    anglish: ['State', 'Plight', 'Standing'],
    etymology: {
      reconstruction: 'Old French condicion, from Latin conditionem (agreement, stipulation), from condicere (to speak with)',
      cognates: ['French condition', 'Spanish condición', 'Italian condizione']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['conditions']
  },
  {
    id: 'process',
    word: 'Process',
    meaning: 'A series of actions to achieve an end',
    kind: 'N',
    anglish: ['Course', 'Going', 'Working'],
    etymology: {
      reconstruction: 'Old French proces, from Latin processus (a going forward), from procedere (to go forward)',
      cognates: ['French processus', 'Spanish proceso', 'Italian processo']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['processes']
  },
  {
    id: 'study',
    word: 'Study',
    meaning: 'To learn by reading and research',
    kind: 'V',
    anglish: ['Learn', 'Read', 'Delve'],
    etymology: {
      reconstruction: 'Old French estudier, from Latin studere (to be diligent, study)',
      cognates: ['French étudier', 'Spanish estudiar', 'Italian studiare']
    },
    attestation: 'attested',
    category: 'academic',
    forms: ['studies', 'studied', 'studying']
  },
  {
    id: 'complete',
    word: 'Complete',
    meaning: 'Having all parts; finished entirely',
    kind: 'AJ',
    anglish: ['Whole', 'Full', 'Done'],
    etymology: {
      reconstruction: 'Latin completus (filled up, complete), past participle of complere (to fill up)',
      cognates: ['French complet', 'Spanish completo', 'Italian completo']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'achieve',
    word: 'Achieve',
    meaning: 'To reach a desired goal by effort',
    kind: 'V',
    anglish: ['Win', 'Reach', 'Bring off'],
    etymology: {
      reconstruction: 'Old French achever (to bring to a head), from a chief (to a head), from Latin caput (head)',
      cognates: ['French achever', 'Spanish lograr', 'Italian raggiungere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['achieves', 'achieved', 'achieving']
  },
  {
    id: 'property',
    word: 'Property',
    meaning: 'A thing or things owned; land and buildings',
    kind: 'N',
    anglish: ['Goods', 'Belongings', 'Holdings'],
    etymology: {
      reconstruction: 'Old French propriete, from Latin proprietas (ownership), from proprius (one\'s own)',
      cognates: ['French propriété', 'Spanish propiedad', 'Italian proprietà']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['properties']
  },
  {
    id: 'relate',
    word: 'Relate',
    meaning: 'To make a connection; to tell a story',
    kind: 'V',
    anglish: ['Link', 'Connect', 'Tell'],
    etymology: {
      reconstruction: 'Latin relatus (past participle of referre), from re- (back) + ferre (to carry)',
      cognates: ['French relater', 'Spanish relatar', 'Italian relazionare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['relates', 'related', 'relating']
  },
  {
    id: 'reduce',
    word: 'Reduce',
    meaning: 'To make smaller in amount or size',
    kind: 'V',
    anglish: ['Shrink', 'Lessen', 'Lower'],
    etymology: {
      reconstruction: 'Latin reducere (to bring back), from re- (back) + ducere (to lead)',
      cognates: ['French réduire', 'Spanish reducir', 'Italian ridurre']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['reduces', 'reduced', 'reducing']
  },
  {
    id: 'lead',
    word: 'Lead',
    meaning: 'To guide or direct; to be in charge',
    kind: 'V',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'lǣdan',
      protoGermanic: '*laidijaną',
      cognates: ['German leiten', 'Dutch leiden']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['leads', 'led', 'leading']
  },
  {
    id: 'lead-n-metal',
    word: 'Lead',
    meaning: 'A heavy, soft, grey metallic element (symbol Pb)',
    kind: 'N',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'lēad (the metal)',
      protoGermanic: '*lauda-',
      cognates: ['German Lot (plumb, solder)', 'Dutch lood', 'Old Norse lóð']
    },
    attestation: 'attested',
    category: 'authentic',
    notes: 'The metal name is Old English in origin and etymologically unrelated to the verb "to lead"; the two words are a coincidental homograph'
  },
  {
    id: 'lead-n-leash',
    word: 'Lead',
    meaning: 'A strap or cord for restraining or guiding an animal; a cable or wire',
    kind: 'N',
    anglish: ['Leash', 'Tether', 'Line'],
    etymology: {
      reconstruction: 'From the verb lead (Old English lǣdan), extended to mean "that which leads"; the sense of a dog-leash developed in Middle English',
      cognates: ['German Leine (leash, cord)', 'Dutch lijn (line, leash)']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "rāp" (rope) and "line" serve for the cable sense; "leash" itself comes from Old French',
    forms: ['leads']
  },
  {
    id: 'opportunity',
    word: 'Opportunity',
    meaning: 'A set of circumstances making something possible',
    kind: 'N',
    anglish: ['Opening', 'Chance', 'Windfall'],
    etymology: {
      reconstruction: 'Latin opportunitas, from opportunus (convenient, fit), from ob- (before) + portus (harbor)',
      cognates: ['French opportunité', 'Spanish oportunidad', 'Italian opportunità']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['opportunities']
  },
  {
    id: 'value',
    word: 'Value',
    meaning: 'Worth or importance; the price of something',
    kind: 'N',
    anglish: ['Worth', 'Weight', 'Dearness'],
    etymology: {
      reconstruction: 'Old French value, from valoir (to be worth), from Latin valere (to be strong, be worth)',
      cognates: ['French valeur', 'Spanish valor', 'Italian valore']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['values']
  },
  {
    id: 'culture',
    word: 'Culture',
    meaning: 'The customs and arts of a society',
    kind: 'N',
    anglish: ['Folkways', 'Heritage', 'Lore'],
    etymology: {
      reconstruction: 'French culture, from Latin cultura (tilling, cultivation), from colere (to till)',
      cognates: ['French culture', 'Spanish cultura', 'Italian cultura']
    },
    attestation: 'neologism',
    category: 'social',
    forms: ['cultures']
  },
  {
    id: 'message',
    word: 'Message',
    meaning: 'A communication sent from one person to another',
    kind: 'N',
    anglish: ['Word', 'Errand', 'Tidings'],
    etymology: {
      reconstruction: 'Old French message, from Medieval Latin missaticum (mission), from Latin missus (sent)',
      cognates: ['French message', 'Spanish mensaje', 'Italian messaggio']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['messages']
  },
  {
    id: 'nature',
    word: 'Nature',
    meaning: 'The physical world; innate character',
    kind: 'N',
    anglish: ['Worldkind', 'Kind', 'Wilding'],
    etymology: {
      reconstruction: 'Old French nature, from Latin natura (birth, nature), from nasci (to be born)',
      cognates: ['French nature', 'Spanish naturaleza', 'Italian natura']
    },
    attestation: 'attested',
    category: 'nature',
    forms: ['natures']
  },
  {
    id: 'clear',
    word: 'Clear',
    meaning: 'Easy to understand; free from obstruction',
    kind: 'AJ',
    anglish: ['Bright', 'Open', 'Plain'],
    etymology: {
      reconstruction: 'Old French cler, from Latin clarus (clear, bright)',
      cognates: ['French clair', 'Spanish claro', 'Italian chiaro']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['clearer', 'clearest']
  },
  {
    id: 'period',
    word: 'Period',
    meaning: 'A length of time; a full stop in writing',
    kind: 'N',
    anglish: ['Span', 'While', 'Tide'],
    etymology: {
      reconstruction: 'Old French periode, from Late Latin periodus, from Greek periodos (going around), from peri- (around) + hodos (way)',
      cognates: ['French période', 'Spanish período', 'Italian periodo']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['periods']
  },
  {
    id: 'community',
    word: 'Community',
    meaning: 'A group of people living in the same place',
    kind: 'N',
    anglish: ['Neighborhood', 'Fellowship', 'Folkstead'],
    etymology: {
      reconstruction: 'Old French comunete, from Latin communitas (community), from communis (common, shared)',
      cognates: ['French communauté', 'Spanish comunidad', 'Italian comunità']
    },
    attestation: 'neologism',
    category: 'social',
    forms: ['communities']
  },
  {
    id: 'individual',
    word: 'Individual',
    meaning: 'A single person considered separately',
    kind: 'N',
    anglish: ['Single', 'Ownsome', 'One'],
    etymology: {
      reconstruction: 'Medieval Latin individualis (inseparable), from Latin individuus (undivided), from in- (not) + dividere (to divide)',
      cognates: ['French individu', 'Spanish individuo', 'Italian individuo']
    },
    attestation: 'neologism',
    category: 'general',
    forms: ['individuals']
  },
  {
    id: 'evidence',
    word: 'Evidence',
    meaning: 'Available facts showing whether something is true',
    kind: 'N',
    anglish: ['Proof', 'Token', 'Showing'],
    etymology: {
      reconstruction: 'Old French evidence, from Latin evidentia (proof), from evidens (obvious), from e- (out) + videre (to see)',
      cognates: ['French preuve', 'Spanish evidencia', 'Italian evidenza']
    },
    attestation: 'reconstructed',
    category: 'academic',
    forms: ['evidences']
  },
  {
    id: 'report',
    word: 'Report',
    meaning: 'An account of something observed or investigated',
    kind: 'N',
    anglish: ['Account', 'Telling', 'Witness'],
    etymology: {
      reconstruction: 'Old French reporter (to carry back), from Latin reportare, from re- (back) + portare (to carry)',
      cognates: ['French rapport', 'Spanish informe', 'Italian rapporto']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['reports']
  },
  {
    id: 'apply',
    word: 'Apply',
    meaning: 'To put to use; to make a formal request',
    kind: 'V',
    anglish: ['Put to use', 'Lay on', 'Seek'],
    etymology: {
      reconstruction: 'Old French aplier, from Latin applicare (to attach), from ad- (to) + plicare (to fold)',
      cognates: ['French appliquer', 'Spanish aplicar', 'Italian applicare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['applies', 'applied', 'applying']
  },
  {
    id: 'support',
    word: 'Support',
    meaning: 'To hold up; to help or back someone',
    kind: 'V',
    anglish: ['Hold up', 'Back', 'Uphold'],
    etymology: {
      reconstruction: 'Old French supporter, from Latin supportare (to carry), from sub- (up from below) + portare (to carry)',
      cognates: ['French soutenir', 'Spanish apoyar', 'Italian sostenere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['supports', 'supported', 'supporting']
  },
  {
    id: 'involve',
    word: 'Involve',
    meaning: 'To include or affect; to include as a necessary part',
    kind: 'V',
    anglish: ['Entangle', 'Draw in', 'Take in'],
    etymology: {
      reconstruction: 'Latin involvere (to roll into, envelop), from in- (into) + volvere (to roll)',
      cognates: ['French impliquer', 'Spanish involucrar', 'Italian coinvolgere']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['involves', 'involved', 'involving']
  },
  {
    id: 'control',
    word: 'Control',
    meaning: 'To have power over; to regulate',
    kind: 'V',
    anglish: ['Steer', 'Wield', 'Hold'],
    etymology: {
      reconstruction: 'Old French controler (to check accounts), from contre (counter) + rôle (roll, account)',
      cognates: ['French contrôler', 'Spanish controlar', 'Italian controllare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['controls', 'controlled', 'controlling']
  },
  {
    id: 'accept',
    word: 'Accept',
    meaning: 'To take or receive willingly',
    kind: 'V',
    anglish: ['Take', 'Welcome', 'Agree to'],
    etymology: {
      reconstruction: 'Old French accepter, from Latin acceptare (to receive, take), from accipere (to take to)',
      cognates: ['French accepter', 'Spanish aceptar', 'Italian accettare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['accepts', 'accepted', 'accepting']
  },
  {
    id: 'join',
    word: 'Join',
    meaning: 'To come together; to become a member',
    kind: 'V',
    anglish: ['Link', 'Knit', 'Meet'],
    etymology: {
      reconstruction: 'Old French joindre, from Latin jungere (to yoke, join)',
      cognates: ['French joindre', 'Spanish juntar', 'Italian unire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['joins', 'joined', 'joining']
  },
  {
    id: 'force',
    word: 'Force',
    meaning: 'Physical strength or power; to compel',
    kind: 'N',
    anglish: ['Might', 'Drive', 'Strength'],
    etymology: {
      reconstruction: 'Old French force, from Vulgar Latin fortia (strength), from Latin fortis (strong)',
      cognates: ['French force', 'Spanish fuerza', 'Italian forza']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['forces']
  },
  {
    id: 'attention',
    word: 'Attention',
    meaning: 'Focusing the mind on something',
    kind: 'N',
    anglish: ['Heed', 'Mind', 'Watch'],
    etymology: {
      reconstruction: 'Latin attentio, from attendere (to stretch toward, pay heed to), from ad- (to) + tendere (to stretch)',
      cognates: ['French attention', 'Spanish atención', 'Italian attenzione']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['attentions']
  },
  {
    id: 'identify',
    word: 'Identify',
    meaning: 'To recognize or name something',
    kind: 'V',
    anglish: ['Name', 'Mark', 'Know out'],
    etymology: {
      reconstruction: 'Medieval Latin identificare (to make the same), from Latin idem (same) + facere (to make)',
      cognates: ['French identifier', 'Spanish identificar', 'Italian identificare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['identifies', 'identified', 'identifying']
  },
  {
    id: 'movement',
    word: 'Movement',
    meaning: 'The act of moving; a group working toward a goal',
    kind: 'N',
    anglish: ['Stirring', 'Wending', 'Drive'],
    etymology: {
      reconstruction: 'Old French movement, from mouvement, from mouvoir (to move), from Latin movere',
      cognates: ['French mouvement', 'Spanish movimiento', 'Italian movimento']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['movements']
  },
  {
    id: 'center',
    word: 'Center',
    meaning: 'The middle point of something',
    kind: 'N',
    anglish: ['Middle', 'Heart', 'Hub'],
    etymology: {
      reconstruction: 'Old French centre, from Latin centrum, from Greek kentron (center, sharp point), from kentein (to prick)',
      cognates: ['French centre', 'Spanish centro', 'Italian centro']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['centers']
  },
  {
    id: 'project',
    word: 'Project',
    meaning: 'A planned undertaking or scheme with a defined goal',
    kind: 'N',
    anglish: ['Scheme', 'Undertaking', 'Forethrow', 'Task'],
    etymology: {
      reconstruction: 'Latin projectum (thrown forward), from projicere (to throw forth), from pro- (forward) + jacere (to throw)',
      cognates: ['French projet', 'Spanish proyecto', 'Italian progetto']
    },
    attestation: 'neologism',
    category: 'professional',
    forms: ['projects']
  },
  {
    id: 'project-v',
    word: 'Project',
    meaning: 'To throw or cast forward; to display an image on a surface; to extend outward',
    kind: 'V',
    anglish: ['Throw forth', 'Cast forth', 'Beam', 'Jut out'],
    etymology: {
      reconstruction: 'Latin projicere (to throw forth), from pro- (forward) + jacere (to throw); the English verb is formed directly from the Latin stem',
      cognates: ['French projeter', 'Spanish proyectar', 'Italian proiettare']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "weorpan" (to throw) and "sendan" (to send) cover the throwing sense; "beaming" covers the light/display sense',
    forms: ['projects', 'projected', 'projecting']
  },
  {
    id: 'protect',
    word: 'Protect',
    meaning: 'To keep safe from harm',
    kind: 'V',
    anglish: ['Shield', 'Guard', 'Warden'],
    etymology: {
      reconstruction: 'Latin protectus (past participle of protegere), from pro- (in front) + tegere (to cover)',
      cognates: ['French protéger', 'Spanish proteger', 'Italian proteggere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['protects', 'protected', 'protecting']
  },
  {
    id: 'different',
    word: 'Different',
    meaning: 'Not the same as another',
    kind: 'AJ',
    anglish: ['Unlike', 'Other', 'Unalike'],
    etymology: {
      reconstruction: 'Old French different, from Latin differentem, from differre (to differ), from dis- (apart) + ferre (to carry)',
      cognates: ['French différent', 'Spanish diferente', 'Italian differente']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'similar',
    word: 'Similar',
    meaning: 'Resembling but not identical',
    kind: 'AJ',
    anglish: ['Like', 'Alike', 'Kin'],
    etymology: {
      reconstruction: 'French similaire, from Latin similis (like, resembling)',
      cognates: ['French similaire', 'Spanish similar', 'Italian simile']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'major',
    word: 'Major',
    meaning: 'Greater in importance or size',
    kind: 'AJ',
    anglish: ['Greater', 'Main', 'Chief'],
    etymology: {
      reconstruction: 'Latin major (greater), comparative of magnus (great)',
      cognates: ['French majeur', 'Spanish mayor', 'Italian maggiore']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'minor',
    word: 'Minor',
    meaning: 'Lesser in importance or size',
    kind: 'AJ',
    anglish: ['Lesser', 'Small', 'Trifling'],
    etymology: {
      reconstruction: 'Latin minor (lesser), comparative of parvus (small)',
      cognates: ['French mineur', 'Spanish menor', 'Italian minore']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'activity',
    word: 'Activity',
    meaning: 'The condition of being active; a thing done',
    kind: 'N',
    anglish: ['Doing', 'Bustle', 'Goings-on'],
    etymology: {
      reconstruction: 'Medieval Latin activitas, from Latin activus (active), from agere (to do, act)',
      cognates: ['French activité', 'Spanish actividad', 'Italian attività']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['activities']
  },
  {
    id: 'structure',
    word: 'Structure',
    meaning: 'The arrangement of parts; a building',
    kind: 'N',
    anglish: ['Framework', 'Build', 'Layout'],
    etymology: {
      reconstruction: 'Latin structura (structure), from struere (to build, arrange)',
      cognates: ['French structure', 'Spanish estructura', 'Italian struttura']
    },
    attestation: 'neologism',
    category: 'technical',
    forms: ['structures']
  },
  {
    id: 'respond',
    word: 'Respond',
    meaning: 'To say or do something in reply',
    kind: 'V',
    anglish: ['Answer', 'Reply', 'Speak back'],
    etymology: {
      reconstruction: 'Old French respondre, from Latin respondere (to answer), from re- (back) + spondere (to pledge)',
      cognates: ['French répondre', 'Spanish responder', 'Italian rispondere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['responds', 'responded', 'responding']
  },
  {
    id: 'likely',
    word: 'Likely',
    meaning: 'Probable; having a good chance of happening',
    kind: 'AJ',
    anglish: ['Already Anglish!'],
    etymology: {
      oldEnglish: 'geliclic',
      protoGermanic: '*galīkō',
      cognates: ['German wahrscheinlich', 'Dutch waarschijnlijk']
    },
    attestation: 'attested',
    category: 'authentic',
    forms: ['likelier', 'likeliest']
  },
  {
    id: 'physical',
    word: 'Physical',
    meaning: 'Relating to the body or material world',
    kind: 'AJ',
    anglish: ['Bodily', 'Fleshly', 'Worldly'],
    etymology: {
      reconstruction: 'Medieval Latin physicalis (of nature), from Latin physica (natural science), from Greek physike (natural science)',
      cognates: ['French physique', 'Spanish físico', 'Italian fisico']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'available',
    word: 'Available',
    meaning: 'Able to be used or obtained',
    kind: 'AJ',
    anglish: ['Handy', 'To hand', 'On offer'],
    etymology: {
      reconstruction: 'Old French availer (to be useful), from a- (to) + valoir (to be worth), from Latin valere (to be strong)',
      cognates: ['French disponible', 'Spanish disponible', 'Italian disponibile']
    },
    attestation: 'reconstructed',
    category: 'general'
  },
  {
    id: 'various',
    word: 'Various',
    meaning: 'Of many different kinds',
    kind: 'AJ',
    anglish: ['Sundry', 'Manifold', 'Divers'],
    etymology: {
      reconstruction: 'Latin varius (varied, diverse, different)',
      cognates: ['French varié', 'Spanish varios', 'Italian vario']
    },
    attestation: 'attested',
    category: 'general',
    notes: '"Sundry" (Old English syndrig) is the best direct Germanic replacement'
  },
  {
    id: 'perform',
    word: 'Perform',
    meaning: 'To carry out an action; to entertain an audience',
    kind: 'V',
    anglish: ['Do', 'Play', 'Put on'],
    etymology: {
      reconstruction: 'Anglo-French parfourmer, from Old French parfournir (to complete), from par- (through) + fournir (to furnish)',
      cognates: ['French effectuer', 'Spanish realizar', 'Italian eseguire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['performs', 'performed', 'performing']
  },
  {
    id: 'establish',
    word: 'Establish',
    meaning: 'To set up on a permanent basis',
    kind: 'V',
    anglish: ['Found', 'Set up', 'Build'],
    etymology: {
      reconstruction: 'Old French establir (to settle, establish), from Latin stabilire (to make stable), from stabilis (stable)',
      cognates: ['French établir', 'Spanish establecer', 'Italian stabilire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['establishes', 'established', 'establishing']
  },
  {
    id: 'collect',
    word: 'Collect',
    meaning: 'To gather things together',
    kind: 'V',
    anglish: ['Gather', 'Heap', 'Rake in'],
    etymology: {
      reconstruction: 'Latin collectus (past participle of colligere), from col- (together) + legere (to gather)',
      cognates: ['French collecter', 'Spanish coleccionar', 'Italian raccogliere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['collects', 'collected', 'collecting']
  },
  {
    id: 'indicate',
    word: 'Indicate',
    meaning: 'To point out or show',
    kind: 'V',
    anglish: ['Point to', 'Show', 'Mark'],
    etymology: {
      reconstruction: 'Latin indicare (to point out), from in- (toward) + dicare (to proclaim)',
      cognates: ['French indiquer', 'Spanish indicar', 'Italian indicare']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['indicates', 'indicated', 'indicating']
  },
  {
    id: 'suggest',
    word: 'Suggest',
    meaning: 'To put forward an idea for consideration',
    kind: 'V',
    anglish: ['Offer', 'Hint', 'Put forward'],
    etymology: {
      reconstruction: 'Latin suggerere (to carry from below, suggest), from sub- (under) + gerere (to carry)',
      cognates: ['French suggérer', 'Spanish sugerir', 'Italian suggerire']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['suggests', 'suggested', 'suggesting']
  },
  {
    id: 'prevent',
    word: 'Prevent',
    meaning: 'To keep something from happening',
    kind: 'V',
    anglish: ['Stop', 'Ward off', 'Hinder'],
    etymology: {
      reconstruction: 'Latin praevenire (to come before), from prae- (before) + venire (to come)',
      cognates: ['French prévenir', 'Spanish prevenir', 'Italian prevenire']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['prevents', 'prevented', 'preventing']
  },
  {
    id: 'difference',
    word: 'Difference',
    meaning: 'A way in which things are not alike',
    kind: 'N',
    anglish: ['Unlike-ness', 'Gap', 'Otherness'],
    etymology: {
      reconstruction: 'Old French difference, from Latin differentia (diversity), from differre (to differ)',
      cognates: ['French différence', 'Spanish diferencia', 'Italian differenza']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['differences']
  },
  {
    id: 'usual',
    word: 'Usual',
    meaning: 'Happening or done most of the time',
    kind: 'AJ',
    anglish: ['Wonted', 'Common', 'Everyday'],
    etymology: {
      reconstruction: 'Old French usuel, from Late Latin usualis (ordinary), from Latin usus (use)',
      cognates: ['French usuel', 'Spanish usual', 'Italian usuale']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "gewunelic" (wonted, usual) is the direct parallel'
  },
  {
    id: 'police',
    word: 'Police',
    meaning: 'Civil force responsible for law enforcement',
    kind: 'N',
    anglish: ['Lawkeepers', 'Sheriffband', 'Watchmen'],
    etymology: {
      reconstruction: 'French police, from Latin politia (civil administration), from Greek politeia (state, constitution), from polis (city)',
      cognates: ['French police', 'Spanish policía', 'Italian polizia']
    },
    attestation: 'neologism',
    category: 'social',
    forms: ['polices']
  },
  {
    id: 'economy',
    word: 'Economy',
    meaning: 'The system of production and trade of a country',
    kind: 'N',
    anglish: ['Husbandry', 'Wealthcraft', 'Landsteering'],
    etymology: {
      reconstruction: 'Old French economie, from Latin oeconomia, from Greek oikonomia (household management), from oikos (house) + nomos (law)',
      cognates: ['French économie', 'Spanish economía', 'Italian economia']
    },
    attestation: 'reconstructed',
    category: 'professional',
    forms: ['economies']
  },
  {
    id: 'patient',
    word: 'Patient',
    meaning: 'Able to wait calmly without becoming annoyed or anxious',
    kind: 'AJ',
    anglish: ['Long-suffering', 'Steady', 'Forbearing', 'Enduring'],
    etymology: {
      reconstruction: 'Old French pacient, from Latin patientem (suffering, bearing), present participle of pati (to suffer)',
      cognates: ['French patient', 'Spanish paciente', 'Italian paziente']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'patient-n',
    word: 'Patient',
    meaning: 'A person receiving or registered for medical treatment',
    kind: 'N',
    anglish: ['Sick man', 'Sickperson', 'Healseeker'],
    etymology: {
      reconstruction: 'Medieval Latin patiens (one who suffers), substantivized from the Latin present participle of pati (to suffer); extended in medical Latin to mean one who endures treatment',
      cognates: ['French malade', 'Spanish paciente', 'German Patient']
    },
    attestation: 'attested',
    category: 'technical',
    notes: 'Old English "seoc" (sick person) and "se seoce" (the sick one) are the Germanic equivalents',
    forms: ['patients']
  },
  {
    id: 'correct',
    word: 'Correct',
    meaning: 'Free from error; right',
    kind: 'AJ',
    anglish: ['Right', 'True', 'Rightful'],
    etymology: {
      reconstruction: 'Latin correctus (past participle of corrigere), from cor- (together) + regere (to rule, guide)',
      cognates: ['French correct', 'Spanish correcto', 'Italian corretto']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'original',
    word: 'Original',
    meaning: 'First or earliest; new and novel',
    kind: 'AJ',
    anglish: ['First', 'Firstborn', 'Fresh'],
    etymology: {
      reconstruction: 'Old French original, from Late Latin originalis (first), from Latin origo (origin), from oriri (to rise)',
      cognates: ['French original', 'Spanish original', 'Italian originale']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'event',
    word: 'Event',
    meaning: 'Something that happens; an organized occasion',
    kind: 'N',
    anglish: ['Happening', 'Befall', 'Tide'],
    etymology: {
      reconstruction: 'Latin eventus (outcome), from evenire (to come out, happen), from e- (out) + venire (to come)',
      cognates: ['French événement', 'Spanish evento', 'Italian evento']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['events']
  },
  {
    id: 'history',
    word: 'History',
    meaning: 'The study of past events; a record of the past',
    kind: 'N',
    anglish: ['Storylore', 'Wording-of-old', 'Eldlore'],
    etymology: {
      reconstruction: 'Latin historia (inquiry, narrative), from Greek historia (inquiry, account), from histor (learned, knowing)',
      cognates: ['French histoire', 'Spanish historia', 'Italian storia']
    },
    attestation: 'neologism',
    category: 'academic',
    forms: ['histories']
  },
  {
    id: 'influence',
    word: 'Influence',
    meaning: 'The power to affect someone or something',
    kind: 'N',
    anglish: ['Sway', 'Leverage', 'Hold'],
    etymology: {
      reconstruction: 'Old French influence (emanation from the stars), from Medieval Latin influentia, from Latin influere (to flow into)',
      cognates: ['French influence', 'Spanish influencia', 'Italian influenza']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['influences']
  },
  {
    id: 'distance',
    word: 'Distance',
    meaning: 'The length of space between two points',
    kind: 'N',
    anglish: ['Farness', 'Gap', 'Stretch'],
    etymology: {
      reconstruction: 'Old French distance, from Latin distantia (difference, distance), from distare (to stand apart)',
      cognates: ['French distance', 'Spanish distancia', 'Italian distanza']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['distances']
  },
  {
    id: 'type',
    word: 'Type',
    meaning: 'A category of things sharing common characteristics',
    kind: 'N',
    anglish: ['Kind', 'Sort', 'Breed'],
    etymology: {
      reconstruction: 'Latin typus (figure, image), from Greek typos (blow, impression), from typtein (to strike)',
      cognates: ['French type', 'Spanish tipo', 'Italian tipo']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['types']
  },
  {
    id: 'series',
    word: 'Series',
    meaning: 'A number of things of the same kind coming one after another',
    kind: 'N',
    anglish: ['String', 'Run', 'Row'],
    etymology: {
      reconstruction: 'Latin series (row, chain), from serere (to join)',
      cognates: ['French série', 'Spanish serie', 'Italian serie']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['series']
  },
  {
    id: 'style',
    word: 'Style',
    meaning: 'A distinctive manner or way of doing something',
    kind: 'N',
    anglish: ['Way', 'Manner', 'Wone'],
    etymology: {
      reconstruction: 'Old French stile, from Latin stilus (pointed instrument for writing), later used for manner of writing',
      cognates: ['French style', 'Spanish estilo', 'Italian stile']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['styles']
  },
  {
    id: 'former',
    word: 'Former',
    meaning: 'From an earlier time; the first of two',
    kind: 'AJ',
    anglish: ['Earlier', 'Erst', 'Yore'],
    etymology: {
      reconstruction: 'Middle English former (comparative of forme, first), from Old English forma (first)',
      oldEnglish: 'forma (first)',
      cognates: ['German früher', 'Dutch vroeger']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'exist',
    word: 'Exist',
    meaning: 'To have actual being; to be real',
    kind: 'V',
    anglish: ['Be', 'Live', 'Stand'],
    etymology: {
      reconstruction: 'Latin existere (to stand out, come into being), from ex- (out) + sistere (to cause to stand)',
      cognates: ['French exister', 'Spanish existir', 'Italian esistere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['exists', 'existed', 'existing']
  },
  {
    id: 'contain',
    word: 'Contain',
    meaning: 'To have inside; to hold within limits',
    kind: 'V',
    anglish: ['Hold', 'Have within', 'Keep in'],
    etymology: {
      reconstruction: 'Old French contenir, from Latin continere (to hold together), from con- (together) + tenere (to hold)',
      cognates: ['French contenir', 'Spanish contener', 'Italian contenere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['contains', 'contained', 'containing']
  },
  {
    id: 'remain',
    word: 'Remain',
    meaning: 'To stay in the same place; to be left over',
    kind: 'V',
    anglish: ['Stay', 'Abide', 'Bide'],
    etymology: {
      reconstruction: 'Old French remaindre, from Latin remanere (to stay behind), from re- (back) + manere (to stay)',
      cognates: ['French rester', 'Spanish permanecer', 'Italian rimanere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['remains', 'remained', 'remaining']
  },
  {
    id: 'military',
    word: 'Military',
    meaning: 'Relating to armed forces or warfare',
    kind: 'AJ',
    anglish: ['Warlike', 'Foeship', 'Armsly'],
    etymology: {
      reconstruction: 'Latin militaris (of soldiers), from miles (soldier)',
      cognates: ['French militaire', 'Spanish militar', 'Italian militare']
    },
    attestation: 'neologism',
    category: 'military'
  },
  {
    id: 'general',
    word: 'General',
    meaning: 'Affecting or relating to all or most things; not specific or detailed',
    kind: 'AJ',
    anglish: ['Broad', 'Widespread', 'Overall', 'Common'],
    etymology: {
      reconstruction: 'Old French general, from Latin generalis (of a kind or class), from genus (kind, race)',
      cognates: ['French général', 'Spanish general', 'Italian generale']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'general-n',
    word: 'General',
    meaning: 'A high-ranking military officer, especially the commander of an army',
    kind: 'N',
    anglish: ['War-leader', 'Herewarden', 'Host-chief', 'Army-lord'],
    etymology: {
      reconstruction: 'Short for "general officer" or "captain general"; from French général (d\'armée), from the adjective general (Latin generalis) applied to mean "commander of the whole force"',
      cognates: ['French général', 'Spanish general', 'German General']
    },
    attestation: 'attested',
    category: 'military',
    notes: 'Old English "heretoga" (army-leader, general) and "fyrdwisa" (army-commander) are the direct Germanic equivalents',
    forms: ['generals']
  },
  {
    id: 'surface',
    word: 'Surface',
    meaning: 'The outside or top layer of something',
    kind: 'N',
    anglish: ['Outside', 'Upside', 'Outlay'],
    etymology: {
      reconstruction: 'French surface, from sur (above) + face (face), calqued from Latin superficies',
      cognates: ['French surface', 'Spanish superficie', 'Italian superficie']
    },
    attestation: 'neologism',
    category: 'general',
    forms: ['surfaces']
  },
  {
    id: 'object',
    word: 'Object',
    meaning: 'A material thing that can be seen and touched',
    kind: 'N',
    anglish: ['Thing', 'Item', 'Ware'],
    etymology: {
      reconstruction: 'Medieval Latin objectum (thing thrown before the mind), from Latin obicere (to throw before), from ob- (before) + jacere (to throw)',
      cognates: ['French objet', 'Spanish objeto', 'Italian oggetto']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['objects']
  },
  {
    id: 'object-v',
    word: 'Object',
    meaning: 'To express opposition or disagreement; to protest against something',
    kind: 'V',
    anglish: ['Protest', 'Gainsay', 'Withstand', 'Speak against'],
    etymology: {
      reconstruction: 'Latin objectare (to throw against, oppose), frequentative of obicere (to throw before), from ob- (against) + jacere (to throw); the English verb sense of "to protest" developed in the 16th century',
      cognates: ['French objecter', 'Spanish objetar', 'Italian obiettare']
    },
    attestation: 'reconstructed',
    category: 'general',
    notes: 'Old English "wiðsacan" (to deny, refuse) and "gainsay" (from Old Norse) cover this sense',
    forms: ['objects', 'objected', 'objecting']
  },
  {
    id: 'describe',
    word: 'Describe',
    meaning: 'To give an account of something in words',
    kind: 'V',
    anglish: ['Tell of', 'Limn', 'Depict'],
    etymology: {
      reconstruction: 'Latin describere (to write down, sketch), from de- (down) + scribere (to write)',
      cognates: ['French décrire', 'Spanish describir', 'Italian descrivere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['describes', 'described', 'describing']
  },
  {
    id: 'introduce',
    word: 'Introduce',
    meaning: 'To present someone for the first time; to bring in something new',
    kind: 'V',
    anglish: ['Bring in', 'Foreshow', 'Make known'],
    etymology: {
      reconstruction: 'Latin introducere (to lead in), from intro- (inward) + ducere (to lead)',
      cognates: ['French introduire', 'Spanish introducir', 'Italian introdurre']
    },
    attestation: 'reconstructed',
    category: 'general',
    forms: ['introduces', 'introduced', 'introducing']
  },
  {
    id: 'prince',
    word: 'Prince',
    meaning: 'Royal or noble son, heir to a throne or lordship',
    kind: 'N',
    anglish: ['Ætheling', 'Kingson', "Chieftain's son"],
    etymology: {
      reconstruction: 'Old French prince, from Latin princeps (first man, leader), from primus (first) + capere (to take)',
      cognates: ['French prince', 'Spanish príncipe', 'Italian principe']
    },
    attestation: 'attested',
    category: 'social',
    notes: 'Ætheling is the Old English term for a royal prince or heir; used throughout the Anglo-Saxon period',
    forms: ['princes']
  },
  {
    id: 'extensive',
    word: 'Extensive',
    meaning: 'Covering a large area or range; having great extent',
    kind: 'AJ',
    anglish: ['Widespread', 'Far-reaching', 'Broad'],
    etymology: {
      reconstruction: 'Medieval Latin extensivus, from Latin extensus, past participle of extendere (to stretch out), from ex- (out) + tendere (to stretch)',
      cognates: ['French extensif', 'Spanish extensivo', 'Italian estensivo']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'preparation',
    word: 'Preparation',
    meaning: 'The act or process of making ready for a purpose',
    kind: 'N',
    anglish: ['Makeready', 'Forework', 'Readying', 'Groundwork'],
    etymology: {
      reconstruction: 'Latin praeparatio, from praeparare (to make ready beforehand), from prae- (before) + parare (to make ready)',
      cognates: ['French préparation', 'Spanish preparación', 'Italian preparazione']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['preparations']
  },
  {
    id: 'constant',
    word: 'Constant',
    meaning: 'Continuing without pause or change; remaining the same',
    kind: 'AJ',
    anglish: ['Steadfast', 'Unwavering', 'Ceaseless', 'Ever-steady'],
    etymology: {
      reconstruction: 'Old French constant, from Latin constantem, present participle of constare (to stand firm), from com- (together) + stare (to stand)',
      cognates: ['French constant', 'Spanish constante', 'Italian costante']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'constant-n',
    word: 'Constant',
    meaning: 'A fixed value in mathematics or science that does not change',
    kind: 'N',
    anglish: ['Fixed-worth', 'Set value', 'Steadworth'],
    etymology: {
      reconstruction: 'From the adjective constant (Latin constantem); substantivized in mathematical and scientific usage from the 17th century to name a fixed quantity',
      cognates: ['French constante', 'Spanish constante', 'German Konstante']
    },
    attestation: 'neologism',
    category: 'technical',
    notes: 'The mathematical/scientific noun is a distinct usage from the general adjective; a "constant" in physics (e.g. the speed of light) or maths is a named fixed value',
    forms: ['constants']
  },
  {
    id: 'demonstrate',
    word: 'Demonstrate',
    meaning: 'To show clearly; to prove or establish by evidence',
    kind: 'V',
    anglish: ['Show', 'Prove', 'Make plain', 'Lay bare'],
    etymology: {
      reconstruction: 'Latin demonstrare (to point out, show), from de- (completely) + monstrare (to show), from monstrum (omen, sign)',
      cognates: ['French démontrer', 'Spanish demostrar', 'Italian dimostrare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['demonstrates', 'demonstrated', 'demonstrating']
  },
  {
    id: 'sufficient',
    word: 'Sufficient',
    meaning: 'Enough to meet the needs of a situation or purpose',
    kind: 'AJ',
    anglish: ['Enough', 'Ample', 'Fitting'],
    etymology: {
      reconstruction: 'Latin sufficientem, present participle of sufficere (to be enough), from sub- (under) + facere (to make, do)',
      cognates: ['French suffisant', 'Spanish suficiente', 'Italian sufficiente']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'intelligence',
    word: 'Intelligence',
    meaning: 'The ability to acquire and apply knowledge and skills; mental acuity',
    kind: 'N',
    anglish: ['Wit', 'Cunning', 'Understanding', 'Shrewdness'],
    etymology: {
      reconstruction: 'Old French intelligence, from Latin intelligentia (understanding, discernment), from intelligentem, from intelligere (to understand), from inter- (between) + legere (to choose, read)',
      cognates: ['French intelligence', 'Spanish inteligencia', 'Italian intelligenza']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['intelligences']
  },
  {
    id: 'dedication',
    word: 'Dedication',
    meaning: 'Wholehearted commitment to a task, purpose, or person',
    kind: 'N',
    anglish: ['Devotion', 'Steadfastness', 'Wholehearted giving'],
    etymology: {
      reconstruction: 'Latin dedicatio (a consecration), from dedicare (to consecrate, devote), from de- (completely) + dicare (to proclaim, dedicate)',
      cognates: ['French dédicace', 'Spanish dedicación', 'Italian dedicazione']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['dedications']
  },
  {
    id: 'succeed',
    word: 'Succeed',
    meaning: 'To achieve a desired aim or result; to come after another in sequence or office',
    kind: 'V',
    anglish: ['Thrive', 'Prevail', 'Do well', 'Win through'],
    etymology: {
      reconstruction: 'Old French succeder, from Latin succedere (to go under, follow after, be successful), from sub- (under, after) + cedere (to go)',
      cognates: ['French succéder', 'Spanish suceder', 'Italian succedere']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['succeeds', 'succeeded', 'succeeding']
  },
  {
    id: 'competitive',
    word: 'Competitive',
    meaning: 'Having a strong desire to win or be more successful than others',
    kind: 'AJ',
    anglish: ['Striving', 'Rivalsome', 'Keen to win'],
    etymology: {
      reconstruction: 'From compete + -ive; Latin competere (to strive together), from com- (together) + petere (to seek, strive for)',
      cognates: ['French compétitif', 'Spanish competitivo', 'Italian competitivo']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'perspective',
    word: 'Perspective',
    meaning: 'A particular point of view; the art of representing three-dimensional objects on a flat surface',
    kind: 'N',
    anglish: ['Outlook', 'Standpoint', 'Viewpoint', 'Sight-line'],
    etymology: {
      reconstruction: 'Medieval Latin perspectiva (ars) (science of optics), from perspectus, past participle of perspicere (to look through), from per- (through) + specere (to look)',
      cognates: ['French perspective', 'Spanish perspectiva', 'Italian prospettiva']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['perspectives']
  },
  {
    id: 'global',
    word: 'Global',
    meaning: 'Relating to or encompassing the whole world',
    kind: 'AJ',
    anglish: ['Worldwide', 'All-world', 'Earthwide'],
    etymology: {
      reconstruction: 'French global, from globe, from Latin globus (sphere, ball)',
      cognates: ['French global', 'Spanish global', 'Italian globale']
    },
    attestation: 'attested',
    category: 'general'
  },
  {
    id: 'civilization',
    word: 'Civilization',
    meaning: 'An advanced stage of human social and cultural development; a human society with its own culture',
    kind: 'N',
    anglish: ['Folkhood', 'Culturedom', 'Settled order'],
    etymology: {
      reconstruction: 'French civilisation, from civiliser (to civilize), from civil, from Latin civilis (relating to citizens), from civis (citizen)',
      cognates: ['French civilisation', 'Spanish civilización', 'Italian civiltà']
    },
    attestation: 'attested',
    category: 'social',
    forms: ['civilizations']
  },
  {
    id: 'transform',
    word: 'Transform',
    meaning: 'To make a thorough or dramatic change in the form, nature, or appearance of something',
    kind: 'V',
    anglish: ['Reshape', 'Shift', 'Change shape', 'Remake'],
    etymology: {
      reconstruction: 'Latin transformare (to change in shape), from trans- (across, beyond) + formare (to form), from forma (form, shape)',
      cognates: ['French transformer', 'Spanish transformar', 'Italian trasformare']
    },
    attestation: 'attested',
    category: 'general',
    forms: ['transforms', 'transformed', 'transforming']
  },
  {
    id: 'academic',
    word: 'Academic',
    meaning: 'Relating to education, scholarship, or a place of learning',
    kind: 'AJ',
    anglish: ['Scholarly', 'Learnèd', 'Lore-bound', 'Bookish'],
    etymology: {
      reconstruction: 'Latin academicus, from academia, from Greek Akadēmeia (the grove near Athens where Plato taught), from Akadēmos (a hero of Attica)',
      cognates: ['French académique', 'Spanish académico', 'Italian accademico']
    },
    attestation: 'attested',
    category: 'academic'
  },
  {
    id: 'standard',
    word: 'Standard',
    meaning: 'A level of quality or achievement used as a measure; an accepted norm or model',
    kind: 'N',
    anglish: ['Benchmark', 'Yardstick', 'Measure', 'Norm'],
    etymology: {
      reconstruction: 'Old French estandart (battle flag, rallying point), from Frankish *standhard (stand firm), from *standan (to stand) + *hard (hard, firm); the sense of "a fixed point of reference" derives from the flag sense',
      cognates: ['French standard', 'Spanish estándar', 'Italian standard']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'The "measure/norm" sense developed from the military flag sense — a rallying standard became a reference point',
    forms: ['standards']
  },
  {
    id: 'standard-n-flag',
    word: 'Standard',
    meaning: 'A military or ceremonial flag or banner, especially one used as a rallying point',
    kind: 'N',
    anglish: ['Banner', 'Flag', 'Guidon', 'War-mark'],
    etymology: {
      reconstruction: 'Old French estandart (battle flag), from Frankish *standhard (that which stands firm), from *standan (to stand) + *hard (hard); this is the oldest English sense, entering via the Norman Conquest',
      cognates: ['French étendard', 'Spanish estandarte', 'Italian stendardo']
    },
    attestation: 'attested',
    category: 'military',
    notes: 'Old English "guðfana" (battle-banner) and "segn" (sign, banner) are the Germanic equivalents',
    forms: ['standards']
  },
  {
    id: 'standard-aj',
    word: 'Standard',
    meaning: 'Used or accepted as normal or average; not special or unusual',
    kind: 'AJ',
    anglish: ['Normal', 'Wonted', 'Everyday', 'Common'],
    etymology: {
      reconstruction: 'Adjectival use of the noun standard (from Old French estandart); "up to standard" gave rise to "standard" as an adjective meaning "meeting the accepted norm"',
      cognates: ['French standard', 'Spanish estándar', 'German standard']
    },
    attestation: 'attested',
    category: 'general',
    notes: 'Old English "gewunelic" (wonted, customary) and "gemǣne" (common, ordinary) cover this sense'
  },
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