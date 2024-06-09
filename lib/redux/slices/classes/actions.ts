import { createClient } from "@/supabase/client";

const supabase = createClient();

export const getClasses = async () => {
  try {
    let { data: classes } = await supabase.from("classes").select("*");

    return { data: classes };
  } catch (error) {
    console.log(error);
    throw Error();
  }
};
