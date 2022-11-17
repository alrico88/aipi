import { UserAgent } from './UserAgent';

export interface IPInfo {
  ip: string;
  ip_decimal: number;
  country: string;
  country_iso: string;
  country_eu: boolean;
  region_name: string;
  region_code: string;
  zip_code: string;
  city: string;
  latitude: number;
  longitude: number;
  time_zone: string;
  asn: string;
  asn_org: string;
  user_agent: UserAgent;
  hostname?: string;
}
