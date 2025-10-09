import { Button } from "@triplone/ui/components/button";
import { Input } from "@triplone/ui/components/input";
import { Label } from "@triplone/ui/components/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@triplone/ui/components/dialog";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left">
          Welcome to{" "}
          <a
            className="text-blue-600 hover:underline"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Triplone Web!
          </a>
        </h1>
        <div className="mt-4 text-lg text-center sm:text-left max-w-[700px]">
          <p className="mb-4">
            Start your trip with Triplone, the all-in-one solution for planning,
            booking, and managing your travel adventures with ease and
            confidence.
          </p>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button>Get Started</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
