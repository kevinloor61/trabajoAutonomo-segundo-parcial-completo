import { DoctorEntity } from '../../entities/Doctor.entity';
import { DoctorRepository } from '../../repositories/Doctor.repository';


export interface GetDoctorUseCase {
  execute( id: number ): Promise<DoctorEntity>
}


export class GetDoctor implements GetDoctorUseCase {
  
  constructor(
    private readonly repository: DoctorRepository,
  ) {}
  
  execute( id: number ): Promise<DoctorEntity> {
    return this.repository.findById(id);
  }

}