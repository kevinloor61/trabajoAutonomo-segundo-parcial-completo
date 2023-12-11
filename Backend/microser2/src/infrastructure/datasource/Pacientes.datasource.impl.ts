import { prisma } from '../../data/postgres';
import { CreatePacienteDto, PacientesDatasource, PacientesEntity, UpdatePacienteDto } from '../../domain';


export class  PacientesDatasourceImpl implements PacientesDatasource {

  async create( createPacienteDto: CreatePacienteDto ): Promise<PacientesEntity> {
    const paciente = await prisma.paciente.create({
      data: createPacienteDto!
    });

    return PacientesEntity.fromObject( paciente );
  }

  async getAll(): Promise<PacientesEntity[]> {
    const pacientes = await prisma.paciente.findMany();
    return pacientes.map( paciente => PacientesEntity.fromObject(paciente) );
  }

  async findById( id: number ): Promise<PacientesEntity> {
    const paciente = await prisma.paciente.findFirst({
      where: { id }
    });

    if ( !paciente ) throw `paciente with id ${ id } not found`;
    return PacientesEntity.fromObject(paciente);
  }

  async updateById( updatePacienteDto: UpdatePacienteDto ): Promise<PacientesEntity> {
    await this.findById( updatePacienteDto.id );
    
    const updatedPacientes = await prisma.paciente.update({
      where: { id: updatePacienteDto.id },
      data: updatePacienteDto!.values
    });

    return PacientesEntity.fromObject(updatedPacientes);
  }

  async deleteById( id: number ): Promise<PacientesEntity> {
    await this.findById( id );
    const deleted = await prisma.paciente.delete({
      where: { id }
    });

    return PacientesEntity.fromObject( deleted );
  }

}