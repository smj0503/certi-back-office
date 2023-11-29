import { useRouter } from "next/router";
import { useState } from "react";
// import { registerCompany } from "@/apis/register";

import AppLayout from "@/components/AppLayout";
import ImageUploader from "@/components/ImageUploader";
import CompanyRegisterContainer from "@/components/RegisterContainer/Company";
import ActionButton from "@/components/ActionButton";
import Toast from "@/components/Toast";

import styles from "../../styles/Register.module.css";

export default function ()
{
    const router = useRouter();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const [isOpened, setIsOpened] = useState(true);

    const onSubmit = async () =>
    {
        // const result = await registerCompany(image, name, description, url);

        // console.log('result : ', result);
    };

    const onClick = async () =>
    {
        await router.push('/register/certificate');
    };

    const onClose = () =>
    {
        setIsOpened(false);
    };

    return (
        <AppLayout category="Register" menu="Company" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Register Company" }</span>

                <div className={ styles.formContainer }>
                    <div className={ styles.inputContainer }>
                        <ImageUploader setImage={ setImage }>{ "Company Image" }</ImageUploader>
                        <CompanyRegisterContainer setName={ setName } setDescription={ setDescription } setUrl={ setUrl }/>
                    </div>
                    <ActionButton width={185} disabled={ !(!!image && !!name && !!description && !!url) } onClick={ onSubmit }>{ "Register" }</ActionButton>
                </div>
            </div>
            {
                isOpened && <Toast state="fail" message="Would you like to register a certificate as well?" close={ onClose } onClick={ onClick }/>
            }
        </AppLayout>
    )
}