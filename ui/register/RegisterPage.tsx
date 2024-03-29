"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  
  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

     if (!name || !email || !password) {
       setError("All fields must be provided");
       return;
     }
     if(name.length < 10){
      setError("Name must be at least 10 characters");
      return;
     }
     if(password.length < 8){
       setError("Password must be at least 8 characters");
       return;
     }
     try {
       const resUserExists = await fetch("api/userExists", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({ email })
       });

       const { user } = await resUserExists.json();

       if (user) {
         setError(`This email [${email}] has been registering previously.`);
         return;
       }
       const res = await fetch("api/register", {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
          name,
          email,  
          password
         })
       });

       if (res.ok) {
         const form = e.target;
         form.reset();
         router.push("/");
       } else {
         console.log("User registration failed.");
       }
     } catch (error) {
       console.log("Error during registration: ", error);
     }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button className="rounded-2xl bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
