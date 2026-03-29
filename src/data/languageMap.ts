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
  ],
  // India — multiple language families
  in: [
    { region: "Hindi Belt (North)", language: "Hindi", languageFamily: "hindi", lat: 28.61, lng: 77.21 },
    { region: "Tamil Nadu (South)", language: "Tamil", languageFamily: "other", lat: 13.08, lng: 80.27 },
    { region: "West Bengal", language: "Bengali", languageFamily: "other", lat: 22.57, lng: 88.36 },
    { region: "Maharashtra", language: "Marathi", languageFamily: "other", lat: 19.08, lng: 72.88 },
    { region: "Karnataka", language: "Kannada", languageFamily: "other", lat: 12.97, lng: 77.59 },
    { region: "Kerala", language: "Malayalam", languageFamily: "other", lat: 8.52, lng: 76.94 },
    { region: "Gujarat", language: "Gujarati", languageFamily: "other", lat: 23.02, lng: 72.57 },
    { region: "Punjab", language: "Punjabi", languageFamily: "hindi", lat: 31.63, lng: 74.87 },
  ],
  // China — major dialect groups
  cn: [
    { region: "Mandarin North", language: "Mandarin", languageFamily: "mandarin", lat: 39.9, lng: 116.4 },
    { region: "Cantonese South", language: "Cantonese", languageFamily: "other", lat: 23.13, lng: 113.26 },
    { region: "Shanghainese (Wu)", language: "Wu Chinese", languageFamily: "other", lat: 31.23, lng: 121.47 },
    { region: "Tibet", language: "Tibetan", languageFamily: "other", lat: 29.65, lng: 91.13 },
    { region: "Xinjiang", language: "Uyghur", languageFamily: "turkish", lat: 43.83, lng: 87.62 },
  ],
  // Spain — Catalan, Basque, Galician
  es: [
    { region: "Castile (Central)", language: "Spanish", languageFamily: "spanish", lat: 40.42, lng: -3.70 },
    { region: "Catalonia", language: "Catalan", languageFamily: "other", lat: 41.39, lng: 2.17 },
    { region: "Basque Country", language: "Basque", languageFamily: "other", lat: 43.26, lng: -2.92 },
    { region: "Galicia", language: "Galician", languageFamily: "portuguese", lat: 42.88, lng: -8.54 },
  ],
  // Nigeria — major language groups
  ng: [
    { region: "Hausa North", language: "Hausa", languageFamily: "other", lat: 12.0, lng: 8.52 },
    { region: "Yoruba Southwest", language: "Yoruba", languageFamily: "other", lat: 7.38, lng: 3.94 },
    { region: "Igbo Southeast", language: "Igbo", languageFamily: "other", lat: 6.44, lng: 7.50 },
    { region: "English (Official)", language: "English", languageFamily: "english", lat: 9.06, lng: 7.49 },
  ],
  // South Africa — 11 official languages
  za: [
    { region: "Gauteng", language: "Zulu / English", languageFamily: "english", lat: -26.20, lng: 28.05 },
    { region: "Western Cape", language: "Afrikaans", languageFamily: "german", lat: -33.93, lng: 18.42 },
    { region: "KwaZulu-Natal", language: "Zulu", languageFamily: "other", lat: -29.86, lng: 31.02 },
    { region: "Eastern Cape", language: "Xhosa", languageFamily: "other", lat: -33.96, lng: 25.60 },
  ],
  // Pakistan — multiple languages
  pk: [
    { region: "Punjab", language: "Punjabi", languageFamily: "hindi", lat: 31.55, lng: 74.35 },
    { region: "Sindh", language: "Sindhi", languageFamily: "hindi", lat: 25.40, lng: 68.37 },
    { region: "KPK / FATA", language: "Pashto", languageFamily: "other", lat: 34.01, lng: 71.58 },
    { region: "Balochistan", language: "Balochi", languageFamily: "other", lat: 30.12, lng: 66.95 },
    { region: "Urdu (National)", language: "Urdu", languageFamily: "hindi", lat: 33.69, lng: 73.04 },
  ],
  // Russia — multilingual regions
  ru: [
    { region: "Central Russia", language: "Russian", languageFamily: "russian", lat: 55.75, lng: 37.62 },
    { region: "Tatarstan", language: "Tatar", languageFamily: "turkish", lat: 55.80, lng: 49.10 },
    { region: "Chechnya", language: "Chechen", languageFamily: "other", lat: 43.32, lng: 45.69 },
    { region: "Bashkortostan", language: "Bashkir", languageFamily: "turkish", lat: 54.74, lng: 55.97 },
  ],
  // US — English + Spanish regions
  us: [
    { region: "Most of US", language: "English", languageFamily: "english", lat: 39.83, lng: -98.58 },
    { region: "Texas / Southwest", language: "Spanish", languageFamily: "spanish", lat: 29.42, lng: -98.49 },
    { region: "Florida / Miami", language: "Spanish", languageFamily: "spanish", lat: 25.76, lng: -80.19 },
    { region: "Louisiana", language: "French Creole", languageFamily: "french", lat: 30.98, lng: -91.96 },
  ],
  // Ethiopia — Amharic + Oromo + Tigrinya + more
  et: [
    { region: "Amhara / Addis Ababa", language: "Amharic", languageFamily: "other", lat: 9.01, lng: 38.75 },
    { region: "Oromia", language: "Oromo", languageFamily: "other", lat: 8.00, lng: 39.00 },
    { region: "Tigray", language: "Tigrinya", languageFamily: "other", lat: 13.50, lng: 39.47 },
    { region: "Somali Region", language: "Somali", languageFamily: "other", lat: 5.95, lng: 43.15 },
  ],
  // Cameroon — French + English bilingual
  cm: [
    { region: "Francophone Cameroon", language: "French", languageFamily: "french", lat: 3.87, lng: 11.52 },
    { region: "Anglophone NW/SW", language: "English", languageFamily: "english", lat: 5.95, lng: 10.15 },
  ],
  // Philippines — Filipino + regional languages
  ph: [
    { region: "Metro Manila / Tagalog", language: "Filipino", languageFamily: "malay", lat: 14.60, lng: 120.98 },
    { region: "Visayas", language: "Cebuano", languageFamily: "malay", lat: 10.31, lng: 123.89 },
    { region: "Mindanao", language: "Various / Moro", languageFamily: "malay", lat: 7.07, lng: 125.61 },
  ],
  // Iraq — Arabic + Kurdish
  iq: [
    { region: "Arab Iraq", language: "Arabic", languageFamily: "arabic", lat: 33.31, lng: 44.37 },
    { region: "Kurdistan", language: "Kurdish", languageFamily: "other", lat: 36.19, lng: 44.01 },
  ],
  // Iran — Persian + minorities
  ir: [
    { region: "Central Iran", language: "Persian", languageFamily: "other", lat: 35.69, lng: 51.39 },
    { region: "Azerbaijan Province", language: "Azerbaijani", languageFamily: "turkish", lat: 38.07, lng: 46.29 },
    { region: "Kurdistan", language: "Kurdish", languageFamily: "other", lat: 35.31, lng: 46.99 },
    { region: "Khuzestan", language: "Arabic", languageFamily: "arabic", lat: 31.32, lng: 48.69 },
  ],
  // Indonesia — diverse archipelago
  id: [
    { region: "Java", language: "Javanese", languageFamily: "malay", lat: -7.25, lng: 112.75 },
    { region: "Sumatra", language: "Malay / Batak", languageFamily: "malay", lat: 0.59, lng: 101.43 },
    { region: "Bali", language: "Balinese", languageFamily: "malay", lat: -8.41, lng: 115.19 },
    { region: "Sulawesi", language: "Bugis / Makassar", languageFamily: "malay", lat: -5.14, lng: 119.42 },
    { region: "Papua", language: "Papuan languages", languageFamily: "other", lat: -2.53, lng: 140.72 },
    { region: "Jakarta", language: "Indonesian", languageFamily: "malay", lat: -6.21, lng: 106.85 },
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
  ],
};
