import type { AreaId, PersonId } from './people';

export interface Area {
  id: AreaId;
  slug: string;
  title: string;
  line: string;
  team: PersonId[];
  handle: [string, string][];
  qa: [string, string][];
  alert?: string;      // plain text, may contain a leading <b>…</b>
}

export const AREAS: Record<AreaId, Area> = {
  family: {
    id: 'family', slug: '/family-law/', title: 'Family law', line: 'Separating? We start with what happens to the children.', team: ['siobhan'],
    handle: [['Separation and divorce', 'The family home, pensions, the agreement'], ['Children', 'Where they live and time with each parent'], ['Cohabitants', 'Rights when you never married'], ['Guardianship', 'For unmarried fathers and grandparents'], ['Maintenance', 'Setting it, enforcing it, changing it'], ['Safety orders', 'Barring, safety and protection orders']],
    qa: [['How long before a divorce?', 'You must have lived apart for two of the previous three years. A judicial separation can be sought after one year apart.'], ['Do we have to go to court?', 'Not always. Many couples agree terms through mediation, which the Legal Aid Board offers free, and have the court approve them.'], ['Who decides where the children live?', 'If you can’t agree, the court does, and the only test is the children’s best interests.']],
    alert: '<b>If you or your children are in danger now,</b> call 999 or 112. For a protection order today, phone 01 234 5180 and say it is urgent.',
  },
  employment: {
    id: 'employment', slug: '/employment-law/', title: 'Employment law', line: 'Dismissed? The clock started on your last day.', team: ['declan', 'rafael'],
    handle: [['Unfair dismissal', 'Claims to the Workplace Relations Commission'], ['Constructive dismissal', 'When you resigned because you had to'], ['Redundancy', 'Was it genuine, and was it paid right?'], ['Discrimination', 'The nine grounds in the Equality Acts'], ['Bullying and harassment', 'Grievances, investigations, claims'], ['Settlement agreements', 'Reviewed before you sign']],
    qa: [['How long do I have?', 'Six months from your last day to bring a claim to the WRC. It can be extended to twelve only for reasonable cause.'], ['Do I need a year’s service?', 'For unfair dismissal, usually yes. Not for discrimination, whistleblowing or pregnancy-related dismissal.'], ['I signed something on my last day.', 'Bring it with you. What it says and how it was presented both matter.']],
  },
  copyright: {
    id: 'copyright', slug: '/copyright/', title: 'Copyright', line: 'Your work, used without asking. What to do first.', team: ['marta'],
    handle: [['Infringement', 'Your work used online, in print or on products'], ['Letters and takedowns', 'Cease-and-desist and platform notices'], ['Licences', 'Commission contracts for freelancers'], ['Ownership', 'Work for clients, employers, collaborators'], ['Trade marks', 'Registration and disputes'], ['Software and design', 'Code, interface and design rights']],
    qa: [['Do I need to register copyright?', 'No. In Ireland it exists from the moment you make the work, and usually lasts 70 years after the author’s death.'], ['How do I prove it’s mine?', 'Original files with dates, drafts, sketches and earlier posts. Keep them exactly as they are.'], ['Should I post about it publicly?', 'Not yet. A public accusation can make a settlement harder.']],
  },
  injury: {
    id: 'injury', slug: '/personal-injury/', title: 'Personal injury', line: 'After an accident: the time limit, the first step, the papers to keep.', team: ['rafael', 'declan'],
    handle: [['Road traffic accidents', 'Drivers, passengers, cyclists, pedestrians'], ['Accidents at work', 'Warehouses, building sites, offices'], ['Public places', 'Shops, footpaths and public buildings'], ['Injuries Resolution Board', 'Your application and the assessment'], ['Medical evidence', 'Reports and keeping records'], ['Court proceedings', 'When an assessment is rejected']],
    qa: [['How long do I have?', 'Two years from the accident, or from when you knew you were injured.'], ['What is the first step?', 'Almost every claim must go to the Injuries Resolution Board before court. Amounts follow the Personal Injuries Guidelines.'], ['What if I was partly at fault?', 'You may still have a claim, reduced by your share of the fault.']],
    alert: 'In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.',
  },
};

export const AREA_ORDER: AreaId[] = ['family', 'employment', 'copyright', 'injury'];
