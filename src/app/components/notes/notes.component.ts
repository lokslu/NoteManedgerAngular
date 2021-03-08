import { Component, OnInit, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgsgOrderChange } from "ng-sortgrid/lib/shared/ngsg-order-change.model";

import { AuthService } from "src/app/api/auth.service";
import { NoteService } from "src/app/api/note.service";

import { Note } from "../../Models/note";
import { AppComponent } from "../../app.component";
@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"],
})
export class NotesComponent implements OnInit {
  bsModalRef: BsModalRef;
  notes: Note[]; //масив заметок
  see: boolean = false; //отображение
  curnote: Note;
  curindex: number;
  check: boolean = false;
  state: string ="loading";

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private noteService: NoteService,
    private app: AppComponent
  ) {}
  GetNotes() {
    //Получение масива заметок
    this.state="loading";
    this.noteService
      .getnote(localStorage.getItem("username"))
      .subscribe((data: Note[]) => {
        this.notes = data;
        this.see = true;
        this.state="active";
      }, (error) => {

        this.state="error";
      });
  }

  ngOnInit(): void {
    this.GetNotes();
  }

  open(template: TemplateRef<any>, i: number) {
    this.curindex=i;
    this.bsModalRef = this.modalService.show(template);
    this.bsModalRef.setClass("modal-lg");
    this.curnote = Object.assign({}, this.notes[i]);
  }

  save() {
    if (!this.check) {
       let savenote = this.notes[this.curindex];
       for (var key in this.curnote) {
         savenote[key] = this.curnote[key];
       }
      //this.notes[this.curindex]= Object.assign({}, this.curnote);

      this.bsModalRef.hide();
      this.noteService.updatenote(this.notes[this.curindex]).subscribe(
        (success) => {
          console.log("Update Note OK");
          console.log(success);
        },
        (error) => {
          console.log("Update Note ERROR");
          console.log(error);
          
          this.GetNotes();
        }
      );
    } else {
      this.notes.unshift(this.curnote); //Добавление елемента(записки, note) в локальный масив
      this.bsModalRef.hide();
      this.noteService.createnote(this.curnote).subscribe(
        //добавление елемента(записки, note) на сервер
        (success) => {
          console.log("Create Note OK");
          console.log(success);        
          this.GetNotes();
        },
        (error) => {
          console.log(error);
          this.GetNotes();
        }
      );
      this.check=false;
    }
  }

  public applyOrder(orderChange: NgsgOrderChange<Note>): void {
    if (this.notes.length != orderChange.currentOrder.length) {
    } else {
      this.notes = orderChange.currentOrder;
      for (var i = 0; i < this.notes.length; i++) {
        this.notes[i].orderId = i;
      }
      this.noteService.ordering(this.notes).subscribe(
        (success) => {
          console.log("Moving Notes OK");
          console.log(success);
        },
        (error) => {
          console.log("Moving Note ERROR");
          console.log(error);
          this.GetNotes();
        }
      );
    }
  }

  addNote(template: TemplateRef<any>): void {
    this.curnote = {
      title: "",
      body: "",
      color: "#fff",
      id: 0,
      orderId: 0,
      userId: this.app.user.id,
    };
    this.check=true;
    this.bsModalRef = this.modalService.show(template);
    this.bsModalRef.setClass("modal-lg");

  
  }

  delNote(orderChange: NgsgOrderChange<Note>, i): void {
    let deleteID: number = this.notes[i].id;
    this.notes.splice(i, 1); //Удаление елемента(записки, note) в локального масива
    orderChange.currentOrder = this.notes;

    this.noteService.deletenote(deleteID).subscribe(
      (success) => {
        //Удаление елемента(записки, note) с сервера
        console.log("Delete Note OK");
        console.log(success);
      },
      (error) => {
        console.log(error);
        this.GetNotes();
      }
    );
    // orderChange.currentOrder=this.notes;
    // console.log(orderChange.currentOrder);
    // console.log(orderChange.previousOrder);
  }
  changeComplete($event) {
    this.curnote.color = $event.color.hex;
  }
}
