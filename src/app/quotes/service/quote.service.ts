import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FirestoreService } from "../../core/firestore/firestore.service";
import firebase from "firebase/compat";
import { Injectable } from "@angular/core";
import { Quote } from "../model/quote.model";

@Injectable({
    providedIn: "root"
})


export class QuoteService extends FirestoreService<Quote> {

    override mapSnapshotToData(snapshot: firebase.firestore.QueryDocumentSnapshot<Quote>): Quote {
        const quote = snapshot.data() as Quote;
        quote.id = snapshot.id;
        return quote;
    }

    constructor(protected override reference: AngularFirestore) {
        super(reference, 'Quotes');
    }

    getQuotes(): Promise<Quote[]> {
        return this.getAllData();
    }

   async getLastQuotes(): Promise<Quote[]> { 
        this
       const data = await this.collection
       .ref.orderBy('data', 'desc')
       .limit(5)
       .get();
        //console.log(data.docs)
        return data.docs.map(doc => this.mapSnapshotToData(doc));
    }

}