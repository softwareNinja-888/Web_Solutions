import { useState } from "react";

export function FormFooter() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

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
        e.preventDefault();

        if (!validateForm()) return; // Stop if validation fails

        setIsSubmitting(true);

        const formData = { name, email, phone,  };

        try {
            const response = await fetch("https://formbold.com/s/9E72K", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setName("");
                setEmail("");
                setPhone("");
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
        <div className="w-10/12 lg:w-[320px] m-auto text-white ">
            {isSubmitted ? (
                <p className="text-green-500 font-bold text-center">Thanks for reaching out! I’ll get back to you shortly.</p>
            ) : (
                <>
                    <h1 className="text-5xl text-yellowCustom font-inter900 mb-20 ">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full font-inter300">
                    {/* FIRST NAME */}
                    <label htmlFor="name" className="block">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    {/* EMAIL */}
                    <label htmlFor="emailFoot" className="block">
                        Enter your email *
                    </label>
                    <input
                        type="email"
                        id="emailFoot"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    {/* PHONE */}
                    <label htmlFor="phoneFoot" className="block">
                        Enter your phone number
                    </label>
                    <input
                        type="text"
                        id="phoneFoot"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+268 7856 6745"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}


                    {/* SUBMIT BUTTON */}
                    <button
                        aria-label="Submit Form"
                        id="submit_form"
                        type="submit"
                        className="w-full mt-3 bg-yellowCustom border border-yellowCustom text-white text-lg font-bold py-2 font-inter700 cursor-pointer flex justify-center items-center gap-2 transition duration-500 hover:scale-103"
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
                </form>
                </>
            )}
        </div>
    );
}
