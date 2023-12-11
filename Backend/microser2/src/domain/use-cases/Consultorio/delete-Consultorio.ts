import { ConsultorioEntity } from '../../entities/Consultorio.entity';
import { ConsultorioRepository } from '../../repositories/Consultorio.repository';


export interface DeleteConsultorioUseCase {
  execute( id: number ): Promise<ConsultorioEntity>
}

export class DeleteConsultorio implements DeleteConsultorioUseCase {
  
  constructor(
    private readonly repository: ConsultorioRepository,
  ) {}
  
  execute( id: number ): Promise<ConsultorioEntity> {
    return this.repository.deleteById(id);
  }

}