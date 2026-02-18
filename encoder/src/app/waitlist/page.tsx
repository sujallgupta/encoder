"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import Navbar from "../../../components/Navbar";


type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const validate = () => {
    const newErrors: any = {};

    if (values.name.trim().length < 2)
      newErrors.name = "Enter full name";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      newErrors.email = "Enter valid email";

    if (values.phone.replace(/\D/g, "").length < 7)
      newErrors.phone = "Enter valid phone";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setFormState("loading");

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdhe8ZESsv6ZL1CyAy2UO-IDF1pkCN3i3Un_uX5vUdzlz0CvQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "entry.156770346": values.name,
            "entry.223456594": values.email,
            "entry.889116114": values.phone,
          }).toString(),
        }
      );

      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
<Navbar/>
        <Link
          href="/"
          className="flex items-center gap-2 text-white/40 hover:text-white mb-10"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <AnimatePresence mode="wait">
          {formState !== "success" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-semibold">
                Join the Waitlist
              </h1>

              <p className="text-white/40 text-sm">
                Be first to access Encoder.
              </p>

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={formState === "loading"}
                className="w-full bg-white text-black rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
              >
                {formState === "loading" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Join Now
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <div className="h-14 w-14 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <Check size={24} className="text-emerald-400" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold">
                You're on the list.
              </h2>

              <p className="text-white/40 text-sm">
                We’ll contact you at {values.email}
              </p>

              <Link
                href="/"
                className="text-white/40 hover:text-white text-sm"
              >
                Back to home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
       
      </div>
    </div>
    
  );
}
