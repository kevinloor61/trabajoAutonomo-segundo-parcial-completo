import { CreateAlergiaDto, AlergiasDatasource, AlergiasEntity, AlergiasRepository, UpdateAlergiaDto } from '../../domain';


export class AlergiasRepositoryImpl implements AlergiasRepository {

  constructor(
    private readonly datasource: AlergiasDatasource,
  ) { }


  create( createAlergiaDto: CreateAlergiaDto ): Promise<AlergiasEntity> {
    return this.datasource.create( createAlergiaDto );
  }

  getAll(): Promise<AlergiasEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<AlergiasEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiasEntity> {
    return this.datasource.updateById( updateAlergiaDto );
  }

  deleteById( id: number ): Promise<AlergiasEntity> {
    return this.datasource.deleteById( id );
  }

}