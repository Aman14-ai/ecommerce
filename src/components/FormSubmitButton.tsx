'use client'
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import {toast} from 'sonner'

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const FormSubmitButton = ({ children, className }: Props) => {
  
  const {pending} = useFormStatus();
  return (
    <div className="pt-4">
      <button
        disabled={pending}
        type="submit"
        className={`focus:ring-opacity-50 w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-800 hover:shadow-xl focus:ring-4 focus:ring-blue-500 ${className} ${pending ? " cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      >
        {pending ? <div className="flex items-center justify-center gap-3">submitting <Loader2 className="animate-spin"/></div> : children}
      </button>
    </div>
  );
};

export default FormSubmitButton;
