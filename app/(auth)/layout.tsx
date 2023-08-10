export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-r from-violet-300 to-orange-400">

    {children}
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-4 text-md text-sky-100">E-COMMERCE ADMIN PANEL </div>
    </div>
  );
}
