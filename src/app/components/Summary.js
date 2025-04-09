import toast from "react-hot-toast";

export default function Summary({ formData }) { 
    const handleSubmit = () => {
        console.log(formData, "form data ");
        toast.success("Form submitted successfully!");
    }

    return (
        <div>
        <h2>Summary</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
       <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}