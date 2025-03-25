import { FormFooter } from "./FormFooter";
import { useState } from "react";
import { DefaultColumn,NameInput,MessageTextarea,EmailInput,CompanyNameInput, DefaultTextarea, } from "../../util/util";
import {SuccessMsg} from './SuccessMsg'

export function FormModal(){

    const formBoldUrl = 'https://formbold.com/s/3N1yz'
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [isVisibleMsg, setIsVisibleMsg] = useState(true);

    // Function to validate form fields
    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        if (!validateForm()) return; // Stop if validation fails

        setIsSubmitting(true);

        const formData = { name, email, companyName, message };
        console.log('form Data: ',formData)
        try {
            const response = await fetch(formBoldUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            console.log("Response:",response)

            if (response.ok) {
                setIsSubmitted(true);
                setName("");
                setEmail("");
                setCompanyName("");
                setMessage("");
                setErrors({});
            } else {
                console.error("Error submitting form");
            }
        } catch (error) {
            console.error("Network error:", error);
        }

        setIsSubmitting(false);
    };

    return (
        <>
            {/* {isSubmitted ? <SuccessMsg  isVisible={isVisibleMsg} setIsVisible={setIsVisibleMsg}/> : null} */}
            <div id="contact_Btn" className="cursor-pointer flex border border-greenPrimary  text-white px-10 py-2 hover:bg-greenPrimary  hover:text-black transition duration-400 ease-in-out bg-black font-inter700 " onClick={()=>document.getElementById('my_modal_2').showModal()}>Let's Talk</div>

            <dialog id="my_modal_2" className="modal">
            <div className="flex flex-col justify-center items-center  modal-box text-black bg-black gap-10">
                
                <div className="flex flex-col gap-3 mt-130 ">
                    <h1 className="text-4xl self-start px-11 text-white font-inter900">Lets talk</h1>
                    <div className="text-white font-inter400 text-sm px-11">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odio rem expedita ipsam totam praesentium cupiditate nulla.</div>
               </div>

                <form method="dialog" className="" onSubmit={handleSubmit}>


                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-10 text-2xl font-poppins text-white hover:text-white hover:bg-black hover:border-black hover:rotate-180 duration-500 transition" onClick={()=>document.getElementById('my_modal_2').closeModal()}>✕</button>

                    <div className='-mx-4 flex flex-col flex-wrap'>
                        <DefaultColumn>
                            <NameInput name={name} setName={setName} />
                        </DefaultColumn>

                        <DefaultColumn>
                            <EmailInput email={email} setEmail={setEmail} />
                        </DefaultColumn>

                        <DefaultColumn>
                            <CompanyNameInput companyName={companyName} setCompanyName={setCompanyName} />
                        </DefaultColumn>

                        <DefaultColumn>
                            <MessageTextarea message={message} setMessage={setMessage} color="text-white" borderColor='border-white  focus:border-greenPrimary active:border-greenPrimary resize-none' />
                        </DefaultColumn>
                        <button
                        aria-label="Submit Form"
                        id="submit_form"
                        type="submit"
                        className="w-90 mx-auto mt-3 border border-greenPrimary bg-greenPrimary text-white text-lg font-bold py-2 font-inter700 cursor-pointer flex justify-center items-center gap-2 transition duration-500 hover:scale-103"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-green-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-100"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                    </div>
                </form>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button className="text-red-900">close</button>
            </form>
           
            </dialog>
        </>
    )
}