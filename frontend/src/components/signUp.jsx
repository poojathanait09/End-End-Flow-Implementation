import {useState} from "react";

function Signup(){

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

    const [touuched, settouuched] = useState({})


    const handleChange = (e) => {

        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const {name} = e.target;

        settouuched({
            ...touuched,
            [name]:true
        });
    };

    const validate = () => {

        const newErrors = {};

        if(formData.firstName && !/^[A-Za-z]+$/.test(formData.firstName)){
            newErrors.firstName = "First name should contain only alphabets.";
        }

        if(formData.lastName && !/^[A-Za-z]+$/.test(formData.lastName)){
            newErrors.lastName = "Last name should contain only alphabets";
        }

        if(formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            newErrors.email = "Please enter a valid email";
        }

        if(formData.phone && !/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number";
        }

        if(formData.password && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!*]).{6,}$/.test(formData.password)){

            newErrors.password = "Password must have at least 6 characters, one alphabet, one number and one special character(@#$&!*)";
        }

        if(formData.repeatPassword && formData.password !== formData.repeatPassword){
            newErrors.repeatPassword = "Password do not match";
        }

        if(formData.pincode && !/^\d{6}$/.test(formData.pincode)){
            newErrors.pincode = "Pincode must contain 6 digits";
        }

        seterrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()){
            console.log("Form is valid!");
            console.log(formData);
        }
    }

//     const handleSubmit = (e) => {

//   e.preventDefault();

//   const allTouched = {
//     firstName: true,
//     lastName: true,
//     email: true,
//     phone: true,
//     password: true,
//     repeatPassword: true,
//     pincode: true
//   };

//   setTouched(allTouched);

//   const newErrors = {};

//   if (!formData.firstName) {
//     newErrors.firstName = "First name is required.";
//   } 
//   else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
//     newErrors.firstName =
//       "First name should contain only alphabets.";
//   }

//   if (!formData.lastName) {
//     newErrors.lastName = "Last name is required.";
//   } 
//   else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
//     newErrors.lastName =
//       "Last name should contain only alphabets.";
//   }

//   if (!formData.email) {
//     newErrors.email = "Email is required.";
//   } 
//   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//     newErrors.email = "Please enter a valid email.";
//   }

//   if (!formData.phone) {
//     newErrors.phone = "Phone number is required.";
//   } 
//   else if (!/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(formData.phone)) {
//     newErrors.phone = "Enter a valid phone number.";
//   }

//   if (!formData.password) {
//     newErrors.password = "Password is required.";
//   } 
//   else if (
//     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!]).{6,}$/.test(
//       formData.password
//     )
//   ) {
//     newErrors.password =
//       "Password must have at least 6 characters, one alphabet, one number and one special character (@#$&!).";
//   }

//   if (!formData.repeatPassword) {
//     newErrors.repeatPassword =
//       "Please repeat your password.";
//   } 
//   else if (formData.password !== formData.repeatPassword) {
//     newErrors.repeatPassword =
//       "Passwords do not match.";
//   }

//   if (!formData.pincode) {
//     newErrors.pincode = "Pincode is required.";
//   } 
//   else if (!/^\d{6}$/.test(formData.pincode)) {
//     newErrors.pincode =
//       "Pincode must contain 6 digits.";
//   }

//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     console.log("Form is valid!");
//     console.log(formData);
//   }
// };

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
                        />

                        {errors.firstName && (
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
                        />

                        {errors.lastName && (
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
                        />

                        {errors.email && (
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
                        placeholder="9834256710 or +918345672834"
                        />

                        {errors.phone && (
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
                        />

                        {errors.password && (
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
                        />

                        {errors.repeatPassword && (
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
                        />

                        {errors.pincode && (
                            <p className="error">
                                {errors.pincode}
                            </p>
                        )}

                    </div>

                    <button type="submit">
                        Submit
                    </button>

                    </form>
            </div>
        </div>
    );
}





export default Signup;