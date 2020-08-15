import { ObjectType, Field } from '@nestjs/graphql';
import { EPubType } from './epub.type';
import { PdfType } from './pdf.type';

@ObjectType('AccessInfo')
export class AccessInfoType {
  @Field()
  country: string;

  @Field()
  viewability: string;

  @Field()
  embeddable: boolean;

  @Field()
  publicDomain: boolean;

  @Field()
  textToSpeechPermission: string;

  @Field(type => EPubType)
  epub: EPubType;

  @Field(type => PdfType)
  pdf: PdfType;

  @Field()
  webReaderLink: string;

  @Field()
  acessViewStatusw: string;

  @Field()
  quoteSharingAllowrd: boolean;
}
