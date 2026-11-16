export type Lang = 'en' | 'hi';
export const languages: Lang[] = ['en', 'hi'];
export const t = (lang: Lang, en: string, hi: string) => lang === 'hi' ? hi : en;
export const otherLang = (lang: Lang): Lang => lang === 'en' ? 'hi' : 'en';
export const kindNames = {
  person: ['Person', 'व्यक्ति'], text: ['Text', 'ग्रंथ'], idea: ['Idea', 'विचार'], context: ['Context', 'संदर्भ'],
};
export const periodNames = {
  early: ['Early traditions · 1st millennium BCE onward', 'प्रारंभिक परंपराएँ · प्रथम सहस्राब्दी ईसा पूर्व से'],
  classical: ['Classical · c. 500–1200 CE', 'शास्त्रीय काल · लगभग 500–1200 ईस्वी'],
  medieval: ['Later traditions · c. 1200–1700 CE', 'उत्तरवर्ती परंपराएँ · लगभग 1200–1700 ईस्वी'],
  modern: ['Modern · 19th–20th centuries', 'आधुनिक काल · 19वीं–20वीं शताब्दी'],
};
export const topicNames = {
  geometry: ['Geometry', 'ज्यामिति'], arithmetic: ['Number & arithmetic', 'संख्या और अंकगणित'],
  algebra: ['Algebra', 'बीजगणित'], astronomy: ['Astronomy', 'खगोलशास्त्र'], analysis: ['Infinite series', 'अनंत श्रेणियाँ'],
  combinatorics: ['Combinatorics', 'क्रमचय-संचय'], transmission: ['Exchange & translation', 'आदान-प्रदान और अनुवाद'],
  historiography: ['Reading history', 'इतिहास का अध्ययन'],
};
export const personNames: Record<string, string> = {
  'Āryabhaṭa': 'आर्यभट', 'Brahmagupta': 'ब्रह्मगुप्त', 'Baudhāyana': 'बौधायन', 'Āpastamba': 'आपस्तम्ब',
  'Bhāskara II': 'भास्कर द्वितीय', 'Bhāskara I': 'भास्कर प्रथम', 'Piṅgala': 'पिङ्गल', 'Hemacandra': 'हेमचन्द्र',
  'Halāyudha': 'हलायुध', 'Mādhava': 'माधव', 'Jyeṣṭhadeva': 'ज्येष्ठदेव', 'Nīlakaṇṭha': 'नीलकण्ठ',
  'Srinivasa Ramanujan': 'श्रीनिवास रामानुजन', 'G. H. Hardy': 'जी. एच. हार्डी', 'al-Khwārizmī': 'अल-ख्वारिज़्मी',
  'al-Bīrūnī': 'अल-बीरूनी', 'Al-Khwārizmī': 'अल-ख्वारिज़्मी',
};
export const textNames: Record<string, string> = {
  'Śulbasūtras': 'शुल्बसूत्र', 'Baudhāyana Śulbasūtra': 'बौधायन शुल्बसूत्र', 'Āpastamba Śulbasūtra': 'आपस्तम्ब शुल्बसूत्र',
  'Āryabhaṭīya': 'आर्यभटीय', 'Brāhmasphuṭasiddhānta': 'ब्राह्मस्फुटसिद्धान्त', 'Līlāvatī': 'लीलावती',
  'Bījagaṇita': 'बीजगणित', 'Siddhāntaśiromaṇi': 'सिद्धान्तशिरोमणि', 'Yuktibhāṣā': 'युक्तिभाषा',
  'Tantrasaṅgraha': 'तन्त्रसंग्रह', 'Chandaḥśāstra': 'छन्दःशास्त्र', 'Khaṇḍakhādyaka': 'खण्डखाद्यक',
  'Some properties of p(n)': 'p(n) के कुछ गुण', 'Asymptotic formulæ in combinatory analysis': 'संयोजनात्मक विश्लेषण में उपगामी सूत्र',
  'Arithmetic of al-Khwārizmī': 'अल-ख्वारिज़्मी का अंकगणित',
};
export const label = (lang: Lang, values: string[]) => values[lang === 'en' ? 0 : 1];
export function displayTag(lang: Lang, type: string, value: string) {
  if (type === 'topic') return topicNames[value as keyof typeof topicNames] ? label(lang, topicNames[value as keyof typeof topicNames]) : value;
  if (type === 'period') return periodNames[value as keyof typeof periodNames] ? label(lang, periodNames[value as keyof typeof periodNames]) : value;
  return lang === 'hi' ? (type === 'person' ? personNames[value] : textNames[value]) || value : value;
}
