// edit-medecin.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../medecin.service';
import { Medecin } from '../medecin.model';
@Component({
  selector: 'app-edit-medecin',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css'],
})
export class ModifComponent implements OnInit {
  medecin = {
    name: '',
    specialty: '',
    address: '',
    contact: '',
  };
  submitted = false;

  constructor(
    private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedecinById();
  }

  getMedecinById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.medecinService.getMedecinById(id).subscribe({
        next: (medecin:Medecin) => {
          this.medecin = medecin;
        },
      });
    }
  }

  updateMedecin(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.medecinService.update(id, this.medecin).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e),
      });
    }
  }

}
