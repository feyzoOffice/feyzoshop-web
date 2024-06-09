import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getColors = async () => {
  try {
    let { data: colors } = await supabase.from("colors").select("*");

    return { data: colors };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
