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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-wrap">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image alt={title} src={image} width={300} height={200} />
      </CardContent>
      <CardFooter>
        <Button>أضف إلى السلة</Button>
      </CardFooter>
    </Card>
  );
}
