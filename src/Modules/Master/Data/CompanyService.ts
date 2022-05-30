import Dataservice from "../../../Core/Services/Dataservice";

import { Company } from "./Company";

export class CompanyService
{
    private service = Dataservice.axiosInstance;

    /**
     * newCompany
     */
    public newCompany(company : Company) {

        if(company === undefined) throw new Error("company was undefined")

        

        this.service.post('master/company/',
        company)
    }

    public getCompanies():Company[]
    {
        return [
            
            {
                companyName:"Chandru",
                enabled:false,
                parent :undefined,
                isGroup:false,
                city:undefined,
                abbet:undefined,
                Id:undefined       
            }
        ]
    }

    public getCompaniesByUser(userId : string|number):Company[]
    {
        return [
            
            {
                companyName:"Chandru",
                enabled:false,
                parent :undefined,
                isGroup:false,
                city:undefined,
                abbet:undefined,
                Id:undefined       
            }
        ]
    }

    public updateCompany(company:Company):boolean
    {
        return true;
    }
}
