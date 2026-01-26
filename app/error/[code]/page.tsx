import { notFound } from "next/navigation";

export default function ErrorCodePage({ params }: { params: { code: string } }) {
  // Only allow known error codes, otherwise 404
  const allowed = ["400","401","403","404","405","408","409","500","501","502","503","504","509"];
  if (!allowed.includes(params.code)) notFound();
  // Throw error with status for error.tsx
  const err: any = new Error("Custom error page");
  err.status = Number(params.code);
  throw err;
}
