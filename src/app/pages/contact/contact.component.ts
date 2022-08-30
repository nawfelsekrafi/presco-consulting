import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  captcha = false;
  // this is used for Google Recaptcha v2
  siteKey: string = '';

  constructor(
    private http: HttpClient
    ) {
    this.form = new FormGroup({
      Sujet: new FormControl(),
      Nom: new FormControl(),
      Prénom: new FormControl(),
      Email: new FormControl(),
      Entreprise: new FormControl(),
      Téléphone: new FormControl(),
      Message: new FormControl(),
    });
    this.siteKey = '6LdNOqocAAAAADgo2zcsO4lp5MJV8HaIhngDFZZP';
    this.form.valueChanges.subscribe((value) => {
    });
  }

  ngOnInit(): void {}

  scrollToElement($element: any): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  resolved(event: any) {
    this.captcha = true;
  }

  showSpinner: boolean = false;

  sendEmail() {
    if (this.captcha) {
      if(this.form.value.Email &&this.form.value.Nom && this.form.value.Téléphone && this.form.value.Prénom && this.form.value.Sujet ){
      this.showSpinner=true;
      var email: any = {};
      email.message = this.form.value;
      email.sujet = this.form.value.Sujet;

      let apiUrl = 'https://vercel.com/nawfelsekrafi/presco-email-server/api/send-contact-email';
      this.http.post(apiUrl, email).subscribe((response: any) => {
        if(response && response?.data == "email sent successfully"){
          // alert("votre message a été envoyé avec succès ✅")
          this.showSpinner=false;
          let btn = document.getElementById('swal3');
          btn?.click();
        }
      });
    }else {
      let btn1 = document.getElementById('swal1');
      btn1?.click();
    }
  }

    else{
      let btn = document.getElementById('swal');
    btn?.click();
    //  alert("Cocher le bouton Je ne suis pas un robot S'il vous plait! 🤖⛔");
    }
  }
}
