export class ConsultorioEntity {

    constructor(
        public numeroPiso: string,
        public numeroPuerta: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): ConsultorioEntity {
      const { numeroPiso, numeroPuerta} = object;
      if ( !numeroPiso ) throw 'numeroPiso is required';
      if ( !numeroPuerta ) throw 'numeroPuerta is required';
    
        return new ConsultorioEntity(numeroPiso, numeroPuerta)
    }
  
  }