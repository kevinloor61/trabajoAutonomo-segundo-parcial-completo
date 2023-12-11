import { CreateCitaDto, CitaDatasource, CitaEntity, CitaRepository, UpdateCitaDto } from '../../domain';


export class CitaRepositoryImpl implements CitaRepository {

  constructor(
    private readonly datasource: CitaDatasource,
  ) { }


  create( createCitaDto: CreateCitaDto ): Promise<CitaEntity> {
    return this.datasource.create( createCitaDto );
  }

  getAll(): Promise<CitaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CitaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCitaDto: UpdateCitaDto ): Promise<CitaEntity> {
    return this.datasource.updateById( updateCitaDto );
  }

  deleteById( id: number ): Promise<CitaEntity> {
    return this.datasource.deleteById( id );
  }

}