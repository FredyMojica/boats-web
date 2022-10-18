import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp, firebaseAuth } from './firebase';
import { useEffect, useState } from 'react';

export default function Auth({ children }) {
    const [userState, setUserState] = useState(null);
    const github = useSignInWithGithub(firebaseAuth);

    const [signIn, user, loading, error] = github;
    const logout = () => {
        signOut(firebaseAuth)
        setUserState(null)
    }

    useEffect(() => {
        if (!loading) {
            setUserState(user)
        }
    }, [loading, user])
    

    if (!userState){
        return <div className='auth__login trigger' onClick={() => signIn()}>
            <h2>Click here to Sign In!</h2>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360' alt='Login' width={360} />
        </div>
    }

    return <div className='auth'>
        <div className='auth__logout'>
        {userState.user.email} (<a href='#' onClick={() => logout()}>Log out</a>)
        </div>
        {children}
    </div>
}