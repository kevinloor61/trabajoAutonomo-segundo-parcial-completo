import { CreatePacienteDto, UpdatePacienteDto } from '../dtos';
import { PacientesEntity } from '../entities/Pacientes.entity';



export abstract class PacientesRepository {

  abstract create( createPacienteDto: CreatePacienteDto ): Promise<PacientesEntity>;

  abstract getAll(): Promise<PacientesEntity[]>;

  abstract findById( id: number ): Promise<PacientesEntity>;
  abstract updateById( updatePacienteDto: UpdatePacienteDto ): Promise<PacientesEntity>;
  abstract deleteById( id: number ): Promise<PacientesEntity>;

}