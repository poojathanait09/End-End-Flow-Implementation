import { useEffect, useState } from "react";
import {useParams } from  "react-router-dom";

function Confirmation(){
    const {id} = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=> {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/users/${id}`
                );

                const data = await response.json();

                if(!response.ok){
                    setError(data.message || "Unable to load user");

                    return;
                }

                setUser(data);
            } catch(error){
                console.error(error);
                setError("Unable to connect to server");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();

    }, [id]);

    if(loading){
        return <h2>Loading...</h2>;
    }

    return (
        <div className= "confirmation-container">
            <div className= "confirmation-card">
                <h1>
                    Registration Successful!
                </h1>

                <h2>
                    Welcome {user.first_name}
                </h2>

                <p>Your registration has been completed successfully</p>
            <div className="user-details"> 
                <div>
                    <strong>First Name: </strong>
                    <span>{user.first_name}</span>
                </div>

                <div>
                    <strong>last name: </strong>
                    <span>{user.last_name}</span>
                </div>

                <div>
                    <strong>Email:</strong>
                    <span>{user.email}</span>
                </div>

                <div> 
                    <strong>Phone Number: </strong>
                    <span>{user.phone}</span>
                </div>
                <div>
                    <strong>Pincode: </strong>
                    <span>{user.pincode}</span>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Confirmation;