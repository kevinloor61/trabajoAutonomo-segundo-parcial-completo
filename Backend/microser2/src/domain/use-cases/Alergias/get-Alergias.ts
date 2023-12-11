import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface GetAlergiasUseCase {
  execute( id: number ): Promise<AlergiasEntity>
}


export class GetAlergias implements GetAlergiasUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute( id: number ): Promise<AlergiasEntity> {
    return this.repository.findById(id);
  }

}