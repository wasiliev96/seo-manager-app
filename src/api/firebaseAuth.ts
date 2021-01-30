import firebase from "firebase";
import {AuthCallback} from "../../types/auth";

const logIn = async (email: string, password: string, onsuccess: AuthCallback, onerror: AuthCallback) => {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res);
            onsuccess('Authorized');
        }).catch((err: Error) => {
            onerror(err.message)
        })
};
const logOut = async (onsuccess: AuthCallback, onerror: AuthCallback) => {
    return firebase.auth().signOut().then(() => {
        onsuccess('Unauthorized');
    }).catch((err: Error) => {
        onerror(err.message)
    })
};

const signUp = async (email:string, password:string) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userData => {
        })
        .catch(error => { // do stuff with error })
        })
}

export {
    logIn,
    logOut,
    signUp
}
