import {
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

export const AlertCreateEpisode = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create a new episode</AlertDialogTitle>
            <AlertDialogDescription>
              Insert the basic informaton for your new Episode
            </AlertDialogDescription>
            
            {children}

          </AlertDialogHeader>
        </AlertDialogContent>
    </div>
  )
}
