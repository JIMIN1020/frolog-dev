export interface ReviewData {
  bookId: string;
  userId: string;
  rating: number;
  oneLiner: string;
  review: string;
  prosTags: string[];
  consTags: string[];
}
