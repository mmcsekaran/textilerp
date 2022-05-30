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

export interface User
{
    userId :string|number
    username:string
    roles:Array<Role>

}