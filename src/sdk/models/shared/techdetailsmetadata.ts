/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TechDetailsMetadata extends SpeakeasyBase {
  /**
   * Total number of companies
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_companies" })
  totalCompanies?: number;

  /**
   * Total number of results
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_results" })
  totalResults?: number;
}
