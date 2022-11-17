import { expect, test } from 'vitest';
import { IPInfoFetcher } from '../src';

async function goodRequest() {
  const ipInfo = new IPInfoFetcher();

  const data = await ipInfo.getGeo('8.8.8.8');

  return data.country;
}

test('Good request', async () => {
  expect(goodRequest()).resolves.toStrictEqual('United States');
});

test('Bad request', async () => {
  const ipInfo = new IPInfoFetcher('http://bad.url');

  expect(ipInfo.getInfo()).rejects.toThrowError();
});
