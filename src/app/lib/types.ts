export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
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

// ---- API response wrapper ----
export interface ApiSuccess<T> {
  success: true;
  data: T;
}

// ---- Roadmap ----
export interface RoadmapStep {
  step: number;
  title: string;
  description: string;
}

// ---- AI: Generate Blueprint ----
export interface AIGenerateBlueprintPayload {
  targetRole: string;
  currentLevel: DifficultyLevel;
  timeCommitment: string;
  focusAreas?: string[];
}

export interface AIGeneratedBlueprint {
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  skillTags: string[];
  estimatedDuration: string;
  learningGoal: string;
  roadmap: RoadmapStep[];
}

export interface PlatformStats {
  totalBlueprints: number;
  totalUsers: number;
  totalReviews: number;
}

export interface Review {
  _id: string;
  userName: string;
  userImageUrl?: string;
  rating: number;
  comment: string;
  blueprintTitle?: string;
  createdAt: string;
}

// ---- AI: Recommendation ----
export interface AIRecommendationPayload {
  goal: string;
  existingSkills?: string[];
  preferredCategory?: string;
  difficulty?: DifficultyLevel;
}

export interface AIRecommendation {
  recommendedCategories: string[];
  reasoning: string;
  suggestedNextSkills: string[];
}