import { prisma } from '../../data/postgres';
import { CreateDoctorDto, DoctorDatasource, DoctorEntity, UpdateDoctorDto } from '../../domain';


export class  DoctorDatasourceImpl implements DoctorDatasource {

  async create( createDoctorDto: CreateDoctorDto ): Promise<DoctorEntity> {
    const doctor = await prisma.doctor.create({
      data: createDoctorDto!
    });

    return DoctorEntity.fromObject( doctor );
  }

  async getAll(): Promise<DoctorEntity[]> {
    const doctors = await prisma.doctor.findMany();
    return doctors.map( doctor => DoctorEntity.fromObject(doctor) );
  }

  async findById( id: number ): Promise<DoctorEntity> {
    const doctor = await prisma.doctor.findFirst({
      where: { id }
    });

    if ( !doctor ) throw `doctor with id ${ id } not found`;
    return DoctorEntity.fromObject(doctor);
  }

  async updateById( updateDoctorDto: UpdateDoctorDto ): Promise<DoctorEntity> {
    await this.findById( updateDoctorDto.id );
    
    const updatedDoctor = await prisma.doctor.update({
      where: { id: updateDoctorDto.id },
      data: updateDoctorDto!.values
    });

    return DoctorEntity.fromObject(updatedDoctor);
  }

  async deleteById( id: number ): Promise<DoctorEntity> {
    await this.findById( id );
    const deleted = await prisma.doctor.delete({
      where: { id }
    });

    return DoctorEntity.fromObject( deleted );
  }

}