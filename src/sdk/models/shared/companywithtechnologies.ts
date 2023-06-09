/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { KeywordFound } from "./keywordfound";
import { Expose, Transform, Type } from "class-transformer";

export class CompanyWithTechnologies extends SpeakeasyBase {
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
   * List of technologies found to be used by the company
   */
  @SpeakeasyMetadata({ elemType: KeywordFound })
  @Expose({ name: "technologies_found" })
  @Type(() => KeywordFound)
  technologiesFound?: KeywordFound[];

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
