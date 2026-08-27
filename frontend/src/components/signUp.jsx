import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signup(){
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        repeatPassword: "",
        pincode: ""
    });


    const [errors, seterrors] = useState({});

    const [touched, settouched] = useState({})



    const handleChange = (e) => {

        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };

const handleBlur = (e) => {

    const { name, value } = e.target;

    settouched((prev) => ({
        ...prev,
        [name]: true
    }));

    const error = validateField(name, value);

    seterrors((prev) => ({
        ...prev,
        [name]: error
    }));
};

const validateField = (name, value) => {

    let error = "";

    if (name === "firstName") {

        if (!value) {
            error = "First name is required.";
        }
        else if (!/^[A-Za-z]+$/.test(value)) {
            error = "First name should contain only alphabets.";
        }

    }


    else if (name === "lastName") {

        if (!value) {
            error = "Last name is required.";
        }
        else if (!/^[A-Za-z]+$/.test(value)) {
            error = "Last name should contain only alphabets.";
        }

    }


    else if (name === "email") {

        if (!value) {
            error = "Email is required.";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = "Please enter a valid email.";
        }

    }


    else if (name === "phone") {

        if (!value) {
            error = "Phone number is required.";
        }
        else if (!/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(value)) {
            error = "Enter a valid phone number.";
        }

    }


    else if (name === "password") {

        if (!value) {
            error = "Password is required.";
        }
        else if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!]).{6,}$/.test(value)
        ) {
            error =
                "Password must have at least 6 characters, one alphabet, one number and one special character (@#$&!).";
        }

    }


    else if (name === "repeatPassword") {

        if (!value) {
            error = "Please repeat your password.";
        }
        else if (value !== formData.password) {
            error = "Passwords do not match.";
        }

    }


    else if (name === "pincode") {

        if (!value) {
            error = "Pincode is required.";
        }
        else if (!/^\d{6}$/.test(value)) {
            error = "Pincode must contain 6 digits.";
        }

    }

    return error;
};

const validate = () => {

    const newErrors = {};

    // First Name
    if (!formData.firstName) {
        newErrors.firstName = "First name is required.";
    } 
    else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
        newErrors.firstName =
            "First name should contain only alphabets.";
    }


    // Last Name
    if (!formData.lastName) {
        newErrors.lastName = "Last name is required.";
    } 
    else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
        newErrors.lastName =
            "Last name should contain only alphabets.";
    }


    // Email
    if (!formData.email) {
        newErrors.email = "Email is required.";
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email.";
    }


    // Phone
    if (!formData.phone) {
        newErrors.phone = "Phone number is required.";
    } 
    else if (!/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid phone number.";
    }


    // Password
    if (!formData.password) {
        newErrors.password = "Password is required.";
    } 
    else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!]).{6,}$/.test(
            formData.password
        )
    ) {
        newErrors.password =
            "Password must have at least 6 characters, one alphabet, one number and one special character (@#$&!).";
    }


    // Repeat Password
    if (!formData.repeatPassword) {
        newErrors.repeatPassword =
            "Please repeat your password.";
    } 
    else if (
        formData.password !== formData.repeatPassword
    ) {
        newErrors.repeatPassword =
            "Passwords do not match.";
    }


    // Pincode
    if (!formData.pincode) {
        newErrors.pincode = "Pincode is required.";
    } 
    else if (!/^\d{6}$/.test(formData.pincode)) {
        newErrors.pincode =
            "Pincode must contain 6 digits.";
    }


    seterrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

    // const validate = () => {

    //     const newErrors = {};

    //     if(formData.firstName && !/^[A-Za-z]+$/.test(formData.firstName)){
    //         newErrors.firstName = "First name should contain only alphabets.";
    //     }

    //     if(formData.lastName && !/^[A-Za-z]+$/.test(formData.lastName)){
    //         newErrors.lastName = "Last name should contain only alphabets";
    //     }

    //     if(formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
    //         newErrors.email = "Please enter a valid email";
    //     }

    //     if(formData.phone && !/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(formData.phone)) {
    //         newErrors.phone = "Enter a valid phone number";
    //     }

    //     if(formData.password && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!*]).{6,}$/.test(formData.password)){

    //         newErrors.password = "Password must have at least 6 characters, one alphabet, one number and one special character(@#$&!*)";
    //     }

    //     if(formData.repeatPassword && formData.password !== formData.repeatPassword){
    //         newErrors.repeatPassword = "Password do not match";
    //     }

    //     if(formData.pincode && !/^\d{6}$/.test(formData.pincode)){
    //         newErrors.pincode = "Pincode must contain 6 digits";
    //     }

    //     seterrors(newErrors);

    //     return Object.keys(newErrors).length === 0;
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if(validate()){
    //         console.log("Form is valid!");
    //         console.log(formData);
    //     }
    // }

    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        const inputs = Array.from(
            e.currentTarget.form.elements
        ).filter(
            (element) =>
                element.tagName === "INPUT"
        );

        const currentIndex = inputs.indexOf(e.currentTarget);

        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
};

    const submitToBackend = async ()=> {
        try {
            const response = await fetch(
                "http://localhost:3000/api/users",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },

                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        phone: formData.phone,
                        password: formData.password,
                        pincode: formData.pincode
                    })
                }

            );

            const data = await response.json();

            if(!response.ok){
                seterrors({
                    ...errors,
                    submit: data.message
                });

                return;
            }

            console.log(data);

            navigate(`/confirmation/${data.userId}`);
        }

        catch (error) {
            console.error(error);

            seterrors({
                ...errors,
                submit: "Unable to connect to server"
            });
        }
    };

const handleSubmit = (e) => {

    e.preventDefault();

    console.log("SUBMIT BUTTON CLICKED");

    const isValid = validate();

    console.log("Validation result:", isValid);

    if (!isValid) {
        console.log("Validation failed");
        return;
    }

    console.log("Validation passed");

    submitToBackend();
};

    return (
        <div className= "container">
            <div className= "form-card">
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.firstName && errors.firstName && (
                            <p className="error">
                                {errors.firstName}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.lastName && errors.lastName && (
                            <p className= "error">
                                {errors.lastName}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.email && errors.email && (
                            <p className="error">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>

                        <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        placeholder="9834256710 or +918345672834"
                        />

                        {touched.phone && errors.phone && (
                            <p className="errors">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.password && errors.password && (
                            <p className= "error">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Repeat Password</label>

                        <input
                        type="password"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.repeatPassword && errors.repeatPassword && (
                            <p className="error">
                                {errors.repeatPassword}
                            </p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Pincode</label>

                        <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        />

                        {touched.pincode && errors.pincode && (
                            <p className="error">
                                {errors.pincode}
                            </p>
                        )}

                    </div>

                        {errors.submit && (
                            <p className="error">
                                {errors.submit}
                            </p>
                        )}                    

                    <button type="submit">
                        Submit
                    </button>

                    </form>
            </div>
        </div>
    );
}





export default Signup;