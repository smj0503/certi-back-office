import axios from 'axios';

const baseUrl = "http://13.125.30.25:9200";

export default function useRegisterModule()
{
    const apis = {};
    apis.registerCompany = async (formData) =>
    {
        const res = await axios.post(`${baseUrl}/back-office/company/register`, formData, { headers: { 'Content-Type': 'multipart/form-data' }});

        if(res.data)
        {
            return res.data;
        }
    };

    apis.registerCertificate = async (formData) =>
    {
        const res = await axios.post(`${baseUrl}/back-office/certificate/register`, formData, { headers: { 'Content-Type': 'multipart/form-data' }});

        if(res.data)
        {
            return res.data;
        }
    };

    return apis;
}
