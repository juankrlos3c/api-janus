import { Field, InputType, ID } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreatePlayerInput {
  @MinLength(1)
  @Field()
  currentBook: string;
 
  @IsNotEmpty()
  @Field()
  currentPage: number;

  @IsNotEmpty()
  @Field()
  currentWord: number;

  @IsNotEmpty()
  @Field()
  totalWordsRead: number;

  @IsNotEmpty()
  @Field()
  totalPagesRead: number;

  @IsOptional()
  @Field()
  speed: number;

  @IsOptional()
  @Field({ nullable: true })
  font: string;

  @IsOptional()
  @Field({ nullable: true })
  color: string;
  
  @IsUUID('4')
  @Field(() => ID)
  user: string;
}
