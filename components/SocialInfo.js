import github from '../assets/Icons/github.svg';
import linkedin from '../assets/Icons/linkedin.svg';
import mail from '../assets/Icons/mail.svg';

// Styles
import Styles from "./../styles/Footer.module.css";

// Modules
import Link from "next/link";
import Image from "next/image";


export const SocialInfo = () => {

    return (
        <div className="d-flex justify-content-center">
            <Link href="https://github.com/matias798">
                <a target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.Icon}>
                    <Image
                        src={github}
                        alt="Github"
                        priority />
                </a>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matiasquiroga584@gmail.com" >
                <a target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.Icon}>
                    <Image
                        src={mail}
                        alt="Github"
                        priority />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/matias-quiroga-/">
                <a target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.Icon}>
                    <Image
                        src={linkedin}
                        alt="linkedin"
                        priority />
                </a>
            </Link>
        </div>)
}