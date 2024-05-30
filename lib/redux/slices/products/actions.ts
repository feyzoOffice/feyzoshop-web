import { createClient } from "@/supabase/client";

const supabase = createClient();

export type Options = {
  category_id: number | undefined;
  class_id: number | undefined;
  colors: number[];
  sizes: number[];
  search: string;
  limit: number | undefined;
};

export const getProducts = async (options?: Options) => {
  try {
    let query = supabase
      .from("products")
      .select("*, categories(title), classes(title)");
    // query = options?.locale
    //   ? query.match({ locale: options.locale })
    //   : query.match({}).is("locale", null);
    if (options?.category_id) {
      query = query.eq("category_id", options.category_id);
    }
    if (options?.class_id) {
      query = query.eq("class_id", options.class_id);
    }
    if (options?.colors) {
      query = query.contains("colors", options.colors);
    }
    if (options?.sizes) {
      query = query.contains("sizes", options.sizes);
    }
    // execute the query
    const { data: products, error } = await query.limit(options?.limit || 9);

    const { data: imagesData } = await supabase.from("images").select("*");
    // const { data: colorsData } = await supabase.from("colors").select("*");
    // const { data: sizesData } = await supabase.from("sizes").select("*");

    const productsWithNestedImages = products?.map((product) => {
      const images = imagesData?.filter((image) =>
        product.images.includes(image.id)
      );
      // const colors = colorsData?.filter((color) =>
      //   product.colors.includes(color.id)
      // );
      // const sizes = sizesData?.filter((size) =>
      //   product.sizes.includes(size.id)
      // );
      return {
        ...product,
        images,
        // colors,
        // sizes,
      };
    });
    return { data: productsWithNestedImages };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
