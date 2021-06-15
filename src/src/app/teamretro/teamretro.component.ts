import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamretro',
  templateUrl: './teamretro.component.html',
  styleUrls: ['./teamretro.component.css']
})
export class TeamretroComponent implements OnInit {

  retroname:string
  isViewMode:Boolean
  sectionname1:string
  sectionname2:string
  sectionname3:string
  textarea:string
  textarea2:string
  textarea3:string

  constructor() {

  this.retroname="Daily-Retrospective"
  this.isViewMode=true
  this.sectionname1="What Went Well"
  this.sectionname2="What can be improved"
  this.sectionname3="Action Items"
  this.textarea=""
  this.textarea2=""
  this.textarea3=""
   }


   toggleModeforEmpform():void{
    this.isViewMode=!this.isViewMode
    
    }


    textAreasList:any = [];

    addTextarea(){        
        this.textAreasList.push('text_area'+ (this.textAreasList.length + 1));
    }


      removeTextArea(index: any){
          this.textAreasList.splice(index, 1);
      }


  ngOnInit(): void {
  }

}
