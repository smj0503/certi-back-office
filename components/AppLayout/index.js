import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import LocalStorage from '@/common/localstorage.manager';

import { Flex } from 'antd';
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
  const router = useRouter();

  const moveToPage = async (path) => {
    await router.push(path);
  };

  const logout = async () => {
    LocalStorage.shared.removeItem('accessToken');
    await router.replace('/');
  };

  return (
    <SessionSafety>
      <div className={styles.backgroundContainer}>
        <Flex vertical justify='space-between' className={styles.sidebar}>
          <Flex vertical gap={8}>
            <Logo />
            <Flex vertical gap={4} style={{ paddingBottom: 12 }}>
              <Flex align='center' className={styles.title}>
                <span>{t('sideBar.register')}</span>
              </Flex>
              <MenuButton
                onClick={() => moveToPage('/register/company')}
                href='/register/company'
                icon={<IconCompany />}
                leftPadding={true}
              >
                {t('sideBar.company')}
              </MenuButton>
              <MenuButton
                onClick={() => moveToPage('/register/certificate')}
                href='/register/certificate'
                icon={<IconCertificate />}
                leftPadding={true}
              >
                {t('sideBar.certificate')}
              </MenuButton>
            </Flex>
            <Flex vertical gap={4} style={{ paddingBottom: 12 }}>
              <Flex align='center' className={styles.title}>
                <span>{t('sideBar.issue')}</span>
              </Flex>
              <MenuButton
                onClick={() => moveToPage('/issue/certificate')}
                href='/issue/certificate'
                icon={<IconIssue />}
                leftPadding={true}
              >
                {t('sideBar.certificate')}
              </MenuButton>
            </Flex>
            <Flex vertical gap={4} style={{ paddingBottom: 12 }}>
              <Flex align='center' className={styles.title}>
                <span>{t('sideBar.dashboards')}</span>
              </Flex>
              <MenuButton
                onClick={() => moveToPage('/dashboards/company-list')}
                href='/dashboards/company-list'
                icon={<IconGrayDot />}
                leftPadding={true}
              >
                {t('sideBar.companyList')}
              </MenuButton>
              <MenuButton
                onClick={() => moveToPage('/dashboards/certificate-list')}
                href='/dashboards/certificate-list'
                icon={<IconGrayDot />}
                leftPadding={true}
              >
                {t('sideBar.certificateList')}
              </MenuButton>
            </Flex>
          </Flex>
          <MenuButton onClick={logout} icon={<IconLogout />}>
            {t('sideBar.logout')}
          </MenuButton>
        </Flex>
        <Flex justify='space-between' className={styles.topBar}>
          <Flex align='center' gap={8}>
            <IconDock />
            <Flex align='center'>
              <span className={styles.gray}>{category}</span>
              <span className={styles.gray}>{'/'}</span>
              <span className={styles.dock}>{menu}</span>
            </Flex>
          </Flex>
        </Flex>
        <main className={styles.body}>{children}</main>
      </div>
    </SessionSafety>
  );
}
