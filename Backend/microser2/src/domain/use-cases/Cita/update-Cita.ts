import { UpdateCitaDto } from '../../dtos';
import { CitaEntity } from '../../entities/Cita.entity';
import { CitaRepository } from '../../repositories/Cita.repository';


export interface UpdateCitaUseCase {
  execute( dto: UpdateCitaDto ): Promise<CitaEntity>
}


export class UpdateCita implements UpdateCitaUseCase {
  
  constructor(
    private readonly repository: CitaRepository,
  ) {}
  
  execute( dto: UpdateCitaDto ): Promise<CitaEntity> {
    return this.repository.updateById(dto);
  }

}