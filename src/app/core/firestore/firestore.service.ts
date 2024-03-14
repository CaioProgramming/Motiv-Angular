import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

export abstract class FirestoreService<T> {

    private db = firebase.firestore();


    protected collection: AngularFirestoreCollection<T>;


    constructor(protected reference: AngularFirestore, protected path: string) {
        this.collection = reference.collection(path);
    }

    abstract mapSnapshotToData(snapshot: firebase.firestore.QueryDocumentSnapshot<T>): T;
    abstract mapSnapshotToData(snapshot: firebase.firestore.DocumentSnapshot<T>): T;

    async getAllData(): Promise<T[]> {
        const snapshotData = await this.collection.get().toPromise();
        return (snapshotData?.docs || []).flatMap(doc => {
            return this.mapSnapshotToData(doc);
        });
    }

    async getDataById(id: string): Promise<T | undefined> {
        const snapshot = await this.collection.doc(id).get().toPromise();
        //console.log("data from => ", this.path)
       //console.log(snapshot)
        if (snapshot?.exists) {
            const model = this.mapSnapshotToData(snapshot);
            return model;
        } else {
            return undefined;
        }
    }

    async deleteData(id: string): Promise<void> {
        await this.collection.doc(id).delete();
    }
}