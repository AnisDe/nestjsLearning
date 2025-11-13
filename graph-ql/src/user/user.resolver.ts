import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Resolver(() => User)
export class UserResolver {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
