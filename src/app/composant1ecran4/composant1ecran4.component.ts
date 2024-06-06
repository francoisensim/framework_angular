import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-composant1ecran4',
  standalone: true,
  imports: [],
  templateUrl: './composant1ecran4.component.html',
  styleUrl: './composant1ecran4.component.css'
})
export class Composant1ecran4Component {

    @Input()  paragraphe : string = '' ; 
 
  
  }


