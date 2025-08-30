
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  
} from "@/components/ui/alert-dialog"

export const AlertCreateCharacter = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
        <AlertDialogContent className="max-w-fit">
          <AlertDialogHeader>
            <AlertDialogTitle>Create a Character</AlertDialogTitle>
            <AlertDialogDescription>
                Insert the basic informaton for your new characters
            </AlertDialogDescription>
          </AlertDialogHeader>
            {children}
        </AlertDialogContent>
    </>
  )
}
