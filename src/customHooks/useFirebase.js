import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from '../firebaseConfig'

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    // google sign In 
    const googleSignIn = (event) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    // user sign Out
    const userSingOut = () => {
        signOut(auth)
            .then(() => {
            
            })
            .catch(() => {
            
            })
    }
    // observe the user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    },[])


    return {user, googleSignIn, userSingOut}
}

export default useFirebase;