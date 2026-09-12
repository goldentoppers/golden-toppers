import React from "react";
import { PageHeading } from "../components/PageHeading";

type BlogPost = {
    id: number;
    title: string;
    summary: string;
    details: string;
    mediaType: "image" | "video";
    mediaSrc: string;
    mediaAlt?: string;
    date: string;
};

const posts: BlogPost[] = [
    {
        id: 1,
        title: "My dogs are loving the whole-food topper routine",
        summary: "A simple evening ritual that made mealtime feel more intentional.",
        details:
            "I started mixing a few whole ingredients into their bowls and noticed how much more engaged they were at dinner. The routine became part of our evenings, and it felt good to know I was nourishing them with real food.",
        mediaType: "image",
        mediaSrc:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
        mediaAlt: "Dog sitting next to a bowl of fresh food",
        date: "May 2026",
    },
    {
        id: 2,
        title: "A quick TikTok-style kitchen moment",
        summary: "A 15 second look at how I prep their fresh topper mix.",
        details:
            "I kept it simple: a little prep, a few ingredient checks, and a final bowl mix. It became one of the easiest ways to add freshness without overcomplicating the routine.",
        mediaType: "video",
        mediaSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
        mediaAlt: "Short video of preparing dog food",
        date: "June 2026",
    },
    {
        id: 3,
        title: "Why I started feeding my dogs whole food",
        summary: "A personal journey toward a simpler, more honest feeding routine.",
        details:
            "I wanted to feel more connected to what my dogs were eating. Whole food gave me a way to add color, texture, and variety while staying mindful of safe ingredients and balanced portions.",
        mediaType: "image",
        mediaSrc:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
        mediaAlt: "Happy dog sitting outdoors",
        date: "July 2026",
    },
];

export const Blog: React.FC = () => {
    return (
        <main className="mx-auto w-full max-w-4xl pb-20" aria-labelledby="blog-title">
            <div
                className="flex flex-col gap-8 rounded-2xl border border-stone-900/10 bg-white/70 px-4
                    py-8 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-10"
            >
                <PageHeading
                    title="My Whole-Food Dog Journey"
                    subtitle="Blog"
                    headingId="blog-title"
                    className="pt-4 md:pt-0"
                    details={() => (
                        <p>
                            Real stories, real ingredients, and small daily rituals that made feeding my dogs feel more intentional and nourishing.
                        </p>
                    )}
                />

                <section className="space-y-8">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="overflow-hidden rounded-2xl border border-stone-900/10 bg-white/70 shadow-[0_8px_26px_rgba(28,25,23,0.04)]"
                    >
                        <div className="border-b border-stone-900/10 bg-stone-50/60 px-5 py-3 text-[10px] font-black tracking-[0.22em] text-stone-500 uppercase">
                            {post.date}
                        </div>

                        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                            <div className="min-h-[260px] bg-stone-100">
                                {post.mediaType === "image" ? (
                                    <img
                                        src={post.mediaSrc}
                                        alt={post.mediaAlt ?? post.title}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <video
                                        src={post.mediaSrc}
                                        controls
                                        className="h-full w-full object-cover"
                                        aria-label={post.mediaAlt ?? post.title}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
                                <h2 className="font-serif text-3xl leading-tight font-black text-stone-900">
                                    {post.title}
                                </h2>
                                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                                    {post.summary}
                                </p>
                                <p className="text-[14px] leading-relaxed text-stone-700">{post.details}</p>
                            </div>
                        </div>
                    </article>
                ))}
                </section>
            </div>
        </main>
    );
};
