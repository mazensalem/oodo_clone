import Link from "next/link";
export default function AppList() {
  return (
    <div className="absolute left-2/4 top-1/4 w-2/4 transform -translate-x-2/4 pl-16 grid grid-cols-4 gap-3">
      {/* App 1 */}
      <Link href="/">
        <a className="block cursor-pointer group w-max">
          <img
            className="w-20 h-20 group-hover:shadow-lg rounded-md"
            src="/applogo.png"
            alt="app"
          />
          <div className="mx-auto w-max mt-1">Name</div>
        </a>
      </Link>
    </div>
  );
}
