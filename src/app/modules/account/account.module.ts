import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountViewComponent } from './pages/account-view/account-view.component';
import { AttractionsInParisComponent } from './pages/account-view/attractions-in-paris/attractions-in-paris.component';
import { AttractionsInMarseilleComponent } from './pages/account-view/attractions-in-marseille/attractions-in-marseille.component';
import { AttractionsInLionComponent } from './pages/account-view/attractions-in-lion/attractions-in-lion.component';
import { AttractionsInNantesComponent } from './pages/account-view/attractions-in-nantes/attractions-in-nantes.component';
import { AttractionsInAnkaraComponent } from './pages/account-view/attractions-in-ankara/attractions-in-ankara.component';
import { AttractionsInKonyaComponent } from './pages/account-view/attractions-in-konya/attractions-in-konya.component';
import { AttractionsInAntaylaComponent } from './pages/account-view/attractions-in-antayla/attractions-in-antayla.component';
import { AttractionsInMadridComponent } from './pages/account-view/attractions-in-madrid/attractions-in-madrid.component';
import { AttractionsInBarcelonaComponent } from './pages/account-view/attractions-in-barcelona/attractions-in-barcelona.component';
import { AttractionsInSevillaComponent } from './pages/account-view/attractions-in-sevilla/attractions-in-sevilla.component';
import { AttractionsInWarsawComponent } from './pages/account-view/attractions-in-warsaw/attractions-in-warsaw.component';
import {AttractionsInfoComponent} from "./pages/account-view/attractions-info/attractions-info.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccountViewComponent,
    AttractionsInParisComponent,
    AttractionsInMarseilleComponent,
    AttractionsInLionComponent,
    AttractionsInNantesComponent,
    AttractionsInAnkaraComponent,
    AttractionsInKonyaComponent,
    AttractionsInAntaylaComponent,
    AttractionsInMadridComponent,
    AttractionsInBarcelonaComponent,
    AttractionsInSevillaComponent,
    AttractionsInWarsawComponent,
    AttractionsInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccountModule { }
