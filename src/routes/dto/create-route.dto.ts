interface PositionDto {
  lat: number;
  lng: number;
}

export class CreateRouteDto {
  title: string;
  startPosition: PositionDto;
  endPosition: PositionDto;
}
