import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface DeleteAlergiasUseCase {
  execute( id: number ): Promise<AlergiasEntity>
}

export class DeleteAlergias implements DeleteAlergiasUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute( id: number ): Promise<AlergiasEntity> {
    return this.repository.deleteById(id);
  }

}