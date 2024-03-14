import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple.dialog.component.html',
  styleUrl: './simple.dialog.component.css',
  
})

export class SimpleDialogComponent {



  @Input() dialogConfig: DialogConfig | undefined = undefined;

  @Input() positiveClick: () => void = () => console.log('ok');
  @Input() negativeClick: () => void = () => console.log('cancel');

}


export class DialogConfig {
  title: string = '';
  message: string = '';
  positiveButton: string = '';
  negativeButton: string = '';
}