export async function POST(request) {
  try {
    const data = await request.json();
    
    // バリデーション
    const { name, email, subject, message } = data;
    
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: '必須項目が不足しています' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // 実際の環境ではここにメール送信処理を追加します
    // 例: nodemailerやSendGridなどのメール送信サービスを使用
    
    /*
    // nodemailerを使用した例:
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    
    await transporter.sendMail({
      from: `"Nociws Contact" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      subject: `お問い合わせ: ${subject}`,
      text: `名前: ${name}\nメールアドレス: ${email}\n\n${message}`,
      html: `
        <div>
          <h3>Nociwsへのお問い合わせ</h3>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>件名:</strong> ${subject}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });
    */
    
    // 開発用にコンソールに出力
    console.log('お問い合わせを受信しました:', data);
    
    // 成功レスポンス
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'お問い合わせを受け付けました。' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('お問い合わせ処理中にエラーが発生しました:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'サーバーエラーが発生しました。しばらく経ってからもう一度お試しください。'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
