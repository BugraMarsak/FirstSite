import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private articleMService:ArticleService) { }
  addForm:FormGroup;
  ngOnInit(): void {
    this.createAddForm();
  }
  createAddForm(){
    let userId:number = +localStorage.getItem("userId")
    this.addForm= this.formBuilder.group({
      userId:[userId,Validators.required],
      title:["",Validators.required],
      article:["",Validators.required],
      decklist:[""]

    })

  }

  add(){
    if(this.addForm.valid){
      let articleModel=Object.assign({},this.addForm.value);
      this.articleMService.add(articleModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı!");
      }); 
    }
    else{
      this.toastrService.error("formunuz eksik","Dikkat!")
    }
    
  }
}
