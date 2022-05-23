export default  {
    getCompanyList :() => fetchCompanyList()
}

 const fetchCompanyList  = () =>
{
    return  [
        {
        id : '000129910290',
        name:'D2D INTERNATIONAL',
        
        },
        {
        id : '000129910291',
        name:'D2D INTERNATIONAL-II',
        
        },
        {
        id : '000129910292',
        name:'D2D INTERNATIONAL PRIVATE LIMITED',
        
        },
    
    ]
}

const createCompany = (companyModel) =>
{
    return "Company Created"
}


const updateCompany = (companyModel) =>
{
    return "company Updated"
}
const deactiveCompany = (companyModel) =>
{
    return "Company Deactivated";
}