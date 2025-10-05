import { Component } from '@angular/core';
import { QComponent } from "../q/q.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-p',
  imports: [QComponent, CommonModule],
  templateUrl: './p.component.html',
  styleUrl: './p.component.css'
})
export class PComponent {
  parentData = 'Data from Parent Component P';
  showChild :boolean = true;
  changeParentData(data:string){
  this.parentData=data;
  }
  
  changeShowChild(){
    this.showChild = !this.showChild;
  }
}
