import { UpdateDoctorDto } from '../../dtos';
import { DoctorEntity } from '../../entities/Doctor.entity';
import { DoctorRepository } from '../../repositories/Doctor.repository';


export interface UpdateDoctorUseCase {
  execute( dto: UpdateDoctorDto ): Promise<DoctorEntity>
}


export class UpdateDoctor implements UpdateDoctorUseCase {
  
  constructor(
    private readonly repository: DoctorRepository,
  ) {}
  
  execute( dto: UpdateDoctorDto ): Promise<DoctorEntity> {
    return this.repository.updateById(dto);
  }

}