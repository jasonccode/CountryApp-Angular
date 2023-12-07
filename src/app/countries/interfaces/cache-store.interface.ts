import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCuntries;
  byCountries: TermCuntries;
  byRegion: RegionCountries;
}

export interface TermCuntries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
