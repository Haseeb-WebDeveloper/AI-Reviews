"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from "react";

const steps = [1, 2, 3, 4];

function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
   <section className="py-28">
     <div className="max-w-[1050px] mx-auto px-6 md:px-0 space-y-8 text-center min-w-[300px]">
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep > steps.length}
        >
          Next step
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Controlled stepper with checkmarks
      </p>
    </div>
   </section>
  );
}

export { HowItWorks };
