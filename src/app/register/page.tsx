"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUser, FiMail, FiLock, FiImage, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";


import { registerSchema, type RegisterInput } from "@/app/lib/validations/auth.schema";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", image: "", password: "", confirmPassword: "" },
  });

  async function onSubmit(data: RegisterInput) {
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image || undefined,
    });

    if (error) {
      toast.error(error.message ?? "Registration failed. Please try again.");
      return;
    }

    toast.success("Account created successfully!");
    router.push("/dashboard");
    router.refresh();
  }

  async function handleGoogleSignUp() {
    setIsGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch {
      toast.error("Google sign-up failed. Please try again.");
      setIsGoogleLoading(false);
    }
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-12"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div
        className="card w-full max-w-md p-8"
        style={{ backgroundColor: "var(--bg-surface)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-accent)",
            }}
          >
            SP
          </span>
          <span
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            SkillPilot
          </span>
        </Link>

        <h1
          className="text-2xl font-semibold text-center"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          Create your account
        </h1>
        <p
          className="mt-1.5 text-sm text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          Start building your personalized learning blueprints today
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-6 flex flex-col gap-4"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Full name
            </label>
            <div className="relative">
              <FiUser
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Rahim Ahmed"
                className="w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: errors.name ? "#ef4444" : "var(--border-default)",
                  color: "var(--text-primary)",
                }}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Email address
            </label>
            <div className="relative">
              <FiMail
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: errors.email ? "#ef4444" : "var(--border-default)",
                  color: "var(--text-primary)",
                }}
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Profile Image URL (optional) */}
          <div>
            <label
              htmlFor="image"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Profile image URL{" "}
              <span style={{ color: "var(--text-secondary)" }}>(optional)</span>
            </label>
            <div className="relative">
              <FiImage
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                id="image"
                type="url"
                autoComplete="off"
                placeholder="https://example.com/your-photo.jpg"
                className="w-full rounded-lg border py-2.5 pl-10 pr-3 text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: errors.image ? "#ef4444" : "var(--border-default)",
                  color: "var(--text-primary)",
                }}
                {...register("image")}
              />
            </div>
            {errors.image && (
              <p className="mt-1 text-xs text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Password
            </label>
            <div className="relative">
              <FiLock
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 8 characters, 1 uppercase, 1 number"
                className="w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: errors.password ? "#ef4444" : "var(--border-default)",
                  color: "var(--text-primary)",
                }}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Confirm password
            </label>
            <div className="relative">
              <FiLock
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                className="w-full rounded-lg border py-2.5 pl-10 pr-10 text-sm outline-none transition-colors"
                style={{
                  backgroundColor: "var(--bg-surface-raised)",
                  borderColor: errors.confirmPassword ? "#ef4444" : "var(--border-default)",
                  color: "var(--text-primary)",
                }}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting && <FiLoader className="animate-spin" size={16} />}
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1" style={{ backgroundColor: "var(--border-default)" }} />
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            or
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "var(--border-default)" }} />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={isGoogleLoading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-colors disabled:opacity-60"
          style={{
            borderColor: "var(--border-default)",
            color: "var(--text-primary)",
            backgroundColor: "var(--bg-surface-raised)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <p
          className="mt-6 text-center text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Already have an account?{" "}
          <Link href="/login" className="font-medium" style={{ color: "var(--brand-primary)" }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}