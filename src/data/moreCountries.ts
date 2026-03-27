import { CountryData } from "./countries";

/**
 * Additional countries — Africa completions + global expansion
 */
export const moreCountries: CountryData[] = [
  // ─── AFRICA (remaining) ───────────────────────────────────────────
  {
    name: "Cape Verde",
    isoCode: "cv",
    lat: 14.9,
    lng: -23.5,
    languages: ["Portuguese", "Cape Verdean Creole"],
    primaryLanguageFamily: "portuguese",
    religions: ["Roman Catholicism", "Protestantism"],
    region: "West Africa",
    cultural: {
      communication: [
        "Morabeza (warm hospitality) defines social interactions",
        "Indirect communication preferred — directness can feel aggressive",
        "Music (Morna, Coladeira) is central to emotional expression",
      ],
      familyDecisionMaking: [
        "Extended family heavily involved in health decisions",
        "Matriarchal tendencies in many households due to male emigration",
        "Community elders consulted for serious medical matters",
      ],
      religiousSpiritual: [
        "Catholic faith deeply embedded; saints invoked during illness",
        "Spiritual healing (curandeiros) used alongside modern medicine",
        "Death rituals are communal — expect large family gatherings",
      ],
      healthBeliefs: [
        "Traditional remedies from local herbs (purga, cháde-pedra) common",
        "Mental health stigma exists — somatic complaints may mask depression",
        "High value placed on prenatal care and maternal health",
      ],
      genderContact: [
        "Relatively relaxed gender norms compared to mainland Africa",
        "Female patients generally comfortable with male physicians",
        "Physical greetings (cheek kisses) common between genders",
      ],
      doList: [
        "Acknowledge family members present during consultations",
        "Respect the role of traditional healers in patient's care journey",
        "Be aware of diaspora influences on health expectations",
      ],
      dontList: [
        "Don't dismiss Creole expressions — they convey nuanced symptoms",
        "Don't assume all Cape Verdeans speak continental Portuguese fluently",
        "Don't overlook the psychological impact of island isolation",
      ],
    },
    sources: [
      { label: "WHO Cape Verde", url: "https://www.who.int/countries/cpv" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cape_Verde" },
    ],
  },
  {
    name: "Comoros",
    isoCode: "km",
    lat: -11.7,
    lng: 43.3,
    languages: ["Comorian", "French", "Arabic"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni)"],
    region: "East Africa",
    cultural: {
      communication: [
        "Comorian (Shikomori) is primary — French used in formal settings",
        "Respectful greetings (Bariza) required before any conversation",
        "Indirect speech preferred; avoid confrontational language",
      ],
      familyDecisionMaking: [
        "Grand Mariage ceremony defines social status and decision authority",
        "Matrilineal land ownership — women hold property rights",
        "Male elders lead family health decisions publicly",
      ],
      religiousSpiritual: [
        "Islam permeates all aspects of life; prayer times must be respected",
        "Ramadan fasting affects medication schedules",
        "Djinn (spirit) possession beliefs influence mental health presentations",
      ],
      healthBeliefs: [
        "Traditional medicine (fundi) widely practiced",
        "Herbal remedies from ylang-ylang and clove plants used",
        "Distrust of Western psychiatric diagnoses is common",
      ],
      genderContact: [
        "Gender segregation observed in many social contexts",
        "Female patients strongly prefer female doctors",
        "Male physicians must request permission before examinations",
      ],
      doList: [
        "Learn basic Shikomori greetings",
        "Schedule appointments around prayer times",
        "Involve traditional healers in treatment discussions when appropriate",
      ],
      dontList: [
        "Don't schedule procedures during Ramadan without discussion",
        "Don't dismiss djinn-related health explanations",
        "Don't assume French proficiency in rural areas",
      ],
    },
    sources: [
      { label: "WHO Comoros", url: "https://www.who.int/countries/com" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Comoros" },
    ],
  },
  {
    name: "Mauritius",
    isoCode: "mu",
    lat: -20.2,
    lng: 57.5,
    languages: ["English", "French", "Mauritian Creole", "Hindi", "Bhojpuri"],
    primaryLanguageFamily: "english",
    religions: ["Hinduism", "Christianity", "Islam", "Buddhism"],
    region: "East Africa",
    cultural: {
      communication: [
        "Multilingual society — Creole is lingua franca, English is official",
        "Politeness and indirectness valued across all ethnic groups",
        "Patients may code-switch between languages mid-conversation",
      ],
      familyDecisionMaking: [
        "Hindu families may consult the eldest male member",
        "Creole families often have matriarchal decision structures",
        "Muslim families follow patriarchal decision-making models",
      ],
      religiousSpiritual: [
        "Multi-faith society — ask about specific religious observances",
        "Hindu patients may observe vegetarian diets and fasting days",
        "Catholic patients may request sacraments during serious illness",
      ],
      healthBeliefs: [
        "Ayurvedic and traditional Chinese medicine used alongside modern care",
        "Herbal teas (tisane) considered first-line treatment for mild illness",
        "Strong belief in the evil eye (mauvais oeil) across communities",
      ],
      genderContact: [
        "Generally progressive on gender interactions in medical settings",
        "Muslim women may prefer female practitioners",
        "Physical examination consent should always be explicit",
      ],
      doList: [
        "Ask about language preference before starting consultation",
        "Respect dietary restrictions tied to religious practices",
        "Acknowledge the multicultural nature of Mauritian identity",
      ],
      dontList: [
        "Don't assume ethnicity based on appearance",
        "Don't serve non-vegetarian hospital food without asking",
        "Don't dismiss traditional remedy use — integrate it into care plans",
      ],
    },
    sources: [
      { label: "WHO Mauritius", url: "https://www.who.int/countries/mus" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mauritius" },
    ],
  },
  {
    name: "Guinea-Bissau",
    isoCode: "gw",
    lat: 11.9,
    lng: -15.6,
    languages: ["Portuguese", "Crioulo", "Fula", "Mandinka"],
    primaryLanguageFamily: "portuguese",
    religions: ["Islam", "Indigenous beliefs", "Christianity"],
    region: "West Africa",
    cultural: {
      communication: [
        "Crioulo is the common language — Portuguese used officially",
        "Oral tradition dominant; written health materials may not reach patients",
        "Respect for elders is paramount in all interactions",
      ],
      familyDecisionMaking: [
        "Village chiefs and elders consulted on health matters",
        "Polygamous family structures affect caregiving dynamics",
        "Women may need husband's permission for medical procedures",
      ],
      religiousSpiritual: [
        "Syncretic beliefs — Islam and indigenous practices intertwined",
        "Iran (spirit ceremonies) performed for healing",
        "Sacred forests and spiritual sites important for wellbeing",
      ],
      healthBeliefs: [
        "Djambakos (traditional healers) are first point of care",
        "Herbal medicine extensively used for common ailments",
        "Malaria and waterborne diseases are primary health concerns",
      ],
      genderContact: [
        "Female genital cutting still practiced — handle sensitively",
        "Women in rural areas have limited autonomy in health decisions",
        "Male doctors examining women should have a female chaperone",
      ],
      doList: [
        "Use visual aids and oral explanations for health education",
        "Engage community health workers as cultural liaisons",
        "Respect traditional healing practices alongside treatment",
      ],
      dontList: [
        "Don't assume literacy — adapt communication accordingly",
        "Don't dismiss the authority of village leaders in health decisions",
        "Don't overlook the role of traditional birth attendants",
      ],
    },
    sources: [
      { label: "WHO Guinea-Bissau", url: "https://www.who.int/countries/gnb" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guinea-Bissau" },
    ],
  },
  {
    name: "São Tomé and Príncipe",
    isoCode: "st",
    lat: 0.3,
    lng: 6.6,
    languages: ["Portuguese", "Forro", "Angolar"],
    primaryLanguageFamily: "portuguese",
    religions: ["Roman Catholicism", "Protestantism"],
    region: "Central Africa",
    cultural: {
      communication: [
        "Portuguese is official but Forro Creole widely spoken",
        "Small island community — personal relationships matter greatly",
        "Warm, informal communication style preferred",
      ],
      familyDecisionMaking: [
        "Extended family networks central to all decisions",
        "Godparent (compadre) system creates strong social bonds",
        "Women play significant roles in household health decisions",
      ],
      religiousSpiritual: [
        "Catholic traditions blended with African spiritual practices",
        "Feast days and saint celebrations are community health events",
        "Spiritual causes attributed to unexplained illnesses",
      ],
      healthBeliefs: [
        "Traditional plant medicine (remédio di terra) widely used",
        "Malaria is the leading health concern",
        "Limited healthcare infrastructure — patients may delay seeking care",
      ],
      genderContact: [
        "Relatively relaxed gender norms in medical settings",
        "Women generally comfortable with male doctors",
        "Domestic violence is a health concern — screen sensitively",
      ],
      doList: [
        "Build personal rapport before clinical discussions",
        "Acknowledge traditional remedies patients may be using",
        "Use simple, clear Portuguese for medical instructions",
      ],
      dontList: [
        "Don't rush consultations — relationship-building is essential",
        "Don't ignore the impact of geographic isolation on mental health",
        "Don't assume access to follow-up care after discharge",
      ],
    },
    sources: [
      { label: "WHO São Tomé", url: "https://www.who.int/countries/stp" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe" },
    ],
  },
  {
    name: "Seychelles",
    isoCode: "sc",
    lat: -4.7,
    lng: 55.5,
    languages: ["Seychellois Creole", "English", "French"],
    primaryLanguageFamily: "english",
    religions: ["Roman Catholicism", "Protestantism"],
    region: "East Africa",
    cultural: {
      communication: [
        "Trilingual society — Creole for daily life, English and French officially",
        "Informal and friendly communication style",
        "Small population means reputation and privacy are sensitive",
      ],
      familyDecisionMaking: [
        "Nuclear and extended families both involved in care decisions",
        "Matrifocal family structures common",
        "Community is tight-knit — health information travels quickly",
      ],
      religiousSpiritual: [
        "Catholic majority with some syncretic practices (gris-gris)",
        "Faith healing coexists with modern medicine",
        "Sunday rest and church attendance widely observed",
      ],
      healthBeliefs: [
        "Herbal medicine (bonm fam) used for common ailments",
        "High rates of lifestyle diseases — diet counseling important",
        "Mental health stigma present but improving",
      ],
      genderContact: [
        "Progressive gender relations in healthcare settings",
        "No significant barriers to cross-gender medical care",
        "Consent-focused approach appreciated",
      ],
      doList: [
        "Respect patient confidentiality — small community means word spreads",
        "Discuss lifestyle modifications with cultural sensitivity",
        "Use Creole for better patient comprehension if possible",
      ],
      dontList: [
        "Don't assume patients can afford imported medications",
        "Don't overlook the role of traditional remedies",
        "Don't dismiss concerns about privacy",
      ],
    },
    sources: [
      { label: "WHO Seychelles", url: "https://www.who.int/countries/syc" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Seychelles" },
    ],
  },

  // ─── MIDDLE EAST ──────────────────────────────────────────────────
  {
    name: "United Arab Emirates",
    isoCode: "ae",
    lat: 24.5,
    lng: 54.4,
    languages: ["Arabic", "English", "Hindi", "Urdu", "Tagalog"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni and Shia)", "Christianity", "Hinduism"],
    region: "Middle East",
    cultural: {
      communication: [
        "Arabic is official; English widely used in healthcare",
        "Titles and formality important — use 'Sheikh', 'Doctor' etc.",
        "Indirect communication preferred; avoid bluntness about prognosis",
      ],
      familyDecisionMaking: [
        "Patriarchal decision-making in Emirati families",
        "Large extended families expect to be involved and informed",
        "Wasta (connections) can influence expectations of care",
      ],
      religiousSpiritual: [
        "Islam governs daily life — prayer times, halal food, Ramadan fasting",
        "Ruqyah (Quranic healing) may be sought for illness",
        "Death and burial customs require swift action (within 24 hours)",
      ],
      healthBeliefs: [
        "Prophetic medicine (Tibb al-Nabawi) valued alongside modern care",
        "Hijama (cupping) widely practiced",
        "Mental health still carries stigma — frame as stress management",
      ],
      genderContact: [
        "Emirati women strongly prefer female doctors",
        "Male doctors must have a chaperone when examining women",
        "Handshaking between genders: wait for the patient to initiate",
      ],
      doList: [
        "Ensure halal food and prayer facilities in clinical settings",
        "Address the eldest male family member first in group discussions",
        "Show respect for national identity and cultural pride",
      ],
      dontList: [
        "Don't expose patients unnecessarily during examinations",
        "Don't discuss alcohol use without sensitivity to Islamic law",
        "Don't assume all residents are Emirati — 85%+ are expatriates",
      ],
    },
    sources: [
      { label: "WHO UAE", url: "https://www.who.int/countries/are" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_Arab_Emirates" },
    ],
  },
  {
    name: "Qatar",
    isoCode: "qa",
    lat: 25.3,
    lng: 51.5,
    languages: ["Arabic", "English"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni Wahhabi majority)"],
    region: "Middle East",
    cultural: {
      communication: [
        "Formal Arabic in official contexts; English common in healthcare",
        "Hospitality (offering coffee/dates) precedes business discussions",
        "Avoid direct eye contact with opposite gender as sign of respect",
      ],
      familyDecisionMaking: [
        "Tribal and family structures heavily influence medical decisions",
        "Father or eldest son typically serves as family spokesperson",
        "Consanguineous marriages common — genetic counseling relevant",
      ],
      religiousSpiritual: [
        "Conservative Islamic values guide all healthcare expectations",
        "Ramadan fasting — discuss medication adjustments proactively",
        "Quranic verses may be recited over the sick",
      ],
      healthBeliefs: [
        "Traditional Arabic medicine (Tibb) still referenced",
        "Honey and black seed (habbatus sauda) used as remedies",
        "High diabetes prevalence — culturally sensitive diet counseling needed",
      ],
      genderContact: [
        "Strict gender segregation expected in clinical settings",
        "Female patients require female healthcare providers when possible",
        "Minimal physical contact across genders",
      ],
      doList: [
        "Provide gender-concordant care whenever possible",
        "Respect prayer times and religious holidays in scheduling",
        "Offer genetic counseling sensitively given consanguinity rates",
      ],
      dontList: [
        "Don't assume migrant workers share the same cultural norms as Qataris",
        "Don't serve pork-based medications without informing patients",
        "Don't discuss topics like alcohol or substance use casually",
      ],
    },
    sources: [
      { label: "WHO Qatar", url: "https://www.who.int/countries/qat" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Qatar" },
    ],
  },

  // ─── SOUTH & SOUTHEAST ASIA ───────────────────────────────────────
  {
    name: "Nepal",
    isoCode: "np",
    lat: 27.7,
    lng: 85.3,
    languages: ["Nepali", "Maithili", "Bhojpuri", "Tharu"],
    primaryLanguageFamily: "hindi",
    religions: ["Hinduism", "Buddhism", "Islam", "Kirat Mundhum"],
    region: "South Asia",
    cultural: {
      communication: [
        "Namaste greeting with palms together is universal",
        "Hierarchical communication — age and caste influence interactions",
        "Head nodding can mean yes or acknowledgment, not necessarily agreement",
      ],
      familyDecisionMaking: [
        "Joint family system — eldest male typically decides",
        "Caste system influences healthcare access and expectations",
        "Mother-in-law holds significant authority over women's health",
      ],
      religiousSpiritual: [
        "Hindu rituals (pujas) performed for healing",
        "Buddhist patients may request monks for spiritual support",
        "Astrological consultations may determine treatment timing",
      ],
      healthBeliefs: [
        "Ayurveda widely practiced alongside modern medicine",
        "Dhami-jhankri (shamans) consulted, especially in rural areas",
        "Hot/cold food classification influences dietary compliance",
      ],
      genderContact: [
        "Women in rural areas may be reluctant to see male doctors",
        "Physical modesty highly valued — minimize exposure during exams",
        "Menstruation taboos (chhaupadi) affect women's healthcare access",
      ],
      doList: [
        "Use Namaste greeting with appropriate respect",
        "Include family members in treatment discussions",
        "Be aware of caste sensitivities in group settings",
      ],
      dontList: [
        "Don't touch someone's head — it's considered sacred",
        "Don't use the left hand for giving or receiving items",
        "Don't dismiss the role of shamanic healing in rural areas",
      ],
    },
    sources: [
      { label: "WHO Nepal", url: "https://www.who.int/countries/npl" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nepal" },
    ],
  },
  {
    name: "Sri Lanka",
    isoCode: "lk",
    lat: 6.9,
    lng: 79.9,
    languages: ["Sinhala", "Tamil", "English"],
    primaryLanguageFamily: "other",
    religions: ["Buddhism", "Hinduism", "Islam", "Christianity"],
    region: "South Asia",
    cultural: {
      communication: [
        "Ayubowan (may you live long) is the traditional greeting",
        "Indirect communication style — avoid causing loss of face",
        "Ethnic tensions (Sinhalese/Tamil) may affect patient interactions",
      ],
      familyDecisionMaking: [
        "Family-centric decision-making across all ethnic groups",
        "Buddhist families may consult monks for guidance",
        "Tamil families often follow patriarchal structures",
      ],
      religiousSpiritual: [
        "Buddhism influences acceptance of illness and suffering",
        "Hindu patients may have specific dietary and ritual requirements",
        "Bodhi puja (Buddhist ritual) may be performed for healing",
      ],
      healthBeliefs: [
        "Ayurveda is a parallel official medical system in Sri Lanka",
        "Traditional medicine (wedakama) deeply trusted, especially rurally",
        "Astrological considerations may influence treatment decisions",
      ],
      genderContact: [
        "Modesty important across all communities",
        "Muslim women in eastern regions strongly prefer female doctors",
        "Physical contact should be minimal and explained beforehand",
      ],
      doList: [
        "Ask about Ayurvedic treatments already being used",
        "Be sensitive to ethnic and religious diversity",
        "Provide information in both Sinhala and Tamil when possible",
      ],
      dontList: [
        "Don't point with fingers — use whole hand to gesture",
        "Don't assume religious affiliation based on name alone",
        "Don't stand with your back to a Buddha statue in patient rooms",
      ],
    },
    sources: [
      { label: "WHO Sri Lanka", url: "https://www.who.int/countries/lka" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sri_Lanka" },
    ],
  },
  {
    name: "Myanmar",
    isoCode: "mm",
    lat: 19.8,
    lng: 96.2,
    languages: ["Burmese", "Shan", "Karen", "Rakhine"],
    primaryLanguageFamily: "other",
    religions: ["Theravada Buddhism", "Christianity", "Islam"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Mingalaba is the universal greeting",
        "Age-based respect (gadaw) is paramount",
        "Avoid direct confrontation — preserve harmony (ahna-de)",
      ],
      familyDecisionMaking: [
        "Family elders make collective healthcare decisions",
        "Monastic advice sought for serious illness",
        "Women have relatively equal status in Burmese families",
      ],
      religiousSpiritual: [
        "Buddhism deeply intertwined with daily life and health",
        "Merit-making (kutho) through donations believed to aid recovery",
        "Nat spirits (indigenous spirits) may be invoked for protection",
      ],
      healthBeliefs: [
        "Traditional medicine (hsay) widely used — turmeric, thanaka",
        "Astrology and numerology influence health decisions",
        "Mental illness often attributed to spiritual causes",
      ],
      genderContact: [
        "Women's clothing (htamein/longyi) considered sacred — don't touch",
        "Physical modesty important; minimize exposure during exams",
        "Female patients prefer female healthcare providers",
      ],
      doList: [
        "Remove shoes before entering patient homes or sacred spaces",
        "Show respect to Buddhist monks who may visit patients",
        "Ask about traditional medicines being used concurrently",
      ],
      dontList: [
        "Don't touch anyone's head — highest and most sacred body part",
        "Don't point feet at people or religious objects",
        "Don't dismiss the role of astrology in treatment timing",
      ],
    },
    sources: [
      { label: "WHO Myanmar", url: "https://www.who.int/countries/mmr" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Myanmar" },
    ],
  },
  {
    name: "Cambodia",
    isoCode: "kh",
    lat: 11.6,
    lng: 104.9,
    languages: ["Khmer", "French", "English"],
    primaryLanguageFamily: "other",
    religions: ["Theravada Buddhism", "Islam"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Sampeah (palms together bow) is the respectful greeting",
        "Hierarchy deeply important — address elders and officials with titles",
        "Silence may indicate respect, not confusion or agreement",
      ],
      familyDecisionMaking: [
        "Extended family involved in all major health decisions",
        "Intergenerational trauma from Khmer Rouge era affects health behavior",
        "Buddhist monks often consulted for guidance",
      ],
      religiousSpiritual: [
        "Buddhism permeates healthcare expectations",
        "Karma beliefs may lead to acceptance of illness as fate",
        "Kru Khmer (traditional healers) perform spiritual ceremonies",
      ],
      healthBeliefs: [
        "Coining (kos khyal) and cupping used to treat 'wind illness'",
        "Traditional medicine widely used before seeking Western care",
        "Mental health trauma from genocide — sensitive screening needed",
      ],
      genderContact: [
        "Women are generally modest — provide draping during exams",
        "Monks must not be touched by women",
        "Handshaking uncommon — use sampeah greeting instead",
      ],
      doList: [
        "Screen for PTSD/trauma especially in older patients",
        "Recognize coining marks as traditional treatment, not abuse",
        "Involve Buddhist leaders in palliative care discussions",
      ],
      dontList: [
        "Don't touch the head — considered sacred",
        "Don't point feet at people or sacred objects",
        "Don't discuss Khmer Rouge history casually",
      ],
    },
    sources: [
      { label: "WHO Cambodia", url: "https://www.who.int/countries/khm" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cambodia" },
    ],
  },
  {
    name: "Singapore",
    isoCode: "sg",
    lat: 1.3,
    lng: 103.8,
    languages: ["English", "Mandarin", "Malay", "Tamil"],
    primaryLanguageFamily: "english",
    religions: ["Buddhism", "Christianity", "Islam", "Hinduism", "Taoism"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "English is lingua franca but Singlish (colloquial) widely spoken",
        "Multiracial harmony is a core national value — be culturally neutral",
        "Patients may be reserved about discussing emotional concerns",
      ],
      familyDecisionMaking: [
        "Chinese families: filial piety — children defer to parents' wishes",
        "Malay families: community and religious leader input",
        "Indian families: patriarchal structures with joint family input",
      ],
      religiousSpiritual: [
        "Multi-faith — always ask rather than assume",
        "Buddhist patients may request chanting during end-of-life",
        "Muslim patients require halal food and prayer accommodations",
      ],
      healthBeliefs: [
        "TCM (Traditional Chinese Medicine) widely practiced and regulated",
        "Jamu (Malay herbal medicine) and Ayurveda also popular",
        "High health literacy overall — patients research conditions online",
      ],
      genderContact: [
        "Malay-Muslim women may prefer female doctors",
        "Generally progressive — cross-gender care widely accepted",
        "Maintain professional boundaries across all ethnic groups",
      ],
      doList: [
        "Ask about language preference and religious dietary needs",
        "Inquire about TCM or traditional supplements being taken",
        "Respect the efficiency-oriented healthcare expectations",
      ],
      dontList: [
        "Don't stereotype based on ethnicity",
        "Don't make assumptions about socioeconomic status",
        "Don't overlook drug interactions with traditional remedies",
      ],
    },
    sources: [
      { label: "WHO Singapore", url: "https://www.who.int/countries/sgp" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Singapore" },
    ],
  },

  // ─── EUROPE ───────────────────────────────────────────────────────
  {
    name: "Portugal",
    isoCode: "pt",
    lat: 38.7,
    lng: -9.1,
    languages: ["Portuguese"],
    primaryLanguageFamily: "portuguese",
    religions: ["Roman Catholicism"],
    region: "Europe",
    cultural: {
      communication: [
        "Warm and personal communication style — relationship before diagnosis",
        "Saudade (melancholic longing) is a cultural concept that can affect health",
        "Titles (Senhor/a Doutor/a) used respectfully",
      ],
      familyDecisionMaking: [
        "Family involvement in healthcare decisions is expected",
        "Adult children heavily involved in elderly parents' care",
        "Decision-making may be slow — consensus building is valued",
      ],
      religiousSpiritual: [
        "Catholic faith influences end-of-life decisions",
        "Pilgrimages to Fátima for miraculous healing are common",
        "Saints invoked for specific ailments",
      ],
      healthBeliefs: [
        "Herbal teas and home remedies (chás) used for everyday ailments",
        "Diet is considered central to health (Mediterranean approach)",
        "Older generation may be fatalistic about chronic conditions",
      ],
      genderContact: [
        "No significant gender barriers in medical care",
        "Older women may prefer female gynecologists",
        "Physical contact (handshakes, cheek kisses) common between all genders",
      ],
      doList: [
        "Build rapport with warmth — personal touch matters",
        "Discuss diet and lifestyle in the context of Mediterranean cuisine",
        "Respect Catholic sensitivities around end-of-life care",
      ],
      dontList: [
        "Don't be overly clinical or distant — patients expect empathy",
        "Don't dismiss home remedies — integrate into care discussions",
        "Don't rush consultations — expect longer interactions",
      ],
    },
    sources: [
      { label: "WHO Portugal", url: "https://www.who.int/countries/prt" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Portugal" },
    ],
  },
  {
    name: "Netherlands",
    isoCode: "nl",
    lat: 52.4,
    lng: 4.9,
    languages: ["Dutch", "Frisian", "English"],
    primaryLanguageFamily: "german",
    religions: ["Roman Catholicism", "Protestantism", "Islam", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Direct communication is valued — Dutch appreciate honesty",
        "Egalitarian culture — patients expect to be treated as equals",
        "Most Dutch speak excellent English",
      ],
      familyDecisionMaking: [
        "Individual autonomy prioritized over family input",
        "Patients expect shared decision-making with their doctor",
        "Advance directives and euthanasia discussions are normalized",
      ],
      religiousSpiritual: [
        "Highly secular society — many identify as non-religious",
        "Growing Muslim population with specific healthcare needs",
        "Religious beliefs should not be assumed",
      ],
      healthBeliefs: [
        "Evidence-based medicine strongly preferred",
        "GP (huisarts) is the gatekeeper — referrals required for specialists",
        "'Doe maar normaal' (act normal) — tendency to downplay symptoms",
      ],
      genderContact: [
        "No significant gender barriers in healthcare",
        "Progressive attitudes toward gender and sexuality",
        "Muslim patients may have specific preferences",
      ],
      doList: [
        "Be direct and evidence-based in your communication",
        "Discuss euthanasia and advance directives when appropriate",
        "Respect patient autonomy in treatment decisions",
      ],
      dontList: [
        "Don't be paternalistic — Dutch patients resist authoritative doctors",
        "Don't over-treat or over-test — conservative approach is cultural norm",
        "Don't assume religiosity — most are secular",
      ],
    },
    sources: [
      { label: "WHO Netherlands", url: "https://www.who.int/countries/nld" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Netherlands" },
    ],
  },
  {
    name: "Ireland",
    isoCode: "ie",
    lat: 53.3,
    lng: -6.3,
    languages: ["English", "Irish (Gaeilge)"],
    primaryLanguageFamily: "english",
    religions: ["Roman Catholicism", "Church of Ireland", "Islam", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Warm, conversational style — small talk before medical discussion",
        "Self-deprecating humor is common and can mask symptoms",
        "Storytelling is culturally important — let patients narrate",
      ],
      familyDecisionMaking: [
        "Family is central but individual autonomy respected",
        "Older generation more likely to defer to doctor's authority",
        "Growing multiculturalism means diverse family structures",
      ],
      religiousSpiritual: [
        "Catholic heritage influences attitudes to contraception and end-of-life",
        "Rapid secularization means younger patients may not practice faith",
        "Priest visits expected for seriously ill Catholic patients",
      ],
      healthBeliefs: [
        "Strong tea is considered a cure-all in folk wisdom",
        "Reluctance to 'bother the doctor' may delay presentation",
        "Mental health awareness growing but stigma still exists in rural areas",
      ],
      genderContact: [
        "No significant barriers to cross-gender medical care",
        "Progressive attitudes especially among younger generation",
        "Sensitivity needed with Traveller community health issues",
      ],
      doList: [
        "Allow time for rapport building before diagnosis",
        "Be aware of historical medical distrust (e.g., institutional abuse)",
        "Proactively ask about mental health — patients may not volunteer",
      ],
      dontList: [
        "Don't dismiss humor as avoidance — it's a coping mechanism",
        "Don't assume all Irish patients are Catholic",
        "Don't overlook health disparities in the Traveller community",
      ],
    },
    sources: [
      { label: "WHO Ireland", url: "https://www.who.int/countries/irl" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Republic_of_Ireland" },
    ],
  },
  {
    name: "Norway",
    isoCode: "no",
    lat: 59.9,
    lng: 10.8,
    languages: ["Norwegian (Bokmål, Nynorsk)", "Sámi"],
    primaryLanguageFamily: "other",
    religions: ["Lutheran Christianity", "Islam", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Janteloven (Law of Jante) — don't elevate yourself above others",
        "Direct but non-confrontational communication style",
        "Equality and humility are core values",
      ],
      familyDecisionMaking: [
        "Strong individual autonomy in healthcare decisions",
        "Gender-equal decision-making in families",
        "State healthcare system trusted and widely used",
      ],
      religiousSpiritual: [
        "Largely secular despite Lutheran state church history",
        "Growing immigrant population with diverse religious needs",
        "Sámi patients may have indigenous spiritual practices",
      ],
      healthBeliefs: [
        "High trust in evidence-based medicine",
        "Outdoor culture (friluftsliv) considered key to wellbeing",
        "Seasonal Affective Disorder common — light therapy normalized",
      ],
      genderContact: [
        "Highly egalitarian — no significant gender barriers in healthcare",
        "Progressive on gender identity and LGBTQ+ health",
        "Muslim immigrants may have different expectations",
      ],
      doList: [
        "Treat patients as equals — avoid hierarchical communication",
        "Be aware of SAD and its impact on mental health during winter",
        "Respect Sámi indigenous health practices and identity",
      ],
      dontList: [
        "Don't be overly formal or use excessive titles",
        "Don't assume homogeneity — Norway is increasingly diverse",
        "Don't ignore the health impacts of Arctic living conditions",
      ],
    },
    sources: [
      { label: "WHO Norway", url: "https://www.who.int/countries/nor" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Norway" },
    ],
  },
  {
    name: "Ukraine",
    isoCode: "ua",
    lat: 50.4,
    lng: 30.5,
    languages: ["Ukrainian", "Russian"],
    primaryLanguageFamily: "russian",
    religions: ["Orthodox Christianity", "Greek Catholicism", "Islam"],
    region: "Europe",
    cultural: {
      communication: [
        "Ukrainian preferred — Russian may be politically sensitive",
        "Formal address (pan/pani + name) shows respect",
        "Patients may be stoic about pain — underreporting common",
      ],
      familyDecisionMaking: [
        "Family involvement in healthcare decisions expected",
        "Babusya (grandmother) often the home health decision-maker",
        "War displacement has disrupted family support structures",
      ],
      religiousSpiritual: [
        "Orthodox Christian traditions influence end-of-life care",
        "Church holidays affect availability for appointments",
        "Holy water and blessed items may be brought to hospital",
      ],
      healthBeliefs: [
        "Strong tradition of herbal medicine and folk remedies",
        "Fear of drafts (protiah) believed to cause illness",
        "Distrust of government institutions may extend to state hospitals",
      ],
      genderContact: [
        "Women generally comfortable with male physicians",
        "Older generation may be more conservative about exposure",
        "No significant gender barriers in medical care",
      ],
      doList: [
        "Screen for war-related PTSD and displacement trauma",
        "Ask about language preference (Ukrainian vs Russian)",
        "Acknowledge stress from ongoing conflict sensitively",
      ],
      dontList: [
        "Don't assume political affiliations or ethnic identity",
        "Don't dismiss fear of drafts as superstition — acknowledge the concern",
        "Don't overlook the mental health impacts of displacement",
      ],
    },
    sources: [
      { label: "WHO Ukraine", url: "https://www.who.int/countries/ukr" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ukraine" },
    ],
  },

  // ─── AMERICAS ─────────────────────────────────────────────────────
  {
    name: "Chile",
    isoCode: "cl",
    lat: -33.4,
    lng: -70.6,
    languages: ["Spanish", "Mapudungun"],
    primaryLanguageFamily: "spanish",
    religions: ["Roman Catholicism", "Protestantism", "None/Secular"],
    region: "Latin America",
    cultural: {
      communication: [
        "Chilean Spanish uses unique slang (chilenismos) — may confuse non-Chilean Spanish speakers",
        "Personal space is closer than North American norms",
        "Politeness and warmth valued in medical interactions",
      ],
      familyDecisionMaking: [
        "Family involvement in health decisions expected but not dominant",
        "Individualism growing, especially among younger generations",
        "Mapuche patients may have distinct cultural decision-making patterns",
      ],
      religiousSpiritual: [
        "Catholic traditions decreasing but still influence elder care decisions",
        "Mapuche patients may consult machi (spiritual healers)",
        "Secular attitudes growing in urban areas",
      ],
      healthBeliefs: [
        "Herbal medicine (hierbas medicinales) widely used",
        "Strong public health infrastructure — universal coverage expected",
        "Mental health awareness increasing after social unrest (2019)",
      ],
      genderContact: [
        "Progressive gender attitudes in healthcare",
        "No significant barriers to cross-gender medical care",
        "LGBTQ+ health needs increasingly recognized",
      ],
      doList: [
        "Be aware of Chilean Spanish differences for clear communication",
        "Ask Mapuche patients about traditional medicine use",
        "Screen for stress and trauma from recent social upheavals",
      ],
      dontList: [
        "Don't assume universal Catholic practice",
        "Don't overlook indigenous health disparities",
        "Don't dismiss herbal remedy use — common across social classes",
      ],
    },
    sources: [
      { label: "WHO Chile", url: "https://www.who.int/countries/chl" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chile" },
    ],
  },
  {
    name: "Cuba",
    isoCode: "cu",
    lat: 23.1,
    lng: -82.4,
    languages: ["Spanish"],
    primaryLanguageFamily: "spanish",
    religions: ["Roman Catholicism", "Santería", "Protestantism"],
    region: "Caribbean",
    cultural: {
      communication: [
        "Cuban Spanish is rapid with dropped consonants",
        "Warm, expressive communication — physical affection common",
        "Patients may expect detailed explanations from doctors",
      ],
      familyDecisionMaking: [
        "Family is the core unit — health decisions are collective",
        "Multigenerational households are the norm",
        "Strong community support networks (CDR) provide informal care",
      ],
      religiousSpiritual: [
        "Santería (syncretic Yoruba-Catholic) practices common",
        "Babalawos (Santería priests) consulted for illness",
        "Catholic saints and Orishas may be invoked simultaneously",
      ],
      healthBeliefs: [
        "Cuba has excellent medical training — patients are health-literate",
        "Natural and green medicine (medicina verde) is government-supported",
        "Prevention-focused healthcare culture",
      ],
      genderContact: [
        "No significant gender barriers in healthcare",
        "Cuban medical system has high proportion of female doctors",
        "Open attitudes toward physical examination",
      ],
      doList: [
        "Acknowledge Cuba's strong medical tradition",
        "Ask about Santería practices that may affect treatment",
        "Discuss herbal remedies patients may be using",
      ],
      dontList: [
        "Don't be paternalistic — Cuban patients are often knowledgeable",
        "Don't dismiss Santería as mere superstition",
        "Don't overlook the mental health impact of emigration/family separation",
      ],
    },
    sources: [
      { label: "WHO Cuba", url: "https://www.who.int/countries/cub" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cuba" },
    ],
  },
  {
    name: "Jamaica",
    isoCode: "jm",
    lat: 18.0,
    lng: -76.8,
    languages: ["English", "Jamaican Patois (Creole)"],
    primaryLanguageFamily: "english",
    religions: ["Christianity (Protestant majority)", "Rastafari", "Revivalism"],
    region: "Caribbean",
    cultural: {
      communication: [
        "Jamaican Patois is the primary spoken language — English is official",
        "Directness valued but context-dependent",
        "Expressive communication with gestures and body language",
      ],
      familyDecisionMaking: [
        "Matrifocal family structures common",
        "Grandmother (Big Mama) often central to health decisions",
        "Extended family and community support networks are strong",
      ],
      religiousSpiritual: [
        "Christianity deeply embedded — prayer expected during illness",
        "Rastafari patients may have specific dietary/herbal needs (ital food)",
        "Obeah (folk magic) beliefs may influence health perceptions",
      ],
      healthBeliefs: [
        "Bush medicine (herbal remedies) widely used — cerasee, soursop leaf",
        "Strong preference for natural remedies before pharmaceuticals",
        "Mental health stigma significant — 'madness' is a feared label",
      ],
      genderContact: [
        "Generally no significant barriers to cross-gender medical care",
        "Homophobia affects LGBTQ+ patients' willingness to seek care",
        "Women are generally empowered in healthcare decisions",
      ],
      doList: [
        "Ask about bush medicines being used alongside treatment",
        "Use plain language — medical jargon may not translate to Patois",
        "Create safe spaces for LGBTQ+ patients to discuss health concerns",
      ],
      dontList: [
        "Don't mock or dismiss Patois — it's a legitimate language",
        "Don't ignore the impact of homophobia on patient disclosure",
        "Don't assume all Rastafari patients use marijuana — ask respectfully",
      ],
    },
    sources: [
      { label: "WHO Jamaica", url: "https://www.who.int/countries/jam" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jamaica" },
    ],
  },
  {
    name: "Haiti",
    isoCode: "ht",
    lat: 18.5,
    lng: -72.3,
    languages: ["Haitian Creole", "French"],
    primaryLanguageFamily: "french",
    religions: ["Roman Catholicism", "Protestantism", "Vodou"],
    region: "Caribbean",
    cultural: {
      communication: [
        "Haitian Creole is the universal language — French is formal/elite",
        "Storytelling and proverbs used to convey health concepts",
        "Respect for authority — patients may not question the doctor",
      ],
      familyDecisionMaking: [
        "Extended family and community deeply involved in health decisions",
        "Eldest family member or community leader may be spokesperson",
        "Collectivist culture — individual decisions are rare",
      ],
      religiousSpiritual: [
        "Vodou is a legitimate religion — not to be conflated with Hollywood depictions",
        "Houngan/mambo (Vodou priests) serve as healers",
        "Catholic and Vodou practices are commonly blended",
      ],
      healthBeliefs: [
        "Illness may be classified as 'natural' (maladi Bondye) or 'supernatural' (maladi moun)",
        "Herbal medicine (medsin fey) is primary healthcare for many",
        "Move sèng (bad blood) concept influences understanding of many conditions",
      ],
      genderContact: [
        "Women may be modest — provide draping and same-gender care when possible",
        "Gender-based violence is a significant health concern",
        "Male caregivers may be reluctant to discuss reproductive health",
      ],
      doList: [
        "Communicate in Haitian Creole, not French, for comprehension",
        "Respect Vodou beliefs — they are central to many patients' worldviews",
        "Screen for trauma related to natural disasters and political instability",
      ],
      dontList: [
        "Don't call Vodou 'voodoo' or treat it dismissively",
        "Don't assume French proficiency — most speak only Creole",
        "Don't overlook food insecurity as a barrier to medication adherence",
      ],
    },
    sources: [
      { label: "WHO Haiti", url: "https://www.who.int/countries/hti" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Haiti" },
    ],
  },
  {
    name: "Ecuador",
    isoCode: "ec",
    lat: -0.2,
    lng: -78.5,
    languages: ["Spanish", "Kichwa", "Shuar"],
    primaryLanguageFamily: "spanish",
    religions: ["Roman Catholicism", "Protestantism", "Indigenous beliefs"],
    region: "Latin America",
    cultural: {
      communication: [
        "Spanish with Andean influences — some Kichwa loanwords common",
        "Warm personal greetings expected before medical discussion",
        "Indigenous patients may use interpreters for Kichwa/Shuar",
      ],
      familyDecisionMaking: [
        "Family-centered decision-making across all ethnic groups",
        "Indigenous communities may require community consensus",
        "Compadrazgo (godparent system) creates extended support",
      ],
      religiousSpiritual: [
        "Catholic traditions blended with indigenous Pachamama beliefs",
        "Yachak (indigenous healers) perform limpia (cleansing) ceremonies",
        "Spiritual health considered inseparable from physical health",
      ],
      healthBeliefs: [
        "Hot/cold food and illness classification common",
        "Traditional remedies (agua de hierbas) used extensively",
        "Mal aire (bad air) and susto (fright) are cultural illness concepts",
      ],
      genderContact: [
        "Conservative gender norms in rural/indigenous communities",
        "Women may need partner's permission for certain procedures",
        "Male modesty also important — not only female patients",
      ],
      doList: [
        "Ask about traditional medicines and ceremonies being used",
        "Provide interpreters for indigenous language speakers",
        "Understand the hot/cold classification system for food counseling",
      ],
      dontList: [
        "Don't dismiss susto or mal aire — acknowledge cultural illness models",
        "Don't overlook altitude-related health issues in highland patients",
        "Don't assume all Ecuadorians are mestizo — significant indigenous population",
      ],
    },
    sources: [
      { label: "WHO Ecuador", url: "https://www.who.int/countries/ecu" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ecuador" },
    ],
  },

  // ─── OCEANIA ──────────────────────────────────────────────────────
  {
    name: "New Zealand",
    isoCode: "nz",
    lat: -41.3,
    lng: 174.8,
    languages: ["English", "Te Reo Māori", "NZ Sign Language"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "None/Secular", "Hinduism", "Islam", "Buddhism"],
    region: "Oceania",
    cultural: {
      communication: [
        "Kia ora is a universal greeting — shows cultural awareness",
        "Māori patients may begin with whakawhanaungatanga (establishing connection)",
        "Understated communication style — Kiwis downplay symptoms",
      ],
      familyDecisionMaking: [
        "Whānau (family) is central to Māori health decisions",
        "Pākehā (European NZ) families tend toward individual autonomy",
        "Pacific Islander families have collective decision structures",
      ],
      religiousSpiritual: [
        "Secular for many, but Māori spirituality (wairua) is important",
        "Tapu (sacred/forbidden) and noa (ordinary) concepts affect care",
        "Pacific Islander patients may be devout Christians",
      ],
      healthBeliefs: [
        "Māori health model (Te Whare Tapa Whā) — four dimensions of wellbeing",
        "Rongoā (Māori traditional medicine) uses native plants",
        "Strong public health infrastructure with equity focus",
      ],
      genderContact: [
        "Progressive gender attitudes in healthcare",
        "LGBTQ+ health needs well-recognized",
        "Cultural sensitivity needed for Māori tikanga (customs) around death",
      ],
      doList: [
        "Learn basic Te Reo greetings (Kia ora, whānau)",
        "Apply Te Whare Tapa Whā model for holistic Māori care",
        "Address health equity for Māori and Pacific peoples proactively",
      ],
      dontList: [
        "Don't sit on tables or place food near heads — disrespects tapu",
        "Don't assume all New Zealanders share the same cultural background",
        "Don't overlook the health disparities facing indigenous communities",
      ],
    },
    sources: [
      { label: "WHO New Zealand", url: "https://www.who.int/countries/nzl" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/New_Zealand" },
    ],
  },
  {
    name: "Fiji",
    isoCode: "fj",
    lat: -18.1,
    lng: 178.4,
    languages: ["English", "Fijian (iTaukei)", "Fiji Hindi"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Hinduism", "Islam"],
    region: "Oceania",
    cultural: {
      communication: [
        "Bula! is the universal greeting — warm and essential",
        "Hierarchical respect (chiefs, elders) must be observed",
        "Indirect communication preferred — direct refusals rare",
      ],
      familyDecisionMaking: [
        "Village chief (turaga ni koro) may be consulted for major decisions",
        "Indo-Fijian families follow patriarchal structures",
        "iTaukei (indigenous) families are communal in decision-making",
      ],
      religiousSpiritual: [
        "Christianity dominant among iTaukei — church leaders influential",
        "Hindu and Muslim Indo-Fijian communities have distinct needs",
        "Traditional beliefs about mana (spiritual power) persist",
      ],
      healthBeliefs: [
        "Traditional Fijian medicine (wainimate) uses local plants",
        "Kava (yaqona) is culturally significant — may interact with medications",
        "Non-communicable diseases (diabetes, heart disease) are major concerns",
      ],
      genderContact: [
        "Modest dress expected, especially in villages",
        "Gender interactions generally relaxed in clinical settings",
        "Indo-Fijian women may prefer female healthcare providers",
      ],
      doList: [
        "Greet with 'Bula' — it establishes immediate rapport",
        "Ask about kava consumption — it has medical interactions",
        "Acknowledge ethnic diversity (iTaukei, Indo-Fijian, others)",
      ],
      dontList: [
        "Don't touch someone's head — it's considered sacred",
        "Don't refuse kava if offered in a cultural ceremony (take a small sip)",
        "Don't wear hats in villages — it's disrespectful",
      ],
    },
    sources: [
      { label: "WHO Fiji", url: "https://www.who.int/countries/fji" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fiji" },
    ],
  },

  // ─── CENTRAL ASIA ─────────────────────────────────────────────────
  {
    name: "Kazakhstan",
    isoCode: "kz",
    lat: 51.2,
    lng: 71.4,
    languages: ["Kazakh", "Russian"],
    primaryLanguageFamily: "russian",
    religions: ["Islam (Sunni)", "Russian Orthodox Christianity", "None/Secular"],
    region: "Central Asia",
    cultural: {
      communication: [
        "Kazakh is state language; Russian widely used in cities",
        "Hospitality (konakasy) is paramount — always offer tea",
        "Respect for elders (ata-ana) central to all interactions",
      ],
      familyDecisionMaking: [
        "Patriarchal family structures with strong clan (zhuz) identities",
        "Eldest son traditionally carries family health responsibilities",
        "Bride kidnapping legacy affects women's autonomy in rural areas",
      ],
      religiousSpiritual: [
        "Islam is moderate and blended with nomadic traditions",
        "Shamanic practices (baqsy) still present in rural regions",
        "Nauryz (spring festival) has spiritual renewal significance",
      ],
      healthBeliefs: [
        "Kumis (fermented mare's milk) believed to have healing properties",
        "Traditional bonesetters (sınıqshı) widely consulted",
        "Soviet-era medical training influences patient expectations of care",
      ],
      genderContact: [
        "Relatively moderate — no strict gender separation",
        "Rural women may prefer female doctors for gynecological care",
        "Handshaking common between men; women may place hand on heart instead",
      ],
      doList: [
        "Accept tea when offered — refusal is rude",
        "Ask about traditional remedies (kumis, herbal teas) in use",
        "Show respect for age hierarchy in family consultations",
      ],
      dontList: [
        "Don't assume Russian-speaking Kazakhs don't identify as Kazakh",
        "Don't overlook nomadic heritage in understanding health behaviors",
        "Don't dismiss bonesetter consultations — integrate into care planning",
      ],
    },
    sources: [
      { label: "WHO Kazakhstan", url: "https://www.who.int/countries/kaz" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kazakhstan" },
    ],
  },
  {
    name: "Uzbekistan",
    isoCode: "uz",
    lat: 41.3,
    lng: 69.3,
    languages: ["Uzbek", "Russian", "Tajik"],
    primaryLanguageFamily: "other",
    religions: ["Islam (Sunni)", "Russian Orthodox Christianity"],
    region: "Central Asia",
    cultural: {
      communication: [
        "Uzbek is primary; Russian still used in professional settings",
        "Elaborate greetings and inquiries about family health expected",
        "Respect hierarchy — use titles and patronymics",
      ],
      familyDecisionMaking: [
        "Strong patriarchal structures — father or eldest son decides",
        "Mahalla (neighborhood community) provides social support",
        "Bride's family may defer health decisions to groom's family",
      ],
      religiousSpiritual: [
        "Islam is central but practiced moderately",
        "Sufism and shrines (mazar) visited for healing",
        "Ramadan fasting observed — adjust medication schedules",
      ],
      healthBeliefs: [
        "Avicenna's (Ibn Sina) medical tradition still referenced culturally",
        "Traditional remedies from Central Asian pharmacopoeia common",
        "Mental health heavily stigmatized — somatic presentations common",
      ],
      genderContact: [
        "Women in conservative areas prefer female doctors",
        "Male family member may accompany women to appointments",
        "Physical modesty important during examinations",
      ],
      doList: [
        "Greet with warmth and ask about family before medical discussion",
        "Involve male family members in treatment discussions when appropriate",
        "Be aware of post-Soviet healthcare expectations",
      ],
      dontList: [
        "Don't discuss sensitive topics without building rapport first",
        "Don't overlook the influence of mahalla on health behaviors",
        "Don't assume all Uzbeks are fluent in Russian",
      ],
    },
    sources: [
      { label: "WHO Uzbekistan", url: "https://www.who.int/countries/uzb" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Uzbekistan" },
    ],
  },

  // ─── ADDITIONAL AFRICA ────────────────────────────────────────────
  {
    name: "South Sudan",
    isoCode: "ss2",
    lat: 4.9,
    lng: 31.6,
    languages: ["English", "Arabic", "Dinka", "Nuer", "Zande"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Indigenous beliefs"],
    region: "East Africa",
    cultural: {
      communication: [
        "English is official but Dinka and Nuer are widely spoken",
        "Tribal identity strongly influences communication norms",
        "Oral tradition dominant — use visual aids for health education",
      ],
      familyDecisionMaking: [
        "Clan elders make collective decisions on health matters",
        "Cattle wealth determines social status and bride price — affects family dynamics",
        "Women have limited decision-making authority in traditional settings",
      ],
      religiousSpiritual: [
        "Christianity growing rapidly; indigenous beliefs still prevalent",
        "Spiritual healers (tiit) consulted for unexplained illness",
        "Animal sacrifice may accompany healing rituals",
      ],
      healthBeliefs: [
        "Traditional medicine primary in most rural areas",
        "Scarification marks may indicate tribal healing practices",
        "War-related trauma is pervasive — PTSD screening essential",
      ],
      genderContact: [
        "Conservative gender norms in most communities",
        "Female patients strongly prefer female healthcare providers",
        "FGM/C practiced in some areas — handle with sensitivity",
      ],
      doList: [
        "Learn about tribal affiliations to build trust",
        "Screen all patients for war trauma and displacement stress",
        "Use interpreters for Dinka, Nuer, or other local languages",
      ],
      dontList: [
        "Don't discuss tribal conflicts in clinical settings",
        "Don't assume English proficiency outside urban areas",
        "Don't overlook malnutrition as a co-morbidity",
      ],
    },
    sources: [
      { label: "WHO South Sudan", url: "https://www.who.int/countries/ssd" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/South_Sudan" },
    ],
  },
  {
    name: "Eswatini",
    isoCode: "sz2",
    lat: -26.3,
    lng: 31.1,
    languages: ["Swazi (siSwati)", "English"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Swazi traditional religion"],
    region: "Southern Africa",
    cultural: {
      communication: [
        "SiSwati is the primary language; English used officially",
        "Monarchy deeply respected — King is central to national identity",
        "Indirect communication preferred; directness may seem rude",
      ],
      familyDecisionMaking: [
        "Extended family and clan structures determine decisions",
        "Polygamy is practiced — multiple wives may be involved in care",
        "Chief (indvuna) may be consulted for community health matters",
      ],
      religiousSpiritual: [
        "Syncretism of Christianity and traditional Swazi beliefs",
        "Sangomas and tinyanga (traditional healers) widely consulted",
        "Ancestral communication through rituals influences health behavior",
      ],
      healthBeliefs: [
        "HIV/AIDS prevalence is among world's highest — destigmatization crucial",
        "Traditional medicine first-line for many conditions",
        "Umhlanga (Reed Dance) and cultural ceremonies impact health schedules",
      ],
      genderContact: [
        "Women's rights limited in traditional settings",
        "Female patients may need male guardian approval for procedures",
        "Modest dress expected during medical interactions",
      ],
      doList: [
        "Approach HIV/AIDS discussions with sensitivity and normalcy",
        "Engage traditional healers as part of the care team",
        "Respect royal and clan structures in patient interactions",
      ],
      dontList: [
        "Don't stigmatize HIV status — widespread prevalence means normalization",
        "Don't dismiss sangoma consultations",
        "Don't criticize cultural practices directly — work within them",
      ],
    },
    sources: [
      { label: "WHO Eswatini", url: "https://www.who.int/countries/swz" },
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eswatini" },
    ],
  },
];
