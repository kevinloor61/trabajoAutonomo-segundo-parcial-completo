import { ActividadesDiariasEntity } from '../../entities/ActividadesDiarias.entity';
import { ActividadesDiariasRepository } from '../../repositories/ActividadesDiarias.repository';


export interface GetActividadesDiariassUseCase {
  execute(): Promise<ActividadesDiariasEntity[]>
}


export class GetActividadesDiariass implements GetActividadesDiariassUseCase {
  
  constructor(
    private readonly repository: ActividadesDiariasRepository,
  ) {}
  
  execute(): Promise<ActividadesDiariasEntity[]> {
    return this.repository.getAll();
  }

}