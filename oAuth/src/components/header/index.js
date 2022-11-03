import styles from './styles.module.scss'
import { SignInButton } from '../signInButton/index';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <a>Bem vindo ao teste de oAuth</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}