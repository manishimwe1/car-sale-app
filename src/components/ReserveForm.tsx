"use client";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import Form from "next/form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { useReserveStore } from "@/lib/store/zustand";

const ReserveForm = () => {
  const { data: session, status } = useSession();

  const [drop, setDrop] = useState<string>("");
  const [Pick, setPick] = useState<string>("masaka dubai port");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [open, setopen] = useState(false);
  const router = useRouter();
  const sendData = useReserveStore((state) => state.sendData);

  const onSubmit = () => {
    const data = { drop, Pick, date, time };
    if (!drop || !Pick || !date || !time) return;
    sendData(data);
    router.push(`/reserve`);
  };

  return (
    <Form action={onSubmit} className="space-y-4 w-full">
      <div>
        <input
          type="text"
          placeholder="Pick-up Address"
          value={"Masaka Dubai port"}
          onChange={(v) => setPick(v.target.value)}
          disabled
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Drop-off Address"
          value={drop}
          onChange={(v) => setDrop(v.target.value)}
          className="border border-gray-300 p-1 w-full rounded placeholder:text-xs"
        />
      </div>
      <div className="w-full relative">
        <Label>Date of drive</Label>
        <Popover onOpenChange={() => setopen(true)} open={open}>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className={cn("w-full pl-3 text-left font-normal")}
            >
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="rounded-md border mt-4">
              <Calendar
                mode="single"
                //@ts-ignore
                selected={date}
                onSelect={(v) => {
                  setDate(v?.toLocaleDateString() ?? "");
                  setopen(false);
                }}
              />
            </div>
          </PopoverContent>
        </Popover>
        {date && (
          <Label className="absolute bottom-2 left-2 w-fit ">{date}</Label>
        )}
      </div>
      <div>
        <input
          type="time"
          id="time"
          placeholder="Pick-up Time"
          value={time}
          onChange={(v) => setTime(v.target.value)}
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      {status === "loading" && <Skeleton className="w-full py-2 rounded-2xl" />}
      {session?.user ? (
        <Button
          type="submit"
          className="w-full bg-black hover:bg-black/60 text-white py-2 rounded-2xl"
        >
          Reserve Now
        </Button>
      ) : (
        <Button
          asChild
          type="button"
          className="w-full bg-black hover:bg-black/60 text-white py-2 rounded-2xl"
        >
          <Link href={"/login?link=reserve"}>Sign in to Reserve Now</Link>
        </Button>
      )}
    </Form>
  );
};

export default ReserveForm;
