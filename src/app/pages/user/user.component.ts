import { Component, HostBinding, Inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TuiDialogService } from '@taiga-ui/core';
import { DialogConfig } from '../../dialogs/simple.dialog/simple.dialog.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ])
    ]),
    trigger('blurInOut', [
      transition(':enter', [
        style({ filter: 'blur(0px)' }),
        animate('1.5s', style({ filter: 'blur(5px)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ filter: 'blur(0px)' })),
      ])
    ])
  ]
})
export class UserComponent implements OnInit {

  dialogConfig: DialogConfig | undefined = undefined;

  user: firebase.default.User | null | undefined = null;
  placeHolderAvatar = "assets/icons/astronaut.svg"

  positiveButtonClick: (() => void) = () => { };
  negativeButtonClick: (() => void) = () => {
    this.dialogConfig = undefined;
  };

  @HostBinding('@blurInOut')
  get isDialogVisible() {
    return this.dialogConfig != undefined;
  }

  constructor(private authservice: AuthService, private router: Router, @Inject(TuiDialogService) private readonly dialogs: TuiDialogService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.authservice.getUser().subscribe(user => {
      this.user = user;
      if (user === null) {
        this.authservice.signInWithGoogle().then((user) => {
          this.user = user.user;
        });
      }
    });
  }

  confirmDelete(): void {
    this.dialogConfig = {
      title: `${this.user?.displayName} Tem certeza que deseja excluir sua conta?`,
      message: 'Todos os seus dados serão apagados permanentemente. Essa ação é irreversível e excluirá todas as suas publicações.',
      positiveButton: 'Confirmar',
      negativeButton: 'Cancelar'
    }

    this.positiveButtonClick = () => {
      this.deleteUser();
    };

  }

  deleteUser(): void {
    this.authservice.deleteUser()?.then(() => { 
      this.router.navigate(['/home']);
    });
  }

  signOut(): void {
    this.authservice.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }
}
