import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { errorAlertTypes } from "@/types/errorAlertTypes"
import { authErrorCases } from "@/backend/errors";

export default function ErrorAlert({ payload }: { payload: errorAlertTypes }) {

  // Get the Error data from the payload
  const { AlertCode, AlertTitle: type } = payload;

  // Send the error type to check on its type
  const { errortitle, errordescription } = authErrorCases(type)

  return (
    <Alert className={`${payload.style}`} variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle className="flex justify-between capitalize">
        {errortitle}
        {/* | {payload.AlertTitle} */}
        <code className="italic text-gray-500 text-xs">{AlertCode}</code>
      </AlertTitle>
      <AlertDescription>
        {errordescription}
        {/* | {payload.AlertDescription} */}
      </AlertDescription>
    </Alert>
  )
}