import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../Models/note';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  @Input() public  check: boolean;
  @Input() public note: Note;

  curnote: Note;
  constructor(public activeModal: BsModalRef) { }

  ngOnInit(): void 
  {
    this.curnote=Object.assign({},this.note);
  }

  changeComplete($event) {
    this.curnote.color = $event.color.hex;
  }

  save(): void 
  {
    this.check=true;
    this.activeModal.hide();
    
  }
}
