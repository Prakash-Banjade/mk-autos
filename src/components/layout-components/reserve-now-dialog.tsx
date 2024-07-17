import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReserveNowDialog({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[361px]">
                <DialogHeader>
                    <DialogTitle className="font-semibold leading-7 text-[#364152] text-lg font-hubot">
                        Before connecting you with a consultant, please fill in the information below.
                    </DialogTitle>
                </DialogHeader>
                <form className="flex flex-col gap-4 mt-3" method="dialog">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-right">
                            Name<span>*</span>
                        </Label>
                        <Input id="name" className="col-span-3" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username" className="text-right">
                            Phone number<span>*</span>
                        </Label>
                        <Input id="username" type="tel" className="col-span-3" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username" className="text-right">
                            Mail
                        </Label>
                        <Input id="username" type="email" className="col-span-3" placeholder="Your mail" />
                    </div>
                    <Button className='w-full text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all mt-6'>
                        Start Chat
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
