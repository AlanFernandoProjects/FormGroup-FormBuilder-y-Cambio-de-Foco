import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   cars: any = [{
    vin: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdadasdasdadasdasdasd',
    year: 'asdasd',
    brand: 'asdasd',
    color: 'asdasd'
  }];

  formulario = new FormGroup({
    nombre: new FormControl(''),
    apePaterno: new FormControl(''),
    apeMaterno: new FormControl(''),
    checkPrueba: new FormControl(''),
    combo: new FormControl(''),
  });

  rows = [];
  message = '';

  constructor(private fb: FormBuilder) {
   this.cargarFormularioDefecto();
   this.rows = this.getRows();
  }

  getRows() {
    const result = [];
    for (let i = 1; i<=30; i++) {
      result.push({value: i});
    }
    return result;
  }

  cargarFormularioDefecto() {
    this.formulario = this.fb.group({
      nombre: [{value: '', disabled: false}],
      apePaterno: [{ value: '', disabled: true}],
      apeMaterno: [{ value: '', disabled: true}],
      checkPrueba: [{value: 0, disabled: false}],
      combo: [{ value: '0', disabled: false}]
  });
    return this.formulario;
  }

  agregar(formulario: JSON) {
    const datos = {
      nombre: this.formulario.get('nombre').value,
      apePaterno: this.validarVacio(this.formulario.get('apePaterno').value),
      apeMaterno: this.validarVacio(this.formulario.get('apeMaterno').value),
      checkPrueba: +this.formulario.get('checkPrueba').value,
      combo: this.formulario.get('combo').value
    }
    console.log(datos);
  }

  validarVacio(valFormulario: string): string {
    let valForm;

    if (valFormulario === '') {
      valForm = 0;
    } else {
      valForm = valFormulario;
    }
    return valForm;
  }

  cambiarFoco( elemDest: string, elemDestForm: any, elemOrigForm?: any[]): void {
    elemDestForm.enable();
    document.getElementById(elemDest).focus();
    if (elemOrigForm) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < elemOrigForm.length; i++) {
          elemOrigForm[i].disable();
      }
    }
 }

  resetForm(elemFocoPrincipal: string): void {
    this.cambiarFoco('nombre', this.formulario.get('nombre'),
    [
      this.formulario.get('apePaterno'),
      this.formulario.get('apeMaterno')
    ]);
    this.cargarFormularioDefecto();
  }
}
