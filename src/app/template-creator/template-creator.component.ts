import { Component, OnInit } from '@angular/core';
import { type } from '../object-form/object-form.model';
import { TemplateCreatorService } from '../template-creator.service';
import { Programs, types } from './template-creator.model';
import { ConfirmationService } from 'primeng/api/public_api';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-template-creator',
  templateUrl: './template-creator.component.html',
  styleUrls: ['./template-creator.component.scss']
})
export class TemplateCreatorComponent implements OnInit {
  
  types: types[]; 
  program_types: Programs[];
  checked: boolean;
  name: string;
  placeholder: string;
  value: string = "";
  label: string;
  datatype : types;
  progtype : Programs;


  
  constructor(private templateCreator : TemplateCreatorService) {
    this.types = [
      {obj_type:"text"},
      
    ],
    this.program_types = [
      {prog_type:"BS"},
      {prog_type:"MS"}

    ]
   }
   ChangingValue() {
   

   
  }

  
  addTemplate()
  {
    
    //console.log(this.drop.obj_type)
    const obj = {
      id : "",
      type : this.datatype.obj_type,
      required : this.checked,
      name : this.name,
      placeholder : this.placeholder,
      value : this.value,
      label : this.label
    }

    console.log("Asd" , this.progtype.prog_type);
    
    this.templateCreator.updateTemplate(obj , this.progtype.prog_type).subscribe(res =>{
      console.log("DOne Popsd",obj);
      
    })
  }
  ngOnInit() {
    this.datatype = this.types[0];
    this.progtype = this.program_types[0];
  }

}
