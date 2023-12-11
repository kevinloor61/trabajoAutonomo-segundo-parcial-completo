import { prisma } from '../../data/postgres';
import { CreateCitaDto, CitaDatasource, CitaEntity, UpdateCitaDto } from '../../domain';


export class  CitaDatasourceImpl implements CitaDatasource {

  async create( createCitaDto: CreateCitaDto ): Promise<CitaEntity> {
    const cita = await prisma.cita.create({
      data: createCitaDto!
    });

    return CitaEntity.fromObject( cita );
  }

  async getAll(): Promise<CitaEntity[]> {
    const citas = await prisma.cita.findMany();
    return citas.map( cita => CitaEntity.fromObject(cita) );
  }

  async findById( id: number ): Promise<CitaEntity> {
    const cita = await prisma.cita.findFirst({
      where: { id }
    });

    if ( !cita ) throw `Cita with id ${ id } not found`;
    return CitaEntity.fromObject(cita);
  }

  async updateById( updateCitaDto: UpdateCitaDto ): Promise<CitaEntity> {
    await this.findById( updateCitaDto.id );
    
    const updatedCita = await prisma.cita.update({
      where: { id: updateCitaDto.id },
      data: updateCitaDto!.values
    });

    return CitaEntity.fromObject(updatedCita);
  }

  async deleteById( id: number ): Promise<CitaEntity> {
    await this.findById( id );
    const deleted = await prisma.cita.delete({
      where: { id }
    });

    return CitaEntity.fromObject( deleted );
  }

}