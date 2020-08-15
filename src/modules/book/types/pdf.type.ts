import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Pdf')
export class PdfType {
  @Field()
  isAvailable: boolean;
}
