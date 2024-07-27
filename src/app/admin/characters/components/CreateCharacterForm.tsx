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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
  status: z.enum(["Alive", "Dead", "Unknown"]),
  species: z.enum(["human", "alien", "humanoid", "unknown", "Poopybutthole", "Mythological Creature", "Animal", "Robot", "Cronenberg", "Disease"]),
  origin: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
  type: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
  gender: z.enum(["Male", "Female", "Unknown"]),
  location: z.string().min(2).max(50, { message: "Must be 50 or fewer characters long" }),
})

const CreateCharacterForm = ({ closeModal }: { closeModal: () => any }) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      origin: "",
      type: "",
      location: ""
    }
  })
     
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
        
        <div className="flex flex-row justify-between gap-2">
            <FormField
              control={form.control}
              name="status"
              render={({ field }: { field: any}) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Status"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                          ["Alive", "Dead", "Unknown"].map((option, index) => (
                              <SelectItem key={index} value={option}>{option}</SelectItem>
                          ))
                      }
                    </SelectContent>
                    </Select>
                  <FormMessage />
                </FormItem>
              )}            
            />
            
            <FormField
              control={form.control}
              name="species"
              render={({ field }: { field: any}) => (
                <FormItem>
                  <FormLabel>Species</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-[220px]">
                            <SelectValue placeholder="Species" {...field} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {
                              ["human", "alien", "humanoid", "unknown", "Poopybutthole", "Mythological Creature", "Animal", "Robot", "Cronenberg", "Disease"].map((option, index) => (
                                  <SelectItem key={index} value={option}>{option}</SelectItem>
                              ))
                          }
                        </SelectContent>
                        </Select>
                <FormMessage />
                </FormItem>
              )}
            />

        </div>

        <FormField
          control={form.control}
          name="origin"
          render={({ field }: { field: any}) => (
            <FormItem>
              <div>
                <FormLabel>Origin</FormLabel>
                <FormControl>
                  <Input placeholder="Origin" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }: { field: any}) => (
            <FormItem>
              <div>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input placeholder="Type" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
        control={form.control}
        name="gender"
        render={({ field }: { field: any}) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                      <SelectValue placeholder="gender"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {
                        ["Male", "Female", "Unknown"].map((option, index) => (
                            <SelectItem key={index} value={option}>{option}</SelectItem>
                        ))
                    }
                </SelectContent>
              </Select>
            <FormMessage />
            </FormItem>
        )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }: { field: any}) => (
            <FormItem>
              <div>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
              </div>
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

export default CreateCharacterForm