import { UpdatePacienteDto } from '../../dtos';
import { PacientesEntity } from '../../entities/Pacientes.entity';
import { PacientesRepository } from '../../repositories/Pacientes.repository';


export interface UpdatePacientesUseCase {
  execute( dto: UpdatePacienteDto ): Promise<PacientesEntity>
}


export class UpdatePacientes implements UpdatePacientesUseCase {
  
  constructor(
    private readonly repository: PacientesRepository,
  ) {}
  
  execute( dto: UpdatePacienteDto ): Promise<PacientesEntity> {
    return this.repository.updateById(dto);
  }

}