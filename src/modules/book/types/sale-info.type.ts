import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('SaleInfo')
export class SaleInfoType {
  @Field()
  country: string;

  @Field()
  saleability: string;

  @Field()
  isEbook: boolean;
}
