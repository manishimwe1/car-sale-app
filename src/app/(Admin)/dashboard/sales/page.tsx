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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Id } from "../../../../../convex/_generated/dataModel";
import { api } from "../../../../../convex/_generated/api";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  subTitle: z.string().min(2, {
    message: "Brand must be at least 2 characters.",
  }),
  image: z.instanceof(File),
});

export function SalesPage() {
  //   const uploadCar = useMutation(api.cars.createCar);
  const createBanner = useMutation(api.banner.createBanner);
  const generateUploadUrl = useMutation(api.cars.generateUploadUrl);
  const router = useRouter();

  const [filesid, setFilesid] = useState<Id<"_storage">>();
  const [logo, setLogo] = useState<File | undefined>();
  // const [logoId, setLogoId] = useState<Id<"_storage">>();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subTitle: "",
      image: logo ? logo : undefined,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!logo) {
        console.log("No file found");
        return;
      }
      setLoading(true);

      const Url = await generateUploadUrl();

      let logoId: Id<"_storage">;
      if (logo) {
        const postUrl = async () => {
          try {
            const result = await fetch(Url, {
              method: "POST",
              headers: { "Content-Type": logo.type },
              body: logo,
            });

            if (!result.ok) {
              console.error("Logo upload failed:", await result.text());
              return;
            }

            const { storageId } = await result.json();
            setFilesid(storageId);
          } catch (err) {
            console.error("Logo upload failed:", err);
          }
        };

        // Run the file uploads and logo upload in parallel
        await postUrl();
      } else {
        console.warn("No logo file provided.");
      }

      // Proceed with uploading car data if uploads were successful

      await createBanner({
        title: values.title,
        subTitle: values.subTitle,
        image: filesid ? filesid : undefined,
      });

      setLoading(false);
      form.reset();
      setFilesid(undefined);

      router.push("/dashboard");
    } catch (error) {
      console.log(error, "Something went wrong!");
      throw new ConvexError("Something went wrong while uploading new car");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:min-w-[400px] h-full py-10 mx-auto flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="flex items-center justify-between gap-2 md:gap-4 flex-col md:flex-row">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subTitle"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter a descrption.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-end justify-between gap-2 md:gap-4">
            <div className="w-fit md:w-[300px] h-full ml-2 text-stone-600 cursor-pointer flex flex-col text-center justify-between gap-1">
              <FormLabel className="text-left">Image</FormLabel>

              <input
                type="file"
                onChange={(e) =>
                  setLogo(e.target?.files ? e.target?.files[0] : undefined)
                }
                className="!w-[180px] "
              />
            </div>
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
