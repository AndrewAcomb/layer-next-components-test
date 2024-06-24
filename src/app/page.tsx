import { LayerProvider } from '@layerfi/components'
import React from 'react';

export default function Home() {
  return (
    <LayerProvider
      businessId={process.env.NEXT_PUBLIC_BUSINESS_ID ?? ''}
      environment={process.env.NEXT_PUBLIC_ENVIRONMENT}
      appId={process.env.NEXT_PUBLIC_APP_ID}
      appSecret={process.env.NEXT_PUBLIC_APP_SECRET}
    >
      <>Howdy</>
    </LayerProvider>
  );
}
