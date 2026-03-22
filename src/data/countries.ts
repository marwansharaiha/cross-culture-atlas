/**
 * MedGlobe Country Data
 *
 * HOW TO ADD MORE COUNTRIES:
 * 1. Copy one of the existing country objects below
 * 2. Update the isoCode (ISO 3166-1 alpha-2), name, coordinates (capital city lat/lng)
 * 3. Fill in languages, religions, region, primaryLanguageFamily
 * 4. Add cultural sections — use open sources like:
 *    - Wikipedia: https://en.wikipedia.org/wiki/Culture_of_[COUNTRY]
 *    - CDC Cultural Competence: https://www.cdc.gov/healthcommunication/
 *    - WHO: https://www.who.int/
 *    - EthnoMed: https://ethnomed.org/
 *    - Culture Crossing Guide: http://guide.culturecrossing.net/
 * 5. All flag images come from https://flagcdn.com/w320/{isoCode}.png (free, open)
 */

export type LanguageFamily =
  | "english" | "spanish" | "arabic" | "mandarin" | "hindi"
  | "french" | "portuguese" | "russian" | "japanese" | "korean"
  | "malay" | "turkish" | "thai" | "german" | "other";

export interface CulturalSection {
  communication: string[];
  familyDecisionMaking: string[];
  religiousSpiritual: string[];
  healthBeliefs: string[];
  genderContact: string[];
  doList: string[];
  dontList: string[];
}

export interface CountryData {
  name: string;
  isoCode: string;
  lat: number;
  lng: number;
  languages: string[];
  primaryLanguageFamily: LanguageFamily;
  religions: string[];
  region: string;
  cultural: CulturalSection;
  sources: { label: string; url: string }[];
}

export const LANGUAGE_FAMILIES: { key: LanguageFamily; label: string; color: string }[] = [
  { key: "english", label: "English", color: "hsl(220,70%,45%)" },
  { key: "spanish", label: "Spanish", color: "hsl(30,90%,50%)" },
  { key: "arabic", label: "Arabic", color: "hsl(160,70%,35%)" },
  { key: "mandarin", label: "Mandarin", color: "hsl(0,70%,50%)" },
  { key: "hindi", label: "Hindi", color: "hsl(270,60%,50%)" },
  { key: "french", label: "French", color: "hsl(180,60%,35%)" },
  { key: "portuguese", label: "Portuguese", color: "hsl(45,80%,45%)" },
  { key: "russian", label: "Russian", color: "hsl(340,50%,45%)" },
  { key: "japanese", label: "Japanese", color: "hsl(310,50%,50%)" },
  { key: "korean", label: "Korean", color: "hsl(200,50%,50%)" },
  { key: "malay", label: "Malay / Indonesian", color: "hsl(90,50%,40%)" },
  { key: "turkish", label: "Turkish", color: "hsl(15,70%,50%)" },
  { key: "thai", label: "Thai", color: "hsl(280,40%,45%)" },
  { key: "german", label: "German", color: "hsl(50,50%,40%)" },
  { key: "other", label: "Other", color: "hsl(200,20%,50%)" },
];

export const countries: CountryData[] = [
  {
    name: "United States",
    isoCode: "us",
    lat: 38.9, lng: -77.0,
    languages: ["English", "Spanish"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Judaism", "Islam", "None/Secular"],
    region: "North America",
    cultural: {
      communication: [
        "Direct communication style preferred — patients expect clear explanations of diagnosis and prognosis",
        "Eye contact is valued as a sign of attentiveness and honesty",
        "Use first names only after the patient invites you to do so",
        "Written consent forms are standard and legally required for procedures",
        "Patients expect to participate actively in treatment decisions (shared decision-making model)"
      ],
      familyDecisionMaking: [
        "Autonomy-focused — the patient is usually the primary decision-maker",
        "HIPAA regulations limit what can be shared with family without patient consent",
        "Advance directives and living wills are common and legally binding",
        "Some cultural subgroups (Hispanic, Asian-American) may prefer family-centered decisions"
      ],
      religiousSpiritual: [
        "Hospital chaplains are widely available and can be requested for any faith",
        "Some patients may decline blood products (e.g. Jehovah's Witnesses)",
        "Christian patients may request prayer or anointing of the sick",
        "Jewish patients may observe Shabbat (Friday sundown – Saturday sundown) — avoid elective procedures",
        "Muslim patients may request halal food and prayer accommodations"
      ],
      healthBeliefs: [
        "Evidence-based medicine is mainstream but complementary/alternative medicine use is significant",
        "Mental health stigma is decreasing but still present, especially among older adults and certain communities",
        "Pain is typically expressed openly; pain scales are standard practice",
        "Opioid crisis awareness makes pain management conversations sensitive",
        "Anti-vaccination sentiment exists in pockets — approach with empathy, not condescension"
      ],
      genderContact: [
        "Cross-gender examinations are common but always offer a chaperone",
        "Transgender patients should be addressed by their preferred name and pronouns",
        "Handshakes are standard greetings regardless of gender",
        "Intimate examinations require explicit verbal consent"
      ],
      doList: [
        "Explain procedures in plain language (avoid medical jargon)",
        "Provide written materials and after-visit summaries",
        "Ask about advance directives early in the care relationship",
        "Offer interpreter services for non-English speakers (legally required)"
      ],
      dontList: [
        "Don't assume English proficiency based on appearance",
        "Don't use family members as medical interpreters for sensitive topics",
        "Don't dismiss requests for complementary medicine outright",
        "Don't assume all Americans share the same cultural background"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of the United States", url: "https://en.wikipedia.org/wiki/Culture_of_the_United_States" },
      { label: "CDC Cultural Competence", url: "https://www.cdc.gov/healthcommunication/" }
    ]
  },
  {
    name: "United Kingdom",
    isoCode: "gb",
    lat: 51.5, lng: -0.1,
    languages: ["English", "Welsh", "Scots Gaelic"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Hinduism", "Sikhism", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Polite, indirect communication — 'quite concerned' may mean 'very worried'",
        "Patients may downplay symptoms out of politeness — probe gently",
        "Use formal titles (Mr, Mrs, Dr) until invited otherwise",
        "The NHS culture means patients are generally deferential but increasingly informed"
      ],
      familyDecisionMaking: [
        "Patient autonomy is central but family involvement is welcomed",
        "Next of kin is formally designated for incapacitated patients",
        "South Asian families in the UK often prefer collective decision-making"
      ],
      religiousSpiritual: [
        "Multi-faith chaplaincy widely available in NHS hospitals",
        "Muslim patients: modesty, halal food, Ramadan fasting considerations",
        "Sikh patients may wish to keep the 5 Ks (articles of faith) — avoid cutting hair without consent",
        "Hindu patients may prefer vegetarian meals and may use Ayurvedic remedies alongside"
      ],
      healthBeliefs: [
        "Strong trust in NHS but long wait times shape attitudes",
        "Mental health awareness is growing; talking therapies widely accepted",
        "Stiff upper lip culture may lead to late presentation of symptoms",
        "Traditional remedies from immigrant communities should be explored respectfully"
      ],
      genderContact: [
        "Same-gender clinician preference is accommodated when possible, especially for intimate exams",
        "Handshakes are standard but some Muslim women may prefer not to shake hands with men"
      ],
      doList: [
        "Be mindful of the understatement — 'a bit unwell' may mean seriously ill",
        "Respect queuing and appointment times — punctuality matters",
        "Offer tea — it's a genuine comfort measure"
      ],
      dontList: [
        "Don't rush consultations even under time pressure",
        "Don't assume religious affiliation or dietary needs",
        "Don't overlook the diverse backgrounds within 'British' identity"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of the United Kingdom", url: "https://en.wikipedia.org/wiki/Culture_of_the_United_Kingdom" },
      { label: "NHS Cultural Competence Resources", url: "https://www.england.nhs.uk/" }
    ]
  },
  {
    name: "Mexico",
    isoCode: "mx",
    lat: 19.4, lng: -99.1,
    languages: ["Spanish", "Nahuatl", "Maya"],
    primaryLanguageFamily: "spanish",
    religions: ["Roman Catholicism", "Protestantism", "Indigenous beliefs"],
    region: "Latin America",
    cultural: {
      communication: [
        "Warm, personal communication style — build rapport before clinical discussion (personalismo)",
        "Indirect communication is common; patients may agree to appear polite even if they don't fully understand",
        "Use formal address (Señor/Señora) and professional titles",
        "Simpatía — maintaining harmony is important; avoid confrontational language"
      ],
      familyDecisionMaking: [
        "Family-centered decision-making (familismo) — include family in discussions",
        "The eldest male or mother often plays a key role in health decisions",
        "Children may be present during consultations and are rarely excluded"
      ],
      religiousSpiritual: [
        "Strong Catholic faith — saints, prayer, and religious medals are common at bedside",
        "End-of-life: Last Rites (Anointing of the Sick) may be requested urgently",
        "Some indigenous communities blend Catholic and traditional spiritual practices (curanderismo)",
        "Fatalism (es la voluntad de Dios — it's God's will) may influence acceptance of illness"
      ],
      healthBeliefs: [
        "Hot/cold illness theory (humoral medicine) is common — certain foods and remedies are classified as hot or cold",
        "Susto (fright), mal de ojo (evil eye), empacho (blocked digestion) are folk illnesses taken seriously",
        "Herbal remedies (remedios caseros) are widely used and should be asked about",
        "Mental health stigma is significant, especially for men"
      ],
      genderContact: [
        "Modesty is valued, especially for women — always offer a chaperone",
        "Machismo culture may make male patients reluctant to show vulnerability",
        "Female patients may prefer female clinicians for gynecological exams"
      ],
      doList: [
        "Spend time on greetings and small talk before the consultation",
        "Ask about herbal and traditional remedies without judgment",
        "Include family members in care discussions",
        "Use 'teach-back' to confirm understanding"
      ],
      dontList: [
        "Don't interpret agreement as true understanding — verify comprehension",
        "Don't dismiss folk illness concepts; work within the patient's framework",
        "Don't exclude family from the bedside unless the patient requests it",
        "Don't assume Spanish proficiency — indigenous languages may be primary"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Mexico", url: "https://en.wikipedia.org/wiki/Culture_of_Mexico" },
      { label: "EthnoMed — Mexican Health Beliefs", url: "https://ethnomed.org/" }
    ]
  },
  {
    name: "Brazil",
    isoCode: "br",
    lat: -15.8, lng: -47.9,
    languages: ["Portuguese"],
    primaryLanguageFamily: "portuguese",
    religions: ["Roman Catholicism", "Protestantism", "Spiritism", "Afro-Brazilian religions"],
    region: "Latin America",
    cultural: {
      communication: [
        "Warm, expressive, and tactile communication — touch (pats, handholding) is common and welcomed",
        "Relationships are built before business — personal warmth is essential",
        "Brazilians may say 'yes' to be polite; use open-ended questions to confirm understanding"
      ],
      familyDecisionMaking: [
        "Strong family involvement in healthcare decisions",
        "Extended family may visit in large numbers — accommodate when possible",
        "Elderly parents are highly respected and their opinions carry weight"
      ],
      religiousSpiritual: [
        "Catholic traditions are strong; saints and prayer are central to coping",
        "Spiritism (Kardecism) is widespread — belief in spiritual healing and past lives",
        "Afro-Brazilian religions (Candomblé, Umbanda) may involve rituals, herbs, and spiritual baths",
        "Patients may simultaneously use medical and spiritual healing without contradiction"
      ],
      healthBeliefs: [
        "Jeitinho brasileiro — creative problem-solving extends to health; patients may self-medicate",
        "Pharmacies commonly sell antibiotics without prescription (though regulations are tightening)",
        "Mental health stigma is decreasing in urban areas but strong in rural communities",
        "Traditional and herbal remedies (chás — teas) are widely used"
      ],
      genderContact: [
        "Physical contact in greetings (kisses on cheek) is normal — don't pull away",
        "Brazilian culture is relatively open about bodies, but modesty should still be respected in clinical settings",
        "LGBTQ+ rights are legally protected; healthcare should be inclusive"
      ],
      doList: [
        "Be warm, personal, and unhurried in consultations",
        "Ask about spiritual practices and herbal remedies",
        "Welcome family presence during hospitalizations"
      ],
      dontList: [
        "Don't be overly formal or cold — it creates distance",
        "Don't dismiss Spiritist or Afro-Brazilian healing practices",
        "Don't assume all Brazilians speak Spanish"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Brazil", url: "https://en.wikipedia.org/wiki/Culture_of_Brazil" },
      { label: "WHO Brazil Country Profile", url: "https://www.who.int/countries/bra" }
    ]
  },
  {
    name: "Saudi Arabia",
    isoCode: "sa",
    lat: 24.7, lng: 46.7,
    languages: ["Arabic"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni majority, Shia minority)"],
    region: "Middle East",
    cultural: {
      communication: [
        "Greet with 'Assalamu Alaikum' (peace be upon you) — deeply appreciated",
        "Indirect communication style — bad news should be delivered gradually, often through a family spokesperson",
        "Right hand is used for giving and receiving — the left is considered unclean",
        "Eye contact norms differ by gender; avoid sustained eye contact with opposite-gender patients"
      ],
      familyDecisionMaking: [
        "The senior male family member often serves as the primary decision-maker",
        "Family conferences are expected before major medical decisions",
        "Patients may defer prognosis conversations to family members",
        "Do not disclose terminal diagnoses directly to the patient without family consultation first"
      ],
      religiousSpiritual: [
        "Islam governs daily life: 5 daily prayers (accommodate timing and direction — Qibla faces Mecca)",
        "Ramadan fasting may affect medication compliance — discuss alternative schedules",
        "Pork-derived medications (e.g., some insulin, heparin, gelatin capsules) may be refused",
        "Islamic end-of-life: death is God's will; autopsy and organ donation views vary",
        "Same-gender care providers are strongly preferred, especially for women",
        "Ritual washing of the body after death is essential — coordinate with the family"
      ],
      healthBeliefs: [
        "Ruqyah (Quranic healing recitation) is commonly practiced alongside medical treatment",
        "Hijama (cupping therapy) is a Prophetic tradition still widely used",
        "Mental illness may be attributed to jinn (spirits) or evil eye — approach with sensitivity",
        "Traditional Arabic medicine (honey, black seed, zamzam water) is trusted"
      ],
      genderContact: [
        "Strict gender segregation in clinical settings is expected",
        "Male doctors should not examine female patients alone — a female nurse or family member must be present",
        "Never shake hands with the opposite gender unless they initiate",
        "Women may be fully veiled (niqab) — ask permission before requesting removal for examination"
      ],
      doList: [
        "Provide prayer mats and indicate Qibla direction in hospital rooms",
        "Offer halal food options",
        "Allow family involvement in all medical discussions",
        "Respect prayer times — schedule procedures around them when possible"
      ],
      dontList: [
        "Don't serve or prescribe pork-derived products without discussing alternatives",
        "Don't conduct opposite-gender examinations without a chaperone",
        "Don't break bad news directly — involve family first",
        "Don't schedule non-urgent procedures during Ramadan if the patient is fasting"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Saudi Arabia", url: "https://en.wikipedia.org/wiki/Culture_of_Saudi_Arabia" },
      { label: "WHO Eastern Mediterranean", url: "https://www.emro.who.int/" }
    ]
  },
  {
    name: "India",
    isoCode: "in",
    lat: 28.6, lng: 77.2,
    languages: ["Hindi", "English", "Bengali", "Telugu", "Tamil", "Urdu"],
    primaryLanguageFamily: "hindi",
    religions: ["Hinduism", "Islam", "Christianity", "Sikhism", "Buddhism", "Jainism"],
    region: "South Asia",
    cultural: {
      communication: [
        "Head wobble (side-to-side) can mean yes, acknowledgment, or understanding — not disagreement",
        "Hierarchical communication — patients may not question doctors out of respect",
        "Use formal titles; avoid first names unless invited",
        "Silence may indicate respect or discomfort, not agreement"
      ],
      familyDecisionMaking: [
        "Strongly family-centered; the eldest male or family patriarch often makes decisions",
        "Joint family involvement is expected and welcomed",
        "In some communities, the husband makes decisions for the wife's healthcare",
        "Elderly care decisions involve the entire extended family"
      ],
      religiousSpiritual: [
        "Hindu patients may follow dietary restrictions (vegetarianism is common, especially no beef)",
        "Muslim patients (14% of population) follow halal requirements and prayer schedules",
        "Sikh patients' articles of faith (turban, kara bracelet) should not be removed without discussion",
        "Ayurveda, Yoga, Unani, Siddha, and Homeopathy (AYUSH) are government-recognized systems",
        "Fasting for religious occasions is common and may affect treatment plans"
      ],
      healthBeliefs: [
        "Ayurvedic concepts of doshas (Vata, Pitta, Kapha) influence health beliefs",
        "Hot/cold food theory is prevalent — postpartum women may avoid 'cold' foods",
        "Mental illness carries significant stigma — may be attributed to karma or spiritual causes",
        "Pain may be expressed stoically as a virtue; assess pain actively",
        "Traditional bone-setters and faith healers are often consulted before modern medicine"
      ],
      genderContact: [
        "Modesty is paramount, especially for women — always provide gowns and draping",
        "Same-gender clinicians preferred for intimate examinations",
        "Namaste (palms together) is a respectful greeting that avoids physical contact",
        "In some communities, women may not speak directly to male doctors"
      ],
      doList: [
        "Greet with Namaste — it shows respect across all religions",
        "Ask about dietary restrictions related to religion and region",
        "Include family in care discussions from the outset",
        "Ask about Ayurvedic or traditional remedies being used concurrently"
      ],
      dontList: [
        "Don't serve beef to Hindu patients or pork to Muslim patients",
        "Don't remove religious items (sacred threads, turbans) without permission",
        "Don't assume Hindi is spoken — India has 22 official languages",
        "Don't dismiss traditional medicine systems — integrate them respectfully"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of India", url: "https://en.wikipedia.org/wiki/Culture_of_India" },
      { label: "WHO India", url: "https://www.who.int/countries/ind" }
    ]
  },
  {
    name: "China",
    isoCode: "cn",
    lat: 39.9, lng: 116.4,
    languages: ["Mandarin Chinese", "Cantonese", "Wu", "Min"],
    primaryLanguageFamily: "mandarin",
    religions: ["Buddhism", "Taoism", "Folk religion", "None/Secular"],
    region: "East Asia",
    cultural: {
      communication: [
        "Indirect communication — saving face (miànzi) is paramount",
        "Patients may agree to treatment plans they don't intend to follow to avoid confrontation",
        "Silence indicates contemplation, not confusion or agreement",
        "Avoid asking questions that force a direct 'no' — offer alternatives instead"
      ],
      familyDecisionMaking: [
        "Filial piety (xiào) dictates that children care for aging parents",
        "Family may shield patients from terminal diagnoses to protect hope",
        "The eldest son often takes the lead in medical decisions",
        "Group consensus is preferred over individual autonomy"
      ],
      religiousSpiritual: [
        "Many Chinese identify as non-religious but follow Buddhist/Taoist customs",
        "Ancestor veneration is common — respect for the deceased affects end-of-life decisions",
        "Feng shui principles may influence preferences for bed placement and room orientation",
        "Burning incense or paper offerings may be requested at end of life"
      ],
      healthBeliefs: [
        "Traditional Chinese Medicine (TCM) — acupuncture, herbal medicine, qi gong — is widely practiced alongside Western medicine",
        "Yin-yang balance and qi flow are core health concepts",
        "Hot/cold food theory: illness = imbalance; diet adjusts accordingly",
        "Mental health stigma is very high — somatization is common",
        "Cupping and gua sha marks should not be mistaken for signs of abuse"
      ],
      genderContact: [
        "Modesty is valued but less strict than in some other Asian cultures",
        "Same-gender providers preferred for intimate examinations",
        "Physical contact should be minimal and professional"
      ],
      doList: [
        "Ask about TCM remedies — drug interactions are a real concern",
        "Involve family early and respect their role in information sharing",
        "Use visual aids and written instructions (Chinese characters when possible)",
        "Be aware of cupping/gua sha marks — document, don't report unless indicated"
      ],
      dontList: [
        "Don't force direct disclosure of terminal diagnoses without family input",
        "Don't dismiss TCM practices — work collaboratively",
        "Don't interpret smiling or nodding as full comprehension",
        "Don't point with one finger — use an open palm"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of China", url: "https://en.wikipedia.org/wiki/Culture_of_China" },
      { label: "WHO China", url: "https://www.who.int/countries/chn" }
    ]
  },
  {
    name: "Japan",
    isoCode: "jp",
    lat: 35.7, lng: 139.7,
    languages: ["Japanese"],
    primaryLanguageFamily: "japanese",
    religions: ["Shinto", "Buddhism", "None/Secular"],
    region: "East Asia",
    cultural: {
      communication: [
        "Highly indirect and formal communication — read between the lines",
        "Bowing is the standard greeting; depth indicates respect level",
        "Patients are unlikely to ask questions or express disagreement with doctors (authority respect)",
        "Meishi (business cards) are exchanged with both hands and treated with reverence"
      ],
      familyDecisionMaking: [
        "Historically paternalistic but shifting toward shared decision-making",
        "Family may prefer to receive bad news first and decide what to share with patient",
        "Adult children often manage elderly parents' medical care"
      ],
      religiousSpiritual: [
        "Most Japanese practice a blend of Shinto and Buddhist traditions",
        "Death rituals are predominantly Buddhist — cremation is standard",
        "O-mamori (protective charms) may be kept at bedside; do not remove",
        "Sennin-bari (thousand-stitch belt) and other amulets have spiritual significance"
      ],
      healthBeliefs: [
        "Kampo (Japanese herbal medicine) is prescribed by physicians and covered by insurance",
        "Onsen (hot spring) therapy is culturally valued for healing",
        "Mental health stigma is very high — depression may present as physical complaints",
        "Cancer disclosure was historically avoided; now evolving but still sensitive",
        "High expectation of cleanliness and hygiene in medical settings"
      ],
      genderContact: [
        "Modesty is important — provide adequate draping and privacy",
        "Physical contact is minimal; avoid unnecessary touch",
        "Bowing replaces handshakes in most situations"
      ],
      doList: [
        "Bow when greeting and departing — even a slight bow is appreciated",
        "Present documents, cards, and items with both hands",
        "Allow time for contemplation before expecting answers",
        "Maintain meticulous cleanliness in examination areas"
      ],
      dontList: [
        "Don't force eye contact — lowered gaze shows respect",
        "Don't rush decisions — consensus-building takes time",
        "Don't blow your nose loudly in the patient's presence",
        "Don't assume silence means agreement — it often means consideration"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Japan", url: "https://en.wikipedia.org/wiki/Culture_of_Japan" },
      { label: "WHO Japan", url: "https://www.who.int/countries/jpn" }
    ]
  },
  {
    name: "Nigeria",
    isoCode: "ng",
    lat: 9.1, lng: 7.5,
    languages: ["English", "Hausa", "Yoruba", "Igbo"],
    primaryLanguageFamily: "english",
    religions: ["Islam", "Christianity", "Traditional African religions"],
    region: "West Africa",
    cultural: {
      communication: [
        "Warm, relationship-oriented communication — greet properly before discussing health",
        "Elders should be greeted with specific traditional greetings depending on ethnic group",
        "Proverbs and storytelling are common communication methods",
        "English is official but pidgin English is widely spoken — adjust language accordingly"
      ],
      familyDecisionMaking: [
        "Extended family plays a major role in medical decisions",
        "The family head (usually eldest male) often authorizes treatments",
        "Community and religious leaders may be consulted for major health decisions"
      ],
      religiousSpiritual: [
        "Northern Nigeria is predominantly Muslim — follow Islamic care guidelines",
        "Southern Nigeria is predominantly Christian — prayer and faith healing are central",
        "Traditional beliefs in spiritual causation of illness persist across religions",
        "Juju (traditional spiritual practices) may be used alongside modern medicine"
      ],
      healthBeliefs: [
        "Illness may be attributed to spiritual attacks, curses, or ancestral displeasure",
        "Traditional healers (babalawo, herbalists) are often the first point of care",
        "Mental illness is highly stigmatized and often attributed to spiritual causes",
        "Herbal remedies are extremely common — always ask about concurrent use"
      ],
      genderContact: [
        "In Muslim communities, strict gender separation is expected",
        "In Christian and traditional communities, modesty is still important",
        "Handshakes are common among same gender; cross-gender varies by region and religion"
      ],
      doList: [
        "Take time with greetings — rushing is considered rude",
        "Acknowledge the role of faith and spirituality in healing",
        "Ask about traditional remedies without judgment",
        "Involve family elders in care discussions"
      ],
      dontList: [
        "Don't dismiss spiritual explanations of illness",
        "Don't use the left hand for giving or receiving items",
        "Don't assume religious affiliation based on region without asking",
        "Don't overlook the diversity within Nigeria — 250+ ethnic groups"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Nigeria", url: "https://en.wikipedia.org/wiki/Culture_of_Nigeria" },
      { label: "WHO Nigeria", url: "https://www.who.int/countries/nga" }
    ]
  },
  {
    name: "Russia",
    isoCode: "ru",
    lat: 55.8, lng: 37.6,
    languages: ["Russian"],
    primaryLanguageFamily: "russian",
    religions: ["Russian Orthodox Christianity", "Islam", "Buddhism", "None/Secular"],
    region: "Europe / Northern Asia",
    cultural: {
      communication: [
        "Direct and matter-of-fact communication style — Russians appreciate honesty",
        "Smiling without reason is seen as insincere — a serious demeanor is professional",
        "Use patronymic names (first name + father's name) as a sign of respect",
        "Written information is valued; provide printed instructions"
      ],
      familyDecisionMaking: [
        "Family is important but patient autonomy is generally respected",
        "Elderly patients may defer to adult children for complex decisions",
        "Bad news is often communicated to family first"
      ],
      religiousSpiritual: [
        "Russian Orthodox traditions may include icons at bedside, holy water, and prayer",
        "Fasting periods are observed by devout Orthodox Christians",
        "Muslim minorities (Tatars, Chechens) follow Islamic health guidelines",
        "End-of-life: Orthodox last rites (Holy Unction) may be requested"
      ],
      healthBeliefs: [
        "Strong tradition of sanatorium medicine (health resorts) for recovery",
        "Concern about drafts (produlo) — cold air is believed to cause illness",
        "Hot tea with lemon/honey is a universal Russian remedy",
        "Mental health stigma is significant — psychiatry carries Soviet-era negative associations",
        "Self-medication is common; antibiotics often taken without prescription"
      ],
      genderContact: [
        "Cross-gender medical care is generally accepted",
        "Handshakes between men are firm; with women, a gentle clasp is standard",
        "Muslim patients from Caucasus regions may have stricter gender preferences"
      ],
      doList: [
        "Be direct and thorough in explanations",
        "Provide written instructions and medication lists",
        "Acknowledge the role of Orthodox faith if the patient is religious"
      ],
      dontList: [
        "Don't smile excessively without context — it may seem unprofessional",
        "Don't dismiss concerns about drafts — acknowledge the belief",
        "Don't offer a handshake across a doorway threshold (superstition)"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Russia", url: "https://en.wikipedia.org/wiki/Culture_of_Russia" },
      { label: "WHO Russia", url: "https://www.who.int/countries/rus" }
    ]
  },
  {
    name: "France",
    isoCode: "fr",
    lat: 48.9, lng: 2.3,
    languages: ["French"],
    primaryLanguageFamily: "french",
    religions: ["Roman Catholicism", "Islam", "Judaism", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Formal and intellectual communication style — address as Monsieur/Madame",
        "The doctor-patient relationship is traditionally hierarchical but evolving",
        "Patients expect thorough explanations with scientific reasoning",
        "La bise (cheek kiss greeting) is social — not appropriate in clinical settings"
      ],
      familyDecisionMaking: [
        "Patient autonomy is strongly valued (personne de confiance — designated trusted person)",
        "End-of-life laws (Leonetti-Claeys) emphasize patient wishes",
        "Muslim French patients may involve family more in decisions"
      ],
      religiousSpiritual: [
        "Laïcité (secularism) is a strong cultural value — religion is considered private",
        "Catholic traditions (anointing of the sick) still requested by some",
        "Muslim patients (largest Muslim population in Western Europe) need halal food and prayer accommodations",
        "Jewish patients may observe Shabbat and kosher dietary laws"
      ],
      healthBeliefs: [
        "Homeopathy is widely used and was until recently reimbursed by the state",
        "Thermal spa treatments (thermalisme) are prescribed and covered by insurance",
        "French patients tend to use more medications per capita — polypharmacy awareness needed",
        "Psychoanalysis has a stronger tradition than CBT in mental healthcare"
      ],
      genderContact: [
        "Cross-gender examination is generally accepted",
        "Muslim French women may request female providers",
        "Physical examination is thorough — French medicine emphasizes the clinical exam"
      ],
      doList: [
        "Use formal address and demonstrate intellectual rigor",
        "Respect appointment times and be punctual",
        "Be thorough in physical examination — it's expected"
      ],
      dontList: [
        "Don't be overly casual or use first names too soon",
        "Don't dismiss homeopathic or thermal treatments outright",
        "Don't assume religious practices — secularism is deeply valued"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of France", url: "https://en.wikipedia.org/wiki/Culture_of_France" },
      { label: "WHO France", url: "https://www.who.int/countries/fra" }
    ]
  },
  {
    name: "Germany",
    isoCode: "de",
    lat: 52.5, lng: 13.4,
    languages: ["German"],
    primaryLanguageFamily: "german",
    religions: ["Roman Catholicism", "Protestantism", "Islam", "None/Secular"],
    region: "Europe",
    cultural: {
      communication: [
        "Very direct and precise communication — Germans value clarity and efficiency",
        "Punctuality is non-negotiable; being late signals disrespect",
        "Use Herr/Frau + last name; doctoral titles are important and used",
        "Data and evidence are expected — patients research thoroughly before appointments"
      ],
      familyDecisionMaking: [
        "Strong emphasis on patient autonomy and informed consent",
        "Patientenverfügung (advance directive) is common and should be asked about",
        "Family involvement is welcome but the patient's wishes are legally paramount"
      ],
      religiousSpiritual: [
        "Germany is evenly split between Catholic and Protestant, with growing secular population",
        "Large Turkish-German Muslim community with specific healthcare needs",
        "Hospital chaplaincy (Klinikseelsorge) is available for both denominations",
        "Religious holidays may affect scheduling preferences"
      ],
      healthBeliefs: [
        "Heilpraktiker (naturopaths) are legally recognized practitioners in Germany",
        "Homeopathy and herbal medicine (phytotherapy) are widely used",
        "Kur (health spa) treatments are prescribed and insurance-covered",
        "Mental health awareness is good; psychotherapy is well-integrated into healthcare"
      ],
      genderContact: [
        "Cross-gender care is generally accepted",
        "Turkish-German patients may prefer same-gender providers",
        "Handshakes are the standard greeting — firm and direct"
      ],
      doList: [
        "Be precise, organized, and punctual",
        "Provide detailed written information about diagnoses and treatments",
        "Respect academic titles in professional address",
        "Ask about Heilpraktiker visits and herbal remedies"
      ],
      dontList: [
        "Don't be vague or evasive — directness is expected and respected",
        "Don't be late — ever",
        "Don't use excessive small talk before getting to the medical issue"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Germany", url: "https://en.wikipedia.org/wiki/Culture_of_Germany" },
      { label: "WHO Germany", url: "https://www.who.int/countries/deu" }
    ]
  },
  {
    name: "South Korea",
    isoCode: "kr",
    lat: 37.6, lng: 127.0,
    languages: ["Korean"],
    primaryLanguageFamily: "korean",
    religions: ["Christianity", "Buddhism", "None/Secular"],
    region: "East Asia",
    cultural: {
      communication: [
        "Hierarchical communication influenced by Confucian values — age and status matter",
        "Bowing is the standard greeting; depth reflects respect level",
        "Nunchi (social awareness) is crucial — read non-verbal cues carefully",
        "Patients may not ask questions out of respect for medical authority"
      ],
      familyDecisionMaking: [
        "Family involvement is expected, especially for elderly patients",
        "Adult children (particularly eldest sons) often manage parents' medical care",
        "Terminal diagnoses may be communicated to family before the patient"
      ],
      religiousSpiritual: [
        "Christianity and Buddhism are the main religions; many Koreans are secular",
        "Shamanistic traditions persist; mudang (shamans) may be consulted",
        "Ancestor rites (jesa) are important and may influence end-of-life timing preferences"
      ],
      healthBeliefs: [
        "Korean traditional medicine (hanbang/hanyak) including herbal medicine and acupuncture is widely used",
        "Appearance is extremely important — cosmetic considerations in treatment planning matter",
        "Health supplements and herbal tonics are consumed regularly",
        "Mental health stigma is very high; conditions often present as somatic complaints",
        "Blood type personality theory is culturally significant (similar to astrology)"
      ],
      genderContact: [
        "Same-gender providers preferred for intimate examinations",
        "Physical contact should be minimal — bowing instead of handshakes is often preferred",
        "Modesty is important, especially for older generations"
      ],
      doList: [
        "Bow slightly when greeting, especially elderly patients",
        "Use both hands when giving or receiving items",
        "Ask about Korean traditional medicine and supplement use",
        "Be aware of the importance of appearance in treatment discussions"
      ],
      dontList: [
        "Don't write names in red ink — it symbolizes death",
        "Don't pour your own drink at meals — let others pour for you (cultural courtesy)",
        "Don't dismiss somatic complaints — explore underlying psychological causes",
        "Don't touch someone's head without permission, especially elderly patients"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of South Korea", url: "https://en.wikipedia.org/wiki/Culture_of_South_Korea" },
      { label: "WHO South Korea", url: "https://www.who.int/countries/kor" }
    ]
  },
  {
    name: "Egypt",
    isoCode: "eg",
    lat: 30.0, lng: 31.2,
    languages: ["Arabic"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni majority)", "Coptic Christianity"],
    region: "Middle East / North Africa",
    cultural: {
      communication: [
        "Warm, hospitable communication — extensive greetings are essential",
        "Inshallah ('God willing') is frequently used and not dismissive — it reflects genuine faith",
        "Bad news should be delivered gradually and with hope — never bluntly",
        "Arabic is highly contextual; tone and relationship matter more than literal words"
      ],
      familyDecisionMaking: [
        "Family-centered decision-making is the norm",
        "The eldest male relative typically serves as the family spokesperson",
        "Women's healthcare decisions may involve the husband or mother-in-law",
        "Large family visits to hospitalized patients are expected and should be accommodated"
      ],
      religiousSpiritual: [
        "Islamic practices similar to Saudi Arabia — prayer, halal food, Ramadan fasting",
        "Coptic Christians (10% of population) observe fasting periods and sacraments",
        "Belief in the evil eye (hasad) is common — blue eye amulets may be present",
        "Quranic recitation at the bedside is a common comfort practice"
      ],
      healthBeliefs: [
        "Traditional remedies (herbal medicines, honey, black seed) are widely trusted",
        "Mental health stigma is very high — psychiatric illness may be attributed to jinn",
        "Somatization of psychological distress is very common",
        "Preference for injections over oral medications — perceived as more effective"
      ],
      genderContact: [
        "Strict modesty expectations, especially for women",
        "Same-gender providers strongly preferred for intimate examinations",
        "Male doctors should have a female chaperone when examining female patients",
        "Handshakes: same-gender is fine; cross-gender, let the woman initiate"
      ],
      doList: [
        "Begin with warm greetings and inquire about family well-being",
        "Accommodate prayer times and Qibla direction in hospital rooms",
        "Involve family in care discussions",
        "Offer halal food and be aware of Coptic fasting periods"
      ],
      dontList: [
        "Don't deliver bad news bluntly — use graduated disclosure",
        "Don't schedule elective procedures during Ramadan without discussion",
        "Don't dismiss beliefs about evil eye or spiritual causation",
        "Don't restrict family visiting — it's a core support mechanism"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Egypt", url: "https://en.wikipedia.org/wiki/Culture_of_Egypt" },
      { label: "WHO EMRO Egypt", url: "https://www.emro.who.int/egy/" }
    ]
  },
  {
    name: "Indonesia",
    isoCode: "id",
    lat: -6.2, lng: 106.8,
    languages: ["Indonesian (Bahasa Indonesia)", "Javanese", "Sundanese"],
    primaryLanguageFamily: "malay",
    religions: ["Islam", "Christianity", "Hinduism (Bali)", "Buddhism"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Indirect, polite communication — harmony (rukun) is the priority",
        "Smiling is a default social response — even in discomfort or disagreement",
        "Speaking softly shows good manners; loud speech is considered rude",
        "Use Bapak (Mr) or Ibu (Mrs) as respectful forms of address"
      ],
      familyDecisionMaking: [
        "Strong communal decision-making — musyawarah (consensus-building) is valued",
        "Extended family and community leaders may be involved in healthcare decisions",
        "Respect for elders is paramount"
      ],
      religiousSpiritual: [
        "Largest Muslim-majority country — halal requirements, prayer times, and Ramadan apply",
        "Balinese Hinduism has unique practices different from Indian Hinduism",
        "Traditional Javanese beliefs (kejawen) blend Islam with animism and Hindu-Buddhist elements",
        "Dukun (traditional healers) are widely consulted, especially in rural areas"
      ],
      healthBeliefs: [
        "Jamu (traditional herbal medicine) is a well-established industry and daily practice",
        "Masuk angin ('enter wind') is a common folk illness explaining various symptoms",
        "Kerokan (coining/scraping) is a common remedy — marks should not be confused with abuse",
        "Mental health is heavily stigmatized — often attributed to spiritual causes"
      ],
      genderContact: [
        "Modesty is highly valued — provide adequate covering",
        "Same-gender providers preferred for Muslim women patients",
        "Physical contact should be minimal; greeting with a slight bow and hand to chest is appropriate",
        "Never touch the head — it's considered the most sacred part of the body"
      ],
      doList: [
        "Greet warmly with Bapak/Ibu and be patient with indirect communication",
        "Ask about jamu and traditional remedies",
        "Accommodate prayer times and halal dietary needs",
        "Be aware of kerokan marks and document without alarm"
      ],
      dontList: [
        "Don't touch the head — sacred in Javanese and Balinese cultures",
        "Don't point with the index finger — use the thumb or whole hand",
        "Don't use the left hand for giving or receiving",
        "Don't assume uniform cultural practices — Indonesia has 17,000 islands and 300+ ethnicities"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Indonesia", url: "https://en.wikipedia.org/wiki/Culture_of_Indonesia" },
      { label: "WHO Indonesia", url: "https://www.who.int/countries/idn" }
    ]
  },
  {
    name: "Turkey",
    isoCode: "tr",
    lat: 39.9, lng: 32.9,
    languages: ["Turkish", "Kurdish"],
    primaryLanguageFamily: "turkish",
    religions: ["Islam (Sunni majority, Alevi minority)"],
    region: "Middle East / Europe",
    cultural: {
      communication: [
        "Warm and hospitable — Turkish people are known for generous hospitality",
        "Respect for elders is central; greet the eldest person in the room first",
        "Çay (tea) is universally offered — accepting is polite and relationship-building",
        "Communication can be indirect; saving face is important"
      ],
      familyDecisionMaking: [
        "Family involvement in healthcare decisions is expected, especially in conservative areas",
        "Urban Turks may be more individualistic in medical decisions",
        "The mother is often the central figure in family health management"
      ],
      religiousSpiritual: [
        "Turkey is officially secular (laik) but majority Muslim — practices vary widely",
        "Ramadan fasting is widely observed and affects medication timing",
        "Nazar boncuğu (evil eye amulet) is extremely common — purely cultural, not just religious",
        "Alevi Muslims have different practices from Sunni — don't assume uniformity"
      ],
      healthBeliefs: [
        "Turkish traditional medicine includes herbal teas, linden, sage, and honey",
        "Hot/cold food theory exists — similar to other Mediterranean traditions",
        "Circumcision (sünnet) is a major cultural celebration for boys",
        "Mental health stigma is present but decreasing in urban areas"
      ],
      genderContact: [
        "Varies greatly between urban and rural — ask about preferences",
        "Conservative women may prefer female providers",
        "Handshakes: common in cities; in conservative settings, wait for the woman to extend her hand"
      ],
      doList: [
        "Accept offered tea — it's a gesture of trust and hospitality",
        "Respect elder family members' role in discussions",
        "Be aware of urban/rural cultural differences within Turkey"
      ],
      dontList: [
        "Don't assume all Turks are religiously conservative",
        "Don't confuse Turkey with Arab cultures — it's a distinct cultural identity",
        "Don't blow your nose at the dining table — excuse yourself"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Turkey", url: "https://en.wikipedia.org/wiki/Culture_of_Turkey" },
      { label: "WHO Turkey", url: "https://www.who.int/countries/tur" }
    ]
  },
  {
    name: "Thailand",
    isoCode: "th",
    lat: 13.8, lng: 100.5,
    languages: ["Thai"],
    primaryLanguageFamily: "thai",
    religions: ["Theravada Buddhism", "Islam (in the south)"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "The wai (palms together with a bow) is the standard greeting — return it respectfully",
        "Kreng jai (consideration for others' feelings) is a core value — patients may not express concerns",
        "Thai communication is indirect and conflict-avoidant",
        "Sanuk (fun, enjoyment) is important — a warm, light-hearted tone is appreciated"
      ],
      familyDecisionMaking: [
        "Family involvement is important; elderly family members are deferred to",
        "Buddhist monks may be consulted for spiritual guidance on medical decisions",
        "Communal care is expected during hospitalization"
      ],
      religiousSpiritual: [
        "Theravada Buddhism is central — monks are highly revered and may visit patients",
        "Merit-making (tham bun) is important — illness may be seen as karma from past lives",
        "Buddhist monks should not be touched by women; arrange male staff for monastic patients",
        "Amulets and sacred threads (sai sin) on the wrist have protective significance"
      ],
      healthBeliefs: [
        "Traditional Thai medicine (including herbal compresses, Thai massage) is culturally embedded",
        "Spirit doctors (mor phi) and amulets are consulted alongside modern medicine",
        "Mental illness is heavily stigmatized — may be attributed to bad karma or spirits",
        "The head is the highest and most sacred part of the body; feet are the lowest"
      ],
      genderContact: [
        "Modesty is valued — provide adequate covering",
        "Women must not touch Buddhist monks or hand them items directly",
        "The wai replaces handshakes in most situations"
      ],
      doList: [
        "Return the wai greeting respectfully",
        "Never touch a patient's head without explanation and consent",
        "Remove shoes before entering a patient's personal space if culturally indicated",
        "Be patient with indirect communication — use open-ended questions"
      ],
      dontList: [
        "Never point feet at a person, sacred image, or food",
        "Don't touch the head casually — it's the most sacred body part",
        "Don't step over a patient or their belongings",
        "Don't speak disrespectfully of the monarchy — it's illegal and deeply offensive"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Thailand", url: "https://en.wikipedia.org/wiki/Culture_of_Thailand" },
      { label: "WHO Thailand", url: "https://www.who.int/countries/tha" }
    ]
  },
  {
    name: "Australia",
    isoCode: "au",
    lat: -35.3, lng: 149.1,
    languages: ["English", "Aboriginal languages"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "None/Secular", "Buddhism", "Islam"],
    region: "Oceania",
    cultural: {
      communication: [
        "Informal, egalitarian communication — first names are standard quickly",
        "Tall poppy syndrome — don't overemphasize your credentials or status",
        "Direct but laid-back communication style — straightforwardness is valued",
        "Aboriginal Australians may use silence as a communication norm — don't fill silences uncomfortably"
      ],
      familyDecisionMaking: [
        "Patient autonomy is central — similar to US/UK model",
        "Aboriginal and Torres Strait Islander communities may use communal decision-making",
        "Advance care planning is encouraged and well-supported legally"
      ],
      religiousSpiritual: [
        "Increasingly secular society — many Australians identify as non-religious",
        "Aboriginal spiritual beliefs (connection to country/land) are important for Indigenous patients",
        "Smoking ceremonies may be requested for spiritual cleansing",
        "Christian denominations still relevant for older populations"
      ],
      healthBeliefs: [
        "Strong public health system (Medicare) shapes expectations",
        "Aboriginal Australians have specific health challenges — cultural safety is paramount",
        "Bush medicine and traditional Aboriginal healing practices should be respected",
        "Men's health stigma — particularly for mental health and seeking help"
      ],
      genderContact: [
        "Generally relaxed about cross-gender medical care",
        "Aboriginal patients may have specific gender requirements for certain health discussions",
        "Men's business and women's business are separate in Aboriginal culture — respect these boundaries"
      ],
      doList: [
        "Be relaxed, genuine, and avoid pretension",
        "For Aboriginal patients, ask about cultural protocols and preferred communication styles",
        "Use Acknowledgment of Country when appropriate",
        "Be mindful of the Stolen Generations — history affects health engagement"
      ],
      dontList: [
        "Don't be arrogant or pull rank",
        "Don't make assumptions about Aboriginal patients' cultural practices",
        "Don't use the term 'Aborigines' — say 'Aboriginal and Torres Strait Islander peoples'",
        "Don't dismiss the historical trauma affecting Indigenous health outcomes"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Australia", url: "https://en.wikipedia.org/wiki/Culture_of_Australia" },
      { label: "WHO Australia", url: "https://www.who.int/countries/aus" }
    ]
  }
];

/** Regions list derived from data */
export const REGIONS = [...new Set(countries.map(c => c.region))].sort();

/** All religions list derived from data */
export const ALL_RELIGIONS = [...new Set(countries.flatMap(c => c.religions))].sort();

/** Helper to get flag URL */
export const getFlagUrl = (isoCode: string) =>
  `https://flagcdn.com/w320/${isoCode.toLowerCase()}.png`;

/** Helper to get language family color */
export const getLanguageFamilyColor = (family: LanguageFamily): string =>
  LANGUAGE_FAMILIES.find(l => l.key === family)?.color ?? "hsl(200,20%,50%)";
