import { Component, OnInit } from '@angular/core';
import { DoctorService } from "../../services/Doctor.service";
import { Doctor } from "../../models/Doctor.models";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  datos: Doctor[] = [];
  DoctorForm: FormGroup;
  UpdateDoctorForm: FormGroup;
  doctorSeleccionado: any = null;
  buscarTexto: string = '';

  constructor(
    private DoctorService: DoctorService,
    private formbuilder: FormBuilder
  ) {
    this.DoctorForm = this.formbuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      correo: ['', Validators.required],
     
    });

    this.UpdateDoctorForm = this.formbuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      especialidad: ['', Validators.required],
      correo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ObtenerDatos();
  }

  ObtenerDatos() {
    this.DoctorService.getAllData().subscribe(datos => {
      this.datos = datos;
    });
  }


  AgregarDatos() {
    if (this.DoctorForm.valid) {
      // Obtener los datos del formulario
      let paciente = this.DoctorForm.value;
  
      // Convertir DoctorId a número si existe
      paciente = {
        ...paciente,
        DoctorId: paciente.DoctorId ? parseInt(paciente.DoctorId, 10) : null
      };
  
      // Enviar la solicitud al backend
      this.DoctorService.postData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.DoctorForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }
  

  EliminarDatos(id: any) {
    this.DoctorService.deleteData(id).subscribe(response => {
      console.log('Cita médica eliminada exitosamente:', response);
      this.ObtenerDatos();
    });
  }

  UpdateDatos() {
    if (this.UpdateDoctorForm.valid) {
      const paciente = this.UpdateDoctorForm.value;
      this.DoctorService.updateData(paciente).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.UpdateDoctorForm.reset();
          this.ObtenerDatos();
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

  ObtenerDatosE(datoO: Doctor) {
    this.doctorSeleccionado = datoO;
    console.log(this.doctorSeleccionado.id);
    this.UpdateDoctorForm.patchValue(datoO);
  }
}
