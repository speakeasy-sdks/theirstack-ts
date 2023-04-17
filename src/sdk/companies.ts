/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations with companies
 */
export class Companies {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Bulk Enrich/Prospect With Detailed Technologies (Technology Matrix)
   *
   * @remarks
   * Shows a matrix of companies and the technologies they use, grouped by technology categories.
   *
   * Lets you search companies by their names, domains, technologies they user, countries and employee sizes.
   *
   * Technology categories are shown as additional columns if `format` is `csv`, and as additional fields for each object in `data` if `format` is `json`.
   */
  bulkEnrich(
    req: operations.BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v0/companies/technology_matrix";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bodyBulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPost",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse =
        new operations.BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyMatrixResponse = utils.objectToClass(
              httpRes?.data,
              shared.CompanyMatrixResponse
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpValidationError = utils.objectToClass(
              httpRes?.data,
              shared.HTTPValidationError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Enrich Companies
   *
   * @remarks
   * Get enriched data for a list of companies given their domains, full URLs or emails from those companies.
   *
   * Calls to this endpoint cost you credits if you hadn't fetched the companies returned before.
   */
  enrich(
    req: operations.EnrichCompaniesV0CompaniesSearchByUrlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnrichCompaniesV0CompaniesSearchByUrlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnrichCompaniesV0CompaniesSearchByUrlGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v0/companies/search_by_url";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.EnrichCompaniesV0CompaniesSearchByUrlGetResponse =
        new operations.EnrichCompaniesV0CompaniesSearchByUrlGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyWithTechnologies = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.companyWithTechnologies = utils.objectToClass(
              httpRes?.data,
              shared.CompanyWithTechnologies,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpValidationError = utils.objectToClass(
              httpRes?.data,
              shared.HTTPValidationError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Bulk Enrich Companies
   *
   * @remarks
   * Get enriched data for a list of companies given their domains, full URLs or emails from those companies.
   *
   * Calls to this endpoint cost you credits if you hadn't fetched the companies returned before.
   */
  enrich(
    req: operations.BulkEnrichCompaniesV0CompaniesBulkEnrichPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BulkEnrichCompaniesV0CompaniesBulkEnrichPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BulkEnrichCompaniesV0CompaniesBulkEnrichPostRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v0/companies/bulk_enrich";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bodyBulkEnrichCompaniesV0CompaniesBulkEnrichPost",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.BulkEnrichCompaniesV0CompaniesBulkEnrichPostResponse =
        new operations.BulkEnrichCompaniesV0CompaniesBulkEnrichPostResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyWithTechnologies = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.companyWithTechnologies = utils.objectToClass(
              httpRes?.data,
              shared.CompanyWithTechnologies,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpValidationError = utils.objectToClass(
              httpRes?.data,
              shared.HTTPValidationError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Tech Details
   *
   * @remarks
   * List all the technologies used by companies, with quantitative details for each technology, for one or many companies at once, such as how many jobs were found from each technology and company in the last 180/30/7 days.
   *
   * This endpoint enables account-based marketing strategies. For example, you can find all the companies that use a specific technology, and then find out how many jobs they have posted in the last 30 days. You can then use this information to target them with a marketing campaign.
   */
  get(
    req: operations.GetTechDetailsV0CompaniesTechDetailsPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTechDetailsV0CompaniesTechDetailsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTechDetailsV0CompaniesTechDetailsPostRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string =
      baseURL.replace(/\/$/, "") + "/v0/companies/tech_details";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "bodyGetTechDetailsV0CompaniesTechDetailsPost",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetTechDetailsV0CompaniesTechDetailsPostResponse =
        new operations.GetTechDetailsV0CompaniesTechDetailsPostResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companyTechDetailsResponse = utils.objectToClass(
              httpRes?.data,
              shared.CompanyTechDetailsResponse
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpValidationError = utils.objectToClass(
              httpRes?.data,
              shared.HTTPValidationError
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Search Companies
   *
   * @remarks
   * Search companies by industries, employee counts, technologies, open positions and more. This endpoint also lets you filter companies by the jobs they're hiring, filtering by job title, a pattern matched by job descriptions, the technologies mentioned in the jobs, and pass a `fromage` parameter to get only companies whose jobs were posted in the last X days.
   *
   * Calls to this endpoint cost you credits. 1 new company returned = 1 credit. Getting data from companies already fetched doesn't cost you credits.
   *
   * Additionally, you can search by the max/min of people per department. To do so, pass extra parameters with the shape `<min/max>_<department>_headcount=<value>`. For example, `min_engineering_headcount=10` will return companies with at least 10 people in the engineering department. The accepted values for `department` are:
   *     - *`sales`*
   *     - *`marketing`*
   *     - *`media_and_commmunication`*
   *     - *`business_development`*
   *     - *`accounting`*
   *     - *`operations`*
   *     - *`finance`*
   *     - *`human_resources`*
   *     - *`information_technology`*
   *     - *`legal`*
   *     - *`engineering`*
   *     - *`product_management`*
   *     - *`consulting`*
   *     - *`education`*
   *     - *`administrative`*
   *     - *`arts_and_design`*
   *     - *`entrepreneurship`*
   *     - *`support`*
   *     - *`data_science`*
   */
  search(
    req: operations.SearchCompaniesV0CompaniesSearchGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCompaniesV0CompaniesSearchGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCompaniesV0CompaniesSearchGetRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v0/companies/search";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.SearchCompaniesV0CompaniesSearchGetResponse =
        new operations.SearchCompaniesV0CompaniesSearchGetResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.companiesResponse = utils.objectToClass(
              httpRes?.data,
              shared.CompaniesResponse
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.httpValidationError = utils.objectToClass(
              httpRes?.data,
              shared.HTTPValidationError
            );
          }
          break;
      }

      return res;
    });
  }
}
