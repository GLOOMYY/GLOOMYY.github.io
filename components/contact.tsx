"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Mail, User, Github, Linkedin, Instagram, MapPin, Phone, Send, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
    try {
      // Aquí normalmente enviarías los datos del formulario a tu backend
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simular llamada a API
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Contact_Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2 bg-black/80 backdrop-blur-sm border border-blue-400 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:sebas.mesa.montoya@gmail.com"
                className="flex items-center text-blue-400 hover:text-blue-200 transition-colors duration-300"
              >
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                sebas.mesa.montoya@gmail.com
              </a>
              <a
                href="tel:+923055356766"
                className="flex items-center text-blue-400 hover:text-blue-200 transition-colors duration-300"
              >
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                +57 305 343 8319
              </a>
              <div className="flex items-center text-blue-400">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                Medellin, Colombia
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-blue-400">
              <div className="flex items-center justify-center space-x-6 mb-6">
                <a href="#" className="text-blue-400 hover:text-blue-200 transition-colors">
                  <User className="w-8 h-8" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-200 transition-colors">
                  <Briefcase className="w-8 h-8" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-200 transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name")}
                    className="w-full p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject")}
                    className="w-full p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    {...register("message")}
                    className="w-full p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" />}
                  &gt; Send_Message
                </button>
                {submitSuccess && <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

