import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashpord',
  templateUrl: './dashpord.component.html',
  styleUrl: './dashpord.component.scss'
})
export class DashpordComponent implements OnInit{
  performanceData = {
    views: 25000,
    clicks: 20000,
    subscribed: 15300,
  };

  constructor() { }

  ngOnInit(): void { }

}
