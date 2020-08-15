import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ImageLink')
export class ImageLinkType {
  @Field()
  smallThumbnail: string;

  @Field()
  thumbnail: string;
}
