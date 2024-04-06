import axios from 'axios';

const baseUrl = 'https://api.certi.live';

export default function useIssueModule() {
  const apis = {};
  apis.issueCertificate = async (certificate, address, receiver) => {
    const res = await axios.post(`${baseUrl}/back-office/certificate/issue`, {
      certificate_id: certificate,
      wallet_address: address,
      user_name: receiver,
    });

    if (res.data) {
      return res.data;
    }
  };

  return apis;
}
