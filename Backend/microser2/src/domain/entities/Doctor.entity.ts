
export class DoctorEntity {

  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public especialidad: string,
    public correo: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): DoctorEntity {
    const { id, nombre, apellido, especialidad, correo } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';
    if ( !apellido ) throw 'apellido is required';
    if ( !especialidad ) throw 'especialidad ID is required';
    if ( !correo ) throw 'correo is required';

      return new DoctorEntity(id, nombre, apellido, especialidad, correo)
  }

}