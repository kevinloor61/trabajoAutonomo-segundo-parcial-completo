import { PacientesEntity } from '../../entities/Pacientes.entity';
import { PacientesRepository } from '../../repositories/Pacientes.repository';


export interface GetPacientesUseCase {
  execute( id: number ): Promise<PacientesEntity>
}


export class GetPacientes implements GetPacientesUseCase {
  
  constructor(
    private readonly repository: PacientesRepository,
  ) {}
  
  execute( id: number ): Promise<PacientesEntity> {
    return this.repository.findById(id);
  }

}