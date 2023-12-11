import { CreateDoctorDto } from '../../dtos';
import { DoctorEntity } from '../../entities/Doctor.entity';
import { DoctorRepository } from '../../repositories/Doctor.repository';


export interface CreateDoctorUseCase {
  execute( dto: CreateDoctorDto ): Promise<DoctorEntity>
}

// ctrl+ shift + l
export class CreateDoctor implements CreateDoctorUseCase {
  
  constructor(
    private readonly repository: DoctorRepository,
  ) {}
  
  execute( dto: CreateDoctorDto ): Promise<DoctorEntity> {
    return this.repository.create(dto);
  }

}