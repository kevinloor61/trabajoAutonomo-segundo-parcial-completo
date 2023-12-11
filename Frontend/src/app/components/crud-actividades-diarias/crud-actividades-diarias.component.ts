import { Component, OnInit } from '@angular/core';
import { ActividadesDiariasService } from "../../services/ActividadesDiarias.service";
import { ActividadesDiarias } from "../../models/ActividadesDiarias.models";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-actividades-diarias',
  templateUrl: './crud-actividades-diarias.component.html',
  styleUrl: './crud-actividades-diarias.component.css'
})
export class CrudActividadesDiariasComponent {
  datos:ActividadesDiarias[] = [];
 ActividadesDiariasForm: FormGroup;
  UpdateActividadesDiariasForm: FormGroup;
 ActividadesDiariasSeleccionado: any = null;
  buscarTexto: string = '';

  constructor(
    private ActividadesDiariasService:ActividadesDiariasService,
    private formbuilder: FormBuilder
  ) {
    this.ActividadesDiariasForm = this.formbuilder.group({
      nombreActividad: ['', Validators.required],
      detalleActividad: ['', Validators.required],
      fechaActividad: ['', Validators.required],
      doctorId: ['', Validators.required],
     
    });

    this.UpdateActividadesDiariasForm = this.formbuilder.group({
      id: ['', Validators.required],
      nombreActividad: ['', Validators.required],
      detalleActividad: ['', Validators.required],
      fechaActividad: ['', Validators.required],
      doctorId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this.ActividadesDiariasService.getAllData().subscribe(datos => {
      this.datos = datos;
    });
  }


  AgregarDatos() {
    if (this.ActividadesDiariasForm.valid) {
      // Obtener los datos del formulario
      let paciente = this.ActividadesDiariasForm.value;
  
      // ConvertirActividadesDiariasId a número si existe
      paciente = {
        ...paciente,
       ActividadesDiariasId: paciente.ActividadesDiariasId ? parseInt(paciente.ActividadesDiariasId, 10) : null
      };
  
      // Enviar la solicitud al backend
      this.ActividadesDiariasService.postData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.ActividadesDiariasForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }
  

  EliminarDatos(id: any) {
    this.ActividadesDiariasService.deleteData(id).subscribe(response => {
      console.log('Cita médica eliminada exitosamente:', response);
      this.ObtenerDatos();
    });
  }

  UpdateDatos() {
    if (this.UpdateActividadesDiariasForm.valid) {
      const paciente = this.UpdateActividadesDiariasForm.value;
      this.ActividadesDiariasService.updateData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.UpdateActividadesDiariasForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

  ObtenerDatosE(datoO:ActividadesDiarias) {
    this.ActividadesDiariasSeleccionado = datoO;
    console.log(this.ActividadesDiariasSeleccionado.id);
    this.UpdateActividadesDiariasForm.patchValue(datoO);
  }
}
