import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getSizes = async () => {
  try {
    let { data: sizes } = await supabase.from("sizes").select("*");

    return { data: sizes };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
