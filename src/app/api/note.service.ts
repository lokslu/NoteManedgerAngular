import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Note } from '../Models/note';

@Injectable()
export class NoteService {
  constructor(private http: HttpClient) {}
  
  private strAPI ="http://localhost:5000/api/Note";
  

  getnote(userid:number){
    return this.http.get(this.strAPI+"/"+userid);
  }

    createnote(note:Note)
    { 
      const params = new HttpParams()
        .set("id", note.userId.toString())
      return this.http.post(this.strAPI, note, { params });
    }
    updatenote(note:Note){
        return this.http.put(this.strAPI,note);
    }
    ordering(notes:Note[]){
      
        return this.http.put(this.strAPI,notes);
    }
    deletenote(id:number)
    {
      const params = new HttpParams()
      .set("id", id.toString())
          return this.http.delete(this.strAPI,{params});

    }
}
