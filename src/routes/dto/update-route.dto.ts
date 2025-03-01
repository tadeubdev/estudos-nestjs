import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create-route.dto';

interface PositionDto {
  lat: number;
  lng: number;
}

export class UpdateRouteDto extends PartialType(CreateRouteDto) {
  title?: string;
  startPosition?: PositionDto;
  endPosition?: PositionDto;
}
