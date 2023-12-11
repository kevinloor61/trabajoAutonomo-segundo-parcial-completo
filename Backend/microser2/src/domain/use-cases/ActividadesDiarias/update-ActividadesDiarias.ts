import { UpdateActividadesDiariasDto } from '../../dtos';
import { ActividadesDiariasEntity } from '../../entities/ActividadesDiarias.entity';
import { ActividadesDiariasRepository } from '../../repositories/ActividadesDiarias.repository';


export interface UpdateActividadesDiariasUseCase {
  execute( dto: UpdateActividadesDiariasDto ): Promise<ActividadesDiariasEntity>
}


export class UpdateActividadesDiarias implements UpdateActividadesDiariasUseCase {
  
  constructor(
    private readonly repository: ActividadesDiariasRepository,
  ) {}
  
  execute( dto: UpdateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    return this.repository.updateById(dto);
  }

}