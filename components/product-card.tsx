import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cart/cart-slice";
import { toast } from "./ui/use-toast";

export function ProductCard({
  image,
  title,
  category,
  price,
  id,
}: {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}) {
  const dispatch = useAppDispatch();

  const AddToCartHandler = () => {
    try {
      const item = {
        id,
        image,
        price,
        qty: 1,
        title,
      };
      //

      dispatch(addToCart(item));

      toast({
        description: "تم الإضافة إلى السلة بنجاح",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error,
      });
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-wrap">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image alt={title} src={image} width={300} height={200} />
      </CardContent>
      <CardFooter>
        <Button onClick={AddToCartHandler}>أضف إلى السلة</Button>
      </CardFooter>
    </Card>
  );
}
