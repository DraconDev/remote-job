/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ziR24RttLyf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { saveEmail } from "@/utils/supabase/actions";

export default function Component() {
    return (
        <footer className="bg-muted py-16 border-t border-border/40">
            <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                    <Link
                        href="#"
                        className="flex items-center"
                        prefetch={false}
                    >
                        <MountainIcon className="h-6 w-6" />
                        <span className="ml-2 text-xl font-semibold">
                            Remote Work Nexus
                        </span>
                    </Link>
                    <p className="text-muted-foreground">
                        Empower your team to work from anywhere with our remote
                        work solutions.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                        Subscribe to our newsletter
                    </h3>
                    <form className="flex gap-2" action={saveEmail}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1"
                            name="email"
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                    <p className="text-sm text-muted-foreground">
                        Get the latest updates and tips for remote work.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <nav className="grid gap-2">
                        {/* <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            Pricing
                        </Link> */}
                        <a
                            href="mailto:remoteworknexus@gmail.com"
                            className="hover:underline"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
            <div className="container mt-10 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Remote Work Nexus. All rights reserved.
            </div>
        </footer>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
