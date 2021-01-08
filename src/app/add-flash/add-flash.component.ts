import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { IFlash } from '../flash.model';
import { FlashService } from '../flash.service';

@Component({
  selector: 'app-add-flash',
  templateUrl: './add-flash.component.html',
  styleUrls: ['./add-flash.component.scss']
})
export class AddFlashComponent implements OnInit, OnDestroy {

  @ViewChild('flashForm', {static:true}) flashForm: NgForm;
  editing = false;
  editingId: number;
  flash: IFlash;
  flashs$: Observable<IFlash[]>;
  private destroy$: Subject<void> = new Subject<void> ()
  flashs: IFlash[];
  isToggled: boolean = false;
  constructor(private flashService: FlashService) { }

  ngOnInit(): void {
    this.flashs$ = this.flashService.flashs$;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  };

  handleEdit(id : number) {
    this.flash = this.flashService.getFlash(id)
    this.editing = true;
    this.editingId = id;
    this.flashForm.setValue({
      question: this.flash.question,
      answer: this.flash.answer
    })

    this.openDialog();
  }

  handleUpdate() {
    this.flashService.updateFlash(
      this.editingId,
      {
        ...this.flash,
        ...this.flashForm.value,
      });
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

  handleRememberedChange({id, flag}) {
    this.flashService.rememberedChange(id, flag);
  }

  handleSubmit(): void {
    this.flashService.addFlash({
      id: this.flashService.getRandomNumber(),
      show: false,
      ...this.flashForm.value
    });
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      id: undefined,
      question: '',
      answer: '',
      show: false
    };

    this.flashForm.reset();
    this.isToggled = false;
  }

  openDialog() {
    this.isToggled = true;
  }
}
