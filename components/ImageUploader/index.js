import { useRef } from "react";

import styles from "./ImageUploader.module.css";
import IconPhoto from "../../public/assets/icon-photo.svg";

export default function ({ children })
{
    const imageSelector = useRef();

    const _onChange = (e) =>
    {
        const reader = new FileReader();

        reader.onload = (event) =>
        {
            const data = event.target.result;
            console.log('data : ', data);
        };

        reader.readAsDataURL(e.target.files[0]);
        // console.log('file : ', reader.readAsDataURL(e.target.files[0]));
    };

    const _onClick = () =>
    {
        imageSelector.current.click();
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.header }>
                <span className={ styles.label }>{ children }</span>
                <span className={ styles.description }>{ "Click upload Logo, allowed file types: png, jpg, jpeg." }</span>
            </div>

            <div className={ styles.selector }>
                <input type="file" className={ styles.file } ref={ imageSelector } onChange={ _onChange }/>
                <button type="button" className={ styles.uploadButton } onClick={ _onClick }>
                    <IconPhoto/>
                </button>
            </div>
        </div>
    )
}