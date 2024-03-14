import css from './ErrorMessage.module.css'
import { RiSignalWifiErrorFill } from "react-icons/ri";

export default function ErrorMessage () {
    return (
        <div className={css.error}>
            <p>Sorry, something wrond, plase restart page...<RiSignalWifiErrorFill className={css.icon} /></p>
        </div>
    );
}

