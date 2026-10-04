type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-gray-300 px-4 py-4 text-center font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
    >
      {title}
    </a>
  );
}
