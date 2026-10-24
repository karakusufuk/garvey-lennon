import type { AreaId, PersonId } from './people';

export interface Insight { id?: string; area: AreaId; who: PersonId; t: string; x: string; d: string; href?: string }

// The four articles on the home reader (board: INS). Only the first has a full page.
export const INS: Insight[] = [
  { id: 'article', href: '/insights/not-married-what-are-my-rights/', area: 'family', who: 'siobhan', t: 'Not married. What are my rights?', x: 'In Ireland, couples who live together without marrying are called cohabitants. The law gives you some protection, but much less than marriage, and very little of it is automatic. You may be a qualified cohabitant after two years together with a child, or five without. A dependent partner can then ask the court for maintenance, a pension share or a property order, within two years of the relationship ending.', d: '6 Oct 2026' },
  { area: 'employment', who: 'declan', t: 'Dismissed? The six-month limit.', x: 'A complaint of unfair dismissal goes to the Workplace Relations Commission within six months of your last day. The adjudicator can extend that to twelve months, but only if you show reasonable cause for the delay, and not knowing the rule is rarely enough. Count from the date your employment ended, not the date you were told.', d: '22 Sep 2026' },
  { area: 'copyright', who: 'marta', t: 'Someone copied my work. What now?', x: 'Copyright in Ireland exists from the moment you make the work; there is nothing to register. Before you contact anyone, keep your original files exactly as they are, take dated screenshots of where the copy appears and note any sales. A clear letter settles most cases. Posting about it publicly first usually makes that harder.', d: '14 Aug 2026' },
  { area: 'injury', who: 'rafael', t: 'After an accident: the first month.', x: 'You have two years from the accident, or from when you knew you were injured, to start a claim. Almost every claim must first go to the Injuries Resolution Board. In the first weeks, see a doctor, keep every receipt, photograph the place and the injury, and write down the names of anyone who saw what happened.', d: '30 Jul 2026' },
];

// Two more titles that only appear in the Insights list page (board: ALLINS).
export const ALLINS: Insight[] = INS.concat([
  { area: 'family', who: 'siobhan', t: 'Separating with children', x: 'Guardianship, custody and access, in the words the court uses.', d: '1 Sep 2026' },
  { area: 'employment', who: 'rafael', t: 'Redundancy: is my payment right?', x: 'Statutory redundancy, how it is worked out, and what to check.', d: '18 Jun 2026' },
]);

export const INSIGHT_FILTERS: [string, string][] = [['all', 'All'], ['family', 'Family'], ['employment', 'Employment'], ['copyright', 'Copyright'], ['injury', 'Personal injury']];

// Board: short() — first sentence after ~80 chars, used in the list page.
export function short(x: string): string { const i = x.indexOf('.', 80); return i > 0 && i < 200 ? x.slice(0, i + 1) : x; }

// The written summary (home "how we work" paper): headings and the explanation shown on the right.
export const HOW: [string, string][] = [
  ['What you told us', 'Your situation in our words, so you can check we understood it. Correct anything that’s wrong.'],
  ['Your options', 'Every realistic route, from doing nothing to going to court, and what each involves.'],
  ['What we recommend', 'The route we would take in your position, and why.'],
  ['Estimated cost', 'Our fees and likely outlays for that route, as your Section 150 notice requires.'],
  ['Deadlines and next steps', 'Any time limit that applies to you, and what has to happen before it.'],
];
// Placeholder line widths (percent) under each heading on the paper.
export const HOW_LINES: number[][] = [[96, 88, 60], [92, 97, 74], [90, 52], [84, 40], [94, 66]];
