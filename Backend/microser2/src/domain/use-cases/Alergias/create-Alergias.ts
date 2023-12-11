import { CreateAlergiaDto } from '../../dtos';
import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface CreateAlergiasUseCase {
  execute( dto: CreateAlergiaDto ): Promise<AlergiasEntity>
}

// ctrl+ shift + l
export class CreateAlergias implements CreateAlergiasUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute( dto: CreateAlergiaDto ): Promise<AlergiasEntity> {
    return this.repository.create(dto);
  }

}