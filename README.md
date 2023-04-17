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
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostRequest,
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse,
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostFormatFormatEnum,
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostNewCompaniesNewCompaniesEnum,
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderByOrderByEnum,
  BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderCategoriesByOrderCategoriesByEnum,
} from "@speakeasy-sdks/theirstack/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "@speakeasy-sdks/theirstack";
const sdk = new SDK({
  security: {
    apiKeyCookie: "YOUR_API_KEY_HERE",
  },
});

const req: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostRequest = {
  bodyBulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPost: {
    companies: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    companiesFuzzy: [
      "nulla",
      "corrupti",
      "illum",
    ],
    companiesUrls: [
      "error",
      "deserunt",
    ],
  },
  categories: [
    "iure",
    "magnam",
  ],
  cellSeparator: "debitis",
  countries: [
    "delectus",
  ],
  distinctUrls: false,
  excludeTechnologies: "tempora",
  format: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostFormatFormatEnum.Json,
  includeTechnologiesAny: "molestiae",
  includeTechnologiesAnySecondSet: "minus",
  industries: [
    "voluptatum",
    "iusto",
    "excepturi",
    "nisi",
  ],
  industriesExclude: [
    "temporibus",
    "ab",
    "quis",
    "veritatis",
  ],
  limit: 648172,
  maxEmployeeCount: 20218,
  minEmployeeCount: 368241,
  newCompanies: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostNewCompaniesNewCompaniesEnum.All,
  onlyYcCompanies: false,
  orderBy: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderByOrderByEnum.Unknown,
  orderCategoriesBy: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderCategoriesByOrderCategoriesByEnum.Name,
  page: 140350,
  showJobs: false,
  technologiesNames: [
    "at",
    "maiores",
    "molestiae",
    "quod",
  ],
  technologiesNamesExclude: [
    "esse",
    "totam",
    "porro",
    "dolorum",
  ],
  technologiesNamesSecondSet: [
    "nam",
  ],
};

sdk.companies.bulkEnrich(req).then((res: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### companies

* `bulkEnrich` - Bulk Enrich/Prospect With Detailed Technologies (Technology Matrix)
* `bulkEnrich` - Bulk Enrich Companies
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

