import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('SearchInfo')
export class SearchInfoType {
  @Field()
  textSnippet: string;
}
