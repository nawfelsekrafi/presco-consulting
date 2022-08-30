import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/shared/services/cours.service';
import { SendDevisComponent } from 'src/app/shared/ui/send-devis/send-devis.component';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit, OnDestroy {
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private coursService: CoursService,
    private http: HttpClient
    ) {
      
  }

  cours: any;

  ngOnInit(): void {
    this.cours = null;
    this.getFormationById();
  }

  text:any;

  demandezDevis() {
    const dialogRef = this.dialog.open(SendDevisComponent, {
      width: '500px',
      height: '500px',
      maxWidth: '100vw',
      data: {
        task: 'devis',
        formation: this.cours.nom,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      if (result.task == 'devis') {
        let message = {
          "Email": result.email,
          "Téléphone": result.phone,
          "formation": result.formation,
        };
        this.getFormationById();
        // console.table(message)
        this.sendEmailDevis(message);
      }
    });
  }
  contactezNous() {
    const dialogRef = this.dialog.open(SendDevisComponent, {
      width: '500px',
      height: '500px',
      maxWidth: '100vw',
      data: {
        task: 'contact',
        formation: this.cours.nom ,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      if (result.task == 'contact') {
        let message = {
          "Email": result.email,
          "Téléphone": result.phone,
          "formation": result.formation,
          "Message": result.message
        };
        this.sendEmailContact(message);
        // console.table(message)
        this.getFormationById();
      }
    });
  }

formation: any;
title: any;
  sendEmailDevis(message: any) {
      var email: any = {};
      email.sujet = "Demande Devis Pour "+ message.formation;
       this.formation = message.formation;
      delete message.formation;
      delete message.captcha;
      email.message = message;

      let apiUrl = 'https://vercel.com/nawfelsekrafi/presco-email-server/api/send-devis-email';
      this.http.post(apiUrl, email).subscribe((response: any) => {
        if(response && response?.data == "email sent successfully"){
          this.text = `Demande de Devis a été envoyé avec succès !`;
          this.title='Demande Envoyée 📚🚀';
          let btn = document.getElementById('swal2');
          btn?.click();
        }
      });
  }
  sendEmailContact(message: any) {
      var email: any = {};
      email.sujet = "Email consernant "+ message.formation;
      delete message.formation;
      email.message = message;

      let apiUrl = 'https://vercel.com/nawfelsekrafi/presco-email-server/api/send-contact-email';
      this.http.post(apiUrl, email).subscribe((response: any) => {
        if(response && response?.data == "email sent successfully"){
          let btn = document.getElementById('swal3');
          btn?.click();
        }
      });
  }

  getFormationById(){
    this.route.params
      .subscribe(
        (params: any) => {        
          if( !this.cours){
            this.cours =  this.coursService.getFormations().filter((e:any) => e.id == params['id'] )[0];
          }
          
        }
      );
    }

    ngOnDestroy(){
      this.cours = null;
    }

    


}
