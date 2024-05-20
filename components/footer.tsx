export function Footer() {
  const date = new Date();
  return (
    <div className="flex flex-col justify-center items-center p-5 border-t-2 dark:bg-gray-950 bg-gray-200">
      <p className="text-xs text-muted-foreground">
        {" "}
        &copy; {date.getFullYear()} جميع الحقوق محفوظة - فيزو لصناعة وتجارة
        الألبسة
      </p>
    </div>
  );
}
