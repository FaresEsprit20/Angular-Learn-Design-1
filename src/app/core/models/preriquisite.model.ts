

export class preriquisiteModel {
    
     id: number;
     link: string;
     linkText: string;
     text: string;
  
     constructor(id:number,link:string, linkText:string,text:string){
        this.id = id;
        this.link = link;
        this.linkText = linkText;
        this.text = text;
        }
    }