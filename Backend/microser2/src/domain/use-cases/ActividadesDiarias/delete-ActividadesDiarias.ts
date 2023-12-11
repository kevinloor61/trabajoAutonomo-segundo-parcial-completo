import { ActividadesDiariasEntity } from '../../entities/ActividadesDiarias.entity';
import { ActividadesDiariasRepository } from '../../repositories/ActividadesDiarias.repository';


export interface DeleteActividadesDiariasUseCase {
  execute( id: number ): Promise<ActividadesDiariasEntity>
}

export class DeleteActividadesDiarias implements DeleteActividadesDiariasUseCase {
  
  constructor(
    private readonly repository: ActividadesDiariasRepository,
  ) {}
  
  execute( id: number ): Promise<ActividadesDiariasEntity> {
    return this.repository.deleteById(id);
  }

}