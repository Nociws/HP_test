import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  return {
    title: `${post.frontMatter.title} | Nociwsブログ`,
    description: post.frontMatter.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  
  return (
    <div className="py-16 px-4 bg-gray-50">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-96 relative">
          <Image
            src={post.frontMatter.coverImage || '/images/blog-placeholder.jpg'}
            alt={post.frontMatter.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 mr-3">
              <Image
                src={
                  (post.frontMatter.author && post.frontMatter.author.avatar) 
                    ? post.frontMatter.author.avatar 
                    : '/images/avatar-placeholder.jpg'
                }
                alt={
                  (post.frontMatter.author && post.frontMatter.author.name) 
                    ? post.frontMatter.author.name 
                    : '著者'
                }
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {(post.frontMatter.author && post.frontMatter.author.name) 
                  ? post.frontMatter.author.name 
                  : '著者不明'
                }
              </p>
              <div className="text-sm text-gray-500">
                {(post.frontMatter.author && post.frontMatter.author.role) && (
                  <>
                    <span>{post.frontMatter.author.role}</span>
                    <span className="mx-1">•</span>
                  </>
                )}
                <time dateTime={post.frontMatter.date}>
                  {post.frontMatter.date 
                    ? format(new Date(post.frontMatter.date), 'yyyy年MM月dd日') 
                    : '日付なし'
                  }
                </time>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">カテゴリー: </span>
                {post.frontMatter.categories && post.frontMatter.categories.length > 0 ? (
                  post.frontMatter.categories.map((category, idx) => (
                    <span 
                      key={category} 
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mr-2 mb-2"
                    >
                      {category}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">未分類</span>
                )}
              </div>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                ← 記事一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
