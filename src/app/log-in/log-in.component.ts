import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  token:any;

  constructor(public auth:AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login(emailAddress:string,passWord:string)
  {
    this.auth.authenticate(emailAddress,passWord).subscribe((data: {}) => {
      console.log(data);
      this.token = data;
    });
  }

}
