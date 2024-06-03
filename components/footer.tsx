export function Footer() {
  const date = new Date();
  return (
    <div className="mt-9 flex flex-col items-center justify-center border-t-2 bg-gray-200 p-5 dark:bg-gray-950">
      <p className="text-xs text-muted-foreground">
        {" "}
        &copy; {date.getFullYear()} جميع الحقوق محفوظة - فيزو لصناعة وتجارة
        الألبسة
      </p>
    </div>
  );
}
