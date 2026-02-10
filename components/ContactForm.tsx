"use client";

import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

const onInvalid = (errors: FieldValues) => {
  console.error("Validation Failed:", errors);
  const errorMessages = Object.values(errors)
    .map((error) => (error as { message: string }).message)
    .join(", ");
  alert("Please check the following fields: " + errorMessages);
};

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    console.log("Attempting Web3Forms submission...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
         access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "1f7d1c29-73fa-4b64-b2e3-6f363f8ecf49",
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm relative z-20 overflow-hidden">
      {status === "success" && (
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold">Message Sent!</h3>
          <Button variant="outline" className="mt-8 rounded-full" onClick={() => setStatus("idle")}>
            Send another
          </Button>
        </div>
      )}

      {/* Note the two arguments in handleSubmit: (onSuccess, onError) */}
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Name</label>
            <Input 
              {...register("name")} 
              placeholder="John Doe" 
              className={`bg-background h-12 ${errors.name ? 'border-destructive' : ''}`} 
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Email</label>
            <Input 
              {...register("email")} 
              type="email" 
              placeholder="john@example.com" 
              className={`bg-background h-12 ${errors.email ? 'border-destructive' : ''}`} 
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold ml-1">Message</label>
          <Textarea 
            {...register("message")} 
            placeholder="Tell me about your project..." 
            className={`bg-background min-h-[160px] ${errors.message ? 'border-destructive' : ''}`} 
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
        </div>

        <Button 
          type="submit" 
          disabled={status === "loading"} 
          className="w-full h-14 text-lg font-bold rounded-xl active:scale-[0.98] transition-transform"
        >
          {status === "loading" ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> Send Message</>
          )}
        </Button>

        {status === "error" && (
          <div className="flex items-center gap-2 text-destructive text-sm justify-center">
            <AlertCircle className="h-4 w-4" />
            <span>Submission failed. Try again.</span>
          </div>
        )}
      </form>
    </div>
  );
}