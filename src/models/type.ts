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
    anytimeMaxDocumentNum: number;
    currentSubscriptionCycleMaxDocumentNum: number;
    currentSubscriptionCycleUploadedDocumentNum: number;
    currentUploadedDocumentNum: number;
  };
}
