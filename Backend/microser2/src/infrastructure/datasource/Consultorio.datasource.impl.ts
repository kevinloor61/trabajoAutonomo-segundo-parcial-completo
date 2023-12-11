import { prisma } from '../../data/postgres';
import { CreateConsultorioDto, ConsultorioDatasource, ConsultorioEntity, UpdateConsultorioDto } from '../../domain';


export class  ConsultorioDatasourceImpl implements ConsultorioDatasource {

  async create( createConsultorioDto: CreateConsultorioDto ): Promise<ConsultorioEntity> {
    const consultorio = await prisma.consultorio.create({
      data: createConsultorioDto!
    });

    return ConsultorioEntity.fromObject( consultorio );
  }

  async getAll(): Promise<ConsultorioEntity[]> {
    const consultorio = await prisma.doctor.findMany();
    return consultorio.map( consultorio => ConsultorioEntity.fromObject(consultorio) );
  }

  async findById( id: number ): Promise<ConsultorioEntity> {
    const consultorio = await prisma.consultorio.findFirst({
      where: { id }
    });

    if ( !consultorio ) throw `doctor with id ${ id } not found`;
    return ConsultorioEntity.fromObject(consultorio);
  }

  async updateById( updateConsultorioDto: UpdateConsultorioDto ): Promise<ConsultorioEntity> {
    await this.findById( updateConsultorioDto.id );
    
    const updatedConsultorio = await prisma.consultorio.update({
      where: { id: updateConsultorioDto.id },
      data: updateConsultorioDto!.values
    });

    return ConsultorioEntity.fromObject(updatedConsultorio);
  }

  async deleteById( id: number ): Promise<ConsultorioEntity> {
    await this.findById( id );
    const deleted = await prisma.consultorio.delete({
      where: { id }
    });

    return ConsultorioEntity.fromObject( deleted );
  }

}