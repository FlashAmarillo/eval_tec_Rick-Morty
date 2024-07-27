
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
    <div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create a Character</AlertDialogTitle>
            <AlertDialogDescription>
                Insert the basic informaton for your new characters
            </AlertDialogDescription>
            
            {children}
          </AlertDialogHeader>
        </AlertDialogContent>
    </div>
  )
}
