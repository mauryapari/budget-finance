
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="container mx-auto flex justify-center">
        {children}
      </div>
    </div>
)};
