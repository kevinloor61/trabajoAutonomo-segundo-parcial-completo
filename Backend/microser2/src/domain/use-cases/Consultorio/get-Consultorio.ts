import { ConsultorioEntity } from '../../entities/Consultorio.entity';
import { ConsultorioRepository } from '../../repositories/Consultorio.repository';


export interface GetConsultorioUseCase {
  execute( id: number ): Promise<ConsultorioEntity>
}


export class GetConsultorio implements GetConsultorioUseCase {
  
  constructor(
    private readonly repository: ConsultorioRepository,
  ) {}
  
  execute( id: number ): Promise<ConsultorioEntity> {
    return this.repository.findById(id);
  }

}