import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, QueryDocumentSnapshot } from "@angular/fire/compat/firestore";
import { User, GoogleAuthProvider } from "firebase/auth";
  import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirestoreService } from "../core/firestore/firestore.service";

@Injectable({
    providedIn: "root"
})

export class AuthService extends FirestoreService<User> {

    constructor(protected override reference: AngularFirestore, private auth: AngularFireAuth) {
        super(reference, 'Quotes');
    }



    override mapSnapshotToData(snapshot: QueryDocumentSnapshot<User>): User {
        return snapshot.data() as User;
    }

    currentUser$:  Observable<firebase.default.User | null> = this.auth.authState;

    isAuthenticated(): Observable<boolean> {
        return this.auth.authState.pipe(map(user => user !== null));
    }

    signInWithGoogle(): Promise<firebase.default.auth.UserCredential> {
        const provider = new GoogleAuthProvider();
        return this.auth.signInWithPopup(provider);
    }

    getUser(): Observable<firebase.default.User | null>{ 
        return this.auth.authState
    }

    deleteUser() : Promise<void> | undefined {
        console.log("deleting user");
        return this.auth.currentUser.then(user => {
            if (user) {
                this.deleteData(user.uid).then(() => {
                    return user.delete();
                })
            }
            return undefined
        });
    }

    signOut(): Promise<void> {
        return this.auth.signOut();
    }
}