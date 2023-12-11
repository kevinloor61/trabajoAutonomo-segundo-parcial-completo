import { ConsultorioEntity } from '../../entities/Consultorio.entity';
import { ConsultorioRepository } from '../../repositories/Consultorio.repository';


export interface GetConsultoriosUseCase {
  execute(): Promise<ConsultorioEntity[]>
}


export class GetConsultorios implements GetConsultoriosUseCase {
  
  constructor(
    private readonly repository: ConsultorioRepository,
  ) {}
  
  execute(): Promise<ConsultorioEntity[]> {
    return this.repository.getAll();
  }

}