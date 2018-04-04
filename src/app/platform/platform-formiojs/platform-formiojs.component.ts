import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-platform-formiojs',
  templateUrl: './platform-formiojs.component.html',
  styleUrls: ['./platform-formiojs.component.scss']
})
export class PlatformFormiojsComponent implements OnInit {
  formURL: string;
  esTranslation: object;
  frTranslation: object;

  constructor() {
    this.formURL = environment.appUrl + '/translations';
    this.esTranslation = {
      'Submit': 'Enviar',
      'Language': 'Idioma',
      'Translations': 'Traducciones',
      'First Name': 'Tu nombre',
      'Last Name': 'Apellido',
      'Enter your email address': 'Ingrese su dirección de correo electrónico',
      'Enter your first name': 'Ponga su primer nombre',
      'Enter your last name': 'Ingresa tu apellido',
      'Valid Email Address': 'dirección de email válida',
      'Please correct all errors before submitting.': 'Por favor, corrija todos los errores antes de enviar.',
      'required': '{{field}} es requerido.',
      'invalid_email': '{{field}} debe ser un correo electrónico válido.',
      'error': 'Por favor, corrija los siguientes errores antes de enviar.'
    };

    this.frTranslation = {
      'Submit': 'Soumettre',
      'Language': 'La langue',
      'Translations': 'Traductions',
      'First Name': 'Votre nom',
      'Last Name': 'Nom de famille',
      'Enter your first name': 'Entrez votre prénom',
      'Enter your last name': 'Entrez le dernier prénom',
      'Enter your email address': 'Entrez votre adresse email',
      'Valid Email Address': 'Adresse email valable',
      'Please correct all errors before submitting.': 'Veuillez corriger toutes les erreurs avant de les soumettre.',
      'required': '{{field}} est requis.',
      'invalid_email': '{{field}} il doit s\'agir d\'un email valide.',
      'error': 'Veuillez corriger les erreurs suivantes avant de l\'envoyer.'
    };
  }

  ngOnInit() {
    createForm(document.getElementById('CoreRender'), this.formURL , {
      i18n: { 'en': { Submit: 'Complete' } }
    }).then(form => {
      (<any>window).setLanguage = function (lang) {
        form.language = lang;
      };

      // Add Language Objects
      form.addLanguage('es', this.esTranslation );
      form.addLanguage('fr', this.frTranslation );

      // Alternative way to add property
      // form.options.i18n.resources.es = { translation: this.languageEs };
      // form.options.i18n.resources.fr = { translation: this.languageFr };

      form.on('toggleEn', function () {
        (<any>window).setLanguage('en');
      });

      form.on('toggleEs', function () {
        (<any>window).setLanguage('es');
      });

      form.on('toggleFr', function () {
        (<any>window).setLanguage('fr');
      });
    });
  }
}
