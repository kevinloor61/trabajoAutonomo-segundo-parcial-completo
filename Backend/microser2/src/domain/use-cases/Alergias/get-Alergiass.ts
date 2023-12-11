import { AlergiasEntity } from '../../entities/Alergias.entity';
import { AlergiasRepository } from '../../repositories/Alergias.repository';


export interface GetAlergiassUseCase {
  execute(): Promise<AlergiasEntity[]>
}


export class GetAlergiass implements GetAlergiassUseCase {
  
  constructor(
    private readonly repository: AlergiasRepository,
  ) {}
  
  execute(): Promise<AlergiasEntity[]> {
    return this.repository.getAll();
  }

}