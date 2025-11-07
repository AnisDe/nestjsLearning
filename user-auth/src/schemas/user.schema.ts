import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
/*
 * @Prop() decorator defines a property in the document
 * @Schema() decorator marks the class as a Mongoose schema
 * In case of relation to another model, use the @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
 * This ensures the field is not confused with a populated reference
 * @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' } })
 
 */

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false, default: null })
  refreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
