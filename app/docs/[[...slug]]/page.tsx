
import DocsBreadcrumb from '@/components/docs-breadcrumb';
import Pagination from '@/components/pagination';
import Toc from '@/components/toc';
import { page_routes } from '@/lib/routes-config';
import { notFound } from 'next/navigation';
import { getCompiledDocsForSlug, getDocFrontmatter } from '@/lib/markdown';
import { Typography } from '@/components/typography';
import Quiz from '@/components/ui/quiz';
import quizArray from '@/store/questions';
type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;
  // console.log('🚀 ~ DocsPage ~ slug:', slug);

  const pathName = slug.join('/');

  // Check if the last slug segment ends with '-quiz'
  const isQuizPage = slug[slug.length - 1]?.endsWith('-quiz');


  if (isQuizPage) {
    const quizData = quizArray.find((q) => q.location === slug[0]);

    if (!quizData) notFound();

    return <Quiz quizData={quizData} />;
  }

  const res = await getCompiledDocsForSlug(pathName);
  if (!res) notFound();

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="sm:text-3xl text-2xl !-mt-0.5">
              {res.frontmatter.title}
            </h1>
            <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
      </div>

      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [] } = params;

  const pathName = slug.join('/');

  const isQuizPage = slug[slug.length - 1]?.endsWith('-quiz');
  if (isQuizPage) {
    return {
      title: 'Quiz',
      description: 'This is a quiz page.',
    };
  }

  const res = await getDocFrontmatter(pathName);
  if (!res) return {};
  const { title, description } = res;

  return {
    title,
    description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split('/').slice(1),
  }));
}
