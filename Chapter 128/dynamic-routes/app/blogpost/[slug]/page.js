import error from "@/app/error";

export default async function Page({ params }) {
  const { slug } = await params;
  // fetch blog post by slug
  let languages = ["python", "java", "cpp", "cs", "javascript"];
  if (languages.includes(params.slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
}
