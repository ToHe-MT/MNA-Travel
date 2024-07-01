import db from "$lib/server/db.js";

export const load = async ({ url, params }) => {
  try {
    const filterOther = {
      status: "public",
    };

    // if (url.searchParams.get('level_paket')) {
    // 	filter.level_paket = url.searchParams.get('level_paket');
    // }

    // if (url.searchParams.get('bandara')) {
    // 	filter.type_category = url.searchParams.get('bandara');
    // }

    // if (url.searchParams.get('category')) {
    // 	filter.type_category = url.searchParams.get('category');
    // }

    const blogCollection = db.collection("blog");
    const otherBlog = await blogCollection
      .aggregate([
        { $match: filterOther },
        {
          $project: {
            _id: 0,
            content_html: 0,
          },
        },
        // { $limit: 1 }
      ])
      .toArray();

    const filter = {
      slug: params.slug, // Assuming the correct param is `slug`
    };
    const blog = await blogCollection
      .aggregate([
        { $match: filter },
        {
          $project: {
            _id: 0,
          },
        },
        { $limit: 1 }, // Limit to 1 document to ensure you get a single result
      ])
      .toArray();

    if (blog.length > 0) {
      return { blog: blog[0] , otherBlog}; // Return the first element of the array if it exists
    } else {
      console.log("No blog found for the given slug.");
      return { blog: [], otherBlog }; // Return null if no blog is found
    }
  } catch (error) {
    console.error("Error loading data:", error);
    throw error;
  }
};