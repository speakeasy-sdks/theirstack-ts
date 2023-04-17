/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompanySearchMetadata } from "./companysearchmetadata";
import { CompanySimple } from "./companysimple";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class CompanyMatrixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CompanySimple })
  @Expose({ name: "data" })
  @Type(() => CompanySimple)
  data?: CompanySimple[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CompanySearchMetadata)
  metadata?: CompanySearchMetadata;
}