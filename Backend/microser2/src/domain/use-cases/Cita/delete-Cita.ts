import { CitaEntity } from '../../entities/Cita.entity';
import { CitaRepository } from '../../repositories/Cita.repository';


export interface DeleteCitaUseCase {
  execute( id: number ): Promise<CitaEntity>
}

export class DeleteCita implements DeleteCitaUseCase {
  
  constructor(
    private readonly repository: CitaRepository,
  ) {}
  
  execute( id: number ): Promise<CitaEntity> {
    return this.repository.deleteById(id);
  }

}