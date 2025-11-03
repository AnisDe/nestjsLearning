import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/*
 * @Prop() decorator defines a property in the document
 * @Schema() decorator marks the class as a Mongoose schema
 * In case of relation to another model, use the @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
 * This ensures the field is not confused with a populated reference
 * @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' } })
 
 */
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
