import { CreatePacienteDto } from '../../dtos';
import { PacientesEntity } from '../../entities/Pacientes.entity';
import { PacientesRepository } from '../../repositories/Pacientes.repository';


export interface CreatePacientesUseCase {
  execute( dto: CreatePacienteDto ): Promise<PacientesEntity>
}

// ctrl+ shift + l
export class CreatePacientes implements CreatePacientesUseCase {
  
  constructor(
    private readonly repository: PacientesRepository,
  ) {}
  
  execute( dto: CreatePacienteDto ): Promise<PacientesEntity> {
    return this.repository.create(dto);
  }

}