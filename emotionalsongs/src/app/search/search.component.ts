import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { CanzoniService } from '../canzoni.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent  {
  displayedColumns: string[] = ['id', 'Titolo', 'Autore', 'Anno'];
  dati: any[]=[];
  selectedOption:string = "0";



  constructor(public canzone: CanzoniService,private route: ActivatedRoute) {}

  
  
    ricercaCanzone(ricerca: HTMLInputElement, opzioneSelezionata: string) {
      // Esegui la richiesta al servizio CanzoniService per ottenere i dati
      if()
      this.canzone.getSearch(ricerca.value, true, true, true).subscribe((response: any) => {
        this.dati = response; // Assegna i dati ottenuti dalla risposta HTTP all'array dati
      });
    }

  

  
}
