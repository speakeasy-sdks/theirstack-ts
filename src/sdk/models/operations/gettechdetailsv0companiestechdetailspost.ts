/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Format of the response. One of `json` or `csv`. Defaults to `json`.
 */
export enum GetTechDetailsV0CompaniesTechDetailsPostFormatFormatEnum {
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
export enum GetTechDetailsV0CompaniesTechDetailsPostNewCompaniesNewCompaniesEnum {
  True = "true",
  False = "false",
  All = "all",
}

/**
 * Order the results by some of these fields
 */
export enum GetTechDetailsV0CompaniesTechDetailsPostOrderByOrderByEnum1 {
  Jobs = "jobs",
  JobsLast7Days = "jobs_last_7_days",
  JobsLast30Days = "jobs_last_30_days",
  JobsLast180Days = "jobs_last_180_days",
  LastDateFound = "last_date_found",
  FirstDateFound = "first_date_found",
  RelativeOccurrenceWithinCategory = "relative_occurrence_within_category",
  TheirstackScore = "theirstack_score",
}

/**
 * Order the results by some of these fields
 */
export enum GetTechDetailsV0CompaniesTechDetailsPostOrderByOrderByEnum {
  Null = "null",
}

/**
 * Order direction
 */
export enum GetTechDetailsV0CompaniesTechDetailsPostOrderDirectionOrderDirectionEnum {
  Asc = "asc",
  Desc = "desc",
}

export class GetTechDetailsV0CompaniesTechDetailsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bodyGetTechDetailsV0CompaniesTechDetailsPost?: shared.BodyGetTechDetailsV0CompaniesTechDetailsPost;

  /**
   * List of categories
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=categories",
  })
  categories?: string[];

  /**
   * Case-insensitive patterns to match in the company description. Will return companies that match any of the patterns.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=company_description_patterns_exclude",
  })
  companyDescriptionPatternsExclude?: string[];

  /**
   * Case-insensitive patterns to match in the company description. Will return companies that match any of the patterns.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=company_description_patterns_or",
  })
  companyDescriptionPatternsOr?: string[];

  /**
   * Array of countries, or string with comma-separated country names where the company HQ belongs to. Case-sensitive
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=countries",
  })
  countries?: string[];

  /**
   * Format of the response. One of `json` or `csv`. Defaults to `json`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=format",
  })
  format?: GetTechDetailsV0CompaniesTechDetailsPostFormatFormatEnum;

  /**
   * Funding stages of companies returned. One of the values in the round column of https://docs.google.com/spreadsheets/d/1ybzFfmYH6q_sEux2Jq05ciqVsmIE-6FOpMK5mxJGmIU/edit#gid=472436935
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=funding_stages",
  })
  fundingStages?: string[];

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

  /**
   * Return companies that match any of these keywords
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=keywords_or",
  })
  keywordsOr?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * Maximum number of employees in a company
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_employee_count",
  })
  maxEmployeeCount?: number;

  /**
   * Maximum company funding, in USD
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_funding_usd",
  })
  maxFundingUsd?: number;

  /**
   * The rank measures how common is a technology within its category. The technology most used among similar ones by a company will have a rank of 1, the second: 2, etc. This is useful to filter results by technology and get only results for the primary technology.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_rank",
  })
  maxRank?: number;

  /**
   * Maximum company revenue, in USD
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_revenue_usd",
  })
  maxRevenueUsd?: number;

  /**
   * Minimum number of employees in a company
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_employee_count",
  })
  minEmployeeCount?: number;

  /**
   * Minimum company funding, in USD
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_funding_usd",
  })
  minFundingUsd?: number;

  /**
   * Minimum number of jobs found by each company using a technology
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_jobs",
  })
  minJobs?: number;

  /**
   * Minimum value of relative_occurrence_within_category for each technology. Higher values increase the probability that this technology is actually used by the company, because it means a higher percentage of mentions to technologies among this category are of this technology.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_relative_occurrence",
  })
  minRelativeOccurrence?: number;

  /**
   * Minimum company revenue, in USD
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_revenue_usd",
  })
  minRevenueUsd?: number;

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
  newCompanies?: GetTechDetailsV0CompaniesTechDetailsPostNewCompaniesNewCompaniesEnum;

  /**
   * Only return YC companies
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=only_yc_companies",
  })
  onlyYcCompanies?: boolean;

  /**
   * Order the results by some of these fields
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=order_by",
  })
  orderBy?: any;

  /**
   * Order direction
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=order_direction",
  })
  orderDirection?: GetTechDetailsV0CompaniesTechDetailsPostOrderDirectionOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=show_total_results",
  })
  showTotalResults?: boolean;

  /**
   * List of technologies
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=technologies",
  })
  technologies?: string[];

  /**
   * Array or comma-separated string containing technology names. If included, results won't contain companies that mention any of these technologies in their jobs.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=technologies_names_exclude",
  })
  technologiesNamesExclude?: string[];
}

export class GetTechDetailsV0CompaniesTechDetailsPostResponse extends SpeakeasyBase {
  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  companyTechDetailsResponse?: shared.CompanyTechDetailsResponse;

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