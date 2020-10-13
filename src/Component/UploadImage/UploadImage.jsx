import React, { useContext } from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import './Upload.css'
import {DataContext} from '../../ContextAPI/DataContext'

export default function UploadImage() {

   let state=useContext(DataContext)

      const handleChangeStatus = ({ meta }, status) => {
        // console.log(status, meta)
      }
    
      const handleSubmit = (files, allFiles) => {
          console.log(allFiles)
       
        console.table(state)
        console.log('imgage'+files.map(f=> btoa(f.meta.previewUrl)))
      }
    
      return (
        <Dropzone

          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
        />
      )

}
