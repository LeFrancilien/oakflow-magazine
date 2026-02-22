export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: Category;
    duration: string;
    views: string;
    publishedDate: string;
    author: {
        name: string;
        avatar: string;
    };
    tags: string[];
    featured?: boolean;
    videoId?: string;
    keyPoints?: string[];
}

export type Category = 'Business & Infra IA' | 'Développement' | 'Automatisation' | 'All';

export interface SubscriptionFormData {
    email: string;
    name?: string;
}
