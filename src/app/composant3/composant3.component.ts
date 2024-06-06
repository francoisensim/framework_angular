
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-composant3',
  standalone: true,
  templateUrl: './composant3.component.html',
  styleUrl: './composant3.component.css'
  
})
export class Composant3Component {
  @Input()  paragraphe : string = '' ; 
  @Input()  title : string = '' ; 

}
