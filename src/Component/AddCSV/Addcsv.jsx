import React, { useContext } from 'react'
import {DataContext} from '../../ContextAPI/DataContext'
export default function Addcsv({setStep}) {

    let {state,setState}=useContext(DataContext)



    const readFile =  (e)=> {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out').innerHTML = reader.result;
            const data=reader.result.split(',')
            setState({address:data[0],bedroom:data[1],bathroom:data[2],description:data[3]})
            setStep('scratch')


        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(e.target.files[0]);


        
    };
    return (
        <div>

<p>Select local CSV File:</p>
<input id="csv" onChange={readFile} type="file"/>
    
<output id="out">
    file contents will appear here
</output>

        </div>
    )
}
