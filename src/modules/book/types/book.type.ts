import { ObjectType, Field, ID } from '@nestjs/graphql';
import { VolumeInfoType } from './volume-info.type';
import { SaleInfoType } from './sale-info.type';
import { AccessInfoType } from './access-info.type';
import { SearchInfoType } from './search-info.type';

@ObjectType('Book')
export class BookType {
  @Field(_ => ID)
  id: string;

  @Field()
  etag: string;

  @Field()
  kind: string;

  @Field()
  selfLink: string;

  @Field(type => VolumeInfoType)
  volumeInfo: VolumeInfoType;

  @Field(type => SaleInfoType)
  saleInfoType: SaleInfoType;

  @Field(type => AccessInfoType)
  accessInfo: AccessInfoType;

  @Field(type => SearchInfoType)
  searchInfo: SearchInfoType;
}
