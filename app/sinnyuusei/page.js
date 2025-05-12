'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../contact/contact.module.css';

export default function ShinnyuuseiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'メールアドレスを正しく入力してください';
    }
    
    if (!formData.message) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = '同意してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // FormRunのAPIを使用した送信処理
      const response = await fetch('https://form.run/api/v1/r/cfoq634yihhyltqm5fx8unkw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'お名前': formData.name,
          'メールアドレス': formData.email,
          'お問い合わせ': formData.message,
          '個人情報利用同意': formData.privacy ? '同意する' : ''
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          privacy: false
        });
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('送信に失敗しました。後でもう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="pt-5">
        <h1>
          <Image 
            className="w-full" 
            src="/images/top2.png" 
            alt="Nociws"
            width={1200}
            height={600}
            priority
          />
        </h1>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">紹介動画</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <iframe 
          className="w-full p-1 pb-2" 
          height="252" 
          src="https://www.youtube.com/embed/6fnkzvO_w1A" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <iframe 
          className="w-full p-1 py-4" 
          height="252" 
          src="https://www.youtube.com/embed/mzI10isQcJg" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">部員募集中</h2>
      </div>

      <div className="py-3">
        <p className="tenmincho wordstyle">
          Nociws（ノチウス）ではロケットを作っています。<br />
          大学で勉強して得られること、成長できること、たくさんあります。<br />
          でも、手を動かして実践することもとても大切なことです。<br />
          特に個人ではなくチームでものづくりをできる場所は大学にはあまりありません。<br />
          なんでも、まずは手を動かして作ってみる。<br />
          できなければ、勉強すればいい、仲間と協力すればいい、よく知っている人に聞いてみればいい。<br />
          一緒にロケットを作って打ち上げてみませんか？
        </p>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">前期の活動</h2>
      </div>

      <div className="py-3">
        <p className="tenmincho wordstyle">
          前期はオンラインでの講習を行いますので、現在北見にいない方でも活動可能です。<br />
          　・小型のモデルロケット（火薬エンジンを使うロケット）の設計<br />
          　・3D CAD（図面をPCで描くツール）の使い方<br />
          　・プログラミング<br />
          　・電子工作<br />
          　・高圧ガス配管<br />
          などの内容を予定しています。<br />
          上に書いたようなことについて全く知識のない方でも大丈夫！そのための講習です。<br />
          Nociwsはまだ創設３年目、現在の部員も初めは全くの素人ばかりでした。<br />
          ロケットを作ったことのある人なんてほとんどいないですよね？みんな初めてのチャレンジです。<br />
          <br />
          後期からは本格的にハイブリッドロケットの製作に参加していただきます。
        </p>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">打ち上げ実験・燃焼実験</h2>
      </div>

      <div className="py-3">
        <p className="tenmincho wordstyle">
          Nociwsでは一つの目標として秋田県で毎年開かれる能代宇宙イベントに参加しています。<br />
          この能代宇宙イベントには全国から学生が集まり、ハイブリッドロケットやモデルロケットの共同打ち上げ実験が行われます。<br />
          また、道内でロケットを作っている企業にお邪魔して、燃焼実験や打ち上げ実験も行います。<br />
          全国の大学生や企業のプロの方と交流できる貴重な機会です。
        </p>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">詳細</h2>
      </div>

      <div className="py-3">
        <p className="tenmincho wordstyle">
          部員数：10名（女子もいます！）<br />
          活動場所：主にA102教室<br />
          活動日時：月曜18：10からミーティングを行っています。<br />
          　　　　　実際の設計・製作作業は各班ごとに集まって行っております。<br />
          部費：前期後期それぞれ1万円<br />
          　　　一年次前期は部費を集めておりません。<br />
          　　　別途、燃焼実験や共同実験に参加する場合は費用がかかります。（自由参加）<br />
        </p>
      </div>

      <div className="py-3">
        <h2 className="wordstyle tenmincho komidashi mt-3">入部方法</h2>
      </div>

      <div className="py-3">
        <p className="tenmincho wordstyle">
          下のフォームに入力いただくか、twitterのDMでご連絡ください。<br />
          入部の希望ではなくても、気軽に何でもお聞きください。<br />
          いつでも辞められるので、まずは気軽に入って頂ければ。
        </p>
        <div>
          <a href="https://twitter.com/KIT_Nociws">
            <Image 
              className="w-1/4" 
              src="/images/twitter.png" 
              alt="twitter"
              width={400}
              height={100}
            />
          </a>
        </div>
      </div>

      <div className="py-3">
        <h2 className="w-full wordstyle tenmincho komidashi mt-3">お問い合わせフォーム</h2>
      </div>

      {submitSuccess ? (
        <div className="px-5 py-3 bg-green-100 border border-green-400 text-green-700 rounded mb-4">
          お問い合わせありがとうございます。メッセージが送信されました。
        </div>
      ) : (
        <form className={styles.formrun} onSubmit={handleSubmit}>
          <div>
            <label>お名前</label>
            <input 
              name="name" 
              type="text" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label>メールアドレス</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          
          <div>
            <label>お問い合わせ内容</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <div className="text-red-500">{errors.message}</div>}
          </div>
          
          <div>
            <label>
              <input 
                type="checkbox" 
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
              />
              個人情報利用同意 [必須]
            </label>
            {errors.privacy && <div className="text-red-500">{errors.privacy}</div>}
          </div>
          
          <button 
            className={styles.button} 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信'}
          </button>
        </form>
      )}
    </div>
  );
}
