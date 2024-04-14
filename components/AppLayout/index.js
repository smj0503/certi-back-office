import useTranslation from 'next-translate/useTranslation';

import SessionSafety from '@/components/Safety/SessionSafety';
import MenuButton from '@/components/MenuButton';

import styles from './AppLayout.module.css';
import Logo from '../../public/assets/logo/logo-layout.svg';
import IconCompany from '../../public/assets/icon-company-20.svg';
import IconCertificate from '../../public/assets/icon-certificate-20.svg';
import IconIssue from '../../public/assets/icon-issue-20.svg';
import IconGrayDot from '../../public/assets/icon-gray-dot-16.svg';
import IconLogout from '../../public/assets/icon-logout-20.svg';
import IconDock from '../../public/assets/icon-dock-28.svg';

export default function ({ category, menu, children }) {
  const { t } = useTranslation('common');

  return (
    <SessionSafety>
      <div className={styles.backgroundContainer}>
        <div className={styles.sidebar}>
          <div className={styles.menus}>
            <Logo />
            <div className={styles.category}>
              <div className={styles.title}>
                <span>{t('sideBar.register')}</span>
              </div>
              <MenuButton
                href='/register/company'
                icon={<IconCompany />}
                leftPadding={true}
              >
                {t('sideBar.company')}
              </MenuButton>
              <MenuButton
                href='/register/certificate'
                icon={<IconCertificate />}
                leftPadding={true}
              >
                {t('sideBar.certificate')}
              </MenuButton>
            </div>
            <div className={styles.category}>
              <div className={styles.title}>
                <span>{t('sideBar.issue')}</span>
              </div>
              <MenuButton
                href='/issue/certificate'
                icon={<IconIssue />}
                leftPadding={true}
              >
                {t('sideBar.certificate')}
              </MenuButton>
            </div>
            <div className={styles.category}>
              <div className={styles.title}>
                <span>{t('sideBar.dashboards')}</span>
              </div>
              <MenuButton
                href='/dashboards/company-list'
                icon={<IconGrayDot />}
                leftPadding={true}
              >
                {t('sideBar.companyList')}
              </MenuButton>
              <MenuButton
                href='/dashboards/certificate-list'
                icon={<IconGrayDot />}
                leftPadding={true}
              >
                {t('sideBar.certificateList')}
              </MenuButton>
            </div>
          </div>
          <MenuButton href='/' icon={<IconLogout />}>
            {t('sideBar.logout')}
          </MenuButton>
        </div>
        <div className={styles.topBar}>
          <div className={styles.dock}>
            <IconDock />
            <div>
              <span className={styles.gray}>{category}</span>
              <span className={styles.gray}>{'/'}</span>
              <span>{menu}</span>
            </div>
          </div>
        </div>
        <main className={styles.body}>{children}</main>
      </div>
    </SessionSafety>
  );
}
