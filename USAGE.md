<!-- Start SDK Example Usage -->
```typescript
import {
  SearchCompaniesRequest,
  SearchCompaniesResponse
} from "@speakeasy-sdks/theirstack/dist/sdk/models/operations";
import {
  CompanyOrderByEnum,
  NewCompaniesEnum,
  ResponseFormatEnum,
} from "@speakeasy-sdks/theirstack/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "@speakeasy-sdks/theirstack";
const sdk = new SDK({
  security: {
    apiKeyCookie: "YOUR_API_KEY_HERE",
  },
});

const req: SearchCompaniesRequest = {
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
  format: ResponseFormatEnum.Json,
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
  newCompanies: NewCompaniesEnum.False,
  orderBy: CompanyOrderByEnum.TotalFundingUsd,
  page: 925597,
};

sdk.companies.search(req).then((res: SearchCompaniesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->