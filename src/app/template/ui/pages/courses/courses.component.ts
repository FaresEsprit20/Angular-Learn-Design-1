import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fadein.animation';

import { chapterModel } from 'src/app/core/models/chapter.model';
import { competencesModel } from 'src/app/core/models/competences.model';
import { CourseModel } from 'src/app/core/models/course.model';
import { preriquisiteModel } from 'src/app/core/models/preriquisite.model';
import { teacherModel } from 'src/app/core/models/teacher.model';
import { SearchService } from 'src/app/core/services/search.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {


  public data:CourseModel[];
  query:string | undefined;

  @ViewChild('searchinput', { static: true }) searchElement: ElementRef;
  mysearch: string = "";


  constructor(searchElementRef: ElementRef) {
    this.data = [
      new CourseModel(1,"Créez des animations CSS","Vous allez plonger dans le monde des animations CSS pour donner vie à vos pages web !",
       [new chapterModel(1,"coo","text")],false,
       [new preriquisiteModel(2,"Programmation JavaScript","Programmation JavaScript","Learn Java Script !")],
       [ new competencesModel("Savoir Faire des animations")], [ new teacherModel(52,"Laura DuFont") ],
       "assets/images/lessons/css.jpeg","https://www.youtube.com/embed/lOox4UJVFb4"),

      new CourseModel(2,"Programmer avec JavaScript","Ce cours est conçu pour vous enseigner les bases du langage de programmation JavaScript.",
       [new chapterModel(1,"coo","text")],false,
       [new preriquisiteModel(1,"Programmation html/css","Programmation html/css","Learn Html/Css !")],
       [ new competencesModel("Savoir le language Java Script")], [ new teacherModel(53,"Will Alexander") ],
        "assets/images/lessons/js.jpeg","https://www.youtube.com/embed/lOox4UJVFb4"),

      new CourseModel(3,"Les fondamentaux de Swift","Découvrez le développement iOS et réalisez des applications taillées pour l'iPhone et l'iPad !",
       [new chapterModel(1,"coo","text")],false,
       [new preriquisiteModel(2,"Programmation ","Programmation ","Learn Swift !")],
       [ new competencesModel("Savoir programmer pour Iphone et Ipad")], [ new teacherModel(54,"Jamie Sutherland") ],
         "assets/images/lessons/swift.jpeg","https://www.youtube.com/embed/lOox4UJVFb4"),
    ];
    this.searchElement = searchElementRef;
   }

  ngOnInit(): void {
  
  }

  searchme() {
    this.mysearch = this.searchElement.nativeElement.value;
    console.log(this.mysearch);
  }


}
