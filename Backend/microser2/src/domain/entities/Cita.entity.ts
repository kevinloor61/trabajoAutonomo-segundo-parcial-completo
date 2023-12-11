export class CitaEntity {

    constructor(
        public  id: number,
        public  pacienteId:number,
        public  doctorId: number,
        public  consultorioId: number,
     
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CitaEntity {
      const { id, pacienteId, doctorId, consultorioId } = object;
      if ( !id ) throw 'Id is required';
      if ( !pacienteId ) throw 'pacienteId is required';
      if ( !doctorId ) throw 'DoctorId is required';
      if ( !consultorioId ) throw 'consultorioId is required';
  
        return new CitaEntity(id, pacienteId, doctorId, consultorioId)
    }
  
  }