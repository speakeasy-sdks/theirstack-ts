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