import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-16">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      <LinkList links={links} />
    </main>
  );
}
