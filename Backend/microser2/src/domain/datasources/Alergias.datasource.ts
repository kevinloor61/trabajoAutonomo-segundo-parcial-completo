import { CreateAlergiaDto, UpdateAlergiaDto } from '../dtos';
import { AlergiasEntity } from '../entities/Alergias.entity';



export abstract class AlergiasDatasource {

  abstract create( createAlergiaDto: CreateAlergiaDto ): Promise<AlergiasEntity>;

  abstract getAll(): Promise<AlergiasEntity[]>;

  abstract findById( id: number ): Promise<AlergiasEntity>;
  abstract updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiasEntity>;
  abstract deleteById( id: number ): Promise<AlergiasEntity>;

}