"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label, Textarea } from "@/components/ui/Field";
import { ResumeFileInput } from "@/components/ui/ResumeFileInput";
import { SuccessState } from "@/components/ui/SuccessState";

export function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessState title="Application received">
        Thanks for applying to the {jobTitle} role. Our team will review your
        application and reach out if there&apos;s a fit.
      </SuccessState>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Full name
          </Label>
          <Input id="name" name="name" type="text" required placeholder="Jordan Smith" />
        </div>
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input id="email" name="email" type="email" required placeholder="jordan@email.com" />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>

      <div>
        <Label htmlFor="resume" required>
          Resume
        </Label>
        <ResumeFileInput name="resume" required />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us why you're a great fit for this role..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Submit application
      </Button>
    </form>
  );
}
