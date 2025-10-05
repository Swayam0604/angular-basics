import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';


@Component({
  selector: 'app-q',
  imports: [  ],
  templateUrl: './q.component.html',
  styleUrl: './q.component.css'
})
export class QComponent {

  @Input() data = '';
  @ViewChild('inputBox') inputBox!:ElementRef;
  constructor() { 
    console.log("Constructor", this.data);
  }

  ngOnInit() {
    console.log("ngOnInit", this.data);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChanges", changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit",this.inputBox);
    this.inputBox.nativeElement.focus();
    this.inputBox.nativeElement.value="ABC";
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  
}
