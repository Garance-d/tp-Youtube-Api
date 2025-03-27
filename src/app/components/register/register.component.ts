import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  monFormulaire = new FormGroup({
    nom: new FormGroup('', Validators.required),
  password: new FormGroup('', Validators.required),
  email: new FormGroup('', Validators.required)
  });

  onSubmit() {
    if (this.monFormulaire.valid) {
      const formData ={
        nom: this.monFormulaire.value.nom,
        password: this.monFormulaire.value.password,
        email: this.monFormulaire.value.email
      };
      console.log(formData)
      
    } else {
      console.log("Formulaire invalide")
      
    }
  }

}
