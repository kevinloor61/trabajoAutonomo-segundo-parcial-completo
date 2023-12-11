
export class ActividadesDiariasEntity {

    constructor(
        public id: number,
        public nombreActividad: string,
        public fechaActividad: Date,
        public doctorId: number,
        public detalleActividad?: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): ActividadesDiariasEntity {
      const { id, nombreActividad, fechaActividad, doctorId, detalleActividad } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombreActividad ) throw 'nombreActividad is required';
      if ( !fechaActividad ) throw 'fechaActividad is required';
      if ( !doctorId ) throw 'doctorId is required';
      if ( !detalleActividad ) throw 'deatalleActividad is required';
  
        return new ActividadesDiariasEntity(id, nombreActividad, fechaActividad, doctorId, detalleActividad)
    }
  
  }