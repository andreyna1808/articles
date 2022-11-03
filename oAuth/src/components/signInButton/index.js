import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { useSession, signIn, signOut } from "next-auth/react"

export function SignInButton() {
    const { data: session } = useSession();

    return (
        <button type='button' onClick={!session ? () => signIn() : () => signOut()} className={styles.signInStyle}>
            {!session ? (
                <React.Fragment>
                    <FaGithub color='#eba417' />
                    Sign in Github
                </React.Fragment>
            ) :
                (
                    <React.Fragment>
                        <img src={session.user.image} />
                        {session.user.name}
                        <FiX color='grey' className={styles.closeIcon} />
                    </React.Fragment>
                )
            }
        </button>
    )
}