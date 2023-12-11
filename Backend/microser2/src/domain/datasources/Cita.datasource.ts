import { CreateCitaDto, UpdateCitaDto } from '../dtos';
import { CitaEntity } from '../entities/Cita.entity';



export abstract class CitaDatasource {

  abstract create( createCitaDto: CreateCitaDto ): Promise<CitaEntity>;

  abstract getAll(): Promise<CitaEntity[]>;

  abstract findById( id: number ): Promise<CitaEntity>;
  abstract updateById( updateCitaDto: UpdateCitaDto ): Promise<CitaEntity>;
  abstract deleteById( id: number ): Promise<CitaEntity>;

}