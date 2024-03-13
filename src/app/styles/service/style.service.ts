import { FirestoreService } from "../../core/firestore/firestore.service";
import firebase from "firebase/compat";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Injectable } from "@angular/core";
import { Style } from "../model/style.model";

@Injectable({
    providedIn: "root"
})
export class StyleService extends FirestoreService<Style> {
    constructor(protected override reference: AngularFirestore) {
        super(reference, 'Styles');
    }

    override mapSnapshotToData(snapshot: firebase.firestore.QueryDocumentSnapshot<Style>): Style {
        var style = snapshot.data() as Style;
        style.id = snapshot.id;
        return style;
    }
    

    getStyles(): Promise<Style[]> {
        return this.getAllData();
    }
}