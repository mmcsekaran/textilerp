interface MetaLog
{
    Id : number | string | undefined;
}

export interface Company extends MetaLog
{
    companyName:string;
    city:City |undefined
    enabled:boolean 
    parent:Company | undefined 
    isGroup:boolean,
    abbet:string | undefined

}
export interface Contact extends MetaLog
{

}

export interface City extends MetaLog
{
  
    cityName:string
    state:State
    country:Country,
    enabled:boolean
}

export interface State extends MetaLog
{
  
    stateName:string
    country:Country
    enabled:boolean
}

export interface Country extends MetaLog
{
  
    countryName:string
    enabled:boolean
}