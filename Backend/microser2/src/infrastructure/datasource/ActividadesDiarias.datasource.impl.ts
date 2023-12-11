import { prisma } from '../../data/postgres';
import { CreateActividadesDiariasDto, ActividadesDiariasDatasource, ActividadesDiariasEntity, UpdateActividadesDiariasDto } from '../../domain';


export class  ActividadesDiariasDatasourceImpl implements ActividadesDiariasDatasource {

  async create( createActividadesDiariasDto: CreateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    const actividadesDiarias = await prisma.actividadesDiarias.create({
      data: createActividadesDiariasDto!
    });

    return ActividadesDiariasEntity.fromObject( actividadesDiarias );
  }

  async getAll(): Promise<ActividadesDiariasEntity[]> {
    const actividadesDiariass = await prisma.actividadesDiarias.findMany();
    return actividadesDiariass.map( actividadesDiarias => ActividadesDiariasEntity.fromObject(actividadesDiarias) );
  }

  async findById( id: number ): Promise<ActividadesDiariasEntity> {
    const actividadesDiarias = await prisma.actividadesDiarias.findFirst({
      where: { id }
    });

    if ( !actividadesDiarias ) throw `actividadesDiarias with id ${ id } not found`;
    return ActividadesDiariasEntity.fromObject(actividadesDiarias);
  }

  async updateById( updateActividadesDiariasDto: UpdateActividadesDiariasDto ): Promise<ActividadesDiariasEntity> {
    await this.findById( updateActividadesDiariasDto.id );
    
    const updatedActividadesDiarias = await prisma.actividadesDiarias.update({
      where: { id: updateActividadesDiariasDto.id },
      data: updateActividadesDiariasDto!.values
    });

    return ActividadesDiariasEntity.fromObject(updatedActividadesDiarias);
  }

  async deleteById( id: number ): Promise<ActividadesDiariasEntity> {
    await this.findById( id );
    const deleted = await prisma.actividadesDiarias.delete({
      where: { id }
    });

    return ActividadesDiariasEntity.fromObject( deleted );
  }

}