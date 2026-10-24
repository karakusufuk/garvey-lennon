export type LegalTab = 'privacy' | 'cookies' | 'terms';

export const LEGAL: Record<LegalTab, [string, [string, string][]]> = {
  privacy: ['Privacy', [
    ['Who we are', 'Garvey Lennon LLP, 6 Lennox Mews, Dublin 2, controls the personal data you give us. Contact: privacy@garveylennon.ufuk.ie.'],
    ['What we collect', 'Your answers stay in your browser until you book. When you book, we receive your answers, name, phone and email, and use them only to prepare for your meeting.'],
    ['How long we keep it', 'Booking details are deleted after 12 months if you don’t become a client. Client files are kept for at least seven years after the matter ends.'],
    ['Your rights', 'You can ask for a copy, a correction or deletion of your data, and complain to the Data Protection Commission.'],
  ]],
  cookies: ['Cookies', [
    ['What we use', 'One cookie remembers your language. No advertising or tracking cookies.'],
  ]],
  terms: ['Legal notice', [
    ['This website', 'Information here is general and is not legal advice.'],
    ['Regulation', 'Garvey Lennon LLP is authorised by the Legal Services Regulatory Authority under section 125 of the Legal Services Regulation Act 2015. Its solicitors are regulated by the Law Society of Ireland.'],
    ['Personal injury', 'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.'],
  ]],
};

export const LEGAL_ORDER: LegalTab[] = ['privacy', 'cookies', 'terms'];
