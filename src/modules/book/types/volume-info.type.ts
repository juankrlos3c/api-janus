import { ObjectType, Field } from '@nestjs/graphql';
import { IndustryIdentifierType } from './industry-identifiers.type';
import { ReadingModeType } from './reading-mode.type';
import { PanelizationSummaryType } from './panelization-summary-type';
import { ImageLinkType } from './image-link.type';

@ObjectType('VolumeInfo')
export class VolumeInfoType {
  @Field()
  title: string;

  @Field()
  subtitle: string;

  /*
  @Field()
  authors: string[];
  */

  @Field()
  publisher: string;

  @Field()
  publishedDate: string;

  @Field()
  description: string;

  @Field(type => [IndustryIdentifierType])
  industryIdentifiers: IndustryIdentifierType[];

  @Field(type => ReadingModeType)
  readingModes: ReadingModeType;

  @Field()
  pageCount: number;

  @Field()
  printType: string;
/*
  @Field()
  categories: string[];
  */

  @Field()
  maturityRating: string;

  @Field()
  allowAnonLogging: boolean;

  @Field()
  contentVersion: string;

  @Field(type => PanelizationSummaryType)
  panelizationsSummary: PanelizationSummaryType;

  @Field(type => ImageLinkType)
  imageLinks: ImageLinkType;

  @Field()
  language: string;

  @Field()
  previewLink: string;

  @Field()
  infoLink: string;

  @Field()
  canonicalVolumeLink: string;
}
