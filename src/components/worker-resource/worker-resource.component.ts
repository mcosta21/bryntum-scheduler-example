import { Resource } from 'src/models/Resource';
import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-worker-resource',
  templateUrl: 'worker-resource.component.html',
  styleUrls: ['worker-resource.component.css']
})
export class WorkerResourceComponent implements OnInit {
  @Input()
  public resource: Resource;

  constructor() {
  }

  ngOnInit(): void {
  }

}
