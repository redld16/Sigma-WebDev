import error from "@/app/error";

export default async function Page({ params }) {
  console.log(params);
  const { slug } = await params;
  // fetch blog post by slug
  return <div>i am about page check console</div>;
}
