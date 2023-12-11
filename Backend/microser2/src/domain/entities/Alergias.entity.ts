
export class AlergiasEntity {

    constructor(
        public  id: number,
        public  nombreAlergias: string,
        public  detalleTratamiento?: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): AlergiasEntity {
      const { id, nombreAlergias,detalleTratamiento } = object;
      if ( !id ) throw 'Id is required';
      if ( !nombreAlergias ) throw 'nombreAlergia is required';
      if ( !detalleTratamiento ) throw 'detalleTratamiento is required';
  
        return new AlergiasEntity(id, nombreAlergias, detalleTratamiento)
    }
  
  }