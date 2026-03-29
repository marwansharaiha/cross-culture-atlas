/**
 * Comprehensive country-to-language-family mapping for globe visualization.
 * Maps ISO 3166-1 numeric codes (used by world-atlas) to alpha-2 codes,
 * and maps every country to its primary language family for coloring.
 *
 * Regional language data is included for multilingual countries to show
 * sub-national linguistic diversity on the globe.
 */

import type { LanguageFamily } from "./countries";

// ── ISO 3166-1 numeric → alpha-2 + name ─────────────────────────────
// Covers all countries present in the world-atlas 110m TopoJSON
export const ISO_COUNTRIES: [string, string, string][] = [
  // [numeric, alpha2, name]
  ["004", "af", "Afghanistan"],
  ["008", "al", "Albania"],
  ["012", "dz", "Algeria"],
  ["016", "as", "American Samoa"],
  ["020", "ad", "Andorra"],
  ["024", "ao", "Angola"],
  ["028", "ag", "Antigua and Barbuda"],
  ["032", "ar", "Argentina"],
  ["051", "am", "Armenia"],
  ["036", "au", "Australia"],
  ["040", "at", "Austria"],
  ["031", "az", "Azerbaijan"],
  ["044", "bs", "Bahamas"],
  ["048", "bh", "Bahrain"],
  ["050", "bd", "Bangladesh"],
  ["052", "bb", "Barbados"],
  ["112", "by", "Belarus"],
  ["056", "be", "Belgium"],
  ["084", "bz", "Belize"],
  ["204", "bj", "Benin"],
  ["064", "bt", "Bhutan"],
  ["068", "bo", "Bolivia"],
  ["070", "ba", "Bosnia and Herzegovina"],
  ["072", "bw", "Botswana"],
  ["076", "br", "Brazil"],
  ["096", "bn", "Brunei"],
  ["100", "bg", "Bulgaria"],
  ["854", "bf", "Burkina Faso"],
  ["108", "bi", "Burundi"],
  ["132", "cv", "Cape Verde"],
  ["116", "kh", "Cambodia"],
  ["120", "cm", "Cameroon"],
  ["124", "ca", "Canada"],
  ["140", "cf", "Central African Republic"],
  ["148", "td", "Chad"],
  ["152", "cl", "Chile"],
  ["156", "cn", "China"],
  ["170", "co", "Colombia"],
  ["174", "km", "Comoros"],
  ["178", "cg", "Republic of the Congo"],
  ["180", "cd", "DR Congo"],
  ["188", "cr", "Costa Rica"],
  ["384", "ci", "Côte d'Ivoire"],
  ["191", "hr", "Croatia"],
  ["192", "cu", "Cuba"],
  ["196", "cy", "Cyprus"],
  ["203", "cz", "Czechia"],
  ["208", "dk", "Denmark"],
  ["262", "dj", "Djibouti"],
  ["212", "dm", "Dominica"],
  ["214", "do", "Dominican Republic"],
  ["218", "ec", "Ecuador"],
  ["818", "eg", "Egypt"],
  ["222", "sv", "El Salvador"],
  ["226", "gq", "Equatorial Guinea"],
  ["232", "er", "Eritrea"],
  ["233", "ee", "Estonia"],
  ["748", "sz", "Eswatini"],
  ["231", "et", "Ethiopia"],
  ["242", "fj", "Fiji"],
  ["246", "fi", "Finland"],
  ["250", "fr", "France"],
  ["266", "ga", "Gabon"],
  ["270", "gm", "Gambia"],
  ["268", "ge", "Georgia"],
  ["276", "de", "Germany"],
  ["288", "gh", "Ghana"],
  ["300", "gr", "Greece"],
  ["308", "gd", "Grenada"],
  ["320", "gt", "Guatemala"],
  ["324", "gn", "Guinea"],
  ["624", "gw", "Guinea-Bissau"],
  ["328", "gy", "Guyana"],
  ["332", "ht", "Haiti"],
  ["340", "hn", "Honduras"],
  ["348", "hu", "Hungary"],
  ["352", "is", "Iceland"],
  ["356", "in", "India"],
  ["360", "id", "Indonesia"],
  ["364", "ir", "Iran"],
  ["368", "iq", "Iraq"],
  ["372", "ie", "Ireland"],
  ["376", "il", "Israel"],
  ["380", "it", "Italy"],
  ["388", "jm", "Jamaica"],
  ["392", "jp", "Japan"],
  ["400", "jo", "Jordan"],
  ["398", "kz", "Kazakhstan"],
  ["404", "ke", "Kenya"],
  ["296", "ki", "Kiribati"],
  ["408", "kp", "North Korea"],
  ["410", "kr", "South Korea"],
  ["414", "kw", "Kuwait"],
  ["417", "kg", "Kyrgyzstan"],
  ["418", "la", "Laos"],
  ["428", "lv", "Latvia"],
  ["422", "lb", "Lebanon"],
  ["426", "ls", "Lesotho"],
  ["430", "lr", "Liberia"],
  ["434", "ly", "Libya"],
  ["438", "li", "Liechtenstein"],
  ["440", "lt", "Lithuania"],
  ["442", "lu", "Luxembourg"],
  ["450", "mg", "Madagascar"],
  ["454", "mw", "Malawi"],
  ["458", "my", "Malaysia"],
  ["462", "mv", "Maldives"],
  ["466", "ml", "Mali"],
  ["470", "mt", "Malta"],
  ["478", "mr", "Mauritania"],
  ["480", "mu", "Mauritius"],
  ["484", "mx", "Mexico"],
  ["498", "md", "Moldova"],
  ["492", "mc", "Monaco"],
  ["496", "mn", "Mongolia"],
  ["499", "me", "Montenegro"],
  ["504", "ma", "Morocco"],
  ["508", "mz", "Mozambique"],
  ["104", "mm", "Myanmar"],
  ["516", "na", "Namibia"],
  ["524", "np", "Nepal"],
  ["528", "nl", "Netherlands"],
  ["554", "nz", "New Zealand"],
  ["558", "ni", "Nicaragua"],
  ["562", "ne", "Niger"],
  ["566", "ng", "Nigeria"],
  ["807", "mk", "North Macedonia"],
  ["578", "no", "Norway"],
  ["512", "om", "Oman"],
  ["586", "pk", "Pakistan"],
  ["591", "pa", "Panama"],
  ["598", "pg", "Papua New Guinea"],
  ["600", "py", "Paraguay"],
  ["604", "pe", "Peru"],
  ["608", "ph", "Philippines"],
  ["616", "pl", "Poland"],
  ["620", "pt", "Portugal"],
  ["634", "qa", "Qatar"],
  ["642", "ro", "Romania"],
  ["643", "ru", "Russia"],
  ["646", "rw", "Rwanda"],
  ["659", "kn", "Saint Kitts and Nevis"],
  ["662", "lc", "Saint Lucia"],
  ["670", "vc", "Saint Vincent"],
  ["682", "sa", "Saudi Arabia"],
  ["686", "sn", "Senegal"],
  ["688", "rs", "Serbia"],
  ["690", "sc", "Seychelles"],
  ["694", "sl", "Sierra Leone"],
  ["702", "sg", "Singapore"],
  ["703", "sk", "Slovakia"],
  ["705", "si", "Slovenia"],
  ["090", "sb", "Solomon Islands"],
  ["706", "so", "Somalia"],
  ["710", "za", "South Africa"],
  ["728", "ss", "South Sudan"],
  ["724", "es", "Spain"],
  ["144", "lk", "Sri Lanka"],
  ["729", "sd", "Sudan"],
  ["740", "sr", "Suriname"],
  ["752", "se", "Sweden"],
  ["756", "ch", "Switzerland"],
  ["760", "sy", "Syria"],
  ["158", "tw", "Taiwan"],
  ["762", "tj", "Tajikistan"],
  ["834", "tz", "Tanzania"],
  ["764", "th", "Thailand"],
  ["626", "tl", "Timor-Leste"],
  ["768", "tg", "Togo"],
  ["776", "to", "Tonga"],
  ["780", "tt", "Trinidad and Tobago"],
  ["788", "tn", "Tunisia"],
  ["792", "tr", "Turkey"],
  ["795", "tm", "Turkmenistan"],
  ["798", "tv", "Tuvalu"],
  ["800", "ug", "Uganda"],
  ["804", "ua", "Ukraine"],
  ["784", "ae", "United Arab Emirates"],
  ["826", "gb", "United Kingdom"],
  ["840", "us", "United States"],
  ["858", "uy", "Uruguay"],
  ["860", "uz", "Uzbekistan"],
  ["548", "vu", "Vanuatu"],
  ["862", "ve", "Venezuela"],
  ["704", "vn", "Vietnam"],
  ["887", "ye", "Yemen"],
  ["894", "zm", "Zambia"],
  ["716", "zw", "Zimbabwe"],
  // Territories
  ["010", "aq", "Antarctica"],
  ["074", "bv", "Bouvet Island"],
  ["162", "cx", "Christmas Island"],
  ["166", "cc", "Cocos Islands"],
  ["184", "ck", "Cook Islands"],
  ["238", "fk", "Falkland Islands"],
  ["254", "gf", "French Guiana"],
  ["258", "pf", "French Polynesia"],
  ["304", "gl", "Greenland"],
  ["312", "gp", "Guadeloupe"],
  ["316", "gu", "Guam"],
  ["344", "hk", "Hong Kong"],
  ["446", "mo", "Macao"],
  ["474", "mq", "Martinique"],
  ["175", "yt", "Mayotte"],
  ["540", "nc", "New Caledonia"],
  ["630", "pr", "Puerto Rico"],
  ["638", "re", "Réunion"],
  ["732", "eh", "Western Sahara"],
  ["876", "wf", "Wallis and Futuna"],
  ["882", "ws", "Samoa"],
];

// Build lookup maps
export const numericToAlpha2: Record<string, string> = {};
export const numericToName: Record<string, string> = {};
for (const [num, alpha2, name] of ISO_COUNTRIES) {
  numericToAlpha2[num] = alpha2;
  numericToName[num] = name;
}

// ── Country → primary language family ────────────────────────────────
// Comprehensive mapping for globe coloring
export const countryLanguageFamily: Record<string, LanguageFamily> = {
  // English-speaking
  us: "english", gb: "english", au: "english", nz: "english", ie: "english",
  jm: "english", tt: "english", gh: "english", ke: "english", ng: "english",
  za: "english", zw: "english", bw: "english", lr: "english", sl: "english",
  gm: "english", gy: "english", pg: "english", sb: "english", ws: "english",
  to: "english", tv: "english", vu: "english", fk: "english", bb: "english",
  bs: "english", bz: "english", dm: "english", gd: "english", kn: "english",
  lc: "english", vc: "english", ag: "english", fj: "english", ki: "english",
  sc: "english", mu: "english",

  // Spanish-speaking
  mx: "spanish", es: "spanish", co: "spanish", ar: "spanish", pe: "spanish",
  ve: "spanish", cl: "spanish", ec: "spanish", gt: "spanish", cu: "spanish",
  bo: "spanish", do: "spanish", hn: "spanish", py: "spanish", sv: "spanish",
  ni: "spanish", cr: "spanish", pa: "spanish", uy: "spanish", gq: "spanish",
  pr: "spanish",

  // Portuguese-speaking
  br: "portuguese", pt: "portuguese", ao: "portuguese", mz: "portuguese",
  tl: "portuguese", cv: "portuguese", gw: "portuguese",

  // French-speaking
  fr: "french", cd: "french", cg: "french", ci: "french", sn: "french",
  ml: "french", bf: "french", ne: "french", td: "french", gn: "french",
  cm: "french", mg: "french", ht: "french", ga: "french", cf: "french",
  tg: "french", dj: "french", bi: "french", rw: "french", bj: "french",
  km: "french", mc: "french",
  gf: "french", gp: "french", mq: "french", re: "french", yt: "french",
  nc: "french", pf: "french", wf: "french",

  // Arabic-speaking
  sa: "arabic", eg: "arabic", iq: "arabic", sy: "arabic", ye: "arabic",
  jo: "arabic", lb: "arabic", ly: "arabic", tn: "arabic", dz: "arabic",
  ma: "arabic", sd: "arabic", om: "arabic", kw: "arabic", qa: "arabic",
  ae: "arabic", mr: "arabic", so: "arabic", eh: "arabic", bh: "arabic",

  // Mandarin/Chinese
  cn: "mandarin", tw: "mandarin", hk: "mandarin", mo: "mandarin", sg: "mandarin",

  // Hindi / Indo-Aryan
  in: "hindi", np: "hindi",

  // Russian / Slavic
  ru: "russian", ua: "russian", by: "russian", kz: "russian", kg: "russian",
  tj: "russian", uz: "russian", tm: "russian", md: "russian",

  // German
  de: "german", at: "german", li: "german",

  // Japanese
  jp: "japanese",

  // Korean
  kr: "korean", kp: "korean",

  // Malay / Austronesian
  id: "malay", my: "malay", ph: "malay", bn: "malay",

  // Turkish / Turkic
  tr: "turkish", az: "turkish",

  // Thai
  th: "thai", la: "thai", kh: "thai", mm: "thai",

  // Other
  bd: "other", pk: "other", lk: "other", ir: "other", il: "other",
  ge: "other", al: "other", ba: "other", hr: "other", rs: "other",
  bg: "other", ro: "other", hu: "other", pl: "other", cz: "other",
  sk: "other", si: "other", ee: "other", lv: "other", lt: "other",
  fi: "other", se: "other", no: "other", dk: "other", is: "other",
  gr: "other", cy: "other", mn: "other", et: "other", er: "other",
  ss: "other", ug: "other", tz: "other", mw: "other", zm: "other",
  na: "other", ls: "other", sz: "other", sr: "other", it: "other",
  lu: "other", nl: "other", be: "other", ch: "other", vn: "other",
  gl: "other", gu: "other", am: "other", me: "other", mk: "other",
  af: "other", bt: "other", mv: "other", mt: "other", ad: "other",
  as: "other",
};

// ── Regional language data for multilingual countries ────────────────
// These markers show sub-national linguistic diversity on the globe
export interface RegionalLanguage {
  region: string;
  language: string;
  languageFamily: LanguageFamily;
  lat: number;
  lng: number;
}

export const regionalLanguages: Record<string, RegionalLanguage[]> = {
  // Switzerland — 4 national languages
  ch: [
    { region: "German Switzerland", language: "German", languageFamily: "german", lat: 47.37, lng: 8.54 },
    { region: "Romandy (French)", language: "French", languageFamily: "french", lat: 46.52, lng: 6.63 },
    { region: "Ticino (Italian)", language: "Italian", languageFamily: "other", lat: 46.01, lng: 8.96 },
  ],
  // Belgium — Dutch north, French south
  be: [
    { region: "Flanders", language: "Dutch", languageFamily: "german", lat: 51.05, lng: 3.72 },
    { region: "Wallonia", language: "French", languageFamily: "french", lat: 50.47, lng: 4.87 },
  ],
  // Canada — English + French Quebec
  ca: [
    { region: "English Canada", language: "English", languageFamily: "english", lat: 51.04, lng: -114.07 },
    { region: "Quebec", language: "French", languageFamily: "french", lat: 46.81, lng: -71.21 },
    { region: "Nunavut", language: "Inuktitut", languageFamily: "other", lat: 63.75, lng: -68.52 },
  ],
  // India — multiple language families
  in: [
    { region: "Hindi Belt (North)", language: "Hindi", languageFamily: "hindi", lat: 28.61, lng: 77.21 },
    { region: "Tamil Nadu", language: "Tamil", languageFamily: "other", lat: 13.08, lng: 80.27 },
    { region: "West Bengal", language: "Bengali", languageFamily: "other", lat: 22.57, lng: 88.36 },
    { region: "Maharashtra", language: "Marathi", languageFamily: "other", lat: 19.08, lng: 72.88 },
    { region: "Karnataka", language: "Kannada", languageFamily: "other", lat: 12.97, lng: 77.59 },
    { region: "Kerala", language: "Malayalam", languageFamily: "other", lat: 8.52, lng: 76.94 },
    { region: "Gujarat", language: "Gujarati", languageFamily: "other", lat: 23.02, lng: 72.57 },
    { region: "Punjab", language: "Punjabi", languageFamily: "hindi", lat: 31.63, lng: 74.87 },
    { region: "Andhra/Telangana", language: "Telugu", languageFamily: "other", lat: 17.39, lng: 78.49 },
    { region: "Assam", language: "Assamese", languageFamily: "other", lat: 26.14, lng: 91.74 },
    { region: "Odisha", language: "Odia", languageFamily: "other", lat: 20.30, lng: 85.83 },
    { region: "Rajasthan", language: "Rajasthani / Hindi", languageFamily: "hindi", lat: 26.92, lng: 75.79 },
  ],
  // China — major dialect groups
  cn: [
    { region: "Mandarin North", language: "Mandarin", languageFamily: "mandarin", lat: 39.9, lng: 116.4 },
    { region: "Cantonese South", language: "Cantonese", languageFamily: "other", lat: 23.13, lng: 113.26 },
    { region: "Shanghainese (Wu)", language: "Wu Chinese", languageFamily: "other", lat: 31.23, lng: 121.47 },
    { region: "Tibet", language: "Tibetan", languageFamily: "other", lat: 29.65, lng: 91.13 },
    { region: "Xinjiang", language: "Uyghur", languageFamily: "turkish", lat: 43.83, lng: 87.62 },
    { region: "Inner Mongolia", language: "Mongolian", languageFamily: "other", lat: 40.82, lng: 111.66 },
    { region: "Sichuan", language: "Sichuanese Mandarin", languageFamily: "mandarin", lat: 30.57, lng: 104.07 },
    { region: "Fujian / Min", language: "Hokkien / Min Nan", languageFamily: "other", lat: 26.07, lng: 119.30 },
    { region: "Yunnan", language: "Dai / Naxi", languageFamily: "thai", lat: 25.04, lng: 102.71 },
  ],
  // Spain — Catalan, Basque, Galician
  es: [
    { region: "Castile (Central)", language: "Spanish", languageFamily: "spanish", lat: 40.42, lng: -3.70 },
    { region: "Catalonia", language: "Catalan", languageFamily: "other", lat: 41.39, lng: 2.17 },
    { region: "Basque Country", language: "Basque", languageFamily: "other", lat: 43.26, lng: -2.92 },
    { region: "Galicia", language: "Galician", languageFamily: "portuguese", lat: 42.88, lng: -8.54 },
    { region: "Valencia", language: "Valencian", languageFamily: "other", lat: 39.47, lng: -0.38 },
  ],
  // Nigeria — major language groups
  ng: [
    { region: "Hausa North", language: "Hausa", languageFamily: "other", lat: 12.0, lng: 8.52 },
    { region: "Yoruba Southwest", language: "Yoruba", languageFamily: "other", lat: 7.38, lng: 3.94 },
    { region: "Igbo Southeast", language: "Igbo", languageFamily: "other", lat: 6.44, lng: 7.50 },
    { region: "English (Official)", language: "English", languageFamily: "english", lat: 9.06, lng: 7.49 },
    { region: "Kanuri Northeast", language: "Kanuri", languageFamily: "other", lat: 11.85, lng: 13.16 },
    { region: "Ijaw / Niger Delta", language: "Ijaw", languageFamily: "other", lat: 4.96, lng: 6.27 },
  ],
  // South Africa — 11 official languages
  za: [
    { region: "Gauteng", language: "Zulu / English", languageFamily: "english", lat: -26.20, lng: 28.05 },
    { region: "Western Cape", language: "Afrikaans", languageFamily: "german", lat: -33.93, lng: 18.42 },
    { region: "KwaZulu-Natal", language: "Zulu", languageFamily: "other", lat: -29.86, lng: 31.02 },
    { region: "Eastern Cape", language: "Xhosa", languageFamily: "other", lat: -33.96, lng: 25.60 },
    { region: "Limpopo", language: "Sepedi / Venda", languageFamily: "other", lat: -23.90, lng: 29.45 },
    { region: "Free State", language: "Sesotho", languageFamily: "other", lat: -29.12, lng: 26.21 },
  ],
  // Pakistan — multiple languages
  pk: [
    { region: "Punjab", language: "Punjabi", languageFamily: "hindi", lat: 31.55, lng: 74.35 },
    { region: "Sindh", language: "Sindhi", languageFamily: "hindi", lat: 25.40, lng: 68.37 },
    { region: "KPK / FATA", language: "Pashto", languageFamily: "other", lat: 34.01, lng: 71.58 },
    { region: "Balochistan", language: "Balochi", languageFamily: "other", lat: 30.12, lng: 66.95 },
    { region: "Urdu (National)", language: "Urdu", languageFamily: "hindi", lat: 33.69, lng: 73.04 },
    { region: "Gilgit-Baltistan", language: "Shina / Balti", languageFamily: "other", lat: 35.92, lng: 74.31 },
  ],
  // Russia — multilingual regions
  ru: [
    { region: "Central Russia", language: "Russian", languageFamily: "russian", lat: 55.75, lng: 37.62 },
    { region: "Tatarstan", language: "Tatar", languageFamily: "turkish", lat: 55.80, lng: 49.10 },
    { region: "Chechnya", language: "Chechen", languageFamily: "other", lat: 43.32, lng: 45.69 },
    { region: "Bashkortostan", language: "Bashkir", languageFamily: "turkish", lat: 54.74, lng: 55.97 },
    { region: "Siberia (Yakutia)", language: "Yakut / Sakha", languageFamily: "turkish", lat: 62.03, lng: 129.73 },
    { region: "Dagestan", language: "Avar / Dargin", languageFamily: "other", lat: 42.98, lng: 47.50 },
    { region: "Tuva", language: "Tuvan", languageFamily: "turkish", lat: 51.72, lng: 94.45 },
  ],
  // US — English + Spanish regions
  us: [
    { region: "Most of US", language: "English", languageFamily: "english", lat: 39.83, lng: -98.58 },
    { region: "Texas / Southwest", language: "Spanish", languageFamily: "spanish", lat: 29.42, lng: -98.49 },
    { region: "Florida / Miami", language: "Spanish", languageFamily: "spanish", lat: 25.76, lng: -80.19 },
    { region: "Louisiana", language: "French Creole", languageFamily: "french", lat: 30.98, lng: -91.96 },
    { region: "Hawaii", language: "Hawaiian / English", languageFamily: "other", lat: 21.31, lng: -157.86 },
  ],
  // Ethiopia — Amharic + Oromo + Tigrinya + more
  et: [
    { region: "Amhara / Addis Ababa", language: "Amharic", languageFamily: "other", lat: 9.01, lng: 38.75 },
    { region: "Oromia", language: "Oromo", languageFamily: "other", lat: 8.00, lng: 39.00 },
    { region: "Tigray", language: "Tigrinya", languageFamily: "other", lat: 13.50, lng: 39.47 },
    { region: "Somali Region", language: "Somali", languageFamily: "other", lat: 5.95, lng: 43.15 },
    { region: "SNNPR / Sidama", language: "Sidamo / Wolayta", languageFamily: "other", lat: 7.05, lng: 38.48 },
    { region: "Gambela", language: "Nuer / Anuak", languageFamily: "other", lat: 8.25, lng: 34.58 },
  ],
  // Cameroon — French + English bilingual
  cm: [
    { region: "Francophone Cameroon", language: "French", languageFamily: "french", lat: 3.87, lng: 11.52 },
    { region: "Anglophone NW/SW", language: "English", languageFamily: "english", lat: 5.95, lng: 10.15 },
    { region: "Far North", language: "Fulfulde", languageFamily: "other", lat: 10.59, lng: 14.32 },
  ],
  // Philippines — Filipino + regional languages
  ph: [
    { region: "Metro Manila / Tagalog", language: "Filipino", languageFamily: "malay", lat: 14.60, lng: 120.98 },
    { region: "Visayas", language: "Cebuano", languageFamily: "malay", lat: 10.31, lng: 123.89 },
    { region: "Mindanao", language: "Various / Moro", languageFamily: "malay", lat: 7.07, lng: 125.61 },
    { region: "Ilocos / North Luzon", language: "Ilocano", languageFamily: "malay", lat: 16.62, lng: 120.32 },
  ],
  // Iraq — Arabic + Kurdish
  iq: [
    { region: "Arab Iraq", language: "Arabic", languageFamily: "arabic", lat: 33.31, lng: 44.37 },
    { region: "Kurdistan", language: "Kurdish", languageFamily: "other", lat: 36.19, lng: 44.01 },
    { region: "Turkmen areas", language: "Turkmen", languageFamily: "turkish", lat: 35.47, lng: 44.39 },
  ],
  // Iran — Persian + minorities
  ir: [
    { region: "Central Iran", language: "Persian", languageFamily: "other", lat: 35.69, lng: 51.39 },
    { region: "Azerbaijan Province", language: "Azerbaijani", languageFamily: "turkish", lat: 38.07, lng: 46.29 },
    { region: "Kurdistan", language: "Kurdish", languageFamily: "other", lat: 35.31, lng: 46.99 },
    { region: "Khuzestan", language: "Arabic", languageFamily: "arabic", lat: 31.32, lng: 48.69 },
    { region: "Baluchestan", language: "Balochi", languageFamily: "other", lat: 25.43, lng: 60.90 },
    { region: "Gilan / Caspian", language: "Gilaki / Mazanderani", languageFamily: "other", lat: 37.28, lng: 49.58 },
  ],
  // Indonesia — diverse archipelago
  id: [
    { region: "Java", language: "Javanese", languageFamily: "malay", lat: -7.25, lng: 112.75 },
    { region: "Sumatra", language: "Malay / Batak", languageFamily: "malay", lat: 0.59, lng: 101.43 },
    { region: "Bali", language: "Balinese", languageFamily: "malay", lat: -8.41, lng: 115.19 },
    { region: "Sulawesi", language: "Bugis / Makassar", languageFamily: "malay", lat: -5.14, lng: 119.42 },
    { region: "Papua", language: "Papuan languages", languageFamily: "other", lat: -2.53, lng: 140.72 },
    { region: "Jakarta", language: "Indonesian", languageFamily: "malay", lat: -6.21, lng: 106.85 },
    { region: "Kalimantan", language: "Dayak / Malay", languageFamily: "malay", lat: 0.03, lng: 114.59 },
    { region: "NTT / Flores", language: "Various Austronesian", languageFamily: "other", lat: -8.65, lng: 121.08 },
  ],
  // Malaysia — Malay + Chinese + Tamil
  my: [
    { region: "Peninsular West", language: "Malay", languageFamily: "malay", lat: 3.14, lng: 101.69 },
    { region: "Penang / KL Chinese", language: "Chinese", languageFamily: "mandarin", lat: 5.41, lng: 100.33 },
    { region: "Tamil community", language: "Tamil", languageFamily: "other", lat: 2.20, lng: 102.25 },
    { region: "Sabah / Sarawak", language: "Indigenous / Malay", languageFamily: "malay", lat: 1.55, lng: 110.35 },
  ],
  // Myanmar — Burmese + minorities
  mm: [
    { region: "Central Myanmar", language: "Burmese", languageFamily: "thai", lat: 19.76, lng: 96.07 },
    { region: "Shan State", language: "Shan", languageFamily: "thai", lat: 20.79, lng: 97.04 },
    { region: "Kachin State", language: "Kachin", languageFamily: "other", lat: 25.38, lng: 97.40 },
    { region: "Rakhine State", language: "Rakhine / Rohingya", languageFamily: "other", lat: 20.15, lng: 92.90 },
    { region: "Karen State", language: "Karen", languageFamily: "other", lat: 16.88, lng: 97.63 },
    { region: "Chin State", language: "Chin", languageFamily: "other", lat: 21.50, lng: 93.61 },
  ],
  // Tanzania — Swahili + tribal languages
  tz: [
    { region: "Dar es Salaam / Coast", language: "Swahili", languageFamily: "other", lat: -6.79, lng: 39.28 },
    { region: "Northern Highlands", language: "Maasai / Chagga", languageFamily: "other", lat: -3.37, lng: 36.68 },
    { region: "Lake Zone", language: "Sukuma", languageFamily: "other", lat: -2.52, lng: 32.90 },
    { region: "Zanzibar", language: "Swahili (Arabic influence)", languageFamily: "arabic", lat: -6.16, lng: 39.19 },
  ],
  // Kenya — Swahili + English + tribal
  ke: [
    { region: "Nairobi / Central", language: "Kikuyu / English", languageFamily: "english", lat: -1.29, lng: 36.82 },
    { region: "Coast", language: "Swahili", languageFamily: "other", lat: -4.04, lng: 39.67 },
    { region: "Western", language: "Luhya / Luo", languageFamily: "other", lat: 0.29, lng: 34.75 },
    { region: "North", language: "Somali / Oromo", languageFamily: "other", lat: 2.27, lng: 40.90 },
  ],
  // DR Congo — French + 4 national languages
  cd: [
    { region: "Kinshasa / West", language: "Lingala / French", languageFamily: "french", lat: -4.32, lng: 15.31 },
    { region: "East (Kivu)", language: "Swahili", languageFamily: "other", lat: -1.68, lng: 29.23 },
    { region: "South (Katanga)", language: "Tshiluba / Swahili", languageFamily: "other", lat: -11.66, lng: 27.48 },
    { region: "Central", language: "Lingala / Kikongo", languageFamily: "other", lat: -4.27, lng: 20.52 },
  ],
  // Mexico — Spanish + indigenous
  mx: [
    { region: "Central / North", language: "Spanish", languageFamily: "spanish", lat: 23.63, lng: -102.55 },
    { region: "Yucatán", language: "Maya", languageFamily: "other", lat: 20.97, lng: -89.62 },
    { region: "Oaxaca", language: "Zapotec / Mixtec", languageFamily: "other", lat: 17.07, lng: -96.73 },
    { region: "Chiapas", language: "Tzotzil / Tzeltal", languageFamily: "other", lat: 16.75, lng: -92.64 },
    { region: "Nahuatl Belt", language: "Nahuatl", languageFamily: "other", lat: 19.29, lng: -98.25 },
  ],
  // Peru — Spanish + Quechua + Aymara
  pe: [
    { region: "Lima / Coast", language: "Spanish", languageFamily: "spanish", lat: -12.05, lng: -77.04 },
    { region: "Andes / Cusco", language: "Quechua", languageFamily: "other", lat: -13.53, lng: -71.97 },
    { region: "Puno / Altiplano", language: "Aymara", languageFamily: "other", lat: -15.84, lng: -70.02 },
    { region: "Amazon", language: "Various indigenous", languageFamily: "other", lat: -3.75, lng: -73.25 },
  ],
  // Bolivia — Spanish + Quechua + Aymara
  bo: [
    { region: "La Paz / El Alto", language: "Aymara / Spanish", languageFamily: "spanish", lat: -16.50, lng: -68.15 },
    { region: "Cochabamba", language: "Quechua", languageFamily: "other", lat: -17.39, lng: -66.16 },
    { region: "Santa Cruz / East", language: "Spanish", languageFamily: "spanish", lat: -17.78, lng: -63.18 },
  ],
  // Paraguay — Spanish + Guaraní
  py: [
    { region: "Asunción / Urban", language: "Spanish", languageFamily: "spanish", lat: -25.26, lng: -57.58 },
    { region: "Rural Paraguay", language: "Guaraní", languageFamily: "other", lat: -23.35, lng: -57.52 },
  ],
  // Sri Lanka — Sinhala + Tamil
  lk: [
    { region: "South / West", language: "Sinhala", languageFamily: "other", lat: 6.93, lng: 79.85 },
    { region: "North / East (Jaffna)", language: "Tamil", languageFamily: "other", lat: 9.66, lng: 80.01 },
  ],
  // Nepal — Nepali + Maithili + more
  np: [
    { region: "Kathmandu / Hills", language: "Nepali", languageFamily: "hindi", lat: 27.72, lng: 85.32 },
    { region: "Terai (South)", language: "Maithili / Bhojpuri", languageFamily: "hindi", lat: 26.67, lng: 85.90 },
    { region: "Eastern Hills", language: "Limbu / Rai", languageFamily: "other", lat: 27.33, lng: 87.27 },
  ],
  // Algeria — Arabic + Berber
  dz: [
    { region: "Northern Algeria", language: "Arabic", languageFamily: "arabic", lat: 36.74, lng: 3.06 },
    { region: "Kabylie", language: "Kabyle (Berber)", languageFamily: "other", lat: 36.72, lng: 4.05 },
    { region: "Sahara / Tuareg", language: "Tuareg (Berber)", languageFamily: "other", lat: 22.79, lng: 5.52 },
  ],
  // Morocco — Arabic + Berber
  ma: [
    { region: "Urban Morocco", language: "Arabic", languageFamily: "arabic", lat: 33.97, lng: -6.85 },
    { region: "Atlas / Rif", language: "Amazigh (Berber)", languageFamily: "other", lat: 31.63, lng: -7.98 },
  ],
  // Sudan — Arabic + African languages
  sd: [
    { region: "Khartoum / North", language: "Arabic", languageFamily: "arabic", lat: 15.59, lng: 32.53 },
    { region: "Darfur", language: "Fur / Arabic", languageFamily: "other", lat: 13.45, lng: 25.35 },
    { region: "Eastern Sudan", language: "Beja", languageFamily: "other", lat: 18.55, lng: 36.95 },
  ],
  // Uganda — English + Luganda + many
  ug: [
    { region: "Central (Buganda)", language: "Luganda", languageFamily: "other", lat: 0.35, lng: 32.58 },
    { region: "Northern", language: "Acholi / Luo", languageFamily: "other", lat: 2.77, lng: 32.30 },
    { region: "Western", language: "Runyankole / Rukiga", languageFamily: "other", lat: -0.60, lng: 30.66 },
    { region: "Eastern", language: "Lusoga / Lugisu", languageFamily: "other", lat: 1.08, lng: 34.18 },
  ],
  // Mozambique — Portuguese + Bantu
  mz: [
    { region: "Maputo / South", language: "Portuguese / Tsonga", languageFamily: "portuguese", lat: -25.97, lng: 32.57 },
    { region: "Central", language: "Sena / Ndau", languageFamily: "other", lat: -19.84, lng: 34.87 },
    { region: "North", language: "Makhuwa / Yao", languageFamily: "other", lat: -15.12, lng: 39.26 },
  ],
  // Bangladesh — Bengali + Chittagong Hill Tracts
  bd: [
    { region: "Most of Bangladesh", language: "Bengali", languageFamily: "other", lat: 23.81, lng: 90.41 },
    { region: "Chittagong Hill Tracts", language: "Chakma / Marma", languageFamily: "other", lat: 22.27, lng: 92.06 },
    { region: "Sylhet", language: "Sylheti Bengali", languageFamily: "other", lat: 24.90, lng: 91.87 },
  ],
  // Ghana — English + Akan + Ewe
  gh: [
    { region: "Greater Accra / South", language: "Akan (Twi)", languageFamily: "other", lat: 5.56, lng: -0.19 },
    { region: "Volta Region", language: "Ewe", languageFamily: "other", lat: 6.60, lng: 0.47 },
    { region: "Northern Ghana", language: "Dagbani / Mampruli", languageFamily: "other", lat: 9.41, lng: -0.84 },
    { region: "English (Official)", language: "English", languageFamily: "english", lat: 7.95, lng: -1.02 },
  ],
  // Senegal — French + Wolof + more
  sn: [
    { region: "Dakar / Urban", language: "Wolof / French", languageFamily: "french", lat: 14.72, lng: -17.47 },
    { region: "Casamance", language: "Diola / Mandinka", languageFamily: "other", lat: 12.58, lng: -15.17 },
    { region: "Saint-Louis / North", language: "Pulaar (Fula)", languageFamily: "other", lat: 16.02, lng: -16.49 },
  ],
  // Chad — French + Arabic
  td: [
    { region: "N'Djamena / South", language: "French / Sara", languageFamily: "french", lat: 12.13, lng: 15.05 },
    { region: "Northern Chad", language: "Arabic", languageFamily: "arabic", lat: 15.44, lng: 18.73 },
  ],
  // Eritrea — Tigrinya + more
  er: [
    { region: "Highlands / Asmara", language: "Tigrinya", languageFamily: "other", lat: 15.34, lng: 38.93 },
    { region: "Western Lowlands", language: "Tigre", languageFamily: "other", lat: 15.61, lng: 37.59 },
    { region: "Coastal / Afar", language: "Afar", languageFamily: "other", lat: 15.28, lng: 40.37 },
  ],
  // Brazil — Portuguese + indigenous
  br: [
    { region: "Most of Brazil", language: "Portuguese", languageFamily: "portuguese", lat: -15.79, lng: -47.88 },
    { region: "Amazon Indigenous", language: "Tupi / Yanomami", languageFamily: "other", lat: -3.12, lng: -60.02 },
    { region: "Southern German/Italian", language: "German / Italian", languageFamily: "german", lat: -29.17, lng: -51.18 },
    { region: "Northeast", language: "Portuguese (Nordestino)", languageFamily: "portuguese", lat: -8.05, lng: -34.87 },
  ],
  // Afghanistan — Dari + Pashto + Uzbek
  af: [
    { region: "Kabul / North", language: "Dari (Persian)", languageFamily: "other", lat: 34.53, lng: 69.17 },
    { region: "South / East", language: "Pashto", languageFamily: "other", lat: 31.63, lng: 65.72 },
    { region: "Mazar-i-Sharif", language: "Uzbek / Turkmen", languageFamily: "turkish", lat: 36.71, lng: 67.11 },
    { region: "Hazarajat", language: "Hazaragi", languageFamily: "other", lat: 34.82, lng: 67.82 },
  ],
  // Ukraine — Ukrainian + Russian
  ua: [
    { region: "Western Ukraine", language: "Ukrainian", languageFamily: "russian", lat: 49.84, lng: 24.03 },
    { region: "Eastern / South", language: "Russian", languageFamily: "russian", lat: 48.47, lng: 35.04 },
    { region: "Crimea", language: "Russian / Tatar", languageFamily: "russian", lat: 44.95, lng: 34.10 },
  ],
  // Kazakhstan — Kazakh + Russian
  kz: [
    { region: "Southern / Western", language: "Kazakh", languageFamily: "turkish", lat: 43.24, lng: 76.95 },
    { region: "Northern Kazakhstan", language: "Russian", languageFamily: "russian", lat: 51.13, lng: 71.43 },
  ],
  // Vietnam — Vietnamese + minorities
  vn: [
    { region: "Most of Vietnam", language: "Vietnamese", languageFamily: "other", lat: 21.03, lng: 105.85 },
    { region: "Central Highlands", language: "Montagnard languages", languageFamily: "other", lat: 14.06, lng: 108.22 },
    { region: "Mekong Delta", language: "Khmer / Chinese", languageFamily: "other", lat: 10.04, lng: 105.79 },
    { region: "Northwest", language: "Hmong / Tay", languageFamily: "other", lat: 21.33, lng: 103.91 },
  ],
  // Italy — Italian + regional
  it: [
    { region: "Standard Italian", language: "Italian", languageFamily: "other", lat: 41.90, lng: 12.50 },
    { region: "South Tyrol", language: "German", languageFamily: "german", lat: 46.50, lng: 11.35 },
    { region: "Sardinia", language: "Sardinian", languageFamily: "other", lat: 39.22, lng: 9.12 },
    { region: "Friuli", language: "Friulian", languageFamily: "other", lat: 46.07, lng: 13.23 },
  ],
  // France — French + regional
  fr: [
    { region: "Standard French", language: "French", languageFamily: "french", lat: 48.86, lng: 2.35 },
    { region: "Alsace", language: "Alsatian (German)", languageFamily: "german", lat: 48.57, lng: 7.75 },
    { region: "Brittany", language: "Breton", languageFamily: "other", lat: 48.20, lng: -3.00 },
    { region: "Corsica", language: "Corsican", languageFamily: "other", lat: 42.15, lng: 9.10 },
    { region: "Occitanie", language: "Occitan", languageFamily: "other", lat: 43.60, lng: 1.44 },
    { region: "Basque Country", language: "Basque", languageFamily: "other", lat: 43.48, lng: -1.56 },
  ],
  // UK — English + Celtic
  gb: [
    { region: "England", language: "English", languageFamily: "english", lat: 51.51, lng: -0.13 },
    { region: "Wales", language: "Welsh", languageFamily: "other", lat: 52.13, lng: -3.78 },
    { region: "Scotland", language: "Scots / Scottish Gaelic", languageFamily: "other", lat: 56.49, lng: -4.20 },
    { region: "Northern Ireland", language: "English / Irish", languageFamily: "english", lat: 54.60, lng: -5.93 },
  ],
  // Australia — English + Indigenous
  au: [
    { region: "Urban Australia", language: "English", languageFamily: "english", lat: -33.87, lng: 151.21 },
    { region: "Northern Territory", language: "Aboriginal languages", languageFamily: "other", lat: -12.46, lng: 130.84 },
    { region: "Western Desert", language: "Pitjantjatjara / Warlpiri", languageFamily: "other", lat: -25.34, lng: 131.04 },
  ],
  // Singapore — multilingual
  sg: [
    { region: "Mandarin / English", language: "Mandarin / English", languageFamily: "mandarin", lat: 1.35, lng: 103.82 },
    { region: "Malay quarter", language: "Malay", languageFamily: "malay", lat: 1.30, lng: 103.86 },
    { region: "Little India", language: "Tamil", languageFamily: "other", lat: 1.31, lng: 103.85 },
  ],
  // Finland — Finnish + Swedish
  fi: [
    { region: "Most of Finland", language: "Finnish", languageFamily: "other", lat: 60.17, lng: 24.94 },
    { region: "Coastal / Åland", language: "Swedish", languageFamily: "other", lat: 60.10, lng: 19.93 },
    { region: "Lapland", language: "Sámi", languageFamily: "other", lat: 69.07, lng: 25.47 },
  ],
  // Norway — Norwegian + Sámi
  no: [
    { region: "Most of Norway", language: "Norwegian", languageFamily: "other", lat: 59.91, lng: 10.75 },
    { region: "Northern Norway", language: "Sámi", languageFamily: "other", lat: 69.65, lng: 18.96 },
  ],
  // Sweden — Swedish + Sámi + Finnish
  se: [
    { region: "Most of Sweden", language: "Swedish", languageFamily: "other", lat: 59.33, lng: 18.07 },
    { region: "Norrbotten / Lapland", language: "Sámi / Finnish", languageFamily: "other", lat: 67.86, lng: 20.23 },
  ],
  // Côte d'Ivoire — French + local
  ci: [
    { region: "Abidjan / South", language: "French / Bété", languageFamily: "french", lat: 5.36, lng: -4.01 },
    { region: "North", language: "Dioula / Senufo", languageFamily: "other", lat: 9.45, lng: -5.63 },
    { region: "East", language: "Baoulé / Agni", languageFamily: "other", lat: 6.83, lng: -5.28 },
  ],
  // Guinea — French + Fula + Mandinka
  gn: [
    { region: "Conakry / Coast", language: "French / Susu", languageFamily: "french", lat: 9.64, lng: -13.58 },
    { region: "Fouta Djallon", language: "Pular (Fula)", languageFamily: "other", lat: 11.29, lng: -12.29 },
    { region: "Upper Guinea", language: "Maninka", languageFamily: "other", lat: 10.88, lng: -9.31 },
    { region: "Forest Region", language: "Kissi / Kpelle", languageFamily: "other", lat: 7.76, lng: -8.82 },
  ],
  // Mali — French + Bambara
  ml: [
    { region: "Bamako / South", language: "Bambara / French", languageFamily: "french", lat: 12.64, lng: -8.00 },
    { region: "Mopti / Central", language: "Fulfulde / Dogon", languageFamily: "other", lat: 14.49, lng: -4.20 },
    { region: "North (Timbuktu)", language: "Tuareg / Songhay", languageFamily: "other", lat: 16.77, lng: -3.01 },
  ],
  // Niger — French + Hausa
  ne: [
    { region: "Niamey / Southwest", language: "French / Zarma", languageFamily: "french", lat: 13.51, lng: 2.11 },
    { region: "Central / South", language: "Hausa", languageFamily: "other", lat: 13.49, lng: 7.50 },
    { region: "North", language: "Tuareg (Tamashek)", languageFamily: "other", lat: 18.70, lng: 7.85 },
  ],
  // Burkina Faso — French + Mossi
  bf: [
    { region: "Ouagadougou / Central", language: "French / Mooré", languageFamily: "french", lat: 12.37, lng: -1.52 },
    { region: "West", language: "Dioula / Bobo", languageFamily: "other", lat: 11.18, lng: -4.30 },
    { region: "Sahel / North", language: "Fulfulde", languageFamily: "other", lat: 14.04, lng: -0.15 },
  ],
  // Madagascar — Malagasy + French
  mg: [
    { region: "Highlands", language: "Merina Malagasy", languageFamily: "malay", lat: -18.91, lng: 47.52 },
    { region: "Coastal", language: "Coastal Malagasy / French", languageFamily: "french", lat: -15.72, lng: 46.32 },
  ],
  // South Sudan — English + local
  ss: [
    { region: "Juba / Central", language: "English / Juba Arabic", languageFamily: "english", lat: 4.85, lng: 31.58 },
    { region: "Upper Nile", language: "Nuer / Shilluk", languageFamily: "other", lat: 9.88, lng: 32.72 },
    { region: "Equatoria", language: "Bari / Zande", languageFamily: "other", lat: 4.31, lng: 31.62 },
    { region: "Western", language: "Dinka", languageFamily: "other", lat: 7.77, lng: 28.00 },
  ],
  // Zambia — English + Bemba + others
  zm: [
    { region: "Lusaka / Copperbelt", language: "English / Bemba", languageFamily: "english", lat: -15.39, lng: 28.32 },
    { region: "Southern", language: "Tonga", languageFamily: "other", lat: -17.86, lng: 25.87 },
    { region: "Eastern", language: "Nyanja / Chewa", languageFamily: "other", lat: -13.98, lng: 31.42 },
    { region: "Western", language: "Lozi", languageFamily: "other", lat: -15.23, lng: 23.15 },
  ],
  // Zimbabwe — English + Shona + Ndebele
  zw: [
    { region: "Harare / East", language: "Shona / English", languageFamily: "english", lat: -17.83, lng: 31.05 },
    { region: "Bulawayo / West", language: "Ndebele", languageFamily: "other", lat: -20.15, lng: 28.58 },
  ],
  // Malawi — Chichewa + English
  mw: [
    { region: "Central / South", language: "Chichewa / English", languageFamily: "english", lat: -13.97, lng: 33.79 },
    { region: "Northern", language: "Tumbuka", languageFamily: "other", lat: -10.66, lng: 34.03 },
    { region: "Southern", language: "Yao / Lomwe", languageFamily: "other", lat: -15.79, lng: 35.01 },
  ],
  // Angola — Portuguese + Bantu
  ao: [
    { region: "Luanda / Coast", language: "Portuguese", languageFamily: "portuguese", lat: -8.84, lng: 13.23 },
    { region: "North", language: "Kimbundu / Kikongo", languageFamily: "other", lat: -7.62, lng: 15.06 },
    { region: "South", language: "Umbundu", languageFamily: "other", lat: -12.78, lng: 15.74 },
  ],
  // Namibia — English + Afrikaans + Oshiwambo
  na: [
    { region: "Windhoek", language: "English / Afrikaans", languageFamily: "english", lat: -22.56, lng: 17.08 },
    { region: "North", language: "Oshiwambo", languageFamily: "other", lat: -17.79, lng: 15.76 },
    { region: "Caprivi Strip", language: "Lozi / Subia", languageFamily: "other", lat: -17.80, lng: 25.28 },
    { region: "South", language: "Afrikaans / Nama", languageFamily: "german", lat: -26.63, lng: 18.00 },
  ],
  // Togo — French + Ewe + Kabye
  tg: [
    { region: "Lomé / South", language: "French / Ewe", languageFamily: "french", lat: 6.13, lng: 1.22 },
    { region: "North", language: "Kabye / Tem", languageFamily: "other", lat: 9.25, lng: 1.10 },
  ],
  // Benin — French + Fon
  bj: [
    { region: "Cotonou / South", language: "French / Fon", languageFamily: "french", lat: 6.37, lng: 2.42 },
    { region: "North", language: "Bariba / Dendi", languageFamily: "other", lat: 10.30, lng: 2.62 },
    { region: "Central", language: "Yoruba", languageFamily: "other", lat: 7.63, lng: 2.43 },
  ],
  // Sierra Leone — English + Krio
  sl: [
    { region: "Freetown / West", language: "Krio / English", languageFamily: "english", lat: 8.47, lng: -13.23 },
    { region: "North", language: "Temne", languageFamily: "other", lat: 8.88, lng: -12.06 },
    { region: "South / East", language: "Mende", languageFamily: "other", lat: 7.96, lng: -11.74 },
  ],
  // Liberia — English + indigenous
  lr: [
    { region: "Monrovia / Coast", language: "English / Liberian English", languageFamily: "english", lat: 6.30, lng: -10.80 },
    { region: "Interior", language: "Kpelle / Bassa", languageFamily: "other", lat: 7.00, lng: -9.50 },
  ],
  // Central African Republic — French + Sango
  cf: [
    { region: "Bangui / West", language: "French / Sango", languageFamily: "french", lat: 4.36, lng: 18.56 },
    { region: "North / East", language: "Arabic / Sara", languageFamily: "arabic", lat: 7.00, lng: 20.68 },
  ],
  // Republic of the Congo — French + Lingala + Kituba
  cg: [
    { region: "Brazzaville / North", language: "Lingala / French", languageFamily: "french", lat: -4.27, lng: 15.28 },
    { region: "South", language: "Kituba", languageFamily: "other", lat: -4.80, lng: 12.20 },
  ],
  // Gabon — French + Fang
  ga: [
    { region: "Libreville / North", language: "French / Fang", languageFamily: "french", lat: 0.39, lng: 9.45 },
    { region: "South", language: "Punu / Nzebi", languageFamily: "other", lat: -1.61, lng: 13.59 },
  ],
  // Mauritania — Arabic + Pulaar
  mr: [
    { region: "Nouakchott / North", language: "Hassaniya Arabic", languageFamily: "arabic", lat: 18.09, lng: -15.98 },
    { region: "Senegal River", language: "Pulaar / Soninke", languageFamily: "other", lat: 16.52, lng: -14.45 },
  ],
  // Djibouti — French + Arabic + Somali
  dj: [
    { region: "Djibouti City", language: "French / Arabic", languageFamily: "french", lat: 11.59, lng: 43.15 },
    { region: "Interior", language: "Somali / Afar", languageFamily: "other", lat: 11.15, lng: 42.37 },
  ],
  // Burundi — French + Kirundi
  bi: [
    { region: "Bujumbura", language: "French / Kirundi", languageFamily: "french", lat: -3.38, lng: 29.36 },
    { region: "Rural areas", language: "Kirundi", languageFamily: "other", lat: -3.55, lng: 29.90 },
  ],
  // Rwanda — Kinyarwanda + French + English
  rw: [
    { region: "Kigali / Urban", language: "Kinyarwanda / English", languageFamily: "english", lat: -1.94, lng: 29.87 },
    { region: "Western", language: "Kinyarwanda / French", languageFamily: "french", lat: -2.35, lng: 29.00 },
  ],
  // Eswatini (Swaziland) — siSwati + English
  sz: [
    { region: "Mbabane / Urban", language: "English / siSwati", languageFamily: "english", lat: -26.32, lng: 31.14 },
    { region: "Rural", language: "siSwati", languageFamily: "other", lat: -26.55, lng: 31.47 },
  ],
  // Botswana — English + Setswana
  bw: [
    { region: "Gaborone", language: "English / Setswana", languageFamily: "english", lat: -24.66, lng: 25.91 },
    { region: "Kalahari / Rural", language: "Setswana / San", languageFamily: "other", lat: -22.33, lng: 24.68 },
  ],
  // Papua New Guinea — English + Tok Pisin + 800+ languages
  pg: [
    { region: "Port Moresby", language: "English / Tok Pisin", languageFamily: "english", lat: -6.31, lng: 147.17 },
    { region: "Highlands", language: "Huli / Enga", languageFamily: "other", lat: -5.85, lng: 143.08 },
    { region: "Islands / New Britain", language: "Kuanua / Tok Pisin", languageFamily: "other", lat: -5.45, lng: 150.39 },
    { region: "Sepik", language: "Sepik languages", languageFamily: "other", lat: -3.88, lng: 141.86 },
  ],
  // Laos — Lao + ethnic minorities
  la: [
    { region: "Vientiane / Lowland", language: "Lao", languageFamily: "thai", lat: 17.97, lng: 102.63 },
    { region: "Northern Highlands", language: "Hmong / Khmu", languageFamily: "other", lat: 20.45, lng: 103.00 },
  ],
  // Cambodia — Khmer + minorities
  kh: [
    { region: "Phnom Penh / Central", language: "Khmer", languageFamily: "other", lat: 11.56, lng: 104.93 },
    { region: "Northeast", language: "Cham / Hill tribes", languageFamily: "other", lat: 13.36, lng: 107.00 },
  ],
  // Thailand — Thai + regional
  th: [
    { region: "Central / Bangkok", language: "Thai", languageFamily: "thai", lat: 13.76, lng: 100.50 },
    { region: "Northeast (Isan)", language: "Isan / Lao", languageFamily: "thai", lat: 16.43, lng: 102.83 },
    { region: "Deep South", language: "Malay / Yawi", languageFamily: "malay", lat: 6.87, lng: 101.25 },
    { region: "Northern", language: "Lanna / Kam Muang", languageFamily: "thai", lat: 18.79, lng: 98.98 },
  ],
  // Israel — Hebrew + Arabic
  il: [
    { region: "Most of Israel", language: "Hebrew", languageFamily: "other", lat: 32.07, lng: 34.78 },
    { region: "Arab communities", language: "Arabic", languageFamily: "arabic", lat: 32.72, lng: 35.30 },
  ],
  // Georgia — Georgian + minorities
  ge: [
    { region: "Most of Georgia", language: "Georgian", languageFamily: "other", lat: 41.69, lng: 44.80 },
    { region: "Abkhazia", language: "Abkhaz / Russian", languageFamily: "russian", lat: 43.00, lng: 40.98 },
  ],
  // Moldova — Romanian + Russian
  md: [
    { region: "Chișinău / Main", language: "Romanian", languageFamily: "other", lat: 47.01, lng: 28.86 },
    { region: "Transnistria", language: "Russian", languageFamily: "russian", lat: 46.84, lng: 29.60 },
    { region: "Gagauzia", language: "Gagauz (Turkic)", languageFamily: "turkish", lat: 46.30, lng: 28.65 },
  ],
  // Bosnia — Bosnian + Serbian + Croatian
  ba: [
    { region: "Federation", language: "Bosnian / Croatian", languageFamily: "other", lat: 43.86, lng: 18.41 },
    { region: "Republika Srpska", language: "Serbian", languageFamily: "russian", lat: 44.77, lng: 17.19 },
  ],
  // Fiji — English + Fijian + Hindi
  fj: [
    { region: "Indigenous areas", language: "Fijian", languageFamily: "other", lat: -17.77, lng: 177.95 },
    { region: "Indo-Fijian areas", language: "Fiji Hindi", languageFamily: "hindi", lat: -17.78, lng: 177.96 },
  ],
  // New Zealand — English + Māori
  nz: [
    { region: "Most of NZ", language: "English", languageFamily: "english", lat: -41.29, lng: 174.78 },
    { region: "Māori communities", language: "Te Reo Māori", languageFamily: "other", lat: -38.14, lng: 176.25 },
  ],
  // Suriname — Dutch + Sranan Tongo
  sr: [
    { region: "Paramaribo", language: "Dutch / Sranan Tongo", languageFamily: "other", lat: 5.82, lng: -55.17 },
    { region: "Interior", language: "Maroon / Indigenous", languageFamily: "other", lat: 4.00, lng: -55.50 },
    { region: "Indian communities", language: "Sarnami Hindi", languageFamily: "hindi", lat: 5.70, lng: -55.30 },
  ],
  // Luxembourg — multilingual
  lu: [
    { region: "Luxembourgish", language: "Luxembourgish", languageFamily: "german", lat: 49.61, lng: 6.13 },
    { region: "French sector", language: "French", languageFamily: "french", lat: 49.60, lng: 6.12 },
  ],
  // Equatorial Guinea — Spanish + French + Portuguese
  gq: [
    { region: "Mainland", language: "Spanish / Fang", languageFamily: "spanish", lat: 1.65, lng: 10.27 },
    { region: "Bioko Island", language: "Spanish / Bubi", languageFamily: "spanish", lat: 3.75, lng: 8.78 },
  ],
  // Comoros — Comorian + French + Arabic
  km: [
    { region: "Grande Comore", language: "Comorian / French", languageFamily: "french", lat: -11.70, lng: 43.25 },
    { region: "Anjouan", language: "Comorian / Arabic", languageFamily: "arabic", lat: -12.23, lng: 44.43 },
  ],
  // Guinea-Bissau — Portuguese + Crioulo
  gw: [
    { region: "Bissau / Urban", language: "Portuguese / Crioulo", languageFamily: "portuguese", lat: 11.86, lng: -15.60 },
    { region: "Interior", language: "Balanta / Mandinka", languageFamily: "other", lat: 12.20, lng: -14.90 },
  ],
  // Venezuela — Spanish + Indigenous
  ve: [
    { region: "Most of Venezuela", language: "Spanish", languageFamily: "spanish", lat: 10.49, lng: -66.88 },
    { region: "Amazonas / Gran Sabana", language: "Indigenous (Yanomami / Warao)", languageFamily: "other", lat: 3.42, lng: -65.85 },
  ],
  // Colombia — Spanish + Indigenous
  co: [
    { region: "Most of Colombia", language: "Spanish", languageFamily: "spanish", lat: 4.71, lng: -74.07 },
    { region: "Amazon / Vaupés", language: "Indigenous (Tukano)", languageFamily: "other", lat: 1.25, lng: -70.23 },
    { region: "La Guajira", language: "Wayuu", languageFamily: "other", lat: 11.54, lng: -72.91 },
  ],
  // Guatemala — Spanish + Mayan
  gt: [
    { region: "Guatemala City / East", language: "Spanish", languageFamily: "spanish", lat: 14.63, lng: -90.51 },
    { region: "Western Highlands", language: "K'iche' / Kaqchikel", languageFamily: "other", lat: 14.83, lng: -91.52 },
  ],
  // Ecuador — Spanish + Quichua
  ec: [
    { region: "Coast / Urban", language: "Spanish", languageFamily: "spanish", lat: -2.17, lng: -79.92 },
    { region: "Sierra / Amazon", language: "Quichua / Shuar", languageFamily: "other", lat: -1.83, lng: -78.18 },
  ],
  // Haiti — French Creole + French
  ht: [
    { region: "Port-au-Prince", language: "Haitian Creole / French", languageFamily: "french", lat: 18.54, lng: -72.34 },
    { region: "Rural Haiti", language: "Haitian Creole", languageFamily: "french", lat: 19.14, lng: -72.07 },
  ],
};
