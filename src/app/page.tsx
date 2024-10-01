'use client';
import Link from "next/link";
import "./globals.css";
import LoginForm from "./components/LoginForm";
export default function Login() {

  return (
    <div>
      <h1>Faça login</h1>
      <LoginForm />
    </div>
  );
}