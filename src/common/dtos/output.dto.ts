import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationOutput {
  @Field((type) => String, { nullable: true })
  error?: String;

  @Field((type) => Boolean)
  ok: Boolean;
}
