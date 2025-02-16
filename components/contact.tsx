"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Mail, User, Github, Linkedin, Instagram,MapPin, Phone, Send, Loader2 } from "lucide-react"
import Image from "next/image"
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
      // Here you would typically send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
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

        <div>
          <section
            id="contact"
            className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
          >
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-12">
                <motion.div
                  className="lg:w-1/3 bg-black/80 backdrop-blur-sm border border-blue-400 rounded-lg p-8 shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
                    <div className="space-y-6">
                      <a
                        href="mailto:musmanzafar53@gmail.com"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <Mail className="w-6 h-6 mr-3 text-blue-600" />
                        musmanzafar53@gmail.com
                      </a>
                      <a
                        href="tel:+923055356766"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        <Phone className="w-6 h-6 mr-3 text-blue-600" />
                        +92-305-5356766
                      </a>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                        Lahore, Pakistan
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="max-w-md mx-auto bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-blue-400">
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

            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full mb-4 p-2 bg-black/50 border border-blue-400 rounded text-blue-400 placeholder-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded transition-colors"
              >
                &gt; Send_Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

