import { CreatePacienteDto, UpdatePacienteDto } from '../dtos';
import { PacientesEntity } from '../entities/Pacientes.entity';



export abstract class PacientesDatasource {

  abstract create( createPacientesDto: CreatePacienteDto ): Promise<PacientesEntity>;

  abstract getAll(): Promise<PacientesEntity[]>;

  abstract findById( id: number ): Promise<PacientesEntity>;
  abstract updateById( updatePacientesDto: UpdatePacienteDto ): Promise<PacientesEntity>;
  abstract deleteById( id: number ): Promise<PacientesEntity>;

}