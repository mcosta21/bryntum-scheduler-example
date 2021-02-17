import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MessageService } from 'src/services/message.service';

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

  constructor(private messenger: MessageService) {
  }

  ngOnInit(): void {
  }

  public onCardClicked() {
    this.messenger.broadcast('menuClicked', this.name);
  }

  public onAddResource() {
    this.messenger.broadcast('resourceAdded', 'ahoy!');
  }

}
