import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.css']
})
export class ListeCoursComponent implements OnInit {
  cours: any[] = [];

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.coursService.getCours().subscribe(data => {
      this.cours = data;
    });
  }
}
