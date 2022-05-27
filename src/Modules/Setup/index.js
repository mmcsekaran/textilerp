import ComingSoon from "../../Pages/ErrorPage/ComingSoon";

export default 
{
  routerProps:
  {
    path:'setup/*',
    element:<ComingSoon></ComingSoon>
  },
  children :[
    {
      name:'companymaster',
      title:'Company',
      children:[],
      path:'/setup/company/',
      type : 2,
      permit:'SETUP.COMAPNY'
    }
  ],
  name:'Setup',
  title:"Setup",
  type:1,
  path:'setup/*',
  element:<ComingSoon></ComingSoon>,
  permit:'MASTER'
};