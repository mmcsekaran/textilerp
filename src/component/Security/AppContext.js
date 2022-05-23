export const AppContext = React.createContext(
    {
        registerMenu : registerMenu
    }
)

export class AppProvider
{
    constructor(props)
    {
        super(props)

        this.state ={
            registerMenu : this.registerMenu 
        }
    }
    

    registerMenu = (menu) =>
    {

    }

    render()
    {

    }
}