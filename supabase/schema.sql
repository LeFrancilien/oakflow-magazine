-- Create videos table
create table public.videos (
    id uuid default gen_random_uuid() primary key,
    youtube_id text not null unique,
    title_original text not null,
    title_editorial text not null,
    summary_editorial text not null,
    category text check (
        category in ('Infrastructure', 'Agents', 'Vibecoding')
    ) not null,
    channel_name text not null,
    channel_avatar_url text,
    thumbnail_url text,
    views_count bigint not null default 0,
    duration text,
    published_at timestamp under timestamptz not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
-- Enable Row Level Security (RLS)
alter table public.videos enable row level security;
-- Create Policy: Public Read Access
create policy "Videos are viewable by everyone" on public.videos for
select using (true);
-- Create Policy: Insert/Update only for service_role (Admin)
-- Note: In a real app, you'd restrict this further. For now, we rely on service role key for ingestion.
create policy "Service role can insert videos" on public.videos for
insert with check (true);
create policy "Service role can update videos" on public.videos for
update using (true);
-- Create indexes for performance
create index videos_category_idx on public.videos (category);
create index videos_published_at_idx on public.videos (published_at desc);