import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getProducts = async () => {
  try {
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*, categories(title), classes(title)");

    const { data: imagesData, error: imagesError } = await supabase
      .from("images")
      .select("*");
    const { data: colorsData, error: colorsError } = await supabase
      .from("colors")
      .select("*");
    const { data: sizesData, error: sizesError } = await supabase
      .from("sizes")
      .select("*");
    const productsWithNestedImages = products?.map((product) => {
      const images = imagesData?.filter((image) =>
        product.images.includes(image.id)
      );
      const colors = colorsData?.filter((color) =>
        product.colors.includes(color.id)
      );
      const sizes = sizesData?.filter((size) =>
        product.sizes.includes(size.id)
      );
      return {
        ...product,
        images,
        colors,
        sizes,
      };
    });
    return { data: productsWithNestedImages };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
