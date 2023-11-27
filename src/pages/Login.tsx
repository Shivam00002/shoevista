// Login.js
import React, { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import MyuseStore from "../lib/zustand";

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
  }, [router, setUser]);

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
    <div className="w-[300px] h-[500px] border text-center rounded-md">
      <h2>Hello, Welcome!</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
