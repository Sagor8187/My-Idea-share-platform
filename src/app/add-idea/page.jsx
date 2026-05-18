"use client";

import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox
} from "@heroui/react";

export default function AddIdea() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const mydata = Object.fromEntries(formData.entries());
    
    const data = {
      ideaTitle: mydata.ideaTitle,
      shortDescription: mydata.shortDescription,
      detailedDescription: mydata.detailedDescription,
      category: mydata.category,
      tags: mydata.tags,
      imageURL: mydata.imageURL,
      estimatedBudget: mydata.estimatedBudget,
      targetAudience: mydata.targetAudience,
      problemStatement: mydata.problemStatement,
      proposedSolution: mydata.proposedSolution,
    };

    console.log(data);
    alert("Idea submitted successfully!");
  };

  const categories = [
    { key: "ai", label: "AI" },
    { key: "tech", label: "Tech" },
    { key: "education", label: "Education" },
    { key: "health", label: "Health" },
    { key: "business", label: "Business" },
  ];

  // ইনপুটের জন্য কমন স্টাইল ক্লাস (যা লাইট থিমে ব্ল্যাক হওয়া রোধ করবে)
  const inputStyles = {
    inputWrapper: [
      "bg-default-100",
      "dark:bg-default-50",
      "hover:bg-default-200",
      "dark:hover:bg-default-100",
      "focus-within:!bg-default-100",
      "dark:focus-within:!bg-default-50",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <Form 
        className="w-full max-w-3xl bg-content1 p-6 sm:p-10 rounded-2xl shadow-xl border border-default-100 dark:border-default-50" 
        onSubmit={onSubmit}
        validationBehavior="native"
      >
        <Fieldset className="w-full space-y-6">
          
          {/* Header Section */}
          <div className="border-b border-default-100 pb-5">
            <Fieldset.Legend className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Submit Your New Idea
            </Fieldset.Legend>
            <Description className="mt-1.5 text-sm text-default-500 max-w-xl">
              Share your startup concept with the world and get valuable feedback.
            </Description>
          </div>

          <FieldGroup className="space-y-6">

            {/* Row 1: Title + Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
              <TextField isRequired name="ideaTitle" className="w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Idea Title</Label>
                <Input 
                  variant="flat"
                  radius="xl"
                  size="lg"
                  placeholder="AI Study Assistant App" 
                  classNames={inputStyles} 
                />
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>

              {/* Fixed Select Box */}
              <div className="flex flex-col w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Category</Label>
                <Select
                  isRequired
                  name="category"
                  variant="flat"
                  radius="xl"
                  size="lg"
                  placeholder="Select category"
                  aria-label="Select category"
                  
                  classNames={{
                    trigger: "bg-default-100 dark:bg-default-50 hover:bg-default-200 dark:hover:bg-default-100"
                  }}
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  
                  <Select.Popover>
                    <ListBox>
                      {categories.map((cat) => (
                        <ListBox.Item key={cat.key} textValue={cat.label}>
                          {cat.label}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>

            {/* Row 2: Short Description */}
            <TextField isRequired name="shortDescription" className="w-full">
              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Short Description</Label>
              <Input 
                variant="flat"
                radius="xl"
                size="lg"
                placeholder="Short summary of your idea" 
                classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            {/* Row 3: Detailed Description */}
            <TextField isRequired name="detailedDescription" className="w-full">
              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Detailed Description</Label>
              <TextArea 
                variant="flat"
                radius="xl"
                size="lg"
                minRows={4}
                placeholder="Explain your idea in detail..." 
                classNames={inputStyles}
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            {/* Row 4: Tags + Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="tags" className="w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Tags</Label>
                <Input 
                  variant="flat"
                  radius="xl"
                  size="lg"
                  placeholder="ai, education, chatbot" 
                  classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
                />
                <Description className="text-xs text-default-400 mt-1">Comma separated tags</Description>
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>

              <TextField name="estimatedBudget" className="w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Estimated Budget ($)</Label>
                <Input 
                  variant="flat"
                  radius="xl"
                  size="lg"
                  type="text" 
                  placeholder="5000" 
                  classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
                />
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>
            </div>

            {/* Row 5: Image + Audience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="imageURL" className="w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Image URL</Label>
                <Input 
                  variant="flat"
                  radius="xl"
                  size="lg"
                  placeholder="https://..." 
                  classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
                />
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>

              <TextField name="targetAudience" className="w-full">
                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Target Audience</Label>
                <Input 
                  variant="flat"
                  radius="xl"
                  size="lg"
                  placeholder="Students and teachers" 
                  classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
                />
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>
            </div>

            {/* Problem Statement */}
            <TextField name="problemStatement" className="w-full">
              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Problem Statement</Label>
              <TextArea 
                variant="flat"
                radius="xl"
                size="lg"
                minRows={3}
                placeholder="What problem are you solving?" 
                classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            {/* Proposed Solution */}
            <TextField name="proposedSolution" className="w-full">
              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">Proposed Solution</Label>
              <TextArea 
                variant="flat"
                radius="xl"
                size="lg"
                minRows={3}
                placeholder="How will your idea solve it?" 
                classNames={inputStyles} // <-- ফিক্স যোগ করা হয়েছে
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

          </FieldGroup>

          {/* Action Buttons */}
          <Fieldset.Actions className="flex items-center justify-end gap-3 pt-4 border-t border-default-100">
            <Button 
              type="reset" 
              variant="flat"
              radius="xl"
              className="px-5 font-semibold text-foreground cursor-pointer"
            >
              Reset
            </Button>
            
            <Button 
              type="submit"
              color="primary"
              radius="xl"
              className="flex items-center gap-2 px-6 font-semibold shadow-md active:scale-[0.98] transition-all cursor-pointer"
            >
              <FloppyDisk className="w-4 h-4" />
              Submit Idea
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}