
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function Summary({ formData }) { 
    // console.log(formData);
    const handleSubmit = () => {
        // console.log(formData, "form data ");
        toast.success("Form submitted successfully!");
        // router.push('/')

    }

    return (
        <div className="space-y-4  p-4 md:w-1/2 mx-auto">
            <h2 className="text-center text-amber-600 text-2xl" >show all data </h2>
            <div className="font-bold text-amber-600">
                <p>name: {formData?.fullName}</p>
                <p>email: {formData?.email}</p>
                <p>phone: {formData?.phone}</p>
                <p>street: {formData?.street}</p>
                <p>city :{formData?.city}</p>
                <p>zipCode: {formData?.zipCode}</p>
                <p>username: {formData?.username}</p>
            </div>
        {/* <pre className="text-amber-600">{JSON.stringify(formData, null, 2)}</pre> */}
       <button className="px-4 py-2 rounded bg-amber-400 w-full hover:bg-amber-300" onClick={handleSubmit}>Submit</button>
    </div>
    )
}