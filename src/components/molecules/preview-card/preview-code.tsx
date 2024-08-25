"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog";
import { Button } from "@/components/atoms/button";
import { ReactNode } from "react";

export function PreviewCode({ code }: { code?: ReactNode }) {
  return (
    <div className="flex">
      <Button variant="ghost" className="px-2 py-1 text-xs hover:bg-background">
        Preview
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Code</DialogTitle>
            <DialogDescription>
              Here you can see the code snippet for the preview component.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">{code}</div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit" variant="ghost">
                Okay
              </Button>
            </DialogClose>
            <Button type="submit">Copy code</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
