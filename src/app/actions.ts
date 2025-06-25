"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  message: string | null;
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll simulate a successful submission.
  console.log("New contact form submission:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you soon.",
    errors: null,
  };
}
