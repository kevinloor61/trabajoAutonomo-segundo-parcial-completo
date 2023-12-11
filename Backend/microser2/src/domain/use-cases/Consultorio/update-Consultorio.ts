import { UpdateConsultorioDto } from '../../dtos';
import { ConsultorioEntity } from '../../entities/Consultorio.entity';
import { ConsultorioRepository } from '../../repositories/Consultorio.repository';


export interface UpdateConsultorioUseCase {
  execute( dto: UpdateConsultorioDto ): Promise<ConsultorioEntity>
}


export class UpdateConsultorio implements UpdateConsultorioUseCase {
  
  constructor(
    private readonly repository: ConsultorioRepository,
  ) {}
  
  execute( dto: UpdateConsultorioDto ): Promise<ConsultorioEntity> {
    return this.repository.updateById(dto);
  }

}