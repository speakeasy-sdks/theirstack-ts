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