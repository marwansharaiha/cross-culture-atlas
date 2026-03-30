/**
 * Regional cultural data for sub-national regions within multilingual countries.
 * Keys are formatted as "countryCode:regionName" matching the regionalLanguages entries.
 * When a region is clicked, this data overrides/supplements the country-level cultural data.
 */

import type { CulturalSection } from "./countries";

export interface RegionalCulturalInfo {
  regionName: string;
  language: string;
  religions?: string[];
  cultural: Partial<CulturalSection>;
  sources?: { label: string; url: string }[];
}

// Helper to build key
export function regionKey(countryCode: string, regionName: string): string {
  return `${countryCode}:${regionName}`;
}

export const regionalCulturalData: Record<string, RegionalCulturalInfo> = {
  // ─── INDIA ──────────────────────────────────────────────────
  "in:Hindi Belt (North)": {
    regionName: "Hindi Belt (North India)",
    language: "Hindi",
    religions: ["Hinduism", "Islam", "Sikhism"],
    cultural: {
      communication: [
        "Hindi is the primary language — greet with 'Namaste' (palms together)",
        "Hierarchical communication — patients defer to doctors as authority figures",
        "Indirect refusal is common — patients may say 'yes' out of politeness",
        "Use formal titles: 'Ji' suffix shows respect (e.g., 'Doctor Ji')",
      ],
      healthBeliefs: [
        "Ayurveda is deeply rooted — hot/cold food classification guides diet during illness",
        "Fasting for religious purposes is very common (Navratri, Ekadashi, Karva Chauth)",
        "Traditional bone-setters are consulted before hospitals in rural areas",
        "Mental illness stigma is severe — may be attributed to karma or past life",
      ],
      doList: [
        "Greet with Namaste — universally respected",
        "Ask about Ayurvedic remedies being used concurrently",
        "Accommodate vegetarian dietary restrictions (no beef, many are vegetarian)",
        "Include family patriarch in medical discussions",
      ],
      dontList: [
        "Don't serve beef — cows are sacred to Hindus",
        "Don't remove sacred threads (janeu) or religious markings (tilak) without permission",
        "Don't use left hand for giving or receiving items",
        "Don't assume Hindi proficiency in all of North India — Urdu speakers are common",
      ],
    },
  },
  "in:Tamil Nadu": {
    regionName: "Tamil Nadu",
    language: "Tamil",
    religions: ["Hinduism", "Christianity", "Islam"],
    cultural: {
      communication: [
        "Tamil is the primary language — deeply tied to regional identity and pride",
        "Greet with 'Vanakkam' (Tamil equivalent of Namaste)",
        "Patients may not speak Hindi — provide Tamil-language materials",
        "Formal and respectful communication is expected; use 'Ayya' (sir) or 'Amma' (madam)",
      ],
      healthBeliefs: [
        "Siddha medicine is the traditional system unique to Tamil Nadu — widely practiced",
        "Temple healing rituals (especially at Murugan temples) are common",
        "Vegetarianism is very common, especially among Brahmin communities",
        "Hot/cold food theory heavily influences postpartum and illness dietary choices",
      ],
      doList: [
        "Use Tamil greetings — it shows deep respect",
        "Ask about Siddha medicine use — drug interactions are possible",
        "Respect vegetarian dietary needs",
        "Provide Tamil-language consent forms and instructions",
      ],
      dontList: [
        "Don't assume Hindi is understood — many Tamil speakers don't speak Hindi",
        "Don't dismiss Siddha medicine — it has a 2000+ year tradition",
        "Don't overlook caste-related social dynamics in rural areas",
        "Don't serve non-vegetarian food without asking first",
      ],
    },
  },
  "in:West Bengal": {
    regionName: "West Bengal",
    language: "Bengali",
    religions: ["Hinduism", "Islam"],
    cultural: {
      communication: [
        "Bengali is the primary language — deeply literary and cultural",
        "Greet with 'Nomoshkar' (Bengali greeting)",
        "Intellectual discourse is valued — patients may want detailed medical explanations",
        "Fish is a staple food — not considered 'non-vegetarian' by many Bengalis",
      ],
      healthBeliefs: [
        "Homeopathy is extremely popular in West Bengal — many patients use it as primary care",
        "Ayurvedic and folk remedies are also common in rural areas",
        "Bengali diet is rice and fish-based — important for nutritional counseling",
        "Mental health awareness is relatively higher in urban Kolkata",
      ],
      doList: [
        "Ask about homeopathic remedies — very widely used",
        "Respect the cultural importance of fish in diet",
        "Provide Bengali-language materials",
        "Engage intellectually — Bengali patients value thorough explanations",
      ],
      dontList: [
        "Don't assume vegetarianism — fish is eaten widely even during religious occasions",
        "Don't dismiss homeopathy — it's mainstream in West Bengal",
        "Don't use Hindi exclusively — provide Bengali communication",
        "Don't overlook Durga Puja season — it's deeply important culturally",
      ],
    },
  },
  "in:Kerala": {
    regionName: "Kerala",
    language: "Malayalam",
    religions: ["Hinduism", "Islam", "Christianity"],
    cultural: {
      communication: [
        "Malayalam is the primary language — high literacy rate means patients are well-informed",
        "Kerala has the highest health literacy in India — patients expect detailed explanations",
        "Christian, Hindu, and Muslim communities coexist — tailor communication accordingly",
        "Patients are assertive and may question medical decisions — this is culturally normal",
      ],
      healthBeliefs: [
        "Ayurveda is deeply integrated — Kerala is India's Ayurveda hub with government hospitals",
        "Panchakarma treatments are widely practiced alongside modern medicine",
        "High awareness of mental health compared to other Indian states",
        "Alcoholism rates are high — screen for alcohol use sensitively",
      ],
      doList: [
        "Provide thorough explanations — Kerala patients are highly literate",
        "Ask about Ayurvedic treatments in use",
        "Respect the multi-religious composition of Kerala",
        "Screen for alcohol use — it's a significant health concern",
      ],
      dontList: [
        "Don't underestimate patient knowledge — Kerala has India's best health indicators",
        "Don't ignore Ayurvedic drug interactions",
        "Don't assume religious affiliation based on name alone",
        "Don't be condescending — patients expect partnership in care",
      ],
    },
  },
  "in:Punjab": {
    regionName: "Punjab",
    language: "Punjabi",
    religions: ["Sikhism", "Hinduism", "Islam"],
    cultural: {
      communication: [
        "Punjabi is the primary language — warm, expressive, and hospitality-driven",
        "Greet Sikh patients with 'Sat Sri Akal' — shows respect for their faith",
        "Punjabi culture is very open and family-oriented — expect large family gatherings",
        "Humor and warmth are valued in communication",
      ],
      healthBeliefs: [
        "Sikh patients' 5 articles of faith (5 Ks) must be respected — especially the turban and kara",
        "Langar (community kitchen) tradition means communal eating is valued",
        "Diabetes and cardiovascular disease are prevalent — dietary counseling is important",
        "Substance use (alcohol, opioids) is a significant health concern in Punjab",
      ],
      doList: [
        "Never cut a Sikh patient's hair without explicit discussion and consent",
        "Greet with 'Sat Sri Akal' for Sikh patients",
        "Be aware of high diabetes and heart disease prevalence",
        "Screen for substance use sensitively",
      ],
      dontList: [
        "Don't remove turban, kara (bracelet), or other articles of faith without consent",
        "Don't assume dietary habits — many Sikhs eat meat, many don't",
        "Don't ignore family involvement — Punjabi families are very close-knit",
        "Don't overlook substance use issues — address sensitively",
      ],
    },
  },
  "in:Karnataka": {
    regionName: "Karnataka",
    language: "Kannada",
    religions: ["Hinduism", "Islam", "Christianity", "Jainism"],
    cultural: {
      communication: [
        "Kannada is the primary language — Bangalore is multilingual but rural areas are Kannada-dominant",
        "Greet with 'Namaskara' (Kannada greeting)",
        "Urban Bangalore patients are tech-savvy and health-literate",
        "Jain community presence — strict non-violence extends to medical decisions",
      ],
      healthBeliefs: [
        "Ayurveda and yoga are widely practiced",
        "Jain patients may refuse medications derived from animals",
        "Vegetarianism is common, especially among Jain and Brahmin communities",
        "Rural-urban health belief gap is significant",
      ],
    },
  },
  "in:Andhra/Telangana": {
    regionName: "Andhra Pradesh / Telangana",
    language: "Telugu",
    religions: ["Hinduism", "Islam", "Christianity"],
    cultural: {
      communication: [
        "Telugu is the primary language — third most spoken language in India",
        "Respectful communication with elders is paramount",
        "Rice-based diet is central — important for dietary counseling",
        "Strong film culture influences health perceptions and attitudes",
      ],
      healthBeliefs: [
        "Traditional herbal remedies (nattu vaidyam) are widely used in rural areas",
        "Spicy food is central to the diet — relevant for GI health counseling",
        "Christian communities (especially in coastal Andhra) have different health-seeking behaviors",
        "Ayurvedic and homeopathic remedies are commonly used alongside allopathic medicine",
      ],
    },
  },

  // ─── CHINA ──────────────────────────────────────────────────
  "cn:Mandarin North": {
    regionName: "Northern China (Beijing / Mandarin Belt)",
    language: "Mandarin",
    religions: ["Folk religion", "Buddhism", "None/Secular"],
    cultural: {
      communication: [
        "Standard Mandarin (Putonghua) is spoken — official language",
        "Face-saving (miànzi) is extremely important — never embarrass a patient publicly",
        "Hierarchical — respect age and authority",
        "Directness is avoided — learn to read between the lines",
      ],
      healthBeliefs: [
        "Traditional Chinese Medicine (TCM) is widely used alongside Western medicine",
        "Cupping, acupuncture, and herbal medicine are mainstream",
        "Hot/cold food theory (yin-yang balance) strongly influences dietary choices during illness",
        "Mental health stigma is very high — somatization is common",
      ],
    },
  },
  "cn:Cantonese South": {
    regionName: "Southern China (Guangdong / Cantonese)",
    language: "Cantonese",
    religions: ["Buddhism", "Folk religion", "Christianity"],
    cultural: {
      communication: [
        "Cantonese is the primary language — distinct from Mandarin and not mutually intelligible",
        "Cantonese speakers may not be fluent in Mandarin — provide Cantonese interpreters",
        "Superstitions around numbers: 4 = death (avoid room #4); 8 = prosperity",
        "Business-oriented culture — direct communication is slightly more acceptable",
      ],
      healthBeliefs: [
        "Herbal soup (bou tong) is a daily health practice — specific soups for specific conditions",
        "TCM pharmacies are on every street — patients will use herbal remedies",
        "Dim sum culture means communal eating — important for dietary counseling",
        "Cantonese cuisine values fresh, whole foods — nutritional counseling resonates well",
      ],
    },
  },
  "cn:Tibet": {
    regionName: "Tibet Autonomous Region",
    language: "Tibetan",
    religions: ["Tibetan Buddhism"],
    cultural: {
      communication: [
        "Tibetan is the primary language — many don't speak Mandarin fluently",
        "Greet with 'Tashi Delek' — traditional Tibetan greeting",
        "Respect for Buddhist monks and lamas is paramount",
        "Communication is gentle and non-confrontational",
      ],
      healthBeliefs: [
        "Traditional Tibetan medicine (Sowa Rigpa) is widely practiced — based on Buddhist principles",
        "Altitude-related health issues are common — high-altitude living affects physiology",
        "Prayer flags, mantras, and spiritual practices are integral to healing",
        "Sky burial traditions influence attitudes toward death and the body",
        "Butter tea (po cha) is a staple with nutritional significance at high altitude",
      ],
      doList: [
        "Respect Buddhist practices and prayer schedules",
        "Ask about Tibetan medicine use — drug interactions are possible",
        "Be sensitive to altitude-related health conditions",
        "Provide Tibetan-language interpreters",
      ],
      dontList: [
        "Don't dismiss Tibetan medicine — it has a 1000+ year tradition",
        "Don't disrespect Buddhist religious items or images",
        "Don't assume Mandarin proficiency",
        "Don't ignore the spiritual dimension of illness",
      ],
    },
  },
  "cn:Xinjiang": {
    regionName: "Xinjiang (Uyghur Region)",
    language: "Uyghur",
    religions: ["Islam (Sunni)"],
    cultural: {
      communication: [
        "Uyghur is the primary language — a Turkic language written in Arabic script",
        "Greet with 'Assalamu Alaikum' — the region is predominantly Muslim",
        "Cultural practices align more with Central Asian traditions than Han Chinese",
        "Hospitality is central — offering food and tea is customary",
      ],
      healthBeliefs: [
        "Islamic dietary laws (halal) are strictly followed",
        "Unani-style traditional medicine is practiced alongside modern medicine",
        "Ramadan fasting affects medication compliance",
        "Gender-separated healthcare is strongly preferred",
        "Herbal teas and dried fruits are used as remedies",
      ],
      genderContact: [
        "Female patients strongly prefer female providers",
        "Male doctors should not examine women without female chaperones",
        "Handshaking between genders may be avoided",
        "Head coverings should not be removed unless medically necessary",
      ],
    },
  },

  // ─── NIGERIA ────────────────────────────────────────────────
  "ng:Hausa North": {
    regionName: "Northern Nigeria (Hausa)",
    language: "Hausa",
    religions: ["Islam (Sunni)"],
    cultural: {
      communication: [
        "Hausa is the dominant language — greet with 'Sannu' or 'Assalamu Alaikum'",
        "Communication is indirect and respectful — age hierarchy is paramount",
        "Women may be secluded (kulle/purdah) — home visits may be necessary",
        "Traditional leaders (emirs) have significant community influence",
      ],
      healthBeliefs: [
        "Islamic medicine and Quranic healing (rubutu — drinking Quran-inscribed water) are practiced",
        "Traditional healers (boka) are consulted for many conditions",
        "Polio vaccination resistance existed historically — approach immunization sensitively",
        "Mental illness may be attributed to spirits (iska/aljannu)",
      ],
      genderContact: [
        "Strict gender separation — female patients need female providers",
        "Purdah (wife seclusion) is practiced in many households",
        "Male doctors should not be alone with female patients",
        "Modesty is paramount — minimize physical exposure",
      ],
      doList: [
        "Greet with Islamic greeting — shows respect",
        "Provide female healthcare workers for women",
        "Work with traditional and religious leaders on public health",
        "Accommodate prayer times and halal dietary needs",
      ],
      dontList: [
        "Don't send male providers to examine women without female chaperones",
        "Don't dismiss Quranic healing practices",
        "Don't assume English proficiency — Hausa is primary",
        "Don't ignore the influence of traditional leaders on healthcare decisions",
      ],
    },
  },
  "ng:Yoruba Southwest": {
    regionName: "Southwestern Nigeria (Yoruba)",
    language: "Yoruba",
    religions: ["Christianity", "Islam", "Traditional Yoruba religion"],
    cultural: {
      communication: [
        "Yoruba is the primary language — greet with 'E kaaro' (good morning) or 'E ku le' (hello)",
        "Prostration/kneeling greetings show respect — especially to elders",
        "Both Christian and Muslim Yoruba coexist — don't assume religion",
        "Proverbs and indirect communication are culturally valued",
      ],
      healthBeliefs: [
        "Traditional Yoruba medicine (oogun) uses herbs, rituals, and divination",
        "Orisha (deity) worship may influence health beliefs in traditional communities",
        "Babalawo (traditional priest/healer) consultations are common alongside modern medicine",
        "Neonatal practices include specific herbal baths and naming ceremonies",
      ],
      doList: [
        "Greet elders respectfully — this is deeply valued",
        "Ask about traditional medicine use — herbal remedies are common",
        "Respect both Christian and Muslim practices",
        "Include family in medical discussions — especially elders",
      ],
      dontList: [
        "Don't dismiss traditional Yoruba healing practices",
        "Don't assume religion based on name — Yoruba can be Christian, Muslim, or traditional",
        "Don't bypass elder family members in discussions",
        "Don't ignore herbal medicine use — ask about drug interactions",
      ],
    },
  },
  "ng:Igbo Southeast": {
    regionName: "Southeastern Nigeria (Igbo)",
    language: "Igbo",
    religions: ["Christianity (Catholic, Anglican, Pentecostal)"],
    cultural: {
      communication: [
        "Igbo is the primary language — greet with 'Kedu' (how are you?)",
        "Igbo culture values achievement and entrepreneurship — patients are often proactive about health",
        "Christianity is dominant — church leaders have significant influence",
        "Extended family (umunna) is central to all major decisions",
      ],
      healthBeliefs: [
        "Christian faith healing is common — prayer and anointing for the sick",
        "Traditional medicine (ogwu) coexists with Christianity in many communities",
        "Sickle cell disease is prevalent — genetic counseling is important",
        "Pregnancy and childbirth traditions include specific dietary restrictions",
      ],
      doList: [
        "Respect the extended family's role in decision-making",
        "Be aware of sickle cell disease prevalence",
        "Allow prayer and church involvement in healing process",
        "Provide clear information — Igbo patients value education and knowledge",
      ],
      dontList: [
        "Don't dismiss faith healing requests — integrate respectfully",
        "Don't bypass the family patriarch in medical decisions",
        "Don't ignore traditional medicine use",
        "Don't assume all Igbo are Catholic — Pentecostal Christianity is growing rapidly",
      ],
    },
  },

  // ─── SOUTH AFRICA ───────────────────────────────────────────
  "za:Western Cape": {
    regionName: "Western Cape (Cape Town)",
    language: "Afrikaans / English",
    religions: ["Christianity", "Islam"],
    cultural: {
      communication: [
        "Afrikaans and English are the primary languages — Cape Malay community speaks Afrikaans",
        "Cape Town is multicultural — communication styles vary widely",
        "Coloured community has distinct cultural identity — respectful of the term in South African context",
        "Cape Malay Muslim community has specific cultural and religious needs",
      ],
      healthBeliefs: [
        "Western medicine is dominant but Cape Malay traditional remedies exist",
        "Muslim community follows Islamic dietary and medical practices",
        "Substance abuse (especially methamphetamine — 'tik') is a significant concern",
        "TB and HIV prevalence affects healthcare priorities",
      ],
    },
  },
  "za:KwaZulu-Natal": {
    regionName: "KwaZulu-Natal",
    language: "Zulu",
    religions: ["Christianity", "Zulu traditional religion"],
    cultural: {
      communication: [
        "Zulu is the primary language — greet with 'Sawubona' (I see you)",
        "Respect for elders (hlonipha) is deeply embedded — specific avoidance behaviors",
        "Traditional Zulu culture coexists with Christianity",
        "Isibongo (praise names) may be used — shows respect for identity",
      ],
      healthBeliefs: [
        "Sangoma (diviner) and inyanga (herbalist) consultations are common and important",
        "Ancestor spirits (amadlozi) are believed to influence health and illness",
        "HIV/AIDS stigma remains significant despite high prevalence",
        "Traditional medicine (umuthi) is widely used — ask about concurrent use",
        "Ukuthwasa (calling to become a sangoma) may present with symptoms resembling mental illness",
      ],
      doList: [
        "Greet with 'Sawubona' — it means 'I see you' and acknowledges the person's humanity",
        "Ask about traditional medicine (umuthi) use — drug interactions are possible",
        "Respect sangoma consultations — they are legitimate healthcare providers in SA",
        "Be sensitive about HIV/AIDS discussions — stigma is real",
      ],
      dontList: [
        "Don't dismiss sangoma or inyanga consultations",
        "Don't ignore ancestor beliefs in health discussions",
        "Don't assume English proficiency — provide Zulu interpreters",
        "Don't be judgmental about traditional practices — integrate them",
      ],
    },
  },

  // ─── ETHIOPIA ───────────────────────────────────────────────
  "et:Amhara / Addis Ababa": {
    regionName: "Amhara / Addis Ababa",
    language: "Amharic",
    religions: ["Ethiopian Orthodox Christianity", "Islam"],
    cultural: {
      communication: [
        "Amharic is the working language — written in Ge'ez script",
        "Greet with 'Selam' (peace) — handshakes with shoulder bumps show closeness",
        "Ethiopian Orthodox fasting affects diet for 200+ days per year",
        "Respect for elders is paramount — always greet the oldest person first",
      ],
      healthBeliefs: [
        "Ethiopian Orthodox fasting involves strict veganism — affects nutrition and medication schedules",
        "Holy water (tsebel) is used for healing — patients may refuse treatment in favor of it",
        "Coffee ceremony is central to social life — can be used for health counseling sessions",
        "Buda (evil eye) belief is widespread — illness may be attributed to envy",
      ],
      doList: [
        "Respect fasting periods — provide vegan food options",
        "Allow holy water use alongside medical treatment",
        "Participate in coffee ceremony if offered — it builds trust",
        "Address elders with respect — 'Ato' (Mr.), 'Weizero' (Mrs.)",
      ],
      dontList: [
        "Don't serve meat during fasting periods to Orthodox patients",
        "Don't dismiss holy water healing — integrate with medical care",
        "Don't rush greetings — the greeting ritual is extensive and important",
        "Don't ignore buda beliefs — counsel sensitively",
      ],
    },
  },
  "et:Oromia": {
    regionName: "Oromia",
    language: "Oromo (Afaan Oromoo)",
    religions: ["Islam", "Christianity", "Traditional Oromo religion (Waaqeffannaa)"],
    cultural: {
      communication: [
        "Oromo language is the most widely spoken in Ethiopia — not Amharic",
        "Gadaa system (traditional governance) influences community decisions",
        "Oral tradition is strong — verbal communication is valued",
        "Community elders play central role in all major decisions",
      ],
      healthBeliefs: [
        "Traditional Oromo medicine (qoricha) uses herbs and spiritual practices",
        "Waaqeffannaa (traditional monotheistic religion) influences some health beliefs",
        "Circumcision practices (male and female) are culturally significant — approach FGM sensitively",
        "Community-based healthcare decisions are common",
      ],
    },
  },

  // ─── CAMEROON ───────────────────────────────────────────────
  "cm:Francophone Cameroon": {
    regionName: "Francophone Cameroon",
    language: "French",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    cultural: {
      communication: [
        "French is the primary language — used in government, education, and healthcare",
        "Communication is formal and hierarchical — use titles and formal address",
        "Patients may not question doctors out of respect for authority",
        "Traditional beliefs about illness causation (sorcery, spirits) are widespread",
      ],
      healthBeliefs: [
        "Traditional healers (tradi-praticiens) are widely consulted",
        "Illness may be attributed to sorcery or spiritual attack",
        "Herbal medicine markets are extensive — patients use traditional remedies",
        "HIV/AIDS stigma is significant — confidentiality is crucial",
      ],
    },
  },
  "cm:Anglophone NW/SW": {
    regionName: "Anglophone Cameroon (NW/SW)",
    language: "English",
    religions: ["Christianity", "Traditional beliefs"],
    cultural: {
      communication: [
        "English and Pidgin English are spoken — distinct from francophone regions",
        "Ongoing socio-political tensions — be sensitive to language and identity issues",
        "Community-based decision-making is common",
        "Patients may have experienced conflict-related trauma — screen sensitively",
      ],
      healthBeliefs: [
        "Traditional medicine coexists with Western medicine",
        "Conflict has disrupted healthcare infrastructure — many patients have delayed care",
        "Mental health needs are significant due to ongoing crisis",
        "Community health workers play an important role",
      ],
    },
  },

  // ─── SWITZERLAND ────────────────────────────────────────────
  "ch:German Switzerland": {
    regionName: "German-speaking Switzerland",
    language: "Swiss German",
    religions: ["Christianity (Catholic/Protestant)", "None/Secular"],
    cultural: {
      communication: [
        "Swiss German (Schwyzerdütsch) is the daily language — distinct from Standard German",
        "Very precise and punctual — appointments must be on time",
        "Reserved communication style — directness is valued but delivered politely",
        "Privacy is paramount — Swiss Germans are very private about personal matters",
      ],
      healthBeliefs: [
        "Evidence-based medicine is expected — patients are well-informed",
        "Complementary medicine (homeopathy, naturopathy) is covered by basic insurance",
        "Mental health awareness is good — therapy is destigmatized",
        "Outdoor activity and alpine culture contribute to health-conscious lifestyle",
      ],
    },
  },
  "ch:Romandy (French)": {
    regionName: "Romandy (French-speaking Switzerland)",
    language: "French",
    religions: ["Christianity", "None/Secular"],
    cultural: {
      communication: [
        "French is the primary language — Swiss French is close to standard French",
        "More expressive than German Swiss counterparts",
        "Formal address (vous) is expected until invited to use tu",
        "Cultural alignment with French medical traditions",
      ],
      healthBeliefs: [
        "French medical tradition influences practice — thorough consultations expected",
        "Wine culture is part of daily life — screen for alcohol use sensitively",
        "Complementary medicine is popular — herbal remedies and homeopathy",
        "Patients expect detailed explanations and active participation in decisions",
      ],
    },
  },

  // ─── KENYA ──────────────────────────────────────────────────
  "ke:Nairobi / Central": {
    regionName: "Nairobi / Central Kenya",
    language: "Kikuyu / English / Swahili",
    religions: ["Christianity (Protestant, Catholic)"],
    cultural: {
      communication: [
        "English and Swahili are used interchangeably — Sheng (slang) is common among youth",
        "Urban, cosmopolitan population with diverse health-seeking behaviors",
        "Patients are often health-literate and may research conditions online",
        "Private and public healthcare systems coexist — approach varies by setting",
      ],
      healthBeliefs: [
        "Modern medicine is primary but traditional remedies (dawa ya kienyeji) are also used",
        "HIV/AIDS awareness is high due to extensive public health campaigns",
        "Mental health services are growing but still stigmatized",
        "Kikuyu traditional practices around childbirth and naming ceremonies persist",
      ],
    },
  },
  "ke:Coast": {
    regionName: "Coastal Kenya (Mombasa)",
    language: "Swahili",
    religions: ["Islam (Sunni)", "Christianity"],
    cultural: {
      communication: [
        "Swahili is the dominant language — the historical heartland of the language",
        "Islamic culture is prominent — greet with 'Assalamu Alaikum'",
        "Communication is warm and hospitable — chai (tea) is offered before discussions",
        "Arabic and Islamic influences are evident in culture and health practices",
      ],
      healthBeliefs: [
        "Islamic dietary laws (halal) are important",
        "Traditional Swahili medicine (uganga) uses herbs and spiritual remedies",
        "Ramadan fasting affects medication schedules",
        "Gender-separated healthcare is preferred in Muslim communities",
      ],
    },
  },

  // ─── DR CONGO ───────────────────────────────────────────────
  "cd:Kinshasa / West": {
    regionName: "Kinshasa / Western DRC",
    language: "Lingala / French",
    religions: ["Christianity (Catholic, Protestant, Kimbanguist)"],
    cultural: {
      communication: [
        "Lingala and French are the primary languages — Lingala for daily life, French for formal settings",
        "Congolese culture is expressive and communal — music and dance are integral to life",
        "Respect for elders and authority is paramount — use formal titles",
        "Patients may attribute illness to spiritual causes — approach sensitively",
      ],
      healthBeliefs: [
        "Traditional healers (nganga) are widely consulted alongside modern medicine",
        "Kindoki (sorcery/witchcraft) beliefs influence health-seeking behavior",
        "Ebola outbreaks have created specific healthcare trust issues",
        "Malaria and tropical diseases are primary health concerns",
      ],
    },
  },
  "cd:East (Kivu)": {
    regionName: "Eastern DRC (Kivu)",
    language: "Swahili",
    religions: ["Christianity", "Islam"],
    cultural: {
      communication: [
        "Swahili is the dominant language — different from coastal East African Swahili",
        "Conflict-affected population — many patients have experienced trauma",
        "Refugee and displacement experiences are common",
        "Community trust in healthcare providers may be low due to conflict",
      ],
      healthBeliefs: [
        "Sexual and gender-based violence (SGBV) is a major health concern",
        "Mental health needs are extreme — PTSD, depression, anxiety are prevalent",
        "Traditional medicine is used when modern facilities are unavailable",
        "Nutrition and food security are primary health determinants",
      ],
      doList: [
        "Screen for trauma and SGBV sensitively",
        "Provide mental health support — needs are enormous",
        "Be patient — trust must be built slowly in conflict-affected areas",
        "Use Swahili interpreters rather than French for rural patients",
      ],
      dontList: [
        "Don't force disclosure of trauma — let patients share at their own pace",
        "Don't dismiss distrust of healthcare systems — it has historical roots",
        "Don't assume French proficiency — Swahili is primary in eastern DRC",
        "Don't ignore nutritional needs — food insecurity affects health outcomes",
      ],
    },
  },

  // ─── GHANA ──────────────────────────────────────────────────
  "gh:Greater Accra / South": {
    regionName: "Greater Accra / Southern Ghana",
    language: "Akan (Twi)",
    religions: ["Christianity", "Traditional beliefs"],
    cultural: {
      communication: [
        "Twi is the most widely spoken language — greet with 'Ete sen?' (How are you?)",
        "Respect for elders is central — greet oldest person first",
        "Akan day names (e.g., Kofi for Friday-born males) carry cultural significance",
        "Communication is warm and communal — patients expect personal connection",
      ],
      healthBeliefs: [
        "Herbal medicine (aduru) is widely used — traditional healers are respected",
        "Malaria is the leading health concern — prophylaxis and treatment are priorities",
        "Traditional birth attendants (TBAs) are used especially in peri-urban areas",
        "Naming ceremonies on the 8th day after birth are culturally significant",
      ],
    },
  },
  "gh:Northern Ghana": {
    regionName: "Northern Ghana",
    language: "Dagbani / Mampruli",
    religions: ["Islam", "Traditional beliefs", "Christianity"],
    cultural: {
      communication: [
        "Dagbani and other Gur languages are primary — English is limited",
        "Islamic culture is more prevalent than in the south",
        "Traditional chiefs and elders have significant authority",
        "Oral tradition is strong — verbal communication is paramount",
      ],
      healthBeliefs: [
        "Traditional medicine and Islamic healing practices coexist",
        "Female genital cutting (FGC) is practiced in some communities — approach sensitively",
        "Poverty and malnutrition are more severe than in southern Ghana",
        "Child marriage remains a concern — affects adolescent health",
      ],
    },
  },

  // ─── SENEGAL ────────────────────────────────────────────────
  "sn:Dakar / Urban": {
    regionName: "Dakar / Urban Senegal",
    language: "Wolof / French",
    religions: ["Islam (Sunni, Sufi brotherhoods)"],
    cultural: {
      communication: [
        "Wolof is the lingua franca — French for formal settings",
        "Teranga (hospitality) is the defining cultural value — expect warm reception",
        "Sufi Muslim brotherhoods (Mouride, Tijaniyya) are very influential",
        "Greet with 'Nanga def?' (How are you?) in Wolof",
      ],
      healthBeliefs: [
        "Marabout (religious healer) consultations are extremely common",
        "Gris-gris (amulets) are worn for protection — don't remove without discussion",
        "Islamic medicine and herbal remedies are used alongside modern medicine",
        "Mental illness may be attributed to djinn or spiritual causes",
        "Traditional birth attendants are common even in urban areas",
      ],
      doList: [
        "Respect teranga — accept hospitality when offered",
        "Don't remove gris-gris amulets — they have spiritual significance",
        "Work with marabouts on public health messaging",
        "Provide female providers for female patients",
      ],
      dontList: [
        "Don't dismiss marabout healing practices",
        "Don't remove religious amulets or charms",
        "Don't eat in front of fasting patients during Ramadan",
        "Don't ignore the influence of Sufi brotherhoods on health decisions",
      ],
    },
  },

  // ─── TANZANIA ───────────────────────────────────────────────
  "tz:Dar es Salaam / Coast": {
    regionName: "Dar es Salaam / Coastal Tanzania",
    language: "Swahili",
    religions: ["Islam", "Christianity"],
    cultural: {
      communication: [
        "Swahili is the national language — greet with 'Habari' or 'Mambo'",
        "Islamic and African cultural traditions blend along the coast",
        "Hospitality is deeply valued — chai (tea) culture is important",
        "Respectful greetings are extensive and culturally required",
      ],
      healthBeliefs: [
        "Traditional medicine (dawa za asili) is the first resort for many conditions",
        "Mganga (traditional healer) consultations are common and respected",
        "HIV/AIDS awareness is high but stigma persists",
        "Maternal and child health programs are well-established",
      ],
    },
  },
  "tz:Zanzibar": {
    regionName: "Zanzibar",
    language: "Swahili (Arabic influence)",
    religions: ["Islam (Sunni)"],
    cultural: {
      communication: [
        "Swahili with significant Arabic vocabulary — reflects centuries of Arab trade influence",
        "Zanzibar is predominantly Muslim — greet with 'Assalamu Alaikum'",
        "Conservative dress and behavior are expected",
        "Communication is warm but modest — respect personal boundaries",
      ],
      healthBeliefs: [
        "Islamic healing traditions (Quran recitation, ruqya) are practiced alongside medicine",
        "Gender-separated healthcare is strongly preferred",
        "Ramadan fasting affects medication schedules",
        "Traditional Swahili medicine includes herbal remedies and spiritual practices",
        "Clove and spice remedies are culturally significant",
      ],
    },
  },
};
