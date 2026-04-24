import { useState } from 'react';

const BOT_TOKEN = '8664236528:AAHYozJSlLSJ1_nn-cktvcPRknQ4b4dif7I';
const CHAT_ID = '5414733748';

export const useTelegramBot = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (text: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (response.ok) {
        setSuccess(true);
        return true;
      } else {
        throw new Error("Xabar yuborishda xatolik yuz berdi");
      }
    } catch (err: any) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error, success, setSuccess };
};