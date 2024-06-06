import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ecran3composant3',
  standalone: true,
  imports: [],
  templateUrl: './ecran3composant3.component.html',
  styleUrl: './ecran3composant3.component.css'
})
export class Ecran3composant3Component {
@Input() imageurl1:string = '';
@Input() imageurl2:string = '';
@Input() buton1:string = '';
@Input() buton2:string = '';




showAlert() {
  alert(this.buton1);
}
}
