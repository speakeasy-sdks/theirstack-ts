<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/227311185-62d5759f-743c-488b-8b97-09eae1dac881.png" media="(prefers-color-scheme: dark)" width="100">
        <img src="https://user-images.githubusercontent.com/6267663/227311185-62d5759f-743c-488b-8b97-09eae1dac881.png" width="100">
    </picture>
    <h1>TheirStack Typescript SDK</h1>
   <p>Find companies that need your product</p>
   <a href="https://api.theirstack.com/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/theirstack-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/theirstack-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/theirstack-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/theirstack-ts?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-sdks/theirstack
```

### Yarn

```bash
yarn add @speakeasy-sdks/theirstack
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  SearchCompaniesV0CompaniesSearchGetRequest,
  SearchCompaniesV0CompaniesSearchGetResponse,
  SearchCompaniesV0CompaniesSearchGetFormatFormatEnum,
  SearchCompaniesV0CompaniesSearchGetNewCompaniesNewCompaniesEnum,
  SearchCompaniesV0CompaniesSearchGetOrderByOrderByEnum,
} from "@speakeasy-sdks/theirstack/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "@speakeasy-sdks/theirstack";
const sdk = new SDK({
  security: {
    apiKeyCookie: "YOUR_API_KEY_HERE",
  },
});

const req: SearchCompaniesV0CompaniesSearchGetRequest = {
  companies: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  countries: [
    "nulla",
    "corrupti",
    "illum",
  ],
  distinctUrls: false,
  excludeCitiesPattern: "vel",
  excludeCompaniesPattern: "error",
  excludeIndustriesPattern: "deserunt",
  excludeTechnologies: "suscipit",
  extra: false,
  format: SearchCompaniesV0CompaniesSearchGetFormatFormatEnum.Json,
  fromage: 297534,
  includeCitiesPattern: "debitis",
  includeDescription: false,
  includeIndustriesPattern: "ipsa",
  includeTechnologiesAny: "delectus",
  includeTechnologiesAnySecondSet: "tempora",
  jobDescriptionPattern: "suscipit",
  jobDescriptionPatternIsCaseInsensitive: false,
  jobTitlePattern: "molestiae",
  limit: 791725,
  maxEmployeeCount: 812169,
  minEmployeeCount: 528895,
  minJobs: 479977,
  newCompanies: SearchCompaniesV0CompaniesSearchGetNewCompaniesNewCompaniesEnum.False,
  orderBy: SearchCompaniesV0CompaniesSearchGetOrderByOrderByEnum.TotalFundingUsd,
  page: 925597,
};

sdk.companies.search(req).then((res: SearchCompaniesV0CompaniesSearchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### companies

* `bulkEnrich` - Bulk Enrich Companies
* `bulkEnrichWithMatrix` - Bulk Enrich/Prospect With Detailed Technologies (Technology Matrix)
* `enrich` - Enrich Companies
* `get` - Get Tech Details
* `search` - Search Companies

### decisionMakers

* `search` - Search Decision Makers

### jobs

* `search` - Search Jobs

### technologies

* `get` - Get Technologies

### users

* `me` - Current User Details
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

