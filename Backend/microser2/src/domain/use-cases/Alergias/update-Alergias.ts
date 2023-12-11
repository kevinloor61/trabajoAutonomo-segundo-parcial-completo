import { UpdateAlergiaDto } from '../../dtos';
import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface UpdateAlergiasUseCase {
  execute( dto: UpdateAlergiaDto ): Promise<AlergiasEntity>
}


export class UpdateAlergias implements UpdateAlergiasUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute( dto: UpdateAlergiaDto ): Promise<AlergiasEntity> {
    return this.repository.updateById(dto);
  }

}