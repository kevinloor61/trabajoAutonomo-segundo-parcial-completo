import { prisma } from '../../data/postgres';
import { CreateAlergiaDto, AlergiasDatasource, AlergiasEntity, UpdateAlergiaDto } from '../../domain';


export class  AlergiasDatasourceImpl implements AlergiasDatasource {

  async create( createAlergiaDto: CreateAlergiaDto ): Promise<AlergiasEntity> {
    const alergias = await prisma.alergias.create({
      data: createAlergiaDto!
    });

    return AlergiasEntity.fromObject( alergias );
  }

  async getAll(): Promise<AlergiasEntity[]> {
    const alergiass = await prisma.alergias.findMany();
    return alergiass.map( alergias => AlergiasEntity.fromObject(alergias) );
  }

  async findById( id: number ): Promise<AlergiasEntity> {
    const alergias = await prisma.alergias.findFirst({
      where: { id }
    });

    if ( !alergias ) throw `Alergias with id ${ id } not found`;
    return AlergiasEntity.fromObject(alergias);
  }

  async updateById( updateAlergiaDto: UpdateAlergiaDto ): Promise<AlergiasEntity> {
    await this.findById( updateAlergiaDto.id );
    
    const updatedAlergias = await prisma.Alergias.update({
      where: { id: updateAlergiaDto.id },
      data: updateAlergiaDto!.values
    });

    return AlergiasEntity.fromObject(updatedAlergias);
  }

  async deleteById( id: number ): Promise<AlergiasEntity> {
    await this.findById( id );
    const deleted = await prisma.Alergias.delete({
      where: { id }
    });

    return AlergiasEntity.fromObject( deleted );
  }

}