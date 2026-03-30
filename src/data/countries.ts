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
  },
  // ─── IRAN ──────────────────────────────────────────────────────────
  {
    name: "Iran",
    isoCode: "ir",
    lat: 35.69, lng: 51.39,
    languages: ["Persian (Farsi)", "Azerbaijani", "Kurdish", "Arabic"],
    primaryLanguageFamily: "other",
    religions: ["Islam (Shia)", "Islam (Sunni)", "Zoroastrianism", "Christianity"],
    region: "Middle East",
    cultural: {
      communication: [
        "Taarof (elaborate politeness rituals) dominates social interaction — expect repeated declining before accepting",
        "Indirect communication style; patients may say 'yes' out of politeness rather than agreement",
        "Use formal titles (Dr., Mr., Mrs.) and show respect for hierarchy",
        "Direct eye contact between genders can be seen as inappropriate",
        "Patients may describe symptoms metaphorically — 'my heart is heavy' can mean emotional distress"
      ],
      familyDecisionMaking: [
        "Family is deeply involved in medical decisions — eldest male or senior family member often has authority",
        "Bad news should ideally be communicated to the family first, who will decide how to tell the patient",
        "Visiting the sick is a strong religious and cultural duty — expect large groups of visitors",
        "Children's medical decisions are made by fathers or grandfathers in traditional families",
        "Wives may defer to husbands in medical discussions even if they disagree"
      ],
      religiousSpiritual: [
        "Shia Islam is the state religion — prayer times, Ramadan fasting, and Muharram mourning are critical",
        "Fasting patients may refuse oral medications during Ramadan (offer alternatives)",
        "Modesty is paramount — female patients require female providers or a chaperone",
        "Nazr (religious vows) may involve dietary restrictions during illness",
        "Death rituals require body washing, shrouding, and burial facing Mecca within 24 hours"
      ],
      healthBeliefs: [
        "Traditional Unani/Galenic 'hot and cold' food theory is widely followed for health management",
        "Mental illness carries significant stigma — often described as 'nerves' or stress",
        "Herbal medicine (attari) is commonly used alongside or instead of Western medicine",
        "Evil eye (cheshm-e bad) is believed to cause illness — amulets may be worn",
        "Pain may be expressed dramatically or stoically depending on gender expectations"
      ],
      genderContact: [
        "Male doctors should not examine female patients without a female chaperone present",
        "Handshaking between genders is generally avoided — wait for the patient to initiate",
        "Female patients may request all-female medical teams",
        "Physical examinations should be minimized and explained beforehand",
        "Head coverings should not be removed unless medically necessary"
      ],
      doList: [
        "Show respect through formal greetings and taarof exchanges",
        "Allow family involvement in care discussions",
        "Provide same-gender providers when possible",
        "Ask about fasting during Ramadan and Muharram",
        "Be patient with indirect communication styles"
      ],
      dontList: [
        "Don't give bad news directly to the patient without consulting the family",
        "Don't shake hands with the opposite gender without being offered first",
        "Don't dismiss traditional 'hot/cold' dietary beliefs",
        "Don't schedule non-urgent procedures during Muharram mourning period",
        "Don't assume all Iranians are strictly religious — there is wide variation"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Iran", url: "https://en.wikipedia.org/wiki/Culture_of_Iran" },
      { label: "WHO Iran", url: "https://www.who.int/countries/irn" }
    ]
  },
  // ─── PAKISTAN ───────────────────────────────────────────────────────
  {
    name: "Pakistan",
    isoCode: "pk",
    lat: 33.69, lng: 73.04,
    languages: ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi", "English"],
    primaryLanguageFamily: "hindi",
    religions: ["Islam (Sunni)", "Islam (Shia)", "Christianity", "Hinduism"],
    region: "South Asia",
    cultural: {
      communication: [
        "Respect and formality are essential — use titles (Sahib, Madam, Doctor)",
        "Indirect communication is common; 'Inshallah' (God willing) may indicate uncertainty, not agreement",
        "Eye contact with elders or opposite gender may be avoided as a sign of respect",
        "Patients may nod or say 'yes' even when they don't understand — check comprehension gently",
        "Family translators are preferred but may filter information"
      ],
      familyDecisionMaking: [
        "Patriarchal decision-making is common — male head of household often makes medical decisions",
        "Extended family involvement is expected and considered supportive, not intrusive",
        "Mothers-in-law often have significant influence over younger women's healthcare",
        "In rural areas, community elders may need to approve treatment plans",
        "Bad news should be shared with family members first"
      ],
      religiousSpiritual: [
        "Islam guides daily life — prayer times (5 daily) and Ramadan fasting must be accommodated",
        "Halal dietary requirements are strict — ensure all medications and food are halal",
        "Spiritual healing through Quran recitation (ruqyah) is common alongside medicine",
        "After death, body must be washed by same-gender persons and buried within 24 hours",
        "Circumcision of male infants is a religious and cultural norm"
      ],
      healthBeliefs: [
        "Traditional healers (hakeem) using Unani medicine are widely consulted",
        "Jinn possession may be cited as a cause of mental illness or seizures",
        "Evil eye (nazar) is a widely held belief — amulets and prayers are protective",
        "Mental health stigma is severe — psychiatric conditions may be hidden",
        "Pain is often endured stoically, especially by men; women may be more expressive"
      ],
      genderContact: [
        "Female patients strongly prefer female doctors — this is often non-negotiable",
        "Physical examinations by opposite-gender providers require careful explanation",
        "Handshaking across genders is generally inappropriate",
        "Purdah (seclusion) may limit women's ability to attend appointments independently",
        "Breastfeeding support should be provided by female staff only"
      ],
      doList: [
        "Provide same-gender healthcare providers whenever possible",
        "Include family in care discussions",
        "Respect prayer times and fasting schedules",
        "Ask about traditional medicine use without judgment",
        "Use professional interpreters for critical conversations"
      ],
      dontList: [
        "Don't insist on mixed-gender examinations without consent",
        "Don't dismiss spiritual explanations of illness",
        "Don't provide non-halal food or medications without informing",
        "Don't rush consultations — relationship-building is important",
        "Don't assume literacy — use visual aids for instructions"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Pakistan", url: "https://en.wikipedia.org/wiki/Culture_of_Pakistan" },
      { label: "WHO Pakistan", url: "https://www.who.int/countries/pak" }
    ]
  },
  // ─── PHILIPPINES ───────────────────────────────────────────────────
  {
    name: "Philippines",
    isoCode: "ph",
    lat: 14.60, lng: 120.98,
    languages: ["Filipino (Tagalog)", "English", "Cebuano", "Ilocano"],
    primaryLanguageFamily: "malay",
    religions: ["Christianity (Catholic)", "Islam", "Iglesia ni Cristo"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Filipinos value 'pakikisama' (smooth interpersonal relationships) — avoid confrontation",
        "Hiya (shame/embarrassment) may prevent patients from asking questions or expressing disagreement",
        "Use 'po' and 'opo' when addressing elders — shows respect",
        "Smiling or laughing may indicate discomfort, not agreement or happiness",
        "English proficiency is generally high but medical jargon should still be simplified"
      ],
      familyDecisionMaking: [
        "Extended family is deeply involved — 'family conference' before major medical decisions is expected",
        "Eldest child or eldest son often acts as spokesperson and decision-maker",
        "Utang na loob (debt of gratitude) means families will go to extraordinary lengths for sick members",
        "OFW (overseas worker) family members may need to be consulted by phone for decisions",
        "Bayanihan (communal help) — community and church may organize support"
      ],
      religiousSpiritual: [
        "Catholicism is deeply ingrained — patients may request prayer, rosaries, or last rites",
        "Santo Niño devotion and religious festivals are central to cultural identity",
        "Faith healing and 'albularyo' (folk healers) may be consulted alongside doctors",
        "Muslim Filipinos (Moro) in Mindanao have distinct practices — halal food, prayer times",
        "Novenas and prayers for healing are common — don't discourage these practices"
      ],
      healthBeliefs: [
        "'Usog' (a hex transmitted through greetings) is believed to cause illness in children",
        "'Pasma' — cold or wind entering the body is believed to cause illness",
        "Hilot (traditional massage therapy) is widely used for various conditions",
        "Mental illness may be attributed to spiritual causes or 'kulam' (witchcraft)",
        "Self-medication with antibiotics and herbal remedies is extremely common"
      ],
      genderContact: [
        "Generally open to cross-gender medical care, but modesty is still valued",
        "Female patients may prefer female providers for OB/GYN care",
        "Physical affection in medical contexts (hand-holding, shoulder touch) can be comforting",
        "LGBTQ+ individuals may face family stigma but Filipino culture has traditional third-gender roles (bakla)",
        "Mano po (hand-to-forehead) gesture for elders shows deep respect"
      ],
      doList: [
        "Include the whole family in discussions — they are a support system",
        "Be warm and personal in your approach — build rapport",
        "Respect religious practices and allow chaplain visits",
        "Ask about traditional remedies with genuine interest",
        "Use visual aids and simple language for medication instructions"
      ],
      dontList: [
        "Don't be overly blunt or clinical — soften difficult news",
        "Don't dismiss folk beliefs about usog, pasma, or hilot",
        "Don't exclude family from medical discussions",
        "Don't mistake smiling or laughter for lack of concern",
        "Don't assume all Filipinos speak Tagalog — there are 170+ languages"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of the Philippines", url: "https://en.wikipedia.org/wiki/Culture_of_the_Philippines" },
      { label: "WHO Philippines", url: "https://www.who.int/countries/phl" }
    ]
  },
  // ─── VIETNAM ───────────────────────────────────────────────────────
  {
    name: "Vietnam",
    isoCode: "vn",
    lat: 21.03, lng: 105.85,
    languages: ["Vietnamese"],
    primaryLanguageFamily: "other",
    religions: ["Buddhism", "Catholicism", "Cao Dai", "None/Secular", "Ancestor Worship"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Indirect communication is the norm — silence or vague answers may indicate disagreement",
        "Respect for hierarchy is paramount — always address elders and authority figures formally",
        "Nodding may mean 'I hear you' not 'I agree'",
        "Patients may smile when embarrassed or in pain — don't interpret as comfort",
        "Avoid raising voice or showing frustration — loss of face (mất mặt) is deeply shaming"
      ],
      familyDecisionMaking: [
        "Family-centered decision-making — eldest son or family patriarch often has final say",
        "Three-generation households are common; grandparents heavily influence childcare decisions",
        "Filial piety (hiếu) is a core value — children are expected to care for aging parents",
        "Family may withhold terminal diagnosis from patient to protect them emotionally",
        "Healthcare costs may be shared across extended family networks"
      ],
      religiousSpiritual: [
        "Buddhist, Confucian, and Taoist beliefs blend in daily life",
        "Ancestor worship is practiced widely — altars in homes and hospital rooms may be requested",
        "Lunar calendar events (Tet, Ghost Month) may affect healthcare decisions",
        "Catholic Vietnamese follow standard Catholic medical ethics",
        "Numbers and colors have spiritual significance — avoid inauspicious combinations"
      ],
      healthBeliefs: [
        "Traditional Vietnamese medicine (thuốc nam) is widely practiced alongside Western medicine",
        "Coining (cạo gió) and cupping leave marks that should not be mistaken for abuse",
        "Hot/cold food theory influences diet during illness and postpartum period",
        "Mental illness is heavily stigmatized — often described as 'thinking too much'",
        "Postpartum practices include strict dietary rules and rest for 30-100 days"
      ],
      genderContact: [
        "Modesty is important — minimize exposure during examinations",
        "Female patients generally prefer female providers for intimate examinations",
        "Touching someone's head is disrespectful — it is considered the highest part of the body",
        "Pointing with feet or showing soles of feet is offensive",
        "Physical affection between providers and patients should be minimal"
      ],
      doList: [
        "Use formal titles and show respect for age hierarchy",
        "Allow family to be present and involved in care",
        "Ask about traditional medicine use — coining and cupping are common",
        "Provide written instructions in Vietnamese when possible",
        "Be patient with indirect communication"
      ],
      dontList: [
        "Don't mistake coining/cupping marks for signs of abuse",
        "Don't touch the patient's head casually",
        "Don't deliver bad news directly without family involvement",
        "Don't dismiss traditional hot/cold dietary practices",
        "Don't assume silence means agreement or understanding"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Vietnam", url: "https://en.wikipedia.org/wiki/Culture_of_Vietnam" },
      { label: "WHO Vietnam", url: "https://www.who.int/countries/vnm" }
    ]
  },
  // ─── ETHIOPIA ──────────────────────────────────────────────────────
  {
    name: "Ethiopia",
    isoCode: "et",
    lat: 9.01, lng: 38.75,
    languages: ["Amharic", "Oromo", "Tigrinya", "Somali", "English"],
    primaryLanguageFamily: "other",
    religions: ["Ethiopian Orthodox Christianity", "Islam", "Protestantism", "Traditional beliefs"],
    region: "East Africa",
    cultural: {
      communication: [
        "Greetings are elaborate and important — inquire about family and health before medical discussion",
        "Elders are highly respected — stand when they enter the room",
        "Direct 'no' is avoided — listen for hesitation, qualifiers, or topic changes",
        "Amharic is the federal language but many ethnic groups speak different languages",
        "Eye contact with authority figures may be limited as a sign of respect"
      ],
      familyDecisionMaking: [
        "Extended family and community elders are central to medical decisions",
        "Male family head typically authorizes treatment, especially for women and children",
        "Coffee ceremony is a bonding ritual — offering coffee shows respect",
        "Community organizations (edir) provide social support during illness",
        "Bad news should be delivered gently and gradually through family intermediaries"
      ],
      religiousSpiritual: [
        "Ethiopian Orthodox Christians fast over 200 days per year — vegan diet during fasts",
        "Holy water (tsebel) is believed to have healing properties — don't discourage its use",
        "Muslim Ethiopians follow standard Islamic practices — halal food, prayer times, Ramadan",
        "Traditional spiritual beliefs coexist with organized religion — buda (evil eye) beliefs",
        "Saturday is the Sabbath for some Orthodox communities"
      ],
      healthBeliefs: [
        "Traditional medicine is the first line of treatment for many — herbalists and bone-setters",
        "Buda (evil eye) or spirit possession (zar) may be cited as disease causes",
        "Mental illness is highly stigmatized — attributed to spiritual causes",
        "Injections are often perceived as more effective than oral medications",
        "Postpartum women observe strict rest and dietary rules"
      ],
      genderContact: [
        "Female patients, especially Muslim women, strongly prefer female providers",
        "Physical modesty is important across all religious groups",
        "Husbands may insist on being present during wife's examinations",
        "FGM/C is practiced in some communities — approach with sensitivity",
        "Same-gender care teams are ideal for sensitive examinations"
      ],
      doList: [
        "Take time for proper greetings and rapport-building",
        "Ask about fasting practices before prescribing medications",
        "Involve family and community in care planning",
        "Respect traditional healing practices alongside Western medicine",
        "Provide interpretation services for non-Amharic speakers"
      ],
      dontList: [
        "Don't skip greetings or rush into medical discussions",
        "Don't prescribe medications to be taken with food during fasting periods without discussion",
        "Don't dismiss traditional healing — work alongside it",
        "Don't assume one ethnic group's practices apply to all Ethiopians",
        "Don't discuss FGM/C in a judgmental manner"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Ethiopia", url: "https://en.wikipedia.org/wiki/Culture_of_Ethiopia" },
      { label: "WHO Ethiopia", url: "https://www.who.int/countries/eth" }
    ]
  },
  // ─── ITALY ─────────────────────────────────────────────────────────
  {
    name: "Italy",
    isoCode: "it",
    lat: 41.90, lng: 12.50,
    languages: ["Italian"],
    primaryLanguageFamily: "other",
    religions: ["Christianity (Catholic)"],
    region: "Europe",
    cultural: {
      communication: [
        "Expressive communication with gestures is standard — not a sign of agitation",
        "Family-oriented approach is appreciated; patients expect warmth and empathy from providers",
        "Titles matter — use 'Dottore/Dottoressa' for physicians",
        "Patients may describe symptoms with emotional intensity — listen attentively",
        "Privacy is valued but trust is built through personal connection"
      ],
      familyDecisionMaking: [
        "Family plays a central role — major medical decisions often involve spouse, children, and parents",
        "Mamma is a powerful figure in Italian families — mothers often coordinate care",
        "Extended family visits to hospitalized patients are expected and frequent",
        "Adult children feel strong obligation to care for elderly parents at home",
        "Food brought from home is an expression of love and care"
      ],
      religiousSpiritual: [
        "Catholicism influences end-of-life decisions — last rites, saints' medals, prayer",
        "Catholic medical ethics may influence views on contraception, abortion, and end-of-life care",
        "Saint patron devotion — patients may carry religious medals or images",
        "Chaplain visits are welcome and appreciated",
        "Growing secular population in younger generations"
      ],
      healthBeliefs: [
        "Strong belief in the quality of Italian healthcare — may resist unfamiliar treatments",
        "'Colpo d'aria' (hit of air/draft) is believed to cause illness — patients may avoid open windows",
        "Diet and food quality are considered central to health — 'mangiare bene' (eating well)",
        "Mental health stigma is decreasing but still present, especially in southern Italy",
        "Patients may seek second and third opinions — this reflects engagement, not distrust"
      ],
      genderContact: [
        "Generally comfortable with cross-gender medical care",
        "Physical warmth (handshake, touch on arm) is appropriate and appreciated",
        "Older patients from southern Italy may have more conservative views on modesty",
        "Italian men may express pain more openly than northern European cultures",
        "Close physical proximity during conversation is normal"
      ],
      doList: [
        "Be warm, empathetic, and take time for personal connection",
        "Involve family in care discussions",
        "Allow food from home — it's an expression of love",
        "Respect the patient's desire for multiple opinions",
        "Use formal titles until invited to be informal"
      ],
      dontList: [
        "Don't be overly clinical or detached — this reads as cold",
        "Don't dismiss 'colpo d'aria' concerns about drafts",
        "Don't restrict family visits excessively",
        "Don't rush meal times — food is central to recovery in Italian culture",
        "Don't assume younger Italians share traditional views"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Italy", url: "https://en.wikipedia.org/wiki/Culture_of_Italy" },
      { label: "WHO Italy", url: "https://www.who.int/countries/ita" }
    ]
  },
  // ─── SPAIN ─────────────────────────────────────────────────────────
  {
    name: "Spain",
    isoCode: "es",
    lat: 40.42, lng: -3.70,
    languages: ["Spanish (Castilian)", "Catalan", "Basque", "Galician"],
    primaryLanguageFamily: "spanish",
    religions: ["Christianity (Catholic)", "None/Secular", "Islam"],
    region: "Europe",
    cultural: {
      communication: [
        "Warm, personal communication style — handshakes and cheek kisses are standard greetings",
        "Conversation is expressive and may include interruptions — this is engagement, not rudeness",
        "Patients expect doctors to show warmth and genuine concern",
        "Siesta culture means afternoon appointments may be preferred after 5pm",
        "Regional languages (Catalan, Basque, Galician) may be preferred in those communities"
      ],
      familyDecisionMaking: [
        "Family involvement in healthcare is strong — especially in southern Spain",
        "Elderly parents are typically cared for by family, not nursing homes",
        "Multiple family members may attend appointments and ask questions",
        "Medical decisions for children involve both parents and often grandparents",
        "Immigrant communities (Latin American, Moroccan) have their own family dynamics"
      ],
      religiousSpiritual: [
        "Catholic traditions influence views on birth, death, and suffering",
        "Growing secularism, especially among younger generations",
        "Muslim immigrant community follows Islamic practices — halal food, prayer times",
        "Saint patron festivals are important cultural events — not just religious",
        "End-of-life care may involve Catholic sacraments"
      ],
      healthBeliefs: [
        "Strong public healthcare system — Spaniards are generally medically literate",
        "Mediterranean diet is considered foundational to health",
        "Herbal remedies (herboristería) are used alongside conventional medicine",
        "Mental health awareness is growing but stigma persists in rural areas",
        "Afternoon rest (siesta) is considered important for health"
      ],
      genderContact: [
        "Generally comfortable with cross-gender medical care",
        "Physical warmth and touch are normal in social and medical contexts",
        "Spanish men may be more expressive about pain than other European cultures",
        "Gender equality is strong in urban areas; rural areas may be more traditional",
        "LGBTQ+ rights are well-established — inclusive language is appreciated"
      ],
      doList: [
        "Be warm, friendly, and take time for social conversation",
        "Accommodate afternoon scheduling preferences when possible",
        "Respect regional identities — Catalan, Basque, Galician",
        "Allow family participation in medical discussions",
        "Learn basic greetings in regional languages if treating those communities"
      ],
      dontList: [
        "Don't be overly formal or cold — this creates distance",
        "Don't schedule important procedures during siesta hours without asking",
        "Don't assume all Spaniards speak Castilian — respect regional languages",
        "Don't dismiss Mediterranean diet beliefs",
        "Don't confuse Spanish cultural norms with Latin American ones"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Spain", url: "https://en.wikipedia.org/wiki/Culture_of_Spain" },
      { label: "WHO Spain", url: "https://www.who.int/countries/esp" }
    ]
  },
  // ─── CANADA ────────────────────────────────────────────────────────
  {
    name: "Canada",
    isoCode: "ca",
    lat: 45.42, lng: -75.69,
    languages: ["English", "French"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Sikhism", "Hinduism", "None/Secular"],
    region: "North America",
    cultural: {
      communication: [
        "Polite, respectful communication — Canadians value 'please', 'thank you', and apologies",
        "Bilingual reality — French-speaking patients in Quebec may prefer or require French",
        "Multicultural society — expect wide variation in communication norms based on heritage",
        "Shared decision-making is expected — patients want to be active partners",
        "Indigenous patients may use storytelling as a communication style — allow time"
      ],
      familyDecisionMaking: [
        "Individual autonomy is highly valued — patient makes their own decisions",
        "For immigrant communities, traditional family decision-making structures may apply",
        "Indigenous communities may involve elders and band councils in health decisions",
        "Advance care planning and living wills are common and encouraged",
        "LGBTQ+ families and chosen families should be recognized equally"
      ],
      religiousSpiritual: [
        "Highly diverse — accommodate all major world religions",
        "Growing secularism, especially in British Columbia and Quebec",
        "Sikh patients may wear the five articles of faith — handle with care",
        "Indigenous spiritual practices (smudging, ceremony) should be accommodated in hospitals",
        "Multifaith chaplaincy services are standard in major hospitals"
      ],
      healthBeliefs: [
        "Universal healthcare system — patients expect care without financial barriers",
        "Indigenous communities may use traditional medicine alongside Western approaches",
        "Chinese, South Asian, and Middle Eastern communities bring traditional health practices",
        "Mental health awareness is high — but stigma exists in some cultural communities",
        "Cannabis is legal and used medicinally — ask about use without judgment"
      ],
      genderContact: [
        "Generally open to cross-gender medical care",
        "Immigrant communities may have specific preferences — always ask",
        "Trans and non-binary patients expect appropriate pronoun use and respect",
        "Indigenous women may have experienced medical trauma — approach with sensitivity",
        "MAID (Medical Assistance in Dying) is legal — discuss wishes openly"
      ],
      doList: [
        "Ask about cultural background and preferences early in care",
        "Offer interpretation services proactively — especially French",
        "Accommodate diverse religious and spiritual practices",
        "Recognize Indigenous patients' historical medical trauma",
        "Use inclusive language for gender and family structures"
      ],
      dontList: [
        "Don't assume all Canadians share the same cultural background",
        "Don't speak English to Francophone patients without asking",
        "Don't dismiss Indigenous traditional medicine",
        "Don't ignore culturally specific mental health presentations",
        "Don't assume familiarity with the healthcare system for newcomers"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Canada", url: "https://en.wikipedia.org/wiki/Culture_of_Canada" },
      { label: "WHO Canada", url: "https://www.who.int/countries/can" }
    ]
  },
  // ─── ARGENTINA ─────────────────────────────────────────────────────
  {
    name: "Argentina",
    isoCode: "ar",
    lat: -34.60, lng: -58.38,
    languages: ["Spanish"],
    primaryLanguageFamily: "spanish",
    religions: ["Christianity (Catholic)", "None/Secular", "Judaism", "Islam"],
    region: "South America",
    cultural: {
      communication: [
        "Warm, expressive communication — cheek kisses and embraces are standard greetings",
        "Argentines value long, personal conversations — don't rush medical consultations",
        "Voseo (use of 'vos' instead of 'tú') is standard Argentine Spanish",
        "Patients expect emotional engagement from doctors — clinical detachment seems cold",
        "Mate (shared tea) is a bonding ritual — offering mate is a sign of trust"
      ],
      familyDecisionMaking: [
        "Strong family bonds — mother and eldest daughter often coordinate care",
        "Italian and Spanish heritage influences family-centered approach",
        "Adult children typically care for aging parents at home",
        "Family visits are frequent and expected during hospitalization",
        "Medical decisions often discussed as a family unit"
      ],
      religiousSpiritual: [
        "Predominantly Catholic — religious medals, prayer, and sacraments are important",
        "Pope Francis is Argentine — Catholicism has special cultural significance",
        "Jewish community in Buenos Aires is the largest in Latin America",
        "Growing evangelical Protestant movement, especially in lower-income areas",
        "Folk Catholicism includes devotion to non-canonical saints (Gauchito Gil)"
      ],
      healthBeliefs: [
        "Psychoanalysis is deeply embedded in culture — Buenos Aires has more psychoanalysts per capita than any city",
        "Herbal medicine (yuyos) including yerba mate is considered health-promoting",
        "Curanderos (folk healers) are consulted in rural areas",
        "Argentine patients are generally medically literate and engaged",
        "Diet is meat-heavy (asado culture) — dietary changes may face resistance"
      ],
      genderContact: [
        "Generally comfortable with cross-gender medical care",
        "Physical warmth (handshake, touch on arm, cheek kiss) is normal",
        "Machismo culture exists but is evolving, especially in cities",
        "Women's rights movement is strong — respect patient autonomy",
        "LGBTQ+ rights are legally protected — inclusive care expected"
      ],
      doList: [
        "Be warm, personal, and take time for conversation",
        "Allow family involvement — it's a source of strength",
        "Understand the cultural importance of psychotherapy",
        "Respect mate-sharing traditions in appropriate settings",
        "Use Argentine Spanish conventions"
      ],
      dontList: [
        "Don't be formal or distant — it creates distrust",
        "Don't compare Argentina to other Latin American countries",
        "Don't restrict family visits excessively",
        "Don't dismiss herbal remedies without discussion",
        "Don't overlook mental health — Argentines are generally open to therapy"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Argentina", url: "https://en.wikipedia.org/wiki/Culture_of_Argentina" },
      { label: "WHO Argentina", url: "https://www.who.int/countries/arg" }
    ]
  },
  // ─── COLOMBIA ──────────────────────────────────────────────────────
  {
    name: "Colombia",
    isoCode: "co",
    lat: 4.71, lng: -74.07,
    languages: ["Spanish"],
    primaryLanguageFamily: "spanish",
    religions: ["Christianity (Catholic)", "Protestantism"],
    region: "South America",
    cultural: {
      communication: [
        "Colombians are warm and friendly — personal rapport is essential before medical talk",
        "Address patients as 'Don/Doña' + first name as a sign of respect",
        "Indirect communication — negative news should be delivered gently and gradually",
        "Regional dialects vary significantly — Costeño (coast) vs Cachaco (Bogotá)",
        "Humor and warmth are appreciated in medical settings"
      ],
      familyDecisionMaking: [
        "Family-centered culture — entire families may arrive for consultations",
        "Mother figures (la mamá) are often the primary health decision-makers",
        "Compadrazgo (godparent) system extends family decision-making networks",
        "Children are expected to care for elderly parents",
        "Community solidarity is strong, especially in rural areas"
      ],
      religiousSpiritual: [
        "Strong Catholic faith — saints, rosaries, and prayer are common comfort measures",
        "Evangelical Christianity is rapidly growing",
        "Indigenous communities have distinct spiritual healing traditions",
        "Afro-Colombian communities blend Catholic and African spiritual practices",
        "Religious fatalism ('si Dios quiere') may influence treatment compliance"
      ],
      healthBeliefs: [
        "Traditional medicine varies by region — Amazonian, Andean, and Caribbean traditions",
        "Sobandero (traditional bonesetter/healer) is widely consulted",
        "Herbal remedies (aromáticas) are first-line treatment for many conditions",
        "Hot/cold food classification influences illness management",
        "Mental health stigma is significant — 'nervios' is a common idiom of distress"
      ],
      genderContact: [
        "Generally comfortable with cross-gender care but modesty is valued",
        "Machismo influences health-seeking behavior — men may delay care",
        "Women in rural areas may have limited healthcare access and autonomy",
        "Physical warmth in medical settings is appreciated",
        "Gender-based violence is a health concern — screen sensitively"
      ],
      doList: [
        "Build personal rapport before clinical discussions",
        "Include family in care planning",
        "Ask about herbal medicine and traditional remedies",
        "Be aware of regional cultural differences within Colombia",
        "Use respectful titles (Don/Doña)"
      ],
      dontList: [
        "Don't be impersonal or rush consultations",
        "Don't dismiss religious coping mechanisms",
        "Don't assume all Colombians share the same cultural background",
        "Don't ignore potential trauma from conflict/displacement history",
        "Don't overlook herbal interactions with prescribed medications"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Colombia", url: "https://en.wikipedia.org/wiki/Culture_of_Colombia" },
      { label: "WHO Colombia", url: "https://www.who.int/countries/col" }
    ]
  },
  // ─── KENYA ─────────────────────────────────────────────────────────
  {
    name: "Kenya",
    isoCode: "ke",
    lat: -1.29, lng: 36.82,
    languages: ["Swahili", "English", "Kikuyu", "Luo", "Kalenjin"],
    primaryLanguageFamily: "english",
    religions: ["Christianity (Protestant)", "Christianity (Catholic)", "Islam", "Traditional beliefs"],
    region: "East Africa",
    cultural: {
      communication: [
        "Greetings are essential — 'Habari' (How are you?) before any discussion",
        "Respect for age and authority is paramount — use 'Mzee' for elders",
        "English and Swahili are official but many prefer their ethnic language",
        "Indirect communication is common — patients may agree to be polite",
        "Community health workers are trusted intermediaries"
      ],
      familyDecisionMaking: [
        "Extended family involvement in medical decisions is standard",
        "Clan and ethnic community (Kikuyu, Luo, Kalenjin, etc.) influence health practices",
        "Male elders often make decisions for the family",
        "Harambee (communal fundraising) may be organized for medical costs",
        "Urban Kenyans may have more individualized decision-making"
      ],
      religiousSpiritual: [
        "Christianity is predominant — prayer and church support are key coping mechanisms",
        "Coastal and northeastern Kenya is predominantly Muslim",
        "Traditional beliefs about ancestral spirits coexist with organized religion",
        "Faith healing services are widely attended",
        "Witchcraft beliefs influence some communities — illness may be attributed to curses"
      ],
      healthBeliefs: [
        "Traditional herbalists (mganga) are widely consulted",
        "HIV/AIDS carries significant stigma despite high prevalence",
        "Mental illness is often attributed to spiritual causes",
        "Childbirth practices include traditional birth attendants (TBAs)",
        "Malaria and infectious disease dominate health concerns"
      ],
      genderContact: [
        "Female patients may prefer female providers, especially in Muslim communities",
        "FGM/C is practiced in some ethnic groups — approach sensitively",
        "Gender roles are changing rapidly in urban areas",
        "Women may need permission from husbands to seek medical care in rural areas",
        "Male circumcision is culturally important in many communities"
      ],
      doList: [
        "Greet patients properly and ask about their family",
        "Learn basic Swahili greetings",
        "Involve community health workers when appropriate",
        "Ask about traditional medicine use",
        "Be sensitive to ethnic diversity and intra-community differences"
      ],
      dontList: [
        "Don't skip greetings — it's disrespectful",
        "Don't assume all Kenyans have the same cultural practices",
        "Don't dismiss witchcraft beliefs — engage with them respectfully",
        "Don't ignore the role of community health workers",
        "Don't stigmatize HIV/AIDS patients"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Kenya", url: "https://en.wikipedia.org/wiki/Culture_of_Kenya" },
      { label: "WHO Kenya", url: "https://www.who.int/countries/ken" }
    ]
  },
  // ─── SOUTH AFRICA ──────────────────────────────────────────────────
  {
    name: "South Africa",
    isoCode: "za",
    lat: -33.93, lng: 18.42,
    languages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sotho", "Tswana"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Traditional African beliefs", "Islam", "Hinduism"],
    region: "Sub-Saharan Africa",
    cultural: {
      communication: [
        "Ubuntu ('I am because we are') shapes communal care and relationship-building",
        "11 official languages — always ask which language the patient prefers",
        "Respect for elders is fundamental — use titles and deferential language",
        "Patients may be reserved initially — build trust gradually",
        "Historical medical mistrust due to apartheid-era healthcare discrimination"
      ],
      familyDecisionMaking: [
        "Extended family and community are central to health decisions",
        "Traditional leaders (induna, chief) may need to be consulted in rural areas",
        "Mothers and grandmothers are key healthcare decision-makers for families",
        "Stokvel (savings clubs) may be organized to cover medical expenses",
        "LGBT families exist but face discrimination in some communities"
      ],
      religiousSpiritual: [
        "Christianity blended with traditional African beliefs is common",
        "Sangoma (traditional diviner) and inyanga (herbalist) are widely consulted",
        "Ancestor veneration is central to Zulu, Xhosa, and other cultures",
        "Zion Christian Church and other African-initiated churches have specific health practices",
        "Muslim and Hindu communities follow their respective traditions"
      ],
      healthBeliefs: [
        "Traditional healers are recognized by law and widely consulted",
        "HIV/AIDS is a major concern — stigma persists but awareness is high",
        "Muti (traditional medicine) may interact with prescribed medications",
        "Witchcraft and sorcery may be cited as causes of illness",
        "Tuberculosis is endemic — community health approaches are important"
      ],
      genderContact: [
        "Preferences vary by community — always ask",
        "Gender-based violence is a significant health concern",
        "Rural women may have limited healthcare autonomy",
        "Male circumcision (ulwaluko) in Xhosa culture is a rite of passage",
        "LGBTQ+ rights are constitutionally protected but social acceptance varies"
      ],
      doList: [
        "Embrace Ubuntu principles — show communal respect",
        "Ask about language preferences — don't assume English",
        "Inquire about traditional medicine use without judgment",
        "Be sensitive to apartheid-era medical trauma",
        "Work with traditional healers when appropriate"
      ],
      dontList: [
        "Don't dismiss sangoma or traditional healer consultations",
        "Don't assume all South Africans speak English comfortably",
        "Don't ignore the diversity of South African cultures",
        "Don't stigmatize HIV/AIDS or TB patients",
        "Don't underestimate the impact of historical healthcare discrimination"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of South Africa", url: "https://en.wikipedia.org/wiki/Culture_of_South_Africa" },
      { label: "WHO South Africa", url: "https://www.who.int/countries/zaf" }
    ]
  },
  // ─── IRAQ ──────────────────────────────────────────────────────────
  {
    name: "Iraq",
    isoCode: "iq",
    lat: 33.31, lng: 44.37,
    languages: ["Arabic", "Kurdish", "Turkmen"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Shia)", "Islam (Sunni)", "Christianity", "Yazidism"],
    region: "Middle East",
    cultural: {
      communication: [
        "Hospitality and warmth are central — offer tea or coffee before discussions",
        "Honor (sharaf) is paramount — avoid anything that could be seen as shaming",
        "Use formal Arabic greetings — 'As-salamu alaykum' shows respect",
        "Bad news must be delivered gradually and often through a family elder first",
        "War trauma and PTSD are widespread — approach mental health carefully"
      ],
      familyDecisionMaking: [
        "Patriarchal family structure — eldest male makes medical decisions",
        "Tribal (ashira) affiliations influence healthcare access and decisions",
        "Women's healthcare decisions often require male family member approval",
        "Extended family visits to hospitalized patients are expected and large",
        "Kurdish communities may have different family dynamics than Arab communities"
      ],
      religiousSpiritual: [
        "Islam guides daily life — prayer times, Ramadan fasting, halal dietary laws",
        "Shia-Sunni distinctions are important — religious mourning periods differ",
        "Yazidi patients have unique beliefs — they are not Muslim and should not be treated as such",
        "Christian Iraqis (Chaldean, Assyrian) follow Eastern Christian traditions",
        "Body must be buried within 24 hours; autopsy is generally opposed"
      ],
      healthBeliefs: [
        "War-related trauma and PTSD are extremely common but stigmatized",
        "Traditional medicine (al-tibb al-sha'bi) is used alongside Western medicine",
        "Evil eye (al-ayn) and jinn are believed to cause illness",
        "Mental illness is heavily stigmatized — often hidden from community",
        "Pain expression is culturally acceptable and may be vocal"
      ],
      genderContact: [
        "Female patients must have female providers whenever possible",
        "Male doctors should not be alone with female patients without a chaperone",
        "Physical modesty is paramount — minimize exposure during examinations",
        "Handshaking between genders is inappropriate in conservative communities",
        "Head coverings should not be removed unless medically essential"
      ],
      doList: [
        "Show warmth and hospitality — offer tea if possible",
        "Provide same-gender medical staff for female patients",
        "Be sensitive to war trauma and PTSD symptoms",
        "Respect Shia/Sunni/Kurdish/Yazidi differences",
        "Include family in all medical discussions"
      ],
      dontList: [
        "Don't deliver bad news directly without family consultation",
        "Don't assume all Iraqis are Arab or Muslim",
        "Don't shake hands with opposite-gender patients without their initiation",
        "Don't dismiss PTSD symptoms or trauma history",
        "Don't schedule procedures during Muharram or Ramadan without discussion"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Iraq", url: "https://en.wikipedia.org/wiki/Culture_of_Iraq" },
      { label: "WHO Iraq", url: "https://www.who.int/countries/irq" }
    ]
  },
  // ─── ISRAEL ────────────────────────────────────────────────────────
  {
    name: "Israel",
    isoCode: "il",
    lat: 31.77, lng: 35.22,
    languages: ["Hebrew", "Arabic", "Russian", "English"],
    primaryLanguageFamily: "other",
    religions: ["Judaism", "Islam", "Christianity", "Druze"],
    region: "Middle East",
    cultural: {
      communication: [
        "Direct communication style (dugri/tachles) — Israelis appreciate straightforwardness",
        "Informality is common — first names are used quickly, even with doctors",
        "Patients may be assertive and ask many questions — this shows engagement",
        "Arabic-speaking patients may prefer indirect communication styles",
        "Russian-speaking immigrants may have different expectations from Soviet-era healthcare"
      ],
      familyDecisionMaking: [
        "Family involvement varies by community — secular, Orthodox, Arab, Druze",
        "Ultra-Orthodox (Haredi) families may consult a rabbi before medical decisions",
        "Arab-Israeli families often have patriarchal decision-making structures",
        "Military service creates strong peer support networks",
        "Holocaust survivor families may have generational trauma affecting healthcare interactions"
      ],
      religiousSpiritual: [
        "Shabbat (Friday sunset to Saturday sunset) — Orthodox patients cannot use electronics or sign forms",
        "Kosher dietary laws — separate meat and dairy, no pork, no shellfish",
        "Jewish law (halacha) has specific rules about end-of-life care, autopsy, and organ donation",
        "Muslim and Druze patients follow their respective religious practices",
        "Jewish patients may request visits from a rabbi; Muslim patients from an imam"
      ],
      healthBeliefs: [
        "Israelis are generally highly medically literate and engaged",
        "Universal healthcare system — patients expect high-quality, accessible care",
        "Complementary medicine is popular — acupuncture, naturopathy, homeopathy",
        "Trauma and PTSD from conflict are widespread — normalize mental health support",
        "Ethiopian Jewish and Russian immigrant communities may have distinct health beliefs"
      ],
      genderContact: [
        "Orthodox Jewish patients require same-gender providers",
        "Ultra-Orthodox women should not be touched by male providers",
        "Arab-Israeli women may require female providers and chaperones",
        "Secular Israelis are generally comfortable with cross-gender care",
        "Niddah (menstrual purity laws) may affect Orthodox women's interactions"
      ],
      doList: [
        "Be direct and clear — Israelis appreciate straightforwardness",
        "Ask about religious observance level — it varies greatly",
        "Accommodate Shabbat observance for Orthodox patients",
        "Provide kosher food options",
        "Be sensitive to trauma and security-related stress"
      ],
      dontList: [
        "Don't assume all Israelis have the same religious practices",
        "Don't schedule procedures on Shabbat for Orthodox patients without discussion",
        "Don't serve non-kosher food to observant patients",
        "Don't touch Orthodox patients of the opposite gender",
        "Don't make assumptions about political views"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Israel", url: "https://en.wikipedia.org/wiki/Culture_of_Israel" },
      { label: "WHO Israel", url: "https://www.who.int/countries/isr" }
    ]
  },
  // ─── POLAND ────────────────────────────────────────────────────────
  {
    name: "Poland",
    isoCode: "pl",
    lat: 52.23, lng: 21.01,
    languages: ["Polish"],
    primaryLanguageFamily: "other",
    religions: ["Christianity (Catholic)"],
    region: "Europe",
    cultural: {
      communication: [
        "Formal communication — use 'Pan/Pani' (Mr./Mrs.) until invited otherwise",
        "Polish patients may be reserved but expect thorough explanations",
        "Directness is valued but delivered with politeness",
        "Hand-kissing for women is a traditional greeting among older generations",
        "Patients expect professional competence and may challenge doctors respectfully"
      ],
      familyDecisionMaking: [
        "Family involvement is important — especially spouse and adult children",
        "Catholic values influence family roles and medical ethics",
        "Elderly parents are increasingly cared for at home",
        "Women often coordinate family healthcare decisions",
        "Young Poles are more individualistic in healthcare decisions"
      ],
      religiousSpiritual: [
        "Catholicism is deeply embedded in Polish culture and identity",
        "Catholic medical ethics strongly influence views on contraception, abortion, and end-of-life",
        "Saint and angel devotion is common — religious items in hospital rooms",
        "Chaplain visits and last rites are important for seriously ill patients",
        "All Saints' Day (November 1) is very important culturally"
      ],
      healthBeliefs: [
        "Strong faith in conventional medicine but herbal remedies (zioła) are also popular",
        "Spa and sanatorium culture — 'taking the waters' is a health tradition",
        "Mental health stigma is decreasing but still significant",
        "Polish patients may self-medicate with antibiotics obtained without prescription",
        "Vodka may be used as a folk remedy — ask about alcohol use"
      ],
      genderContact: [
        "Generally comfortable with cross-gender medical care",
        "Older patients may be more modest — explain procedures clearly",
        "Chivalry traditions mean older Polish men may be deferential to female doctors",
        "Women are generally empowered in healthcare decisions",
        "Physical examination modesty should be respected"
      ],
      doList: [
        "Use formal titles and show professional competence",
        "Respect Catholic beliefs and practices",
        "Allow family involvement in care",
        "Provide thorough explanations — Polish patients value information",
        "Ask about herbal supplement use"
      ],
      dontList: [
        "Don't be informal too quickly — respect formality",
        "Don't dismiss Catholic beliefs about end-of-life care",
        "Don't assume Poland is 'Eastern European' — many Poles identify as Central European",
        "Don't overlook herbal remedy interactions",
        "Don't be surprised by direct questioning — it shows engagement"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Poland", url: "https://en.wikipedia.org/wiki/Culture_of_Poland" },
      { label: "WHO Poland", url: "https://www.who.int/countries/pol" }
    ]
  },
  // ─── SWEDEN ────────────────────────────────────────────────────────
  {
    name: "Sweden",
    isoCode: "se",
    lat: 59.33, lng: 18.07,
    languages: ["Swedish"],
    primaryLanguageFamily: "other",
    religions: ["Christianity (Lutheran)", "None/Secular", "Islam"],
    region: "Europe",
    cultural: {
      communication: [
        "Reserved, understated communication style — avoid exaggeration or emotional displays",
        "Lagom ('just the right amount') is a core cultural value — moderation in all things",
        "Patients expect evidence-based, thorough explanations",
        "First names are used almost universally — formality is rare",
        "Swedes value personal space and may seem distant initially"
      ],
      familyDecisionMaking: [
        "Individual autonomy is paramount — patients make their own decisions",
        "Gender equality is among the highest globally — both parents are equally involved",
        "Elderly care is primarily through public services, not family caregiving",
        "Children's rights are strongly protected — children's voices are heard in medical care",
        "Immigrant families may have more collective decision-making styles"
      ],
      religiousSpiritual: [
        "One of the most secular countries globally — religion is private and rarely discussed",
        "Growing Muslim community — accommodate halal food and prayer needs",
        "Lutheran traditions remain culturally important for life ceremonies",
        "Midsummer and Christmas are cultural rather than religious celebrations",
        "Spiritual but not religious is a common self-identification"
      ],
      healthBeliefs: [
        "Universal healthcare (vårdcentralen) — patients expect evidence-based care",
        "Preventive care and healthy lifestyle are culturally valued",
        "Friskvård (wellness) culture — exercise and outdoor activities are central",
        "Mental health is openly discussed — Sweden has strong mental health services",
        "Antibiotic stewardship is well-understood — patients don't expect antibiotics for viral infections"
      ],
      genderContact: [
        "Gender is rarely a factor in medical provider selection",
        "Strong LGBTQ+ rights — inclusive language and practices expected",
        "Immigrant patients may have gender-specific care preferences",
        "Physical examination is matter-of-fact — less modesty concern than many cultures",
        "Parental leave for both parents means both may attend children's appointments"
      ],
      doList: [
        "Be evidence-based and thorough in explanations",
        "Respect individual autonomy and privacy",
        "Be straightforward but not aggressive in communication",
        "Accommodate diverse immigrant population needs",
        "Support preventive care and healthy lifestyle discussions"
      ],
      dontList: [
        "Don't be overly emotional or dramatic in delivery",
        "Don't make assumptions based on gender roles",
        "Don't be excessively formal — it creates distance",
        "Don't ignore immigrant patients' cultural needs",
        "Don't assume secularity — ask about spiritual needs"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Sweden", url: "https://en.wikipedia.org/wiki/Culture_of_Sweden" },
      { label: "WHO Sweden", url: "https://www.who.int/countries/swe" }
    ]
  },
  // ─── BANGLADESH ────────────────────────────────────────────────────
  {
    name: "Bangladesh",
    isoCode: "bd",
    lat: 23.81, lng: 90.41,
    languages: ["Bengali (Bangla)", "English"],
    primaryLanguageFamily: "other",
    religions: ["Islam (Sunni)", "Hinduism", "Buddhism", "Christianity"],
    region: "South Asia",
    cultural: {
      communication: [
        "Respectful, formal communication — use 'Bhai' (brother) or 'Apa' (sister) as respectful address",
        "Indirect communication is common — 'maybe' or 'we'll see' often means no",
        "Eye contact with authority figures may be limited as a sign of respect",
        "Bengali is deeply tied to national identity — speaking it shows respect",
        "Patients may not volunteer information about symptoms — ask specific questions"
      ],
      familyDecisionMaking: [
        "Male family head (husband, father, eldest brother) typically makes healthcare decisions",
        "Women may need permission from male relatives to seek medical care",
        "Extended family is deeply involved in care — expect large family groups",
        "Dowry and economic factors may influence willingness to invest in healthcare",
        "Rural patients may rely on community leaders for medical guidance"
      ],
      religiousSpiritual: [
        "Islam is the dominant religion — prayer times, halal food, Ramadan fasting",
        "Hindu patients observe different dietary and ritual practices",
        "Purdah (seclusion of women) may limit women's access to healthcare",
        "Religious amulets (tabiz) may be worn for protection — don't remove",
        "After death, Islamic burial practices require prompt burial"
      ],
      healthBeliefs: [
        "Traditional healers (kabiraj) and homeopathy are widely used",
        "Ayurvedic and Unani medicine are popular — 'hot/cold' food classifications",
        "Mental illness is heavily stigmatized — attributed to jinn or black magic",
        "Waterborne diseases and malnutrition are common health concerns",
        "Patients may prefer injections over oral medications"
      ],
      genderContact: [
        "Female patients require female providers — this is very strictly observed",
        "Male doctors examining female patients need female chaperones and family consent",
        "Handshaking between genders is not customary",
        "Women may be reluctant to undress for examinations — explain necessity carefully",
        "Menstruation-related health issues may be taboo to discuss openly"
      ],
      doList: [
        "Provide female healthcare providers for female patients",
        "Involve male family members in care decisions respectfully",
        "Ask about traditional medicine use — kabiraj and homeopathy",
        "Accommodate prayer times and halal dietary needs",
        "Use visual aids — literacy rates vary"
      ],
      dontList: [
        "Don't insist on male providers for female patients",
        "Don't dismiss traditional healing practices outright",
        "Don't schedule procedures during Ramadan without discussion",
        "Don't assume literacy — provide pictorial medication instructions",
        "Don't ignore purdah practices — work within cultural frameworks"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Bangladesh", url: "https://en.wikipedia.org/wiki/Culture_of_Bangladesh" },
      { label: "WHO Bangladesh", url: "https://www.who.int/countries/bgd" }
    ]
  },
  // ─── MALAYSIA ──────────────────────────────────────────────────────
  {
    name: "Malaysia",
    isoCode: "my",
    lat: 3.14, lng: 101.69,
    languages: ["Malay (Bahasa Malaysia)", "English", "Mandarin", "Tamil"],
    primaryLanguageFamily: "malay",
    religions: ["Islam", "Buddhism", "Christianity", "Hinduism", "Taoism"],
    region: "Southeast Asia",
    cultural: {
      communication: [
        "Multicultural society — communication norms vary between Malay, Chinese, and Indian communities",
        "Face-saving is important — avoid public criticism or embarrassment",
        "Use titles — 'Encik/Puan' for Malay, 'Mr/Mrs' for Chinese and Indian",
        "Malay patients may be indirect; Chinese Malaysian patients may be more direct",
        "English is widely spoken as a second language"
      ],
      familyDecisionMaking: [
        "Family involvement varies by ethnicity — Malay and Indian families are more collective",
        "Chinese Malaysian families may defer to the eldest son",
        "Malay families consult with extended family and sometimes religious leaders",
        "Indian Malaysian families may consult with community or temple leaders",
        "Urban Malaysians tend toward more individual decision-making"
      ],
      religiousSpiritual: [
        "Islam is the official religion — Malay patients require halal food and gender-separated care",
        "Buddhist Chinese Malaysians may have vegetarian dietary preferences",
        "Hindu Indian Malaysians may have dietary restrictions and festival observances",
        "Religious diversity means providers must be culturally versatile",
        "Traditional Malay beliefs (bomoh/pawang) coexist with Islam"
      ],
      healthBeliefs: [
        "Traditional Malay medicine (perubatan Melayu) includes bomoh (healer) consultations",
        "Chinese traditional medicine (TCM) is widely practiced by Chinese Malaysians",
        "Ayurvedic medicine is used by Indian Malaysian communities",
        "Angin (wind in the body) is a common Malay illness concept",
        "All three major communities may use traditional alongside modern medicine"
      ],
      genderContact: [
        "Malay Muslim women require female providers and chaperones",
        "Chinese and Indian Malaysian women are generally more flexible",
        "Physical modesty is important across all communities",
        "Handshaking between genders may be avoided by Muslim Malaysians",
        "Left hand is considered unclean — use right hand for giving/receiving"
      ],
      doList: [
        "Ask about ethnic and religious background to tailor care",
        "Provide halal food for Muslim patients",
        "Accommodate traditional medicine preferences from all communities",
        "Offer same-gender providers for Muslim patients",
        "Learn basic greetings in Malay, Mandarin, and Tamil"
      ],
      dontList: [
        "Don't assume all Malaysians are Malay or Muslim",
        "Don't serve non-halal food to Muslim patients",
        "Don't use the left hand for giving items or touching patients",
        "Don't point with your index finger — use whole hand or thumb",
        "Don't make assumptions based on appearance about ethnicity"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Malaysia", url: "https://en.wikipedia.org/wiki/Culture_of_Malaysia" },
      { label: "WHO Malaysia", url: "https://www.who.int/countries/mys" }
    ]
  },
  // ─── MOROCCO ───────────────────────────────────────────────────────
  {
    name: "Morocco",
    isoCode: "ma",
    lat: 34.02, lng: -6.84,
    languages: ["Arabic", "Berber (Amazigh)", "French"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "North Africa",
    cultural: {
      communication: [
        "Warm, hospitality-driven communication — mint tea is offered before any discussion",
        "Darija (Moroccan Arabic) differs significantly from Modern Standard Arabic",
        "Berber communities speak Tamazight — not Arabic",
        "French is widely used in medical and professional settings",
        "Indirect communication — saving face is essential"
      ],
      familyDecisionMaking: [
        "Family patriarchs traditionally make medical decisions",
        "Women's autonomy is increasing, especially in urban areas (Casablanca, Rabat)",
        "Extended family network is deeply involved in care",
        "Community solidarity is strong, especially in rural areas",
        "Royal family and national identity influence cultural norms"
      ],
      religiousSpiritual: [
        "Sunni Islam (Maliki school) guides daily life — prayer, fasting, dietary laws",
        "Ramadan fasting affects medication schedules",
        "Belief in jinn and evil eye (l-ayn) is widespread",
        "Marabout shrines (saints' tombs) are visited for healing",
        "Islamic end-of-life practices — burial within 24 hours, facing Mecca"
      ],
      healthBeliefs: [
        "Traditional medicine includes herbal remedies from souks (markets)",
        "Hammam (bathhouse) is used for health and purification",
        "Cupping (hijama) is practiced as prophetic medicine",
        "Mental illness is attributed to jinn or spiritual causes in traditional communities",
        "Hot/cold food classification is used in illness management"
      ],
      genderContact: [
        "Female patients strongly prefer female providers",
        "Physical modesty is important — minimize body exposure",
        "Handshaking between genders varies — follow patient's lead",
        "Male doctors should have chaperones with female patients",
        "Hijab should not be removed unless medically necessary"
      ],
      doList: [
        "Accept tea when offered — it's a sign of hospitality",
        "Provide female providers for female patients",
        "Ask about fasting during Ramadan",
        "Be aware of Berber language and cultural differences",
        "Accommodate Islamic dietary requirements"
      ],
      dontList: [
        "Don't refuse hospitality (tea, food) — it's considered rude",
        "Don't assume all Moroccans speak Arabic — many are Berber",
        "Don't dismiss traditional healing practices",
        "Don't schedule elective procedures during Ramadan",
        "Don't eat, drink, or smoke in front of fasting patients"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Morocco", url: "https://en.wikipedia.org/wiki/Culture_of_Morocco" },
      { label: "WHO Morocco", url: "https://www.who.int/countries/mar" }
    ]
  },
  // ─── GREECE ────────────────────────────────────────────────────────
  {
    name: "Greece",
    isoCode: "gr",
    lat: 37.98, lng: 23.73,
    languages: ["Greek"],
    primaryLanguageFamily: "other",
    religions: ["Christianity (Greek Orthodox)"],
    region: "Europe",
    cultural: {
      communication: [
        "Warm, expressive communication — gestures and emotion are part of normal conversation",
        "Nodding upward means 'no' and downward means 'yes' — opposite of many cultures",
        "Philotimo (sense of honor and duty) shapes social interactions",
        "Personal space is closer than Northern European norms",
        "Patients expect warm, personal rapport with their doctor"
      ],
      familyDecisionMaking: [
        "Family is the core social unit — deep involvement in healthcare decisions",
        "Mother (mama) is often the central figure in family health coordination",
        "Children are expected to care for elderly parents",
        "Extended family networks mobilize during illness",
        "Name days are as important as birthdays — know your patient's name day"
      ],
      religiousSpiritual: [
        "Greek Orthodox Christianity is deeply tied to national identity",
        "Fasting periods (Great Lent, etc.) involve vegan diets — affects nutrition",
        "Holy oil and holy water may be used for healing",
        "Saints are believed to intercede for the sick — icons may be brought to hospital",
        "End-of-life care involves prayers, last rites, and candle lighting"
      ],
      healthBeliefs: [
        "Mediterranean diet is foundational to health beliefs",
        "Evil eye (mati) is a widespread folk belief — blue eye amulets are protective",
        "Herbal remedies (mountain tea, oregano oil, honey) are first-line treatments",
        "Mental health stigma persists, especially in rural areas and islands",
        "Greek patients are generally engaged and may seek multiple medical opinions"
      ],
      genderContact: [
        "Generally comfortable with cross-gender care",
        "Older women from villages may prefer female providers for intimate exams",
        "Physical warmth (handshake, arm touch) is appreciated",
        "Greek men may express pain vocally — this is culturally normal",
        "Modesty varies by generation and urban/rural setting"
      ],
      doList: [
        "Be warm and personable — show genuine concern",
        "Allow family to be present and involved",
        "Respect fasting periods and dietary practices",
        "Know that an upward nod means 'no'",
        "Allow time for relationship-building before clinical discussion"
      ],
      dontList: [
        "Don't be cold or clinical — Greeks value warmth",
        "Don't restrict family visits excessively",
        "Don't dismiss evil eye beliefs",
        "Don't confuse Greek head nod meanings",
        "Don't assume younger Greeks are non-religious"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Greece", url: "https://en.wikipedia.org/wiki/Culture_of_Greece" },
      { label: "WHO Greece", url: "https://www.who.int/countries/grc" }
    ]
  },
  // ─── PERU ──────────────────────────────────────────────────────────
  {
    name: "Peru",
    isoCode: "pe",
    lat: -12.05, lng: -77.04,
    languages: ["Spanish", "Quechua", "Aymara"],
    primaryLanguageFamily: "spanish",
    religions: ["Christianity (Catholic)", "Evangelical Christianity"],
    region: "South America",
    cultural: {
      communication: [
        "Warm, personal communication — greetings and small talk before business",
        "Indigenous communities may speak Quechua or Aymara — Spanish may be limited",
        "Indirect communication — 'maybe' or 'tomorrow' can mean 'no'",
        "Trust is built through relationship, not credentials alone",
        "Regional identity matters — Limeño (Lima), Serrano (highlands), Selvático (jungle)"
      ],
      familyDecisionMaking: [
        "Strong family networks — healthcare decisions involve extended family",
        "Compadrazgo (godparent) system extends family obligations",
        "In indigenous communities, community leaders may influence health decisions",
        "Mothers are central to children's healthcare decisions",
        "Migration patterns mean family may be dispersed — phone consultation is common"
      ],
      religiousSpiritual: [
        "Catholicism blended with indigenous Andean spirituality (syncretism)",
        "Pachamama (Mother Earth) reverence influences health and wellbeing beliefs",
        "Despacho offerings for healing are common in Andean communities",
        "Growing evangelical movement, especially in urban areas",
        "Religious fatalism — 'Dios dirá' (God will say) may influence treatment adherence"
      ],
      healthBeliefs: [
        "Traditional Andean medicine (curanderismo) is widely practiced",
        "Coca leaf tea is used medicinally and culturally — not associated with cocaine",
        "Susto (fright sickness) is a recognized cultural illness",
        "Hot/cold classification of foods and illness is fundamental",
        "Altitude sickness in highland communities is managed with traditional remedies"
      ],
      genderContact: [
        "Generally comfortable with cross-gender care in urban areas",
        "Rural and indigenous women may strongly prefer female providers",
        "Machismo culture exists but is evolving",
        "Domestic violence is a health concern — screen sensitively",
        "Modesty varies by region and community"
      ],
      doList: [
        "Learn about the patient's regional and ethnic background",
        "Offer interpretation for Quechua or Aymara speakers",
        "Ask about traditional remedies and coca tea use",
        "Build personal rapport before clinical discussions",
        "Respect Andean spiritual practices alongside Catholic faith"
      ],
      dontList: [
        "Don't assume all Peruvians are Spanish-speaking",
        "Don't dismiss coca tea as drug use",
        "Don't ignore susto, empacho, or other cultural illness concepts",
        "Don't overlook altitude-related health issues",
        "Don't treat indigenous patients without cultural awareness"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Peru", url: "https://en.wikipedia.org/wiki/Culture_of_Peru" },
      { label: "WHO Peru", url: "https://www.who.int/countries/per" }
    ]
  }
];

/** Regions list derived from data */
// Import and merge Africa countries
import { africaCountries } from "./africaCountries";
import { moreCountries } from "./moreCountries";

// Merge, avoiding duplicates by isoCode
const existingIsoCodes = new Set(countries.map(c => c.isoCode));
for (const ac of [...africaCountries, ...moreCountries]) {
  if (!existingIsoCodes.has(ac.isoCode)) {
    countries.push(ac);
  }
}

// Add new African countries programmatically
const newAfricanCountries: CountryData[] = [
  {
    name: "Ghana", isoCode: "gh", lat: 5.56, lng: -0.19,
    languages: ["English", "Akan (Twi)", "Ewe", "Dagbani"], primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Traditional beliefs"], region: "West Africa",
    cultural: {
      communication: ["English is official but Twi is the most widely spoken language", "Respect for elders is paramount — always greet the oldest person first", "Akan day names carry deep cultural significance", "Communication is warm and communal"],
      familyDecisionMaking: ["Extended family (abusua) is central to all major decisions", "Matrilineal inheritance in Akan communities affects family dynamics", "Chief and elder authority extends to community health decisions"],
      religiousSpiritual: ["Christianity is dominant but syncretic practices are common", "Traditional beliefs in ancestral spirits coexist with Christianity and Islam", "Naming ceremonies on the 8th day after birth are culturally significant"],
      healthBeliefs: ["Herbal medicine (aduru) is widely used", "Malaria is the leading health concern", "Traditional birth attendants are common in rural areas", "Sickle cell disease is prevalent"],
      genderContact: ["Modesty is valued — provide adequate draping", "Female patients may prefer female providers in northern Ghana", "Queen mothers (ohemaa) have significant authority in Akan communities"],
      doList: ["Greet with 'Ete sen?' in Twi", "Ask about herbal medicine use", "Respect elder authority in healthcare decisions", "Be aware of sickle cell disease prevalence"],
      dontList: ["Don't use the left hand for giving or receiving", "Don't dismiss traditional healing practices", "Don't bypass elder family members in discussions", "Don't assume English proficiency in rural areas"]
    },
    sources: [{ label: "Wikipedia — Culture of Ghana", url: "https://en.wikipedia.org/wiki/Culture_of_Ghana" }, { label: "WHO Ghana", url: "https://www.who.int/countries/gha" }]
  },
  {
    name: "Tanzania", isoCode: "tz", lat: -6.79, lng: 39.28,
    languages: ["Swahili", "English"], primaryLanguageFamily: "other",
    religions: ["Christianity", "Islam", "Traditional beliefs"], region: "East Africa",
    cultural: {
      communication: ["Swahili is the national language — greet with 'Habari' or 'Mambo'", "Greetings are extensive and culturally required", "Respect for elders (heshima) is deeply embedded", "Indirect communication is preferred"],
      familyDecisionMaking: ["Extended family involvement in healthcare decisions is standard", "Male family heads typically make final decisions in traditional communities", "Maasai communities have specific clan-based decision structures"],
      religiousSpiritual: ["Christianity and Islam are roughly equal — varies by region", "Zanzibar is predominantly Muslim", "Traditional beliefs in ancestral spirits persist", "Maasai spiritual practices involve cattle and specific rituals"],
      healthBeliefs: ["Traditional medicine (dawa za asili) is first resort for many", "Mganga consultations are common and respected", "HIV/AIDS awareness is high but stigma persists", "Malaria prevention is a major priority"],
      genderContact: ["Muslim women on the coast prefer female providers", "Modesty is important across communities", "FGM is still practiced in some communities"],
      doList: ["Learn basic Swahili greetings", "Allow time for proper greetings", "Ask about traditional medicine use", "Respect regional religious differences"],
      dontList: ["Don't rush greetings", "Don't dismiss mganga consultations", "Don't assume one religion", "Don't use the left hand for giving"]
    },
    sources: [{ label: "Wikipedia — Culture of Tanzania", url: "https://en.wikipedia.org/wiki/Culture_of_Tanzania" }, { label: "WHO Tanzania", url: "https://www.who.int/countries/tza" }]
  },
  {
    name: "Cameroon", isoCode: "cm", lat: 3.87, lng: 11.52,
    languages: ["French", "English", "Fulfulde", "Ewondo"], primaryLanguageFamily: "french",
    religions: ["Christianity", "Islam", "Traditional beliefs"], region: "Central Africa",
    cultural: {
      communication: ["French and English are both official — Cameroon is bilingual", "Anglophone/Francophone tension is significant", "Pidgin English is widely spoken as a lingua franca", "Patients may not question doctors out of respect"],
      familyDecisionMaking: ["Extended family is deeply involved in healthcare decisions", "Northern Cameroon has patriarchal, Islamic family structures", "Fon (chief) authority is respected in many communities"],
      religiousSpiritual: ["Christianity dominates south; Islam dominates north", "Traditional beliefs persist throughout", "Sorcery and witchcraft beliefs influence health-seeking behavior"],
      healthBeliefs: ["Traditional healers are widely consulted", "Illness may be attributed to sorcery", "HIV/AIDS stigma is significant", "Malaria and tropical diseases are primary concerns"],
      genderContact: ["Northern Muslim women require gender-separated care", "Modesty expectations vary between north and south", "Same-gender chaperones are expected for intimate examinations"],
      doList: ["Be sensitive to Anglophone/Francophone identity", "Ask about traditional medicine use", "Provide care in the patient's preferred language"],
      dontList: ["Don't assume French or English — ask preference", "Don't dismiss sorcery beliefs", "Don't ignore the Anglophone crisis context"]
    },
    sources: [{ label: "Wikipedia — Culture of Cameroon", url: "https://en.wikipedia.org/wiki/Culture_of_Cameroon" }, { label: "WHO Cameroon", url: "https://www.who.int/countries/cmr" }]
  },
  {
    name: "Senegal", isoCode: "sn", lat: 14.72, lng: -17.47,
    languages: ["French", "Wolof", "Pulaar", "Serer"], primaryLanguageFamily: "french",
    religions: ["Islam (Sunni, Sufi)", "Christianity"], region: "West Africa",
    cultural: {
      communication: ["Wolof is the lingua franca — 'Nanga def?' is the universal greeting", "Teranga (hospitality) is the defining cultural value", "Sufi Muslim brotherhoods are extremely influential"],
      familyDecisionMaking: ["Extended family (mbokk) is the core social unit", "Male family heads make major decisions", "Marabout guidance is sought for important decisions"],
      religiousSpiritual: ["95%+ Muslim — Islam permeates all aspects of daily life", "Sufi brotherhoods are uniquely influential", "Gris-gris (protective amulets) are worn universally — don't remove"],
      healthBeliefs: ["Marabout healing is the first resort for many conditions", "Traditional medicine is widely practiced", "Mental illness is attributed to djinn — stigma is extreme"],
      genderContact: ["Female patients require female providers in most contexts", "Modesty is paramount", "Women's health decisions may require husband's approval"],
      doList: ["Greet extensively in Wolof", "Respect teranga — accept hospitality", "Don't remove gris-gris amulets", "Work with marabouts on health messaging"],
      dontList: ["Don't refuse food or tea when offered", "Don't dismiss marabout healing", "Don't remove religious amulets", "Don't eat in front of fasting patients during Ramadan"]
    },
    sources: [{ label: "Wikipedia — Culture of Senegal", url: "https://en.wikipedia.org/wiki/Culture_of_Senegal" }, { label: "WHO Senegal", url: "https://www.who.int/countries/sen" }]
  },
  {
    name: "DR Congo", isoCode: "cd", lat: -4.32, lng: 15.31,
    languages: ["French", "Lingala", "Swahili", "Tshiluba", "Kikongo"], primaryLanguageFamily: "french",
    religions: ["Christianity (Catholic, Protestant, Kimbanguist)", "Islam"], region: "Central Africa",
    cultural: {
      communication: ["French is official but Lingala, Swahili, Tshiluba, and Kikongo are national languages", "Music and dance are integral to Congolese culture", "Respect for elders is paramount", "Eastern DRC patients may have conflict trauma"],
      familyDecisionMaking: ["Extended family (libota) is fundamental", "Community and church leaders influence health decisions", "Conflict has disrupted family structures"],
      religiousSpiritual: ["Christianity is dominant — Catholic Church is a major healthcare provider", "Kindoki (sorcery) beliefs influence health-seeking behavior", "Prayer and anointing are commonly requested"],
      healthBeliefs: ["Traditional healers (nganga) are widely consulted", "Ebola outbreaks created specific trust issues in eastern DRC", "SGBV is a major health issue in conflict zones", "Mental health needs are enormous"],
      genderContact: ["Modesty is important", "Conflict-related SGBV survivors need trauma-informed care", "Female patients may prefer female providers"],
      doList: ["Screen for conflict-related trauma sensitively", "Work with church leaders on health messaging", "Ask about traditional medicine use", "Use appropriate national language for the region"],
      dontList: ["Don't dismiss traditional healing practices", "Don't ignore Ebola-related distrust", "Don't force trauma disclosure", "Don't assume French proficiency"]
    },
    sources: [{ label: "Wikipedia — Culture of DR Congo", url: "https://en.wikipedia.org/wiki/Culture_of_the_Democratic_Republic_of_the_Congo" }, { label: "WHO DR Congo", url: "https://www.who.int/countries/cod" }]
  },
  {
    name: "Uganda", isoCode: "ug", lat: 0.35, lng: 32.58,
    languages: ["English", "Luganda", "Swahili", "Acholi"], primaryLanguageFamily: "english",
    religions: ["Christianity (Catholic, Anglican, Pentecostal)", "Islam"], region: "East Africa",
    cultural: {
      communication: ["English is official; Luganda is most widely spoken", "Greet with 'Oli otya?' in Luganda", "Respect for elders is deeply embedded", "Indirect communication is preferred for sensitive topics"],
      familyDecisionMaking: ["Extended family (clan system) is central", "Buganda Kingdom traditions influence central Uganda", "Church leaders are increasingly influential"],
      religiousSpiritual: ["Christianity is dominant — church attendance is high", "Traditional beliefs in ancestral spirits coexist with Christianity", "Faith healing through Pentecostal churches is popular"],
      healthBeliefs: ["Traditional medicine is first healthcare option for many", "HIV/AIDS response is a global model", "Malaria is the leading cause of illness", "Mental health services are extremely limited"],
      genderContact: ["Modesty is valued — particularly for women", "Female patients may prefer female providers", "LGBTQ+ issues are extremely sensitive — Uganda has strict laws"],
      doList: ["Greet respectfully in Luganda when possible", "Ask about herbal medicine use", "Respect church influence on health decisions", "Be sensitive about HIV/AIDS stigma"],
      dontList: ["Don't dismiss traditional medicine", "Don't assume English proficiency", "Don't ignore mental health needs", "Don't be judgmental about health-seeking delays"]
    },
    sources: [{ label: "Wikipedia — Culture of Uganda", url: "https://en.wikipedia.org/wiki/Culture_of_Uganda" }, { label: "WHO Uganda", url: "https://www.who.int/countries/uga" }]
  },
  {
    name: "Mozambique", isoCode: "mz", lat: -25.97, lng: 32.57,
    languages: ["Portuguese", "Makhuwa", "Tsonga", "Sena"], primaryLanguageFamily: "portuguese",
    religions: ["Christianity", "Islam", "Traditional beliefs"], region: "Southern Africa",
    cultural: {
      communication: ["Portuguese is official but only ~50% speak it as first language", "Makhuwa, Tsonga, and Sena are major local languages", "Communication is indirect — patients may not volunteer symptoms"],
      familyDecisionMaking: ["Northern Mozambique has matrilineal societies", "Southern Mozambique follows patrilineal patterns", "Traditional leaders (régulos) have community influence"],
      religiousSpiritual: ["Christianity and Islam coexist — north more Muslim, south more Christian", "Traditional beliefs in ancestral spirits are widespread", "Curandeiros have spiritual and medical roles"],
      healthBeliefs: ["Traditional medicine is primary healthcare for most rural Mozambicans", "HIV/AIDS prevalence is very high", "Malaria and TB are major concerns", "Mental health services are almost nonexistent outside cities"],
      genderContact: ["Women may have limited autonomy in southern regions", "Muslim women in north observe modesty practices", "Gender-based violence is a significant concern"],
      doList: ["Learn greetings in the local language", "Ask about traditional medicine use", "Be aware of matrilineal vs. patrilineal dynamics", "Screen for HIV sensitively"],
      dontList: ["Don't assume Portuguese proficiency", "Don't dismiss traditional healing", "Don't ignore spiritual dimensions of illness", "Don't overlook gender-based violence"]
    },
    sources: [{ label: "Wikipedia — Culture of Mozambique", url: "https://en.wikipedia.org/wiki/Culture_of_Mozambique" }, { label: "WHO Mozambique", url: "https://www.who.int/countries/moz" }]
  },
  {
    name: "Sudan", isoCode: "sd", lat: 15.59, lng: 32.53,
    languages: ["Arabic", "English", "Fur", "Beja"], primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"], region: "North Africa",
    cultural: {
      communication: ["Arabic (Sudanese dialect) is primary — greet with 'Assalamu Alaikum'", "Hospitality is deeply valued — tea is offered before discussions", "Tribal identity is very important"],
      familyDecisionMaking: ["Male family heads make healthcare decisions", "Extended family (usra) is deeply involved", "Tribal elders may be consulted for major decisions"],
      religiousSpiritual: ["Sunni Islam governs daily life", "Sufi traditions are strong", "Ramadan fasting affects medication schedules"],
      healthBeliefs: ["Islamic healing and traditional medicine coexist with modern medicine", "Quranic healing is practiced", "Mental illness is stigmatized — attributed to djinn"],
      genderContact: ["Strict gender separation is expected", "Female patients require female providers", "Handshaking between genders is not customary"],
      doList: ["Greet with Islamic greeting", "Provide female providers for female patients", "Accept tea when offered", "Accommodate prayer times"],
      dontList: ["Don't send male providers to examine women", "Don't dismiss Quranic healing", "Don't schedule procedures during Ramadan", "Don't eat in front of fasting patients"]
    },
    sources: [{ label: "Wikipedia — Culture of Sudan", url: "https://en.wikipedia.org/wiki/Culture_of_Sudan" }, { label: "WHO Sudan", url: "https://www.who.int/countries/sdn" }]
  },
  {
    name: "Angola", isoCode: "ao", lat: -8.84, lng: 13.23,
    languages: ["Portuguese", "Kimbundu", "Umbundu", "Kikongo"], primaryLanguageFamily: "portuguese",
    religions: ["Christianity (Catholic, Protestant)", "Traditional beliefs"], region: "Southern Africa",
    cultural: {
      communication: ["Portuguese is official — Angolan Portuguese has distinct expressions", "Respect for elders is deeply valued", "Civil war legacy means many patients have experienced trauma"],
      familyDecisionMaking: ["Extended family is central to healthcare decisions", "Church leaders are influential", "War disrupted family structures"],
      religiousSpiritual: ["Catholic Church is very influential", "Traditional beliefs in ancestral spirits persist", "Kimbanda (traditional spiritual practices) are widely followed"],
      healthBeliefs: ["Traditional medicine is widely used", "Illness may be attributed to sorcery (feitiçaria)", "Landmine injuries from the civil war remain an issue", "Mental health services are very limited"],
      genderContact: ["Modesty is valued", "Female patients may prefer female providers", "Gender-based violence is a significant concern"],
      doList: ["Build personal rapport before medical discussions", "Ask about traditional medicine use", "Be aware of war trauma", "Work with church leaders on health messaging"],
      dontList: ["Don't dismiss spiritual explanations of illness", "Don't assume Portuguese fluency", "Don't ignore mental health needs", "Don't overlook landmine injury rehab needs"]
    },
    sources: [{ label: "Wikipedia — Culture of Angola", url: "https://en.wikipedia.org/wiki/Culture_of_Angola" }, { label: "WHO Angola", url: "https://www.who.int/countries/ago" }]
  },
  {
    name: "Côte d'Ivoire", isoCode: "ci", lat: 5.36, lng: -4.01,
    languages: ["French", "Dioula", "Baoulé", "Bété"], primaryLanguageFamily: "french",
    religions: ["Islam", "Christianity", "Traditional beliefs"], region: "West Africa",
    cultural: {
      communication: ["French is official — Dioula is most widely spoken local language", "Respect for elders and traditional chiefs is deeply embedded", "Extensive greetings are expected"],
      familyDecisionMaking: ["Extended family is the core social unit", "Male family heads make major health decisions", "Village chiefs and elders have significant authority"],
      religiousSpiritual: ["North is predominantly Muslim; south is Christian/traditional", "Mask traditions and spirit worship are culturally significant", "Marabout consultations are common in Muslim communities"],
      healthBeliefs: ["Traditional healers (guérisseurs) are widely consulted", "HIV/AIDS prevalence is significant", "Malaria is the leading health concern", "Mental illness is stigmatized"],
      genderContact: ["Muslim women in the north prefer female providers", "FGM is practiced in some communities", "Same-gender care is preferred for intimate examinations"],
      doList: ["Greet extensively", "Ask about traditional medicine use", "Respect regional religious differences", "Work with community leaders"],
      dontList: ["Don't rush greetings", "Don't dismiss traditional healing", "Don't assume French proficiency in rural areas", "Don't ignore post-crisis context"]
    },
    sources: [{ label: "Wikipedia — Culture of Ivory Coast", url: "https://en.wikipedia.org/wiki/Culture_of_Ivory_Coast" }, { label: "WHO Côte d'Ivoire", url: "https://www.who.int/countries/civ" }]
  },
  {
    name: "Madagascar", isoCode: "mg", lat: -18.91, lng: 47.52,
    languages: ["Malagasy", "French"], primaryLanguageFamily: "french",
    religions: ["Christianity", "Traditional beliefs", "Islam"], region: "East Africa",
    cultural: {
      communication: ["Malagasy is the national language — French for formal settings", "Fihavanana (kinship/solidarity) is the core cultural value", "Respect for elders guides all social interactions"],
      familyDecisionMaking: ["Elders have the final say in major decisions", "Famadihana (turning of the bones) reflects deep ancestor reverence", "Community consensus is more valued than individual choice"],
      religiousSpiritual: ["Christianity is dominant but ancestor worship is deeply embedded", "Fady (taboos) govern daily life — specific foods or actions may be forbidden", "Traditional healers (ombiasy) use astrology and herbal medicine"],
      healthBeliefs: ["Traditional medicine (fanafody gasy) is first resort for most conditions", "Fady may prohibit certain medicines or procedures", "Plague outbreaks are a specific health concern"],
      genderContact: ["Modesty is valued but less strict than in many African countries", "Gender roles are relatively egalitarian in many communities", "Coastal Muslim communities observe Islamic gender norms"],
      doList: ["Ask about fady (taboos) — they may affect treatment", "Respect ancestor veneration practices", "Learn 'Manao ahoana' (hello) in Malagasy"],
      dontList: ["Don't violate fady — they're taken very seriously", "Don't dismiss ancestor-related beliefs", "Don't assume French proficiency", "Don't ignore traditional medicine interactions"]
    },
    sources: [{ label: "Wikipedia — Culture of Madagascar", url: "https://en.wikipedia.org/wiki/Culture_of_Madagascar" }, { label: "WHO Madagascar", url: "https://www.who.int/countries/mdg" }]
  },
];

for (const nc of newAfricanCountries) {
  if (!existingIsoCodes.has(nc.isoCode)) {
    countries.push(nc);
  }
}
/** All religions list derived from data */
export const ALL_RELIGIONS = [...new Set(countries.flatMap(c => c.religions))].sort();

/** Helper to get flag URL */
export const getFlagUrl = (isoCode: string) =>
  `https://flagcdn.com/w320/${isoCode.toLowerCase()}.png`;

/** Helper to get language family color */
export const getLanguageFamilyColor = (family: LanguageFamily): string =>
  LANGUAGE_FAMILIES.find(l => l.key === family)?.color ?? "hsl(200,20%,50%)";
