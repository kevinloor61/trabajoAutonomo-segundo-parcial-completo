import { CitaEntity } from '../../entities/Cita.entity';
import { CitaRepository } from '../../repositories/Cita.repository';


export interface GetCitaUseCase {
  execute( id: number ): Promise<CitaEntity>
}


export class GetCita implements GetCitaUseCase {
  
  constructor(
    private readonly repository: CitaRepository,
  ) {}
  
  execute( id: number ): Promise<CitaEntity> {
    return this.repository.findById(id);
  }

}