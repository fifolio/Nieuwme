import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Validations
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema } from '@/schemas/formSchemas';
import { signupTypes } from '@/types/formTypes';
// UI
import { ProjectDetails } from '@/stores/ui/ProjectDetails';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pending from '@/components/ui/pending/Pending';
import { ErrorAlert } from '@/components/ui/alerts';
// Auth
import { SignupAPI } from '@/services/auth';
// Store
import { useStore_AlertError_Signup } from '@/stores/useStore_AlertError_Signup';


export default function Signup() {

  const navigate = useNavigate();

  // Get the stored error alert
  const {
    AlertError_Sound,
    AlertError_State_Signup,
    AlertError_Title_Signup,
    AlertError_Description_Signup,
    setAlertError_Sound,
    setAlertError_State_Signup,
    setAlertError_Code_Signup,
    setAlertError_Title_Signup,
    // setAlertError_Description_Signup,
  } = useStore_AlertError_Signup();

  // Form submit pending state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // get username for the pending state
  const [username, setUsername] = useState<string>('')


  const { register, handleSubmit, formState: { errors } } = useForm<signupTypes>({
    resolver: zodResolver(signupSchema)
  });


  const submitData = (data: signupTypes) => {
    // get username for the pending state
    setUsername(data.username);


    setIsSubmitting(true);
    setAlertError_State_Signup(false);

    // Send data to api
    SignupAPI(
      data,
      setIsSubmitting,
      setAlertError_State_Signup,
      setAlertError_Code_Signup,
      setAlertError_Title_Signup,
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
      <div className="space-y-2 text-center mt-8">
        <h1 className="text-xl font-bold">
          {ProjectDetails.global.name}
        </h1>
        <p className="text-gray-500 text-sm font-semibold">
          {ProjectDetails.signupPage.description}
        </p>
      </div>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="space-y-1">
          <div className="space-y-2">
            {/* <Label htmlFor="username">Username</Label> */}
            <Input {...register("username")} id="username" type="text" placeholder="Username" required />
            {errors.username && <small className="text-red-600">
              {errors.username.message}
            </small>}
          </div>
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
          <div className="space-y-2">
            <Input {...register("confirmPassword")} id="confirmPassword" required type="password" placeholder='Confirm password' />
            {errors.confirmPassword && <small className="text-red-600">
              {errors.confirmPassword.message}
            </small>}
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ?
              <Pending payload={
                {
                  message: 'Creating for you',
                  refer: username,
                  icon: '😍'
                }
              } />
              : 'Create My Journal'}
          </Button>

          <div className={AlertError_State_Signup ? 'block' : 'hidden'}>
            <ErrorAlert payload={{
              AlertTitle: AlertError_Title_Signup,
              AlertDescription: AlertError_Description_Signup,
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
          Already have a Journal?
          <Button className="w-full mt-4" variant="outline" onClick={() => navigate("/in")}>
            Login
          </Button>
        </p>
      </div>
    </div>
  )
}

