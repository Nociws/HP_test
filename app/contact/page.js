import ContactForm from '@/components/ui/ContactForm';

export const metadata = {
  title: 'お問い合わせ | Nociws',
  description: 'Nociwsへのお問い合わせはこちらからお願いします。見学や入会に関するご質問を受け付けています。',
};

export default function ContactPage() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-lg text-gray-600">
            見学や入会に関するお問い合わせはこちらからお願いします。
            <br />できるだけ早くご返信いたします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">連絡先情報</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">住所</h3>
                <p className="text-gray-600">
                  〒123-4567<br />
                  東京都○○区××1-2-3<br />
                  ○○大学 ××学部
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">メール</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">活動日</h3>
                <p className="text-gray-600">
                  平日: 16:00 - 20:00<br />
                  土曜: 10:00 - 18:00<br />
                  日曜: 休み
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
