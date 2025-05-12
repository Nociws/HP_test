'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const error = searchParams.get('error');
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  
  useEffect(() => {
    // すでにログインしている場合はダッシュボードにリダイレクト
    if (status === 'authenticated') {
      router.push(callbackUrl);
    }
    
    if (error === 'CredentialsSignin') {
      setFormError('ユーザー名またはパスワードが正しくありません。');
    }
  }, [status, router, callbackUrl, error]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setFormError('すべての項目を入力してください。');
      return;
    }
    
    setIsLoading(true);
    setFormError('');
    
    try {
      const result = await signIn('credentials', {
        username: formData.username,
        password: formData.password,
        redirect: false,
      });
      
      if (result?.error) {
        setFormError('ユーザー名またはパスワードが正しくありません。');
      } else {
        // ログイン成功、リダイレクト
        router.push(callbackUrl);
      }
    } catch (error) {
      setFormError('ログイン中にエラーが発生しました。後でもう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">ロード中...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ログイン
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            サークルメンバー専用ページにアクセスするには、ログインしてください。
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">ユーザー名</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="ユーザー名"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">パスワード</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="パスワード"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {formError && (
            <div className="text-red-500 text-sm text-center">
              {formError}
            </div>
          )}
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            <p className="text-gray-600">
              デモ用アカウント:<br />
              ユーザー名: admin, パスワード: password<br />
              または<br />
              ユーザー名: member, パスワード: password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}