import { CreatePacienteDto, PacientesDatasource, PacientesEntity, PacientesRepository, UpdatePacienteDto } from '../../domain';


export class PacientesRepositoryImpl implements PacientesRepository {

  constructor(
    private readonly datasource: PacientesDatasource,
  ) { }


  create( createPacienteDto: CreatePacienteDto ): Promise<PacientesEntity> {
    return this.datasource.create( createPacienteDto );
  }

  getAll(): Promise<PacientesEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<PacientesEntity> {
    return this.datasource.findById( id );
  }

  updateById( updatePacienteDto: UpdatePacienteDto ): Promise<PacientesEntity> {
    return this.datasource.updateById( updatePacienteDto );
  }

  deleteById( id: number ): Promise<PacientesEntity> {
    return this.datasource.deleteById( id );
  }

}