"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/lib/redux/hooks";

export function ShoppingCartButton() {
  const state = useAppSelector((store) => store.cart);

  return (
    <Link href="/cart">
      <Button variant="outline" size="icon">
        {state.cart.length > 0 && (
          <Badge className="relative -ml-2">
            {state.cart.length > 9 ? "+9" : state.cart.length}
          </Badge>
        )}
        <ShoppingCart />
      </Button>
    </Link>
  );
}
