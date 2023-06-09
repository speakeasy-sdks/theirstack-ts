/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CompanySearchMetadata extends SpeakeasyBase {
  /**
   * Number of companies previously fetched
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fetched_previously" })
  fetchedPreviously?: number;

  /**
   * Companies that match the search criteria and the user hasn't fetched yet
   */
  @SpeakeasyMetadata()
  @Expose({ name: "net_new" })
  netNew?: number;

  /**
   * Total number of results
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_results" })
  totalResults?: number;
}
