import { CreateConsultorioDto, ConsultorioDatasource, ConsultorioEntity, ConsultorioRepository, UpdateConsultorioDto } from '../../domain';


export class ConsultorioRepositoryImpl implements ConsultorioRepository {

  constructor(
    private readonly datasource: ConsultorioDatasource,
  ) { }


  create( createConsultorioDto: CreateConsultorioDto ): Promise<ConsultorioEntity> {
    return this.datasource.create( createConsultorioDto );
  }

  getAll(): Promise<ConsultorioEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<ConsultorioEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateConsultorioDto: UpdateConsultorioDto ): Promise<ConsultorioEntity> {
    return this.datasource.updateById( updateConsultorioDto );
  }

  deleteById( id: number ): Promise<ConsultorioEntity> {
    return this.datasource.deleteById( id );
  }

}