import { chapterModel } from "./chapter.model";
import { competencesModel } from "./competences.model";
import { preriquisiteModel } from "./preriquisite.model";
import { teacherModel } from "./teacher.model";

export class CourseModel {

 id: number;
 title: string;
 text:string;
 chapters: chapterModel[];
 follow: boolean;
 preriquisite: preriquisiteModel[];
 competences: competencesModel[];
 teachers: teacherModel[];
 image:string;


 constructor(id:number,title:string,text:string,chapters:chapterModel[],follow: boolean, preriquisite: preriquisiteModel[],
    competence:competencesModel[],teachers:teacherModel[],image:string){
    
    this.id = id;
    this.title = title;
    this.text = text;
    this.chapters = chapters;
    this.follow = follow;
    this.preriquisite = preriquisite;
    this.competences = competence;
    this.teachers = teachers;
    this.image = image;
    
    }


}
