import { ActividadesDiariasEntity } from '../../entities/ActividadesDiarias.entity';
import { ActividadesDiariasRepository } from '../../repositories/ActividadesDiarias.repository';


export interface GetActividadesDiariasUseCase {
  execute( id: number ): Promise<ActividadesDiariasEntity>
}


export class GetActividadesDiarias implements GetActividadesDiariasUseCase {
  
  constructor(
    private readonly repository: ActividadesDiariasRepository,
  ) {}
  
  execute( id: number ): Promise<ActividadesDiariasEntity> {
    return this.repository.findById(id);
  }

}