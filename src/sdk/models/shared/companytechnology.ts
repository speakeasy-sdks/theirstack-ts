/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Company object
 */
export class CompanyTechnologyCompanyWithTechnologyNames extends SpeakeasyBase {
  /**
   * Alexa ranking
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alexa_ranking" })
  alexaRanking?: number;

  /**
   * Annual revenue of the company in USD
   */
  @SpeakeasyMetadata()
  @Expose({ name: "annual_revenue_usd" })
  annualRevenueUsd?: number;

  /**
   * Annual revenue of the company in USD, formated as an easily readable string
   */
  @SpeakeasyMetadata()
  @Expose({ name: "annual_revenue_usd_readable" })
  annualRevenueUsdReadable?: string;

  /**
   * ID of the company in Apollo
   */
  @SpeakeasyMetadata()
  @Expose({ name: "apollo_id" })
  apolloId?: string;

  /**
   * City of the company's HQ
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Company keywords, related to what the company does
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_keywords" })
  companyKeywords?: string[];

  /**
   * Country of the company's HQ
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Number of employees of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_count" })
  employeeCount?: number;

  /**
   * Number range of employees at the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "employee_count_range" })
  employeeCountRange?: string;

  /**
   * Year the company was founded
   */
  @SpeakeasyMetadata()
  @Expose({ name: "founded_year" })
  foundedYear?: number;

  /**
   * Latest funding stage of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "funding_stage" })
  fundingStage?: string;

  /**
   * Industry of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "industry" })
  industry?: string;

  /**
   * List of investors in this company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "investors" })
  investors?: string[];

  /**
   * Amount of the last funding round of the company, formated as an easily readable string
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_funding_round_amount_readable" })
  lastFundingRoundAmountReadable?: string;

  /**
   * Date of the last funding round of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_funding_round_date" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  lastFundingRoundDate?: RFCDate;

  /**
   * ID of the company in LinkedIn
   */
  @SpeakeasyMetadata()
  @Expose({ name: "linkedin_id" })
  linkedinId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "linkedin_url" })
  linkedinUrl?: string;

  /**
   * Logo of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "logo" })
  logo?: string;

  /**
   * Short description of the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "long_description" })
  longDescription?: string;

  /**
   * Company name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Number of jobs from this company in our database
   */
  @SpeakeasyMetadata()
  @Expose({ name: "num_jobs" })
  numJobs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "publicly_traded_exchange" })
  publiclyTradedExchange?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "publicly_traded_symbol" })
  publiclyTradedSymbol?: string;

  /**
   * SEO description of the company, extracted from their website
   */
  @SpeakeasyMetadata()
  @Expose({ name: "seo_description" })
  seoDescription?: string;

  /**
   * Names of the technologies found to be used by the company
   */
  @SpeakeasyMetadata()
  @Expose({ name: "technology_names" })
  technologyNames?: string[];

  /**
   * Funding of the company in USD
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_funding_usd" })
  totalFundingUsd?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  /**
   * If the company went through YC, this is its batch
   */
  @SpeakeasyMetadata()
  @Expose({ name: "yc_batch" })
  ycBatch?: string;
}

export class CompanyTechnology extends SpeakeasyBase {
  /**
   * Category of the technology
   */
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  /**
   * Company object
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company" })
  @Type(() => CompanyTechnologyCompanyWithTechnologyNames)
  company?: CompanyTechnologyCompanyWithTechnologyNames;

  /**
   * Company name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_name" })
  companyName?: string;

  /**
   * Date when the keyword was first mentioned by the company in a job post
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_date_found" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  firstDateFound?: RFCDate;

  /**
   * List of dates when jobs were posted mentioning this technology from the given company, sorted by date_posted in descending order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_dates_posted" })
  jobDatesPosted?: RFCDate[];

  /**
   * List of job IDs from the given company mentioning this technology, sorted by date_posted in descending order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_ids" })
  jobIds?: number[];

  /**
   * List of job titles of jobs mentioning this technology from the given company, sorted by date_posted in descending order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_titles" })
  jobTitles?: string[];

  /**
   * List of URLs to jobs mentioning this technology from the given company, sorted by date_posted in descending order
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job_urls" })
  jobUrls?: string[];

  /**
   * Number of jobs found mentioning this technology
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs?: number;

  /**
   * Number of jobs from the given company mentioning this technology in the last 180 days
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs_last_180_days" })
  jobsLast180Days?: number;

  /**
   * Number of jobs from the given company mentioning this technology in the last 30 days
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs_last_30_days" })
  jobsLast30Days?: number;

  /**
   * Number of jobs from the given company mentioning this technology in the last 7 days
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs_last_7_days" })
  jobsLast7Days?: number;

  /**
   * Date when the keyword was last mentioned by the company in a job post
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_date_found" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  lastDateFound?: RFCDate;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Measures how common this technology is among the company's jobs, compared to other technologies in the same category. The most mentioned technology in its category will have a rank of 1. This helps you infer which is the technology the company is most likely to be using, when they mention several technologies that belong to the same category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rank_within_category" })
  rankWithinCategory?: number;

  /**
   * Measures the relative occurance of this technology among other technologies in the same category, in jobs by this company. If there are 10 jobs where a company mentions 3 categories, and they appear in 8, 3 and 2 jobs respectively, its relative occurrences will be 0.8, 0.3 and 0.2. This helps you infer how likely it is that the company is using this technology, when they mention several technologies that belong to the same category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relative_occurrence_within_category" })
  relativeOccurrenceWithinCategory?: number;

  /**
   * This is a score we assign to every technology used by each company to asses how likely it is that they're using it, combining the value of `jobs` and `relative_occurrence_within_category`. The higher this value is, the higher the chances that the company uses this technology. Values lower than 1 mean it's not very likely they use it. Then, the higher the value of theirstack_score, the more likely it is that they actually use it.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "theirstack_score" })
  theirstackScore?: number;
}