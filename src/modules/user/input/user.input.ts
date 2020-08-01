import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsOptional, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @IsNotEmpty()
  @Field()
  name: string;

  @MinLength(1)
  @IsNotEmpty()
  @Field()
  givenName: string;

  @MinLength(1)
  @IsNotEmpty()
  @Field()
  email: string;

  @MinLength(1)
  @IsOptional()
  @Field({ nullable: true })
  googleId: string;

  @MinLength(1)
  @IsOptional()
  @Field({ nullable: true })
  amazonId: string;

  @MinLength(1)
  @IsNotEmpty()
  @IsOptional()
  @Field({ nullable: true })
  photoUri: string;
}
