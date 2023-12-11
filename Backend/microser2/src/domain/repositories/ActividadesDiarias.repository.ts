import { CreateActividadesDiariasDto, UpdateActividadesDiariasDto } from '../dtos';
import { ActividadesDiariasEntity } from '../entities/ActividadesDiarias.entity';



export abstract class ActividadesDiariasRepository {

  abstract create( createActividadesDiariasDto: CreateActividadesDiariasDto ): Promise<ActividadesDiariasEntity>;

  abstract getAll(): Promise<ActividadesDiariasEntity[]>;

  abstract findById( id: number ): Promise<ActividadesDiariasEntity>;
  abstract updateById( updateActividadesDiariasDto: UpdateActividadesDiariasDto ): Promise<ActividadesDiariasEntity>;
  abstract deleteById( id: number ): Promise<ActividadesDiariasEntity>;

}