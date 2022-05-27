import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDoctor } from '../model/iDoctor';
import { HospitalserviceService } from '../service/hospitalservice.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  
  public doctor:IDoctor = {} as IDoctor;
  constructor(private service:HospitalserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  saveDoctor(){
    this.service.createDoctor(this.doctor).subscribe({
      next: (data)=>{
        alert("DOCTOR ADDED SUCCESSFULLY");
        this.router.navigate(['/']).then();
        
      },
      error: (e)=>{
        this.router.navigate(['/doctors/doctor/add']).then();
        alert("Error occured ! Try again..");

      }
    })
  }

}
