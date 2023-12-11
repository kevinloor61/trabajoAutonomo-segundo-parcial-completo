import { DoctorEntity } from '../../entities/Doctor.entity';
import { DoctorRepository } from '../../repositories/Doctor.repository';


export interface GetDoctorsUseCase {
  execute(): Promise<DoctorEntity[]>
}


export class GetDoctors implements GetDoctorsUseCase {
  
  constructor(
    private readonly repository: DoctorRepository,
  ) {}
  
  execute(): Promise<DoctorEntity[]> {
    return this.repository.getAll();
  }

}