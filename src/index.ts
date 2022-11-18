import axios from 'axios';
import { GeoInfo } from './interfaces/GeoInfo';
import { IPInfo } from './interfaces/IpInfo';

export class IPInfoFetcher {
  public instanceUrl: string;

  /**
   * Creates an instance of IPInfoFetcher.
   * @param {string} [instanceUrl='https://ifconfig.co/json'] echoip instance URL
   * @memberof IPInfoFetcher
   */
  public constructor(instanceUrl = 'https://ifconfig.co/json') {
    this.instanceUrl = instanceUrl;
  }

  /**
   * Get info for an IP
   * If no IP is provided, the current IP will be looked up
   *
   * @param {string} [ip] Optional: Custom IP to look up
   * @return {Promise<IPInfo>}
   * @memberof IPInfoFetcher
   */
  public async getInfo(ip?: string): Promise<IPInfo> {
    const { data } = await axios.get<IPInfo>(this.instanceUrl, {
      params: {
        ip,
      },
    });

    return data;
  }

  /**
   * Get geographical info for an IP
   * Provides almost the same data as geoip-lite
   *
   * @param {string} [ip] Optional: Custom IP to look up
   * @return {Promise<GeoInfo>}
   * @memberof IPInfoFetcher
   */
  public async getGeo(ip?: string): Promise<GeoInfo> {
    const ipInfo = await this.getInfo(ip);

    return {
      country: ipInfo.country,
      region: ipInfo.region_name,
      eu: ipInfo.country_eu,
      timezone: ipInfo.time_zone,
      city: ipInfo.city,
      ll: [ipInfo.longitude, ipInfo.latitude],
    };
  }
}
