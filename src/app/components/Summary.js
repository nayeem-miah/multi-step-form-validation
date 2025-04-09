export default function Summary({ formData }) { 

    return (
        <div>
               <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={handleSubmit}>Submit</button>
    </div>
         
    )
}