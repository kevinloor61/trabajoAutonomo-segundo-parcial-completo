import { PacientesEntity } from '../../entities/Pacientes.entity';
import { PacientesRepository } from '../../repositories/Pacientes.repository';


export interface GetPacientessUseCase {
  execute(): Promise<PacientesEntity[]>
}


export class GetPacientess implements GetPacientessUseCase {
  
  constructor(
    private readonly repository: PacientesRepository,
  ) {}
  
  execute(): Promise<PacientesEntity[]> {
    return this.repository.getAll();
  }

}