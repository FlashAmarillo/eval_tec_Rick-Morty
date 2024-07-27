"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    AlertDialogCancel,
    AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
  airDate: z.string()
  .refine((val) => !isNaN(Date.parse(val)), { message: "Please select a valid date" })
  .transform((val) => new Date(val)),
  episode: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
  characters: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
})

const CreateEpisodeForm = ({ closeModal }: { closeModal: () => any }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      airDate: new Date(),
      episode: "",
      characters: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    const wait = () => new Promise((resolve) => setTimeout(resolve, 3000))
    wait()
    closeModal()
    toast({
      title: "You submitted the following values:",
      duration: 2000,
      description: (
        <pre className="w-[250px] rounded-md p-1">
          <code className="text-slate-800">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
      
        <FormField
          control={form.control}
          name="name"
          render={({ field }: { field: any}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="airDate"
          render={({ field }: { field: any}) => (
            <FormItem>
              <FormLabel>Air Date</FormLabel>
              <FormControl>
                <Input type="date" placeholder="Air Date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="episode"
          render={({ field }: { field: any}) => (
            <FormItem>
              <FormLabel>Episode</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Episode" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="characters"
          render={({ field }: { field: any}) => (
            <FormItem>
              <FormLabel>Characters</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Characters" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button type="submit">
            Create Character
          </Button>
          {/* <AlertDialogAction type="submit">
          </AlertDialogAction> */}
        </AlertDialogFooter>
        
      </form>
    </Form>
  )
}

export default CreateEpisodeForm