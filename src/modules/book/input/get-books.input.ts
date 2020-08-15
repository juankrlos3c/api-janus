import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetBooksInput {
  @Field()
  query: string;

  @Field()
  maxResults: number;
}
