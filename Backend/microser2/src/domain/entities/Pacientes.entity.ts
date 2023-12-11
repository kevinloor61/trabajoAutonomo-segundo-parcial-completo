export class PacientesEntity {

    constructor(
        public  id: number,
        public nombre: string,
        public apellido: string,
        public cedula: string,
        public genero: string,
        public estado: string,
        public alergiaId?: number,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): PacientesEntity {
      const { id, nombre, apellido, cedula, genero, estado, alergiaId } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombre ) throw 'nombre is required';
      if ( !apellido ) throw 'apellido is required';
      if ( !cedula ) throw 'cedula is required';
      if ( !genero ) throw 'genero is required';
      if ( !estado ) throw 'estado is required';
      if ( !alergiaId) throw 'alergiaId is required';
  
        return new PacientesEntity(id, nombre, apellido, cedula, genero, estado, alergiaId)
    }
  
  }


