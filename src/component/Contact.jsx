"use client";

import { useState } from "react";
import { Input, Button,TextArea } from "@heroui/react";
import {Envelope} from "@gravity-ui/icons";
import {InputGroup, Label, TextField} from "@heroui/react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

   
    alert("Message sent! ");
    e.target.reset();
  };

  return (
    <div>
        <h1 className=" mt-8 mb-5 md:mt-15 text-center text-xl font-bold">Contact Form</h1>
        <div className=" flex items-center justify-center px-4 bg-background text-foreground">
        
      <div className="w-full max-w-lg bg-content1 border border-default-200 rounded-xl p-6 shadow-sm">

        <h1 className="text-xl font-semibold text-center mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          
        <TextField className="w-full max-w-full" name="name">
      <Label>Name</Label>
      <InputGroup>
       
        <InputGroup.Input className="w-full max-w-full" placeholder="Enter your Name" />
      </InputGroup>
    </TextField>

    <TextField className="w-full max-w-full" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <Envelope className="size-4 text-muted" />
        </InputGroup.Prefix>
        <InputGroup.Input className="w-full max-w-full" placeholder="name@email.com" />
      </InputGroup>
    </TextField>
         
         <TextField className="w-full max-w-full " name="subject">
      <Label>Subject</Label>
      <InputGroup>
        
        <InputGroup.Input className="w-full max-w-full" placeholder="About Your subject" />
      </InputGroup>
    </TextField>
         
         

          <Button type="submit" color="primary" className="w-full">
            Send Message
          </Button>

        </form>

      </div>
    </div>
    </div>
  );
}