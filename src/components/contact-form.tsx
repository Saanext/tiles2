"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: FormState = {
  message: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        // Error toast
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        // Success toast
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 text-left">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white font-semibold">Name</Label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Your Name" 
          required 
          className="bg-white/20 border-white/30 placeholder:text-white/60 text-white focus:bg-white/30 focus:ring-offset-0 focus:ring-white"
          aria-describedby="name-error"
        />
        {state.errors?.name && <p id="name-error" className="text-red-300 text-sm mt-1">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white font-semibold">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="your.email@example.com" 
          required 
          className="bg-white/20 border-white/30 placeholder:text-white/60 text-white focus:bg-white/30 focus:ring-offset-0 focus:ring-white"
          aria-describedby="email-error"
        />
        {state.errors?.email && <p id="email-error" className="text-red-300 text-sm mt-1">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white font-semibold">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Let us know how we can help..." 
          required 
          rows={5} 
          className="bg-white/20 border-white/30 placeholder:text-white/60 text-white focus:bg-white/30 focus:ring-offset-0 focus:ring-white"
          aria-describedby="message-error"
        />
        {state.errors?.message && <p id="message-error" className="text-red-300 text-sm mt-1">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
