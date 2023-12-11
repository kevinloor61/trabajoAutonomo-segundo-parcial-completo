import { CreateActividadesDiariasDto } from '../../dtos';
import { ActividadesDiariasEntity } from '../../entities/ActividadesDiarias.entity';
import { ActividadesDiariasRepository } from '../../repositories/ActividadesDiarias.repository';


export interface CreateActividadesDiariasUseCase {
  execute( dto: CreateActividadesDiariasDto ): Promise<ActividadesDiariasEntity>
}

// ctrl+ shift + l
export class CreateActividadesDiarias implements CreateActividadesDiariasUseCase {
  
  constructor(
    private readonly repository: ActividadesDiariasRepository,
  ) {}
  
  execute( dto: CreateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    return this.repository.create(dto);
  }

}