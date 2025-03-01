import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Model } from 'mongoose';
import { Route, RouteDocument } from './entities/route.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name)
    private routeModel: Model<RouteDocument>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return this.routeModel.create(createRouteDto);
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  findOne(id: string) {
    return this.routeModel.findById(id).exec();
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
