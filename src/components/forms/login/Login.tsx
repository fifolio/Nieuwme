import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Validations
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schemas/formSchemas';
import { loginTypes } from '@/types/formTypes';
// UI
import { ProjectDetails } from '@/stores/ui/ProjectDetails';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pending from '@/components/ui/pending/Pending';
import { ErrorAlert } from '@/components/ui/alerts';
// Auth
import { LoginAPI } from '@/services/auth';
// Store
import { useStore_AlertError_Login } from '@/stores/useStore_AlertError_Login';


export default function Login() {

  const navigate = useNavigate();

  // Get the stored error alert
  const {
    AlertError_Sound,
    AlertError_State_Login,
    AlertError_Title_Login,
    AlertError_Description_Login,
    setAlertError_Sound,
    setAlertError_State_Login,
    setAlertError_Code_Login,
    setAlertError_Title_Login,
  } = useStore_AlertError_Login();

  // Form submit pending state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

   const { register, handleSubmit, formState: { errors } } = useForm<loginTypes>({
    resolver: zodResolver(loginSchema)
  });


  const submitData = (data: loginTypes) => {

    setIsSubmitting(true);
    setAlertError_State_Login(false);

    // Send data to api
    LoginAPI(
      data,
      setIsSubmitting,
      setAlertError_State_Login,
      setAlertError_Code_Login,
      setAlertError_Title_Login,
      setAlertError_Sound,
      navigate
    );
  };


  // Alert Error Sound Effect
  const audio = new Audio('src/assets/sounds/error.mp3');
  audio.pause()
  if (AlertError_Sound) {
    audio.play();
    setAlertError_Sound(false);
  }

  return (
    <div className="w-[300px] max-w-screen-sm px-4 py-10 space-y-6 mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-bold">
          {ProjectDetails.global.name}
        </h1>
        <p className="text-gray-500 text-sm font-semibold">
          {ProjectDetails.loginPage.description}
        </p>
      </div>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="space-y-1">
          <div className="space-y-2">
            {/* <Label htmlFor="email">Email</Label> */}
            <Input {...register("email")} id="email" placeholder="Email Address" required type="email" />
            {errors.email && <small className="text-red-600">{errors.email.message}
            </small>}
          </div>
          <div className="space-y-2">
            <Input {...register("password")} id="password" required type="password" placeholder='Password' />
            {errors.password && <small className="text-red-600">
              {errors.password.message}
            </small>}
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ?
              <Pending payload={
                {
                  message: '',
                }
              } />
              : 'Login'}
          </Button>

          <div className={AlertError_State_Login ? 'block' : 'hidden'}>
            <ErrorAlert payload={{
              AlertTitle: AlertError_Title_Login,
              AlertDescription: AlertError_Description_Login,
              style: '!mt-4 shadow-md'
            }} />
          </div>

          {/* <Button className="w-full" variant="outline">
            Sign Up with Google
          </Button> */}
        </div>
      </form>
      <hr className="h-px bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-2">
        <p className="text-center text-sm">
          Don't have a Journal?
          <Button className="w-full mt-4" variant="outline" onClick={() => {
            setAlertError_State_Login(false)
            navigate("/up")
          }}>
            Create a new journal now
          </Button>
        </p>
      </div>
    </div>
  )
}

