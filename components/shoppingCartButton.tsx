import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";

export function ShoppingCartButton() {
  return (
    <Link href="/cart">
      <Badge className="relative -ml-2 ">1</Badge>
      <Button variant="outline" size="icon">
        <ShoppingCart />
      </Button>
    </Link>
  );
}
