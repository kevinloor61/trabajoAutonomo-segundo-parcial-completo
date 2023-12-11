import { CreateDoctorDto, UpdateDoctorDto } from '../dtos';
import { DoctorEntity } from '../entities/Doctor.entity';



export abstract class DoctorDatasource {

  abstract create( createDoctorDto: CreateDoctorDto ): Promise<DoctorEntity>;

  abstract getAll(): Promise<DoctorEntity[]>;

  abstract findById( id: number ): Promise<DoctorEntity>;
  abstract updateById( updateDoctorDto: UpdateDoctorDto ): Promise<DoctorEntity>;
  abstract deleteById( id: number ): Promise<DoctorEntity>;

}