/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TechnologyAggregated extends SpeakeasyBase {
  /**
   * Category of the technology
   */
  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: string;

  /**
   * Number of companies using this technology
   */
  @SpeakeasyMetadata()
  @Expose({ name: "companies" })
  companies?: number;

  /**
   * Number of jobs found mentioning this technology
   */
  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
