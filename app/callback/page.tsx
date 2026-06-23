'use client';

import { useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const params = useSearchParams();

  return (
    <pre>
      {params.get('code')}
    </pre>
  );
}