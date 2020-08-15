import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReadingMode')
export class ReadingModeType {
  @Field()
  text: boolean;

  @Field()
  image: boolean;
}
