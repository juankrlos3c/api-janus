import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('PanelizationSummary')
export class PanelizationSummaryType {
  @Field()
  containsEpubBubbles: boolean;

  @Field()
  containsImageBubbles: boolean;
}
