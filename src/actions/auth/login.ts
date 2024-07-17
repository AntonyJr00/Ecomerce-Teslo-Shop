"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../auth.config";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log({ ["login.ts->-11"]: Object.fromEntries(formData) });
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid Credencials";

        default:
          return "Something went wrong";
      }
    }
    throw error;
  }
}
