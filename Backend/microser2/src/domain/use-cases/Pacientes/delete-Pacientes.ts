import { PacientesEntity } from '../../entities/Pacientes.entity';
import { PacientesRepository } from '../../repositories/Pacientes.repository';


export interface DeletePacientesUseCase {
  execute( id: number ): Promise<PacientesEntity>
}

export class DeletePacientes implements DeletePacientesUseCase {
  
  constructor(
    private readonly repository: PacientesRepository,
  ) {}
  
  execute( id: number ): Promise<PacientesEntity> {
    return this.repository.deleteById(id);
  }

}