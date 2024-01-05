// src/app/medecin-add/medecin-add.component.ts
import { Component, OnInit } from '@angular/core';
import { Medecin } from '../medecin.model';
import { MedecinService } from '../medecin.service';

@Component({
  selector: 'app-medecin-add',
  templateUrl: './medecin-add.component.html',
  styleUrls: ['./medecin-add.component.css'],
})
export class MedecinAddComponent implements OnInit {
  medecin = {
    name: '',
    specialty: '',
    address: '',
    contact: '',
    id: '',
  };
  submitted = false;

  constructor(private medecinService: MedecinService) {}
  ngOnInit(): void {
  }
  saveMed(): void {
    const data = {
      id: this.medecin.id,
      name: this.medecin.name,
      speciality: this.medecin.specialty,
      contact: this.medecin.contact,
      address: this.medecin.address,



    };

    this.medecinService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }

  newmed(): void {
    this.submitted = false;
    this.medecin = {
      id: '',
      name: '',
      contact: '',
      address: '',
      specialty:''
    };
  }



}
