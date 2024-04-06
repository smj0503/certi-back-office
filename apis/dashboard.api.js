import axios from 'axios';

const baseUrl = 'https://api.certi.live';

export default function useDashboardModule() {
  const apis = {};
  apis.getStatistics = async () => {
    const { data } = await axios.get(`${baseUrl}/back-office/stat`);
    return data;
  };

  apis.getCompanyList = async () => {
    const { data } = await axios.get(`${baseUrl}/company/list`);
    return data;
  };

  apis.getCertificateList = async () => {
    const { data } = await axios.get(`${baseUrl}/certificate/list`);
    return data;
  };

  return apis;
}
