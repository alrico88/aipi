[aipi](../README.md) / [Exports](../modules.md) / IPInfoFetcher

# Class: IPInfoFetcher

## Table of contents

### Constructors

- [constructor](IPInfoFetcher.md#constructor)

### Properties

- [instanceUrl](IPInfoFetcher.md#instanceurl)

### Methods

- [getGeo](IPInfoFetcher.md#getgeo)
- [getInfo](IPInfoFetcher.md#getinfo)

## Constructors

### constructor

• **new IPInfoFetcher**(`instanceUrl?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `instanceUrl` | `string` | `'https://ifconfig.co/json'` |

#### Defined in

[index.ts:13](https://github.com/alrico88/aipi/blob/master/src/index.ts#L13)

## Properties

### instanceUrl

• **instanceUrl**: `string`

#### Defined in

[index.ts:6](https://github.com/alrico88/aipi/blob/master/src/index.ts#L6)

## Methods

### getGeo

▸ **getGeo**(`ip?`): `Promise`<[`GeoInfo`](../interfaces/GeoInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip?` | `string` |

#### Returns

`Promise`<[`GeoInfo`](../interfaces/GeoInfo.md)\>

#### Defined in

[index.ts:43](https://github.com/alrico88/aipi/blob/master/src/index.ts#L43)

___

### getInfo

▸ **getInfo**(`ip?`): `Promise`<[`IPInfo`](../interfaces/IPInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ip?` | `string` |

#### Returns

`Promise`<[`IPInfo`](../interfaces/IPInfo.md)\>

#### Defined in

[index.ts:25](https://github.com/alrico88/aipi/blob/master/src/index.ts#L25)
