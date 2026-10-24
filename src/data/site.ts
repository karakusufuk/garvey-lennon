// Single place for the firm's (fictional) identity. Section 2 of the Ince Belge: every contact detail is made up.
export const SITE = {
  name: 'Garvey Lennon',
  legalName: 'Garvey Lennon LLP',
  tagline: 'Solicitors · Dublin',
  url: 'https://garveylennon.ufuk.ie',
  street: 'Lennox Mews',
  address: '6 Lennox Mews, Dublin 2, D02 GL27',
  addressShort: '6 Lennox Mews, Dublin 2',
  addressLines: ['6 Lennox Mews', 'Dublin 2'],
  phone: '01 234 5180',
  email: 'hello@garveylennon.ufuk.ie',
  careersEmail: 'careers@garveylennon.ufuk.ie',
  privacyEmail: 'privacy@garveylennon.ufuk.ie',
  hoursShort: 'Monday to Friday, 9:00 to 17:30',
  hours: [
    ['Monday to Thursday', '9:00 to 17:30'],
    ['Friday', '9:00 to 16:30'],
  ],
  year: 2026,
} as const;

// The action-moment modal links here ("See how it works →").
export const CASE_STUDY_URL = 'https://ufuk.ie/work/garvey-lennon';

// Memberships photo. Blackhall Place is still expected; until the file exists the team photo is used.
// To swap later: drop `blackhall-3x2.jpg` into src/assets and change this one constant.
export const MEMBERSHIPS_PHOTO = 'blackhall-3x2.jpg';
export const MEMBERSHIPS_FALLBACK = 'team-3x2.jpg';

export const MEMBERSHIPS = [
  'Law Society of Ireland',
  'Dublin Solicitors Bar Association',
  'Family Lawyers Association',
  'Employment Law Association of Ireland',
  'Mediators’ Institute Ireland',
  'Association of Collaborative Practitioners',
];

export const LEGAL_LINES = [
  'Garvey Lennon LLP is a limited liability partnership authorised by the Legal Services Regulatory Authority under section 125 of the Legal Services Regulation Act 2015. Solicitors regulated by the Law Society of Ireland.',
  'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.',
  'Information on this website is general and is not legal advice. © 2026 Garvey Lennon LLP.',
];

export const DEMO_LINES = ['Portfolio demo, not a real business.', 'Designed by Ufuk Karakuş'];

export const PI_FEE_SENTENCE = 'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.';
