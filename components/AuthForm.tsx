"use client";

import Link from "next/link";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { formSchema } from "@/validations";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface AuthFormProps {
  variant: "SIGNIN" | "SIGNUP";
  title: string;
  api: string;
}

const AuthForm = ({ variant, title, api }: AuthFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="w-screen h-screen flex-col-center px-5 py-10 sm:items-center sm:px-8 lg:px-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter">
          {title}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow-sm sm:rounded-lg sm:px-10">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              {variant === "SIGNUP" && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-14 font-medium text-gray-1">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-gray-1">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="relative">
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-14 font-medium text-gray-1">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={showPass ? "text" : "password"}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="absolute left-0 -bottom-6" />
                    </FormItem>
                    <p
                      className="absolute right-2 bottom-2.5 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? (
                        <EyeOff size={20} className="text-gray-400" />
                      ) : (
                        <Eye size={20} className="text-gray-400" />
                      )}
                    </p>
                  </div>
                )}
              />

              {variant === "SIGNIN" && (
                <div>
                  <Link
                    href={"/forgotpassword"}
                    className="underline cursor-pointer text-sm font-extrabold"
                  >
                    Forgot Password ?
                  </Link>
                </div>
              )}
              <Button
                type="submit"
                className="inline-flex mt-7 w-full h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#15171C,45%,#F6F5F2,48%,#15171C)] bg-[length:200%_100%] px-6 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-sm font-bold"
              >
                {isSubmitting ? (
                  <>
                    Submitting
                    <Loader size={20} className="animate-spin ml-2" />
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
              <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                <h2>
                  {variant === "SIGNIN"
                    ? "New to Jiffychat ?"
                    : "Already have an account"}
                </h2>
                <Link
                  href={variant === "SIGNIN" ? "/signup" : "/"}
                  className="underline cursor-pointer"
                >
                  {variant === "SIGNIN" ? "Create an account" : "Login"}
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
