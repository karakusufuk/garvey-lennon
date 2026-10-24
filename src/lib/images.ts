// Server-side image registry. Keeps image imports out of the client-safe data modules.
import type { ImageMetadata } from 'astro';
import type { PersonId, AreaId } from '../data/people';
import { MEMBERSHIPS_PHOTO, MEMBERSHIPS_FALLBACK } from '../data/site';

import siobhanCard from '../assets/siobhan-card-4x5.jpg';
import declanCard from '../assets/declan-card-4x5.jpg';
import martaCard from '../assets/marta-card-4x5.jpg';
import rafaelCard from '../assets/rafael-card-4x5.jpg';
import siobhanProfile from '../assets/siobhan-profile-3x2.jpg';
import declanProfile from '../assets/declan-profile-3x2.jpg';
import martaProfile from '../assets/marta-profile-3x2.jpg';
import rafaelProfile from '../assets/rafael-profile-3x2.jpg';
import bannerFamily21 from '../assets/banner-family-21x9.jpg';
import bannerEmployment21 from '../assets/banner-employment-21x9.jpg';
import bannerCopyright21 from '../assets/banner-copyright-21x9.jpg';
import bannerInjury21 from '../assets/banner-injury-21x9.jpg';
import bannerFamily32 from '../assets/banner-family-3x2.jpg';
import bannerEmployment32 from '../assets/banner-employment-3x2.jpg';
import bannerCopyright32 from '../assets/banner-copyright-3x2.jpg';
import bannerInjury32 from '../assets/banner-injury-3x2.jpg';
import fourCourts from '../assets/four-courts-3x2.jpg';
import door169 from '../assets/door-16x9.jpg';
import door32 from '../assets/door-3x2.jpg';
import team from '../assets/team-3x2.jpg';

export const CARD: Record<PersonId, ImageMetadata> = { siobhan: siobhanCard, declan: declanCard, marta: martaCard, rafael: rafaelCard };
export const PROFILE: Record<PersonId, ImageMetadata> = { siobhan: siobhanProfile, declan: declanProfile, marta: martaProfile, rafael: rafaelProfile };
export const BANNER21: Record<AreaId, ImageMetadata> = { family: bannerFamily21, employment: bannerEmployment21, copyright: bannerCopyright21, injury: bannerInjury21 };
export const BANNER32: Record<AreaId, ImageMetadata> = { family: bannerFamily32, employment: bannerEmployment32, copyright: bannerCopyright32, injury: bannerInjury32 };
export const FOUR_COURTS = fourCourts;
export const DOOR_16x9 = door169;
export const DOOR_3x2 = door32;
export const TEAM = team;

// Memberships photo: the configured file if it exists in src/assets, otherwise the team photo. Never an empty box.
const all = import.meta.glob<{ default: ImageMetadata }>('../assets/*.jpg', { eager: true });
const pick = (name: string) => all[`../assets/${name}`]?.default;
export const MEMBERSHIPS_IMG: ImageMetadata = pick(MEMBERSHIPS_PHOTO) ?? pick(MEMBERSHIPS_FALLBACK) ?? team;
export const MEMBERSHIPS_IS_FALLBACK = !pick(MEMBERSHIPS_PHOTO);
