import TestimonialsSection from "./TestimonialsSection";
import { getFeaturedReviews } from "@/app/lib/actions/review.actions";

export default async function TestimonialsWrapper() {
  const reviews = await getFeaturedReviews();
  return <TestimonialsSection reviews={reviews} />;
}