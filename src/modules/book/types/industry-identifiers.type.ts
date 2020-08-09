import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('IndustryIdentifier')
export class IndustryIdentifierType {
  @Field()
  type: string;

  @Field()
  identifier: string;
}
