import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function ShoppingCartButton() {
  return (
    <Link href="/cart">
      <Button variant="outline" size="icon">
        <ShoppingCart />
      </Button>
    </Link>
  );
}
