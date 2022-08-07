import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private http: HttpClient
  ) {
    this.form = new FormGroup({
      Nom: new FormControl(),
      Prénom: new FormControl(),
      Email: new FormControl(),
      Entreprise: new FormControl(),
      Message: new FormControl(),
      Téléphone: new FormControl(),
      Sujet: new FormControl(),
      
    });
     this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
   }

  ngOnInit(): void {
  }


  scrollToElement($element: any): void {
      $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  
  // nom: string ='';
  // prenom: string ='';
  // email: string ='';

  
  // entreprise: string ='';
  // telephone: string ='';
  // sujet: string ='';

  // message: string ='';
  

  
  
  public sendEmail() {
    var email: any = {};
    email.message = this.form.value;
    email.sujet = this.form.value.sujet;


    let apiUrl="https://email-server-presco.herokuapp.com/api/send-email"
    this.http.post(apiUrl,email).subscribe((response: any)=>{
      console.log(response);
    })
    // e.preventDefault();
    // e.target.user_email = 'sekrafinawfel@gmail.com';
    // e.target.user_name = 'Site Presco Conculting';
    // e.target.message = `Nom & Prénom: ${this.nom + ' ' + this.prenom},<br/> Email: ${this.email}, Entreprise: ${this.entreprise}, Telephone: ${this.telephone}, Sujet: ${this.sujet}, Message: ${this.message}` ;
    // console.log(e);
    // emailjs.sendForm('service_vevj2cp', 'template_c5i7lau', e.target as HTMLFormElement, 'Z_9aGY5Wd9EmVOGOP')
    //   .then((result: EmailJSResponseStatus) => {
    //     console.log(result.text);
    //   }, (error: any) => {
    //     console.log(error.text);
    //   });
  }
}
