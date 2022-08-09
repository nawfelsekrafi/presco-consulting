import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-send-devis',
  templateUrl: './send-devis.component.html',
  styleUrls: ['./send-devis.component.css'],
})
export class SendDevisComponent implements OnInit {
  
  contact: boolean = false;
  devis: boolean = false;
  email: any;
  phone: any;
  message: any;
  formation: any;
  captcha = false;
  // this is used for Google Recaptcha v2
  siteKey: string = '';
  constructor(
    public ref: MatDialogRef<SendDevisComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    if(data.task == 'devis'){
      this.devis = true;
      this.contact = false
    }
    else if(data.task =='contact'){
      this.devis = false;
      this.contact = true;
    }
    this.formation = data.formation;
    this.siteKey = '6LdNOqocAAAAADgo2zcsO4lp5MJV8HaIhngDFZZP';
  }

  ngOnInit(): void {}

  Submit(){
    if(this.captcha){
      
    if(this.contact){
      if(this.email && this.phone && this.message ){
      this.ref.close(
        {
          "task":"contact",
          "email": this.email,
          "phone": this.phone,
          "message": this.message,
          "formation": this.formation
        }
      )
    }else {
      let btn1 = document.getElementById('swal1');
      btn1?.click();
    }
    }
    else{
      if(this.email && this.phone ){
      this.ref.close(
        {
          "task":"devis",
          "email": this.email,
          "phone": this.phone,
          "formation": this.formation
        }
      )}
      else{
        let btn1 = document.getElementById('swal1');
        btn1?.click();
      }
    }
  }
  else{
    let btn = document.getElementById('swal');
    btn?.click();
    // alert("Cocher le bouton Je ne suis pas un robot S'il vous plait! 🤖⛔");
   
  }
    
  }

  resolved(event: any) {
    this.captcha = true;
  }
}
