import { Component, Input, Output, OnInit, ElementRef, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-worker-resource',
  templateUrl: 'worker-resource.component.html',
  styleUrls: ['worker-resource.component.css']
})
export class WorkerResourceComponent implements OnInit {
  @Input() public id: string;
  @Input() public name: string;
  @Input() public charge: string;
  @Input() public photo: string;
  @Output() public cardClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() public addResource: EventEmitter<string> = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('click') onClick() { 
    this.elementRef.nativeElement
      .addEventListener('cardClicked', (event:CustomEvent) => { 
        console.log(event)
        alert('event: ' + event.detail); 
    });
  }

  public onCardClicked(){
    console.log('card-clicked')
    this.cardClicked.emit(this.name);
  }

  public onAddResource(){
    console.log('add-resource')
    this.addResource.emit('add-resource')
  }

}
