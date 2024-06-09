import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getCategories = async () => {
  try {
    let { data: categories } = await supabase.from("categories").select("*");

    return { data: categories };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
