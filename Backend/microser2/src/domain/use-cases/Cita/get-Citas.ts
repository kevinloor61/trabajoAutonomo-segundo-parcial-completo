import { CitaEntity } from '../../entities/Cita.entity';
import { CitaRepository } from '../../repositories/Cita.repository';


export interface GetCitasUseCase {
  execute(): Promise<CitaEntity[]>
}


export class GetCitas implements GetCitasUseCase {
  
  constructor(
    private readonly repository: CitaRepository,
  ) {}
  
  execute(): Promise<CitaEntity[]> {
    return this.repository.getAll();
  }

}