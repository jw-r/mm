export interface Category {
  id: number;
  name: string;
}

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface TodayQuestion {
  id: number;
  question: string;
  answer: string;
  category: Category;
  document: {
    id: number;
    name: string;
  };
}

export interface User {
  email: string;
  subscription: {
    plan: 'PRO' | 'FREE';
    purchasedDate: string;
    expireDate: string;
  };
  documentUsage: {
    currentPossessDocumentNum: number;
    currentSubscriptionCycleUploadedDocumentNum: number;
    freePlanMaxPossessDocumentNum: number;
    freePlanSubscriptionMaxUploadDocumentNum: number;
    proPlanMaxPossessDocumentNum: number;
    proPlanSubscriptionMaxUploadDocumentNum: number;
  };
}
