import { CreateConsultorioDto } from '../../dtos';
import { ConsultorioEntity } from '../../entities/Consultorio.entity';
import { ConsultorioRepository } from '../../repositories/Consultorio.repository';


export interface CreateConsultorioUseCase {
  execute( dto: CreateConsultorioDto ): Promise<ConsultorioEntity>
}

// ctrl+ shift + l
export class CreateConsultorio implements CreateConsultorioUseCase {
  
  constructor(
    private readonly repository: ConsultorioRepository,
  ) {}
  
  execute( dto: CreateConsultorioDto ): Promise<ConsultorioEntity> {
    return this.repository.create(dto);
  }

}