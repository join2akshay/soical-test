import React from 'react'

export const DataContext = React.createContext();
 function DataContextProvider({children}) {
    const [state,setState]=React.useState({
        address:'',
        bathroom:'',
        bedroom:'',
        description:''
    })

    const initialState=()=>{
        setState({
            address:'',
            bathroom:'',
            bedroom:'',
            description:''
        })
    }

 

    return (
       <DataContext.Provider value={{state,setState,initialState}}>
        {children}
       </DataContext.Provider>
    )
}







export default DataContextProvider;