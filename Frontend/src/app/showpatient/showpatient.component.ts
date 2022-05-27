import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPatient } from '../model/iPatient';
import { HospitalserviceService } from '../service/hospitalservice.service';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',
  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {
  public id:number | null= null ;
  public patient:IPatient = {} as IPatient;
  public errorMessage:string|null = null;

  constructor(private service:HospitalserviceService , private router :Router) { }

  ngOnInit(): void {
    
  }
  showPatientInfo(){
    if(this.id == null){
    
    }
    else if(this.id){
      this.service.getPatient(this.id).subscribe({
        next : (data)=>{
          this.patient = data;
        },
        error : (e)=>{
          
          this.errorMessage = " Id not present in database";
          alert(this.errorMessage);
        }

      });
    }
    }
  
  }
