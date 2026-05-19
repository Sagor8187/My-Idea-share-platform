"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import {
  
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  
 
  TextArea,
  
  Select,
  ListBox,
} from "@heroui/react";


export default function IdeaUpdate({item}) {

const onSubmit = async (e) => {
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
createdAt:new Date().toISOString()
    
  };

  const res = await fetch(
    `http://localhost:5000/idea/${item._id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const output = await res.json();

  console.log(output);
};


  const categories = [
    { key: "ai", label: "AI" },
    { key: "tech", label: "Tech" },
    { key: "education", label: "Education" },
    { key: "health", label: "Health" },
    { key: "business", label: "Business" },
  ];

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
    <div>
         <Modal>
      <Button variant="secondary">Edit Idea</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              
              <Modal.Heading>Update your Idea Inforation</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
                        className="w-full max-w-4xl bg-content1 p-6 sm:p-10 rounded-2xl shadow-xl "
                        onSubmit={onSubmit}
                        validationBehavior="native"
                      >
                        <Fieldset className="w-full space-y-6">
                          {/* Header Section */}
                          
                
                          <FieldGroup className="space-y-6">
                            {/* Row 1: Title + Category */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
                              <TextField isRequired name="ideaTitle"  defaultValue={item?.ideaTitle} className="w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Idea Title
                                </Label>
                                <Input
                               
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  placeholder="AI Study Assistant App"
                                  className={inputStyles}
                                />
                                <FieldError className="text-xs text-danger mt-1" />
                              </TextField>
                
                              {/* Fixed Select Box */}
                              <div className="flex flex-col w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Category
                                </Label>
                                <Select
                                 defaultValue={item?.category}
                                  isRequired
                                  name="category"
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  placeholder="Select category"
                                  aria-label="Select category"
                                  className={{
                                    trigger:
                                      "bg-default-100 dark:bg-default-50 hover:bg-default-200 dark:hover:bg-default-100",
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
                            <TextField isRequired  defaultValue={item?.shortDescription} name="shortDescription" className="w-full">
                              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                Short Description
                              </Label>
                              <Input
                                variant="flat"
                                radius="xl"
                                size="lg"
                                placeholder="Short summary of your idea"
                                className={inputStyles}
                              />
                              <FieldError className="text-xs text-danger mt-1" />
                            </TextField>
                
                            {/* Row 3: Detailed Description */}
                            <TextField isRequired  defaultValue={item?.detailedDescription} name="detailedDescription" className="w-full">
                              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                Detailed Description
                              </Label>
                              <TextArea
                                variant="flat"
                                radius="xl"
                                size="lg"
                                placeholder="Explain your idea in detail..."
                                className={inputStyles}
                              />
                              <FieldError className="text-xs text-danger mt-1" />
                            </TextField>
                
                            {/* Row 4: Tags + Budget */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <TextField defaultValue={item?.tags} name="tags" className="w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Tags
                                </Label>
                                <Input
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  placeholder="Enter Tag idea"
                                  className={inputStyles}
                                />
                                <Description className="text-xs text-default-400 mt-1">
                                  Comma separated tags
                                </Description>
                                <FieldError className="text-xs text-danger mt-1" />
                              </TextField>
                
                              <TextField defaultValue={item?.estimatedBudget}  name="estimatedBudget" className="w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Estimated Budget ($)
                                </Label>
                                <Input
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  type="number"
                                  placeholder="5000"
                                  className={inputStyles}
                                />
                                <FieldError className="text-xs text-danger mt-1" />
                              </TextField>
                            </div>
                
                            {/* Row 5: Image + Audience */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <TextField defaultValue={item?.imageURL} name="imageURL" className="w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Image URL
                                </Label>
                                <Input
                                  type="url"
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  placeholder="https://..."
                                  className={inputStyles}
                                />
                                <FieldError className="text-xs text-danger mt-1" />
                              </TextField>
                
                              <TextField defaultValue={item?.targetAudience} name="targetAudience" className="w-full">
                                <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                  Target Audience
                                </Label>
                                <Input
                                  variant="flat"
                                  radius="xl"
                                  size="lg"
                                  placeholder="Students and teachers"
                                  className={inputStyles}
                                />
                                <FieldError className="text-xs text-danger mt-1" />
                              </TextField>
                            </div>
                
                            {/* Problem Statement */}
                            <TextField defaultValue={item?.problemStatement} name="problemStatement" className="w-full">
                              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                Problem Statement
                              </Label>
                              <TextArea
                                variant="flat"
                                radius="xl"
                                size="lg"
                                placeholder="What problem are you solving?"
                                className={inputStyles}
                              />
                              <FieldError className="text-xs text-danger mt-1" />
                            </TextField>
                
                            {/* Proposed Solution */}
                            <TextField defaultValue={item?.proposedSolution} name="proposedSolution" className="w-full">
                              <Label className="text-xs font-bold uppercase tracking-wider text-default-600 mb-1">
                                Proposed Solution
                              </Label>
                              <TextArea
                                variant="flat"
                                radius="xl"
                                size="lg"
                                placeholder="How will your idea solve it?"
                                className={inputStyles}
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
                              Add Idea
                            </Button>
                          </Fieldset.Actions>
                        </Fieldset>
                      </Form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    </div>
  )
}

