'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(1, { message: "Please enter your name." }).max(50),
    phone: z.string().min(1, { message: "Please enter your phone." }),
    email: z.string().optional(),
})


export function ReserveNowDialog({ children }: { children: React.ReactNode }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    })

    function onSubmit() {
        window.location.replace('https://api.whatsapp.com/send?phone=+971524574831&text=Hi%21+I%27m+interested+in+renting+a+luxury+car+with+MKAutos')
    }

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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                        <span>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Phone number
                                        <span>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your phone number" type="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Mail
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your mail" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='w-full text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all mt-4'>
                            Start Chat
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
