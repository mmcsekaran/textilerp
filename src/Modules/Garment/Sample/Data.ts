export interface StyleData

{
    Id?: string|number
    styleNo?:number|string;
    buyer:any;
    combos?:Array<ComboData>|ComboData

}
export interface ComboData
{
    Id?:number|string;
    comboName : string
    components?:Array<StyleComponentData>|StyleComponentData
}
export interface StyleComponentData
{
    Id?:number|string;
    styleComponentName?:string
}