/**
 * Additional African countries for MedGlobe.
 * These are appended to the main countries array.
 */
import type { CountryData } from "./countries";

export const africaCountries: CountryData[] = [
  {
    name: "Algeria",
    isoCode: "dz",
    lat: 36.75, lng: 3.06,
    languages: ["Arabic", "Berber (Tamazight)", "French"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Arabic and French are both widely used; Berber is spoken in Kabylie and Aurès regions",
        "Respect for elders is paramount — use formal titles and honorifics",
        "Indirect communication style; avoid blunt delivery of bad news"
      ],
      familyDecisionMaking: [
        "Patriarchal family structure — senior males often lead medical decisions",
        "Extended family involvement in healthcare is expected",
        "Women may defer to husbands or fathers for consent"
      ],
      religiousSpiritual: [
        "Islam governs daily life — prayer times, halal food, and Ramadan fasting must be accommodated",
        "Ruqyah (Quranic recitation) is used alongside medical treatment",
        "Modesty requirements are strict, especially for women"
      ],
      healthBeliefs: [
        "Traditional Prophetic medicine (honey, black seed, cupping) is trusted",
        "Mental health stigma is significant — may be attributed to jinn or evil eye",
        "Hot/cold food theory influences dietary practices during illness"
      ],
      genderContact: [
        "Same-gender clinicians strongly preferred for women",
        "Male doctors should not examine female patients alone",
        "Handshakes between genders depend on the individual's religiosity"
      ],
      doList: [
        "Greet with 'Assalamu Alaikum'",
        "Provide halal food options",
        "Allow family involvement in medical discussions"
      ],
      dontList: [
        "Don't schedule procedures during prayer times when avoidable",
        "Don't assume French fluency — many rural areas speak Arabic or Berber only",
        "Don't serve pork-derived products"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Algeria", url: "https://en.wikipedia.org/wiki/Culture_of_Algeria" },
      { label: "WHO Algeria", url: "https://www.who.int/countries/dza" }
    ]
  },
  {
    name: "Tunisia",
    isoCode: "tn",
    lat: 36.81, lng: 10.18,
    languages: ["Arabic", "French"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Tunisian Arabic (Derja) is the daily language; French is used in business and medicine",
        "Warm and hospitable communication style",
        "Politeness and indirect phrasing are valued"
      ],
      familyDecisionMaking: [
        "Family-centered decisions with evolving gender equality — Tunisia has progressive women's rights",
        "Mothers and wives may have stronger roles in medical decisions than in neighboring countries"
      ],
      religiousSpiritual: [
        "Islam is the state religion; Ramadan fasting affects medication schedules",
        "Generally more secular than other North African nations",
        "End-of-life: Islamic burial practices should be facilitated"
      ],
      healthBeliefs: [
        "French-influenced medical system — patients are familiar with Western medicine",
        "Traditional remedies (olive oil, herbs) are used alongside",
        "Mental health awareness is growing but stigma persists"
      ],
      genderContact: [
        "Modesty valued but Tunisia is generally more liberal on gender interaction",
        "Female clinicians preferred for women's intimate exams"
      ],
      doList: [
        "Respect the blend of Arab and French cultural influences",
        "Offer halal food options",
        "Acknowledge Tunisia's progressive stance on women's health rights"
      ],
      dontList: [
        "Don't assume conservative attitudes based on region alone",
        "Don't dismiss traditional remedies",
        "Don't overlook Berber identity in southern regions"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Tunisia", url: "https://en.wikipedia.org/wiki/Culture_of_Tunisia" },
      { label: "WHO Tunisia", url: "https://www.who.int/countries/tun" }
    ]
  },
  {
    name: "Libya",
    isoCode: "ly",
    lat: 32.9, lng: 13.18,
    languages: ["Arabic", "Berber"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Arabic is the primary language; tribal affiliations strongly influence social dynamics",
        "Hospitality is deeply valued — offer tea or refreshments",
        "Communication tends to be indirect, especially around bad news"
      ],
      familyDecisionMaking: [
        "Tribal and patriarchal structures dominate decision-making",
        "Extended family and tribal elders may be consulted for major medical decisions"
      ],
      religiousSpiritual: [
        "Conservative Islamic practice — prayer times, halal food, modesty are paramount",
        "Ramadan fasting affects medication compliance",
        "Ritual washing of the deceased is essential"
      ],
      healthBeliefs: [
        "Prophetic medicine and herbal remedies are widely trusted",
        "Mental health stigma is very high",
        "Healthcare system has been disrupted by conflict — patients may distrust institutions"
      ],
      genderContact: [
        "Strict gender segregation in clinical settings",
        "Women must be accompanied by a male relative (mahram) in many contexts",
        "Same-gender care providers are essential"
      ],
      doList: [
        "Respect tribal identity and family hierarchies",
        "Provide same-gender clinicians",
        "Be sensitive to conflict-related trauma"
      ],
      dontList: [
        "Don't conduct cross-gender examinations without a chaperone",
        "Don't overlook PTSD and trauma from ongoing instability",
        "Don't dismiss the role of tribal elders in care decisions"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Libya", url: "https://en.wikipedia.org/wiki/Culture_of_Libya" },
      { label: "WHO Libya", url: "https://www.who.int/countries/lby" }
    ]
  },
  {
    name: "Sudan",
    isoCode: "sd",
    lat: 15.5, lng: 32.56,
    languages: ["Arabic", "English", "Nubian languages"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)", "Christianity", "Indigenous beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Sudanese Arabic is the lingua franca; many ethnic languages exist",
        "Hospitality (karama) is a core value — always offer refreshments",
        "Indirect and respectful communication preferred"
      ],
      familyDecisionMaking: [
        "Patriarchal family structure with strong clan/tribal influence",
        "Extended family makes collective decisions about healthcare",
        "Women may need permission from male family members for procedures"
      ],
      religiousSpiritual: [
        "Islam is central — accommodate prayer, fasting, halal food",
        "Sufi traditions are strong with spiritual healing practices",
        "Female genital cutting is prevalent — approach with extreme cultural sensitivity"
      ],
      healthBeliefs: [
        "Traditional healers (faki) and spiritual healing are widely consulted",
        "Evil eye (ain) and jinn possession are recognized causes of illness",
        "Mental health is highly stigmatized"
      ],
      genderContact: [
        "Strict gender segregation expected",
        "Female patients require female clinicians",
        "Physical modesty is paramount"
      ],
      doList: [
        "Respect Islamic practices and prayer schedules",
        "Be sensitive to conflict-related trauma and displacement",
        "Work with family structures rather than against them"
      ],
      dontList: [
        "Don't approach FGC/FGM conversations without cultural training",
        "Don't dismiss traditional healing practices",
        "Don't assume all Sudanese are ethnically Arab"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Sudan", url: "https://en.wikipedia.org/wiki/Culture_of_Sudan" },
      { label: "WHO Sudan", url: "https://www.who.int/countries/sdn" }
    ]
  },
  {
    name: "South Sudan",
    isoCode: "ss",
    lat: 4.85, lng: 31.58,
    languages: ["English", "Arabic", "Dinka", "Nuer"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Indigenous beliefs", "Islam"],
    region: "Africa",
    cultural: {
      communication: [
        "English is the official language but many speak Dinka, Nuer, or other Nilotic languages",
        "Oral traditions are strong — verbal communication is preferred over written",
        "Respect for elders and community leaders is essential"
      ],
      familyDecisionMaking: [
        "Clan and tribal structures heavily influence decisions",
        "Cattle play a central role in culture — bride price, wealth, and social status",
        "Male elders dominate decision-making"
      ],
      religiousSpiritual: [
        "Christianity (particularly Catholicism) coexists with traditional spiritual beliefs",
        "Spiritual healers and diviners are consulted for illness",
        "Ancestor spirits are believed to influence health and fortune"
      ],
      healthBeliefs: [
        "Traditional medicine is the first point of contact for many",
        "Scarification marks have cultural significance — do not mistake for self-harm",
        "Mental health is understood through spiritual frameworks"
      ],
      genderContact: [
        "Gender roles are traditional — women may not speak freely around male elders",
        "Female patients may need encouragement to describe symptoms to male doctors"
      ],
      doList: [
        "Use interpreters for non-English speakers",
        "Be trauma-informed — many patients have experienced conflict and displacement",
        "Respect tribal and clan identity"
      ],
      dontList: [
        "Don't dismiss scarification or tribal marks as pathological",
        "Don't ignore the psychological impact of prolonged conflict",
        "Don't assume literacy — use visual aids"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of South Sudan", url: "https://en.wikipedia.org/wiki/South_Sudan#Culture" },
      { label: "WHO South Sudan", url: "https://www.who.int/countries/ssd" }
    ]
  },
  {
    name: "Ghana",
    isoCode: "gh",
    lat: 5.6, lng: -0.19,
    languages: ["English", "Akan", "Ewe", "Ga", "Dagbani"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Traditional African religions"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Akan (Twi) is the most widely spoken local language",
        "Respect for elders is shown through greeting rituals and body language",
        "Right hand is used for greetings and giving — left hand is considered disrespectful"
      ],
      familyDecisionMaking: [
        "Extended family and community elders play a significant role in healthcare decisions",
        "Matrilineal kinship exists among the Akan — uncle (mother's brother) may be key decision-maker",
        "Community leaders (chiefs) may need to be consulted for community health initiatives"
      ],
      religiousSpiritual: [
        "Christianity dominates in the south; Islam in the north",
        "Traditional beliefs in ancestral spirits and deities persist across religions",
        "Naming ceremonies (outdooring) happen on the 8th day — hospitalization around this time is sensitive"
      ],
      healthBeliefs: [
        "Traditional herbal medicine is widely used and government-regulated",
        "Illness may be attributed to spiritual causes (witchcraft, ancestral displeasure)",
        "Mental illness is heavily stigmatized and may lead to social exclusion"
      ],
      genderContact: [
        "Generally accepting of cross-gender care but modesty is valued",
        "Muslim women in the north prefer same-gender clinicians"
      ],
      doList: [
        "Use the right hand for greetings and giving items",
        "Ask about herbal remedies — Ghana has a Centre for Plant Medicine Research",
        "Respect the role of extended family and community"
      ],
      dontList: [
        "Don't use the left hand for interactions",
        "Don't dismiss spiritual explanations of illness",
        "Don't overlook the north-south cultural divide"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Ghana", url: "https://en.wikipedia.org/wiki/Culture_of_Ghana" },
      { label: "WHO Ghana", url: "https://www.who.int/countries/gha" }
    ]
  },
  {
    name: "Cameroon",
    isoCode: "cm",
    lat: 3.87, lng: 11.52,
    languages: ["French", "English", "Fulfulde", "Ewondo"],
    primaryLanguageFamily: "french",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Bilingual country — French in the east (8 regions), English in the west (2 regions)",
        "Greetings are elaborate and essential before any conversation",
        "Hierarchical communication — defer to elders and authority figures"
      ],
      familyDecisionMaking: [
        "Extended family involvement is expected in all major health decisions",
        "Patriarchal structures dominate but matrilineal groups exist in western regions",
        "Village chiefs and traditional rulers may influence community health decisions"
      ],
      religiousSpiritual: [
        "Christianity dominates in the south, Islam in the north",
        "Traditional beliefs in ancestors and nature spirits persist",
        "Healing rituals involving traditional priests are common"
      ],
      healthBeliefs: [
        "Traditional medicine is the first recourse for many, especially in rural areas",
        "Illness may be attributed to sorcery or curses",
        "Dual use of traditional and Western medicine is common"
      ],
      genderContact: [
        "Muslim women in the north require same-gender care",
        "Modesty varies by region and religion"
      ],
      doList: [
        "Determine language preference (French or English) early",
        "Respect traditional healing alongside biomedical care",
        "Include family in treatment discussions"
      ],
      dontList: [
        "Don't ignore the Anglophone-Francophone cultural divide",
        "Don't dismiss traditional medicine practitioners",
        "Don't assume uniform cultural practices across the country"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Cameroon", url: "https://en.wikipedia.org/wiki/Culture_of_Cameroon" },
      { label: "WHO Cameroon", url: "https://www.who.int/countries/cmr" }
    ]
  },
  {
    name: "Senegal",
    isoCode: "sn",
    lat: 14.69, lng: -17.44,
    languages: ["French", "Wolof", "Pulaar", "Serer"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni, with strong Sufi traditions)", "Christianity"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official but Wolof is the lingua franca spoken by 80%+ of the population",
        "Teranga (hospitality) is the defining cultural value",
        "Greetings are lengthy and essential — rushing is considered rude"
      ],
      familyDecisionMaking: [
        "Extended family (including in-laws) is central to health decisions",
        "Marabouts (Islamic spiritual leaders) are highly influential advisors",
        "Community solidarity shapes healthcare-seeking behavior"
      ],
      religiousSpiritual: [
        "Sufi brotherhoods (Mourides, Tijanes) are deeply influential",
        "Marabouts provide spiritual guidance, protective amulets (gris-gris), and healing prayers",
        "Islamic practices: prayer, fasting, halal food must be accommodated"
      ],
      healthBeliefs: [
        "Traditional healers and marabouts are often consulted before Western doctors",
        "Gris-gris amulets are worn for protection — do not remove without permission",
        "Mental illness may be attributed to spiritual causes"
      ],
      genderContact: [
        "Modesty is important; same-gender care preferred for women",
        "Handshakes are common but some conservative Muslim women may decline"
      ],
      doList: [
        "Spend time on proper greetings — it builds trust",
        "Respect the role of marabouts and spiritual leaders",
        "Ask about gris-gris and traditional remedies being used"
      ],
      dontList: [
        "Don't remove protective amulets without discussion",
        "Don't rush greetings or consultations",
        "Don't dismiss the role of Sufi spiritual practices in healing"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Senegal", url: "https://en.wikipedia.org/wiki/Culture_of_Senegal" },
      { label: "WHO Senegal", url: "https://www.who.int/countries/sen" }
    ]
  },
  {
    name: "Tanzania",
    isoCode: "tz",
    lat: -6.17, lng: 35.74,
    languages: ["Swahili", "English", "Various Bantu languages"],
    primaryLanguageFamily: "other",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Swahili is the national language and lingua franca; English is used in higher education and medicine",
        "Respectful greetings (Shikamoo to elders) are essential",
        "Indirect communication — bad news should be delivered gently through family"
      ],
      familyDecisionMaking: [
        "Family and community elders are involved in healthcare decisions",
        "Patriarchal family structure but women manage household health",
        "Tribal identity influences healthcare preferences and trust"
      ],
      religiousSpiritual: [
        "Christianity predominates on the mainland; Islam on Zanzibar and coastal areas",
        "Traditional beliefs in ancestral spirits coexist with Abrahamic religions",
        "Traditional healers (waganga) are widely consulted"
      ],
      healthBeliefs: [
        "Traditional medicine is recognized by the government and widely practiced",
        "Illness may be attributed to witchcraft, curses, or ancestral displeasure",
        "Albinism-related violence has cultural roots — patients with albinism need sensitive care"
      ],
      genderContact: [
        "Modesty is valued; same-gender clinicians preferred especially in Muslim areas",
        "Zanzibar has stricter Islamic modesty requirements"
      ],
      doList: [
        "Use Swahili greetings to build rapport",
        "Ask about traditional remedies being used concurrently",
        "Be sensitive to the mainland-Zanzibar cultural divide"
      ],
      dontList: [
        "Don't dismiss traditional medicine outright",
        "Don't overlook the distinct culture of Zanzibar",
        "Don't assume English fluency outside urban and academic settings"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Tanzania", url: "https://en.wikipedia.org/wiki/Culture_of_Tanzania" },
      { label: "WHO Tanzania", url: "https://www.who.int/countries/tza" }
    ]
  },
  {
    name: "Uganda",
    isoCode: "ug",
    lat: 0.35, lng: 32.58,
    languages: ["English", "Swahili", "Luganda"],
    primaryLanguageFamily: "english",
    religions: ["Christianity (Catholic, Protestant)", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Luganda is the most spoken local language in central Uganda",
        "Kneeling when greeting elders is a sign of respect in Buganda culture",
        "Communication is generally warm and relationship-oriented"
      ],
      familyDecisionMaking: [
        "Clan system is strong, especially in Buganda — clan leaders may influence decisions",
        "Extended family provides the primary support network",
        "Women may defer to husbands but have growing autonomy in health decisions"
      ],
      religiousSpiritual: [
        "Christianity is predominant with strong church community involvement in healthcare",
        "Traditional beliefs in ancestral spirits persist",
        "Faith-based organizations run many hospitals and clinics"
      ],
      healthBeliefs: [
        "Traditional medicine is widely used — herbal practitioners are common",
        "HIV/AIDS awareness is high but stigma remains",
        "Mental health is poorly resourced; epilepsy may be attributed to spirits"
      ],
      genderContact: [
        "Generally accepting of cross-gender care in urban areas",
        "Rural and Muslim communities prefer same-gender clinicians"
      ],
      doList: [
        "Show respect for clan and tribal identities",
        "Ask about traditional remedies being used",
        "Be aware of HIV-related stigma and confidentiality needs"
      ],
      dontList: [
        "Don't overlook the role of clan systems in Buganda",
        "Don't assume LGBTQ+ openness — Uganda has punitive laws",
        "Don't dismiss traditional healing practices"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Uganda", url: "https://en.wikipedia.org/wiki/Culture_of_Uganda" },
      { label: "WHO Uganda", url: "https://www.who.int/countries/uga" }
    ]
  },
  {
    name: "Rwanda",
    isoCode: "rw",
    lat: -1.94, lng: 29.87,
    languages: ["Kinyarwanda", "French", "English", "Swahili"],
    primaryLanguageFamily: "french",
    religions: ["Christianity (Catholic, Protestant)", "Islam"],
    region: "Africa",
    cultural: {
      communication: [
        "Kinyarwanda is spoken by nearly all citizens; English and French are also official",
        "Communication tends to be reserved and indirect — a legacy of complex social history",
        "Umuganda (community service) reflects a culture of collective responsibility"
      ],
      familyDecisionMaking: [
        "Family-centered but Rwanda has strong gender equality policies — women hold significant political power",
        "Community health workers (abashinzwe) are key links between families and healthcare"
      ],
      religiousSpiritual: [
        "Christianity is dominant; churches play a central role in community life",
        "Genocide remembrance period (April) is deeply sensitive — provide trauma-informed care",
        "Traditional beliefs exist but are less prominent publicly"
      ],
      healthBeliefs: [
        "Community health insurance (Mutuelle de Santé) covers most of the population",
        "Traditional medicine is used but the government promotes evidence-based care",
        "Mental health needs are significant due to genocide legacy — counseling is culturally developing"
      ],
      genderContact: [
        "Rwanda is progressive on gender equality — cross-gender care is generally accepted",
        "Modesty is still valued in rural areas"
      ],
      doList: [
        "Be genocide-sensitive — many adults are survivors or descendants",
        "Respect the culture of community and collective responsibility",
        "Work with community health workers who are trusted intermediaries"
      ],
      dontList: [
        "Don't reference ethnic categories (Hutu/Tutsi) — Rwanda emphasizes national unity",
        "Don't underestimate genocide-related trauma even in younger generations",
        "Don't assume poverty equals ignorance — Rwanda has high health literacy"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Rwanda", url: "https://en.wikipedia.org/wiki/Culture_of_Rwanda" },
      { label: "WHO Rwanda", url: "https://www.who.int/countries/rwa" }
    ]
  },
  {
    name: "DR Congo",
    isoCode: "cd",
    lat: -4.32, lng: 15.31,
    languages: ["French", "Lingala", "Swahili", "Kikongo", "Tshiluba"],
    primaryLanguageFamily: "french",
    religions: ["Christianity (Catholic, Protestant)", "Islam", "Kimbanguism", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Lingala is widely spoken in western DRC, Swahili in the east",
        "Greetings are elaborate — skipping them is considered very rude",
        "Respect for elders and authority figures is shown through body language and deference"
      ],
      familyDecisionMaking: [
        "Extended family networks are the primary social safety net",
        "Chiefs and village elders may need to be consulted for community health decisions",
        "Patriarchal structure but women manage household health"
      ],
      religiousSpiritual: [
        "Christianity is dominant; Kimbanguism is an indigenous Christian movement",
        "Spiritual healing through prayer and laying on of hands is common",
        "Witchcraft accusations can lead to social exclusion — children are sometimes affected"
      ],
      healthBeliefs: [
        "Traditional healers are widely consulted, especially in rural areas",
        "Ebola outbreaks have created deep distrust of health workers in eastern provinces",
        "Mental health is poorly understood — symptoms may be attributed to spiritual attack"
      ],
      genderContact: [
        "Modesty valued; same-gender clinicians preferred when possible",
        "Sexual violence is prevalent in conflict zones — trauma-informed care is essential"
      ],
      doList: [
        "Determine the local language (Lingala, Swahili, etc.) early for communication",
        "Build trust gradually — health worker distrust exists due to conflict and epidemics",
        "Be trauma-informed, especially in eastern provinces"
      ],
      dontList: [
        "Don't underestimate the impact of decades of conflict on mental health",
        "Don't dismiss traditional healing — integrate respectfully",
        "Don't overlook the vast cultural diversity within this enormous country"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of DR Congo", url: "https://en.wikipedia.org/wiki/Culture_of_the_Democratic_Republic_of_the_Congo" },
      { label: "WHO DRC", url: "https://www.who.int/countries/cod" }
    ]
  },
  {
    name: "Republic of the Congo",
    isoCode: "cg",
    lat: -4.27, lng: 15.28,
    languages: ["French", "Lingala", "Kikongo"],
    primaryLanguageFamily: "french",
    religions: ["Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Lingala and Kikongo are widely spoken",
        "Warm greetings and social pleasantries precede any business",
        "Storytelling and oral traditions are culturally important"
      ],
      familyDecisionMaking: [
        "Extended family involvement in healthcare is standard",
        "Elders and community leaders influence health-seeking behavior"
      ],
      religiousSpiritual: [
        "Christianity is predominant with some traditional spiritual practices",
        "Traditional healers (nganga) are respected community figures"
      ],
      healthBeliefs: [
        "Traditional medicine is widely used alongside Western medicine",
        "Illness may be attributed to spiritual causes",
        "Healthcare access varies greatly between urban Brazzaville and rural areas"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty is valued during examinations"
      ],
      doList: [
        "Respect the role of community elders in health decisions",
        "Ask about traditional remedies",
        "Be patient with lengthy greeting rituals"
      ],
      dontList: [
        "Don't confuse Republic of Congo with DR Congo",
        "Don't dismiss nganga traditional healers",
        "Don't assume urban healthcare norms apply to rural populations"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of the Republic of the Congo", url: "https://en.wikipedia.org/wiki/Culture_of_the_Republic_of_the_Congo" },
      { label: "WHO Congo", url: "https://www.who.int/countries/cog" }
    ]
  },
  {
    name: "Côte d'Ivoire",
    isoCode: "ci",
    lat: 6.83, lng: -5.29,
    languages: ["French", "Dioula", "Baoulé", "Bété"],
    primaryLanguageFamily: "french",
    religions: ["Islam", "Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Dioula is the trade language in the north",
        "Respectful greetings are essential — inquire about family and health",
        "Indirect communication is preferred"
      ],
      familyDecisionMaking: [
        "Extended family and village chiefs influence healthcare decisions",
        "North is more patriarchal and Islamic; south is more matrilineal in some groups"
      ],
      religiousSpiritual: [
        "Religious diversity: Muslim north, Christian south, traditional beliefs throughout",
        "Mask ceremonies and spiritual rituals are culturally significant",
        "Religious leaders are trusted health advisors"
      ],
      healthBeliefs: [
        "Traditional medicine is deeply rooted — healers use herbs, spiritual rituals",
        "Illness may be attributed to sorcery or broken social taboos",
        "Post-conflict trauma from civil wars affects mental health"
      ],
      genderContact: [
        "Same-gender clinicians preferred in Muslim north",
        "More relaxed in urban south but modesty is valued"
      ],
      doList: [
        "Respect the north-south cultural and religious divide",
        "Ask about traditional remedies and spiritual healing",
        "Include family in health discussions"
      ],
      dontList: [
        "Don't impose uniform cultural assumptions across regions",
        "Don't dismiss mask ceremonies and cultural rituals as superstition",
        "Don't overlook post-conflict trauma"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Côte d'Ivoire", url: "https://en.wikipedia.org/wiki/Culture_of_Ivory_Coast" },
      { label: "WHO Côte d'Ivoire", url: "https://www.who.int/countries/civ" }
    ]
  },
  {
    name: "Mali",
    isoCode: "ml",
    lat: 12.64, lng: -8.0,
    languages: ["French", "Bambara", "Fulfulde", "Songhai"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni)", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Bambara is the most widely spoken language",
        "Oral traditions (griots — storytelling historians) are highly respected",
        "Hierarchical communication based on age and social status"
      ],
      familyDecisionMaking: [
        "Extended family and community elders are central to decision-making",
        "Age-based hierarchies determine who speaks and decides",
        "Polygamous family structures are common"
      ],
      religiousSpiritual: [
        "Islam is practiced by 95%+ with strong Sufi influences",
        "Traditional beliefs coexist with Islam in many communities",
        "Marabouts and spiritual leaders are powerful health advisors"
      ],
      healthBeliefs: [
        "Traditional medicine is the primary healthcare system for many",
        "Mental illness is stigmatized and often attributed to spirits",
        "Female genital cutting is widely practiced — approach sensitively"
      ],
      genderContact: [
        "Strict gender segregation expected in Islamic contexts",
        "Female patients require female clinicians"
      ],
      doList: [
        "Respect the griot tradition and oral communication",
        "Work with marabouts as trusted community health intermediaries",
        "Accommodate Islamic practices"
      ],
      dontList: [
        "Don't disrespect elders or age hierarchies",
        "Don't approach FGC without cultural competence training",
        "Don't assume French fluency — Bambara is more commonly spoken"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Mali", url: "https://en.wikipedia.org/wiki/Culture_of_Mali" },
      { label: "WHO Mali", url: "https://www.who.int/countries/mli" }
    ]
  },
  {
    name: "Burkina Faso",
    isoCode: "bf",
    lat: 12.37, lng: -1.52,
    languages: ["French", "Mooré", "Dioula", "Fulfulde"],
    primaryLanguageFamily: "french",
    religions: ["Islam", "Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Mooré is the most widely spoken language",
        "Burkinabè people are known for their friendliness and hospitality",
        "Respect for elders and communal values define communication"
      ],
      familyDecisionMaking: [
        "Communal decision-making involving extended family and village elders",
        "Patriarchal structures but women's cooperatives are increasingly influential"
      ],
      religiousSpiritual: [
        "Religious coexistence: Islam, Christianity, and traditional beliefs often blend",
        "Mask societies and initiation rituals have spiritual significance",
        "Religious tolerance is a point of national pride"
      ],
      healthBeliefs: [
        "Traditional healers are widely consulted",
        "Herbal medicine is a primary healthcare resource in rural areas",
        "Malnutrition and infectious disease burden shapes health priorities"
      ],
      genderContact: [
        "Same-gender care preferred in Muslim communities",
        "Generally moderate on gender interaction compared to other Sahelian countries"
      ],
      doList: [
        "Respect the religious diversity and tolerance",
        "Ask about traditional remedies",
        "Engage community health workers for rural outreach"
      ],
      dontList: [
        "Don't assume religious affiliation based on appearance",
        "Don't dismiss traditional healing practices",
        "Don't overlook nutritional counseling needs"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Burkina Faso", url: "https://en.wikipedia.org/wiki/Culture_of_Burkina_Faso" },
      { label: "WHO Burkina Faso", url: "https://www.who.int/countries/bfa" }
    ]
  },
  {
    name: "Niger",
    isoCode: "ne",
    lat: 13.51, lng: 2.11,
    languages: ["French", "Hausa", "Zarma", "Tamashek"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Hausa is the most widely spoken language",
        "Tuareg populations speak Tamashek and have distinct cultural practices",
        "Respect-based, indirect communication is the norm"
      ],
      familyDecisionMaking: [
        "Patriarchal and clan-based decision structures",
        "Polygamous families are common",
        "Traditional chiefs and Islamic leaders influence health decisions"
      ],
      religiousSpiritual: [
        "Islam is nearly universal — all Islamic practices must be accommodated",
        "Bori spirit possession cult exists alongside Islam in some communities",
        "Marabouts are important health advisors"
      ],
      healthBeliefs: [
        "Traditional and Islamic medicine dominate healthcare in rural areas",
        "One of the highest fertility rates in the world — family planning is sensitive",
        "Malnutrition is a critical health concern"
      ],
      genderContact: [
        "Strict gender segregation in most contexts",
        "Women are often secluded (kulle) in some communities",
        "Female healthcare workers are essential for reaching women"
      ],
      doList: [
        "Accommodate Islamic practices fully",
        "Use female health workers to reach secluded women",
        "Respect Tuareg cultural distinctiveness"
      ],
      dontList: [
        "Don't approach family planning without cultural sensitivity",
        "Don't overlook the impact of extreme poverty on health-seeking behavior",
        "Don't dismiss Bori practices"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Niger", url: "https://en.wikipedia.org/wiki/Culture_of_Niger" },
      { label: "WHO Niger", url: "https://www.who.int/countries/ner" }
    ]
  },
  {
    name: "Chad",
    isoCode: "td",
    lat: 12.13, lng: 15.06,
    languages: ["French", "Arabic", "Sara", "Kanembou"],
    primaryLanguageFamily: "french",
    religions: ["Islam", "Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French and Arabic are official; Sara languages dominate in the south",
        "Strong north (Muslim/Arab) and south (Christian/African) cultural divide",
        "Respect for authority and elders is essential"
      ],
      familyDecisionMaking: [
        "Patriarchal clan structures dominate in both north and south",
        "Sultan and chief systems influence community health decisions"
      ],
      religiousSpiritual: [
        "Muslim north, Christian south — healthcare approach must adapt",
        "Traditional initiation and healing rituals persist",
        "Islamic practices must be accommodated in the north"
      ],
      healthBeliefs: [
        "Traditional medicine is primary care for most of the population",
        "One of the least-resourced health systems in Africa",
        "Waterborne diseases and malnutrition are major concerns"
      ],
      genderContact: [
        "Gender segregation strict in the north",
        "More relaxed in the southern regions"
      ],
      doList: [
        "Adapt approach based on north-south cultural divide",
        "Use community health workers as intermediaries",
        "Respect both Islamic and Christian practices as appropriate"
      ],
      dontList: [
        "Don't apply a one-size-fits-all approach to Chad's diverse population",
        "Don't underestimate the difficulty of healthcare access in rural areas",
        "Don't dismiss traditional healing systems"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Chad", url: "https://en.wikipedia.org/wiki/Culture_of_Chad" },
      { label: "WHO Chad", url: "https://www.who.int/countries/tcd" }
    ]
  },
  {
    name: "Madagascar",
    isoCode: "mg",
    lat: -18.91, lng: 47.52,
    languages: ["Malagasy", "French"],
    primaryLanguageFamily: "french",
    religions: ["Christianity", "Traditional beliefs (Razana)"],
    region: "Africa",
    cultural: {
      communication: [
        "Malagasy and French are official; Malagasy is universally spoken",
        "Indirect communication with extensive use of proverbs (ohabolana)",
        "Respect for elders (ray aman-dreny) is a cornerstone of culture"
      ],
      familyDecisionMaking: [
        "Elder-led family and community decision-making",
        "Famadihana (turning of the bones) ceremony reflects deep ancestor reverence",
        "Community consensus is preferred over individual decisions"
      ],
      religiousSpiritual: [
        "Ancestor worship (razana) is central — ancestors influence health and fortune",
        "Christianity coexists with traditional beliefs",
        "Fady (taboos) vary by region and clan — breaking fady is believed to cause illness"
      ],
      healthBeliefs: [
        "Traditional healers (ombiasy) are widely consulted",
        "Herbal medicine is rich due to Madagascar's unique biodiversity",
        "Fady may prohibit certain foods, behaviors, or medical interventions"
      ],
      genderContact: [
        "Generally accepting of cross-gender medical care",
        "Modesty is valued"
      ],
      doList: [
        "Ask about fady (taboos) that may affect treatment",
        "Respect the role of ancestors in the patient's worldview",
        "Inquire about herbal remedies — Madagascar has unique medicinal plants"
      ],
      dontList: [
        "Don't violate known fady without discussion",
        "Don't dismiss ancestor veneration as superstition",
        "Don't overlook the island's distinct Southeast Asian cultural heritage"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Madagascar", url: "https://en.wikipedia.org/wiki/Culture_of_Madagascar" },
      { label: "WHO Madagascar", url: "https://www.who.int/countries/mdg" }
    ]
  },
  {
    name: "Mozambique",
    isoCode: "mz",
    lat: -25.97, lng: 32.58,
    languages: ["Portuguese", "Makhuwa", "Tsonga", "Sena"],
    primaryLanguageFamily: "portuguese",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Portuguese is official but many speak Bantu languages as mother tongue",
        "Respectful greetings are important — always inquire about health and family",
        "Oral communication is preferred in rural areas"
      ],
      familyDecisionMaking: [
        "Extended family and community leaders influence health decisions",
        "Matrilineal systems exist in northern provinces"
      ],
      religiousSpiritual: [
        "Christianity and Islam coexist; traditional beliefs are widespread",
        "Northern coast has strong Islamic influence",
        "Curandeiros (traditional healers) are community figures"
      ],
      healthBeliefs: [
        "Traditional medicine is widely used especially in rural areas",
        "Illness may be attributed to sorcery or spiritual causes",
        "HIV/AIDS burden is high — stigma and treatment adherence are concerns"
      ],
      genderContact: [
        "Modesty valued; same-gender care preferred for women in Muslim areas",
        "Generally accepting in urban settings"
      ],
      doList: [
        "Determine local language preference — Portuguese may not be primary",
        "Respect the role of traditional healers",
        "Address HIV/AIDS with sensitivity and confidentiality"
      ],
      dontList: [
        "Don't assume Portuguese fluency in rural areas",
        "Don't dismiss curandeiros",
        "Don't overlook the north-south religious and cultural divide"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Mozambique", url: "https://en.wikipedia.org/wiki/Culture_of_Mozambique" },
      { label: "WHO Mozambique", url: "https://www.who.int/countries/moz" }
    ]
  },
  {
    name: "Angola",
    isoCode: "ao",
    lat: -8.84, lng: 13.23,
    languages: ["Portuguese", "Umbundu", "Kimbundu", "Kikongo"],
    primaryLanguageFamily: "portuguese",
    religions: ["Christianity (Catholic, Protestant)", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Portuguese is official and widely spoken in urban areas",
        "Bantu languages are primary in rural communities",
        "Post-civil-war society — many people are displaced and multilingual"
      ],
      familyDecisionMaking: [
        "Extended family networks are the social safety net",
        "Community elders and traditional leaders influence decisions"
      ],
      religiousSpiritual: [
        "Christianity is dominant — Catholic and Protestant churches are influential",
        "Traditional beliefs in ancestors and nature spirits persist",
        "Syncretic practices blend Christianity with traditional spirituality"
      ],
      healthBeliefs: [
        "Traditional healers (quimbandeiros) are widely consulted",
        "War legacy: landmine injuries, PTSD, and disability are common",
        "Rapid urbanization creates health disparities between cities and rural areas"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty is valued"
      ],
      doList: [
        "Be trauma-informed — decades of civil war left deep scars",
        "Ask about traditional remedies",
        "Be aware of language diversity beyond Portuguese"
      ],
      dontList: [
        "Don't overlook landmine-related disabilities",
        "Don't assume all Angolans are fluent in Portuguese",
        "Don't dismiss traditional healing practices"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Angola", url: "https://en.wikipedia.org/wiki/Culture_of_Angola" },
      { label: "WHO Angola", url: "https://www.who.int/countries/ago" }
    ]
  },
  {
    name: "Zambia",
    isoCode: "zm",
    lat: -15.39, lng: 28.32,
    languages: ["English", "Bemba", "Nyanja", "Tonga", "Lozi"],
    primaryLanguageFamily: "english",
    religions: ["Christianity"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Bemba and Nyanja are the most widely spoken local languages",
        "Zambia is known for its peaceful and welcoming culture",
        "Respect for elders is shown through specific greeting customs"
      ],
      familyDecisionMaking: [
        "Extended family involvement is standard",
        "Traditional chiefs and headmen maintain influence in rural areas",
        "Christianity shapes family values and healthcare attitudes"
      ],
      religiousSpiritual: [
        "Zambia is constitutionally a Christian nation",
        "Traditional beliefs in witchcraft and ancestral spirits persist",
        "Churches are often the most trusted community institutions"
      ],
      healthBeliefs: [
        "Traditional healers are commonly consulted alongside Western medicine",
        "HIV/AIDS prevalence is high — stigma is decreasing but still present",
        "Herbal remedies are widely used"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty is valued especially in rural areas"
      ],
      doList: [
        "Respect the Christian identity of the nation",
        "Ask about traditional remedies",
        "Address HIV/AIDS with sensitivity and confidentiality"
      ],
      dontList: [
        "Don't overlook the role of traditional chiefs",
        "Don't dismiss witchcraft beliefs — they affect health-seeking behavior",
        "Don't assume English fluency beyond urban areas"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Zambia", url: "https://en.wikipedia.org/wiki/Culture_of_Zambia" },
      { label: "WHO Zambia", url: "https://www.who.int/countries/zmb" }
    ]
  },
  {
    name: "Zimbabwe",
    isoCode: "zw",
    lat: -17.83, lng: 31.05,
    languages: ["English", "Shona", "Ndebele"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "English, Shona, and Ndebele are all official; Shona is most widely spoken",
        "Respectful greetings and handshakes are important",
        "Communication tends to be indirect — avoid bluntness with bad news"
      ],
      familyDecisionMaking: [
        "Extended family and clan elders are central to major decisions",
        "Patriarchal family structure but women increasingly participate"
      ],
      religiousSpiritual: [
        "Christianity is dominant; traditional Shona spirituality (Mwari) persists",
        "Spirit mediums (n'anga) are respected traditional healers",
        "Apostolic sects may reject Western medicine in favor of prayer"
      ],
      healthBeliefs: [
        "Traditional healers (n'anga) are widely consulted",
        "Some Apostolic sect members refuse immunization and hospital delivery",
        "HIV/AIDS burden is significant — treatment literacy has improved"
      ],
      genderContact: [
        "Generally accepting of cross-gender medical care",
        "Modesty valued in rural and traditional communities"
      ],
      doList: [
        "Respect the n'anga tradition and ask about traditional remedies",
        "Be sensitive to economic hardship affecting health access",
        "Address Apostolic sect healthcare refusal with dialogue, not coercion"
      ],
      dontList: [
        "Don't dismiss spiritual healing practices",
        "Don't overlook the Shona/Ndebele cultural distinction",
        "Don't assume healthcare is accessible — economic challenges are severe"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Zimbabwe", url: "https://en.wikipedia.org/wiki/Culture_of_Zimbabwe" },
      { label: "WHO Zimbabwe", url: "https://www.who.int/countries/zwe" }
    ]
  },
  {
    name: "Botswana",
    isoCode: "bw",
    lat: -24.65, lng: 25.91,
    languages: ["English", "Setswana"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Setswana is the national language spoken by most",
        "Botho (humanity/respect) is the guiding cultural principle",
        "Polite, measured communication is valued"
      ],
      familyDecisionMaking: [
        "Kgotla (community meeting) system allows democratic discussion",
        "Family and community elders are consulted for major decisions"
      ],
      religiousSpiritual: [
        "Christianity is dominant with traditional beliefs in ancestors",
        "Badimo (ancestors) are believed to influence health and fortune"
      ],
      healthBeliefs: [
        "Traditional healers (dingaka) are respected and consulted",
        "HIV/AIDS prevalence was among the world's highest — treatment programs are strong",
        "Government healthcare is relatively well-resourced for the region"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Botho principle means all interactions should be respectful"
      ],
      doList: [
        "Embody botho in all interactions — respectful, humane care",
        "Acknowledge Setswana identity and language",
        "Address HIV with sensitivity — Botswana has been a leader in treatment"
      ],
      dontList: [
        "Don't dismiss dingaka traditional healers",
        "Don't overlook the role of kgotla (community council) in health decisions",
        "Don't forget the San (Bushmen) minority have distinct cultural needs"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Botswana", url: "https://en.wikipedia.org/wiki/Culture_of_Botswana" },
      { label: "WHO Botswana", url: "https://www.who.int/countries/bwa" }
    ]
  },
  {
    name: "Namibia",
    isoCode: "na",
    lat: -22.56, lng: 17.08,
    languages: ["English", "Oshiwambo", "Afrikaans", "Herero", "Damara"],
    primaryLanguageFamily: "english",
    religions: ["Christianity"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Oshiwambo is the most spoken language; Afrikaans is widely used",
        "Namibia's diverse ethnic groups (Ovambo, Herero, Himba, San, Nama) have distinct customs",
        "Respectful greetings are important across all groups"
      ],
      familyDecisionMaking: [
        "Clan and community structures influence decisions",
        "Herero and Himba communities have strong matrilineal elements",
        "San communities are more egalitarian in decision-making"
      ],
      religiousSpiritual: [
        "Christianity is predominant — Lutheran and Catholic churches are influential",
        "Himba people maintain distinct traditional spiritual practices",
        "Ancestor veneration exists across many communities"
      ],
      healthBeliefs: [
        "Traditional medicine varies widely by ethnic group",
        "Himba community uses specific herbal and ochre-based remedies",
        "Healthcare access is limited in remote desert regions"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Himba women's traditional dress and body ochre should be respected"
      ],
      doList: [
        "Learn which ethnic group the patient belongs to — customs vary significantly",
        "Respect Himba and San cultural practices",
        "Be aware of healthcare access challenges in remote areas"
      ],
      dontList: [
        "Don't assume cultural homogeneity",
        "Don't ask Himba women to remove ochre without medical necessity",
        "Don't overlook the San people's distinct healthcare needs"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Namibia", url: "https://en.wikipedia.org/wiki/Culture_of_Namibia" },
      { label: "WHO Namibia", url: "https://www.who.int/countries/nam" }
    ]
  },
  {
    name: "Somalia",
    isoCode: "so",
    lat: 2.05, lng: 45.32,
    languages: ["Somali", "Arabic"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Somali is the primary language; Arabic and Italian are also used",
        "Clan identity is central to social organization — always be aware of clan dynamics",
        "Poetry and oral tradition are deeply valued cultural expressions"
      ],
      familyDecisionMaking: [
        "Clan elders are the primary decision-makers",
        "Patriarchal structure — men represent the family in medical discussions",
        "Large extended families are the norm"
      ],
      religiousSpiritual: [
        "Islam is universal — all Islamic practices must be accommodated",
        "Quranic healing and reading are important coping mechanisms",
        "Jinn possession is a recognized explanation for mental illness"
      ],
      healthBeliefs: [
        "Traditional medicine includes herbal remedies, cupping, and cauterization",
        "FGC is nearly universal — handle with extreme cultural sensitivity",
        "Mental health is heavily stigmatized — symptoms attributed to jinn or evil eye",
        "Decades of conflict have created widespread trauma"
      ],
      genderContact: [
        "Strict gender segregation — female patients must see female clinicians",
        "Male family members serve as gatekeepers to female patients",
        "Modesty requirements are very strict"
      ],
      doList: [
        "Accommodate all Islamic practices",
        "Be clan-aware without taking sides",
        "Provide trauma-informed care — conflict exposure is nearly universal"
      ],
      dontList: [
        "Don't conduct cross-gender examinations",
        "Don't approach FGC without specialized training",
        "Don't ignore the role of clan dynamics in patient interactions"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Somalia", url: "https://en.wikipedia.org/wiki/Culture_of_Somalia" },
      { label: "WHO Somalia", url: "https://www.who.int/countries/som" }
    ]
  },
  {
    name: "Eritrea",
    isoCode: "er",
    lat: 15.34, lng: 38.93,
    languages: ["Tigrinya", "Arabic", "English"],
    primaryLanguageFamily: "other",
    religions: ["Christianity (Orthodox)", "Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Tigrinya and Arabic are the most spoken; English is used in education",
        "Respect for elders is paramount",
        "Communication is generally reserved and formal"
      ],
      familyDecisionMaking: [
        "Extended family and community elders guide major decisions",
        "Patriarchal structure but women played significant roles in independence struggle"
      ],
      religiousSpiritual: [
        "Split roughly equally between Orthodox Christian and Sunni Muslim",
        "Religious coexistence is a national value",
        "Orthodox fasting periods (200+ days/year) affect nutrition and medication"
      ],
      healthBeliefs: [
        "Traditional medicine is used alongside limited Western healthcare",
        "Many Eritreans in diaspora may carry trauma from military service and refugee experiences",
        "Healthcare infrastructure is limited"
      ],
      genderContact: [
        "Muslim women require same-gender clinicians",
        "Christian Eritreans are generally more flexible on cross-gender care"
      ],
      doList: [
        "Determine religious background to tailor approach",
        "Be aware of Orthodox fasting schedules",
        "Provide trauma-informed care for refugees and diaspora"
      ],
      dontList: [
        "Don't assume religious background based on appearance",
        "Don't overlook military service trauma",
        "Don't dismiss the impact of Orthodox fasting on health"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Eritrea", url: "https://en.wikipedia.org/wiki/Culture_of_Eritrea" },
      { label: "WHO Eritrea", url: "https://www.who.int/countries/eri" }
    ]
  },
  {
    name: "Malawi",
    isoCode: "mw",
    lat: -13.97, lng: 33.79,
    languages: ["English", "Chichewa"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Chichewa (Chewa) is the national language",
        "Known as 'The Warm Heart of Africa' — friendliness defines interaction",
        "Greetings are lengthy and important"
      ],
      familyDecisionMaking: [
        "Matrilineal system in central and southern regions — uncle (mother's brother) is key",
        "Patrilineal in the north",
        "Village chiefs and group headmen maintain influence"
      ],
      religiousSpiritual: [
        "Christianity is dominant; Islam is significant in lakeshore areas",
        "Traditional beliefs in spirits and ancestors persist",
        "Gule Wamkulu (masked dance) is a UNESCO-recognized cultural practice with spiritual significance"
      ],
      healthBeliefs: [
        "Traditional healers (sing'anga) are widely consulted",
        "HIV/AIDS prevalence is high — community-based treatment has been successful",
        "Initiation ceremonies for adolescents may have health implications"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Muslim communities prefer same-gender clinicians"
      ],
      doList: [
        "Learn whether the patient comes from a matrilineal or patrilineal community",
        "Respect the role of sing'anga healers",
        "Engage community health workers — Malawi's CHW program is strong"
      ],
      dontList: [
        "Don't overlook matrilineal kinship structures",
        "Don't dismiss initiation ceremony practices without understanding",
        "Don't assume healthcare access in rural areas"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Malawi", url: "https://en.wikipedia.org/wiki/Culture_of_Malawi" },
      { label: "WHO Malawi", url: "https://www.who.int/countries/mwi" }
    ]
  },
  {
    name: "Sierra Leone",
    isoCode: "sl",
    lat: 8.48, lng: -13.23,
    languages: ["English", "Krio", "Mende", "Temne"],
    primaryLanguageFamily: "english",
    religions: ["Islam", "Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Krio is the lingua franca spoken by 97% of the population",
        "Respect for elders and chiefs is essential",
        "Storytelling and communal gatherings are valued"
      ],
      familyDecisionMaking: [
        "Extended family and paramount chiefs influence decisions",
        "Secret societies (Poro for men, Bondo/Sande for women) have social authority"
      ],
      religiousSpiritual: [
        "Religious tolerance between Muslims and Christians is a hallmark",
        "Intermarriage between faiths is common",
        "Traditional secret societies have spiritual and social functions"
      ],
      healthBeliefs: [
        "Ebola epidemic (2014-2016) dramatically impacted trust in healthcare",
        "Traditional healers are widely consulted",
        "Bondo/Sande society initiations include FGC — approach sensitively"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Muslim women may prefer same-gender clinicians"
      ],
      doList: [
        "Use Krio for communication where possible",
        "Be aware of Ebola's lasting impact on healthcare trust",
        "Respect the role of secret societies in community life"
      ],
      dontList: [
        "Don't dismiss post-Ebola trauma and distrust",
        "Don't approach FGC without cultural competence",
        "Don't overlook the unique religious harmony"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Sierra Leone", url: "https://en.wikipedia.org/wiki/Culture_of_Sierra_Leone" },
      { label: "WHO Sierra Leone", url: "https://www.who.int/countries/sle" }
    ]
  },
  {
    name: "Liberia",
    isoCode: "lr",
    lat: 6.43, lng: -10.8,
    languages: ["English", "Kpelle", "Bassa", "Grebo"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official — Liberia was founded by freed American slaves",
        "Liberian English differs significantly from standard English",
        "Respect for elders and traditional authority is important"
      ],
      familyDecisionMaking: [
        "Extended family and tribal structures influence decisions",
        "Americo-Liberian and indigenous populations have distinct cultural dynamics"
      ],
      religiousSpiritual: [
        "Christianity is dominant; Islam is significant",
        "Traditional beliefs including Poro and Sande secret societies persist",
        "Syncretic religious practices are common"
      ],
      healthBeliefs: [
        "Ebola epidemic (2014-2016) severely impacted healthcare trust",
        "Traditional medicine is widely used",
        "Mental health resources are extremely limited — stigma is high"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty is valued"
      ],
      doList: [
        "Be aware of the Americo-Liberian / indigenous cultural divide",
        "Address Ebola-related trauma and healthcare distrust",
        "Use plain English — Liberian English has distinct features"
      ],
      dontList: [
        "Don't assume standard English comprehension",
        "Don't overlook post-Ebola trauma",
        "Don't dismiss the influence of secret societies"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Liberia", url: "https://en.wikipedia.org/wiki/Culture_of_Liberia" },
      { label: "WHO Liberia", url: "https://www.who.int/countries/lbr" }
    ]
  },
  {
    name: "Guinea",
    isoCode: "gn",
    lat: 9.95, lng: -9.7,
    languages: ["French", "Fulfulde", "Malinké", "Susu"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni)", "Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Fulfulde, Malinké, and Susu are major local languages",
        "Respect for elders and greetings are essential",
        "Oral tradition is culturally important"
      ],
      familyDecisionMaking: [
        "Patriarchal family structures; community elders are influential",
        "Ethnic group identity shapes social dynamics"
      ],
      religiousSpiritual: [
        "Islam is practiced by ~85% of the population",
        "Traditional beliefs coexist with Islam",
        "Marabouts are trusted advisors"
      ],
      healthBeliefs: [
        "Traditional medicine is primary healthcare for many",
        "Ebola affected parts of Guinea — healthcare trust was damaged",
        "FGC is widely practiced — approach with cultural training"
      ],
      genderContact: [
        "Same-gender care preferred for women",
        "Islamic modesty requirements apply"
      ],
      doList: [
        "Accommodate Islamic practices",
        "Respect the role of traditional healers",
        "Be Ebola-aware in affected regions"
      ],
      dontList: [
        "Don't dismiss traditional healing",
        "Don't approach FGC without training",
        "Don't assume French fluency in rural areas"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Guinea", url: "https://en.wikipedia.org/wiki/Culture_of_Guinea" },
      { label: "WHO Guinea", url: "https://www.who.int/countries/gin" }
    ]
  },
  {
    name: "Togo",
    isoCode: "tg",
    lat: 6.17, lng: 1.23,
    languages: ["French", "Ewe", "Kabiyè"],
    primaryLanguageFamily: "french",
    religions: ["Traditional beliefs", "Christianity", "Islam"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Ewe in the south, Kabiyè in the north",
        "Greetings and social pleasantries are essential",
        "Respectful, hierarchical communication"
      ],
      familyDecisionMaking: [
        "Extended family and village chiefs guide decisions",
        "Traditional leadership structures are strong"
      ],
      religiousSpiritual: [
        "Traditional Voodoo (Vodun) is deeply rooted — Togo is considered a birthplace of Voodoo",
        "Christianity and Islam coexist with traditional practices",
        "Fetish markets and spiritual healing are mainstream"
      ],
      healthBeliefs: [
        "Traditional healers and Vodun practitioners are primary care providers for many",
        "Illness may be attributed to spiritual imbalance or curses",
        "Herbal medicine is widely used"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty valued especially in rural areas"
      ],
      doList: [
        "Respect Vodun traditions — they are central to Togolese identity",
        "Ask about traditional remedies and spiritual treatments",
        "Include family in care discussions"
      ],
      dontList: [
        "Don't dismiss Vodun as superstition",
        "Don't ignore the south-north ethnic and cultural divide",
        "Don't assume French fluency in rural areas"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Togo", url: "https://en.wikipedia.org/wiki/Culture_of_Togo" },
      { label: "WHO Togo", url: "https://www.who.int/countries/tgo" }
    ]
  },
  {
    name: "Gabon",
    isoCode: "ga",
    lat: 0.39, lng: 9.45,
    languages: ["French", "Fang", "Myene"],
    primaryLanguageFamily: "french",
    religions: ["Christianity", "Islam", "Traditional beliefs (Bwiti)"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official and widely spoken",
        "Relatively high urbanization for Central Africa",
        "Respect for elders and social hierarchies"
      ],
      familyDecisionMaking: [
        "Extended family involvement in decisions",
        "Community and clan structures influence health-seeking behavior"
      ],
      religiousSpiritual: [
        "Christianity is dominant; Bwiti spiritual practice is significant",
        "Bwiti involves iboga plant ceremonies for healing and initiation",
        "Syncretic practices blend Christianity with traditional beliefs"
      ],
      healthBeliefs: [
        "Traditional medicine including iboga is culturally important",
        "Oil wealth creates urban-rural health disparities",
        "Traditional healers (nganga) are respected"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty valued"
      ],
      doList: [
        "Respect Bwiti traditions and iboga use",
        "Ask about traditional remedies",
        "Be aware of urban-rural healthcare disparities"
      ],
      dontList: [
        "Don't dismiss Bwiti as mere drug use — it's a sacred practice",
        "Don't overlook traditional healer consultations",
        "Don't assume uniform access to healthcare"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Gabon", url: "https://en.wikipedia.org/wiki/Culture_of_Gabon" },
      { label: "WHO Gabon", url: "https://www.who.int/countries/gab" }
    ]
  },
  {
    name: "Djibouti",
    isoCode: "dj",
    lat: 11.59, lng: 43.15,
    languages: ["French", "Arabic", "Somali", "Afar"],
    primaryLanguageFamily: "french",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "French and Arabic are official; Somali and Afar are widely spoken",
        "Small nation at the crossroads of Africa and the Middle East",
        "Respectful, indirect communication"
      ],
      familyDecisionMaking: [
        "Clan-based decision-making (Somali Issa and Afar clans)",
        "Patriarchal family structure"
      ],
      religiousSpiritual: [
        "Islam is the state religion — full accommodation required",
        "Islamic practices govern daily life"
      ],
      healthBeliefs: [
        "Limited healthcare infrastructure — many seek care abroad",
        "Traditional medicine and Islamic healing are used",
        "FGC is widely practiced"
      ],
      genderContact: [
        "Strict gender segregation",
        "Female clinicians essential for women"
      ],
      doList: [
        "Accommodate Islamic practices fully",
        "Be clan-aware",
        "Provide same-gender clinicians"
      ],
      dontList: [
        "Don't conduct cross-gender examinations",
        "Don't ignore clan dynamics",
        "Don't approach FGC without specialized training"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Djibouti", url: "https://en.wikipedia.org/wiki/Culture_of_Djibouti" },
      { label: "WHO Djibouti", url: "https://www.who.int/countries/dji" }
    ]
  },
  {
    name: "Burundi",
    isoCode: "bi",
    lat: -3.38, lng: 29.36,
    languages: ["Kirundi", "French", "English"],
    primaryLanguageFamily: "french",
    religions: ["Christianity (Catholic)", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "Kirundi is universally spoken; French and English are official",
        "Drumming (Royal Drummers of Burundi) is a UNESCO-recognized cultural expression",
        "Indirect, respectful communication"
      ],
      familyDecisionMaking: [
        "Family and community elders guide decisions",
        "Ethnic tensions (Hutu/Tutsi) have historical significance — similar to Rwanda"
      ],
      religiousSpiritual: [
        "Catholicism is dominant",
        "Traditional beliefs persist alongside Christianity"
      ],
      healthBeliefs: [
        "Traditional healers are widely consulted",
        "Conflict-related trauma affects mental health significantly",
        "Healthcare system is severely under-resourced"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty valued"
      ],
      doList: [
        "Be trauma-informed — ethnic conflict history mirrors Rwanda",
        "Respect Kirundi language and greetings",
        "Work with community health workers"
      ],
      dontList: [
        "Don't reference ethnic categories insensitively",
        "Don't assume healthcare access",
        "Don't dismiss traditional healing"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Burundi", url: "https://en.wikipedia.org/wiki/Culture_of_Burundi" },
      { label: "WHO Burundi", url: "https://www.who.int/countries/bdi" }
    ]
  },
  {
    name: "Central African Republic",
    isoCode: "cf",
    lat: 4.39, lng: 18.56,
    languages: ["French", "Sango"],
    primaryLanguageFamily: "french",
    religions: ["Christianity", "Islam", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "French is official; Sango is the national lingua franca",
        "One of the most conflict-affected countries in Africa",
        "Greetings and respect for authority are important"
      ],
      familyDecisionMaking: [
        "Extended family and community leaders make collective decisions",
        "Conflict has disrupted traditional social structures"
      ],
      religiousSpiritual: [
        "Christianity and Islam coexist but religious tensions have been exploited in conflict",
        "Traditional beliefs persist across communities"
      ],
      healthBeliefs: [
        "Healthcare system is largely collapsed in conflict areas",
        "Traditional medicine is often the only available care",
        "Humanitarian organizations provide most healthcare services"
      ],
      genderContact: [
        "Conflict-related sexual violence is prevalent — trauma-informed care is essential",
        "Modesty valued"
      ],
      doList: [
        "Provide trauma-informed care — conflict exposure is widespread",
        "Use Sango for communication when possible",
        "Work with humanitarian health providers"
      ],
      dontList: [
        "Don't overlook conflict-related trauma, especially sexual violence",
        "Don't assume any healthcare infrastructure exists",
        "Don't exacerbate religious tensions"
      ]
    },
    sources: [
      { label: "Wikipedia — Central African Republic", url: "https://en.wikipedia.org/wiki/Central_African_Republic#Culture" },
      { label: "WHO CAR", url: "https://www.who.int/countries/caf" }
    ]
  },
  {
    name: "Equatorial Guinea",
    isoCode: "gq",
    lat: 3.75, lng: 8.78,
    languages: ["Spanish", "French", "Portuguese", "Fang"],
    primaryLanguageFamily: "spanish",
    religions: ["Christianity (Catholic)"],
    region: "Africa",
    cultural: {
      communication: [
        "Spanish is the primary official language — the only Spanish-speaking country in Africa",
        "French and Portuguese are also official",
        "Fang culture dominates the mainland; Bubi culture on Bioko island"
      ],
      familyDecisionMaking: [
        "Extended family and clan elders are central to decisions",
        "Oil wealth has created a distinct urban elite"
      ],
      religiousSpiritual: [
        "Catholicism is dominant",
        "Traditional beliefs in ancestral spirits persist"
      ],
      healthBeliefs: [
        "Oil wealth contrasts with limited public healthcare",
        "Traditional medicine is used alongside Western care",
        "Malaria is a major health concern"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty valued"
      ],
      doList: [
        "Use Spanish for communication",
        "Distinguish between mainland (Fang) and island (Bubi) cultures",
        "Ask about traditional remedies"
      ],
      dontList: [
        "Don't assume oil wealth means good healthcare access",
        "Don't overlook cultural differences between mainland and Bioko",
        "Don't dismiss traditional healing practices"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Equatorial Guinea", url: "https://en.wikipedia.org/wiki/Culture_of_Equatorial_Guinea" },
      { label: "WHO Equatorial Guinea", url: "https://www.who.int/countries/gnq" }
    ]
  },
  {
    name: "Mauritania",
    isoCode: "mr",
    lat: 18.09, lng: -15.98,
    languages: ["Arabic", "French", "Pulaar", "Soninke", "Wolof"],
    primaryLanguageFamily: "arabic",
    religions: ["Islam (Sunni)"],
    region: "Africa",
    cultural: {
      communication: [
        "Arabic is official; Hassaniya Arabic is the local dialect",
        "French is used in business and some education",
        "Society is divided between Moor (Arab-Berber) and sub-Saharan African communities"
      ],
      familyDecisionMaking: [
        "Tribal and caste-based social hierarchy",
        "Patriarchal family structures; elders lead decisions"
      ],
      religiousSpiritual: [
        "Islam is the state religion — full accommodation required",
        "Marabouts are powerful spiritual and social leaders",
        "Islamic law (Sharia) influences social norms"
      ],
      healthBeliefs: [
        "Traditional and Islamic medicine are primary for many",
        "Gavage (force-feeding of girls for beauty) is a cultural practice with health implications",
        "Mental health is highly stigmatized"
      ],
      genderContact: [
        "Strict gender segregation",
        "Female clinicians required for women"
      ],
      doList: [
        "Accommodate Islamic practices fully",
        "Be aware of the Moor/sub-Saharan cultural divide",
        "Respect the role of marabouts"
      ],
      dontList: [
        "Don't conduct cross-gender examinations",
        "Don't approach gavage without cultural sensitivity",
        "Don't ignore caste and tribal dynamics"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Mauritania", url: "https://en.wikipedia.org/wiki/Culture_of_Mauritania" },
      { label: "WHO Mauritania", url: "https://www.who.int/countries/mrt" }
    ]
  },
  {
    name: "Eswatini",
    isoCode: "sz",
    lat: -26.31, lng: 31.13,
    languages: ["Swazi (siSwati)", "English"],
    primaryLanguageFamily: "english",
    religions: ["Christianity", "Traditional beliefs"],
    region: "Africa",
    cultural: {
      communication: [
        "SiSwati and English are both official",
        "The monarchy (King Mswati III) is central to national identity",
        "Respectful, hierarchical communication"
      ],
      familyDecisionMaking: [
        "Royal and traditional leadership structures are strong",
        "Family and community elders guide decisions"
      ],
      religiousSpiritual: [
        "Christianity is predominant; traditional practices are deeply rooted",
        "Umhlanga (Reed Dance) is an annual cultural ceremony for young women",
        "Traditional healers (tangoma) are respected"
      ],
      healthBeliefs: [
        "Had the world's highest HIV prevalence — treatment programs have improved outcomes",
        "Traditional healers are widely consulted",
        "Dual use of traditional and Western medicine is standard"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty valued"
      ],
      doList: [
        "Respect the monarchy and traditional leadership",
        "Address HIV with sensitivity — prevalence is still high",
        "Ask about traditional medicine use"
      ],
      dontList: [
        "Don't criticize the monarchy in patient interactions",
        "Don't dismiss tangoma healers",
        "Don't overlook HIV-related stigma"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Eswatini", url: "https://en.wikipedia.org/wiki/Culture_of_Eswatini" },
      { label: "WHO Eswatini", url: "https://www.who.int/countries/swz" }
    ]
  },
  {
    name: "Lesotho",
    isoCode: "ls",
    lat: -29.31, lng: 27.48,
    languages: ["Sesotho", "English"],
    primaryLanguageFamily: "english",
    religions: ["Christianity"],
    region: "Africa",
    cultural: {
      communication: [
        "Sesotho and English are official; Sesotho is the primary language",
        "Known as 'The Mountain Kingdom' — geography defines culture",
        "Respect for the elderly and traditional authorities"
      ],
      familyDecisionMaking: [
        "Community and family elders guide decisions",
        "Traditional chieftainship remains influential"
      ],
      religiousSpiritual: [
        "Christianity is dominant (Catholic and Protestant)",
        "Traditional beliefs in ancestors and nature spirits persist",
        "Blanket culture — the Basotho blanket has cultural and spiritual significance"
      ],
      healthBeliefs: [
        "High HIV prevalence — stigma and treatment adherence remain challenges",
        "Traditional healers are commonly consulted",
        "Mountain geography limits healthcare access — many communities are very remote"
      ],
      genderContact: [
        "Generally accepting of cross-gender care",
        "Modesty is valued"
      ],
      doList: [
        "Respect the Basotho blanket tradition",
        "Address HIV with sensitivity",
        "Be aware of access challenges in mountain communities"
      ],
      dontList: [
        "Don't overlook the extreme remoteness of mountain communities",
        "Don't dismiss traditional healing",
        "Don't underestimate HIV-related stigma"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of Lesotho", url: "https://en.wikipedia.org/wiki/Culture_of_Lesotho" },
      { label: "WHO Lesotho", url: "https://www.who.int/countries/lso" }
    ]
  },
  {
    name: "Gambia",
    isoCode: "gm",
    lat: 13.45, lng: -16.58,
    languages: ["English", "Mandinka", "Wolof", "Fula"],
    primaryLanguageFamily: "english",
    religions: ["Islam (Sunni)", "Christianity"],
    region: "Africa",
    cultural: {
      communication: [
        "English is official; Mandinka and Wolof are the most spoken languages",
        "Greetings are lengthy and essential — teranga (hospitality) from Senegalese influence",
        "Respect for elders and Islamic scholars"
      ],
      familyDecisionMaking: [
        "Extended family and community elders are central",
        "Marabouts have significant social authority",
        "Patriarchal family structures"
      ],
      religiousSpiritual: [
        "Islam is practiced by ~95% of the population",
        "Islamic practices govern daily life and healthcare",
        "Traditional beliefs coexist with Islam"
      ],
      healthBeliefs: [
        "Traditional medicine and marabout healing are widely trusted",
        "FGC is widely practiced",
        "Healthcare system is limited — medical tourism to Senegal is common"
      ],
      genderContact: [
        "Islamic modesty requirements apply",
        "Same-gender clinicians preferred for women"
      ],
      doList: [
        "Accommodate Islamic practices",
        "Respect the role of marabouts",
        "Use Mandinka or Wolof greetings to build rapport"
      ],
      dontList: [
        "Don't approach FGC without specialized training",
        "Don't dismiss marabout healing",
        "Don't assume English fluency beyond urban areas"
      ]
    },
    sources: [
      { label: "Wikipedia — Culture of the Gambia", url: "https://en.wikipedia.org/wiki/Culture_of_the_Gambia" },
      { label: "WHO Gambia", url: "https://www.who.int/countries/gmb" }
    ]
  }
];
