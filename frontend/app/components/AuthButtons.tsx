import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex space-x-4 justify-center">
      <Link href="/register" passHref>
        <button className="btn btn-primary">Register</button>
      </Link>
      <button className="btn btn-outline btn-primary">Login</button>
    </div>
  );
}
