/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Format of the response. One of `json` or `csv`. Defaults to `json`.
 */
export enum BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostFormatFormatEnum {
  Json = "json",
  Csv = "csv",
}

/**
 * If `true`, only companies that haven't been fetched by the user will be returned. Credits will be consumed.
 *
 * @remarks
 *
 * If `false`, only companies that have been fetched by the user will be returned. In this case, your call won't consume credits.
 *
 * If `all`, both new and fetched companies may be returned.
 *
 * Defaults to `all`
 */
export enum BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostNewCompaniesNewCompaniesEnum {
  True = "true",
  False = "false",
  All = "all",
}

/**
 * Order by field. Descending
 */
export enum BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderByOrderByEnum {
  EmployeeCount = "employee_count",
  NumJobs = "num_jobs",
  Name = "name",
  Unknown = "",
}

/**
 * Order the categories by name, or putting the ones with the least null values first
 */
export enum BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderCategoriesByOrderCategoriesByEnum {
  PercentageNonNulls = "percentage_non_nulls",
  Name = "name",
}

export class BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bodyBulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPost?: shared.BodyBulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPost;

  /**
   * Show only technologies that belong to this categories. Comma-separated list. Example: "data, queue, storage".
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=categories",
  })
  categories?: string[];

  /**
   * Separator for cells in the matrix
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cell_separator",
  })
  cellSeparator?: string;

  /**
   * Array of countries, or string with comma-separated country names where the company HQ belongs to. Case-sensitive
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=countries",
  })
  countries?: string[];

  /**
   * Don't return more than 2 companies with different names but associated to the same domain
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=distinct_urls",
  })
  distinctUrls?: boolean;

  /**
   * Exclude companies using at least one technology that matches this regex pattern. Pass a comma-separated list of regex patterns, like `snowflake, big.?query`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=exclude_technologies",
  })
  excludeTechnologies?: string;

  /**
   * Format of the response. One of `json` or `csv`. Defaults to `json`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=format",
  })
  format?: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostFormatFormatEnum;

  /**
   * Comma-separated names of technologies. Case insensitive
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include_technologies_any",
  })
  includeTechnologiesAny?: string;

  /**
   * Comma-separated names of technologies. Case insensitive. If passed, the result will include companies that use any of the technologies specified in `include_technologies_any` AND any of the technologies specified in `include_technologies_any_second_set`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=include_technologies_any_second_set",
  })
  includeTechnologiesAnySecondSet?: string;

  /**
   * Array or comma-separated string with industries, lowercase. Results will only include companies that belong to any of the industries specified in this parameter. Available values: https://docs.google.com/spreadsheets/d/1ybzFfmYH6q_sEux2Jq05ciqVsmIE-6FOpMK5mxJGmIU/edit?usp=sharing
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=industries",
  })
  industries?: string[];

  /**
   * Array or comma-separated string with industries, lowercase. Results will exclude companies that belong to any of the industries specified in this parameter. Available values: https://docs.google.com/spreadsheets/d/1ybzFfmYH6q_sEux2Jq05ciqVsmIE-6FOpMK5mxJGmIU/edit?usp=sharing
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=industries_exclude",
  })
  industriesExclude?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_employee_count",
  })
  maxEmployeeCount?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_employee_count",
  })
  minEmployeeCount?: number;

  /**
   * If `true`, only companies that haven't been fetched by the user will be returned. Credits will be consumed.
   *
   * @remarks
   *
   * If `false`, only companies that have been fetched by the user will be returned. In this case, your call won't consume credits.
   *
   * If `all`, both new and fetched companies may be returned.
   *
   * Defaults to `all`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=new_companies",
  })
  newCompanies?: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostNewCompaniesNewCompaniesEnum;

  /**
   * Only return YC companies
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=only_yc_companies",
  })
  onlyYcCompanies?: boolean;

  /**
   * Order by field. Descending
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=order_by",
  })
  orderBy?: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderByOrderByEnum;

  /**
   * Order the categories by name, or putting the ones with the least null values first
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=order_categories_by",
  })
  orderCategoriesBy?: BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostOrderCategoriesByOrderCategoriesByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * Show the the numer of jobs where each company has mentioned each technology. If set to False, you'll only get technology names, without the job counts.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=show_jobs",
  })
  showJobs?: boolean;

  /**
   * Array or comma-separated string containing technology names.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=technologies_names",
  })
  technologiesNames?: string[];

  /**
   * Array or comma-separated string containing technology names. If included, results won't contain companies that mention any of these technologies in their jobs.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=technologies_names_exclude",
  })
  technologiesNamesExclude?: string[];

  /**
   * Array or comma-separated string containing technology names.If included, results will contain companies using any of the technologies specified in `technologies_names` AND any of the technologies specified in `technologies_names_second_set`
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=technologies_names_second_set",
  })
  technologiesNamesSecondSet?: string[];
}

export class BulkEnrichProspectWithDetailedTechnologiesTechnologyMatrixV0CompaniesTechnologyMatrixPostResponse extends SpeakeasyBase {
  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  companyMatrixResponse?: shared.CompanyMatrixResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
