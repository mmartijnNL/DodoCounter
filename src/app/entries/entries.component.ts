import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEntries();
    
  }

  //subscribe to entries from the backend via rest.service
  getEntries(){
    this.entries = [];
    this.rest.getEntries().subscribe((data: {}) => {
      console.log(data);
      this.entries = data;
    });
  }

}
