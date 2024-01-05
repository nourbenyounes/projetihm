// src/app/listemed/listemed.component.ts
import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../medecin.service';

@Component({
  selector: 'app-listemed',
  templateUrl: './listemed.component.html',
  styleUrls: ['./listemed.component.css'],
})
export class ListemedComponent implements OnInit {
  medecins: any[] = [];

  constructor(private medecinService: MedecinService) {}

  ngOnInit(): void {
    this.medecinService.getMedecins().subscribe((data) => {
      this.medecins = data;
    });
  }
  deleteMedecin(id: string): void {
    this.medecinService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          // Handle successful deletion, e.g., update the medecins array
        },
        error: (e) => console.error(e)
      });
  }
}
