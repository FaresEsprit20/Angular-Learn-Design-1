
export class chapterModel {
    private id: number;
    private title: string;
    private text: string;
  }

  export class preriquisiteModel {
    private id: number;
    private link: string;
    private text: string;
  }

  export class competencesModel {
    private id: number;
    private text: string;
  }

  export class teacherModel {
    private id: number;
    private fullname: string;
    private avatar: String;
  }

export class CourseModel {

  private id: number;
  private title: string;
  private chapters: chapterModel[];
  private follow: boolean;
  private preriquisite: preriquisiteModel[];
  private competences: competencesModel[];
  private teachers: teacherModel[];



}
