import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'ブログ | Nociws',
  description: 'Nociwsの活動ブログです。ロケットや探査機の開発状況、大会参加レポートなどを掲載しています。',
};

export default function BlogPage() {
  const posts = getAllPosts();

  // 記事がない場合のメッセージ
  if (posts.length === 0) {
    return (
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">活動ブログ</h1>
          <p className="text-lg text-gray-600 mb-8">
            現在、ブログ記事はありません。近日中に公開予定です。
          </p>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">活動ブログ</h1>
          <p className="text-lg text-gray-600">
            サークルの活動やプロジェクトの進捗状況を発信しています
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src={post.frontMatter.coverImage || '/images/blog-placeholder.jpg'}
                  alt={post.frontMatter.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.frontMatter.date ? (
                    format(new Date(post.frontMatter.date), 'yyyy年MM月dd日')
                  ) : (
                    '日付なし'
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                  <Link href={`/blog/${post.slug}`}>
                    {post.frontMatter.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.frontMatter.excerpt}
                </p>
                <div className="flex items-center">
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
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {(post.frontMatter.author && post.frontMatter.author.name) 
                        ? post.frontMatter.author.name 
                        : '著者不明'
                      }
                    </p>
                    <p className="text-sm text-gray-500">
                      {(post.frontMatter.author && post.frontMatter.author.role) 
                        ? post.frontMatter.author.role 
                        : ''
                      }
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
