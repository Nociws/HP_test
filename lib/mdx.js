import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ブログ記事が格納されているディレクトリのパス
const postsDirectory = path.join(process.cwd(), 'content/blog');

// ディレクトリが存在しない場合は作成する
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// スラグ（URLのパス部分）を取得する
export function getPostSlugs() {
  try {
    ensureDirectoryExists(postsDirectory);
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
  } catch (error) {
    console.error('Error reading post directory:', error);
    return [];
  }
}

// 特定のスラグに対応する記事を取得する
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  try {
    // ファイルが存在しない場合は、サンプル記事を作成
    if (!fs.existsSync(fullPath)) {
      ensureDirectoryExists(path.dirname(fullPath));
      
      // サンプル記事のフロントマター
      const sampleFrontMatter = `---
title: '${realSlug.replace(/-/g, ' ')} - サンプル記事'
date: '${new Date().toISOString()}'
excerpt: 'これはサンプル記事です。実際の記事に置き換えてください。'
coverImage: '/images/blog-placeholder.jpg'
author:
  name: 'Nociwsメンバー'
  role: '管理者'
  avatar: '/images/avatar-placeholder.jpg'
categories: ['サンプル']
---

# ${realSlug.replace(/-/g, ' ')} - サンプル記事

これはサンプル記事です。実際の記事コンテンツに置き換えてください。
`;
      
      fs.writeFileSync(fullPath, sampleFrontMatter);
      console.log(`Created sample post: ${fullPath}`);
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // フロントマターの各項目にデフォルト値を設定
    return { 
      slug: realSlug, 
      frontMatter: { 
        title: data.title || `${realSlug} - 記事`,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || 'この記事の説明はありません。',
        coverImage: data.coverImage || '/images/blog-placeholder.jpg',
        author: data.author || {
          name: 'Nociwsメンバー',
          role: '',
          avatar: '/images/avatar-placeholder.jpg'
        },
        categories: data.categories || []
      },
      content 
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    
    // エラー時はフォールバックの記事情報を返す
    return { 
      slug: realSlug, 
      frontMatter: { 
        title: `${realSlug} - 記事が見つかりません`,
        date: new Date().toISOString(),
        excerpt: 'この記事は読み込めませんでした。',
        coverImage: '/images/blog-placeholder.jpg',
        author: {
          name: 'システム',
          role: '',
          avatar: '/images/avatar-placeholder.jpg'
        },
        categories: []
      }, 
      content: `# 記事が見つかりません\n\n${realSlug} という記事は見つかりませんでした。` 
    };
  }
}

// すべての記事を取得する
export function getAllPosts() {
  try {
    const slugs = getPostSlugs();
    
    // スラグが空の場合は、サンプル記事を作成
    if (slugs.length === 0) {
      // high-altitude-rocket-launch.mdx をサンプルとして作成
      getPostBySlug('high-altitude-rocket-launch');
      return [getPostBySlug('high-altitude-rocket-launch')];
    }
    
    const posts = slugs
      .map(slug => getPostBySlug(slug))
      .sort((post1, post2) => {
        const date1 = new Date(post1.frontMatter.date);
        const date2 = new Date(post2.frontMatter.date);
        return date2 - date1; // 新しい記事から順に並べる
      });
    
    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    // エラー時は空の配列を返す
    return [];
  }
}
