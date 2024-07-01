"use client";

import AuthForm from "@/components/AuthForm";
import { POST_SIGNIN } from "@/constants";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <main>
      <AuthForm
        api={POST_SIGNIN}
        variant="SIGNIN"
        title="Login to your account"
      />
    </main>
  );
}
