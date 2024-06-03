"use client";
import { LucideTrash2, Plus, Minus, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  decrement,
  deleteItem,
  increment,
} from "@/lib/redux/slices/cart/cart-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((store) => store.cart);
  const cartItems = state.cart;

  const deleteHandler = (id: number) => {
    try {
      dispatch(deleteItem(id));
      toast({
        description: "تم الحذف بنجاح",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error,
      });
    }
  };
  const incrementHandler = (id: number) => {
    try {
      dispatch(increment(id));
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error,
      });
    }
  };
  const decrementHandler = (id: number) => {
    try {
      dispatch(decrement(id));
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error,
      });
    }
  };
  return (
    <div className="flex h-full flex-col items-center">
      <h1>سلة التسوق</h1>
      <div className="flex flex-col gap-3">
        {cartItems.length >= 1 ? (
          cartItems.map((i: any) => (
            <div
              key={i.id}
              className="flex items-center justify-between gap-3 border-b border-gray-400 p-3 dark:border-gray-800"
            >
              <div className="flex w-3/4 items-center justify-start gap-3 text-wrap">
                <div>
                  <Image src={i.image} width={50} height={50} alt={i.title} />
                </div>
                <h2>{i.title}</h2>
              </div>
              <Button
                onClick={() => incrementHandler(i.id)}
                variant="outline"
                size="icon"
              >
                <Plus />
              </Button>
              <div>{i.qty}</div>
              <Button
                onClick={() => decrementHandler(i.id)}
                variant="outline"
                size="icon"
              >
                <Minus />
              </Button>
              <Button
                onClick={() => deleteHandler(i.id)}
                variant="destructive"
                size="icon"
              >
                <LucideTrash2 />
              </Button>
            </div>
          ))
        ) : (
          <div className="flex h-screen flex-col items-center justify-center text-orange-400">
            <div className="flex flex-col items-center justify-center gap-5 rounded-md border border-orange-400 p-10">
              <ShieldAlert />
              السلة فارغة
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
