"use client";
import CKEditor from "@/components/organism/CKEditor";
import FieldInput from "@/components/organism/FieldInput";
import InputSkills from "@/components/organism/InputSkills";
import InputBenefits from "@/components/organism/inputBenefits";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { JOBTYPES } from "@/constants";
import { jobFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PostJobPage: FC = () => {
    const [editorLoaded,setEditorLoaded] = useState<boolean>(false)
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  useEffect(()=> {
    setEditorLoaded(true)
  }, [])

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="m-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6">
          <FieldInput
            title="Job Title"
            subTitle="Job title must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. Software Enginer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Type Of Employment"
            subTitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item, index) => (
                        <FormItem
                          key={item + index}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel>{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subTitle="Please specify the estimated salary range of the role"
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput title="Category" subTitle="You can select job category">
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <Select>
                  <SelectTrigger className="w-[450px]">
                    <SelectValue placeholder="Select Job Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </FieldInput>

          <FieldInput title="Required Skill" subTitle="Add required skills for the job">
            <InputSkills form={form} />
          </FieldInput>


          <FieldInput title="Job Description" subTitle="Job title must be describe one position">
            <CKEditor form={form} name={"jobDesctiption"} editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Responsibilities" subTitle="Outline the core responsibilities of the position">
            <CKEditor form={form} name={"responsibility"} editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Who You Are" subTitle="Add your prefered candidates qualification">
            <CKEditor form={form} name={"whoYouAre"} editorLoaded={editorLoaded} />
          </FieldInput>
          <FieldInput title="Nice-To-Haves" subTitle="Add nice to haves skills and qualifications for the role to encourage a more diverse set of candidates to apply">
            <CKEditor form={form} name={"niceToHaves"} editorLoaded={editorLoaded} />
          </FieldInput>


          <FieldInput title="Perks And Benefits" subTitle="Encourge more people to apply by sharing the attractive reward and benefit you">
            <InputBenefits form={form} />
          </FieldInput>
         


         <div className="flex justify-end">
            <Button size={"lg"}>Do a Review</Button>
         </div>
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
