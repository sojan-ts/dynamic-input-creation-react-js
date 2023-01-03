import React, { useState } from 'react'

const App = () => {

    const [formValues, setFormValues] = useState([{ name: "", hiddendata : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", hiddendata: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
       console.log(JSON.stringify(formValues))

    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Name</label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
          
              <input type="hidden" name="hiddendata"  value={element.hiddendata || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default App