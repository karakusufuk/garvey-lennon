export type AreaId = 'family' | 'employment' | 'copyright' | 'injury';
export type PersonId = 'siobhan' | 'declan' | 'marta' | 'rafael';

export interface Person {
  id: PersonId;
  name: string;
  first: string;
  role: string;
  areas: AreaId[];
  langs: string[];
  phone: string;
  email: string;
  said: string;
  about: string;
  cases: string[];
  how: string;
  quals: [string, string, string][];
}

export const AREA_NAMES: Record<AreaId, string> = {
  family: 'Family law',
  employment: 'Employment law',
  copyright: 'Copyright',
  injury: 'Personal injury',
};

export const AREA_SLUGS: Record<AreaId, string> = {
  family: '/family-law/',
  employment: '/employment-law/',
  copyright: '/copyright/',
  injury: '/personal-injury/',
};

export const LEADS: Record<AreaId, string> = {
  family: 'Siobhan Garvey',
  employment: 'Declan Lennon, Rafael Souza',
  copyright: 'Marta Kowalska',
  injury: 'Rafael Souza, Declan Lennon',
};

export const PEOPLE: Record<PersonId, Person> = {
  siobhan: {
    id: 'siobhan', name: 'Siobhan Garvey', first: 'Siobhan', role: 'Partner', areas: ['family'], langs: ['English'],
    phone: '01 234 5181', email: 's.garvey@garveylennon.ufuk.ie',
    said: 'Most people who come to me want one thing first: to know what happens to the children.',
    about: 'Siobhan has worked in family law since 2001 and co-founded the firm in 2009. She is an accredited mediator and a collaborative practitioner, and she still goes to court herself when a case needs it.',
    cases: ['Separation and divorce', 'Where children live and time with each parent', 'Cohabitants who never married', 'Guardianship for unmarried fathers', 'Maintenance', 'Domestic violence orders'],
    how: 'Mediation or a collaborative process first, because it is cheaper and usually kinder to the children. If the other side won’t engage, court, with every hearing prepared in person.',
    quals: [['2001', 'Admitted as a solicitor', 'Law Society of Ireland'], ['BCL', 'Bachelor of Civil Law', 'University College Dublin'], ['Dip.', 'Diploma in Family Law', 'Law Society of Ireland'], ['MII', 'Accredited mediator', 'Mediators’ Institute Ireland']],
  },
  declan: {
    id: 'declan', name: 'Declan Lennon', first: 'Declan', role: 'Managing partner', areas: ['employment', 'injury'], langs: ['English'],
    phone: '01 234 5182', email: 'd.lennon@garveylennon.ufuk.ie',
    said: 'The first thing I check is a date. Most employment claims have six months, and people lose them by waiting.',
    about: 'Declan has acted for employees and injured people since 1995. He co-founded the firm in 2009, runs its employment work and supervises every personal injury file.',
    cases: ['Unfair and constructive dismissal', 'Redundancy disputes', 'Bullying, harassment and discrimination', 'Settlement agreements', 'Road traffic and workplace accidents', 'Injuries Resolution Board applications'],
    how: 'An early, straight view of whether your case is strong or weak and what it will cost. Most cases settle; each is prepared as if it will be heard.',
    quals: [['1995', 'Admitted as a solicitor', 'Law Society of Ireland'], ['LLB', 'Bachelor of Laws', 'Trinity College Dublin'], ['Dip.', 'Diploma in Employment Law', 'Law Society of Ireland'], ['ELAI', 'Member', 'Employment Law Association of Ireland']],
  },
  marta: {
    id: 'marta', name: 'Marta Kowalska', first: 'Marta', role: 'Partner', areas: ['copyright'], langs: ['English', 'Polish'],
    phone: '01 234 5183', email: 'm.kowalska@garveylennon.ufuk.ie',
    said: 'Most people find their work somewhere it shouldn’t be. Usually a well-written letter is enough.',
    about: 'Marta qualified as a radca prawny in Warsaw before qualifying as a solicitor in Ireland in 2014. She acts for illustrators, photographers, writers and developers, in English and in Polish.',
    cases: ['Work used without permission', 'Cease-and-desist letters and takedowns', 'Licences and commission contracts', 'Ownership of work made for clients', 'Trade marks', 'Polish-speaking clients'],
    how: 'Originals, the copy and the dates first. Then a letter to the other side. If they refuse, the District, Circuit or High Court, depending on the losses.',
    quals: [['2014', 'Admitted as a solicitor', 'Law Society of Ireland'], ['r.pr.', 'Radca prawny', 'Warsaw Bar of Legal Advisers'], ['Dip.', 'Diploma in Technology and IP Law', 'Law Society of Ireland'], ['Cert.', 'Certificate in Trade Mark Law', 'Law Society of Ireland']],
  },
  rafael: {
    id: 'rafael', name: 'Rafael Souza', first: 'Rafael', role: 'Associate solicitor', areas: ['injury', 'employment'], langs: ['English', 'Portuguese'],
    phone: '01 234 5184', email: 'r.souza@garveylennon.ufuk.ie',
    said: 'I explain each step in Portuguese, then put it in writing in English.',
    about: 'Rafael practised as an advogado in São Paulo, then sat the FE-1 exams and qualified in Ireland in 2022. He works on personal injury and employment files with Declan.',
    cases: ['Road traffic accidents', 'Accidents at work', 'Injuries Resolution Board applications', 'Unpaid wages', 'Dismissal of permit holders', 'Portuguese-speaking clients'],
    how: 'Medical reports, photos and witness details collected early, because the two-year limit runs from the day of the accident.',
    quals: [['2022', 'Admitted as a solicitor', 'Law Society of Ireland'], ['LL.B.', 'Bacharel em Direito', 'University of São Paulo'], ['PPC', 'Professional Practice Course', 'Law Society of Ireland'], ['OAB', 'Formerly advogado', 'Ordem dos Advogados do Brasil']],
  },
};

export const PEOPLE_ORDER: PersonId[] = ['siobhan', 'declan', 'marta', 'rafael'];

export const TABS: [string, string][] = [['about', 'About'], ['cases', 'Cases I often see'], ['how', 'How I work'], ['quals', 'Qualifications']];
