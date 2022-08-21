import Link from "next/link";
import { allStories, Story } from "contentlayer/generated";

export async function getStaticProps() {
  const stories: Story[] = allStories.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  return { props: { stories } };
}

function StoryCard(story: Story) {
  const date = new Date(story.date).toLocaleString("tr-TR");

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={story.url}>
          <a className="text-blue-700 hover:text-blue-900">{story.title}</a>
        </Link>
      </h2>
      <time dateTime={date} className="block text-xs text-gray-600 mb-2">
        {date}
      </time>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: story.body.html }}
      />
    </div>
  );
}

export default function Home({ stories }: { stories: Story[] }) {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Yazılar</h1>

      {stories.map((story, idx) => (
        <StoryCard key={idx} {...story} />
      ))}
    </div>
  );
}
