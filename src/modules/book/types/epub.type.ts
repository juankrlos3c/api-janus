import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('EPub')
export class EPubType {
  @Field()
  isAvailable: boolean;
}
