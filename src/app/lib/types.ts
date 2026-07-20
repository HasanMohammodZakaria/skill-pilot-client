
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}
export interface Blueprint {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedDuration: string;
  skillTags: string[];
  learningGoal: string;
  resourceLink?: string;
  coverImageUrl?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}


export interface AdminStats {
  totalUsers: number;
  totalBlueprints: number;
  categoryDistribution: { _id: string; count: number }[];
  difficultyDistribution: { _id: string; count: number }[];
}

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  image?: string;
  createdAt: string;
}
export interface Review {
  _id: string;
  blueprintId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewsResponse {
  success: boolean;
  data: Review[];
  meta: {
    averageRating: number;
    totalReviews: number;
  };
}

export interface BlueprintListResponse {
  success: boolean;
  data: Blueprint[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
export interface BlueprintFiltersResponse {
  success: boolean;
  data: {
    categories: { value: string; count: number }[];
    difficulties: { value: string; count: number }[];
  };
}