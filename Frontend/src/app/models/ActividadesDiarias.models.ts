// En el archivo paciente.model.ts
export interface ActividadesDiarias {
    id: number,
    nombreActividad: string,
    fechaActividad: Date,
    doctorId: string,
    detalleActividad?: string,
  }