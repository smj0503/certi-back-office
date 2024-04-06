import { publicApi } from '@/apis/index';

export const registerCompany = async () => {
  return await publicApi.post('');
}
// export default function useRegisterModule() {
//   const apis = {};
//   apis.registerCompany = async (formData) => {
//     const res = await axios.post(
//       `${baseUrl}/back-office/company/register`,
//       formData,
//       { headers: { 'Content-Type': 'multipart/form-data' } }
//     );
//
//     if (res.data) {
//       return res.data;
//     }
//   };
//
//   apis.registerCertificate = async (formData) => {
//     const res = await axios.post(
//       `${baseUrl}/back-office/certificate/register`,
//       formData,
//       { headers: { 'Content-Type': 'multipart/form-data' } }
//     );
//
//     if (res.data) {
//       return res.data;
//     }
//   };
//
//   return apis;
// }
