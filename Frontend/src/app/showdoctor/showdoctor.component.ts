import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../model/iDoctor';
import {HospitalserviceService } from 'src/app/service/hospitalservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdoctor',
  templateUrl: './showdoctor.component.html',
  styleUrls: ['./showdoctor.component.css']
})
export class ShowdoctorComponent implements OnInit {

  public doctor:IDoctor[] = [] ;
  public errorMessage:string | null = null;
  public name:string|null = null;
  public doc:IDoctor = {} as IDoctor; 
  


  constructor(private activatedRoute:ActivatedRoute,private service:HospitalserviceService) { }

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe({
      next :(data)=>{
        this.doctor = data;
      }
    });
  }

  showDoctorDetails(){
    if(this.doc.name){
      console.warn(this.doc.name);
      this.service.getDoctor(this.doc.name).subscribe({
        next: (data)=>{
          console.warn(data);
          this.doc = data;
        },
        error: (e)=>{
          this.errorMessage = e;
        }
      })
    }
  }
  
}


