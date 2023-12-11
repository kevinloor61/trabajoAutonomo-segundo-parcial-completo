import { CreateConsultorioDto, UpdateConsultorioDto } from '../dtos';
import { ConsultorioEntity } from '../entities/Consultorio.entity';



export abstract class ConsultorioDatasource {

  abstract create( createConsultorioDto: CreateConsultorioDto ): Promise<ConsultorioEntity>;

  abstract getAll(): Promise<ConsultorioEntity[]>;

  abstract findById( id: number ): Promise<ConsultorioEntity>;
  abstract updateById( updateConsultorioDto: UpdateConsultorioDto ): Promise<ConsultorioEntity>;
  abstract deleteById( id: number ): Promise<ConsultorioEntity>; }