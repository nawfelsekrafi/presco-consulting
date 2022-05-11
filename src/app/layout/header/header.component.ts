import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private dialog: MatDialog, private router: Router) { }
  menuShowed :boolean = false;

  ngOnInit(): void {
  }

  showMenu() {
    document.getElementById('menu')!.style.visibility = 'visible';
    document.getElementById('menu')!.style.opacity = '1';
    document.getElementById('menu')!.style.height = '70%';
  //  const dialog =  this.dialog.open(MenuModalComponent, {
  //     width: '80vw',
  //     height: '80vh',
  //     maxWidth: '100vw',
  //   });

  //   dialog.afterClosed().subscribe(response => {
  //     if (!response.res)return;
  //     switch(response.res){
  //       case 'accueil':
  //         this.router.navigate(['accueil']);
  //         break;
  //       case 'qsn':
  //         this.router.navigate(['qui-sommes-nous']);
  //         break;
  //       case 'nos-services':
  //         this.router.navigate(['nos-services']);
  //         break;
  //       case 'faq':
  //         this.router.navigate(['faq']);
  //         break;
  //       case 'nous-rejoindre':
  //         this.router.navigate(['nous-rejoindre']);
  //         break;
  //       case 'contactez-nous':
  //         this.router.navigate(['contactez-nous']);
  //         break;
  //       case '': 
  //       break;
  //     }
  //   });
  }

  hideMenu(){
    document.getElementById('menu')!.style.visibility = 'visible';
    document.getElementById('menu')!.style.opacity = '0';
    document.getElementById('menu')!.style.height = '0';
  }

  

  toggleMenu(){
    if(!this.menuShowed){
      this.showMenu();
      this.menuShowed = true;
    }
    else {
      this.hideMenu();
      this.menuShowed = false;
    }
  }

}
