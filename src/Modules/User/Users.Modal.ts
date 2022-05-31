export interface Role {
  roleId: undefined | string | number;
  roleName: string;
  responses: Array<Response> | undefined;
}
export interface Response {
  roleId: string | number | undefined;

  responseName: string;
  groups: Array<PageGroup>;
}

export interface Page {
  Id: string | number;
  pageName: string;
  groupId:string|number
  
}

export interface UserPage {
    pageId: string | number;
    pageName: string;
    roleId:string|undefined|number
    Create: boolean;
    View: boolean;
    Update: boolean;
    Delete: boolean;
    List: boolean;
    
  }
export interface PageGroup {
  groupName: string;
  pages: Array<Page>;
}

export interface UserRole {
  roleId: string | number | undefined;
  userId: string | number | undefined;
  Pages:Array<UserPage>|undefined

}



export interface UserLogin
{
  userType:"employee"|"vendor" | 1|2
  username:string|number
  passHash:string
}

export interface UserProfile
{
  userId:number|string
  username : number | string
  email : null | undefined | string
  employeeId : null | undefined | number | string
  profileName : null | undefined| string,
  designation : null | undefined | string | number
  department : null | undefined | string | number
  role : number | null | undefined | string
  islogged:boolean 
  isDeveloper:boolean
  isEmpoloyee:boolean
  avatar:string,
  isHead:boolean
  reportTo:string | number,
  status:'active' | 'inactive'
  signOut():void
}