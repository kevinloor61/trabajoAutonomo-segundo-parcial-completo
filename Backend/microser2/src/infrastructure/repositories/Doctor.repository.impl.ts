import { CreateDoctorDto, DoctorDatasource, DoctorEntity, DoctorRepository, UpdateDoctorDto } from '../../domain';


export class DoctorRepositoryImpl implements DoctorRepository {

  constructor(
    private readonly datasource: DoctorDatasource,
  ) { }


  create( createDoctorDto: CreateDoctorDto ): Promise<DoctorEntity> {
    return this.datasource.create( createDoctorDto );
  }

  getAll(): Promise<DoctorEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<DoctorEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateDoctorDto: UpdateDoctorDto ): Promise<DoctorEntity> {
    return this.datasource.updateById( updateDoctorDto );
  }

  deleteById( id: number ): Promise<DoctorEntity> {
    return this.datasource.deleteById( id );
  }

}