import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiCardModule } from "@taiga-ui/experimental";
import { UserComponent } from "./user.component";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiDialogModule } from "@taiga-ui/core";
import { MatDialogModule } from "@angular/material/dialog";
import { SimpleDialogComponent } from "../dialogs/simple.dialog/simple.dialog.component";
@NgModule({
    imports: [CommonModule,
        TuiCardModule,
        TuiAvatarModule,
        TuiButtonModule,
        MatDialogModule
    ],
    declarations: [UserComponent, SimpleDialogComponent],
})

export class UserModule { }