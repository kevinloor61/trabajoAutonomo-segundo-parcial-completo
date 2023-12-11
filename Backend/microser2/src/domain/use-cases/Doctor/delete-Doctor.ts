import { DoctorEntity } from '../../entities/Doctor.entity';
import { DoctorRepository } from '../../repositories/Doctor.repository';


export interface DeleteDoctorUseCase {
  execute( id: number ): Promise<DoctorEntity>
}

export class DeleteDoctor implements DeleteDoctorUseCase {
  
  constructor(
    private readonly repository: DoctorRepository,
  ) {}
  
  execute( id: number ): Promise<DoctorEntity> {
    return this.repository.deleteById(id);
  }

}