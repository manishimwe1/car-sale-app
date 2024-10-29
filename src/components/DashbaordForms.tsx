"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { ConvexError } from "convex/values";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import DropeZOne from "./Dropzone"; // Ensure the component name matches

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  brand: z.string().min(2, {
    message: "Brand must be at least 2 characters.",
  }),
  money: z.coerce.number(),
});

export function DashboardForm() {
  const uploadCar = useMutation(api.cars.createCar);
  const generateUploadUrl = useMutation(api.cars.generateUploadUrl);

  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      money: 0,
      brand: "",

    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(files.length <= 0){
        return
      }
      setLoading(true);
      const postUrl = await generateUploadUrl();

      const imageUrls: Id<"_storage">[] = [];

      const uploadPromises = files.map(async (file) => {
        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });

        if (!result.ok) {
          console.error("Image upload failed:", await result.text());
          return;
        }
        console.log(result,'ths is results');
        
        const { storageId} = await result.json();
       
// https://famous-chihuahua-933.convex.cloud/api/storage/5e881ae0-c6e5-4af2-955f-85ac40367069
// "https://famous-chihuahua-933.convex.cloud/api/storage/kg28aqbrjybkmhg3h385g0b38d73k2ej"
        imageUrls.push(storageId);
      });

      await Promise.all(uploadPromises);
      console.log(imageUrls, "image ids");

      await uploadCar({
        name: values.name,
        brand: values.brand,
        money: values.money,
        imageUrls: imageUrls,
      });

      setLoading(false);
      form.reset();
      setFiles([]);
    } catch (error) {
      console.log(error, "Something went wrong!");
      throw new ConvexError("Something went wrong while uploading new car");
    }
  }

  return (
    <div className="min-w-[400px] h-full py-10 mx-auto flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name.." {...field} />
                </FormControl>
                <FormDescription>
                  This is your car display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="money"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Money</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    placeholder="Enter an amount.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Brand.." {...field} />
                </FormControl>
                <FormDescription>
                  This is your car display Brand.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full border">
            <DropeZOne setFiles={setFiles} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Submit...
              </>
            ) : (
              <p>Submit</p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
