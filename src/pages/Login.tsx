// Login.js
import React, { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import MyuseStore from "../lib/zustand";
import Image from "next/image";

interface User {
  displayName: string | null;
  photoURL: string | null;
  // Add other properties as needed
}

const Login = () => {
  const {
    user,
    setUser,
  }: { user: User | null; setUser: (newUser: User | null) => void } =
    MyuseStore();

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        setUser({
          displayName: authenticatedUser.displayName,
          photoURL: authenticatedUser.photoURL,
        });
        router.push("/");
      } else {
        setUser(null);
      }
    });

    
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const authenticatedUser = result.user;

      console.log("Logged in", authenticatedUser.displayName);
      console.log("Profile Picture URL", authenticatedUser.photoURL);

      setUser({
        displayName: authenticatedUser.displayName,
        photoURL: authenticatedUser.photoURL,
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" grid place-content-center mx-auto h-screen">
        <div className="w-[340px] border text-center px-2 py-2 rounded-md">
          <h2 className="text-[#3994ba] md:text-[14px] whitespace-nowrap text-[12px]">
            Hello, Welcome! login here and explore ShoeVista
          </h2>
          <div className="flex py-2 place-content-center mx-auto text-center items-center gap-2">
            <Image
              src="https://iili.io/HU9BC74.png"
              alt="logo"
              width={20}
              height={20}
            />
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
