import { CreateActividadesDiariasDto, ActividadesDiariasDatasource, ActividadesDiariasEntity, ActividadesDiariasRepository, UpdateActividadesDiariasDto } from '../../domain';


export class ActividadesDiariasRepositoryImpl implements ActividadesDiariasRepository {

  constructor(
    private readonly datasource: ActividadesDiariasDatasource,
  ) { }


  create( createActividadesDiariasDto: CreateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    return this.datasource.create( createActividadesDiariasDto );
  }

  getAll(): Promise<ActividadesDiariasEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<ActividadesDiariasEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateActividadesDiariasDto: UpdateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    return this.datasource.updateById( updateActividadesDiariasDto );
  }

  deleteById( id: number ): Promise<ActividadesDiariasEntity> {
    return this.datasource.deleteById( id );
  }

}