"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Loader2 } from "lucide-react"
import * as z from "zod"
import SocialLinks from "@/components/contact/SocialLinks"

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      setSubmitError("An error occurred while sending the message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="lg:w-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-blue-400">
      <SocialLinks />
      <form onSubmit={handleSubmit(onSubmit)}>
        {["name", "email", "subject", "message"].map((field) => (
          <div className="mb-4" key={field}>
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              {...register(field as keyof FormData)}
              className="w-full p-2 bg-white dark:bg-black/50 border border-gray-300 dark:border-blue-400 rounded text-gray-800 dark:text-blue-400 placeholder-gray-500 dark:placeholder-blue-600"
            />
            {errors[field as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">{errors[field as keyof FormData]?.message}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded transition-colors flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" />}
          &gt; Send_Message
        </button>
        {submitSuccess && <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>}
        {submitError && <p className="text-red-500 text-sm mt-4" role="alert">{submitError}</p>}
      </form>
    </div>
  )
}

export default ContactForm
