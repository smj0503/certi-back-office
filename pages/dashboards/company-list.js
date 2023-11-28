import { asyncEffect } from "@/common/utils";

import { getStatistics } from "@/apis/dashboard.api";

import AppLayout from "@/components/AppLayout";
import StatusBox from "@/components/StatusBox";
import CompanyTable from "@/components/CompanyTable";

import styles from "../../styles/Dashboards.module.css";
import IconCompany from "../../public/assets/icon-company-28.svg";
import IconCertificate from "../../public/assets/icon-certifiacte-28.svg";
import IconIssue from "../../public/assets/icon-issue-28.svg";

export default function ()
{
    // asyncEffect(async () =>
    // {
    //     const { statistics } = await getStatistics();
    //
    //     console.log('result : ', statistics);
    // });

    return (
        <AppLayout category="Dashboards" menu="Company list" >
            <div className={ styles.container }>
                <span className={ styles.title }>{ "Company list" }</span>
                <div className={ styles.statusContainer }>
                    <StatusBox icon={ <IconCompany/> } count={12} color={ "rgba(0, 158, 208, 0.10)" }>{ "Registered Company" }</StatusBox>
                    <StatusBox icon={ <IconCertificate/> } count={20} color={ "rgba(48, 255, 205, 0.10)" }>{ "Registered Certificate" }</StatusBox>
                    <StatusBox icon={ <IconIssue/> } count={15} color={ "rgba(42, 208, 0, 0.10)" }>{ "Issued Certificate" }</StatusBox>
                </div>
                <CompanyTable/>
            </div>
        </AppLayout>
    )
}