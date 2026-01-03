import Link from "next/link";
import { UserButton } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

export async function NavBar() {
  const user = await stackServerApp.getUser();
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-gray-900"
          >
            Wiki GrandMaster
          </Link>
        </div>
        <NavigationMenu>
          {user ? (
            <NavigationMenuItem>
              <UserButton />
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <Button asChild variant="outline">
                  <Link href="/handler/sign-in">Sign In</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button asChild>
                  <Link href="/handler/sign-up">Sign Up</Link>
                </Button>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenu>
      </div>
    </nav>
  );
}
