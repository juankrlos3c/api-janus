import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(_ => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  givenName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  googleId: string;

  @Field({ nullable: true })
  amazonId: string;

  @Field({ nullable: true })
  photoUri: string;
}
