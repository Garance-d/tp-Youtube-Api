import { Component } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  monFormulaire = new FormGroup({
    nom: new FormGroup('', Validators.required),
  password: new FormGroup('', Validators.required)
  });

  onSubmit() {
    if (this.monFormulaire.valid) {
      const formData ={
        nom: this.monFormulaire.value.nom,
        password: this.monFormulaire.value.password,
      };
      console.log(formData)
      
    } else {
      console.log("Formulaire invalide")
      
    }
  }
}
