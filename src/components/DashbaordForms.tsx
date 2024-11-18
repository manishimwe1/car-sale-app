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
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import DropeZOne from "./Dropzone"; // Ensure the component name matches
import SelectType from "./SelectType";
import BrandSelecter from "@/app/(Admin)/dashboard/_components/BrandSelecter";
import { carType } from "../../types";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  brand: z.string().min(2, {
    message: "Brand must be at least 2 characters.",
  }),
  money: z.coerce.number(),
  KM_Done: z.coerce.number(),
  typeOfCar: z.enum(["diesel", "electric", "hybrid"]),
});
const editSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

  brand: z.string().min(2, {
    message: "Brand must be at least 2 characters.",
  }),
  money: z.coerce.number(),
  KM_Done: z.coerce.number(),
  typeOfCar: z.enum(["diesel", "electric", "hybrid"]),
});

export function DashboardForm({ car }: { car?: carType }) {
  const uploadCar = useMutation(api.cars.createCar);
  const updateCar = useMutation(api.cars.updateCar);
  const generateUploadUrl = useMutation(api.cars.generateUploadUrl);
  const router = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  const [logo, setLogo] = useState<File | null>(car ? car.logoId : null);
  // const [logoId, setLogoId] = useState<Id<"_storage">>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (car) {
      setFiles(car.imageIds);
    }
  }, [car]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: car ? car.name : "",
      money: car ? car.money : 0,
      brand: car ? car.brand : "",
      KM_Done: car ? car.KM_Done : 0,
    },
  });

  async function onSubmit(
    values: z.infer<typeof formSchema | typeof editSchema>
  ) {
    try {
      if (files.length <= 0) {
        console.log("No file found");
        return;
      }
      setLoading(true);

      const postUrl = await generateUploadUrl();
      const logoUrl = await generateUploadUrl();

      const imageUrls: Id<"_storage">[] = [];
      const uploadPromises = files.map(async (file) => {
        if (!car) {
          try {
            const result = await fetch(postUrl, {
              method: "POST",
              headers: { "Content-Type": file.type },
              body: file,
            });

            if (!result.ok) {
              console.error("Image upload failed:", await result.text());
              return;
            }

            const { storageId } = await result.json();
            imageUrls.push(storageId);
          } catch (err) {
            console.error("Image upload failed for a file:", err);
          }
        }
      });

      const logoId: Id<"_storage">[] = [];
      if (logo && !car) {
        const logoUpload = async () => {
          try {
            const result = await fetch(logoUrl, {
              method: "POST",
              headers: { "Content-Type": logo.type },
              body: logo,
            });

            if (!result.ok) {
              console.error("Logo upload failed:", await result.text());
              return;
            }

            const { storageId } = await result.json();
            logoId.push(storageId);
          } catch (err) {
            console.error("Logo upload failed:", err);
          }
        };

        // Run the file uploads and logo upload in parallel
        await Promise.all([...uploadPromises, logoUpload()]);
      } else {
        console.warn("No logo file provided.");
      }

      // Proceed with uploading car data if uploads were successful

      if (car) {
        await updateCar({
          carId: car._id,
          name: values.name,
          brand: values.brand,
          money: values.money,
          // imageUrls: files,
          // logoID:car.logoId, // Get the first logo ID if available
          typeOfCar: values.typeOfCar,
          KM_Done: values.KM_Done,
        });

        setLoading(false);
        form.reset();
        setFiles([]);
      } else {
        await uploadCar({
          name: values.name,
          brand: values.brand,
          money: values.money,
          imageUrls: imageUrls,
          logoID: logoId[0], // Get the first logo ID if available
          typeOfCar: values.typeOfCar,
          KM_Done: values.KM_Done,
        });
        setLoading(false);
        form.reset();
        setFiles([]);
      }
      router.push("/dashboard/all-cars");
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
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
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
                <FormItem className="w-full">
                  <FormLabel>Money</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Enter an amount.."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    How much money for this car .
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-between gap-2 md:gap-4">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="text-left  w-full">
                  <FormLabel className="">Brand</FormLabel>
                  <FormControl>
                    <BrandSelecter setBrand={field.onChange} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="typeOfCar"
              render={({ field }) => (
                <FormItem className="text-left w-full">
                  <FormLabel>Type of car</FormLabel>
                  <FormControl>
                    <SelectType setType={field.onChange} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-end justify-between gap-2 md:gap-4">
            <FormField
              control={form.control}
              name="KM_Done"
              render={({ field }) => (
                <FormItem className="!w-full flex-1">
                  <FormLabel>Km Done</FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Enter an amount.."
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-fit md:w-[300px] h-full ml-2 text-stone-600 cursor-pointer flex flex-col text-center justify-between gap-1">
              <FormLabel className="text-left">Logo</FormLabel>

              <input
                type="file"
                onChange={(e) =>
                  setLogo(e.target?.files ? e.target?.files[0] : null)
                }
                className="!w-[180px] "
              />
            </div>
          </div>

          <div className="w-full border">
            <DropeZOne setFiles={setFiles} car={car} />
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
