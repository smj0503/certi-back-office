import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { signin } from "@/apis/signin.api";

import ActionButton from "@/components/ActionButton";

import styles from "../styles/Login.module.css";
import Logo from "/public/assets/logo/logo-signin.svg";
import Thumbnail from "/public/assets/photo/photo-thumbnail.png";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const onSubmit = async (e) =>
    {
        e.preventDefault();

        console.log('id : ', e.target.id.value);
        console.log('id : ', e.target.password.value);
        // const result = await signin(id, password);
        // console.log('result : ', result);

        await router.replace('/register/company');
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.thumbnail }>
                <Image src={ Thumbnail } width={726} height={823} alt="login image" className={ styles.image } priority={true}/>
            </div>
            <div className={ styles.login }>
                <form className={ styles.loginBox } onSubmit={ onSubmit }>
                    <Logo/>
                    <div className={ styles.description }>
                        <span className={ styles.title }>{ t("signIn.loginToYourAccount") }</span>
                        <span className={ styles.subTitle }>{ t("signIn.pleaseEnterYourDetails") }</span>
                    </div>
                    <div className={ styles.inputContainer }>
                        <input type="id" name="id" placeholder="ID" required={true}/>
                        <input type="password" name="password" placeholder="Password" required={true}/>
                    </div>
                    <ActionButton type="submit" width={322}>{ t("signIn.login") }</ActionButton>
                </form>
            </div>
        </div>
    )
}
