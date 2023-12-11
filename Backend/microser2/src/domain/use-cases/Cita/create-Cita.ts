import { CreateCitaDto } from '../../dtos';
import { CitaEntity } from '../../entities/Cita.entity';
import { CitaRepository } from '../../repositories/Cita.repository';


export interface CreateCitaUseCase {
  execute( dto: CreateCitaDto ): Promise<CitaEntity>
}

// ctrl+ shift + l
export class CreateCita implements CreateCitaUseCase {
  
  constructor(
    private readonly repository: CitaRepository,
  ) {}
  
  execute( dto: CreateCitaDto ): Promise<CitaEntity> {
    return this.repository.create(dto);
  }

}