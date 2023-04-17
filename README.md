# @speakeasy-sdks/theirstack

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

